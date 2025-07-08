// MBTIのタイプ
export type MBTIType =
  | "ENTP" | "INTP" | "INTJ" | "ENTJ"
  | "ENFP" | "INFP" | "INFJ" | "ENFJ"
  | "ESTJ" | "ISTJ" | "ISFJ" | "ESFJ"
  | "ESTP" | "ISTP" | "ISFP" | "ESFP";

// 診断結果の型
export type DiagnosisResult = {
    type: string; // MBTI診断結果(例: "INTJ")
    name: string; // MBTI診断結果の名前(例: "建築家")
    image: string; // MBTI診断結果の画像URL
    description: string[]; // MBTI診断結果の説明(index0: 性格のタイトル, index1: 性格の説明)
    goodMatches: string[]; // 相性の良いタイプ(index0~2: タイプ名, 上から相性の良い順)
    recommendedFoods: { // おすすめの食べ物
        index: number; // 屋台番号
        school: string; // 学校名
        shop: string; // 屋台名
        food: string; // 食べ物の名前 (URLの一部として使用)
        description: string[]; // 食べ物の説明(index0: 食べ物の説明, index1: おすすめの理由)
    };
};

// 診断結果のデータ
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
            index: 13,
            school: "河原電子ビジネス専門学校",
            shop: "Cool Spot",
            food: "油そば",
            description: [
                "ひらめきは冷たく、カラフルにやってくる。シュエインエーなら、混ぜるたびに新発見！",
                '熱い議論の合間にぴったりな"アイデアクーリング"デザートです。`
            ]
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
            index: 7,
            school: "河原外語観光・製菓専門学校",
            shop: "かすてら～くまの森～",
            food: "東京カステラ",
            description: [
                "素材の背景まで味わいたいあなたに、カステラを。",
                "静かに、でも深く、甘さの真理にたどり着けるかもしれません。"
            ]
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
            index: 27,
            school: "河原医療大学校 新居浜校",
            shop: "君のハートにフランクフルト♡",
            food: "フランクフルト",
            description: [
                "ムダなく旨い。それがフランクフルト。",
                "未来を見据えるあなたにふさわしい、合理的かつ満足感ある一品です。"
            ]
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
            index: 22,
            school: "河原医療福祉専門学校",
            shop: "飯バーガーと揚げ上げパリピ餃子",
            food: "ライスバーガー",
            description: [
                "行動に迷いは不要。",
                "がっつりいけるライスバーガーが、あなたのパワーと統率力をさらに引き出します。"
            ]
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
            index: 30,
            school: "河原医療大学校",
            shop: "冷やしパイン直売所",
            food: "冷やしパイン",
            description: [
                "太陽みたいに明るいあなたには、冷やしパイン。",
                "甘酸っぱいエネルギーが、あなたのひらめきに火をつけます！"
            ]
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
            index: 15,
            school: "河原デザイン・アート専門学校",
            shop: "神の白玉",
            food: "白玉",
            description: [
                "やわらかな甘さに、そっと寄り添う白玉を。",
                "あなたの静かな情熱と、やさしい心にぴったりの癒しです。"
            ]
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
            index: 14,
            school: "河原電子ビジネス専門学校",
            shop: "Tasty Lassi",
            food: "ラッシー",
            description: [
                "心に静かに寄り添う一杯、ラッシー。",
                "理想を抱きながら静かに燃えるあなたに、じんわり沁みる味わいを。"
            ]
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
            index: 20,
            school: "河原ビューティーモード専門学校",
            shop: "フルポンパニック！",
            food: "フルーツポンチ",
            description: [
                "みんなを笑顔にするあなたには、フルーツポンチ。",
                "カラフルな果物が、あなたの愛情深さをそのまま映しています。"
            ]
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
            index: 11,
            school: "河原電子ビジネス専門学校",
            shop: "ポテト日和",
            food: "フライドポテト",
            description: [
                "選ぶなら定番、外さないのがポテト。",
                "責任感と判断力で皆を導くあなたにふさわしい、安定のおいしさです。"
            ]
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
            index: 1,
            school: "大原簿記公務員専門学校 愛媛校",
            shop: "俺たちの塩焼きそば",
            food: "塩焼きそば",
            description: [
                "シンプル・イズ・ベスト。それが塩焼きそば。",
                "伝統を重んじるあなたに、誠実でどこか懐かしい一皿を。"
            ]
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
            index: 19,
            school: "河原デザイン・アート専門学校",
            shop: "えりんぎ本舗",
            food: "焼きえりんぎ",
            description: [
                "ほっとする味、えりんぎの優しさ。",
                "人を思いやるあなたに、ふんわり香る落ち着きをどうぞ。"
            ]
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
            index: 12,
            school: "河原電子ビジネス専門学校",
            shop: "Cotton ★ Candy",
            food: "綿菓子",
            description: [
                "みんなで楽しむなら綿菓子。",
                "あなたの気配りと明るさが、このふわふわと一緒に空気を和ませてくれます。"
            ]
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
            index: 10,
            school: "河原調理専門学校",
            shop: "愛LOVE♡パニーニ",
            food: "パニーニ",
            description: [
                "動いて、笑って、すぐ次へ。",
                "そんなあなたにピッタリなパニーニ。片手で味わう、最高の冒険フード！"
            ]
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
            index: 8,
            school: "河原外語観光・製菓専門学校",
            shop: "Fry&Fly～!!―London直行便―",
            food: "フィッシュ＆チップス",
            description: [
                "余計な装飾はいらない。",
                "フィッシュ＆チップスでシンプルに、でもしっかりと味わうひとときを。"
            ]
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
            index: 24,
            school: "河原医療福祉専門学校",
            shop: "ふるふるクロッフル",
            food: "クロッフル",
            description: [
                "甘くて、さっぱり、そしてちょっとおしゃれ。",
                "クロッフル＆レモンスカッシュは、あなたの美的感覚にぴったり。"
            ]
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
            index: 26,
            school: "河原アイペットワールド専門学校",
            shop: "aiカフェ",
            food: "ゼリーサイダー",
            description: [
                "きらきら弾けるゼリーサイダー。",
                "あなたの明るさと元気が、そのままドリンクになったような一杯です！"
            ]
        }
    }
}
