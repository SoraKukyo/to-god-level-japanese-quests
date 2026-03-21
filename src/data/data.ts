// ============================================================
// ALL DUMMY DATA — Replace card contents with real data later.
// Structure: Section → Category → SubLevel[] → Card[]
// ============================================================

export interface FlashCard {
  id: string;
  front: string;
  back: {
    meaning: string;
    reading: string;
    example: string;
    exampleMeaning: string;
  };
}

export interface SubLevel {
  sublevel: string;
  cards: FlashCard[];
}

export type CategoryData = Record<string, SubLevel[]>;

export interface SectionMeta {
  title: string;
  slug: string;
  description: string;
  colorClass: string; // tailwind bg class token
  accentVar: string; // CSS variable name
  icon: string;
}

export const sectionMeta: Record<string, SectionMeta> = {
  kanji: {
    title: "Kanji",
    slug: "kanji",
    description: "Learn kanji by JLPT level",
    colorClass: "section-kanji",
    accentVar: "--section-kanji",
    icon: "漢",
  },
  vocabulary: {
    title: "Vocabulary",
    slug: "vocabulary",
    description: "Words grouped by real-life context",
    colorClass: "section-vocabulary",
    accentVar: "--section-vocabulary",
    icon: "語",
  },
  grammar: {
    title: "Grammar",
    slug: "grammar",
    description: "Grammar patterns by JLPT level",
    colorClass: "section-grammar",
    accentVar: "--section-grammar",
    icon: "文",
  },
  phrases: {
    title: "Phrases",
    slug: "phrases",
    description: "Useful phrases by situation",
    colorClass: "section-phrases",
    accentVar: "--section-phrases",
    icon: "話",
  },
};

// ─── KANJI ────────────────────────────────────────────────────
const kanji: CategoryData = {
  N5: [
    {
      sublevel: "Level 1",
      cards: [
        { id: "k_n5_001", front: "日", back: { meaning: "Day / Sun", reading: "にち / ひ", example: "今日はいい日ですね。", exampleMeaning: "Today is a nice day." } },
        { id: "k_n5_002", front: "月", back: { meaning: "Month / Moon", reading: "げつ / つき", example: "今月は忙しいです。", exampleMeaning: "This month is busy." } },
        { id: "k_n5_003", front: "火", back: { meaning: "Fire", reading: "か / ひ", example: "火曜日に会いましょう。", exampleMeaning: "Let's meet on Tuesday." } },
        { id: "k_n5_004", front: "水", back: { meaning: "Water", reading: "すい / みず", example: "水をください。", exampleMeaning: "Water, please." } },
        { id: "k_n5_005", front: "木", back: { meaning: "Tree / Wood", reading: "もく / き", example: "大きい木があります。", exampleMeaning: "There is a big tree." } },
      ],
    },
  ],
  N4: [
    {
      sublevel: "Level 1",
      cards: [
        { id: "k_n4_001", front: "会", back: { meaning: "Meet", reading: "かい / あう", example: "会議は３時です。", exampleMeaning: "The meeting is at 3." } },
        { id: "k_n4_002", front: "社", back: { meaning: "Company", reading: "しゃ", example: "会社に行きます。", exampleMeaning: "I go to the company." } },
        { id: "k_n4_003", front: "員", back: { meaning: "Member", reading: "いん", example: "社員が多いです。", exampleMeaning: "There are many employees." } },
        { id: "k_n4_004", front: "教", back: { meaning: "Teach", reading: "きょう / おしえる", example: "日本語を教えます。", exampleMeaning: "I teach Japanese." } },
        { id: "k_n4_005", front: "室", back: { meaning: "Room", reading: "しつ", example: "教室はどこですか。", exampleMeaning: "Where is the classroom?" } },
      ],
    },
  ],
  N3: [
    {
      sublevel: "Level 1",
      cards: [
        { id: "k_n3_001", front: "経", back: { meaning: "Sutra / Pass through", reading: "けい / へる", example: "経験が大切です。", exampleMeaning: "Experience is important." } },
        { id: "k_n3_002", front: "済", back: { meaning: "Finish / Economy", reading: "ざい / すむ", example: "経済が変わりました。", exampleMeaning: "The economy changed." } },
        { id: "k_n3_003", front: "届", back: { meaning: "Deliver / Reach", reading: "とどける", example: "届けてください。", exampleMeaning: "Please deliver it." } },
        { id: "k_n3_004", front: "届", back: { meaning: "Report /届出", reading: "とどけ", example: "届出を出します。", exampleMeaning: "I'll submit the report." } },
        { id: "k_n3_005", front: "営", back: { meaning: "Manage / Operate", reading: "えい", example: "営業時間は９時からです。", exampleMeaning: "Business hours start at 9." } },
      ],
    },
  ],
  N2: [
    {
      sublevel: "Level 1",
      cards: [
        { id: "k_n2_001", front: "権", back: { meaning: "Authority / Right", reading: "けん / ごん", example: "権限を確認します。", exampleMeaning: "I'll check the authority." } },
        { id: "k_n2_002", front: "制", back: { meaning: "System / Control", reading: "せい", example: "制度を変えます。", exampleMeaning: "We'll change the system." } },
        { id: "k_n2_003", front: "策", back: { meaning: "Plan / Policy", reading: "さく", example: "対策を考えます。", exampleMeaning: "I'll think of a plan." } },
        { id: "k_n2_004", front: "構", back: { meaning: "Structure", reading: "こう / かまう", example: "構造が複雑です。", exampleMeaning: "The structure is complex." } },
        { id: "k_n2_005", front: "築", back: { meaning: "Build", reading: "ちく / きずく", example: "信頼を築きます。", exampleMeaning: "I'll build trust." } },
      ],
    },
  ],
  N1: [
    {
      sublevel: "Level 1",
      cards: [
        { id: "k_n1_001", front: "儀", back: { meaning: "Ceremony", reading: "ぎ", example: "儀式に出席します。", exampleMeaning: "I'll attend the ceremony." } },
        { id: "k_n1_002", front: "鬱", back: { meaning: "Depression / Gloom", reading: "うつ", example: "鬱な気分です。", exampleMeaning: "I'm feeling depressed." } },
        { id: "k_n1_003", front: "璧", back: { meaning: "Perfect", reading: "へき", example: "完璧にできました。", exampleMeaning: "It was done perfectly." } },
        { id: "k_n1_004", front: "繊", back: { meaning: "Fiber / Delicate", reading: "せん", example: "繊維を使います。", exampleMeaning: "We use fiber." } },
        { id: "k_n1_005", front: "摯", back: { meaning: "Sincere", reading: "し", example: "真摯に取り組みます。", exampleMeaning: "I'll work on it sincerely." } },
      ],
    },
  ],
};

// ─── VOCABULARY ───────────────────────────────────────────────
const vocabulary: CategoryData = {
  "Daily Life": [
    {
      sublevel: "Level 1",
      cards: [
        { id: "v_daily_001", front: "朝ごはん", back: { meaning: "Breakfast", reading: "あさごはん", example: "朝ごはんを食べましたか？", exampleMeaning: "Did you eat breakfast?" } },
        { id: "v_daily_002", front: "電車", back: { meaning: "Train", reading: "でんしゃ", example: "電車で会社に行きます。", exampleMeaning: "I go to work by train." } },
        { id: "v_daily_003", front: "財布", back: { meaning: "Wallet", reading: "さいふ", example: "財布を忘れました。", exampleMeaning: "I forgot my wallet." } },
        { id: "v_daily_004", front: "天気", back: { meaning: "Weather", reading: "てんき", example: "今日の天気はいいですね。", exampleMeaning: "The weather is nice today." } },
        { id: "v_daily_005", front: "約束", back: { meaning: "Promise / Appointment", reading: "やくそく", example: "明日の約束を忘れないで。", exampleMeaning: "Don't forget tomorrow's appointment." } },
      ],
    },
  ],
  Workplace: [
    {
      sublevel: "Level 1",
      cards: [
        { id: "v_work_001", front: "会議", back: { meaning: "Meeting", reading: "かいぎ", example: "会議は何時ですか？", exampleMeaning: "What time is the meeting?" } },
        { id: "v_work_002", front: "報告", back: { meaning: "Report", reading: "ほうこく", example: "報告書を出してください。", exampleMeaning: "Please submit the report." } },
        { id: "v_work_003", front: "締切", back: { meaning: "Deadline", reading: "しめきり", example: "締切は金曜日です。", exampleMeaning: "The deadline is Friday." } },
        { id: "v_work_004", front: "上司", back: { meaning: "Boss / Supervisor", reading: "じょうし", example: "上司に相談します。", exampleMeaning: "I'll consult with my boss." } },
        { id: "v_work_005", front: "同僚", back: { meaning: "Colleague", reading: "どうりょう", example: "同僚と昼ごはんを食べます。", exampleMeaning: "I eat lunch with my colleagues." } },
      ],
    },
  ],
  "Food & Restaurant": [
    {
      sublevel: "Level 1",
      cards: [
        { id: "v_food_001", front: "注文", back: { meaning: "Order", reading: "ちゅうもん", example: "注文してもいいですか？", exampleMeaning: "May I order?" } },
        { id: "v_food_002", front: "定食", back: { meaning: "Set meal", reading: "ていしょく", example: "定食をお願いします。", exampleMeaning: "I'll have the set meal." } },
        { id: "v_food_003", front: "箸", back: { meaning: "Chopsticks", reading: "はし", example: "箸をください。", exampleMeaning: "Chopsticks, please." } },
        { id: "v_food_004", front: "勘定", back: { meaning: "Bill / Check", reading: "かんじょう", example: "お勘定をお願いします。", exampleMeaning: "Check, please." } },
        { id: "v_food_005", front: "美味しい", back: { meaning: "Delicious", reading: "おいしい", example: "このラーメンは美味しい！", exampleMeaning: "This ramen is delicious!" } },
      ],
    },
  ],
  Travel: [
    {
      sublevel: "Level 1",
      cards: [
        { id: "v_trvl_001", front: "切符", back: { meaning: "Ticket", reading: "きっぷ", example: "切符を買いました。", exampleMeaning: "I bought a ticket." } },
        { id: "v_trvl_002", front: "空港", back: { meaning: "Airport", reading: "くうこう", example: "空港まで送ります。", exampleMeaning: "I'll take you to the airport." } },
        { id: "v_trvl_003", front: "地図", back: { meaning: "Map", reading: "ちず", example: "地図を見てください。", exampleMeaning: "Please look at the map." } },
        { id: "v_trvl_004", front: "荷物", back: { meaning: "Luggage", reading: "にもつ", example: "荷物が多いです。", exampleMeaning: "I have a lot of luggage." } },
        { id: "v_trvl_005", front: "案内", back: { meaning: "Guide / Information", reading: "あんない", example: "案内所はどこですか？", exampleMeaning: "Where is the information desk?" } },
      ],
    },
  ],
  Technology: [
    {
      sublevel: "Level 1",
      cards: [
        { id: "v_tech_001", front: "画面", back: { meaning: "Screen", reading: "がめん", example: "画面が暗いです。", exampleMeaning: "The screen is dark." } },
        { id: "v_tech_002", front: "検索", back: { meaning: "Search", reading: "けんさく", example: "ネットで検索します。", exampleMeaning: "I'll search online." } },
        { id: "v_tech_003", front: "設定", back: { meaning: "Settings", reading: "せってい", example: "設定を変えてください。", exampleMeaning: "Please change the settings." } },
        { id: "v_tech_004", front: "接続", back: { meaning: "Connection", reading: "せつぞく", example: "Wi-Fiに接続できません。", exampleMeaning: "I can't connect to Wi-Fi." } },
        { id: "v_tech_005", front: "更新", back: { meaning: "Update", reading: "こうしん", example: "アプリを更新しました。", exampleMeaning: "I updated the app." } },
      ],
    },
  ],
  School: [
    {
      sublevel: "Level 1",
      cards: [
        { id: "v_schl_001", front: "教科書", back: { meaning: "Textbook", reading: "きょうかしょ", example: "教科書を開いてください。", exampleMeaning: "Please open your textbook." } },
        { id: "v_schl_002", front: "宿題", back: { meaning: "Homework", reading: "しゅくだい", example: "宿題を忘れました。", exampleMeaning: "I forgot my homework." } },
        { id: "v_schl_003", front: "試験", back: { meaning: "Exam", reading: "しけん", example: "来週試験があります。", exampleMeaning: "There's an exam next week." } },
        { id: "v_schl_004", front: "授業", back: { meaning: "Class / Lesson", reading: "じゅぎょう", example: "授業は９時に始まります。", exampleMeaning: "Class starts at 9." } },
        { id: "v_schl_005", front: "先生", back: { meaning: "Teacher", reading: "せんせい", example: "先生に質問があります。", exampleMeaning: "I have a question for the teacher." } },
      ],
    },
  ],
  Shopping: [
    {
      sublevel: "Level 1",
      cards: [
        { id: "v_shop_001", front: "値段", back: { meaning: "Price", reading: "ねだん", example: "値段が高いです。", exampleMeaning: "The price is high." } },
        { id: "v_shop_002", front: "割引", back: { meaning: "Discount", reading: "わりびき", example: "割引はありますか？", exampleMeaning: "Is there a discount?" } },
        { id: "v_shop_003", front: "レジ", back: { meaning: "Cash register", reading: "レジ", example: "レジはあちらです。", exampleMeaning: "The register is over there." } },
        { id: "v_shop_004", front: "袋", back: { meaning: "Bag", reading: "ふくろ", example: "袋はいりますか？", exampleMeaning: "Do you need a bag?" } },
        { id: "v_shop_005", front: "領収書", back: { meaning: "Receipt", reading: "りょうしゅうしょ", example: "領収書をください。", exampleMeaning: "Receipt, please." } },
      ],
    },
  ],
  "Weather & Nature": [
    {
      sublevel: "Level 1",
      cards: [
        { id: "v_weat_001", front: "雨", back: { meaning: "Rain", reading: "あめ", example: "明日は雨です。", exampleMeaning: "It will rain tomorrow." } },
        { id: "v_weat_002", front: "雪", back: { meaning: "Snow", reading: "ゆき", example: "雪が降っています。", exampleMeaning: "It's snowing." } },
        { id: "v_weat_003", front: "風", back: { meaning: "Wind", reading: "かぜ", example: "風が強いです。", exampleMeaning: "The wind is strong." } },
        { id: "v_weat_004", front: "桜", back: { meaning: "Cherry blossom", reading: "さくら", example: "桜がきれいです。", exampleMeaning: "The cherry blossoms are beautiful." } },
        { id: "v_weat_005", front: "海", back: { meaning: "Sea / Ocean", reading: "うみ", example: "海に行きたいです。", exampleMeaning: "I want to go to the sea." } },
      ],
    },
  ],
  Health: [
    {
      sublevel: "Level 1",
      cards: [
        { id: "v_hlth_001", front: "病院", back: { meaning: "Hospital", reading: "びょういん", example: "病院に行きます。", exampleMeaning: "I'm going to the hospital." } },
        { id: "v_hlth_002", front: "薬", back: { meaning: "Medicine", reading: "くすり", example: "薬を飲みました。", exampleMeaning: "I took medicine." } },
        { id: "v_hlth_003", front: "熱", back: { meaning: "Fever", reading: "ねつ", example: "熱があります。", exampleMeaning: "I have a fever." } },
        { id: "v_hlth_004", front: "痛い", back: { meaning: "Painful", reading: "いたい", example: "頭が痛いです。", exampleMeaning: "I have a headache." } },
        { id: "v_hlth_005", front: "健康", back: { meaning: "Health", reading: "けんこう", example: "健康が大切です。", exampleMeaning: "Health is important." } },
      ],
    },
  ],
  Emotions: [
    {
      sublevel: "Level 1",
      cards: [
        { id: "v_emot_001", front: "嬉しい", back: { meaning: "Happy / Glad", reading: "うれしい", example: "合格して嬉しいです。", exampleMeaning: "I'm happy I passed." } },
        { id: "v_emot_002", front: "悲しい", back: { meaning: "Sad", reading: "かなしい", example: "映画が悲しかったです。", exampleMeaning: "The movie was sad." } },
        { id: "v_emot_003", front: "怒る", back: { meaning: "To get angry", reading: "おこる", example: "先生が怒りました。", exampleMeaning: "The teacher got angry." } },
        { id: "v_emot_004", front: "心配", back: { meaning: "Worry", reading: "しんぱい", example: "心配しないでください。", exampleMeaning: "Please don't worry." } },
        { id: "v_emot_005", front: "楽しい", back: { meaning: "Fun / Enjoyable", reading: "たのしい", example: "旅行は楽しかったです。", exampleMeaning: "The trip was fun." } },
      ],
    },
  ],
};

// ─── GRAMMAR ──────────────────────────────────────────────────
const grammar: CategoryData = {
  N5: [
    {
      sublevel: "Level 1",
      cards: [
        { id: "g_n5_001", front: "～は～です", back: { meaning: "A is B (basic copula)", reading: "は / です", example: "私は学生です。", exampleMeaning: "I am a student." } },
        { id: "g_n5_002", front: "～を～ます", back: { meaning: "Verb with direct object", reading: "を", example: "りんごを食べます。", exampleMeaning: "I eat an apple." } },
        { id: "g_n5_003", front: "～に行きます", back: { meaning: "Go to (place)", reading: "にいきます", example: "学校に行きます。", exampleMeaning: "I go to school." } },
        { id: "g_n5_004", front: "～たいです", back: { meaning: "Want to (do)", reading: "たいです", example: "日本に行きたいです。", exampleMeaning: "I want to go to Japan." } },
        { id: "g_n5_005", front: "～てもいいですか", back: { meaning: "May I (do)?", reading: "てもいいですか", example: "写真を撮ってもいいですか？", exampleMeaning: "May I take a photo?" } },
      ],
    },
  ],
  N4: [
    {
      sublevel: "Level 1",
      cards: [
        { id: "g_n4_001", front: "～なければならない", back: { meaning: "Must / Have to", reading: "なければならない", example: "宿題をしなければならない。", exampleMeaning: "I must do homework." } },
        { id: "g_n4_002", front: "～てあげる", back: { meaning: "Do for someone", reading: "てあげる", example: "友達に教えてあげます。", exampleMeaning: "I'll teach my friend." } },
        { id: "g_n4_003", front: "～そうです（様態）", back: { meaning: "Looks like / Seems", reading: "そうです", example: "美味しそうですね。", exampleMeaning: "It looks delicious." } },
        { id: "g_n4_004", front: "～ようにする", back: { meaning: "Try to / Make sure to", reading: "ようにする", example: "早く寝るようにします。", exampleMeaning: "I'll try to go to bed early." } },
        { id: "g_n4_005", front: "～し～し", back: { meaning: "And also (listing reasons)", reading: "し", example: "安いし、美味しいし。", exampleMeaning: "It's cheap and delicious." } },
      ],
    },
  ],
  N3: [
    {
      sublevel: "Level 1",
      cards: [
        { id: "g_n3_001", front: "～ことにする", back: { meaning: "Decide to", reading: "ことにする", example: "転職することにしました。", exampleMeaning: "I decided to change jobs." } },
        { id: "g_n3_002", front: "～ために", back: { meaning: "In order to", reading: "ために", example: "試験のために勉強します。", exampleMeaning: "I study for the exam." } },
        { id: "g_n3_003", front: "～ようになる", back: { meaning: "Come to be able to", reading: "ようになる", example: "日本語が話せるようになりました。", exampleMeaning: "I became able to speak Japanese." } },
        { id: "g_n3_004", front: "～ばかり", back: { meaning: "Only / Nothing but", reading: "ばかり", example: "ゲームばかりしています。", exampleMeaning: "I do nothing but play games." } },
        { id: "g_n3_005", front: "～わけではない", back: { meaning: "It doesn't mean that", reading: "わけではない", example: "嫌いなわけではない。", exampleMeaning: "It doesn't mean I dislike it." } },
      ],
    },
  ],
  N2: [
    {
      sublevel: "Level 1",
      cards: [
        { id: "g_n2_001", front: "～に対して", back: { meaning: "Towards / Against", reading: "にたいして", example: "お客様に対して丁寧に。", exampleMeaning: "Be polite towards customers." } },
        { id: "g_n2_002", front: "～一方で", back: { meaning: "On the other hand", reading: "いっぽうで", example: "便利な一方で危険です。", exampleMeaning: "Convenient but dangerous." } },
        { id: "g_n2_003", front: "～わけがない", back: { meaning: "There's no way", reading: "わけがない", example: "そんなわけがない。", exampleMeaning: "There's no way that's true." } },
        { id: "g_n2_004", front: "～どころか", back: { meaning: "Far from / Let alone", reading: "どころか", example: "休むどころか忙しい。", exampleMeaning: "Far from resting, I'm busy." } },
        { id: "g_n2_005", front: "～つつある", back: { meaning: "In the process of", reading: "つつある", example: "状況は変わりつつある。", exampleMeaning: "The situation is changing." } },
      ],
    },
  ],
  N1: [
    {
      sublevel: "Level 1",
      cards: [
        { id: "g_n1_001", front: "～をもって", back: { meaning: "With / By means of", reading: "をもって", example: "本日をもって終了します。", exampleMeaning: "We conclude as of today." } },
        { id: "g_n1_002", front: "～に即して", back: { meaning: "In accordance with", reading: "にそくして", example: "事実に即して判断する。", exampleMeaning: "Judge based on facts." } },
        { id: "g_n1_003", front: "～ないものでもない", back: { meaning: "Not impossible", reading: "ないものでもない", example: "できないものでもない。", exampleMeaning: "It's not impossible." } },
        { id: "g_n1_004", front: "～たりとも", back: { meaning: "Not even (one)", reading: "たりとも", example: "一秒たりとも無駄にしない。", exampleMeaning: "I won't waste even one second." } },
        { id: "g_n1_005", front: "～を禁じ得ない", back: { meaning: "Can't help but feel", reading: "をきんじえない", example: "驚きを禁じ得ない。", exampleMeaning: "I can't help but be surprised." } },
      ],
    },
  ],
};

// ─── PHRASES ──────────────────────────────────────────────────
const phrases: CategoryData = {
  "Survival Basics": [
    {
      sublevel: "Level 1",
      cards: [
        { id: "p_surv_001", front: "すみません", back: { meaning: "Excuse me / Sorry", reading: "すみません", example: "すみません、駅はどこですか？", exampleMeaning: "Excuse me, where is the station?" } },
        { id: "p_surv_002", front: "これをください", back: { meaning: "This one, please", reading: "これをください", example: "これをください。", exampleMeaning: "I'll have this one, please." } },
        { id: "p_surv_003", front: "いくらですか？", back: { meaning: "How much is it?", reading: "いくらですか", example: "これはいくらですか？", exampleMeaning: "How much is this?" } },
        { id: "p_surv_004", front: "トイレはどこですか？", back: { meaning: "Where is the bathroom?", reading: "トイレはどこですか", example: "すみません、トイレはどこですか？", exampleMeaning: "Excuse me, where is the bathroom?" } },
        { id: "p_surv_005", front: "わかりません", back: { meaning: "I don't understand", reading: "わかりません", example: "日本語がわかりません。", exampleMeaning: "I don't understand Japanese." } },
      ],
    },
  ],
  "Restaurant & Cafe": [
    {
      sublevel: "Level 1",
      cards: [
        { id: "p_rest_001", front: "メニューをお願いします", back: { meaning: "Menu, please", reading: "メニューをおねがいします", example: "すみません、メニューをお願いします。", exampleMeaning: "Excuse me, menu please." } },
        { id: "p_rest_002", front: "おすすめは何ですか？", back: { meaning: "What do you recommend?", reading: "おすすめはなんですか", example: "おすすめは何ですか？", exampleMeaning: "What do you recommend?" } },
        { id: "p_rest_003", front: "お会計お願いします", back: { meaning: "Check, please", reading: "おかいけいおねがいします", example: "お会計お願いします。", exampleMeaning: "Check, please." } },
        { id: "p_rest_004", front: "ごちそうさまでした", back: { meaning: "Thank you for the meal", reading: "ごちそうさまでした", example: "ごちそうさまでした。", exampleMeaning: "Thank you for the meal." } },
        { id: "p_rest_005", front: "アレルギーがあります", back: { meaning: "I have allergies", reading: "アレルギーがあります", example: "小麦アレルギーがあります。", exampleMeaning: "I have a wheat allergy." } },
      ],
    },
  ],
  "Directions & Transport": [
    {
      sublevel: "Level 1",
      cards: [
        { id: "p_dir_001", front: "駅はどこですか？", back: { meaning: "Where is the station?", reading: "えきはどこですか", example: "すみません、駅はどこですか？", exampleMeaning: "Excuse me, where is the station?" } },
        { id: "p_dir_002", front: "右に曲がってください", back: { meaning: "Please turn right", reading: "みぎにまがってください", example: "次の角を右に曲がってください。", exampleMeaning: "Turn right at the next corner." } },
        { id: "p_dir_003", front: "まっすぐ行ってください", back: { meaning: "Please go straight", reading: "まっすぐいってください", example: "まっすぐ行ってください。", exampleMeaning: "Please go straight." } },
        { id: "p_dir_004", front: "ここからどのくらいですか？", back: { meaning: "How far from here?", reading: "ここからどのくらいですか", example: "駅はここからどのくらいですか？", exampleMeaning: "How far is the station from here?" } },
        { id: "p_dir_005", front: "この電車は～に止まりますか？", back: { meaning: "Does this train stop at ~?", reading: "このでんしゃはにとまりますか", example: "この電車は渋谷に止まりますか？", exampleMeaning: "Does this train stop at Shibuya?" } },
      ],
    },
  ],
  "Shopping": [
    {
      sublevel: "Level 1",
      cards: [
        { id: "p_shop_001", front: "試着してもいいですか？", back: { meaning: "Can I try this on?", reading: "しちゃくしてもいいですか", example: "試着してもいいですか？", exampleMeaning: "Can I try this on?" } },
        { id: "p_shop_002", front: "もっと小さいのはありますか？", back: { meaning: "Do you have a smaller one?", reading: "もっとちいさいのはありますか", example: "もっと小さいのはありますか？", exampleMeaning: "Do you have a smaller one?" } },
        { id: "p_shop_003", front: "カードで払えますか？", back: { meaning: "Can I pay by card?", reading: "カードではらえますか", example: "カードで払えますか？", exampleMeaning: "Can I pay by card?" } },
        { id: "p_shop_004", front: "見ているだけです", back: { meaning: "Just looking", reading: "みているだけです", example: "見ているだけです。", exampleMeaning: "I'm just looking." } },
        { id: "p_shop_005", front: "免税できますか？", back: { meaning: "Is tax-free available?", reading: "めんぜいできますか", example: "免税できますか？", exampleMeaning: "Is tax-free available?" } },
      ],
    },
  ],
  "Workplace Keigo": [
    {
      sublevel: "Level 1",
      cards: [
        { id: "p_keig_001", front: "お疲れ様です", back: { meaning: "Good work / Hello (work)", reading: "おつかれさまです", example: "お疲れ様です。お先に失礼します。", exampleMeaning: "Good work. I'm leaving now." } },
        { id: "p_keig_002", front: "よろしくお願いします", back: { meaning: "Please take care of it", reading: "よろしくおねがいします", example: "今後ともよろしくお願いします。", exampleMeaning: "I look forward to working with you." } },
        { id: "p_keig_003", front: "承知いたしました", back: { meaning: "Understood (humble)", reading: "しょうちいたしました", example: "承知いたしました。すぐに対応します。", exampleMeaning: "Understood. I'll handle it right away." } },
        { id: "p_keig_004", front: "恐れ入りますが", back: { meaning: "I'm sorry but (humble)", reading: "おそれいりますが", example: "恐れ入りますが、もう一度お願いします。", exampleMeaning: "I'm sorry, but could you say that again?" } },
        { id: "p_keig_005", front: "申し訳ございません", back: { meaning: "I sincerely apologize", reading: "もうしわけございません", example: "申し訳ございません。確認いたします。", exampleMeaning: "I apologize. I'll check on it." } },
      ],
    },
  ],
  "Making Friends": [
    {
      sublevel: "Level 1",
      cards: [
        { id: "p_frnd_001", front: "どこから来ましたか？", back: { meaning: "Where are you from?", reading: "どこからきましたか", example: "どこから来ましたか？", exampleMeaning: "Where are you from?" } },
        { id: "p_frnd_002", front: "趣味は何ですか？", back: { meaning: "What are your hobbies?", reading: "しゅみはなんですか", example: "趣味は何ですか？", exampleMeaning: "What are your hobbies?" } },
        { id: "p_frnd_003", front: "LINE交換しませんか？", back: { meaning: "Want to exchange LINE?", reading: "LINEこうかんしませんか", example: "よかったらLINE交換しませんか？", exampleMeaning: "Want to exchange LINE if you'd like?" } },
        { id: "p_frnd_004", front: "今度一緒に～しましょう", back: { meaning: "Let's do ~ together sometime", reading: "こんどいっしょにしましょう", example: "今度一緒にカフェに行きましょう。", exampleMeaning: "Let's go to a cafe together sometime." } },
        { id: "p_frnd_005", front: "楽しかったです！", back: { meaning: "It was fun!", reading: "たのしかったです", example: "今日は楽しかったです！", exampleMeaning: "Today was fun!" } },
      ],
    },
  ],
  Emergency: [
    {
      sublevel: "Level 1",
      cards: [
        { id: "p_emer_001", front: "助けてください！", back: { meaning: "Please help!", reading: "たすけてください", example: "助けてください！", exampleMeaning: "Please help!" } },
        { id: "p_emer_002", front: "警察を呼んでください", back: { meaning: "Please call the police", reading: "けいさつをよんでください", example: "警察を呼んでください！", exampleMeaning: "Please call the police!" } },
        { id: "p_emer_003", front: "救急車をお願いします", back: { meaning: "Ambulance, please", reading: "きゅうきゅうしゃをおねがいします", example: "救急車をお願いします！", exampleMeaning: "Please call an ambulance!" } },
        { id: "p_emer_004", front: "具合が悪いです", back: { meaning: "I feel sick", reading: "ぐあいがわるいです", example: "具合が悪いです。", exampleMeaning: "I'm not feeling well." } },
        { id: "p_emer_005", front: "大使館に連絡したいです", back: { meaning: "I want to contact the embassy", reading: "たいしかんにれんらくしたいです", example: "大使館に連絡したいです。", exampleMeaning: "I'd like to contact the embassy." } },
      ],
    },
  ],
  "Phone & Email": [
    {
      sublevel: "Level 1",
      cards: [
        { id: "p_phon_001", front: "もしもし", back: { meaning: "Hello (on phone)", reading: "もしもし", example: "もしもし、田中です。", exampleMeaning: "Hello, this is Tanaka." } },
        { id: "p_phon_002", front: "折り返しお電話します", back: { meaning: "I'll call you back", reading: "おりかえしおでんわします", example: "後で折り返しお電話します。", exampleMeaning: "I'll call you back later." } },
        { id: "p_phon_003", front: "メールをご確認ください", back: { meaning: "Please check my email", reading: "メールをごかくにんください", example: "メールをご確認ください。", exampleMeaning: "Please check the email." } },
        { id: "p_phon_004", front: "お忙しいところ恐縮ですが", back: { meaning: "Sorry to bother you when busy", reading: "おいそがしいところきょうしゅくですが", example: "お忙しいところ恐縮ですが、ご確認をお願いします。", exampleMeaning: "Sorry to bother you, but please confirm." } },
        { id: "p_phon_005", front: "お返事お待ちしております", back: { meaning: "I look forward to your reply", reading: "おへんじおまちしております", example: "お返事お待ちしております。", exampleMeaning: "I look forward to your reply." } },
      ],
    },
  ],
};

// ─── EXPORT ───────────────────────────────────────────────────
export const allData: Record<string, CategoryData> = {
  kanji,
  vocabulary,
  grammar,
  phrases,
};

/** Get list of category names for a section */
export function getCategories(section: string): string[] {
  return Object.keys(allData[section] ?? {});
}

/** Get sub-levels for a section + category */
export function getSubLevels(section: string, category: string): SubLevel[] {
  return allData[section]?.[category] ?? [];
}

/** Get cards for a specific sub-level */
export function getCards(section: string, category: string, sublevelIndex: number): FlashCard[] {
  const sublevels = getSubLevels(section, category);
  return sublevels[sublevelIndex]?.cards ?? [];
}

/** Get sublevel name */
export function getSublevelName(section: string, category: string, sublevelIndex: number): string {
  const sublevels = getSubLevels(section, category);
  return sublevels[sublevelIndex]?.sublevel ?? `Level ${sublevelIndex + 1}`;
}
