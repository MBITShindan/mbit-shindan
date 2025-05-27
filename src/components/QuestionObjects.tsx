"use client";
import { Dispatch, SetStateAction } from "react";
import { useEffect, useState } from "react";
import Image from 'next/image'
import { Grid } from "@mui/material";
import { questions } from "../mbtiQuestions";
import ModelButton from "./ModalButton";
import Sparkles from "./Sparkles";
import personalResultResponse from "../personalResultResponse";
import { useRouter } from 'next/navigation';
import { MessageModal } from "./MessageModal";
import { ENDPOINTS } from "../lib/constants";

type Position = {
    id: string;
    x: number;
    y: number;
};

// ランダムな位置を生成する関数
function getRandomPosition() {
    const x = Math.floor(Math.random() * 60) - 30; // -30 to 30
    const y = Math.floor(Math.random() * 60) - 30; // -30 to 30
    return { x, y };
}

type Props ={
    checkedList: string[];
    setCheckedList: Dispatch<SetStateAction<string[]>>;
}

export default function QuestionObjects(props: Props) {
    const {
        checkedList,
        setCheckedList
    } = props;

    const router = useRouter();

    const [ leftObjects, setLeftObjects ] = useState<(Position | null)[]>([]); // 画面に表示可能なオブジェクトの一覧
    const [ selectedId, setSelectedId ] = useState<string | null>(null); // 質問回答中のオブジェクトID
    const [ selectedIndex, setSelectedIndex ] = useState<number | null>(null); // 質問回答中のオブジェクトのインデックス
    const [ diagnosisResult, setDiagnosisResult ] = useState<string | null>(null); // 診断結果のタイプ

    // 押した感のアニメーションを再生するためのstate
    const [ isTapped, setIsTapped ] = useState<string | null>(null); // 押した感のアニメーションを再生するためのフラグ

    // cookie関係のstate
    const [ cookieCheckedList, setCookieCheckedList] = useState<string | null>(null); // cookieから取得した回答済みのオブジェクトID一覧
    const [ isReady, setIsReady ] = useState<true | false>(false); // オブジェクトの表示準備ができたかどうか
    const [ cookieValueBox, setCookieValueBox ] = useState<string | undefined>(undefined); // cookieの値
    const [ endDiagnosisProgress, setEndDiagnosisProgress ] = useState<boolean>(true);

    // cookieの取得
    useEffect(() => {
        const cookieCurrentProgress = document.cookie
            .split('; ')
            .find(row => row.startsWith('currentProgress='))
            ?.split('=')[1];
            setCookieValueBox(cookieCurrentProgress);
    },[])

    // cookieの値をデコードして、JSON.parseする
    useEffect(() => {
        if (cookieValueBox) {
            try {
                setCookieCheckedList(JSON.parse(decodeURIComponent(cookieValueBox)));
                console.log("cookieが取得できています")
            } catch (e) {
                console.error("クッキーのデコードに失敗:", e);
            }
        }
    },[cookieValueBox]);

    // cookieから取得した回答済みのオブジェクトID一覧をcheckedListにセット
    useEffect(() => {
        if (cookieCheckedList) {
            setCheckedList([...cookieCheckedList]);
            setIsReady(true);
        }
    }, [cookieCheckedList]);

    useEffect(() => {
    // 画面が表示されたときに、checkedListに含まれないオブジェクトをランダムに8個選択して表示する
        const objects: string[] = Object.keys(questions);
        const filtered = objects.filter(item => !checkedList.includes(item));
        const selected = filtered.sort(() => Math.random() - 0.5).slice(0, 8);
        // xとyの値をランダムに-30から30の範囲で生成
        const positions: Position[] = selected.map((object) => ({
            id: object,
            ...getRandomPosition()
        }));
        setLeftObjects(positions);
    }, [isReady]);

    useEffect(() => {
        const cookieProgress = document.cookie
            .split('; ')
            .find(row => row.startsWith('progress='))
            ?.split('=')[1];

        const progressObject = cookieProgress ? JSON.parse(decodeURIComponent(cookieProgress)) : null;

        if (progressObject) {
            console.log(progressObject);
            const resultType: string = personalResultResponse(progressObject);
            handleEndDiagnosis(resultType);
        }
    }, []);

    useEffect(() => {
        if(checkedList.length >= 10){
            setEndDiagnosisProgress(false);
            const cookieProgress = document.cookie
                .split('; ')
                .find(row => row.startsWith('progress='))
                ?.split('=')[1];

            const progressObject = cookieProgress ? JSON.parse(decodeURIComponent(cookieProgress)) : null;

            console.log(progressObject);

            const res:string = personalResultResponse(progressObject);
            setTimeout(()=>{
                            router.replace("/result/"+res);
            },2000)

        }
    }, [checkedList])

    // index番目のオブジェクトを変更する関数
    // ここでは、checkedListに含まれないオブジェクトをランダムに1個選択して追加する
    function updateObject(index: number, checkedId: string) {
        const newObjects = [...leftObjects];
        let newObject: Position | null = null;

        // ランダムに1個選択して置き換える
        // もし、追加できるオブジェクトがなければ、nullで置き換える
        const objects: string[] = Object.keys(questions);
        const leftList = newObjects.filter(item => item !== null).map(item => item?.id);
        const showedList = leftList.concat(checkedList); // すでに表示されたことのあるオブジェクトのリスト
        console.log("showedList", showedList);
        const filtered = objects.filter(item => !showedList.includes(item));
        if (filtered.length > 0) {
            const selected = filtered.sort(() => Math.random() - 0.5).slice(0, 1);
            newObject = {
                id: selected[0],
                ...getRandomPosition()
            };
        }

        newObjects[index] = newObject;
        setLeftObjects(newObjects);
        setCheckedList((prev) => [...prev, checkedId]);
        setSelectedIndex(null);
        // cookieに値を挿入(一週間後に消える)
        document.cookie = `currentProgress=${encodeURIComponent(JSON.stringify([...checkedList, checkedId]))}; path=/; max-age=604800`;
    }

    const getCookie = (name: string): string | undefined => {
        const value = document.cookie
            .split('; ')
            .find(row => row.startsWith(`${name}=`))
            ?.split('=')[1];
        return value;
    };

    //診断が10個終わったら既定のdbへデータを保存
    async function postResult(res:string){
        //userIdを取得
        const userId = getCookie('userId');
        const putResult = await fetch(ENDPOINTS.userresult,
                {
                    method:"POST",
                    headers:{"Content-Type":"application/json"},
                    body:JSON.stringify({
                                            userId:userId,
                                            resultType:res
                                        })
                }
            );
            console.log(putResult);
    }
    // クリックしたときの処理
    // ここで、押した感を演出するアニメーションを再生してから、selectedIdとselectedIndexを更新する
    function handleTap(index: number, checkedId: string){
        if(isTapped !== null) return; // 既にタップされている場合は何もしない
        setIsTapped(checkedId);
        setTimeout(() => {
            setIsTapped(null);
            setSelectedId(checkedId);
            setSelectedIndex(index);
        }, 250);
    };

    return (
        <>
            <Grid container spacing={0} style={{flexGrow: 1}}>
                {(leftObjects).map((object, index) => (
                    <Grid
                        key={index}
                        size={6}
                        className="p-6"
                    >
                        <div className="w-full h-full">
                            {object && (
                                <button
                                    className="relative w-full h-full"
                                    style={{
                                        marginLeft: `${object.x}px`,
                                        marginTop: `${object.y}px`
                                    }}
                                    onClick={()=>{
                                        if (endDiagnosisProgress) {
                                            handleTap(index, object.id);
                                        }
                                    }}
                                    disabled={!endDiagnosisProgress}
                                >
                                    <Image
                                        src={`/objects/${object.id}.png`}
                                        alt={object.id}
                                        fill
                                        sizes="50px"
                                        className={`animate-breathe ${isTapped === object.id ? "scale-90" : "scale-100"}`}
                                        style={{
                                            objectFit: "contain",
                                            filter: "drop-shadow(2px 4px 6px rgba(0,0,0,0.3))" // 影を画像に直接付ける
                                        }}
                                        priority={true}
                                    />
                                    {(isTapped === object.id) && (<Sparkles/>)}
                                </button>
                            )}
                        </div>
                    </Grid>
                ))}
            </Grid>
            <ModelButton 
                selectedId={selectedId} 
                setSelectedId={setSelectedId}
                checkedList={checkedList}
                selectedIndex={selectedIndex}
                updateObject={updateObject}
            />
            {diagnosisResult && (
                <MessageModal
                    message={"おめでとうございます、診断が完了しました！\n画面をタップして、診断結果を確認しましょう！"}
                    onClose={() => {
                        router.push("/result/" + diagnosisResult);
                    }}
                />
            )}
        </>
    );
}
