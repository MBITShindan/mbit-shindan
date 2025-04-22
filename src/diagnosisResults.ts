export type MBTIType = // MBTIのタイプ
  | "ENTP" | "INTP" | "INTJ" | "ENTJ"
  | "ENFP" | "INFP" | "INFJ" | "ENFJ"
  | "ESTJ" | "ISTJ" | "ISFJ" | "ESFJ"
  | "ESTP" | "ISTP" | "ISFP" | "ESFP";

export type DiagnosisResult = { // 診断結果の型
    type: string; // MBTI診断結果(例: "INTJ")
    name: string; // MBTI診断結果の名前(例: "建築家")
    image: string; // MBTI診断結果の画像URL
    description: string[]; // MBTI診断結果の説明(index0: 性格のタイトル, index1: 性格の説明)
    goodMatches: string[]; // 相性の良いタイプ(index0~2: タイプ名, 上から相性の良い順)
    recommendedFoods: { // おすすめの食べ物
        name: string; // 食べ物の名前
        description: string[]; // 食べ物の説明(index0: 食べ物の説明, index1: おすすめの理由)
        image: string; // 食べ物の画像URL
    };
};

export const diagnosisResults: {[type in MBTIType]: DiagnosisResult} = {
    // 分析家タイプ
    "ENTP": {
        type: "ENTP",
        name: "討論者",
        image: "../public/mbti/ENTP.png",
        description: [
            "討論者タイプのあなたは「ノリと勢いの発明王」。",
            "思いついたら即プレゼン。勝てそうならやる。むしろ勝てなくても言いたい。論破も発明もお手のもの！"
        ],
        goodMatches: ["INFJ", "INTP", "ENFP"],
        recommendedFoods: {
            name: "油そば",
            description: [
                "混ぜて、食べて、また語る。そんな油そばがおすすめ。",
                'ひらめきを引き出す"食の議論相手"です。'
            ],
            image: "../public/food/油そば.png"
        }
    },
    "INTP": {
        type: "INTP",
        name: "論理学者",
        image: "../public/mbti/INTP.png",
        description: [
            "論理学者タイプのあなたは「思考の迷宮探索者」。",
            "物事を深く考えすぎて、周りがついてこられないこともしばしば。でも、謎を解くのが好きで、問題解決にかける情熱は誰にも負けません！"
        ],
        goodMatches: ["ENTP", "INFJ", "INTJ"],
        recommendedFoods: {
            name: "油そば",
            description: [
                "トッピングの組み合わせに無限の可能性がある油そば。",
                "実験的な好奇心を満たすメニューとしておすすめ。"
            ],
            image: "../public/food/油そば.png"
        }
    },
    "INTJ": {
        type: "INTJ",
        name: "建築家",
        image: "../public/mbti/INTJ.png",
        description: [
            "建築家タイプのあなたは「冷徹な計画者」。",
            "全てに計画性があり、理論と実行が完璧に結びついている。思考の枠を超えたアイディアも大事にしているけど、必ず計画的に実行していきます。"
        ],
        goodMatches: ["ENFP", "INTP", "INFJ"],
        recommendedFoods: {
            name: "油そば",
            description: [
                "油そばは、無駄を削ぎ落とした完成された一杯。",
                "合理性を求めるあなたにこそおすすめです。"
            ],
            image: "../public/food/油そば.png"
        }
    },
    "ENTJ": {
        type: "ENTJ",
        name: "指揮官",
        image: "../public/mbti/ENTJ.png",
        description: [
            "指揮官タイプのあなたは「大胆なリーダー」。",
            "責任を背負うのが得意で、組織を動かすことに長けています。問題が起きても冷静に対処し、周りを引っ張っていくことができる頼れる存在です。"
        ],
        goodMatches: ["INTP", "INFP", "ENFP"],
        recommendedFoods: {
            name: "油そば",
            description: [
                "一皿で満足感MAX、エネルギッシュな油そばがおすすめ。",
                "効率よく栄養を摂って、次の挑戦へ進もう。"
            ],
            image: "../public/food/油そば.png"
        }
    },
    // 外交官タイプ
    "ENFP": {
        type: "ENFP",
        name: "運動家",
        image: "../public/mbti/ENFP.png",
        description: [
            "運動家タイプのあなたは「熱い心の冒険家」。",
            "新しいことに興味を持ち、興奮して行動することが得意。でも、少し落ち着きが足りないかも？でも、周りを引き込むエネルギーは素晴らしい！"
        ],
        goodMatches: ["INTJ", "INFJ", "ENTP"],
        recommendedFoods: {
            name: "油そば",
            description: [
                "混ぜる楽しさも、味の個性も満点。",
                "自由を愛するあなたには油そばがおすすめ！"
            ],
            image: "../public/food/油そば.png"
        }
    },
    "INFP": {
        type: "INFP",
        name: "仲介者",
        image: "../public/mbti/INFP.png",
        description: [
            "仲介者タイプのあなたは「共感の魔法使い」。",
            "周りの人の気持ちを理解し、サポートするのが得意。自分の内面にも敏感で、感情や理想を大事にしています。"
        ],
        goodMatches: ["ENFJ", "INTJ", "INFJ"],
        recommendedFoods: {
            name: "油そば",
            description: [
                "見た目以上に深みのある味わいが魅力の油そば。",
                "感受性豊かなあなたにおすすめのほっとする一品。"
            ],
            image: "../public/food/油そば.png"
        }
    },
    "INFJ": {
        type: "INFJ",
        name: "提唱者",
        image: "../public/mbti/INFJ.png",
        description: [
            "提唱者タイプのあなたは「理想を追い求める平和主義者」。",
            "心の中に深い理想があり、誰かを助けるために行動することに喜びを感じます。思慮深く、静かなエネルギーを持っています。"
        ],
        goodMatches: ["ENFP", "INTP", "ENFJ"],
        recommendedFoods: {
            name: "油そば",
            description: [
                "内なる情熱を支えるのは、意外とがっつり系。",
                "油そばは、静かな闘志に火をつける一杯としておすすめです。"
            ],
            image: "../public/food/油そば.png"
        }
    },
    "ENFJ": {
        type: "ENFJ",
        name: "主人公",
        image: "../public/mbti/ENFJ.png",
        description: [
            "主人公タイプのあなたは「思いやりのリーダー」。",
            "人々を引き寄せ、導く力を持っています。自分の役割を果たすことで周りの幸せを考え、協力することが得意です。"
        ],
        goodMatches: ["INFP", "ISFP", "INFJ"],
        recommendedFoods: {
            name: "油そば",
            description: [
                "みんなを元気づけたいなら、まずは自分から元気に。",
                "油そばは、あなたのパワーを支えるおすすめメニュー。"
            ],
            image: "../public/food/油そば.png"
        }
    },
    // 番人タイプ
    "ESTJ": {
        type: "ESTJ",
        name: "幹部",
        image: "../public/mbti/ESTJ.png",
        description: [
            "幹部タイプのあなたは「秩序と規律の守護者」。",
            "ルールを守ることに価値を感じ、組織をしっかりまとめる力があります。仕事ができる人で、周りにも責任感を求めがち。"
        ],
        goodMatches: ["ISFJ", "ISTJ", "ESFJ"],
        recommendedFoods: {
            name: "油そば",
            description: [
                "はっきりした味付けと、管理しやすいトッピング構成。",
                "リーダー気質のあなたに油そばはぴったりでおすすめです。"
            ],
            image: "../public/food/油そば.png"
        }
    },
    "ISTJ": {
        type: "ISTJ",
        name: "管理者",
        image: "../public/mbti/ISTJ.png",
        description: [
            "管理者タイプのあなたは「堅実な計画者」。",
            "計画性を大事にし、予測できる状況を好みます。慎重で確実に物事を進めることが得意ですが、時に変化に対して慎重すぎるかもしれません。"
        ],
        goodMatches: ["ISFJ", "ESTJ", "ESFJ"],
        recommendedFoods: {
            name: "油そば",
            description: [
                "見た目より実力派。バランスの取れた油そばは信頼できる一杯。",
                "堅実なあなたにおすすめの確かな味です。"
            ],
            image: "../public/food/油そば.png"
        }
    },
    "ISFJ": {
        type: "ISFJ",
        name: "擁護者",
        image: "../public/mbti/ISFJ.png",
        description: [
            "擁護者タイプのあなたは「心優しい守護者」。",
            "周りの人を思いやることができ、気配り上手。静かながらも深い愛情を持っており、サポートすることに喜びを感じます。"
        ],
        goodMatches: ["ESTJ", "ESFJ", "ISFP"],
        recommendedFoods: {
            name: "油そば",
            description: [
                "優しさとボリュームを両立した油そば。",
                "誰かのために動き続けるあなたにおすすめです。"
            ],
            image: "../public/food/油そば.png"
        }
    },
    "ESFJ": {
        type: "ESFJ",
        name: "領事",
        image: "../public/mbti/ESFJ.png",
        description: [
            "領事タイプのあなたは「社交的な調整役」。",
            "周囲を気遣い、みんながハッピーでいられるように努力します。人間関係において大事なことを見逃しません。"
        ],
        goodMatches: ["ISFJ", "ESTJ", "ENFJ"],
        recommendedFoods: {
            name: "油そば",
            description: [
                "親しみやすい味と満足感。みんなにも勧めたくなる一杯。",
                "人とのつながりを大切にするあなたにおすすめの油そば。"
            ],
            image: "../public/food/油そば.png"
        }
    },
    // 探検家タイプ
    "ESTP": {
        type: "ESTP",
        name: "起業家",
        image: "../public/mbti/ESTP.png",
        description: [
            "起業家タイプのあなたは「行動派の実践者」。",
            "まずはやってみる、動いてみるのがモットー。試行錯誤を繰り返しながら成長していきます。失敗も成功も楽しんじゃいます！"
        ],
        goodMatches: ["ISFP", "ESFP", "ENTJ"],
        recommendedFoods: {
            name: "油そば",
            description: [
                "スピード感とインパクト。そんな油そばがおすすめ。",
                "今を全力で楽しむあなたの活力源です。"
            ],
            image: "../public/food/油そば.png"
        }
    },
    "ISTP": {
        type: "ISTP",
        name: "巨匠",
        image: "../public/mbti/ISTP.png",
        description: [
            "巨匠タイプのあなたは「静かなる職人」。",
            "観察力と手先の器用さに優れ、道具や技術を使って問題を解決するのが得意です。ひとりの時間も大切にします。"
        ],
        goodMatches: ["ISFP", "ENTP", "ISFJ"],
        recommendedFoods: {
            name: "油そば",
            description: [
                "シンプルなのに奥深い、操作性の高い一杯。",
                "油そばは、探究心旺盛なあなたにおすすめです。"
            ],
            image: "../public/food/油そば.png"
        }
    },
    "ISFP": {
        type: "ISFP",
        name: "冒険家",
        image: "../public/mbti/ISFP.png",
        description: [
            "冒険家タイプのあなたは「自由なアーティスト」。",
            "自分のペースで過ごすことが大事で、周囲の期待に縛られない。感受性が強く、心地よい環境を大切にします。"
        ],
        goodMatches: ["ENFP", "ESTP", "ISTJ"],
        recommendedFoods: {
            name: "油そば",
            description: [
                "気ままに混ぜて、気ままに味わう自由な油そば。",
                "マイペースなあなたにぴったりでおすすめ。"
            ],
            image: "../public/food/油そば.png"
        }
    },
    "ESFP": {
        type: "ESFP",
        name: "エンターテイナー",
        image: "../public/mbti/ESFP.png",
        description: [
            "エンターテイナータイプのあなたは「盛り上げ上手な社交家」。",
            "誰とでもすぐに打ち解け、楽しい時間を作り出します。人の気持ちを読むのが得意で、盛り上げる力を持っています。"
        ],
        goodMatches: ["ESTP", "ISFP", "ENTJ"],
        recommendedFoods: {
            name: "油そば",
            description: [
                "見た目も味もガツンとくる油そばでテンションUP！",
                "場を盛り上げるあなたにおすすめの主役級メニュー。"
            ],
            image: "../public/food/油そば.png"
        }
    }
}
