const japaneseQuotes = [
  {
      id: 40,
      type: "drama_scene",
      title: "트릭",
      japanese: "お前のやっていることは全部お見通しだ！",
      pronunciation: "오마에노 얏테이루 코토와 젠부 오미토오시다!",
      korean: "네가 하는 짓은 전부 꿰뚫어 보고 있다!"
    },
  {
      id: 115,
      type: "animation_scene",
      title: "스파이 패밀리",
      japanese: "わくわく！",
      pronunciation: "와쿠와쿠!",
      korean: "두근두근!"
    },
  {
      id: 22,
      type: "animation_scene",
      title: "코드 기아스",
      japanese: "撃っていいのは、撃たれる覚悟のある奴だけだ。",
      pronunciation: "웃테 이이노와, 우타레루 카쿠고노 아루 야츠다케다.",
      korean: "쏴도 되는 건, 쏘일 각오가 된 사람뿐이다."
    },
  {
      id: 66,
      type: "movie_scene",
      title: "러브레터",
      japanese: "お元気ですか？",
      pronunciation: "오겐키데스카?",
      korean: "잘 지내고 있나요?"
    },
  {
      id: 19,
      type: "animation_scene",
      title: "블리치",
      japanese: "卍解。",
      pronunciation: "반카이.",
      korean: "만해."
    },
  {
      id: 91,
      type: "animation_ost",
      title: "진격의 거인",
      songTitle: "홍련의 화살",
      artist: "Linked Horizon",
      japanese: "その日、人類は思い出した。",
      pronunciation: "소노 히, 진루이와 오모이다시타.",
      korean: "그날, 인류는 떠올렸다."
    },
  {
      id: 58,
      type: "movie_scene",
      title: "이웃집 토토로",
      japanese: "夢だけど、夢じゃなかった！",
      pronunciation: "유메다케도, 유메자 나캇타!",
      korean: "꿈인 줄 알았는데, 꿈이 아니었어!"
    },
  {
      id: 81,
      type: "song",
      title: "마리골드",
      artist: "아이묭",
      japanese: "麦わらの帽子の君が。",
      pronunciation: "무기와라노 보오시노 키미가.",
      korean: "밀짚모자를 쓴 네가."
    },
  {
      id: 180,
      type: "song",
      title: "사랑을 전하고 싶다든가",
      artist: "아이묭",
      japanese: "愛を伝えたいだとか。",
      pronunciation: "아이오 츠타에타이다토카.",
      korean: "사랑을 전하고 싶다든가."
    },
  {
      id: 103,
      type: "animation_scene",
      title: "나루토",
      japanese: "まっすぐ自分の言葉は曲げねぇ。",
      pronunciation: "맛스구 지분노 코토바와 마게네에.",
      korean: "내가 한 말은 절대로 굽히지 않아."
    },
  {
      id: 18,
      type: "animation_scene",
      title: "원펀맨",
      japanese: "趣味でヒーローをやっている者だ。",
      pronunciation: "슈미데 히이로오오 얏테이루 모노다.",
      korean: "취미로 히어로를 하는 사람이다."
    },
  {
      id: 16,
      type: "animation_scene",
      title: "하이큐!!",
      japanese: "俺は飛べる！",
      pronunciation: "오레와 토베루!",
      korean: "나는 날 수 있어!"
    },
  {
      id: 51,
      type: "movie_scene",
      title: "너의 이름은.",
      japanese: "まだ会ったことのない君を、探している。",
      pronunciation: "마다 앗타 코토노 나이 키미오, 사가시테이루.",
      korean: "아직 만난 적 없는 너를 찾고 있어."
    },
  {
      id: 195,
      type: "animation_ost",
      title: "최애의 아이",
      songTitle: "아이돌",
      artist: "YOASOBI",
      japanese: "嘘はとびきりの愛なんだよ。",
      pronunciation: "우소와 토비키리노 아이 난다요.",
      korean: "거짓말은 최고의 사랑이야."
    },
  {
      id: 4,
      type: "animation_scene",
      title: "나루토",
      japanese: "だってばよ！",
      pronunciation: "닷테바요!",
      korean: "그렇다니까!"
    },
  {
      id: 189,
      type: "song",
      title: "푸른 봄",
      artist: "백 넘버",
      japanese: "青い春の中で。",
      pronunciation: "아오이 하루노 나카데.",
      korean: "푸른 봄 속에서."
    },
  {
      id: 96,
      type: "animation_ost",
      title: "주술회전",
      songTitle: "회회기담",
      artist: "Eve",
      japanese: "闇を祓って。",
      pronunciation: "야미오 하랏테.",
      korean: "어둠을 떨쳐내."
    },
  {
      id: 23,
      type: "animation_scene",
      title: "데스노트",
      japanese: "計画通り。",
      pronunciation: "케이카쿠도오리.",
      korean: "계획대로."
    },
  {
      id: 100,
      type: "animation_ost",
      title: "하이큐!!",
      songTitle: "FLY HIGH!!",
      artist: "BURNOUT SYNDROMES",
      japanese: "飛べ。",
      pronunciation: "토베.",
      korean: "날아."
    },
  {
      id: 117,
      type: "animation_scene",
      title: "나의 히어로 아카데미아",
      japanese: "私が来た！",
      pronunciation: "와타시가 키타!",
      korean: "내가 왔다!"
    },
  {
      id: 75,
      type: "song",
      title: "아이돌",
      artist: "YOASOBI",
      japanese: "嘘はとびきりの愛なんだよ。",
      pronunciation: "우소와 토비키리노 아이 난다요.",
      korean: "거짓말은 최고의 사랑이야."
    },
  {
      id: 93,
      type: "animation_ost",
      title: "귀멸의 칼날",
      songTitle: "홍련화",
      artist: "LiSA",
      japanese: "強くなれる理由を知った。",
      pronunciation: "츠요쿠 나레루 리유우오 싯타.",
      korean: "강해질 수 있는 이유를 알았어."
    },
  {
      id: 142,
      type: "drama_scene",
      title: "노부나가 콘체르토",
      japanese: "俺は、俺の道を行く。",
      pronunciation: "오레와, 오레노 미치오 이쿠.",
      korean: "나는 내 길을 간다."
    },
  {
      id: 84,
      type: "song",
      title: "First Love",
      artist: "우타다 히카루",
      japanese: "最後のキスはタバコのflavorがした。",
      pronunciation: "사이고노 키스와 타바코노 후레바아가 시타.",
      korean: "마지막 키스에서는 담배 향이 났어."
    },
  {
      id: 86,
      type: "song",
      title: "눈의 꽃",
      artist: "나카시마 미카",
      japanese: "今年も空から雪が降る。",
      pronunciation: "코토시모 소라카라 유키가 후루.",
      korean: "올해도 하늘에서 눈이 내려."
    },
  {
      id: 191,
      type: "animation_ost",
      title: "진격의 거인",
      songTitle: "홍련의 화살",
      artist: "Linked Horizon",
      japanese: "その日、人類は思い出した。",
      pronunciation: "소노 히, 진루이와 오모이다시타.",
      korean: "그날, 인류는 떠올렸다."
    },
  {
      id: 145,
      type: "drama_scene",
      title: "언젠가 이 사랑을 떠올리면 분명 울고 말 거야",
      japanese: "好きになった人には、幸せになってほしい。",
      pronunciation: "스키니 낫타 히토니와, 시아와세니 낫테 호시이.",
      korean: "좋아하게 된 사람은 행복해졌으면 좋겠어."
    },
  {
      id: 28,
      type: "animation_scene",
      title: "디지몬 어드벤처",
      japanese: "僕らはいつでも一緒だよ。",
      pronunciation: "보쿠라와 이츠데모 잇쇼다요.",
      korean: "우리는 언제나 함께야."
    },
  {
      id: 92,
      type: "animation_ost",
      title: "진격의 거인",
      songTitle: "심장을 바쳐라!",
      artist: "Linked Horizon",
      japanese: "心臓を捧げよ！",
      pronunciation: "신조오오 사사게요!",
      korean: "심장을 바쳐라!"
    },
  {
      id: 31,
      type: "drama_scene",
      title: "한자와 나오키",
      japanese: "やられたらやり返す。倍返しだ！",
      pronunciation: "야라레타라 야리카에스. 바이카에시다!",
      korean: "당하면 되갚는다. 두 배로 갚아주겠다!"
    },
  {
      id: 128,
      type: "animation_scene",
      title: "디지몬 어드벤처",
      japanese: "僕らはいつでも一緒だよ。",
      pronunciation: "보쿠라와 이츠데모 잇쇼다요.",
      korean: "우리는 언제나 함께야."
    },
  {
      id: 143,
      type: "drama_scene",
      title: "3학년 A반",
      japanese: "お前ら、これから何を学ぶ？",
      pronunciation: "오마에라, 코레카라 나니오 마나부?",
      korean: "너희는 이제부터 무엇을 배울 거냐?"
    },
  {
      id: 134,
      type: "drama_scene",
      title: "언내추럴",
      japanese: "あなたの人生は、あなたのものです。",
      pronunciation: "아나타노 진세이와, 아나타노 모노데스.",
      korean: "당신의 인생은 당신의 것입니다."
    },
  {
      id: 52,
      type: "movie_scene",
      title: "너의 이름은.",
      japanese: "忘れたくない人。忘れたくなかった人。",
      pronunciation: "와스레타쿠나이 히토. 와스레타쿠나캇타 히토.",
      korean: "잊고 싶지 않은 사람. 잊고 싶지 않았던 사람."
    },
  {
      id: 187,
      type: "song",
      title: "하나비",
      artist: "미스터 칠드런",
      japanese: "もう一回、もう一回。",
      pronunciation: "모오 잇카이, 모오 잇카이.",
      korean: "한 번 더, 한 번 더."
    },
  {
      id: 167,
      type: "movie_scene",
      title: "카모메 식당",
      japanese: "かもめ食堂へようこそ。",
      pronunciation: "카모메 쇼쿠도오에 요오코소.",
      korean: "카모메 식당에 오신 것을 환영합니다."
    },
  {
      id: 122,
      type: "animation_scene",
      title: "코드 기아스",
      japanese: "撃っていいのは、撃たれる覚悟のある奴だけだ。",
      pronunciation: "웃테 이이노와, 우타레루 카쿠고노 아루 야츠다케다.",
      korean: "쏴도 되는 건, 쏘일 각오가 된 사람뿐이다."
    },
  {
      id: 2,
      type: "animation_scene",
      title: "진격의 거인",
      japanese: "心臓を捧げよ。",
      pronunciation: "신조오오 사사게요.",
      korean: "심장을 바쳐라."
    },
  {
      id: 42,
      type: "drama_scene",
      title: "노부나가 콘체르토",
      japanese: "俺は、俺の道を行く。",
      pronunciation: "오레와, 오레노 미치오 이쿠.",
      korean: "나는 내 길을 간다."
    },
  {
      id: 36,
      type: "drama_scene",
      title: "닥터 X",
      japanese: "私、失敗しないので。",
      pronunciation: "와타시, 싯파이 시나이노데.",
      korean: "저, 실패하지 않으니까요."
    },
  {
      id: 76,
      type: "song",
      title: "군청",
      artist: "YOASOBI",
      japanese: "好きなものを好きだと言う。",
      pronunciation: "스키나 모노오 스키다토 이우.",
      korean: "좋아하는 것을 좋아한다고 말해."
    },
  {
      id: 79,
      type: "song",
      title: "노래하는 왕자님",
      artist: "마지 LOVE1000%",
      japanese: "マジLOVE1000%。",
      pronunciation: "마지 라부 센 파아센토.",
      korean: "진짜 LOVE 1000%."
    },
  {
      id: 21,
      type: "animation_scene",
      title: "강철의 연금술사",
      japanese: "等価交換だ。",
      pronunciation: "토오카 코오칸다.",
      korean: "등가교환이다."
    },
  {
      id: 198,
      type: "animation_ost",
      title: "신세기 에반게리온",
      songTitle: "잔혹한 천사의 테제",
      artist: "타카하시 요코",
      japanese: "残酷な天使のように。",
      pronunciation: "잔코쿠나 텐시노 요오니.",
      korean: "잔혹한 천사처럼."
    },
  {
      id: 7,
      type: "animation_scene",
      title: "귀멸의 칼날",
      japanese: "心を燃やせ。",
      pronunciation: "코코로오 모야세.",
      korean: "마음을 불태워라."
    },
  {
      id: 184,
      type: "song",
      title: "First Love",
      artist: "우타다 히카루",
      japanese: "最後のキスはタバコのflavorがした。",
      pronunciation: "사이고노 키스와 타바코노 후레바아가 시타.",
      korean: "마지막 키스에서는 담배 향이 났어."
    },
  {
      id: 53,
      type: "movie_scene",
      title: "날씨의 아이",
      japanese: "大丈夫だ。",
      pronunciation: "다이조오부다.",
      korean: "괜찮아."
    },
  {
      id: 200,
      type: "animation_ost",
      title: "하이큐!!",
      songTitle: "FLY HIGH!!",
      artist: "BURNOUT SYNDROMES",
      japanese: "飛べ。",
      pronunciation: "토베.",
      korean: "날아."
    },
  {
      id: 46,
      type: "drama_scene",
      title: "최애",
      japanese: "推しは推せるときに推せ。",
      pronunciation: "오시와 오세루 토키니 오세.",
      korean: "최애는 응원할 수 있을 때 응원해."
    },
  {
      id: 131,
      type: "drama_scene",
      title: "한자와 나오키",
      japanese: "やられたらやり返す。倍返しだ！",
      pronunciation: "야라레타라 야리카에스. 바이카에시다!",
      korean: "당하면 되갚는다. 두 배로 갚아주겠다!"
    },
  {
      id: 8,
      type: "animation_scene",
      title: "귀멸의 칼날",
      japanese: "俺は俺の責務を全うする！",
      pronunciation: "오레와 오레노 세키무오 맛토오스루!",
      korean: "나는 나의 책무를 다하겠다!"
    },
  {
      id: 94,
      type: "animation_ost",
      title: "귀멸의 칼날",
      songTitle: "불꽃",
      artist: "LiSA",
      japanese: "さよなら　ありがとう。",
      pronunciation: "사요나라 아리가토오.",
      korean: "안녕, 고마워."
    },
  {
      id: 55,
      type: "movie_scene",
      title: "하울의 움직이는 성",
      japanese: "愛してる。",
      pronunciation: "아이시테루.",
      korean: "사랑해."
    },
  {
      id: 17,
      type: "animation_scene",
      title: "나의 히어로 아카데미아",
      japanese: "私が来た！",
      pronunciation: "와타시가 키타!",
      korean: "내가 왔다!"
    },
  {
      id: 87,
      type: "song",
      title: "하나비",
      artist: "미스터 칠드런",
      japanese: "もう一回、もう一回。",
      pronunciation: "모오 잇카이, 모오 잇카이.",
      korean: "한 번 더, 한 번 더."
    },
  {
      id: 182,
      type: "song",
      title: "귀여워서 미안해",
      artist: "허니웍스",
      japanese: "可愛くてごめん。",
      pronunciation: "카와이쿠테 고멘.",
      korean: "귀여워서 미안해."
    },
  {
      id: 140,
      type: "drama_scene",
      title: "트릭",
      japanese: "お前のやっていることは全部お見通しだ！",
      pronunciation: "오마에노 얏테이루 코토와 젠부 오미토오시다!",
      korean: "네가 하는 짓은 전부 꿰뚫어 보고 있다!"
    },
  {
      id: 123,
      type: "animation_scene",
      title: "데스노트",
      japanese: "計画通り。",
      pronunciation: "케이카쿠도오리.",
      korean: "계획대로."
    },
  {
      id: 97,
      type: "animation_ost",
      title: "나루토 질풍전",
      songTitle: "블루버드",
      artist: "이키모노가카리",
      japanese: "飛翔いたら戻らないと言って。",
      pronunciation: "하바타이타라 모도라나이토 잇테.",
      korean: "날아오르면 돌아오지 않겠다고 말해."
    },
  {
      id: 32,
      type: "drama_scene",
      title: "한자와 나오키",
      japanese: "100倍返しだ！",
      pronunciation: "햐쿠바이카에시다!",
      korean: "100배로 갚아주겠다!"
    },
  {
      id: 121,
      type: "animation_scene",
      title: "강철의 연금술사",
      japanese: "等価交換だ。",
      pronunciation: "토오카 코오칸다.",
      korean: "등가교환이다."
    },
  {
      id: 181,
      type: "song",
      title: "마리골드",
      artist: "아이묭",
      japanese: "麦わらの帽子の君が。",
      pronunciation: "무기와라노 보오시노 키미가.",
      korean: "밀짚모자를 쓴 네가."
    },
  {
      id: 118,
      type: "animation_scene",
      title: "원펀맨",
      japanese: "趣味でヒーローをやっている者だ。",
      pronunciation: "슈미데 히이로오오 얏테이루 모노다.",
      korean: "취미로 히어로를 하는 사람이다."
    },
  {
      id: 29,
      type: "animation_scene",
      title: "이누야샤",
      japanese: "おすわり！",
      pronunciation: "오스와리!",
      korean: "앉아!"
    },
  {
      id: 156,
      type: "movie_scene",
      title: "스즈메의 문단속",
      japanese: "行ってきます。",
      pronunciation: "잇테키마스.",
      korean: "다녀오겠습니다."
    },
  {
      id: 160,
      type: "movie_scene",
      title: "귀를 기울이면",
      japanese: "好きな人ができました。",
      pronunciation: "스키나 히토가 데키마시타.",
      korean: "좋아하는 사람이 생겼어요."
    },
  {
      id: 83,
      type: "song",
      title: "사랑받고 싶어",
      artist: "아이묭",
      japanese: "君はロックを聴かない。",
      pronunciation: "키미와 롯쿠오 키카나이.",
      korean: "너는 록을 듣지 않아."
    },
  {
      id: 168,
      type: "movie_scene",
      title: "남극의 쉐프",
      japanese: "いただきます。",
      pronunciation: "이타다키마스.",
      korean: "잘 먹겠습니다."
    },
  {
      id: 177,
      type: "song",
      title: "밤을 달리다",
      artist: "YOASOBI",
      japanese: "騒がしい日々に笑えない君に。",
      pronunciation: "사와가시이 히비니 와라에나이 키미니.",
      korean: "소란스러운 날들 속 웃지 못하는 너에게."
    },
  {
      id: 102,
      type: "animation_scene",
      title: "진격의 거인",
      japanese: "心臓を捧げよ。",
      pronunciation: "신조오오 사사게요.",
      korean: "심장을 바쳐라."
    },
  {
      id: 95,
      type: "animation_ost",
      title: "최애의 아이",
      songTitle: "아이돌",
      artist: "YOASOBI",
      japanese: "嘘はとびきりの愛なんだよ。",
      pronunciation: "우소와 토비키리노 아이 난다요.",
      korean: "거짓말은 최고의 사랑이야."
    },
  {
      id: 197,
      type: "animation_ost",
      title: "나루토 질풍전",
      songTitle: "블루버드",
      artist: "이키모노가카리",
      japanese: "飛翔いたら戻らないと言って。",
      pronunciation: "하바타이타라 모도라나이토 잇테.",
      korean: "날아오르면 돌아오지 않겠다고 말해."
    },
  {
      id: 113,
      type: "animation_scene",
      title: "슬램덩크",
      japanese: "あきらめたらそこで試合終了ですよ。",
      pronunciation: "아키라메타라 소코데 시아이 슈료오데스요.",
      korean: "포기하면 거기서 시합 종료예요."
    },
  {
      id: 137,
      type: "drama_scene",
      title: "고독한 미식가",
      japanese: "腹が、減った。",
      pronunciation: "하라가, 헷타.",
      korean: "배가 고프다."
    },
  {
      id: 64,
      type: "movie_scene",
      title: "오늘 밤, 세계에서 이 사랑이 사라진다 해도",
      japanese: "明日もまた、生きていたい。",
      pronunciation: "아시타모 마타, 이키테 이타이.",
      korean: "내일도 다시 살아 있고 싶어."
    },
  {
      id: 149,
      type: "drama_scene",
      title: "리치맨 푸어우먼",
      japanese: "仕事って、面白いな。",
      pronunciation: "시곳테, 오모시로나.",
      korean: "일이란, 재미있네."
    },
  {
      id: 188,
      type: "song",
      title: "소라모요우",
      artist: "오피셜히게단디즘",
      japanese: "君が思うよりも世界は優しい。",
      pronunciation: "키미가 오모우 요리모 세카이와 야사시이.",
      korean: "네가 생각하는 것보다 세상은 다정해."
    },
  {
      id: 13,
      type: "animation_scene",
      title: "슬램덩크",
      japanese: "あきらめたらそこで試合終了ですよ。",
      pronunciation: "아키라메타라 소코데 시아이 슈료오데스요.",
      korean: "포기하면 거기서 시합 종료예요."
    },
  {
      id: 44,
      type: "drama_scene",
      title: "고쿠센",
      japanese: "てめえら、いい加減にしろ！",
      pronunciation: "테메에라, 이이카겐니 시로!",
      korean: "너희들, 적당히 좀 해!"
    },
  {
      id: 186,
      type: "song",
      title: "눈의 꽃",
      artist: "나카시마 미카",
      japanese: "今年も空から雪が降る。",
      pronunciation: "코토시모 소라카라 유키가 후루.",
      korean: "올해도 하늘에서 눈이 내려."
    },
  {
      id: 71,
      type: "song",
      title: "레몬",
      artist: "요네즈 켄시",
      japanese: "夢ならばどれほどよかったでしょう。",
      pronunciation: "유메나라바 도레호도 요캇타데쇼오.",
      korean: "꿈이라면 얼마나 좋았을까."
    },
  {
      id: 157,
      type: "movie_scene",
      title: "모노노케 히메",
      japanese: "生きろ。そなたは美しい。",
      pronunciation: "이키로. 소나타와 우츠쿠시이.",
      korean: "살아라. 너는 아름답다."
    },
  {
      id: 41,
      type: "drama_scene",
      title: "꽃보다 남자",
      japanese: "俺様を誰だと思ってる。",
      pronunciation: "오레사마오 다레다토 오못테루.",
      korean: "나를 누구라고 생각하는 거야."
    },
  {
      id: 77,
      type: "song",
      title: "밤을 달리다",
      artist: "YOASOBI",
      japanese: "騒がしい日々に笑えない君に。",
      pronunciation: "사와가시이 히비니 와라에나이 키미니.",
      korean: "소란스러운 날들 속 웃지 못하는 너에게."
    },
  {
      id: 74,
      type: "song",
      title: "드라이 플라워",
      artist: "유우리",
      japanese: "声も顔も不器用なとこも。",
      pronunciation: "코에모 카오모 부키요오나 토코모.",
      korean: "목소리도 얼굴도 서투른 점도."
    },
  {
      id: 54,
      type: "movie_scene",
      title: "센과 치히로의 행방불명",
      japanese: "ここで働かせてください！",
      pronunciation: "코코데 하타라카세테 쿠다사이!",
      korean: "여기서 일하게 해주세요!"
    },
  {
      id: 73,
      type: "song",
      title: "프리텐더",
      artist: "Official髭男dism",
      japanese: "君とのラブストーリー、それは予想通り。",
      pronunciation: "키미토노 라부스토오리이, 소레와 요소오도오리.",
      korean: "너와의 러브스토리는, 그것은 예상대로."
    },
  {
      id: 59,
      type: "movie_scene",
      title: "마녀 배달부 키키",
      japanese: "落ち込むこともあるけれど、私は元気です。",
      pronunciation: "오치코무 코토모 아루케레도, 와타시와 겐키데스.",
      korean: "우울할 때도 있지만, 저는 잘 지내요."
    },
  {
      id: 30,
      type: "animation_scene",
      title: "스즈미야 하루히의 우울",
      japanese: "ただの人間には興味ありません。",
      pronunciation: "타다노 닌겐니와 쿄오미 아리마센.",
      korean: "평범한 인간에게는 관심 없습니다."
    },
  {
      id: 56,
      type: "movie_scene",
      title: "스즈메의 문단속",
      japanese: "行ってきます。",
      pronunciation: "잇테키마스.",
      korean: "다녀오겠습니다."
    },
  {
      id: 141,
      type: "drama_scene",
      title: "꽃보다 남자",
      japanese: "俺様を誰だと思ってる。",
      pronunciation: "오레사마오 다레다토 오못테루.",
      korean: "나를 누구라고 생각하는 거야."
    },
  {
      id: 173,
      type: "song",
      title: "프리텐더",
      artist: "Official髭男dism",
      japanese: "君とのラブストーリー、それは予想通り。",
      pronunciation: "키미토노 라부스토오리이, 소레와 요소오도오리.",
      korean: "너와의 러브스토리는, 그것은 예상대로."
    },
  {
      id: 90,
      type: "song",
      title: "불꽃",
      artist: "DAOKO × 요네즈 켄시",
      japanese: "パッと光って咲いた。",
      pronunciation: "팟토 히캇테 사이타.",
      korean: "팟 하고 빛나며 피었어."
    },
  {
      id: 190,
      type: "song",
      title: "불꽃",
      artist: "DAOKO × 요네즈 켄시",
      japanese: "パッと光って咲いた。",
      pronunciation: "팟토 히캇테 사이타.",
      korean: "팟 하고 빛나며 피었어."
    },
  {
      id: 10,
      type: "animation_scene",
      title: "주술회전",
      japanese: "領域展開。",
      pronunciation: "료오이키 텐카이.",
      korean: "영역 전개."
    },
  {
      id: 132,
      type: "drama_scene",
      title: "한자와 나오키",
      japanese: "100倍返しだ！",
      pronunciation: "햐쿠바이카에시다!",
      korean: "100배로 갚아주겠다!"
    },
  {
      id: 27,
      type: "animation_scene",
      title: "포켓몬스터",
      japanese: "君に決めた！",
      pronunciation: "키미니 키메타!",
      korean: "너로 정했다!"
    },
  {
      id: 20,
      type: "animation_scene",
      title: "헌터×헌터",
      japanese: "覚悟はいいか？",
      pronunciation: "카쿠고와 이이카?",
      korean: "각오는 됐나?"
    },
  {
      id: 169,
      type: "movie_scene",
      title: "행복 목욕탕",
      japanese: "おかえり。",
      pronunciation: "오카에리.",
      korean: "어서 와."
    },
  {
      id: 24,
      type: "animation_scene",
      title: "도라에몽",
      japanese: "どこでもドア。",
      pronunciation: "도코데모 도아.",
      korean: "어디로든 문."
    },
  {
      id: 37,
      type: "drama_scene",
      title: "고독한 미식가",
      japanese: "腹が、減った。",
      pronunciation: "하라가, 헷타.",
      korean: "배가 고프다."
    },
  {
      id: 88,
      type: "song",
      title: "소라모요우",
      artist: "오피셜히게단디즘",
      japanese: "君が思うよりも世界は優しい。",
      pronunciation: "키미가 오모우 요리모 세카이와 야사시이.",
      korean: "네가 생각하는 것보다 세상은 다정해."
    },
  {
      id: 194,
      type: "animation_ost",
      title: "귀멸의 칼날",
      songTitle: "불꽃",
      artist: "LiSA",
      japanese: "さよなら　ありがとう。",
      pronunciation: "사요나라 아리가토오.",
      korean: "안녕, 고마워."
    },
  {
      id: 6,
      type: "animation_scene",
      title: "원피스",
      japanese: "仲間がいるよ！",
      pronunciation: "나카마가 이루요!",
      korean: "동료가 있어!"
    },
  {
      id: 5,
      type: "animation_scene",
      title: "원피스",
      japanese: "海賊王に、おれはなる！",
      pronunciation: "카이조쿠오오니, 오레와 나루!",
      korean: "나는 해적왕이 될 거야!"
    },
  {
      id: 144,
      type: "drama_scene",
      title: "고쿠센",
      japanese: "てめえら、いい加減にしろ！",
      pronunciation: "테메에라, 이이카겐니 시로!",
      korean: "너희들, 적당히 좀 해!"
    },
  {
      id: 111,
      type: "animation_scene",
      title: "명탐정 코난",
      japanese: "真実はいつもひとつ！",
      pronunciation: "신지츠와 이츠모 히토츠!",
      korean: "진실은 언제나 하나!"
    },
  {
      id: 151,
      type: "movie_scene",
      title: "너의 이름은.",
      japanese: "まだ会ったことのない君を、探している。",
      pronunciation: "마다 앗타 코토노 나이 키미오, 사가시테이루.",
      korean: "아직 만난 적 없는 너를 찾고 있어."
    },
  {
      id: 35,
      type: "drama_scene",
      title: "리갈 하이",
      japanese: "黙ってろ！",
      pronunciation: "다맛테로!",
      korean: "입 다물어!"
    },
  {
      id: 136,
      type: "drama_scene",
      title: "닥터 X",
      japanese: "私、失敗しないので。",
      pronunciation: "와타시, 싯파이 시나이노데.",
      korean: "저, 실패하지 않으니까요."
    },
  {
      id: 65,
      type: "movie_scene",
      title: "세상의 중심에서 사랑을 외치다",
      japanese: "助けてください。",
      pronunciation: "타스케테 쿠다사이.",
      korean: "도와주세요."
    },
  {
      id: 127,
      type: "animation_scene",
      title: "포켓몬스터",
      japanese: "君に決めた！",
      pronunciation: "키미니 키메타!",
      korean: "너로 정했다!"
    },
  {
      id: 178,
      type: "song",
      title: "마음짓기",
      artist: "츠키",
      japanese: "心做し。",
      pronunciation: "코코로 나시.",
      korean: "마음 같은 것."
    },
  {
      id: 161,
      type: "movie_scene",
      title: "붉은 돼지",
      japanese: "飛ばねぇ豚はただの豚だ。",
      pronunciation: "토바네에 부타와 타다노 부타다.",
      korean: "날지 않는 돼지는 그냥 돼지다."
    },
  {
      id: 34,
      type: "drama_scene",
      title: "언내추럴",
      japanese: "あなたの人生は、あなたのものです。",
      pronunciation: "아나타노 진세이와, 아나타노 모노데스.",
      korean: "당신의 인생은 당신의 것입니다."
    },
  {
      id: 26,
      type: "animation_scene",
      title: "세일러문",
      japanese: "月に代わっておしおきよ！",
      pronunciation: "츠키니 카왓테 오시오키요!",
      korean: "달을 대신해서 벌을 주겠어!"
    },
  {
      id: 69,
      type: "movie_scene",
      title: "행복 목욕탕",
      japanese: "おかえり。",
      pronunciation: "오카에리.",
      korean: "어서 와."
    },
  {
      id: 158,
      type: "movie_scene",
      title: "이웃집 토토로",
      japanese: "夢だけど、夢じゃなかった！",
      pronunciation: "유메다케도, 유메자 나캇타!",
      korean: "꿈인 줄 알았는데, 꿈이 아니었어!"
    },
  {
      id: 70,
      type: "movie_scene",
      title: "어느 가족",
      japanese: "家族だから。",
      pronunciation: "카조쿠다카라.",
      korean: "가족이니까."
    },
  {
      id: 106,
      type: "animation_scene",
      title: "원피스",
      japanese: "仲間がいるよ！",
      pronunciation: "나카마가 이루요!",
      korean: "동료가 있어!"
    },
  {
      id: 183,
      type: "song",
      title: "사랑받고 싶어",
      artist: "아이묭",
      japanese: "君はロックを聴かない。",
      pronunciation: "키미와 롯쿠오 키카나이.",
      korean: "너는 록을 듣지 않아."
    },
  {
      id: 114,
      type: "animation_scene",
      title: "강철의 연금술사",
      japanese: "立って歩け。前へ進め。",
      pronunciation: "탓테 아루케. 마에에 스스메.",
      korean: "일어서서 걸어. 앞으로 나아가."
    },
  {
      id: 82,
      type: "song",
      title: "귀여워서 미안해",
      artist: "허니웍스",
      japanese: "可愛くてごめん。",
      pronunciation: "카와이쿠테 고멘.",
      korean: "귀여워서 미안해."
    },
  {
      id: 164,
      type: "movie_scene",
      title: "오늘 밤, 세계에서 이 사랑이 사라진다 해도",
      japanese: "明日もまた、生きていたい。",
      pronunciation: "아시타모 마타, 이키테 이타이.",
      korean: "내일도 다시 살아 있고 싶어."
    },
  {
      id: 68,
      type: "movie_scene",
      title: "남극의 쉐프",
      japanese: "いただきます。",
      pronunciation: "이타다키마스.",
      korean: "잘 먹겠습니다."
    },
  {
      id: 196,
      type: "animation_ost",
      title: "주술회전",
      songTitle: "회회기담",
      artist: "Eve",
      japanese: "闇を祓って。",
      pronunciation: "야미오 하랏테.",
      korean: "어둠을 떨쳐내."
    },
  {
      id: 192,
      type: "animation_ost",
      title: "진격의 거인",
      songTitle: "심장을 바쳐라!",
      artist: "Linked Horizon",
      japanese: "心臓を捧げよ！",
      pronunciation: "신조오오 사사게요!",
      korean: "심장을 바쳐라!"
    },
  {
      id: 154,
      type: "movie_scene",
      title: "센과 치히로의 행방불명",
      japanese: "ここで働かせてください！",
      pronunciation: "코코데 하타라카세테 쿠다사이!",
      korean: "여기서 일하게 해주세요!"
    },
  {
      id: 126,
      type: "animation_scene",
      title: "세일러문",
      japanese: "月に代わっておしおきよ！",
      pronunciation: "츠키니 카왓테 오시오키요!",
      korean: "달을 대신해서 벌을 주겠어!"
    },
  {
      id: 179,
      type: "song",
      title: "노래하는 왕자님",
      artist: "마지 LOVE1000%",
      japanese: "マジLOVE1000%。",
      pronunciation: "마지 라부 센 파아센토.",
      korean: "진짜 LOVE 1000%."
    },
  {
      id: 120,
      type: "animation_scene",
      title: "헌터×헌터",
      japanese: "覚悟はいいか？",
      pronunciation: "카쿠고와 이이카?",
      korean: "각오는 됐나?"
    },
  {
      id: 174,
      type: "song",
      title: "드라이 플라워",
      artist: "유우리",
      japanese: "声も顔も不器用なとこも。",
      pronunciation: "코에모 카오모 부키요오나 토코모.",
      korean: "목소리도 얼굴도 서투른 점도."
    },
  {
      id: 80,
      type: "song",
      title: "사랑을 전하고 싶다든가",
      artist: "아이묭",
      japanese: "愛を伝えたいだとか。",
      pronunciation: "아이오 츠타에타이다토카.",
      korean: "사랑을 전하고 싶다든가."
    },
  {
      id: 152,
      type: "movie_scene",
      title: "너의 이름은.",
      japanese: "忘れたくない人。忘れたくなかった人。",
      pronunciation: "와스레타쿠나이 히토. 와스레타쿠나캇타 히토.",
      korean: "잊고 싶지 않은 사람. 잊고 싶지 않았던 사람."
    },
  {
      id: 185,
      type: "song",
      title: "Automatic",
      artist: "우타다 히카루",
      japanese: "It's automatic。",
      pronunciation: "잇츠 오토매틱.",
      korean: "It's automatic."
    },
  {
      id: 170,
      type: "movie_scene",
      title: "어느 가족",
      japanese: "家族だから。",
      pronunciation: "카조쿠다카라.",
      korean: "가족이니까."
    },
  {
      id: 155,
      type: "movie_scene",
      title: "하울의 움직이는 성",
      japanese: "愛してる。",
      pronunciation: "아이시테루.",
      korean: "사랑해."
    },
  {
      id: 193,
      type: "animation_ost",
      title: "귀멸의 칼날",
      songTitle: "홍련화",
      artist: "LiSA",
      japanese: "強くなれる理由を知った。",
      pronunciation: "츠요쿠 나레루 리유우오 싯타.",
      korean: "강해질 수 있는 이유를 알았어."
    },
  {
      id: 61,
      type: "movie_scene",
      title: "붉은 돼지",
      japanese: "飛ばねぇ豚はただの豚だ。",
      pronunciation: "토바네에 부타와 타다노 부타다.",
      korean: "날지 않는 돼지는 그냥 돼지다."
    },
  {
      id: 38,
      type: "drama_scene",
      title: "MIU404",
      japanese: "誰かが止めないと。",
      pronunciation: "다레카가 토메나이토.",
      korean: "누군가가 막지 않으면."
    },
  {
      id: 107,
      type: "animation_scene",
      title: "귀멸의 칼날",
      japanese: "心を燃やせ。",
      pronunciation: "코코로오 모야세.",
      korean: "마음을 불태워라."
    },
  {
      id: 116,
      type: "animation_scene",
      title: "하이큐!!",
      japanese: "俺は飛べる！",
      pronunciation: "오레와 토베루!",
      korean: "나는 날 수 있어!"
    },
  {
      id: 101,
      type: "animation_scene",
      title: "진격의 거인",
      japanese: "駆逐してやる。",
      pronunciation: "구치쿠시테 야루.",
      korean: "모조리 구축해주겠어."
    },
  {
      id: 124,
      type: "animation_scene",
      title: "도라에몽",
      japanese: "どこでもドア。",
      pronunciation: "도코데모 도아.",
      korean: "어디로든 문."
    },
  {
      id: 50,
      type: "drama_scene",
      title: "아임 홈",
      japanese: "家族って、なんだろうな。",
      pronunciation: "카조쿠테, 난다로오나.",
      korean: "가족이란, 뭘까."
    },
  {
      id: 110,
      type: "animation_scene",
      title: "주술회전",
      japanese: "領域展開。",
      pronunciation: "료오이키 텐카이.",
      korean: "영역 전개."
    },
  {
      id: 125,
      type: "animation_scene",
      title: "짱구는 못말려",
      japanese: "オラ、野原しんのすけ。",
      pronunciation: "오라, 노하라 신노스케.",
      korean: "나, 노하라 신노스케야."
    },
  {
      id: 14,
      type: "animation_scene",
      title: "강철의 연금술사",
      japanese: "立って歩け。前へ進め。",
      pronunciation: "탓테 아루케. 마에에 스스메.",
      korean: "일어서서 걸어. 앞으로 나아가."
    },
  {
      id: 129,
      type: "animation_scene",
      title: "이누야샤",
      japanese: "おすわり！",
      pronunciation: "오스와리!",
      korean: "앉아!"
    },
  {
      id: 60,
      type: "movie_scene",
      title: "귀를 기울이면",
      japanese: "好きな人ができました。",
      pronunciation: "스키나 히토가 데키마시타.",
      korean: "좋아하는 사람이 생겼어요."
    },
  {
      id: 99,
      type: "animation_ost",
      title: "도쿄 구울",
      songTitle: "언라벨",
      artist: "TK from 凛として時雨",
      japanese: "教えてよ、教えてよ。",
      pronunciation: "오시에테요, 오시에테요.",
      korean: "가르쳐 줘, 가르쳐 줘."
    },
  {
      id: 175,
      type: "song",
      title: "아이돌",
      artist: "YOASOBI",
      japanese: "嘘はとびきりの愛なんだよ。",
      pronunciation: "우소와 토비키리노 아이 난다요.",
      korean: "거짓말은 최고의 사랑이야."
    },
  {
      id: 153,
      type: "movie_scene",
      title: "날씨의 아이",
      japanese: "大丈夫だ。",
      pronunciation: "다이조오부다.",
      korean: "괜찮아."
    },
  {
      id: 25,
      type: "animation_scene",
      title: "짱구는 못말려",
      japanese: "オラ、野原しんのすけ。",
      pronunciation: "오라, 노하라 신노스케.",
      korean: "나, 노하라 신노스케야."
    },
  {
      id: 89,
      type: "song",
      title: "푸른 봄",
      artist: "백 넘버",
      japanese: "青い春の中で。",
      pronunciation: "아오이 하루노 나카데.",
      korean: "푸른 봄 속에서."
    },
  {
      id: 33,
      type: "drama_scene",
      title: "도망치는 건 부끄럽지만 도움이 된다",
      japanese: "逃げるは恥だが役に立つ。",
      pronunciation: "니게루와 하지다가 야쿠니 타츠.",
      korean: "도망치는 건 부끄럽지만 도움이 된다."
    },
  {
      id: 148,
      type: "drama_scene",
      title: "사일런트",
      japanese: "言葉がなくても、伝わることはある。",
      pronunciation: "코토바가 나쿠테모, 츠타와루 코토와 아루.",
      korean: "말이 없어도 전해지는 것이 있다."
    },
  {
      id: 150,
      type: "drama_scene",
      title: "아임 홈",
      japanese: "家族って、なんだろうな。",
      pronunciation: "카조쿠테, 난다로오나.",
      korean: "가족이란, 뭘까."
    },
  {
      id: 165,
      type: "movie_scene",
      title: "세상의 중심에서 사랑을 외치다",
      japanese: "助けてください。",
      pronunciation: "타스케테 쿠다사이.",
      korean: "도와주세요."
    },
  {
      id: 47,
      type: "drama_scene",
      title: "브러시 업 라이프",
      japanese: "人生は何度でもやり直せる。",
      pronunciation: "진세이와 난도데모 야리나오세루.",
      korean: "인생은 몇 번이고 다시 시작할 수 있다."
    },
  {
      id: 85,
      type: "song",
      title: "Automatic",
      artist: "우타다 히카루",
      japanese: "It's automatic。",
      pronunciation: "잇츠 오토매틱.",
      korean: "It's automatic."
    },
  {
      id: 3,
      type: "animation_scene",
      title: "나루토",
      japanese: "まっすぐ自分の言葉は曲げねぇ。",
      pronunciation: "맛스구 지분노 코토바와 마게네에.",
      korean: "내가 한 말은 절대로 굽히지 않아."
    },
  {
      id: 43,
      type: "drama_scene",
      title: "3학년 A반",
      japanese: "お前ら、これから何を学ぶ？",
      pronunciation: "오마에라, 코레카라 나니오 마나부?",
      korean: "너희는 이제부터 무엇을 배울 거냐?"
    },
  {
      id: 72,
      type: "song",
      title: "마루노우치 새디스틱",
      artist: "시이나 링고",
      japanese: "報酬は入社後並行線で。",
      pronunciation: "호오슈우와 뉴우샤고 헤이코오센데.",
      korean: "보상은 입사 후에도 평행선으로."
    },
  {
      id: 112,
      type: "animation_scene",
      title: "신세기 에반게리온",
      japanese: "逃げちゃダメだ。",
      pronunciation: "니게차 다메다.",
      korean: "도망치면 안 돼."
    },
  {
      id: 163,
      type: "movie_scene",
      title: "철도원",
      japanese: "あなたに会えてよかった。",
      pronunciation: "아나타니 아에테 요캇타.",
      korean: "당신을 만나서 좋았어요."
    },
  {
      id: 78,
      type: "song",
      title: "마음짓기",
      artist: "츠키",
      japanese: "心做し。",
      pronunciation: "코코로 나시.",
      korean: "마음 같은 것."
    },
  {
      id: 176,
      type: "song",
      title: "군청",
      artist: "YOASOBI",
      japanese: "好きなものを好きだと言う。",
      pronunciation: "스키나 모노오 스키다토 이우.",
      korean: "좋아하는 것을 좋아한다고 말해."
    },
  {
      id: 108,
      type: "animation_scene",
      title: "귀멸의 칼날",
      japanese: "俺は俺の責務を全うする！",
      pronunciation: "오레와 오레노 세키무오 맛토오스루!",
      korean: "나는 나의 책무를 다하겠다!"
    },
  {
      id: 139,
      type: "drama_scene",
      title: "교열걸 코노 에츠코",
      japanese: "私、仕事も恋も、校閲します！",
      pronunciation: "와타시, 시고토모 코이모, 코오에츠 시마스!",
      korean: "저는 일도 사랑도 교열하겠습니다!"
    },
  {
      id: 166,
      type: "movie_scene",
      title: "러브레터",
      japanese: "お元気ですか？",
      pronunciation: "오겐키데스카?",
      korean: "잘 지내고 있나요?"
    },
  {
      id: 138,
      type: "drama_scene",
      title: "MIU404",
      japanese: "誰かが止めないと。",
      pronunciation: "다레카가 토메나이토.",
      korean: "누군가가 막지 않으면."
    },
  {
      id: 109,
      type: "animation_scene",
      title: "주술회전",
      japanese: "大丈夫、僕最強だから。",
      pronunciation: "다이조오부, 보쿠 사이쿄오 다카라.",
      korean: "괜찮아, 내가 최강이니까."
    },
  {
      id: 49,
      type: "drama_scene",
      title: "리치맨 푸어우먼",
      japanese: "仕事って、面白いな。",
      pronunciation: "시곳테, 오모시로나.",
      korean: "일이란, 재미있네."
    },
  {
      id: 119,
      type: "animation_scene",
      title: "블리치",
      japanese: "卍解。",
      pronunciation: "반카이.",
      korean: "만해."
    },
  {
      id: 12,
      type: "animation_scene",
      title: "신세기 에반게리온",
      japanese: "逃げちゃダメだ。",
      pronunciation: "니게차 다메다.",
      korean: "도망치면 안 돼."
    },
  {
      id: 147,
      type: "drama_scene",
      title: "브러시 업 라이프",
      japanese: "人生は何度でもやり直せる。",
      pronunciation: "진세이와 난도데모 야리나오세루.",
      korean: "인생은 몇 번이고 다시 시작할 수 있다."
    },
  {
      id: 15,
      type: "animation_scene",
      title: "스파이 패밀리",
      japanese: "わくわく！",
      pronunciation: "와쿠와쿠!",
      korean: "두근두근!"
    },
  {
      id: 57,
      type: "movie_scene",
      title: "모노노케 히메",
      japanese: "生きろ。そなたは美しい。",
      pronunciation: "이키로. 소나타와 우츠쿠시이.",
      korean: "살아라. 너는 아름답다."
    },
  {
      id: 171,
      type: "song",
      title: "레몬",
      artist: "요네즈 켄시",
      japanese: "夢ならばどれほどよかったでしょう。",
      pronunciation: "유메나라바 도레호도 요캇타데쇼오.",
      korean: "꿈이라면 얼마나 좋았을까."
    },
  {
      id: 9,
      type: "animation_scene",
      title: "주술회전",
      japanese: "大丈夫、僕最強だから。",
      pronunciation: "다이조오부, 보쿠 사이쿄오 다카라.",
      korean: "괜찮아, 내가 최강이니까."
    },
  {
      id: 45,
      type: "drama_scene",
      title: "언젠가 이 사랑을 떠올리면 분명 울고 말 거야",
      japanese: "好きになった人には、幸せになってほしい。",
      pronunciation: "스키니 낫타 히토니와, 시아와세니 낫테 호시이.",
      korean: "좋아하게 된 사람은 행복해졌으면 좋겠어."
    },
  {
      id: 63,
      type: "movie_scene",
      title: "철도원",
      japanese: "あなたに会えてよかった。",
      pronunciation: "아나타니 아에테 요캇타.",
      korean: "당신을 만나서 좋았어요."
    },
  {
      id: 48,
      type: "drama_scene",
      title: "사일런트",
      japanese: "言葉がなくても、伝わることはある。",
      pronunciation: "코토바가 나쿠테모, 츠타와루 코토와 아루.",
      korean: "말이 없어도 전해지는 것이 있다."
    },
  {
      id: 67,
      type: "movie_scene",
      title: "카모메 식당",
      japanese: "かもめ食堂へようこそ。",
      pronunciation: "카모메 쇼쿠도오에 요오코소.",
      korean: "카모메 식당에 오신 것을 환영합니다."
    },
  {
      id: 162,
      type: "movie_scene",
      title: "시간을 달리는 소녀",
      japanese: "タイムリープって、こういうこと？",
      pronunciation: "타이무 리이푸테, 코오 이우 코토?",
      korean: "타임리프란 이런 건가?"
    },
  {
      id: 133,
      type: "drama_scene",
      title: "도망치는 건 부끄럽지만 도움이 된다",
      japanese: "逃げるは恥だが役に立つ。",
      pronunciation: "니게루와 하지다가 야쿠니 타츠.",
      korean: "도망치는 건 부끄럽지만 도움이 된다."
    },
  {
      id: 104,
      type: "animation_scene",
      title: "나루토",
      japanese: "だってばよ！",
      pronunciation: "닷테바요!",
      korean: "그렇다니까!"
    },
  {
      id: 11,
      type: "animation_scene",
      title: "명탐정 코난",
      japanese: "真実はいつもひとつ！",
      pronunciation: "신지츠와 이츠모 히토츠!",
      korean: "진실은 언제나 하나!"
    },
  {
      id: 98,
      type: "animation_ost",
      title: "신세기 에반게리온",
      songTitle: "잔혹한 천사의 테제",
      artist: "타카하시 요코",
      japanese: "残酷な天使のように。",
      pronunciation: "잔코쿠나 텐시노 요오니.",
      korean: "잔혹한 천사처럼."
    },
  {
      id: 172,
      type: "song",
      title: "마루노우치 새디스틱",
      artist: "시이나 링고",
      japanese: "報酬は入社後並行線で。",
      pronunciation: "호오슈우와 뉴우샤고 헤이코오센데.",
      korean: "보상은 입사 후에도 평행선으로."
    },
  {
      id: 130,
      type: "animation_scene",
      title: "스즈미야 하루히의 우울",
      japanese: "ただの人間には興味ありません。",
      pronunciation: "타다노 닌겐니와 쿄오미 아리마센.",
      korean: "평범한 인간에게는 관심 없습니다."
    },
  {
      id: 1,
      type: "animation_scene",
      title: "진격의 거인",
      japanese: "駆逐してやる。",
      pronunciation: "구치쿠시테 야루.",
      korean: "모조리 구축해주겠어."
    },
  {
      id: 105,
      type: "animation_scene",
      title: "원피스",
      japanese: "海賊王に、おれはなる！",
      pronunciation: "카이조쿠오오니, 오레와 나루!",
      korean: "나는 해적왕이 될 거야!"
    },
  {
      id: 62,
      type: "movie_scene",
      title: "시간을 달리는 소녀",
      japanese: "タイムリープって、こういうこと？",
      pronunciation: "타이무 리이푸테, 코오 이우 코토?",
      korean: "타임리프란 이런 건가?"
    },
  {
      id: 159,
      type: "movie_scene",
      title: "마녀 배달부 키키",
      japanese: "落ち込むこともあるけれど、私は元気です。",
      pronunciation: "오치코무 코토모 아루케레도, 와타시와 겐키데스.",
      korean: "우울할 때도 있지만, 저는 잘 지내요."
    },
  {
      id: 146,
      type: "drama_scene",
      title: "최애",
      japanese: "推しは推せるときに推せ。",
      pronunciation: "오시와 오세루 토키니 오세.",
      korean: "최애는 응원할 수 있을 때 응원해."
    },
  {
      id: 39,
      type: "drama_scene",
      title: "교열걸 코노 에츠코",
      japanese: "私、仕事も恋も、校閲します！",
      pronunciation: "와타시, 시고토모 코이모, 코오에츠 시마스!",
      korean: "저는 일도 사랑도 교열하겠습니다!"
    },
  {
      id: 199,
      type: "animation_ost",
      title: "도쿄 구울",
      songTitle: "언라벨",
      artist: "TK from 凛として時雨",
      japanese: "教えてよ、教えてよ。",
      pronunciation: "오시에테요, 오시에테요.",
      korean: "가르쳐 줘, 가르쳐 줘."
    },
  {
      id: 135,
      type: "drama_scene",
      title: "리갈 하이",
      japanese: "黙ってろ！",
      pronunciation: "다맛테로!",
      korean: "입 다물어!"
    }
];
