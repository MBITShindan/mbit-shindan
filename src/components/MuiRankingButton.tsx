'use client'
import React, { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import { Button } from "@mui/material";
import HistoryIcon from '@mui/icons-material/History';

type Props = {
  userId: string;
};

export const MuiRankingButton = ({ userId }: Props) => {
  const router = useRouter();
  const [canSubmit, setCanSubmit] = useState<boolean>(false);

  // 診断結果をチェック
  const checkStatus = async (id: string): Promise<boolean> => {
    try {
      const res = await fetch(`https://btxzrvour5uubzpdyfs7nonphm0labwz.lambda-url.ap-northeast-1.on.aws/?userId=${id}`);
      if (res.ok) {
        const data = await res.json();
        const resultFound = typeof data.resultJudge !== "undefined";
        setCanSubmit(data.resultJudge === true);
        return resultFound;
      } else {
        console.warn("診断チェック失敗（ステータスエラー）");
        return false;
      }
    } catch (e) {
      console.error("診断結果確認エラー:", e);
      return false;
    }
  };

  // ユーザーIDを登録
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

  useEffect(() => {
    const run = async () => {
      const hasResult = await checkStatus(userId);
      if (!hasResult) {
        // 診断結果が存在しなければ登録
        await registerUserId(userId);
      }
    };
    run();
  }, [userId]);

  const handleClick = () => {
    router.push("/result");
  };

  return (
    <Button
      color="primary"
      variant="contained"
      onClick={canSubmit ? handleClick : undefined}
      disabled={!canSubmit}
      sx={{
        width: "17rem",
        height: "4rem",
        fontSize: "1.6rem"
      }}
    >
      <HistoryIcon sx={{ fontSize: "3.1rem" }} />
      前回の診断結果
    </Button>
  );
};
