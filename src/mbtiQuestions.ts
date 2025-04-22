// MBTI診断の質問の型
export type Question = {
    item: string; // オブジェクトの名前
    question: string; // 表示するテキスト
    answers: Answer[]; // 選択肢
};

// MBTIの4軸に割り振るポイントの型
// INFPはそれぞれESTJから1ポイント引いて処理する
export type MBTIPoint = {
    type: "E" | "S" | "T" | "J"; // タイプ名
    point: number; // ポイント
};

// 選択肢の型
export type Answer = {
    answer: string; // 選択肢のテキスト
    point: MBTIPoint[]; // どのタイプに何ポイント加算するか
};

// 質問のデータ
export const questions: {[item: string]: Question} = {
    "smartphone": {
        item: "スマホ",
        question: "テーブルの上にスマホが置きっぱなしだ。",
        answers: [
            {
                answer: "暇つぶしのため、SNSアプリを起動した。",
                point: [
                    {type: "E", point: 1},
                    {type: "S", point: -1},
                    {type: "T", point: 0},
                    {type: "J", point: -1}
                ]
            },
            {
                answer: "放置しすぎていて充電を忘れていた。画面が点かない。",
                point: [
                    {type: "E", point: 0},
                    {type: "S", point: 1},
                    {type: "T", point: 0},
                    {type: "J", point: -2}
                ]
            },
            {
                answer: "通知音が鳴った。友達からメッセージが来たようだ。",
                point: [
                    {type: "E", point: 1},
                    {type: "S", point: 1},
                    {type: "T", point: -1},
                    {type: "J", point: 0}
                ]
            }
        ]
    },
    "chargingCable": {
        item: "充電ケーブル",
        question: "充電ケーブルがカバンの中で絡まりまくっていた。",
        answers: [
            {
                answer: "無言でほどきはじめた。",
                point: [
                    {type: "E", point: -1},
                    {type: "S", point: 1},
                    {type: "T", point: 0},
                    {type: "J", point: 1}
                ]
            },
            {
                answer: "ある意味芸術作品。",
                point: [
                    {type: "E", point: 0},
                    {type: "S", point: -2},
                    {type: "T", point: -1},
                    {type: "J", point: 0}
                ]
            },
            {
                answer: "なんでこうなるのか論理的に考え始めた。",
                point: [
                    {type: "E", point: 0},
                    {type: "S", point: -1},
                    {type: "T", point: 2},
                    {type: "J", point: 0}
                ]
            },
        ]
    },
    "socks": {
        item: "靴下",
        question: "洗濯かごに、片方だけの靴下が何日も居座っている。",
        answers: [
            {
                answer: "いつか相方が帰ってくると信じてる。",
                point: [
                    {type: "E", point: 0},
                    {type: "S", point: -1},
                    {type: "T", point: -2},
                    {type: "J", point: 0}
                ]
            },
            {
                answer: "いっそ捨ててしまえば、君は自由だ。",
                point: [
                    {type: "E", point: 0},
                    {type: "S", point: 0},
                    {type: "T", point: 1},
                    {type: "J", point: -2}
                ]
            },
            {
                answer: "今から、もう片方を探す旅に出よう。",
                point: [
                    {type: "E", point: 1},
                    {type: "S", point: -2},
                    {type: "T", point: 0},
                    {type: "J", point: 0}
                ]
            }
        ]
    },
    "vendingMachine": {
        item: "自販機",
        question: "ジュースが出てきたのに、取り出し口のカバーで止まってる。",
        answers: [
            {
                answer: "あと一歩が踏み出せないらしい。",
                point: [
                    {type: "E", point: -1},
                    {type: "S", point: 0},
                    {type: "T", point: -2},
                    {type: "J", point: 0}
                ]
            },
            {
                answer: "カバーを開けて、自販機の仕事を手伝った。",
                point: [
                    {type: "E", point: 0},
                    {type: "S", point: 1},
                    {type: "T", point: 1},
                    {type: "J", point: 1}
                ]
            },
            {
                answer: "2本目を買えば一緒に出てくるさ。",
                point: [
                    {type: "E", point: 0},
                    {type: "S", point: -1},
                    {type: "T", point: 0},
                    {type: "J", point: -2}
                ]
            }
        ]
    },
    "ballpointPen": {
        item: "ボールペン",
        question: "お気に入りのボールペンが見当たらない。明日の提出物に絶対使いたいのに……！",
        answers: [
            {
                answer: "「まあいっか」と思って、近くの別のペンで済ませる",
                point: [
                    {type: "E", point: 0},
                    {type: "S", point: 2},
                    {type: "T", point: 0},
                    {type: "J", point: -1}
                ]
            },
            {
                answer: "部屋中を探し回って、どうにかして見つけよう。",
                point: [
                    {type: "E", point: 0},
                    {type: "S", point: 0},
                    {type: "T", point: 1},
                    {type: "J", point: 2}
                ]
            },
            {
                answer: "この状況、ちょっとドラマみたいだな……。",
                point: [
                    {type: "E", point: 0},
                    {type: "S", point: -1},
                    {type: "T", point: -2},
                    {type: "J", point: 0}
                ]
            }
        ]
    },
    "earphone": {
        item: "イヤホン",
        question: "お気に入りのイヤホンが見つからない。通学中に音楽を聴くのが日課なのに……！",
        answers: [
            {
                answer: "とりあえず、今日は音楽なしで外の音に集中してみる。",
                point: [
                    {type: "E", point: 0},
                    {type: "S", point: 1},
                    {type: "T", point: 0},
                    {type: "J", point: -2}
                ]
            },
            {
                answer: "家を出る前に全部屋を探して、見つけるまで出発を遅らせる。",
                point: [
                    {type: "E", point: 0},
                    {type: "S", point: 0},
                    {type: "T", point: 1},
                    {type: "J", point: 2}
                ]
            },
            {
                answer: "これは新しい音楽体験のチャンスかも。",
                point: [
                    {type: "E", point: 0},
                    {type: "S", point: -2},
                    {type: "T", point: -1},
                    {type: "J", point: 0}
                ]
            }
        ]
    },
    "mugCup": {
        item: "マグカップ",
        question: "お気に入りのマグカップをうっかり落としてしまった。取っ手が欠けてしまった……",
        answers: [
            {
                answer: "使えないわけじゃないし、そのまま使い続ける。",
                point: [
                    {type: "E", point: 0},
                    {type: "S", point: 1},
                    {type: "T", point: 0},
                    {type: "J", point: -2}
                ]
            },
            {
                answer: "ボンドで直したあと、次からは大事に扱おうと心に誓う",
                point: [
                    {type: "E", point: 0},
                    {type: "S", point: 0},
                    {type: "T", point: -1},
                    {type: "J", point: 2}
                ]
            },
            {
                answer: "これ、逆にアートっぽくない？",
                point: [
                    {type: "E", point: 0},
                    {type: "S", point: -2},
                    {type: "T", point: 1},
                    {type: "J", point: 0}
                ]
            }
        ]
    },
    "book": {
        item: "本",
        question: "今日は何の本を読もう。",
        answers: [
            {
                answer: "漫画",
                point: [
                    {type: "E", point: 1},
                    {type: "S", point: 1},
                    {type: "T", point: -1},
                    {type: "J", point: 0}
                ]
            },
            {
                answer: "自己啓発・ビジネス書",
                point: [
                    {type: "E", point: 0},
                    {type: "S", point: 0},
                    {type: "T", point: 1},
                    {type: "J", point: 2}
                ]
            },
            {
                answer: "雑誌やムック本",
                point: [
                    {type: "E", point: 1},
                    {type: "S", point: 2},
                    {type: "T", point: 1},
                    {type: "J", point: 0}
                ]
            }
        ]
    },
    "pc": {
        item: "PC",
        question: "机にPCが置いてある。",
        answers: [
            {
                answer: "新しいアプリやツールを試したくて、いろいろインストールした。",
                point: [
                    {type: "E", point: 0},
                    {type: "S", point: 2},
                    {type: "T", point: 0},
                    {type: "J", point: -1}
                ]
            },
            {
                answer: "すぐに作業に取りかかる前に、フォルダ整理を始めた。",
                point: [
                    {type: "E", point: 0},
                    {type: "S", point: 1},
                    {type: "T", point: 0},
                    {type: "J", point: 2}
                ]
            },
            {
                answer: "SNS通知が気になって、少しそっちをチェックした。",
                point: [
                    {type: "E", point: 1},
                    {type: "S", point: -1},
                    {type: "T", point: 0},
                    {type: "J", point: -1}
                ]
            }
        ]
    },
    "game": {
        item: "ゲーム機",
        question: "今日は家でゲームの気分！何のゲームをしよう？",
        answers: [
            {
                answer: "アクションゲーム",
                point: [
                    {type: "E", point: 1},
                    {type: "S", point: 2},
                    {type: "T", point: 0},
                    {type: "J", point: 0}
                ]
            },
            {
                answer: "RPG(ロールプレイングゲーム)",
                point: [
                    {type: "E", point: -1},
                    {type: "S", point: -2},
                    {type: "T", point: 0},
                    {type: "J", point: 0}
                ]
            },
            {
                answer: "パズルゲーム",
                point: [
                    {type: "E", point: 0},
                    {type: "S", point: 0},
                    {type: "T", point: 1},
                    {type: "J", point: -2}
                ]
            }
        ]
    },
    "movie": {
        item: "映画",
        question: "今夜は映画を見よう。あなたの気分はどれ？",
        answers: [
            {
                answer: "アクション映画",
                point: [
                    {type: "E", point: 1},
                    {type: "S", point: 2},
                    {type: "T", point: 0},
                    {type: "J", point: 0}
                ]
            },
            {
                answer: "ドキュメンタリー映画",
                point: [
                    {type: "E", point: -1},
                    {type: "S", point: -2},
                    {type: "T", point: 0},
                    {type: "J", point: 0}
                ]
            },
            {
                answer: "恋愛映画",
                point: [
                    {type: "E", point: 2},
                    {type: "S", point: 0},
                    {type: "T", point: -1},
                    {type: "J", point: 0}
                ]
            }
        ]
    },
};
