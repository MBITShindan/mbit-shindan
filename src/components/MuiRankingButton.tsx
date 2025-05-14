'use client'
import React, { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import { Button, ButtonProps } from "@mui/material";
import { v4 as uuidv4 } from 'uuid';

type MainButtonProps = ButtonProps & {
  children: React.ReactNode;
};

export const MuiRankingButton = ({ children, ...props }: MainButtonProps) => {
  const router = useRouter();
  const [canSubmit, setCanSubmit] = useState<boolean>(false);
  const [userId, setUserId] = useState<string>("");

  const handleClick = () => {
    router.push("/result");
  };

  useEffect(() => {
    const checkOrCreateUserId = async () => {
      let localUserId = localStorage.getItem("userId");

      const checkResultStatus = async (id: string) => {
        try {
          const response = await fetch(`https://btxzrvour5uubzpdyfs7nonphm0labwz.lambda-url.ap-northeast-1.on.aws/?userId=${id}`);
          if (response.status === 200) {
            const data = await response.json();
            setUserId(id);
            setCanSubmit(data.resultJudge === true);
          } else if (response.status === 404) {
            // データがない場合は新規IDを生成し保存＋登録
            const newId = uuidv4();
            localStorage.setItem("userId", newId);
            setUserId(newId);
            await registerUserId(newId);
            setCanSubmit(false);
          } else {
            console.error("想定外のエラー:", await response.text());
            setCanSubmit(false);
          }
        } catch (error) {
          console.error("APIエラー:", error);
          setCanSubmit(false);
        }
      };

      const registerUserId = async (id: string) => {
        try {
          const response = await fetch("https://pslak2jsxzxclxuou7sk37s7ia0jnegm.lambda-url.ap-northeast-1.on.aws/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ userId: id }),
          });

          const result = await response.json();
          if (!response.ok) {
            console.error("登録失敗:", result.message || result);
          } else {
            console.log("登録成功:", result.message);
          }
        } catch (error) {
          console.error("ユーザーID登録エラー:", error);
        }
      };

      if (localUserId) {
        await checkResultStatus(localUserId);
      } else {
        // 念のためなかった場合も生成処理に回す
        const newId = uuidv4();
        localStorage.setItem("userId", newId);
        setUserId(newId);
        await registerUserId(newId);
        setCanSubmit(false);
      }
    };

    checkOrCreateUserId();
  }, []);

  return (
    <Button
      color="primary"
      variant="contained"
      onClick={canSubmit ? handleClick : undefined}
      disabled={!canSubmit}
      {...props}
    >
      {children}
    </Button>
  );
};
