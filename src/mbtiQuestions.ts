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
        question: "さっきまで机の上にあったはずのボールペンが、煙のように消えた。",
        answers: [
            {
                answer: "そこのペン、今日からお前がアイツの代わりだ。",
                point: [
                    {type: "E", point: 0},
                    {type: "S", point: 1},
                    {type: "T", point: 0},
                    {type: "J", point: -2}
                ]
            },
            {
                answer: "君がいないと書けないんだ……戻ってきてくれ。",
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
        question: "イヤホンが……ない。あの、片耳だけ音が出ないやつでもいいから、今は音楽が必要なんだ……！",
        answers: [
            {
                answer: "周囲の音でも聞いていよう――これはこれで風情があるな。",
                point: [
                    {type: "E", point: 0},
                    {type: "S", point: 1},
                    {type: "T", point: 0},
                    {type: "J", point: -2}
                ]
            },
            {
                answer: "イヤホン捜索ドラマが始まる、昨日の自分の行動を巻き戻しながら。",
                point: [
                    {type: "E", point: 0},
                    {type: "S", point: 0},
                    {type: "T", point: 1},
                    {type: "J", point: 2}
                ]
            },
            {
                answer: "脳内にBGMが勝手に再生され始める。見つからないストレス？",
                point: [
                    {type: "E", point: 0},
                    {type: "S", point: -1},
                    {type: "T", point: -2},
                    {type: "J", point: 0}
                ]
            }
        ]
    },
    "mugCup": {
        item: "マグカップ",
        question: "使い慣れたマグカップを落としてしまった。あの取っ手、もう二度と戻らないんだな……。",
        answers: [
            {
                answer: "今度は取っ手のないタイプにしようかな。",
                point: [
                    {type: "E", point: 0},
                    {type: "S", point: 1},
                    {type: "T", point: 0},
                    {type: "J", point: -2}
                ]
            },
            {
                answer: "瞬間接着剤「お前はまだ戦える。」",
                point: [
                    {type: "E", point: 0},
                    {type: "S", point: 0},
                    {type: "T", point: 1},
                    {type: "J", point: 2}
                ]
            },
            {
                answer: "これ、逆にアートっぽくない？",
                point: [
                    {type: "E", point: 0},
                    {type: "S", point: -1},
                    {type: "T", point: -2},
                    {type: "J", point: 0}
                ]
            }
        ]
    },
    "book": {
        item: "本",
        question: "今日はどの本と目が合うかな？",
        answers: [
            {
                answer: "表紙がこっちを見てる……これは運命の漫画タイム。",
                point: [
                    {type: "E", point: 0},
                    {type: "S", point: 2},
                    {type: "T", point: 0},
                    {type: "J", point: -1}
                ]
            },
            {
                answer: "ビジネス書「今日こそ人生変えよう！」",
                point: [
                    {type: "E", point: 0},
                    {type: "S", point: 0},
                    {type: "T", point: 1},
                    {type: "J", point: 2}
                ]
            },
            {
                answer: "コンビニで出会った雑誌。「読め」と言われた気がして連れてきた。",
                point: [
                    {type: "E", point: 0},
                    {type: "S", point: -2},
                    {type: "T", point: -1},
                    {type: "J", point: 0}
                ]
            }
        ]
    },
    "pc": {
        item: "PC",
        question: "机の上に、PCが鎮座している。",
        answers: [
            {
                answer: "気づいたらアプリを10個くらい入れてた。まだ起動してない。",
                point: [
                    {type: "E", point: 0},
                    {type: "S", point: -1},
                    {type: "T", point: 0},
                    {type: "J", point: -2}
                ]
            },
            {
                answer: "「作業はあと！」――フォルダ整理から入る。謎の使命感だ。",
                point: [
                    {type: "E", point: 0},
                    {type: "S", point: 1},
                    {type: "T", point: 0},
                    {type: "J", point: 2}
                ]
            },
            {
                answer: "通知がチラッ……気づけばSNSの深海を漂っていた。",
                point: [
                    {type: "E", point: 0},
                    {type: "S", point: 0},
                    {type: "T", point: -2},
                    {type: "J", point: -1}
                ]
            }
        ]
    },
    "game": {
        item: "ゲーム機",
        question: "今日はゲーム日和。どの世界に旅立つ？",
        answers: [
            {
                answer: "ボスに100回負けてもやめられない。アクションは精神修行。",
                point: [
                    {type: "E", point: 0},
                    {type: "S", point: 1},
                    {type: "T", point: 2},
                    {type: "J", point: 0}
                ]
            },
            {
                answer: "世界を救うのは今日の俺。いや、俺(Lv1)だけど。",
                point: [
                    {type: "E", point: 0},
                    {type: "S", point: -2},
                    {type: "T", point: -1},
                    {type: "J", point: 0}
                ]
            },
            {
                answer: "ブロックを消すたび、何かが癒やされていく。これが、パズルの力……。",
                point: [
                    {type: "E", point: 0},
                    {type: "S", point: 2},
                    {type: "T", point: 0},
                    {type: "J", point: -1}
                ]
            }
        ]
    },
    "movie": {
        item: "映画",
        question: "今夜は映画祭。心のスクリーンに流すのは？",
        answers: [
            {
                answer: "爆発！追跡！筋肉！　すべてを吹き飛ばしたい夜にアクション映画。",
                point: [
                    {type: "E", point: 0},
                    {type: "S", point:1},
                    {type: "T", point: 2},
                    {type: "J", point: 0}
                ]
            },
            {
                answer: "知らなかった世界が、静かにドアを開けてくる。ドキュメンタリーで現実逃避。",
                point: [
                    {type: "E", point: 0},
                    {type: "S", point: -2},
                    {type: "T", point: 1},
                    {type: "J", point: 0}
                ]
            },
            {
                answer: "恋人たちがくっつくのかくっつかないのか、胃がキリキリしてくる。恋愛映画は格闘技。",
                point: [
                    {type: "E", point: 0},
                    {type: "S", point: 0},
                    {type: "T", point: -2},
                    {type: "J", point: 1}
                ]
            }
        ]
    },
    "umbrella": {
        item: "傘",
        question: "雨が降ってきた。あなたは傘を……",
        answers: [
            {
                answer: "「やば、誰か余ってない？」ダッシュで友達の傘に突撃！",
                point: [
                    {type: "E", point: 2},
                    {type: "S", point: 0},
                    {type: "T", point: 0},
                    {type: "J", point: 1}
                ]
            },
            {
                answer: "静かに図書室の傘立てを見に行く。置き傘……あった。",
                point: [
                    {type: "E", point: 2},
                    {type: "S", point: 0},
                    {type: "T", point: 0},
                    {type: "J", point: 1}
                ]
            },
            {
                answer: '傘がない？　いや、大丈夫。この雨も"青春"の演出だ。',
                point: [
                    {type: "E", point: 0},
                    {type: "S", point: -2},
                    {type: "T", point: -1},
                    {type: "J", point: 1}
                ]
            }
        ]
    },
    "lunchBox": {
        item: "お弁当",
        question: "今日のお弁当、どう食べる？",
        answers: [
            {
                answer: "「見てこれ！　家族が作ってくれた愛情弁」と、友達に解説。",
                point: [
                    {type: "E", point: 2},
                    {type: "S", point: 0},
                    {type: "T", point: -1},
                    {type: "J", point: 0}
                ]
            },
            {
                answer: "「まずは唐揚げだな」――フタを開けた瞬間の配置チェック。",
                point: [
                    {type: "E", point: -2},
                    {type: "S", point: 0},
                    {type: "T", point: 1},
                    {type: "J", point: 0}
                ]
            },
            {
                answer: "なぜか唐揚げがハート型……「これは運命のサイン」とスマホに記録。",
                point: [
                    {type: "E", point: 0},
                    {type: "S", point: -2},
                    {type: "T", point: 0},
                    {type: "J", point: -1}
                ]
            }
        ]
    }
};
