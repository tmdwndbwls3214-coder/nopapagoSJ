// 일본어 학습 앱 전용 데이터 - 기존 데이터 + 추가 고품질 학습 항목
const DATA = {
  "동사": {
    "사전형": [
      [
        "行く",
        "いく",
        "이쿠",
        "가다",
        {
          "id": "verb_iku_dictionary",
          "baseId": "verb_iku",
          "form": "dictionary",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "学校へ行く。",
              "hira": "がっこうへいく。",
              "pronunciation": "각코오에 이쿠",
              "meaning": "가다."
            }
          ]
        }
      ],
      [
        "食べる",
        "たべる",
        "타베루",
        "먹다",
        {
          "id": "verb_taberu_dictionary",
          "baseId": "verb_taberu",
          "form": "dictionary",
          "level": "N5",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "朝ご飯を食べる。",
              "hira": "あさごはんをたべる。",
              "pronunciation": "아사고항오 타베루",
              "meaning": "먹다."
            }
          ]
        }
      ],
      [
        "見る",
        "みる",
        "미루",
        "보다",
        {
          "id": "verb_miru_dictionary",
          "baseId": "verb_miru",
          "form": "dictionary",
          "level": "N5",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "テレビを見る。",
              "hira": "テレビをみる。",
              "pronunciation": "테레비오 미루",
              "meaning": "보다."
            }
          ]
        }
      ],
      [
        "飲む",
        "のむ",
        "노무",
        "마시다",
        {
          "id": "verb_nomu_dictionary",
          "baseId": "verb_nomu",
          "form": "dictionary",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "水を飲む。",
              "hira": "みずをのむ。",
              "pronunciation": "미즈오 노무",
              "meaning": "마시다."
            }
          ]
        }
      ],
      [
        "書く",
        "かく",
        "카쿠",
        "쓰다",
        {
          "id": "verb_kaku_dictionary",
          "baseId": "verb_kaku",
          "form": "dictionary",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "名前を書く。",
              "hira": "なまえをかく。",
              "pronunciation": "나마에오 카쿠",
              "meaning": "쓰다."
            }
          ]
        }
      ],
      [
        "読む",
        "よむ",
        "요무",
        "읽다",
        {
          "id": "verb_yomu_dictionary",
          "baseId": "verb_yomu",
          "form": "dictionary",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "本を読む。",
              "hira": "ほんをよむ。",
              "pronunciation": "혼오 요무",
              "meaning": "읽다."
            }
          ]
        }
      ],
      [
        "話す",
        "はなす",
        "하나스",
        "말하다 / 이야기하다",
        {
          "id": "verb_hanasu_dictionary",
          "baseId": "verb_hanasu",
          "form": "dictionary",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "友達と話す。",
              "hira": "ともだちとはなす。",
              "pronunciation": "토모다치토 하나스",
              "meaning": "말하다 / 이야기하다."
            }
          ]
        }
      ],
      [
        "買う",
        "かう",
        "카우",
        "사다",
        {
          "id": "verb_kau_dictionary",
          "baseId": "verb_kau",
          "form": "dictionary",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "本を買う。",
              "hira": "ほんをかう。",
              "pronunciation": "혼오 카우",
              "meaning": "사다."
            }
          ]
        }
      ],
      [
        "帰る",
        "かえる",
        "카에루",
        "돌아가다 / 돌아오다",
        {
          "id": "verb_kaeru_dictionary",
          "baseId": "verb_kaeru",
          "form": "dictionary",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "家に帰る。",
              "hira": "いえにかえる。",
              "pronunciation": "이에니 카에루",
              "meaning": "돌아가다 / 돌아오다."
            }
          ]
        }
      ],
      [
        "会う",
        "あう",
        "아우",
        "만나다",
        {
          "id": "verb_8c96a83e_dictionary",
          "baseId": "verb_8c96a83e",
          "form": "dictionary",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "会う。",
              "hira": "あう。",
              "pronunciation": "아우",
              "meaning": "만나다."
            }
          ]
        }
      ],
      [
        "ある",
        "ある",
        "아루",
        "있다",
        {
          "id": "verb_b8345a61_dictionary",
          "baseId": "verb_b8345a61",
          "form": "dictionary",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "ある。",
              "hira": "ある。",
              "pronunciation": "아루",
              "meaning": "있다."
            }
          ]
        }
      ],
      [
        "いる",
        "いる",
        "이루",
        "있다",
        {
          "id": "verb_bb9d44f8_dictionary",
          "baseId": "verb_bb9d44f8",
          "form": "dictionary",
          "level": "N5",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "いる。",
              "hira": "いる。",
              "pronunciation": "이루",
              "meaning": "있다."
            }
          ]
        }
      ],
      [
        "起きる",
        "おきる",
        "오키루",
        "일어나다",
        {
          "id": "verb_f1e80ce9_dictionary",
          "baseId": "verb_f1e80ce9",
          "form": "dictionary",
          "level": "N5",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "起きる。",
              "hira": "おきる。",
              "pronunciation": "오키루",
              "meaning": "일어나다."
            }
          ]
        }
      ],
      [
        "寝る",
        "ねる",
        "네루",
        "자다",
        {
          "id": "verb_32c88ea6_dictionary",
          "baseId": "verb_32c88ea6",
          "form": "dictionary",
          "level": "N5",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "寝る。",
              "hira": "ねる。",
              "pronunciation": "네루",
              "meaning": "자다."
            }
          ]
        }
      ],
      [
        "働く",
        "はたらく",
        "하타라쿠",
        "일하다",
        {
          "id": "verb_b39fc552_dictionary",
          "baseId": "verb_b39fc552",
          "form": "dictionary",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "働く。",
              "hira": "はたらく。",
              "pronunciation": "하타라쿠",
              "meaning": "일하다."
            }
          ]
        }
      ],
      [
        "休む",
        "やすむ",
        "야스무",
        "쉬다 / 결석하다",
        {
          "id": "verb_8b24f26b_dictionary",
          "baseId": "verb_8b24f26b",
          "form": "dictionary",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "休む。",
              "hira": "やすむ。",
              "pronunciation": "야스무",
              "meaning": "쉬다 / 결석하다."
            }
          ]
        }
      ],
      [
        "使う",
        "つかう",
        "츠카우",
        "사용하다",
        {
          "id": "verb_bb0e5d22_dictionary",
          "baseId": "verb_bb0e5d22",
          "form": "dictionary",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "使う。",
              "hira": "つかう。",
              "pronunciation": "츠카우",
              "meaning": "사용하다."
            }
          ]
        }
      ],
      [
        "作る",
        "つくる",
        "츠쿠루",
        "만들다",
        {
          "id": "verb_94b87121_dictionary",
          "baseId": "verb_94b87121",
          "form": "dictionary",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "作る。",
              "hira": "つくる。",
              "pronunciation": "츠쿠루",
              "meaning": "만들다."
            }
          ]
        }
      ],
      [
        "持つ",
        "もつ",
        "모츠",
        "가지다 / 들다",
        {
          "id": "verb_9197e4fd_dictionary",
          "baseId": "verb_9197e4fd",
          "form": "dictionary",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "持つ。",
              "hira": "もつ。",
              "pronunciation": "모츠",
              "meaning": "가지다 / 들다."
            }
          ]
        }
      ],
      [
        "取る",
        "とる",
        "토루",
        "잡다 / 취하다",
        {
          "id": "verb_49234a82_dictionary",
          "baseId": "verb_49234a82",
          "form": "dictionary",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "取る。",
              "hira": "とる。",
              "pronunciation": "토루",
              "meaning": "잡다 / 취하다."
            }
          ]
        }
      ],
      [
        "置く",
        "おく",
        "오쿠",
        "놓다 / 두다",
        {
          "id": "verb_fc7721ef_dictionary",
          "baseId": "verb_fc7721ef",
          "form": "dictionary",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "置く。",
              "hira": "おく。",
              "pronunciation": "오쿠",
              "meaning": "놓다 / 두다."
            }
          ]
        }
      ],
      [
        "開ける",
        "あける",
        "아케루",
        "열다",
        {
          "id": "verb_75b7bd31_dictionary",
          "baseId": "verb_75b7bd31",
          "form": "dictionary",
          "level": "N5",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "開ける。",
              "hira": "あける。",
              "pronunciation": "아케루",
              "meaning": "열다."
            }
          ]
        }
      ],
      [
        "閉める",
        "しめる",
        "시메루",
        "닫다",
        {
          "id": "verb_cc46a6d5_dictionary",
          "baseId": "verb_cc46a6d5",
          "form": "dictionary",
          "level": "N5",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "閉める。",
              "hira": "しめる。",
              "pronunciation": "시메루",
              "meaning": "닫다."
            }
          ]
        }
      ],
      [
        "開く",
        "あく",
        "아쿠",
        "열리다",
        {
          "id": "verb_8c7f33dc_dictionary",
          "baseId": "verb_8c7f33dc",
          "form": "dictionary",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "開く。",
              "hira": "あく。",
              "pronunciation": "아쿠",
              "meaning": "열리다."
            }
          ]
        }
      ],
      [
        "閉まる",
        "しまる",
        "시마루",
        "닫히다",
        {
          "id": "verb_7a531040_dictionary",
          "baseId": "verb_7a531040",
          "form": "dictionary",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "閉まる。",
              "hira": "しまる。",
              "pronunciation": "시마루",
              "meaning": "닫히다."
            }
          ]
        }
      ],
      [
        "始める",
        "はじめる",
        "하지메루",
        "시작하다",
        {
          "id": "verb_af915dc0_dictionary",
          "baseId": "verb_af915dc0",
          "form": "dictionary",
          "level": "N5",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "始める。",
              "hira": "はじめる。",
              "pronunciation": "하지메루",
              "meaning": "시작하다."
            }
          ]
        }
      ],
      [
        "始まる",
        "はじまる",
        "하지마루",
        "시작되다",
        {
          "id": "verb_6d0d725d_dictionary",
          "baseId": "verb_6d0d725d",
          "form": "dictionary",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "始まる。",
              "hira": "はじまる。",
              "pronunciation": "하지마루",
              "meaning": "시작되다."
            }
          ]
        }
      ],
      [
        "終わる",
        "おわる",
        "오와루",
        "끝나다",
        {
          "id": "verb_282e7ad7_dictionary",
          "baseId": "verb_282e7ad7",
          "form": "dictionary",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "終わる。",
              "hira": "おわる。",
              "pronunciation": "오와루",
              "meaning": "끝나다."
            }
          ]
        }
      ],
      [
        "教える",
        "おしえる",
        "오시에루",
        "가르치다 / 알려 주다",
        {
          "id": "verb_8fcd9672_dictionary",
          "baseId": "verb_8fcd9672",
          "form": "dictionary",
          "level": "N5",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "教える。",
              "hira": "おしえる。",
              "pronunciation": "오시에루",
              "meaning": "가르치다 / 알려 주다."
            }
          ]
        }
      ],
      [
        "習う",
        "ならう",
        "나라우",
        "배우다",
        {
          "id": "verb_815c9429_dictionary",
          "baseId": "verb_815c9429",
          "form": "dictionary",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "習う。",
              "hira": "ならう。",
              "pronunciation": "나라우",
              "meaning": "배우다."
            }
          ]
        }
      ],
      [
        "勉強する",
        "べんきょうする",
        "벤쿄오스루",
        "공부하다",
        {
          "id": "verb_c17e2e8d_dictionary",
          "baseId": "verb_c17e2e8d",
          "form": "dictionary",
          "level": "N5",
          "meta": {
            "verbGroup": "3그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "勉強する。",
              "hira": "べんきょうする。",
              "pronunciation": "벤쿄오스루",
              "meaning": "공부하다."
            }
          ]
        }
      ],
      [
        "練習する",
        "れんしゅうする",
        "렌슈우스루",
        "연습하다",
        {
          "id": "verb_869aa4c0_dictionary",
          "baseId": "verb_869aa4c0",
          "form": "dictionary",
          "level": "N5",
          "meta": {
            "verbGroup": "3그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "練習する。",
              "hira": "れんしゅうする。",
              "pronunciation": "렌슈우스루",
              "meaning": "연습하다."
            }
          ]
        }
      ],
      [
        "掃除する",
        "そうじする",
        "소오지스루",
        "청소하다",
        {
          "id": "verb_52eafdbf_dictionary",
          "baseId": "verb_52eafdbf",
          "form": "dictionary",
          "level": "N5",
          "meta": {
            "verbGroup": "3그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "掃除する。",
              "hira": "そうじする。",
              "pronunciation": "소오지스루",
              "meaning": "청소하다."
            }
          ]
        }
      ],
      [
        "料理する",
        "りょうりする",
        "료오리스루",
        "요리하다",
        {
          "id": "verb_76f375dd_dictionary",
          "baseId": "verb_76f375dd",
          "form": "dictionary",
          "level": "N5",
          "meta": {
            "verbGroup": "3그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "料理する。",
              "hira": "りょうりする。",
              "pronunciation": "료오리스루",
              "meaning": "요리하다."
            }
          ]
        }
      ],
      [
        "電話する",
        "でんわする",
        "덴와스루",
        "전화하다",
        {
          "id": "verb_c9e5c467_dictionary",
          "baseId": "verb_c9e5c467",
          "form": "dictionary",
          "level": "N5",
          "meta": {
            "verbGroup": "3그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "電話する。",
              "hira": "でんわする。",
              "pronunciation": "덴와스루",
              "meaning": "전화하다."
            }
          ]
        }
      ],
      [
        "住む",
        "すむ",
        "스무",
        "살다 / 거주하다",
        {
          "id": "verb_42073ff3_dictionary",
          "baseId": "verb_42073ff3",
          "form": "dictionary",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "住む。",
              "hira": "すむ。",
              "pronunciation": "스무",
              "meaning": "살다 / 거주하다."
            }
          ]
        }
      ],
      [
        "乗る",
        "のる",
        "노루",
        "타다",
        {
          "id": "verb_82276e1f_dictionary",
          "baseId": "verb_82276e1f",
          "form": "dictionary",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "乗る。",
              "hira": "のる。",
              "pronunciation": "노루",
              "meaning": "타다."
            }
          ]
        }
      ],
      [
        "降りる",
        "おりる",
        "오리루",
        "내리다",
        {
          "id": "verb_6432570a_dictionary",
          "baseId": "verb_6432570a",
          "form": "dictionary",
          "level": "N5",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "降りる。",
              "hira": "おりる。",
              "pronunciation": "오리루",
              "meaning": "내리다."
            }
          ]
        }
      ],
      [
        "歩く",
        "あるく",
        "아루쿠",
        "걷다",
        {
          "id": "verb_be581e40_dictionary",
          "baseId": "verb_be581e40",
          "form": "dictionary",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "歩く。",
              "hira": "あるく。",
              "pronunciation": "아루쿠",
              "meaning": "걷다."
            }
          ]
        }
      ],
      [
        "走る",
        "はしる",
        "하시루",
        "달리다",
        {
          "id": "verb_be92b238_dictionary",
          "baseId": "verb_be92b238",
          "form": "dictionary",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "走る。",
              "hira": "はしる。",
              "pronunciation": "하시루",
              "meaning": "달리다."
            }
          ]
        }
      ],
      [
        "泳ぐ",
        "およぐ",
        "오요구",
        "수영하다",
        {
          "id": "verb_c033fc3e_dictionary",
          "baseId": "verb_c033fc3e",
          "form": "dictionary",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "泳ぐ。",
              "hira": "およぐ。",
              "pronunciation": "오요구",
              "meaning": "수영하다."
            }
          ]
        }
      ],
      [
        "遊ぶ",
        "あそぶ",
        "아소부",
        "놀다",
        {
          "id": "verb_0a81a103_dictionary",
          "baseId": "verb_0a81a103",
          "form": "dictionary",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "遊ぶ。",
              "hira": "あそぶ。",
              "pronunciation": "아소부",
              "meaning": "놀다."
            }
          ]
        }
      ],
      [
        "歌う",
        "うたう",
        "우타우",
        "노래하다",
        {
          "id": "verb_9a70b818_dictionary",
          "baseId": "verb_9a70b818",
          "form": "dictionary",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "歌う。",
              "hira": "うたう。",
              "pronunciation": "우타우",
              "meaning": "노래하다."
            }
          ]
        }
      ],
      [
        "弾く",
        "ひく",
        "히쿠",
        "연주하다 / (악기를) 치다",
        {
          "id": "verb_354a8800_dictionary",
          "baseId": "verb_354a8800",
          "form": "dictionary",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "弾く。",
              "hira": "ひく。",
              "pronunciation": "히쿠",
              "meaning": "연주하다 / 튕기다."
            }
          ]
        }
      ],
      [
        "送る",
        "おくる",
        "오쿠루",
        "보내다",
        {
          "id": "verb_db6ec419_dictionary",
          "baseId": "verb_db6ec419",
          "form": "dictionary",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "送る。",
              "hira": "おくる。",
              "pronunciation": "오쿠루",
              "meaning": "보내다."
            }
          ]
        }
      ],
      [
        "もらう",
        "もらう",
        "모라우",
        "받다",
        {
          "id": "verb_b893c882_dictionary",
          "baseId": "verb_b893c882",
          "form": "dictionary",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "もらう。",
              "hira": "もらう。",
              "pronunciation": "모라우",
              "meaning": "받다."
            }
          ]
        }
      ],
      [
        "あげる",
        "あげる",
        "아게루",
        "주다",
        {
          "id": "verb_feb367cc_dictionary",
          "baseId": "verb_feb367cc",
          "form": "dictionary",
          "level": "N5",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "あげる。",
              "hira": "あげる。",
              "pronunciation": "아게루",
              "meaning": "주다."
            }
          ]
        }
      ],
      [
        "くれる",
        "くれる",
        "쿠레루",
        "주다",
        {
          "id": "verb_a98f3e33_dictionary",
          "baseId": "verb_a98f3e33",
          "form": "dictionary",
          "level": "N5",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "くれる。",
              "hira": "くれる。",
              "pronunciation": "쿠레루",
              "meaning": "주다."
            }
          ]
        }
      ],
      [
        "借りる",
        "かりる",
        "카리루",
        "빌리다",
        {
          "id": "verb_95d2b597_dictionary",
          "baseId": "verb_95d2b597",
          "form": "dictionary",
          "level": "N5",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "借りる。",
              "hira": "かりる。",
              "pronunciation": "카리루",
              "meaning": "빌리다."
            }
          ]
        }
      ],
      [
        "貸す",
        "かす",
        "카스",
        "빌려주다",
        {
          "id": "verb_d91a49e4_dictionary",
          "baseId": "verb_d91a49e4",
          "form": "dictionary",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "貸す。",
              "hira": "かす。",
              "pronunciation": "카스",
              "meaning": "빌려주다."
            }
          ]
        }
      ],
      [
        "返す",
        "かえす",
        "카에스",
        "돌려주다 / 반환하다",
        {
          "id": "verb_37b69281_dictionary",
          "baseId": "verb_37b69281",
          "form": "dictionary",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "返す。",
              "hira": "かえす。",
              "pronunciation": "카에스",
              "meaning": "돌려주다 / 반환하다."
            }
          ]
        }
      ],
      [
        "忘れる",
        "わすれる",
        "와스레루",
        "잊다",
        {
          "id": "verb_9040ec21_dictionary",
          "baseId": "verb_9040ec21",
          "form": "dictionary",
          "level": "N5",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "忘れる。",
              "hira": "わすれる。",
              "pronunciation": "와스레루",
              "meaning": "잊다."
            }
          ]
        }
      ],
      [
        "覚える",
        "おぼえる",
        "오보에루",
        "외우다 / 기억하다",
        {
          "id": "verb_e9ccbd29_dictionary",
          "baseId": "verb_e9ccbd29",
          "form": "dictionary",
          "level": "N5",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "覚える。",
              "hira": "おぼえる。",
              "pronunciation": "오보에루",
              "meaning": "외우다 / 기억하다."
            }
          ]
        }
      ],
      [
        "知る",
        "しる",
        "시루",
        "알다",
        {
          "id": "verb_e59eecb9_dictionary",
          "baseId": "verb_e59eecb9",
          "form": "dictionary",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "知る。",
              "hira": "しる。",
              "pronunciation": "시루",
              "meaning": "알다."
            }
          ]
        }
      ],
      [
        "分かる",
        "わかる",
        "와카루",
        "알다 / 이해하다",
        {
          "id": "verb_c3f97595_dictionary",
          "baseId": "verb_c3f97595",
          "form": "dictionary",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "分かる。",
              "hira": "わかる。",
              "pronunciation": "와카루",
              "meaning": "알다 / 이해하다."
            }
          ]
        }
      ],
      [
        "思う",
        "おもう",
        "오모우",
        "생각하다",
        {
          "id": "verb_5d47ba56_dictionary",
          "baseId": "verb_5d47ba56",
          "form": "dictionary",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "思う。",
              "hira": "おもう。",
              "pronunciation": "오모우",
              "meaning": "생각하다."
            }
          ]
        }
      ],
      [
        "考える",
        "かんがえる",
        "칸가에루",
        "생각하다 / 고려하다",
        {
          "id": "verb_32df321f_dictionary",
          "baseId": "verb_32df321f",
          "form": "dictionary",
          "level": "N5",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "考える。",
              "hira": "かんがえる。",
              "pronunciation": "칸가에루",
              "meaning": "생각하다 / 고려하다."
            }
          ]
        }
      ],
      [
        "言う",
        "いう",
        "이우",
        "말하다",
        {
          "id": "verb_a51e57f2_dictionary",
          "baseId": "verb_a51e57f2",
          "form": "dictionary",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "言う。",
              "hira": "いう。",
              "pronunciation": "이우",
              "meaning": "말하다."
            }
          ]
        }
      ],
      [
        "聞く",
        "きく",
        "키쿠",
        "듣다 / 묻다",
        {
          "id": "verb_797f8264_dictionary",
          "baseId": "verb_797f8264",
          "form": "dictionary",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "聞く。",
              "hira": "きく。",
              "pronunciation": "키쿠",
              "meaning": "듣다 / 묻다."
            }
          ]
        }
      ],
      [
        "答える",
        "こたえる",
        "코타에루",
        "대답하다",
        {
          "id": "verb_b03e9e2d_dictionary",
          "baseId": "verb_b03e9e2d",
          "form": "dictionary",
          "level": "N5",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "答える。",
              "hira": "こたえる。",
              "pronunciation": "코타에루",
              "meaning": "대답하다."
            }
          ]
        }
      ],
      [
        "待つ",
        "まつ",
        "마츠",
        "기다리다",
        {
          "id": "verb_aec76c47_dictionary",
          "baseId": "verb_aec76c47",
          "form": "dictionary",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "待つ。",
              "hira": "まつ。",
              "pronunciation": "마츠",
              "meaning": "기다리다."
            }
          ]
        }
      ],
      [
        "急ぐ",
        "いそぐ",
        "이소구",
        "서두르다",
        {
          "id": "verb_26e8be16_dictionary",
          "baseId": "verb_26e8be16",
          "form": "dictionary",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "急ぐ。",
              "hira": "いそぐ。",
              "pronunciation": "이소구",
              "meaning": "서두르다."
            }
          ]
        }
      ],
      [
        "入る",
        "はいる",
        "하이루",
        "들어가다",
        {
          "id": "verb_ffa98111_dictionary",
          "baseId": "verb_ffa98111",
          "form": "dictionary",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "入る。",
              "hira": "はいる。",
              "pronunciation": "하이루",
              "meaning": "들어가다."
            }
          ]
        }
      ],
      [
        "出る",
        "でる",
        "데루",
        "나오다 / 나가다",
        {
          "id": "verb_022a74da_dictionary",
          "baseId": "verb_022a74da",
          "form": "dictionary",
          "level": "N5",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "出る。",
              "hira": "でる。",
              "pronunciation": "데루",
              "meaning": "나오다 / 나가다."
            }
          ]
        }
      ],
      [
        "入れる",
        "いれる",
        "이레루",
        "넣다",
        {
          "id": "verb_8aee63b8_dictionary",
          "baseId": "verb_8aee63b8",
          "form": "dictionary",
          "level": "N5",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "入れる。",
              "hira": "いれる。",
              "pronunciation": "이레루",
              "meaning": "넣다."
            }
          ]
        }
      ],
      [
        "出す",
        "だす",
        "다스",
        "꺼내다 / 내다",
        {
          "id": "verb_667067d9_dictionary",
          "baseId": "verb_667067d9",
          "form": "dictionary",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "出す。",
              "hira": "だす。",
              "pronunciation": "다스",
              "meaning": "꺼내다 / 내다."
            }
          ]
        }
      ],
      [
        "着る",
        "きる",
        "키루",
        "입다",
        {
          "id": "verb_1466ca64_dictionary",
          "baseId": "verb_1466ca64",
          "form": "dictionary",
          "level": "N5",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "着る。",
              "hira": "きる。",
              "pronunciation": "키루",
              "meaning": "입다."
            }
          ]
        }
      ],
      [
        "脱ぐ",
        "ぬぐ",
        "누구",
        "벗다",
        {
          "id": "verb_a6ae45f8_dictionary",
          "baseId": "verb_a6ae45f8",
          "form": "dictionary",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "脱ぐ。",
              "hira": "ぬぐ。",
              "pronunciation": "누구",
              "meaning": "벗다."
            }
          ]
        }
      ],
      [
        "洗う",
        "あらう",
        "아라우",
        "씻다",
        {
          "id": "verb_390ef05f_dictionary",
          "baseId": "verb_390ef05f",
          "form": "dictionary",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "洗う。",
              "hira": "あらう。",
              "pronunciation": "아라우",
              "meaning": "씻다."
            }
          ]
        }
      ],
      [
        "できる",
        "できます",
        "데키마스",
        "할 수 있다 / 가능하다",
        {
          "id": "verb_0f9c874c_dictionary",
          "baseId": "verb_0f9c874c",
          "form": "dictionary",
          "level": "N5",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "できます。",
              "hira": "できます。",
              "pronunciation": "데키마스",
              "meaning": "할 수 있다."
            }
          ]
        }
      ],
      [
        "終える",
        "おえる",
        "오에루",
        "끝내다",
        {
          "id": "verb_extra_終える_dictionary",
          "baseId": "verb_extra_終える",
          "form": "dictionary",
          "level": "N3",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "仕事を終えました。",
              "hira": "しごとをおえました。",
              "pronunciation": "시고토오 오에마시타",
              "meaning": "끝내다."
            }
          ]
        }
      ],
      [
        "続ける",
        "つづける",
        "츠즈케루",
        "계속하다",
        {
          "id": "verb_extra_続ける_dictionary",
          "baseId": "verb_extra_続ける",
          "form": "dictionary",
          "level": "N4",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "勉強を続けます。",
              "hira": "べんきょうをつづけます。",
              "pronunciation": "벤쿄오오 츠즈케마스",
              "meaning": "계속하다."
            }
          ]
        }
      ],
      [
        "止める",
        "とめる",
        "토메루",
        "멈추다 / 세우다",
        {
          "id": "verb_extra_止める_dictionary",
          "baseId": "verb_extra_止める",
          "form": "dictionary",
          "level": "N4",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "車を止めてください。",
              "hira": "くるまをとめてください。",
              "pronunciation": "쿠루마오 토메테 쿠다사이",
              "meaning": "멈추다 / 세우다."
            }
          ]
        }
      ],
      [
        "変える",
        "かえる",
        "카에루",
        "바꾸다",
        {
          "id": "verb_extra_変える_dictionary",
          "baseId": "verb_extra_変える",
          "form": "dictionary",
          "level": "N4",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "予定を変えました。",
              "hira": "よていをかえました。",
              "pronunciation": "요테이오 카에마시타",
              "meaning": "바꾸다."
            }
          ]
        }
      ],
      [
        "決める",
        "きめる",
        "키메루",
        "정하다",
        {
          "id": "verb_extra_決める_dictionary",
          "baseId": "verb_extra_決める",
          "form": "dictionary",
          "level": "N4",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "日程を決めます。",
              "hira": "にっていをきめます。",
              "pronunciation": "닛테이오 키메마스",
              "meaning": "정하다."
            }
          ]
        }
      ],
      [
        "選ぶ",
        "えらぶ",
        "에라부",
        "고르다 / 선택하다",
        {
          "id": "verb_extra_選ぶ_dictionary",
          "baseId": "verb_extra_選ぶ",
          "form": "dictionary",
          "level": "N4",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "好きな色を選びます。",
              "hira": "すきないろをえらびます。",
              "pronunciation": "스키나 이로오 에라비마스",
              "meaning": "고르다 / 선택하다."
            }
          ]
        }
      ],
      [
        "探す",
        "さがす",
        "사가스",
        "찾다",
        {
          "id": "verb_extra_探す_dictionary",
          "baseId": "verb_extra_探す",
          "form": "dictionary",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "鍵を探しています。",
              "hira": "かぎをさがしています。",
              "pronunciation": "카기오 사가시테 이마스",
              "meaning": "찾다."
            }
          ]
        }
      ],
      [
        "見つける",
        "みつける",
        "미츠케루",
        "찾아내다 / 발견하다",
        {
          "id": "verb_extra_見つける_dictionary",
          "baseId": "verb_extra_見つける",
          "form": "dictionary",
          "level": "N4",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "いい店を見つけました。",
              "hira": "いいみせをみつけました。",
              "pronunciation": "이이 미세오 미츠케마시타",
              "meaning": "찾아내다 / 발견하다."
            }
          ]
        }
      ],
      [
        "見つかる",
        "みつかる",
        "미츠카루",
        "발견되다 / 찾아지다",
        {
          "id": "verb_extra_見つかる_dictionary",
          "baseId": "verb_extra_見つかる",
          "form": "dictionary",
          "level": "N4",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "鍵が見つかりました。",
              "hira": "かぎがみつかりました。",
              "pronunciation": "카기가 미츠카리마시타",
              "meaning": "발견되다 / 찾아지다."
            }
          ]
        }
      ],
      [
        "調べる",
        "しらべる",
        "시라베루",
        "조사하다 / 찾아보다",
        {
          "id": "verb_extra_調べる_dictionary",
          "baseId": "verb_extra_調べる",
          "form": "dictionary",
          "level": "N5",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "意味を調べます。",
              "hira": "いみをしらべます。",
              "pronunciation": "이미오 시라베마스",
              "meaning": "조사하다 / 찾아보다."
            }
          ]
        }
      ],
      [
        "決まる",
        "きまる",
        "키마루",
        "정해지다",
        {
          "id": "verb_extra_決まる_dictionary",
          "baseId": "verb_extra_決まる",
          "form": "dictionary",
          "level": "N4",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "日程が決まりました。",
              "hira": "にっていがきまりました。",
              "pronunciation": "닛테이가 키마리마시타",
              "meaning": "정해지다."
            }
          ]
        }
      ],
      [
        "比べる",
        "くらべる",
        "쿠라베루",
        "비교하다",
        {
          "id": "verb_extra_比べる_dictionary",
          "baseId": "verb_extra_比べる",
          "form": "dictionary",
          "level": "N4",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "二つを比べます。",
              "hira": "ふたつをくらべます。",
              "pronunciation": "후타츠오 쿠라베마스",
              "meaning": "비교하다."
            }
          ]
        }
      ],
      [
        "受ける",
        "うける",
        "우케루",
        "받다 / 응시하다",
        {
          "id": "verb_extra_受ける_dictionary",
          "baseId": "verb_extra_受ける",
          "form": "dictionary",
          "level": "N4",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "試験を受けます。",
              "hira": "しけんをうけます。",
              "pronunciation": "시켄오 우케마스",
              "meaning": "받다 / 응시하다."
            }
          ]
        }
      ],
      [
        "申し込む",
        "もうしこむ",
        "모오시코무",
        "신청하다",
        {
          "id": "verb_extra_申し込む_dictionary",
          "baseId": "verb_extra_申し込む",
          "form": "dictionary",
          "level": "N3",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "講座に申し込みます。",
              "hira": "こうざにもうしこみます。",
              "pronunciation": "코오자니 모오시코미마스",
              "meaning": "신청하다."
            }
          ]
        }
      ],
      [
        "予約する",
        "よやくする",
        "요야쿠 스루",
        "예약하다",
        {
          "id": "verb_extra_予約する_dictionary",
          "baseId": "verb_extra_予約する",
          "form": "dictionary",
          "level": "N4",
          "meta": {
            "verbGroup": "3그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "ホテルを予約します。",
              "hira": "ホテルをよやくします。",
              "pronunciation": "호테루오 요야쿠 시마스",
              "meaning": "예약하다."
            }
          ]
        }
      ],
      [
        "確認する",
        "かくにんする",
        "카쿠닌 스루",
        "확인하다",
        {
          "id": "verb_extra_確認する_dictionary",
          "baseId": "verb_extra_確認する",
          "form": "dictionary",
          "level": "N3",
          "meta": {
            "verbGroup": "3그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "時間を確認します。",
              "hira": "じかんをかくにんします。",
              "pronunciation": "지칸오 카쿠닌 시마스",
              "meaning": "확인하다."
            }
          ]
        }
      ],
      [
        "連絡する",
        "れんらくする",
        "렌라쿠 스루",
        "연락하다",
        {
          "id": "verb_extra_連絡する_dictionary",
          "baseId": "verb_extra_連絡する",
          "form": "dictionary",
          "level": "N3",
          "meta": {
            "verbGroup": "3그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "後で連絡します。",
              "hira": "あとでれんらくします。",
              "pronunciation": "아토데 렌라쿠 시마스",
              "meaning": "연락하다."
            }
          ]
        }
      ],
      [
        "説明する",
        "せつめいする",
        "세츠메이 스루",
        "설명하다",
        {
          "id": "verb_extra_説明する_dictionary",
          "baseId": "verb_extra_説明する",
          "form": "dictionary",
          "level": "N3",
          "meta": {
            "verbGroup": "3그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "使い方を説明します。",
              "hira": "つかいかたをせつめいします。",
              "pronunciation": "츠카이카타오 세츠메이 시마스",
              "meaning": "설명하다."
            }
          ]
        }
      ],
      [
        "準備する",
        "じゅんびする",
        "준비 스루",
        "준비하다",
        {
          "id": "verb_extra_準備する_dictionary",
          "baseId": "verb_extra_準備する",
          "form": "dictionary",
          "level": "N4",
          "meta": {
            "verbGroup": "3그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "旅行の準備をします。",
              "hira": "りょこうのじゅんびをします。",
              "pronunciation": "료코오노 준비오 시마스",
              "meaning": "준비하다."
            }
          ]
        }
      ],
      [
        "片付ける",
        "かたづける",
        "카타즈케루",
        "정리하다 / 치우다",
        {
          "id": "verb_extra_片付ける_dictionary",
          "baseId": "verb_extra_片付ける",
          "form": "dictionary",
          "level": "N4",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "部屋を片付けます。",
              "hira": "へやをかたづけます。",
              "pronunciation": "헤야오 카타즈케마스",
              "meaning": "정리하다."
            }
          ]
        }
      ],
      [
        "洗濯する",
        "せんたくする",
        "센타쿠 스루",
        "세탁하다",
        {
          "id": "verb_extra_洗濯する_dictionary",
          "baseId": "verb_extra_洗濯する",
          "form": "dictionary",
          "level": "N4",
          "meta": {
            "verbGroup": "3그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "週末に洗濯します。",
              "hira": "しゅうまつにせんたくします。",
              "pronunciation": "슈우마츠니 센타쿠 시마스",
              "meaning": "세탁하다."
            }
          ]
        }
      ],
      [
        "出発する",
        "しゅっぱつする",
        "슛파츠 스루",
        "출발하다",
        {
          "id": "verb_extra_出発する_dictionary",
          "baseId": "verb_extra_出発する",
          "form": "dictionary",
          "level": "N4",
          "meta": {
            "verbGroup": "3그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "八時に出発します。",
              "hira": "はちじにしゅっぱつします。",
              "pronunciation": "하치지니 슛파츠 시마스",
              "meaning": "출발하다."
            }
          ]
        }
      ],
      [
        "到着する",
        "とうちゃくする",
        "토오차쿠 스루",
        "도착하다",
        {
          "id": "verb_extra_到着する_dictionary",
          "baseId": "verb_extra_到着する",
          "form": "dictionary",
          "level": "N3",
          "meta": {
            "verbGroup": "3그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "午後に到着します。",
              "hira": "ごごにとうちゃくします。",
              "pronunciation": "고고니 토오차쿠 시마스",
              "meaning": "도착하다."
            }
          ]
        }
      ],
      [
        "利用する",
        "りようする",
        "리요오 스루",
        "이용하다",
        {
          "id": "verb_extra_利用する_dictionary",
          "baseId": "verb_extra_利用する",
          "form": "dictionary",
          "level": "N3",
          "meta": {
            "verbGroup": "3그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "このサービスを利用します。",
              "hira": "このサービスをりようします。",
              "pronunciation": "코노 사아비스오 리요오 시마스",
              "meaning": "이용하다."
            }
          ]
        }
      ],
      [
        "運ぶ",
        "はこぶ",
        "하코부",
        "나르다 / 운반하다",
        {
          "id": "verb_add_000_dictionary",
          "level": "N4",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "荷物を運びます。",
              "hira": "にもつをはこびます。",
              "pronunciation": "짐을 하코비마스",
              "meaning": "나르다 / 운반하다."
            }
          ],
          "baseId": "verb_c2486c41e6",
          "form": "dictionary"
        }
      ],
      [
        "売る",
        "うる",
        "우루",
        "팔다",
        {
          "id": "verb_add_001_dictionary",
          "level": "N4",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "この本を売ります。",
              "hira": "このほんをうります。",
              "pronunciation": "이 책을 우리마스",
              "meaning": "나르다 / 운반하다."
            }
          ],
          "baseId": "verb_ec51fc2e16",
          "form": "dictionary"
        }
      ],
      [
        "消す",
        "けす",
        "케스",
        "끄다 / 지우다",
        {
          "id": "verb_add_002_dictionary",
          "level": "N4",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "電気を消します。",
              "hira": "でんきをけします。",
              "pronunciation": "불을 케시마스",
              "meaning": "나르다 / 운반하다."
            }
          ],
          "baseId": "verb_df2b3a6397",
          "form": "dictionary"
        }
      ],
      [
        "押す",
        "おす",
        "오스",
        "누르다 / 밀다",
        {
          "id": "verb_add_003_dictionary",
          "level": "N4",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "ボタンを押します。",
              "hira": "ぼたんをおします。",
              "pronunciation": "버튼을 오시마스",
              "meaning": "나르다 / 운반하다."
            }
          ],
          "baseId": "verb_30038e39f3",
          "form": "dictionary"
        }
      ],
      [
        "引く",
        "ひく",
        "히쿠",
        "당기다 / 끌다",
        {
          "id": "verb_add_004_dictionary",
          "level": "N4",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "ドアを引きます。",
              "hira": "どあをひきます。",
              "pronunciation": "문을 히키마스",
              "meaning": "나르다 / 운반하다."
            }
          ],
          "baseId": "verb_371c196bcb",
          "form": "dictionary"
        }
      ],
      [
        "拾う",
        "ひろう",
        "히로우",
        "줍다",
        {
          "id": "verb_add_005_dictionary",
          "level": "N4",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "道で財布を拾います。",
              "hira": "みちでさいふをひろいます。",
              "pronunciation": "길에서 지갑을 히로이마스",
              "meaning": "나르다 / 운반하다."
            }
          ],
          "baseId": "verb_d404351530",
          "form": "dictionary"
        }
      ],
      [
        "捨てる",
        "すてる",
        "스테루",
        "버리다",
        {
          "id": "verb_add_006_dictionary",
          "level": "N4",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "古い服を捨てます。",
              "hira": "ふるいふくをすてます。",
              "pronunciation": "낡은 옷을 스테마스",
              "meaning": "나르다 / 운반하다."
            }
          ],
          "baseId": "verb_e720775ac7",
          "form": "dictionary"
        }
      ],
      [
        "集める",
        "あつめる",
        "아츠메루",
        "모으다",
        {
          "id": "verb_add_007_dictionary",
          "level": "N4",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "資料を集めます。",
              "hira": "しりょうをあつめます。",
              "pronunciation": "자료를 아츠메마스",
              "meaning": "나르다 / 운반하다."
            }
          ],
          "baseId": "verb_0a49f1e34a",
          "form": "dictionary"
        }
      ],
      [
        "直す",
        "なおす",
        "나오스",
        "고치다 / 수리하다",
        {
          "id": "verb_add_009_dictionary",
          "level": "N4",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "間違いを直します。",
              "hira": "まちがいをなおします。",
              "pronunciation": "실수를 나오시마스",
              "meaning": "나르다 / 운반하다."
            }
          ],
          "baseId": "verb_442e7ec90b",
          "form": "dictionary"
        }
      ],
      [
        "直る",
        "なおる",
        "나오루",
        "고쳐지다 / 낫다",
        {
          "id": "verb_add_010_dictionary",
          "level": "N4",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "パソコンが直ります。",
              "hira": "ぱそこんがなおります。",
              "pronunciation": "파소콘가 나오리마스",
              "meaning": "나르다 / 운반하다."
            }
          ],
          "baseId": "verb_1f8de4ba37",
          "form": "dictionary"
        }
      ],
      [
        "壊す",
        "こわす",
        "코와스",
        "망가뜨리다 / 고장 내다",
        {
          "id": "verb_add_011_dictionary",
          "level": "N4",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "機械を壊します。",
              "hira": "きかいをこわします。",
              "pronunciation": "기계를 코와시마스",
              "meaning": "나르다 / 운반하다."
            }
          ],
          "baseId": "verb_4160686f0d",
          "form": "dictionary"
        }
      ],
      [
        "壊れる",
        "こわれる",
        "코와레루",
        "망가지다 / 고장 나다",
        {
          "id": "verb_add_012_dictionary",
          "level": "N4",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "時計が壊れます。",
              "hira": "とけいがこわれます。",
              "pronunciation": "토케이가 코와레마스",
              "meaning": "나르다 / 운반하다."
            }
          ],
          "baseId": "verb_c34da08306",
          "form": "dictionary"
        }
      ],
      [
        "遅れる",
        "おくれる",
        "오쿠레루",
        "늦다 / 늦어지다",
        {
          "id": "verb_add_013_dictionary",
          "level": "N4",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "電車が遅れます。",
              "hira": "でんしゃがおくれます。",
              "pronunciation": "덴샤가 오쿠레마스",
              "meaning": "나르다 / 운반하다."
            }
          ],
          "baseId": "verb_89aa88ff42",
          "form": "dictionary"
        }
      ],
      [
        "間に合う",
        "まにあう",
        "마니아우",
        "시간에 맞다 / 늦지 않다",
        {
          "id": "verb_add_014_dictionary",
          "level": "N4",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "時間に間に合います。",
              "hira": "じかんにまにあいます。",
              "pronunciation": "지칸니 마니아이마스",
              "meaning": "나르다 / 운반하다."
            }
          ],
          "baseId": "verb_28940f5774",
          "form": "dictionary"
        }
      ],
      [
        "参加する",
        "さんかする",
        "산카스루",
        "참가하다",
        {
          "id": "verb_add_018_dictionary",
          "level": "N4",
          "meta": {
            "verbGroup": "3그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "会議に参加します。",
              "hira": "かいぎにさんかします。",
              "pronunciation": "카이기니 산카시마스",
              "meaning": "나르다 / 운반하다."
            }
          ],
          "baseId": "verb_f8da0bc1c2",
          "form": "dictionary"
        }
      ],
      [
        "止まる",
        "とまる",
        "토마루",
        "멈추다",
        {
          "id": "verb_extra_1_dict",
          "baseId": "verb_extra_1",
          "form": "dictionary",
          "level": "N4",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "自動詞"
          },
          "examples": [
            {
              "jp": "電車が止まる。",
              "hira": "でんしゃがとまる。",
              "pronunciation": "덴샤가 토마루",
              "meaning": "전철이 멈춘다."
            }
          ]
        }
      ],
      [
        "呼ぶ",
        "よぶ",
        "요부",
        "부르다",
        {
          "id": "verb_extra_2_dict",
          "baseId": "verb_extra_2",
          "form": "dictionary",
          "level": "N4",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "他動詞"
          },
          "examples": [
            {
              "jp": "店員を呼ぶ。",
              "hira": "てんいんをよぶ。",
              "pronunciation": "텐인오 요부",
              "meaning": "점원을 부른다."
            }
          ]
        }
      ],
      [
        "泊まる",
        "とまる",
        "토마루",
        "묵다 / 숙박하다",
        {
          "id": "verb_extra_3_dict",
          "baseId": "verb_extra_3",
          "form": "dictionary",
          "level": "N4",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "自動詞"
          },
          "examples": [
            {
              "jp": "ホテルに泊まる。",
              "hira": "ほてるにとまる。",
              "pronunciation": "호테루니 토마루",
              "meaning": "호텔에 묵는다."
            }
          ]
        }
      ],
      [
        "着く",
        "つく",
        "츠쿠",
        "도착하다",
        {
          "id": "verb_extra_4_dict",
          "baseId": "verb_extra_4",
          "form": "dictionary",
          "level": "N4",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "自動詞"
          },
          "examples": [
            {
              "jp": "駅に着く。",
              "hira": "えきにつく。",
              "pronunciation": "에키니 츠쿠",
              "meaning": "역에 도착한다."
            }
          ]
        }
      ],
      [
        "乗り換える",
        "のりかえる",
        "노리카에루",
        "갈아타다",
        {
          "id": "verb_extra_5_dict",
          "baseId": "verb_extra_5",
          "form": "dictionary",
          "level": "N4",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "自動詞"
          },
          "examples": [
            {
              "jp": "電車を乗り換える。",
              "hira": "でんしゃをのりかえる。",
              "pronunciation": "덴샤오 노리카에루",
              "meaning": "전철을 갈아탄다."
            }
          ]
        }
      ]
    ],
    "ます형": [
      [
        "行きます",
        "いきます",
        "이마스",
        "갑니다",
        {
          "id": "verb_iku_masu",
          "baseId": "verb_iku",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "明日は学校へ行きます。",
              "hira": "いきます",
              "pronunciation": "이마스",
              "meaning": "내일은 학교에 갑니다."
            }
          ]
        }
      ],
      [
        "食べます",
        "たべます",
        "타베마스",
        "먹습니다",
        {
          "id": "verb_taberu_masu",
          "baseId": "verb_taberu",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "毎朝、朝ご飯を食べます。",
              "hira": "たべます",
              "pronunciation": "타베마스",
              "meaning": "매일 아침, 아침밥을 먹습니다."
            }
          ]
        }
      ],
      [
        "見ます",
        "みます",
        "미마스",
        "봅니다",
        {
          "id": "verb_miru_masu",
          "baseId": "verb_miru",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "夜に映画を見ます。",
              "hira": "みます",
              "pronunciation": "미마스",
              "meaning": "밤에 영화를 봅니다."
            }
          ]
        }
      ],
      [
        "飲みます",
        "のみます",
        "노마스",
        "마십니다",
        {
          "id": "verb_nomu_masu",
          "baseId": "verb_nomu",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "毎朝、水を飲みます。",
              "hira": "のみます",
              "pronunciation": "노마스",
              "meaning": "매일 아침 물을 마십니다."
            }
          ]
        }
      ],
      [
        "書きます",
        "かきます",
        "카마스",
        "씁니다",
        {
          "id": "verb_kaku_masu",
          "baseId": "verb_kaku",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "ノートに名前を書きます。",
              "hira": "かきます",
              "pronunciation": "카마스",
              "meaning": "공책에 이름을 씁니다."
            }
          ]
        }
      ],
      [
        "読みます",
        "よみます",
        "요마스",
        "읽습니다",
        {
          "id": "verb_yomu_masu",
          "baseId": "verb_yomu",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "寝る前に本を読みます。",
              "hira": "よみます",
              "pronunciation": "요마스",
              "meaning": "자기 전에 책을 읽습니다."
            }
          ]
        }
      ],
      [
        "話します",
        "はなします",
        "하나마스",
        "말합니다 / 이야기합니다",
        {
          "id": "verb_hanasu_masu",
          "baseId": "verb_hanasu",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "友達と日本語で話します。",
              "hira": "はなします",
              "pronunciation": "하나마스",
              "meaning": "친구와 일본어로 이야기합니다."
            }
          ]
        }
      ],
      [
        "買います",
        "かいます",
        "카마스",
        "삽니다",
        {
          "id": "verb_kau_masu",
          "baseId": "verb_kau",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "駅で切符を買います。",
              "hira": "かいます",
              "pronunciation": "카마스",
              "meaning": "역에서 표를 삽니다."
            }
          ]
        }
      ],
      [
        "帰ります",
        "かえります",
        "카에마스",
        "돌아갑니다 / 돌아옵니다",
        {
          "id": "verb_kaeru_masu",
          "baseId": "verb_kaeru",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "仕事が終わったら家に帰ります。",
              "hira": "かえります",
              "pronunciation": "카에마스",
              "meaning": "일이 끝나면 집에 돌아갑니다."
            }
          ]
        }
      ],
      [
        "会います",
        "会います",
        "会います",
        "만납니다",
        {
          "id": "verb_8c96a83e_masu",
          "baseId": "verb_8c96a83e",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "週末に友達に会います。",
              "hira": "会います",
              "pronunciation": "会います",
              "meaning": "주말에 친구를 만납니다."
            }
          ]
        }
      ],
      [
        "あります",
        "あります",
        "아리마스",
        "있습니다",
        {
          "id": "verb_b8345a61_masu",
          "baseId": "verb_b8345a61",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "机の上に本があります。",
              "hira": "あります",
              "pronunciation": "아리마스",
              "meaning": "책상 위에 책이 있습니다."
            }
          ]
        }
      ],
      [
        "います",
        "います",
        "이마스",
        "있습니다",
        {
          "id": "verb_bb9d44f8_masu",
          "baseId": "verb_bb9d44f8",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "教室に先生がいます。",
              "hira": "います",
              "pronunciation": "이마스",
              "meaning": "교실에 선생님이 계십니다."
            }
          ]
        }
      ],
      [
        "起きます",
        "起きます",
        "起きます",
        "일어납니다",
        {
          "id": "verb_f1e80ce9_masu",
          "baseId": "verb_f1e80ce9",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "毎朝、七時に起きます。",
              "hira": "起きます",
              "pronunciation": "起きます",
              "meaning": "매일 아침 7시에 일어납니다."
            }
          ]
        }
      ],
      [
        "寝ます",
        "寝ます",
        "寝ます",
        "잡니다",
        {
          "id": "verb_32c88ea6_masu",
          "baseId": "verb_32c88ea6",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "毎晩、十一時に寝ます。",
              "hira": "寝ます",
              "pronunciation": "寝ます",
              "meaning": "매일 밤 11시에 잡니다."
            }
          ]
        }
      ],
      [
        "働きます",
        "働きます",
        "働きます",
        "일합니다",
        {
          "id": "verb_b39fc552_masu",
          "baseId": "verb_b39fc552",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "東京の会社で働きます。",
              "hira": "働きます",
              "pronunciation": "働きます",
              "meaning": "도쿄의 회사에서 일합니다."
            }
          ]
        }
      ],
      [
        "休みます",
        "休みます",
        "休みます",
        "쉽니다 / 결석합니다",
        {
          "id": "verb_8b24f26b_masu",
          "baseId": "verb_8b24f26b",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "今日は家でゆっくり休みます。",
              "hira": "休みます",
              "pronunciation": "休みます",
              "meaning": "오늘은 집에서 푹 쉽니다."
            }
          ]
        }
      ],
      [
        "使います",
        "使います",
        "使います",
        "사용합니다",
        {
          "id": "verb_bb0e5d22_masu",
          "baseId": "verb_bb0e5d22",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "このアプリを毎日使います。",
              "hira": "使います",
              "pronunciation": "使います",
              "meaning": "이 앱을 매일 사용합니다."
            }
          ]
        }
      ],
      [
        "作ります",
        "作ります",
        "作ります",
        "만듭니다",
        {
          "id": "verb_94b87121_masu",
          "baseId": "verb_94b87121",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "週末にカレーを作ります。",
              "hira": "作ります",
              "pronunciation": "作ります",
              "meaning": "주말에 카레를 만듭니다."
            }
          ]
        }
      ],
      [
        "持ちます",
        "持ちます",
        "持ちます",
        "가집니다 / 듭니다",
        {
          "id": "verb_9197e4fd_masu",
          "baseId": "verb_9197e4fd",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "傘を持ちます。",
              "hira": "持ちます",
              "pronunciation": "持ちます",
              "meaning": "우산을 듭니다."
            }
          ]
        }
      ],
      [
        "取ります",
        "取ります",
        "取ります",
        "잡습니다 / 취합니다",
        {
          "id": "verb_49234a82_masu",
          "baseId": "verb_49234a82",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "大事なことをノートに取ります。",
              "hira": "取ります",
              "pronunciation": "取ります",
              "meaning": "중요한 내용을 노트에 적어 둡니다."
            }
          ]
        }
      ],
      [
        "置きます",
        "置きます",
        "置きます",
        "놓습니다 / 둡니다",
        {
          "id": "verb_fc7721ef_masu",
          "baseId": "verb_fc7721ef",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "鍵をテーブルの上に置きます。",
              "hira": "置きます",
              "pronunciation": "置きます",
              "meaning": "열쇠를 테이블 위에 놓습니다."
            }
          ]
        }
      ],
      [
        "開けます",
        "開けます",
        "開けます",
        "엽니다",
        {
          "id": "verb_75b7bd31_masu",
          "baseId": "verb_75b7bd31",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "窓を開けます。",
              "hira": "開けます",
              "pronunciation": "開けます",
              "meaning": "창문을 엽니다."
            }
          ]
        }
      ],
      [
        "閉めます",
        "閉めます",
        "閉めます",
        "닫습니다",
        {
          "id": "verb_cc46a6d5_masu",
          "baseId": "verb_cc46a6d5",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "寝る前にドアを閉めます。",
              "hira": "閉めます",
              "pronunciation": "閉めます",
              "meaning": "자기 전에 문을 닫습니다."
            }
          ]
        }
      ],
      [
        "開きます",
        "開きます",
        "開きます",
        "열립니다",
        {
          "id": "verb_8c7f33dc_masu",
          "baseId": "verb_8c7f33dc",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "店は九時に開きます。",
              "hira": "開きます",
              "pronunciation": "開きます",
              "meaning": "가게는 9시에 엽니다."
            }
          ]
        }
      ],
      [
        "閉まります",
        "閉まります",
        "閉まります",
        "닫힙니다",
        {
          "id": "verb_7a531040_masu",
          "baseId": "verb_7a531040",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "この店は八時に閉まります。",
              "hira": "閉まります",
              "pronunciation": "閉まります",
              "meaning": "이 가게는 8시에 문을 닫습니다."
            }
          ]
        }
      ],
      [
        "始めます",
        "始めます",
        "始めます",
        "시작합니다",
        {
          "id": "verb_af915dc0_masu",
          "baseId": "verb_af915dc0",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "九時から仕事を始めます。",
              "hira": "始めます",
              "pronunciation": "始めます",
              "meaning": "9시부터 일을 시작합니다."
            }
          ]
        }
      ],
      [
        "始まります",
        "始まります",
        "始まります",
        "시작됩니다",
        {
          "id": "verb_6d0d725d_masu",
          "baseId": "verb_6d0d725d",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "授業は九時に始まります。",
              "hira": "始まります",
              "pronunciation": "始まります",
              "meaning": "수업은 9시에 시작됩니다."
            }
          ]
        }
      ],
      [
        "終わります",
        "終わります",
        "終わります",
        "끝납니다",
        {
          "id": "verb_282e7ad7_masu",
          "baseId": "verb_282e7ad7",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "授業は三時に終わります。",
              "hira": "終わります",
              "pronunciation": "終わります",
              "meaning": "수업은 3시에 끝납니다."
            }
          ]
        }
      ],
      [
        "教えます",
        "教えます",
        "教えます",
        "가르칩니다 / 알려 줍니다",
        {
          "id": "verb_8fcd9672_masu",
          "baseId": "verb_8fcd9672",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "先生が日本語を教えます。",
              "hira": "教えます",
              "pronunciation": "教えます",
              "meaning": "선생님이 일본어를 가르칩니다."
            }
          ]
        }
      ],
      [
        "習います",
        "習います",
        "習います",
        "배웁니다",
        {
          "id": "verb_815c9429_masu",
          "baseId": "verb_815c9429",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "先生から日本語を習います。",
              "hira": "習います",
              "pronunciation": "習います",
              "meaning": "선생님에게 일본어를 배웁니다."
            }
          ]
        }
      ],
      [
        "勉強します",
        "べんきょうします",
        "벤쿄오시마스",
        "공부합니다",
        {
          "id": "verb_c17e2e8d_masu",
          "baseId": "verb_c17e2e8d",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "3그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "毎日、日本語を勉強します。",
              "hira": "べんきょうします",
              "pronunciation": "벤쿄오시마스",
              "meaning": "매일 일본어를 공부합니다."
            }
          ]
        }
      ],
      [
        "練習します",
        "れんしゅうします",
        "렌슈우시마스",
        "연습합니다",
        {
          "id": "verb_869aa4c0_masu",
          "baseId": "verb_869aa4c0",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "3그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "毎日、会話を練習します。",
              "hira": "れんしゅうします",
              "pronunciation": "렌슈우시마스",
              "meaning": "매일 회화를 연습합니다."
            }
          ]
        }
      ],
      [
        "掃除します",
        "そうじします",
        "소오지시마스",
        "청소합니다",
        {
          "id": "verb_52eafdbf_masu",
          "baseId": "verb_52eafdbf",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "3그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "毎週、部屋を掃除します。",
              "hira": "そうじします",
              "pronunciation": "소오지시마스",
              "meaning": "매주 방을 청소합니다."
            }
          ]
        }
      ],
      [
        "料理します",
        "りょうりします",
        "료오리시마스",
        "요리합니다",
        {
          "id": "verb_76f375dd_masu",
          "baseId": "verb_76f375dd",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "3그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "週末に家で料理します。",
              "hira": "りょうりします",
              "pronunciation": "료오리시마스",
              "meaning": "주말에 집에서 요리합니다."
            }
          ]
        }
      ],
      [
        "電話します",
        "でんわします",
        "덴와시마스",
        "전화합니다",
        {
          "id": "verb_c9e5c467_masu",
          "baseId": "verb_c9e5c467",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "3그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "母に電話します。",
              "hira": "でんわします",
              "pronunciation": "덴와시마스",
              "meaning": "어머니에게 전화합니다."
            }
          ]
        }
      ],
      [
        "住みます",
        "住みます",
        "住みます",
        "삽니다 / 거주합니다",
        {
          "id": "verb_42073ff3_masu",
          "baseId": "verb_42073ff3",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "ソウルに住みます。",
              "hira": "住みます",
              "pronunciation": "住みます",
              "meaning": "서울에 삽니다."
            }
          ]
        }
      ],
      [
        "乗ります",
        "乗ります",
        "乗ります",
        "탑니다",
        {
          "id": "verb_82276e1f_masu",
          "baseId": "verb_82276e1f",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "毎朝、電車に乗ります。",
              "hira": "乗ります",
              "pronunciation": "乗ります",
              "meaning": "매일 아침 전철을 탑니다."
            }
          ]
        }
      ],
      [
        "降ります",
        "降ります",
        "降ります",
        "내립니다",
        {
          "id": "verb_6432570a_masu",
          "baseId": "verb_6432570a",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "次の駅で電車を降ります。",
              "hira": "降ります",
              "pronunciation": "降ります",
              "meaning": "다음 역에서 전철에서 내립니다."
            }
          ]
        }
      ],
      [
        "歩きます",
        "歩きます",
        "歩きます",
        "걷습니다",
        {
          "id": "verb_be581e40_masu",
          "baseId": "verb_be581e40",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "駅まで歩きます。",
              "hira": "歩きます",
              "pronunciation": "歩きます",
              "meaning": "역까지 걸어갑니다."
            }
          ]
        }
      ],
      [
        "走ります",
        "走ります",
        "走ります",
        "달립니다",
        {
          "id": "verb_be92b238_masu",
          "baseId": "verb_be92b238",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "毎朝、公園を走ります。",
              "hira": "走ります",
              "pronunciation": "走ります",
              "meaning": "매일 아침 공원을 달립니다."
            }
          ]
        }
      ],
      [
        "泳ぎます",
        "泳ぎます",
        "泳ぎます",
        "수영합니다",
        {
          "id": "verb_c033fc3e_masu",
          "baseId": "verb_c033fc3e",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "夏は海で泳ぎます。",
              "hira": "泳ぎます",
              "pronunciation": "泳ぎます",
              "meaning": "여름에는 바다에서 수영합니다."
            }
          ]
        }
      ],
      [
        "遊びます",
        "遊びます",
        "遊びます",
        "놉니다",
        {
          "id": "verb_0a81a103_masu",
          "baseId": "verb_0a81a103",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "週末に友達と遊びます。",
              "hira": "遊びます",
              "pronunciation": "遊びます",
              "meaning": "주말에 친구와 놉니다."
            }
          ]
        }
      ],
      [
        "歌います",
        "歌います",
        "歌います",
        "노래합니다",
        {
          "id": "verb_9a70b818_masu",
          "baseId": "verb_9a70b818",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "カラオケで好きな歌を歌います。",
              "hira": "歌います",
              "pronunciation": "歌います",
              "meaning": "노래방에서 좋아하는 노래를 부릅니다."
            }
          ]
        }
      ],
      [
        "弾きます",
        "弾きます",
        "弾きます",
        "연주합니다 / (악기를) 칩니다",
        {
          "id": "verb_354a8800_masu",
          "baseId": "verb_354a8800",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "ピアノで好きな曲を弾きます。",
              "hira": "弾きます",
              "pronunciation": "弾きます",
              "meaning": "피아노로 좋아하는 곡을 연주합니다."
            }
          ]
        }
      ],
      [
        "送ります",
        "送ります",
        "送ります",
        "보냅니다",
        {
          "id": "verb_db6ec419_masu",
          "baseId": "verb_db6ec419",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "友達に写真を送ります。",
              "hira": "送ります",
              "pronunciation": "送ります",
              "meaning": "친구에게 사진을 보냅니다."
            }
          ]
        }
      ],
      [
        "もらいます",
        "もらいます",
        "모라이마스",
        "받습니다",
        {
          "id": "verb_b893c882_masu",
          "baseId": "verb_b893c882",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "友達からプレゼントをもらいます。",
              "hira": "もらいます",
              "pronunciation": "모라이마스",
              "meaning": "친구에게서 선물을 받습니다."
            }
          ]
        }
      ],
      [
        "あげます",
        "あげます",
        "아게마스",
        "줍니다",
        {
          "id": "verb_feb367cc_masu",
          "baseId": "verb_feb367cc",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "妹に誕生日プレゼントをあげます。",
              "hira": "あげます",
              "pronunciation": "아게마스",
              "meaning": "여동생에게 생일 선물을 줍니다."
            }
          ]
        }
      ],
      [
        "くれます",
        "くれます",
        "쿠레마스",
        "줍니다",
        {
          "id": "verb_a98f3e33_masu",
          "baseId": "verb_a98f3e33",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "友達が本をくれます。",
              "hira": "くれます",
              "pronunciation": "쿠레마스",
              "meaning": "친구가 책을 줍니다."
            }
          ]
        }
      ],
      [
        "借ります",
        "借ります",
        "借ります",
        "빌립니다",
        {
          "id": "verb_95d2b597_masu",
          "baseId": "verb_95d2b597",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "図書館で本を借ります。",
              "hira": "借ります",
              "pronunciation": "借ります",
              "meaning": "도서관에서 책을 빌립니다."
            }
          ]
        }
      ],
      [
        "貸します",
        "貸します",
        "貸します",
        "빌려줍니다",
        {
          "id": "verb_d91a49e4_masu",
          "baseId": "verb_d91a49e4",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "友達に傘を貸します。",
              "hira": "貸します",
              "pronunciation": "貸します",
              "meaning": "친구에게 우산을 빌려줍니다."
            }
          ]
        }
      ],
      [
        "返します",
        "返します",
        "返します",
        "돌려줍니다 / 반환합니다",
        {
          "id": "verb_37b69281_masu",
          "baseId": "verb_37b69281",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "借りた本を図書館に返します。",
              "hira": "返します",
              "pronunciation": "返します",
              "meaning": "빌린 책을 도서관에 돌려줍니다."
            }
          ]
        }
      ],
      [
        "忘れます",
        "忘れます",
        "忘れます",
        "잊습니다",
        {
          "id": "verb_9040ec21_masu",
          "baseId": "verb_9040ec21",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "財布を家に忘れます。",
              "hira": "忘れます",
              "pronunciation": "忘れます",
              "meaning": "지갑을 집에 두고 옵니다."
            }
          ]
        }
      ],
      [
        "覚えます",
        "覚えます",
        "覚えます",
        "외웁니다 / 기억합니다",
        {
          "id": "verb_e9ccbd29_masu",
          "baseId": "verb_e9ccbd29",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "新しい単語を覚えます。",
              "hira": "覚えます",
              "pronunciation": "覚えます",
              "meaning": "새로운 단어를 외웁니다."
            }
          ]
        }
      ],
      [
        "知ります",
        "知ります",
        "知ります",
        "압니다",
        {
          "id": "verb_e59eecb9_masu",
          "baseId": "verb_e59eecb9",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "そのニュースを知ります。",
              "hira": "知ります",
              "pronunciation": "知ります",
              "meaning": "그 뉴스를 알게 됩니다."
            }
          ]
        }
      ],
      [
        "分かります",
        "分かります",
        "分かります",
        "압니다 / 이해합니다",
        {
          "id": "verb_c3f97595_masu",
          "baseId": "verb_c3f97595",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "この問題の答えが分かります。",
              "hira": "分かります",
              "pronunciation": "分かります",
              "meaning": "이 문제의 답을 알 수 있습니다."
            }
          ]
        }
      ],
      [
        "思います",
        "思います",
        "思います",
        "생각합니다",
        {
          "id": "verb_5d47ba56_masu",
          "baseId": "verb_5d47ba56",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "それはいい考えだと思います。",
              "hira": "思います",
              "pronunciation": "思います",
              "meaning": "그것은 좋은 생각이라고 생각합니다."
            }
          ]
        }
      ],
      [
        "考えます",
        "考えます",
        "考えます",
        "생각합니다 / 고려합니다",
        {
          "id": "verb_32df321f_masu",
          "baseId": "verb_32df321f",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "週末の予定を考えます。",
              "hira": "考えます",
              "pronunciation": "考えます",
              "meaning": "주말 계획을 생각합니다."
            }
          ]
        }
      ],
      [
        "言います",
        "言います",
        "言います",
        "말합니다",
        {
          "id": "verb_a51e57f2_masu",
          "baseId": "verb_a51e57f2",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "自分の意見をはっきり言います。",
              "hira": "言います",
              "pronunciation": "言います",
              "meaning": "자신의 의견을 분명하게 말합니다."
            }
          ]
        }
      ],
      [
        "聞きます",
        "聞きます",
        "聞きます",
        "듣습니다 / 묻습니다",
        {
          "id": "verb_797f8264_masu",
          "baseId": "verb_797f8264",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "先生の話をよく聞きます。",
              "hira": "聞きます",
              "pronunciation": "聞きます",
              "meaning": "선생님의 이야기를 잘 듣습니다."
            }
          ]
        }
      ],
      [
        "答えます",
        "答えます",
        "答えます",
        "대답합니다",
        {
          "id": "verb_b03e9e2d_masu",
          "baseId": "verb_b03e9e2d",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "質問に日本語で答えます。",
              "hira": "答えます",
              "pronunciation": "答えます",
              "meaning": "질문에 일본어로 대답합니다."
            }
          ]
        }
      ],
      [
        "待ちます",
        "待ちます",
        "待ちます",
        "기다립니다",
        {
          "id": "verb_aec76c47_masu",
          "baseId": "verb_aec76c47",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "駅で友達を待ちます。",
              "hira": "待ちます",
              "pronunciation": "待ちます",
              "meaning": "역에서 친구를 기다립니다."
            }
          ]
        }
      ],
      [
        "急ぎます",
        "急ぎます",
        "急ぎます",
        "서두릅니다",
        {
          "id": "verb_26e8be16_masu",
          "baseId": "verb_26e8be16",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "時間がないので急ぎます。",
              "hira": "急ぎます",
              "pronunciation": "急ぎます",
              "meaning": "시간이 없어서 서두릅니다."
            }
          ]
        }
      ],
      [
        "入ります",
        "入ります",
        "入ります",
        "들어갑니다",
        {
          "id": "verb_ffa98111_masu",
          "baseId": "verb_ffa98111",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "八時に会社に入ります。",
              "hira": "入ります",
              "pronunciation": "入ります",
              "meaning": "8시에 회사에 들어갑니다."
            }
          ]
        }
      ],
      [
        "出ます",
        "出ます",
        "出ます",
        "나옵니다 / 나갑니다",
        {
          "id": "verb_022a74da_masu",
          "baseId": "verb_022a74da",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "毎朝、七時に家を出ます。",
              "hira": "出ます",
              "pronunciation": "出ます",
              "meaning": "매일 아침 7시에 집을 나섭니다."
            }
          ]
        }
      ],
      [
        "入れます",
        "入れます",
        "入れます",
        "넣습니다",
        {
          "id": "verb_8aee63b8_masu",
          "baseId": "verb_8aee63b8",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "かばんに財布を入れます。",
              "hira": "入れます",
              "pronunciation": "入れます",
              "meaning": "가방에 지갑을 넣습니다."
            }
          ]
        }
      ],
      [
        "出します",
        "出します",
        "出します",
        "꺼냅니다 / 냅니다",
        {
          "id": "verb_667067d9_masu",
          "baseId": "verb_667067d9",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "かばんから財布を出します。",
              "hira": "出します",
              "pronunciation": "出します",
              "meaning": "가방에서 지갑을 꺼냅니다."
            }
          ]
        }
      ],
      [
        "着ます",
        "着ます",
        "着ます",
        "입습니다",
        {
          "id": "verb_1466ca64_masu",
          "baseId": "verb_1466ca64",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "寒い日はコートを着ます。",
              "hira": "着ます",
              "pronunciation": "着ます",
              "meaning": "추운 날에는 코트를 입습니다."
            }
          ]
        }
      ],
      [
        "脱ぎます",
        "脱ぎます",
        "脱ぎます",
        "벗습니다",
        {
          "id": "verb_a6ae45f8_masu",
          "baseId": "verb_a6ae45f8",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "家に帰ったら靴を脱ぎます。",
              "hira": "脱ぎます",
              "pronunciation": "脱ぎます",
              "meaning": "집에 돌아오면 신발을 벗습니다."
            }
          ]
        }
      ],
      [
        "洗います",
        "洗います",
        "洗います",
        "씻습니다",
        {
          "id": "verb_390ef05f_masu",
          "baseId": "verb_390ef05f",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "食事の前に手を洗います。",
              "hira": "洗います",
              "pronunciation": "洗います",
              "meaning": "식사 전에 손을 씻습니다."
            }
          ]
        }
      ],
      [
        "できます",
        "できます",
        "できます",
        "할 수 있습니다 / 가능합니다",
        {
          "id": "verb_0f9c874c_masu",
          "baseId": "verb_0f9c874c",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "今日は早く仕事ができます。",
              "hira": "できます",
              "pronunciation": "できます",
              "meaning": "오늘은 일을 일찍 끝낼 수 있습니다."
            }
          ]
        }
      ],
      [
        "終えます",
        "終えます",
        "終えます",
        "끝냅니다",
        {
          "id": "verb_extra_終える_masu",
          "baseId": "verb_extra_終える",
          "form": "conjugation",
          "level": "N3",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "午後五時までに仕事を終えます。",
              "hira": "終えます",
              "pronunciation": "終えます",
              "meaning": "오후 5시까지 일을 끝냅니다."
            }
          ]
        }
      ],
      [
        "続けます",
        "続けます",
        "続けます",
        "계속합니다",
        {
          "id": "verb_extra_続ける_masu",
          "baseId": "verb_extra_続ける",
          "form": "conjugation",
          "level": "N4",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "毎日、日本語の勉強を続けます。",
              "hira": "続けます",
              "pronunciation": "続けます",
              "meaning": "매일 일본어 공부를 계속합니다."
            }
          ]
        }
      ],
      [
        "止めます",
        "止めます",
        "止めます",
        "멈춥니다 / 세웁니다",
        {
          "id": "verb_extra_止める_masu",
          "baseId": "verb_extra_止める",
          "form": "conjugation",
          "level": "N4",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "ここに車を止めます。",
              "hira": "止めます",
              "pronunciation": "止めます",
              "meaning": "여기에 차를 세웁니다."
            }
          ]
        }
      ],
      [
        "変えます",
        "変えます",
        "変えます",
        "바꿉니다",
        {
          "id": "verb_extra_変える_masu",
          "baseId": "verb_extra_変える",
          "form": "conjugation",
          "level": "N4",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "旅行の予定を変えます。",
              "hira": "変えます",
              "pronunciation": "変えます",
              "meaning": "여행 일정을 바꿉니다."
            }
          ]
        }
      ],
      [
        "決めます",
        "決めます",
        "決めます",
        "정합니다",
        {
          "id": "verb_extra_決める_masu",
          "baseId": "verb_extra_決める",
          "form": "conjugation",
          "level": "N4",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "今週中に日程を決めます。",
              "hira": "決めます",
              "pronunciation": "決めます",
              "meaning": "이번 주 안에 일정을 정합니다."
            }
          ]
        }
      ],
      [
        "選びます",
        "選びます",
        "選びます",
        "고릅니다 / 선택합니다",
        {
          "id": "verb_extra_選ぶ_masu",
          "baseId": "verb_extra_選ぶ",
          "form": "conjugation",
          "level": "N4",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "好きな色を選びます。",
              "hira": "選びます",
              "pronunciation": "選びます",
              "meaning": "좋아하는 색을 고릅니다."
            }
          ]
        }
      ],
      [
        "探します",
        "探します",
        "探します",
        "찾습니다",
        {
          "id": "verb_extra_探す_masu",
          "baseId": "verb_extra_探す",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "駅でホテルを探します。",
              "hira": "探します",
              "pronunciation": "探します",
              "meaning": "역에서 호텔을 찾습니다."
            }
          ]
        }
      ],
      [
        "見つけます",
        "見つけます",
        "見つけます",
        "찾아냅니다 / 발견합니다",
        {
          "id": "verb_extra_見つける_masu",
          "baseId": "verb_extra_見つける",
          "form": "conjugation",
          "level": "N4",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "駅の近くでいい店を見つけます。",
              "hira": "見つけます",
              "pronunciation": "見つけます",
              "meaning": "역 근처에서 좋은 가게를 찾습니다."
            }
          ]
        }
      ],
      [
        "見つかります",
        "見つかります",
        "見つかります",
        "발견됩니다 / 찾아집니다",
        {
          "id": "verb_extra_見つかる_masu",
          "baseId": "verb_extra_見つかる",
          "form": "conjugation",
          "level": "N4",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "なくした鍵が見つかります。",
              "hira": "見つかります",
              "pronunciation": "見つかります",
              "meaning": "잃어버린 열쇠를 찾게 됩니다."
            }
          ]
        }
      ],
      [
        "調べます",
        "調べます",
        "調べます",
        "조사합니다 / 찾아봅니다",
        {
          "id": "verb_extra_調べる_masu",
          "baseId": "verb_extra_調べる",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "分からない言葉を辞書で調べます。",
              "hira": "調べます",
              "pronunciation": "調べます",
              "meaning": "모르는 단어를 사전에서 찾아봅니다."
            }
          ]
        }
      ],
      [
        "決まります",
        "決まります",
        "決まります",
        "정해집니다",
        {
          "id": "verb_extra_決まる_masu",
          "baseId": "verb_extra_決まる",
          "form": "conjugation",
          "level": "N4",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "来月の予定が決まります。",
              "hira": "決まります",
              "pronunciation": "決まります",
              "meaning": "다음 달 일정이 정해집니다."
            }
          ]
        }
      ],
      [
        "比べます",
        "くらべます",
        "쿠라베마스",
        "비교합니다",
        {
          "id": "verb_extra_比べる_masu",
          "baseId": "verb_extra_比べる",
          "form": "conjugation",
          "level": "N4",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "二つの商品を比べます。",
              "hira": "くらべます",
              "pronunciation": "쿠라베마스",
              "meaning": "두 상품을 비교합니다."
            }
          ]
        }
      ],
      [
        "受けます",
        "受けます",
        "受けます",
        "받습니다 / 응시합니다",
        {
          "id": "verb_extra_受ける_masu",
          "baseId": "verb_extra_受ける",
          "form": "conjugation",
          "level": "N4",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "来月、日本語の試験を受けます。",
              "hira": "受けます",
              "pronunciation": "受けます",
              "meaning": "다음 달 일본어 시험을 봅니다."
            }
          ]
        }
      ],
      [
        "申し込みます",
        "もうしこみます",
        "모오시코미마스",
        "신청합니다",
        {
          "id": "verb_extra_申し込む_masu",
          "baseId": "verb_extra_申し込む",
          "form": "conjugation",
          "level": "N3",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "オンラインで講座に申し込みます。",
              "hira": "もうしこみます",
              "pronunciation": "모오시코미마스",
              "meaning": "온라인으로 강좌를 신청합니다."
            }
          ]
        }
      ],
      [
        "予約します",
        "よやくします",
        "요야쿠시마스",
        "예약합니다",
        {
          "id": "verb_extra_予約する_masu",
          "baseId": "verb_extra_予約する",
          "form": "conjugation",
          "level": "N4",
          "meta": {
            "verbGroup": "3그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "ホテルをインターネットで予約します。",
              "hira": "よやくします",
              "pronunciation": "요야쿠시마스",
              "meaning": "호텔을 인터넷으로 예약합니다."
            }
          ]
        }
      ],
      [
        "確認します",
        "確認します",
        "確認します",
        "확인합니다",
        {
          "id": "verb_extra_確認する_masu",
          "baseId": "verb_extra_確認する",
          "form": "conjugation",
          "level": "N3",
          "meta": {
            "verbGroup": "3그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "出発時間を確認します。",
              "hira": "確認します",
              "pronunciation": "確認します",
              "meaning": "출발 시간을 확인합니다."
            }
          ]
        }
      ],
      [
        "連絡します",
        "れんらくします",
        "렌라쿠시마스",
        "연락합니다",
        {
          "id": "verb_extra_連絡する_masu",
          "baseId": "verb_extra_連絡する",
          "form": "conjugation",
          "level": "N3",
          "meta": {
            "verbGroup": "3그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "着いたら連絡します。",
              "hira": "れんらくします",
              "pronunciation": "렌라쿠시마스",
              "meaning": "도착하면 연락합니다."
            }
          ]
        }
      ],
      [
        "説明します",
        "説明します",
        "説明します",
        "설명합니다",
        {
          "id": "verb_extra_説明する_masu",
          "baseId": "verb_extra_説明する",
          "form": "conjugation",
          "level": "N3",
          "meta": {
            "verbGroup": "3그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "先生が文法を説明します。",
              "hira": "説明します",
              "pronunciation": "説明します",
              "meaning": "선생님이 문법을 설명합니다."
            }
          ]
        }
      ],
      [
        "準備します",
        "じゅんびします",
        "준비시마스",
        "준비합니다",
        {
          "id": "verb_extra_準備する_masu",
          "baseId": "verb_extra_準備する",
          "form": "conjugation",
          "level": "N4",
          "meta": {
            "verbGroup": "3그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "旅行の準備をします。",
              "hira": "じゅんびします",
              "pronunciation": "준비시마스",
              "meaning": "여행 준비를 합니다."
            }
          ]
        }
      ],
      [
        "片付けます",
        "片付けます",
        "片付けます",
        "정리합니다 / 치웁니다",
        {
          "id": "verb_extra_片付ける_masu",
          "baseId": "verb_extra_片付ける",
          "form": "conjugation",
          "level": "N4",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "食事の後で部屋を片付けます。",
              "hira": "片付けます",
              "pronunciation": "片付けます",
              "meaning": "식사 후에 방을 정리합니다."
            }
          ]
        }
      ],
      [
        "洗濯します",
        "洗濯します",
        "洗濯します",
        "세탁합니다",
        {
          "id": "verb_extra_洗濯する_masu",
          "baseId": "verb_extra_洗濯する",
          "form": "conjugation",
          "level": "N4",
          "meta": {
            "verbGroup": "3그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "土曜日に洗濯します。",
              "hira": "洗濯します",
              "pronunciation": "洗濯します",
              "meaning": "토요일에 빨래합니다."
            }
          ]
        }
      ],
      [
        "出発します",
        "出発します",
        "出発します",
        "출발합니다",
        {
          "id": "verb_extra_出発する_masu",
          "baseId": "verb_extra_出発する",
          "form": "conjugation",
          "level": "N4",
          "meta": {
            "verbGroup": "3그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "朝八時に東京を出発します。",
              "hira": "出発します",
              "pronunciation": "出発します",
              "meaning": "아침 8시에 도쿄를 출발합니다."
            }
          ]
        }
      ],
      [
        "到着します",
        "到着します",
        "到着します",
        "도착합니다",
        {
          "id": "verb_extra_到着する_masu",
          "baseId": "verb_extra_到着する",
          "form": "conjugation",
          "level": "N3",
          "meta": {
            "verbGroup": "3그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "午後三時に京都に到着します。",
              "hira": "到着します",
              "pronunciation": "到着します",
              "meaning": "오후 3시에 교토에 도착합니다."
            }
          ]
        }
      ],
      [
        "利用します",
        "利用します",
        "利用します",
        "이용합니다",
        {
          "id": "verb_extra_利用する_masu",
          "baseId": "verb_extra_利用する",
          "form": "conjugation",
          "level": "N3",
          "meta": {
            "verbGroup": "3그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "旅行中はこのサービスを利用します。",
              "hira": "利用します",
              "pronunciation": "利用します",
              "meaning": "여행 중에는 이 서비스를 이용합니다."
            }
          ]
        }
      ],
      [
        "運びます",
        "はこびます",
        "하코비마스",
        "나릅니다 / 운반합니다",
        {
          "id": "verb_c2486c41e6_masu",
          "level": "N4",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "荷物を部屋まで運びます。",
              "hira": "はこびます",
              "pronunciation": "하코비마스",
              "meaning": "짐을 방까지 나릅니다."
            }
          ],
          "baseId": "verb_c2486c41e6",
          "form": "conjugation"
        }
      ],
      [
        "売ります",
        "うります",
        "우리마스",
        "팝니다",
        {
          "id": "verb_ec51fc2e16_masu",
          "level": "N4",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "使わなくなった本を売ります。",
              "hira": "うります",
              "pronunciation": "우리마스",
              "meaning": "더 이상 사용하지 않는 책을 팝니다."
            }
          ],
          "baseId": "verb_ec51fc2e16",
          "form": "conjugation"
        }
      ],
      [
        "消します",
        "けします",
        "케시마스",
        "끕니다 / 지웁니다",
        {
          "id": "verb_df2b3a6397_masu",
          "level": "N4",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "寝る前に電気を消します。",
              "hira": "けします",
              "pronunciation": "케시마스",
              "meaning": "자기 전에 불을 끕니다."
            }
          ],
          "baseId": "verb_df2b3a6397",
          "form": "conjugation"
        }
      ],
      [
        "押します",
        "おします",
        "오시마스",
        "누릅니다 / 밉니다",
        {
          "id": "verb_30038e39f3_masu",
          "level": "N4",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "このボタンを押します。",
              "hira": "おします",
              "pronunciation": "오시마스",
              "meaning": "이 버튼을 누릅니다."
            }
          ],
          "baseId": "verb_30038e39f3",
          "form": "conjugation"
        }
      ],
      [
        "引きます",
        "ひきます",
        "히키마스",
        "당깁니다 / 끕니다",
        {
          "id": "verb_371c196bcb_masu",
          "level": "N4",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "ドアを手前に引きます。",
              "hira": "ひきます",
              "pronunciation": "히키마스",
              "meaning": "문을 자기 쪽으로 당깁니다."
            }
          ],
          "baseId": "verb_371c196bcb",
          "form": "conjugation"
        }
      ],
      [
        "拾います",
        "ひろいます",
        "히로이마스",
        "줍습니다",
        {
          "id": "verb_d404351530_masu",
          "level": "N4",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "道で財布を拾います。",
              "hira": "ひろいます",
              "pronunciation": "히로이마스",
              "meaning": "길에서 지갑을 줍습니다."
            }
          ],
          "baseId": "verb_d404351530",
          "form": "conjugation"
        }
      ],
      [
        "捨てます",
        "すてます",
        "스테마스",
        "버립니다",
        {
          "id": "verb_e720775ac7_masu",
          "level": "N4",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "古い服を捨てます。",
              "hira": "すてます",
              "pronunciation": "스테마스",
              "meaning": "낡은 옷을 버립니다."
            }
          ],
          "baseId": "verb_e720775ac7",
          "form": "conjugation"
        }
      ],
      [
        "集めます",
        "あつめます",
        "아츠메마스",
        "모읍니다",
        {
          "id": "verb_0a49f1e34a_masu",
          "level": "N4",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "旅行の情報を集めます。",
              "hira": "あつめます",
              "pronunciation": "아츠메마스",
              "meaning": "여행 정보를 모읍니다."
            }
          ],
          "baseId": "verb_0a49f1e34a",
          "form": "conjugation"
        }
      ],
      [
        "直します",
        "なおします",
        "나오시마스",
        "고칩니다 / 수리합니다",
        {
          "id": "verb_442e7ec90b_masu",
          "level": "N4",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "間違いを直します。",
              "hira": "なおします",
              "pronunciation": "나오시마스",
              "meaning": "틀린 부분을 고칩니다."
            }
          ],
          "baseId": "verb_442e7ec90b",
          "form": "conjugation"
        }
      ],
      [
        "直ります",
        "なおります",
        "나오리마스",
        "고쳐집니다 / 낫습니다",
        {
          "id": "verb_1f8de4ba37_masu",
          "level": "N4",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "壊れていた時計が直ります。",
              "hira": "なおります",
              "pronunciation": "나오리마스",
              "meaning": "고장 났던 시계가 고쳐집니다."
            }
          ],
          "baseId": "verb_1f8de4ba37",
          "form": "conjugation"
        }
      ],
      [
        "壊します",
        "こわします",
        "코와시마스",
        "망가뜨립니다 / 고장 냅니다",
        {
          "id": "verb_4160686f0d_masu",
          "level": "N4",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "子どもがおもちゃを壊します。",
              "hira": "こわします",
              "pronunciation": "코와시마스",
              "meaning": "아이가 장난감을 망가뜨립니다."
            }
          ],
          "baseId": "verb_4160686f0d",
          "form": "conjugation"
        }
      ],
      [
        "壊れます",
        "こわれます",
        "코와레마스",
        "망가집니다 / 고장 납니다",
        {
          "id": "verb_c34da08306_masu",
          "level": "N4",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "古いパソコンが壊れます。",
              "hira": "こわれます",
              "pronunciation": "코와레마스",
              "meaning": "오래된 컴퓨터가 고장 납니다."
            }
          ],
          "baseId": "verb_c34da08306",
          "form": "conjugation"
        }
      ],
      [
        "遅れます",
        "おくれます",
        "오쿠레마스",
        "늦습니다 / 늦어집니다",
        {
          "id": "verb_89aa88ff42_masu",
          "level": "N4",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "電車が十分ほど遅れます。",
              "hira": "おくれます",
              "pronunciation": "오쿠레마스",
              "meaning": "전철이 10분 정도 늦습니다."
            }
          ],
          "baseId": "verb_89aa88ff42",
          "form": "conjugation"
        }
      ],
      [
        "間に合います",
        "まにあいます",
        "마니아이마스",
        "시간에 맞습니다 / 늦지 않습니다",
        {
          "id": "verb_28940f5774_masu",
          "level": "N4",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "急げば八時の電車に間に合います。",
              "hira": "まにあいます",
              "pronunciation": "마니아이마스",
              "meaning": "서두르면 8시 전철에 늦지 않게 탈 수 있습니다."
            }
          ],
          "baseId": "verb_28940f5774",
          "form": "conjugation"
        }
      ],
      [
        "参加します",
        "さんかします",
        "산카시마스",
        "참가합니다",
        {
          "id": "verb_f8da0bc1c2_masu",
          "level": "N4",
          "meta": {
            "verbGroup": "3그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "明日の会議に参加します。",
              "hira": "さんかします",
              "pronunciation": "산카시마스",
              "meaning": "내일 회의에 참가합니다."
            }
          ],
          "baseId": "verb_f8da0bc1c2",
          "form": "conjugation"
        }
      ],
      [
        "止まります",
        "とまります",
        "토마루",
        "멈추다(정중체)",
        {
          "id": "verb_extra_1_masu",
          "baseId": "verb_extra_1",
          "form": "conjugation",
          "level": "N4",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "自動詞"
          },
          "examples": [
            {
              "jp": "電車が駅で止まります。",
              "hira": "でんしゃがえきでとまります。",
              "pronunciation": "덴샤가 에키데 토마리마스",
              "meaning": "전철이 역에 멈춥니다."
            }
          ]
        }
      ],
      [
        "呼びます",
        "よびます",
        "요부",
        "부르다(정중체)",
        {
          "id": "verb_extra_2_masu",
          "baseId": "verb_extra_2",
          "form": "conjugation",
          "level": "N4",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "他動詞"
          },
          "examples": [
            {
              "jp": "必要なら店員を呼びます。",
              "hira": "ひつようならてんいんをよびます。",
              "pronunciation": "히츠요오나라 텐인오 요비마스",
              "meaning": "필요하면 점원을 부릅니다."
            }
          ]
        }
      ],
      [
        "泊まります",
        "とまります",
        "토마루",
        "묵다 / 숙박하다(정중체)",
        {
          "id": "verb_extra_3_masu",
          "baseId": "verb_extra_3",
          "form": "conjugation",
          "level": "N4",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "自動詞"
          },
          "examples": [
            {
              "jp": "今夜はホテルに泊まります。",
              "hira": "こんやはほてるにとまります。",
              "pronunciation": "콘야와 호테루니 토마리마스",
              "meaning": "오늘 밤은 호텔에 묵습니다."
            }
          ]
        }
      ],
      [
        "着きます",
        "つきます",
        "츠쿠",
        "도착하다(정중체)",
        {
          "id": "verb_extra_4_masu",
          "baseId": "verb_extra_4",
          "form": "conjugation",
          "level": "N4",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "自動詞"
          },
          "examples": [
            {
              "jp": "七時に駅に着きます。",
              "hira": "しちじにえきにつきます。",
              "pronunciation": "시치지니 에키니 츠키마스",
              "meaning": "7시에 역에 도착합니다."
            }
          ]
        }
      ],
      [
        "乗り換えます",
        "のりかえます",
        "노리카에루",
        "갈아타다(정중체)",
        {
          "id": "verb_extra_5_masu",
          "baseId": "verb_extra_5",
          "form": "conjugation",
          "level": "N4",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "自動詞"
          },
          "examples": [
            {
              "jp": "次の駅で電車を乗り換えます。",
              "hira": "つぎのえきででんしゃをのりかえます。",
              "pronunciation": "츠기노 에키데 덴샤오 노리카에마스",
              "meaning": "다음 역에서 전철을 갈아탑니다."
            }
          ]
        }
      ]
    ],
    "て형": [
      [
        "行って",
        "いって",
        "잇테",
        "가고 / 가서",
        {
          "id": "verb_iku_te",
          "baseId": "verb_iku",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "明日は学校へ行って、友達に会います。",
              "hira": "いって",
              "pronunciation": "잇테",
              "meaning": "내일은 학교에 가서 친구를 만납니다."
            }
          ]
        }
      ],
      [
        "食べて",
        "たべて",
        "타베테",
        "먹고 / 먹어서",
        {
          "id": "verb_taberu_te",
          "baseId": "verb_taberu",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "毎朝、朝ご飯を食べてください。",
              "hira": "たべて",
              "pronunciation": "타베테",
              "meaning": "먹어 주세요."
            }
          ]
        }
      ],
      [
        "見て",
        "みて",
        "미테",
        "보고 / 봐서",
        {
          "id": "verb_miru_te",
          "baseId": "verb_miru",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "夜に映画を見てください。",
              "hira": "みて",
              "pronunciation": "미테",
              "meaning": "봐 주세요."
            }
          ]
        }
      ],
      [
        "飲んで",
        "のんで",
        "논데",
        "마시고 / 마셔서",
        {
          "id": "verb_nomu_te",
          "baseId": "verb_nomu",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "毎朝、水を飲んでください。",
              "hira": "のんで",
              "pronunciation": "논데",
              "meaning": "마셔 주세요."
            }
          ]
        }
      ],
      [
        "書いて",
        "かいて",
        "카이테",
        "쓰고 / 써서",
        {
          "id": "verb_kaku_te",
          "baseId": "verb_kaku",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "ノートに名前を書いてください。",
              "hira": "かいて",
              "pronunciation": "카이테",
              "meaning": "써 주세요."
            }
          ]
        }
      ],
      [
        "読んで",
        "よんで",
        "욘데",
        "읽고 / 읽어서",
        {
          "id": "verb_yomu_te",
          "baseId": "verb_yomu",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "寝る前に本を読んでください。",
              "hira": "よんで",
              "pronunciation": "욘데",
              "meaning": "읽어 주세요."
            }
          ]
        }
      ],
      [
        "話して",
        "はなして",
        "하나시테",
        "말하고 / 말해서",
        {
          "id": "verb_hanasu_te",
          "baseId": "verb_hanasu",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "友達と日本語で話してください。",
              "hira": "はなして",
              "pronunciation": "하나시테",
              "meaning": "이야기해 주세요."
            }
          ]
        }
      ],
      [
        "買って",
        "かって",
        "캇테",
        "사고 / 사서",
        {
          "id": "verb_kau_te",
          "baseId": "verb_kau",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "駅で切符を買ってください。",
              "hira": "かって",
              "pronunciation": "캇테",
              "meaning": "사 주세요."
            }
          ]
        }
      ],
      [
        "帰って",
        "かえって",
        "카엣테",
        "돌아가고 / 돌아가서",
        {
          "id": "verb_kaeru_te",
          "baseId": "verb_kaeru",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "仕事が終わったら家に帰ってください。",
              "hira": "かえって",
              "pronunciation": "카엣테",
              "meaning": "돌아가 주세요."
            }
          ]
        }
      ],
      [
        "会って",
        "会って",
        "会って",
        "만나고 / 만나서",
        {
          "id": "verb_8c96a83e_te",
          "baseId": "verb_8c96a83e",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "週末に友達に会って、一緒に食事します。",
              "hira": "会って",
              "pronunciation": "会って",
              "meaning": "주말에 친구를 만나서 함께 식사합니다."
            }
          ]
        }
      ],
      [
        "あって",
        "あって",
        "아테",
        "있고 / 있어서",
        {
          "id": "verb_b8345a61_te",
          "baseId": "verb_b8345a61",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "机の上に本があって、隣にノートがあります。",
              "hira": "あって",
              "pronunciation": "아테",
              "meaning": "책상 위에 책이 있고, 옆에 공책이 있습니다."
            }
          ]
        }
      ],
      [
        "いて",
        "いて",
        "이테",
        "있고 / 있어서",
        {
          "id": "verb_bb9d44f8_te",
          "baseId": "verb_bb9d44f8",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "教室に先生がいて、学生が待っています。",
              "hira": "いて",
              "pronunciation": "이테",
              "meaning": "교실에 선생님이 계시고 학생들이 기다리고 있습니다."
            }
          ]
        }
      ],
      [
        "起きて",
        "起きて",
        "起きて",
        "일어나고 / 일어나서",
        {
          "id": "verb_f1e80ce9_te",
          "baseId": "verb_f1e80ce9",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "毎朝、七時に起きてください。",
              "hira": "起きて",
              "pronunciation": "起きて",
              "meaning": "일어나 주세요."
            }
          ]
        }
      ],
      [
        "寝て",
        "寝て",
        "寝て",
        "자고 / 자서",
        {
          "id": "verb_32c88ea6_te",
          "baseId": "verb_32c88ea6",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "毎晩、十一時に寝てください。",
              "hira": "寝て",
              "pronunciation": "寝て",
              "meaning": "주무세요."
            }
          ]
        }
      ],
      [
        "働いて",
        "働いて",
        "働いて",
        "일하고 / 일해서",
        {
          "id": "verb_b39fc552_te",
          "baseId": "verb_b39fc552",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "東京の会社で働いてください。",
              "hira": "働いて",
              "pronunciation": "働いて",
              "meaning": "일해 주세요."
            }
          ]
        }
      ],
      [
        "休んで",
        "休んで",
        "休んで",
        "쉬고 / 쉬어서",
        {
          "id": "verb_8b24f26b_te",
          "baseId": "verb_8b24f26b",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "今日は家でゆっくり休んでください。",
              "hira": "休んで",
              "pronunciation": "休んで",
              "meaning": "쉬어 주세요."
            }
          ]
        }
      ],
      [
        "使って",
        "使って",
        "使って",
        "사용하고 / 사용해서",
        {
          "id": "verb_bb0e5d22_te",
          "baseId": "verb_bb0e5d22",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "このアプリを毎日使ってください。",
              "hira": "使って",
              "pronunciation": "使って",
              "meaning": "사용해 주세요."
            }
          ]
        }
      ],
      [
        "作って",
        "作って",
        "作って",
        "만들고 / 만들어서",
        {
          "id": "verb_94b87121_te",
          "baseId": "verb_94b87121",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "週末にカレーを作ってください。",
              "hira": "作って",
              "pronunciation": "作って",
              "meaning": "만들어 주세요."
            }
          ]
        }
      ],
      [
        "持って",
        "持って",
        "持って",
        "가지고 / 들어서",
        {
          "id": "verb_9197e4fd_te",
          "baseId": "verb_9197e4fd",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "傘を持って出かけます。",
              "hira": "持って",
              "pronunciation": "持って",
              "meaning": "우산을 가지고 외출합니다."
            }
          ]
        }
      ],
      [
        "取って",
        "取って",
        "取って",
        "잡고 / 잡아서",
        {
          "id": "verb_49234a82_te",
          "baseId": "verb_49234a82",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "大事なことをノートに取っておきます。",
              "hira": "取って",
              "pronunciation": "取って",
              "meaning": "중요한 내용을 노트에 적어 둡니다."
            }
          ]
        }
      ],
      [
        "置いて",
        "置いて",
        "置いて",
        "놓고 / 놓아서",
        {
          "id": "verb_fc7721ef_te",
          "baseId": "verb_fc7721ef",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "鍵をテーブルの上に置いてください。",
              "hira": "置いて",
              "pronunciation": "置いて",
              "meaning": "놓아 주세요."
            }
          ]
        }
      ],
      [
        "開けて",
        "開けて",
        "開けて",
        "열고 / 열어서",
        {
          "id": "verb_75b7bd31_te",
          "baseId": "verb_75b7bd31",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "窓を開けてください。",
              "hira": "開けて",
              "pronunciation": "開けて",
              "meaning": "열어 주세요."
            }
          ]
        }
      ],
      [
        "閉めて",
        "閉めて",
        "閉めて",
        "닫고 / 닫아서",
        {
          "id": "verb_cc46a6d5_te",
          "baseId": "verb_cc46a6d5",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "寝る前にドアを閉めてください。",
              "hira": "閉めて",
              "pronunciation": "閉めて",
              "meaning": "닫아 주세요."
            }
          ]
        }
      ],
      [
        "開いて",
        "開いて",
        "開いて",
        "열리고 / 열려서",
        {
          "id": "verb_8c7f33dc_te",
          "baseId": "verb_8c7f33dc",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "店は九時に開いています。",
              "hira": "開いて",
              "pronunciation": "開いて",
              "meaning": "가게는 9시에 열려 있습니다."
            }
          ]
        }
      ],
      [
        "閉まって",
        "閉まって",
        "閉まって",
        "닫히고 / 닫혀서",
        {
          "id": "verb_7a531040_te",
          "baseId": "verb_7a531040",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "店は八時に閉まって、その後静かになります。",
              "hira": "閉まって",
              "pronunciation": "閉まって",
              "meaning": "가게는 8시에 문을 닫고, 그 후 조용해집니다."
            }
          ]
        }
      ],
      [
        "始めて",
        "始めて",
        "始めて",
        "시작하고 / 시작해서",
        {
          "id": "verb_af915dc0_te",
          "baseId": "verb_af915dc0",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "九時から仕事を始めてください。",
              "hira": "始めて",
              "pronunciation": "始めて",
              "meaning": "시작해 주세요."
            }
          ]
        }
      ],
      [
        "始まって",
        "始まって",
        "始まって",
        "시작되고 / 시작되어서",
        {
          "id": "verb_6d0d725d_te",
          "baseId": "verb_6d0d725d",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "授業が九時に始まって、みんなが席に着きます。",
              "hira": "始まって",
              "pronunciation": "始まって",
              "meaning": "수업이 9시에 시작되고 모두 자리에 앉습니다."
            }
          ]
        }
      ],
      [
        "終わって",
        "終わって",
        "終わって",
        "끝나고 / 끝나서",
        {
          "id": "verb_282e7ad7_te",
          "baseId": "verb_282e7ad7",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "授業が終わってから、図書館へ行きます。",
              "hira": "終わって",
              "pronunciation": "終わって",
              "meaning": "수업이 끝난 후 도서관에 갑니다."
            }
          ]
        }
      ],
      [
        "教えて",
        "教えて",
        "教えて",
        "가르치고 / 가르쳐서",
        {
          "id": "verb_8fcd9672_te",
          "baseId": "verb_8fcd9672",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "先生が日本語を教えてください。",
              "hira": "教えて",
              "pronunciation": "教えて",
              "meaning": "가르쳐 주세요."
            }
          ]
        }
      ],
      [
        "習って",
        "習って",
        "習って",
        "배우고 / 배워서",
        {
          "id": "verb_815c9429_te",
          "baseId": "verb_815c9429",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "先生から日本語を習ってください。",
              "hira": "習って",
              "pronunciation": "習って",
              "meaning": "배워 주세요."
            }
          ]
        }
      ],
      [
        "勉強して",
        "べんきょうして",
        "벤쿄오시테",
        "공부하고 / 공부해서",
        {
          "id": "verb_c17e2e8d_te",
          "baseId": "verb_c17e2e8d",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "3그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "毎日、日本語を勉強してください。",
              "hira": "べんきょうして",
              "pronunciation": "벤쿄오시테",
              "meaning": "공부해 주세요."
            }
          ]
        }
      ],
      [
        "練習して",
        "れんしゅうして",
        "렌슈우시테",
        "연습하고 / 연습해서",
        {
          "id": "verb_869aa4c0_te",
          "baseId": "verb_869aa4c0",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "3그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "毎日、会話を練習してください。",
              "hira": "れんしゅうして",
              "pronunciation": "렌슈우시테",
              "meaning": "연습해 주세요."
            }
          ]
        }
      ],
      [
        "掃除して",
        "そうじして",
        "소오지시테",
        "청소하고 / 청소해서",
        {
          "id": "verb_52eafdbf_te",
          "baseId": "verb_52eafdbf",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "3그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "毎週、部屋を掃除してください。",
              "hira": "そうじして",
              "pronunciation": "소오지시테",
              "meaning": "청소해 주세요."
            }
          ]
        }
      ],
      [
        "料理して",
        "りょうりして",
        "료오리시테",
        "요리하고 / 요리해서",
        {
          "id": "verb_76f375dd_te",
          "baseId": "verb_76f375dd",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "3그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "週末に家で料理してください。",
              "hira": "りょうりして",
              "pronunciation": "료오리시테",
              "meaning": "요리해 주세요."
            }
          ]
        }
      ],
      [
        "電話して",
        "でんわして",
        "덴와시테",
        "전화하고 / 전화해서",
        {
          "id": "verb_c9e5c467_te",
          "baseId": "verb_c9e5c467",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "3그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "母に電話してください。",
              "hira": "でんわして",
              "pronunciation": "덴와시테",
              "meaning": "전화해 주세요."
            }
          ]
        }
      ],
      [
        "住んで",
        "住んで",
        "住んで",
        "살고 / 살아서",
        {
          "id": "verb_42073ff3_te",
          "baseId": "verb_42073ff3",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "ソウルに住んでいます。",
              "hira": "住んで",
              "pronunciation": "住んで",
              "meaning": "서울에 살고 있습니다."
            }
          ]
        }
      ],
      [
        "乗って",
        "乗って",
        "乗って",
        "타고 / 타서",
        {
          "id": "verb_82276e1f_te",
          "baseId": "verb_82276e1f",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "毎朝、電車に乗ってください。",
              "hira": "乗って",
              "pronunciation": "乗って",
              "meaning": "타 주세요."
            }
          ]
        }
      ],
      [
        "降りて",
        "降りて",
        "降りて",
        "내리고 / 내려서",
        {
          "id": "verb_6432570a_te",
          "baseId": "verb_6432570a",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "次の駅で電車を降りてください。",
              "hira": "降りて",
              "pronunciation": "降りて",
              "meaning": "내려 주세요."
            }
          ]
        }
      ],
      [
        "歩いて",
        "歩いて",
        "歩いて",
        "걷고 / 걸어서",
        {
          "id": "verb_be581e40_te",
          "baseId": "verb_be581e40",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "駅まで歩いてください。",
              "hira": "歩いて",
              "pronunciation": "歩いて",
              "meaning": "걸어 주세요."
            }
          ]
        }
      ],
      [
        "走って",
        "走って",
        "走って",
        "달리고 / 달려서",
        {
          "id": "verb_be92b238_te",
          "baseId": "verb_be92b238",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "毎朝、公園を走ってください。",
              "hira": "走って",
              "pronunciation": "走って",
              "meaning": "달려 주세요."
            }
          ]
        }
      ],
      [
        "泳いで",
        "泳いで",
        "泳いで",
        "수영하고 / 수영해서",
        {
          "id": "verb_c033fc3e_te",
          "baseId": "verb_c033fc3e",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "夏は海で泳いでください。",
              "hira": "泳いで",
              "pronunciation": "泳いで",
              "meaning": "수영해 주세요."
            }
          ]
        }
      ],
      [
        "遊んで",
        "遊んで",
        "遊んで",
        "놀고 / 놀아서",
        {
          "id": "verb_0a81a103_te",
          "baseId": "verb_0a81a103",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "週末に友達と遊んでください。",
              "hira": "遊んで",
              "pronunciation": "遊んで",
              "meaning": "놀아 주세요."
            }
          ]
        }
      ],
      [
        "歌って",
        "歌って",
        "歌って",
        "노래하고 / 노래해서",
        {
          "id": "verb_9a70b818_te",
          "baseId": "verb_9a70b818",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "カラオケで好きな歌を歌ってください。",
              "hira": "歌って",
              "pronunciation": "歌って",
              "meaning": "노래해 주세요."
            }
          ]
        }
      ],
      [
        "弾いて",
        "弾いて",
        "弾いて",
        "연주하고 / 연주해서",
        {
          "id": "verb_354a8800_te",
          "baseId": "verb_354a8800",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "ピアノで好きな曲を弾いてください。",
              "hira": "弾いて",
              "pronunciation": "弾いて",
              "meaning": "연주해 주세요."
            }
          ]
        }
      ],
      [
        "送って",
        "送って",
        "送って",
        "보내고 / 보내서",
        {
          "id": "verb_db6ec419_te",
          "baseId": "verb_db6ec419",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "友達に写真を送ってください。",
              "hira": "送って",
              "pronunciation": "送って",
              "meaning": "보내 주세요."
            }
          ]
        }
      ],
      [
        "もらって",
        "もらって",
        "모라테",
        "받고 / 받아서",
        {
          "id": "verb_b893c882_te",
          "baseId": "verb_b893c882",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "友達からプレゼントをもらって、うれしかったです。",
              "hira": "もらって",
              "pronunciation": "모라테",
              "meaning": "친구에게서 선물을 받아서 기뻤습니다."
            }
          ]
        }
      ],
      [
        "あげて",
        "あげて",
        "아게테",
        "주고 / 줘서",
        {
          "id": "verb_feb367cc_te",
          "baseId": "verb_feb367cc",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "妹にプレゼントをあげて、喜んでもらいました。",
              "hira": "あげて",
              "pronunciation": "아게테",
              "meaning": "여동생에게 선물을 주고 기뻐해 주었습니다."
            }
          ]
        }
      ],
      [
        "くれて",
        "くれて",
        "쿠레테",
        "주고 / 줘서",
        {
          "id": "verb_a98f3e33_te",
          "baseId": "verb_a98f3e33",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "友達が本をくれて、うれしかったです。",
              "hira": "くれて",
              "pronunciation": "쿠레테",
              "meaning": "친구가 책을 줘서 기뻤습니다."
            }
          ]
        }
      ],
      [
        "借りて",
        "借りて",
        "借りて",
        "빌리고 / 빌려서",
        {
          "id": "verb_95d2b597_te",
          "baseId": "verb_95d2b597",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "図書館で本を借りてください。",
              "hira": "借りて",
              "pronunciation": "借りて",
              "meaning": "빌려 주세요."
            }
          ]
        }
      ],
      [
        "貸して",
        "貸して",
        "貸して",
        "빌려주고 / 빌려줘서",
        {
          "id": "verb_d91a49e4_te",
          "baseId": "verb_d91a49e4",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "友達に傘を貸してください。",
              "hira": "貸して",
              "pronunciation": "貸して",
              "meaning": "빌려 주세요."
            }
          ]
        }
      ],
      [
        "返して",
        "返して",
        "返して",
        "돌려주고 / 돌려줘서",
        {
          "id": "verb_37b69281_te",
          "baseId": "verb_37b69281",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "借りた本を図書館に返してください。",
              "hira": "返して",
              "pronunciation": "返して",
              "meaning": "돌려주세요."
            }
          ]
        }
      ],
      [
        "忘れて",
        "忘れて",
        "忘れて",
        "잊고 / 잊어서",
        {
          "id": "verb_9040ec21_te",
          "baseId": "verb_9040ec21",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "財布を家に忘れてください。",
              "hira": "忘れて",
              "pronunciation": "忘れて",
              "meaning": "잊어 주세요."
            }
          ]
        }
      ],
      [
        "覚えて",
        "覚えて",
        "覚えて",
        "외우고 / 외워서",
        {
          "id": "verb_e9ccbd29_te",
          "baseId": "verb_e9ccbd29",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "新しい単語を覚えてください。",
              "hira": "覚えて",
              "pronunciation": "覚えて",
              "meaning": "외워 주세요."
            }
          ]
        }
      ],
      [
        "知って",
        "知って",
        "知って",
        "알고 / 알아서",
        {
          "id": "verb_e59eecb9_te",
          "baseId": "verb_e59eecb9",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "そのニュースを知って、驚きました。",
              "hira": "知って",
              "pronunciation": "知って",
              "meaning": "그 뉴스를 알고 놀랐습니다."
            }
          ]
        }
      ],
      [
        "分かって",
        "分かって",
        "分かって",
        "알고 / 알아서",
        {
          "id": "verb_c3f97595_te",
          "baseId": "verb_c3f97595",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "意味が分かって、安心しました。",
              "hira": "分かって",
              "pronunciation": "分かって",
              "meaning": "뜻을 이해해서 안심했습니다."
            }
          ]
        }
      ],
      [
        "思って",
        "思って",
        "思って",
        "생각하고 / 생각해서",
        {
          "id": "verb_5d47ba56_te",
          "baseId": "verb_5d47ba56",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "いいと思って、申し込みました。",
              "hira": "思って",
              "pronunciation": "思って",
              "meaning": "좋다고 생각해서 신청했습니다."
            }
          ]
        }
      ],
      [
        "考えて",
        "考えて",
        "考えて",
        "생각하고 / 생각해서",
        {
          "id": "verb_32df321f_te",
          "baseId": "verb_32df321f",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "週末の予定を考えてください。",
              "hira": "考えて",
              "pronunciation": "考えて",
              "meaning": "생각해 주세요."
            }
          ]
        }
      ],
      [
        "言って",
        "言って",
        "言って",
        "말하고 / 말해서",
        {
          "id": "verb_a51e57f2_te",
          "baseId": "verb_a51e57f2",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "自分の意見をはっきり言ってください。",
              "hira": "言って",
              "pronunciation": "言って",
              "meaning": "말해 주세요."
            }
          ]
        }
      ],
      [
        "聞いて",
        "聞いて",
        "聞いて",
        "듣고 / 들어서",
        {
          "id": "verb_797f8264_te",
          "baseId": "verb_797f8264",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "先生の話をよく聞いてください。",
              "hira": "聞いて",
              "pronunciation": "聞いて",
              "meaning": "들어 주세요."
            }
          ]
        }
      ],
      [
        "答えて",
        "答えて",
        "答えて",
        "대답하고 / 대답해서",
        {
          "id": "verb_b03e9e2d_te",
          "baseId": "verb_b03e9e2d",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "質問に日本語で答えてください。",
              "hira": "答えて",
              "pronunciation": "答えて",
              "meaning": "대답해 주세요."
            }
          ]
        }
      ],
      [
        "待って",
        "待って",
        "待って",
        "기다리고 / 기다려서",
        {
          "id": "verb_aec76c47_te",
          "baseId": "verb_aec76c47",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "駅で友達を待ってください。",
              "hira": "待って",
              "pronunciation": "待って",
              "meaning": "기다려 주세요."
            }
          ]
        }
      ],
      [
        "急いで",
        "急いで",
        "急いで",
        "서두르고 / 서둘러서",
        {
          "id": "verb_26e8be16_te",
          "baseId": "verb_26e8be16",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "時間がないので急いでください。",
              "hira": "急いで",
              "pronunciation": "急いで",
              "meaning": "서둘러 주세요."
            }
          ]
        }
      ],
      [
        "入って",
        "入って",
        "入って",
        "들어가고 / 들어가서",
        {
          "id": "verb_ffa98111_te",
          "baseId": "verb_ffa98111",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "八時に会社に入ってください。",
              "hira": "入って",
              "pronunciation": "入って",
              "meaning": "들어가 주세요."
            }
          ]
        }
      ],
      [
        "出て",
        "出て",
        "出て",
        "나오고 / 나와서",
        {
          "id": "verb_022a74da_te",
          "baseId": "verb_022a74da",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "毎朝、七時に家を出てください。",
              "hira": "出て",
              "pronunciation": "出て",
              "meaning": "나가 주세요."
            }
          ]
        }
      ],
      [
        "入れて",
        "入れて",
        "入れて",
        "넣고 / 넣어서",
        {
          "id": "verb_8aee63b8_te",
          "baseId": "verb_8aee63b8",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "かばんに財布を入れてください。",
              "hira": "入れて",
              "pronunciation": "入れて",
              "meaning": "넣어 주세요."
            }
          ]
        }
      ],
      [
        "出して",
        "出して",
        "出して",
        "꺼내고 / 꺼내서",
        {
          "id": "verb_667067d9_te",
          "baseId": "verb_667067d9",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "かばんから財布を出してください。",
              "hira": "出して",
              "pronunciation": "出して",
              "meaning": "꺼내 주세요."
            }
          ]
        }
      ],
      [
        "着て",
        "着て",
        "着て",
        "입고 / 입어서",
        {
          "id": "verb_1466ca64_te",
          "baseId": "verb_1466ca64",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "寒い日はコートを着てください。",
              "hira": "着て",
              "pronunciation": "着て",
              "meaning": "입어 주세요."
            }
          ]
        }
      ],
      [
        "脱いで",
        "脱いで",
        "脱いで",
        "벗고 / 벗어서",
        {
          "id": "verb_a6ae45f8_te",
          "baseId": "verb_a6ae45f8",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "家に帰ったら靴を脱いでください。",
              "hira": "脱いで",
              "pronunciation": "脱いで",
              "meaning": "벗어 주세요."
            }
          ]
        }
      ],
      [
        "洗って",
        "洗って",
        "洗って",
        "씻고 / 씻어서",
        {
          "id": "verb_390ef05f_te",
          "baseId": "verb_390ef05f",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "食事の前に手を洗ってください。",
              "hira": "洗って",
              "pronunciation": "洗って",
              "meaning": "씻어 주세요."
            }
          ]
        }
      ],
      [
        "できて",
        "できて",
        "できて",
        "할 수 있고 / 가능해서",
        {
          "id": "verb_0f9c874c_te",
          "baseId": "verb_0f9c874c",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "一人でできて、うれしいです。",
              "hira": "できて",
              "pronunciation": "できて",
              "meaning": "혼자서 할 수 있어서 기쁩니다."
            }
          ]
        }
      ],
      [
        "終えて",
        "終えて",
        "終えて",
        "끝내고 / 끝내서",
        {
          "id": "verb_extra_終える_te",
          "baseId": "verb_extra_終える",
          "form": "conjugation",
          "level": "N3",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "仕事を終えてから、帰ります。",
              "hira": "終えて",
              "pronunciation": "終えて",
              "meaning": "일을 끝낸 후에 돌아갑니다."
            }
          ]
        }
      ],
      [
        "続けて",
        "続けて",
        "続けて",
        "계속하고 / 계속해서",
        {
          "id": "verb_extra_続ける_te",
          "baseId": "verb_extra_続ける",
          "form": "conjugation",
          "level": "N4",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "毎日、日本語の勉強を続けてください。",
              "hira": "続けて",
              "pronunciation": "続けて",
              "meaning": "계속해 주세요."
            }
          ]
        }
      ],
      [
        "止めて",
        "止めて",
        "止めて",
        "멈추고 / 멈춰서",
        {
          "id": "verb_extra_止める_te",
          "baseId": "verb_extra_止める",
          "form": "conjugation",
          "level": "N4",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "ここに車を止めてください。",
              "hira": "止めて",
              "pronunciation": "止めて",
              "meaning": "세워 주세요."
            }
          ]
        }
      ],
      [
        "変えて",
        "変えて",
        "変えて",
        "바꾸고 / 바꿔서",
        {
          "id": "verb_extra_変える_te",
          "baseId": "verb_extra_変える",
          "form": "conjugation",
          "level": "N4",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "旅行の予定を変えてください。",
              "hira": "変えて",
              "pronunciation": "変えて",
              "meaning": "바꿔 주세요."
            }
          ]
        }
      ],
      [
        "決めて",
        "決めて",
        "決めて",
        "정하고 / 정해서",
        {
          "id": "verb_extra_決める_te",
          "baseId": "verb_extra_決める",
          "form": "conjugation",
          "level": "N4",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "今週中に日程を決めてください。",
              "hira": "決めて",
              "pronunciation": "決めて",
              "meaning": "정해 주세요."
            }
          ]
        }
      ],
      [
        "選んで",
        "選んで",
        "選んで",
        "고르고 / 골라서",
        {
          "id": "verb_extra_選ぶ_te",
          "baseId": "verb_extra_選ぶ",
          "form": "conjugation",
          "level": "N4",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "好きな色を選んでください。",
              "hira": "選んで",
              "pronunciation": "選んで",
              "meaning": "골라 주세요."
            }
          ]
        }
      ],
      [
        "探して",
        "探して",
        "探して",
        "찾고 / 찾아서",
        {
          "id": "verb_extra_探す_te",
          "baseId": "verb_extra_探す",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "駅でホテルを探してください。",
              "hira": "探して",
              "pronunciation": "探して",
              "meaning": "찾아 주세요."
            }
          ]
        }
      ],
      [
        "見つけて",
        "見つけて",
        "見つけて",
        "찾아내고 / 찾아내서",
        {
          "id": "verb_extra_見つける_te",
          "baseId": "verb_extra_見つける",
          "form": "conjugation",
          "level": "N4",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "駅の近くでいい店を見つけてください。",
              "hira": "見つけて",
              "pronunciation": "見つけて",
              "meaning": "찾아 주세요."
            }
          ]
        }
      ],
      [
        "見つかって",
        "見つかって",
        "見つかって",
        "발견되고 / 발견되어서",
        {
          "id": "verb_extra_見つかる_te",
          "baseId": "verb_extra_見つかる",
          "form": "conjugation",
          "level": "N4",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "鍵が見つかって、安心しました。",
              "hira": "見つかって",
              "pronunciation": "見つかって",
              "meaning": "열쇠를 찾아서 안심했습니다."
            }
          ]
        }
      ],
      [
        "調べて",
        "調べて",
        "調べて",
        "조사하고 / 조사해서",
        {
          "id": "verb_extra_調べる_te",
          "baseId": "verb_extra_調べる",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "分からない言葉を辞書で調べてください。",
              "hira": "調べて",
              "pronunciation": "調べて",
              "meaning": "찾아봐 주세요."
            }
          ]
        }
      ],
      [
        "決まって",
        "決まって",
        "決まって",
        "정해지고 / 정해져서",
        {
          "id": "verb_extra_決まる_te",
          "baseId": "verb_extra_決まる",
          "form": "conjugation",
          "level": "N4",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "日程が決まってから、みんなに知らせます。",
              "hira": "決まって",
              "pronunciation": "決まって",
              "meaning": "일정이 정해진 후에 모두에게 알립니다."
            }
          ]
        }
      ],
      [
        "比べて",
        "くらべて",
        "쿠라베테",
        "비교하고 / 비교해서",
        {
          "id": "verb_extra_比べる_te",
          "baseId": "verb_extra_比べる",
          "form": "conjugation",
          "level": "N4",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "二つの商品を比べてください。",
              "hira": "くらべて",
              "pronunciation": "쿠라베테",
              "meaning": "비교해 주세요."
            }
          ]
        }
      ],
      [
        "受けて",
        "受けて",
        "受けて",
        "받고 / 받아서",
        {
          "id": "verb_extra_受ける_te",
          "baseId": "verb_extra_受ける",
          "form": "conjugation",
          "level": "N4",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "来月、日本語の試験を受けてください。",
              "hira": "受けて",
              "pronunciation": "受けて",
              "meaning": "시험을 봐 주세요."
            }
          ]
        }
      ],
      [
        "申し込んで",
        "もうしこんで",
        "모오시콘데",
        "신청하고 / 신청해서",
        {
          "id": "verb_extra_申し込む_te",
          "baseId": "verb_extra_申し込む",
          "form": "conjugation",
          "level": "N3",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "オンラインで講座に申し込んでください。",
              "hira": "もうしこんで",
              "pronunciation": "모오시콘데",
              "meaning": "신청해 주세요."
            }
          ]
        }
      ],
      [
        "予約して",
        "よやくして",
        "요야쿠시테",
        "예약하고 / 예약해서",
        {
          "id": "verb_extra_予約する_te",
          "baseId": "verb_extra_予約する",
          "form": "conjugation",
          "level": "N4",
          "meta": {
            "verbGroup": "3그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "ホテルをインターネットで予約してください。",
              "hira": "よやくして",
              "pronunciation": "요야쿠시테",
              "meaning": "예약해 주세요."
            }
          ]
        }
      ],
      [
        "確認して",
        "確認して",
        "確認して",
        "확인하고 / 확인해서",
        {
          "id": "verb_extra_確認する_te",
          "baseId": "verb_extra_確認する",
          "form": "conjugation",
          "level": "N3",
          "meta": {
            "verbGroup": "3그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "出発時間を確認してください。",
              "hira": "確認して",
              "pronunciation": "確認して",
              "meaning": "확인해 주세요."
            }
          ]
        }
      ],
      [
        "連絡して",
        "れんらくして",
        "렌라쿠시테",
        "연락하고 / 연락해서",
        {
          "id": "verb_extra_連絡する_te",
          "baseId": "verb_extra_連絡する",
          "form": "conjugation",
          "level": "N3",
          "meta": {
            "verbGroup": "3그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "着いたら連絡してください。",
              "hira": "れんらくして",
              "pronunciation": "렌라쿠시테",
              "meaning": "연락해 주세요."
            }
          ]
        }
      ],
      [
        "説明して",
        "説明して",
        "説明して",
        "설명하고 / 설명해서",
        {
          "id": "verb_extra_説明する_te",
          "baseId": "verb_extra_説明する",
          "form": "conjugation",
          "level": "N3",
          "meta": {
            "verbGroup": "3그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "先生が文法を説明してください。",
              "hira": "説明して",
              "pronunciation": "説明して",
              "meaning": "설명해 주세요."
            }
          ]
        }
      ],
      [
        "準備して",
        "じゅんびして",
        "준비시테",
        "준비하고 / 준비해서",
        {
          "id": "verb_extra_準備する_te",
          "baseId": "verb_extra_準備する",
          "form": "conjugation",
          "level": "N4",
          "meta": {
            "verbGroup": "3그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "旅行の準備をしてから、出発します。",
              "hira": "じゅんびして",
              "pronunciation": "준비시테",
              "meaning": "여행 준비를 한 후 출발합니다."
            }
          ]
        }
      ],
      [
        "片付けて",
        "片付けて",
        "片付けて",
        "정리하고 / 정리해서",
        {
          "id": "verb_extra_片付ける_te",
          "baseId": "verb_extra_片付ける",
          "form": "conjugation",
          "level": "N4",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "食事の後で部屋を片付けてください。",
              "hira": "片付けて",
              "pronunciation": "片付けて",
              "meaning": "정리해 주세요."
            }
          ]
        }
      ],
      [
        "洗濯して",
        "洗濯して",
        "洗濯して",
        "세탁하고 / 세탁해서",
        {
          "id": "verb_extra_洗濯する_te",
          "baseId": "verb_extra_洗濯する",
          "form": "conjugation",
          "level": "N4",
          "meta": {
            "verbGroup": "3그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "土曜日に洗濯してください。",
              "hira": "洗濯して",
              "pronunciation": "洗濯して",
              "meaning": "빨래해 주세요."
            }
          ]
        }
      ],
      [
        "出発して",
        "出発して",
        "出発して",
        "출발하고 / 출발해서",
        {
          "id": "verb_extra_出発する_te",
          "baseId": "verb_extra_出発する",
          "form": "conjugation",
          "level": "N4",
          "meta": {
            "verbGroup": "3그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "朝八時に東京を出発してください。",
              "hira": "出発して",
              "pronunciation": "出発して",
              "meaning": "출발해 주세요."
            }
          ]
        }
      ],
      [
        "到着して",
        "到着して",
        "到着して",
        "도착하고 / 도착해서",
        {
          "id": "verb_extra_到着する_te",
          "baseId": "verb_extra_到着する",
          "form": "conjugation",
          "level": "N3",
          "meta": {
            "verbGroup": "3그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "午後三時に京都に到着してください。",
              "hira": "到着して",
              "pronunciation": "到着して",
              "meaning": "도착해 주세요."
            }
          ]
        }
      ],
      [
        "利用して",
        "利用して",
        "利用して",
        "이용하고 / 이용해서",
        {
          "id": "verb_extra_利用する_te",
          "baseId": "verb_extra_利用する",
          "form": "conjugation",
          "level": "N3",
          "meta": {
            "verbGroup": "3그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "旅行中はこのサービスを利用してください。",
              "hira": "利用して",
              "pronunciation": "利用して",
              "meaning": "이용해 주세요."
            }
          ]
        }
      ],
      [
        "運んで",
        "はこんで",
        "하콘데",
        "나르고 / 날라서",
        {
          "id": "verb_c2486c41e6_te",
          "level": "N4",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "荷物を部屋まで運んでください。",
              "hira": "はこんで",
              "pronunciation": "하콘데",
              "meaning": "옮겨 주세요."
            }
          ],
          "baseId": "verb_c2486c41e6",
          "form": "conjugation"
        }
      ],
      [
        "売って",
        "うって",
        "웃테",
        "팔고 / 팔아서",
        {
          "id": "verb_ec51fc2e16_te",
          "level": "N4",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "使わなくなった本を売ってください。",
              "hira": "うって",
              "pronunciation": "웃테",
              "meaning": "팔아 주세요."
            }
          ],
          "baseId": "verb_ec51fc2e16",
          "form": "conjugation"
        }
      ],
      [
        "消して",
        "けして",
        "케시테",
        "끄고 / 꺼서",
        {
          "id": "verb_df2b3a6397_te",
          "level": "N4",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "寝る前に電気を消してください。",
              "hira": "けして",
              "pronunciation": "케시테",
              "meaning": "꺼 주세요."
            }
          ],
          "baseId": "verb_df2b3a6397",
          "form": "conjugation"
        }
      ],
      [
        "押して",
        "おして",
        "오시테",
        "누르고 / 눌러서",
        {
          "id": "verb_30038e39f3_te",
          "level": "N4",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "このボタンを押してください。",
              "hira": "おして",
              "pronunciation": "오시테",
              "meaning": "눌러 주세요."
            }
          ],
          "baseId": "verb_30038e39f3",
          "form": "conjugation"
        }
      ],
      [
        "引いて",
        "ひいて",
        "히이테",
        "당기고 / 당겨서",
        {
          "id": "verb_371c196bcb_te",
          "level": "N4",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "ドアを手前に引いてください。",
              "hira": "ひいて",
              "pronunciation": "히이테",
              "meaning": "당겨 주세요."
            }
          ],
          "baseId": "verb_371c196bcb",
          "form": "conjugation"
        }
      ],
      [
        "拾って",
        "ひろって",
        "히롯테",
        "줍고 / 주워서",
        {
          "id": "verb_d404351530_te",
          "level": "N4",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "道で財布を拾ってください。",
              "hira": "ひろって",
              "pronunciation": "히롯테",
              "meaning": "주워 주세요."
            }
          ],
          "baseId": "verb_d404351530",
          "form": "conjugation"
        }
      ],
      [
        "捨てて",
        "すてて",
        "스테테",
        "버리고 / 버려서",
        {
          "id": "verb_e720775ac7_te",
          "level": "N4",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "古い服を捨ててください。",
              "hira": "すてて",
              "pronunciation": "스테테",
              "meaning": "버려 주세요."
            }
          ],
          "baseId": "verb_e720775ac7",
          "form": "conjugation"
        }
      ],
      [
        "集めて",
        "あつめて",
        "아츠메테",
        "모으고 / 모아서",
        {
          "id": "verb_0a49f1e34a_te",
          "level": "N4",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "旅行の情報を集めてください。",
              "hira": "あつめて",
              "pronunciation": "아츠메테",
              "meaning": "모아 주세요."
            }
          ],
          "baseId": "verb_0a49f1e34a",
          "form": "conjugation"
        }
      ],
      [
        "直して",
        "なおして",
        "나오시테",
        "고치고 / 고쳐서",
        {
          "id": "verb_442e7ec90b_te",
          "level": "N4",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "間違いを直してください。",
              "hira": "なおして",
              "pronunciation": "나오시테",
              "meaning": "고쳐 주세요."
            }
          ],
          "baseId": "verb_442e7ec90b",
          "form": "conjugation"
        }
      ],
      [
        "直って",
        "なおって",
        "나옷테",
        "고쳐지고 / 고쳐져서",
        {
          "id": "verb_1f8de4ba37_te",
          "level": "N4",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "時計が直って、安心しました。",
              "hira": "なおって",
              "pronunciation": "나옷테",
              "meaning": "시계가 고쳐져서 안심했습니다."
            }
          ],
          "baseId": "verb_1f8de4ba37",
          "form": "conjugation"
        }
      ],
      [
        "壊して",
        "こわして",
        "코와시테",
        "망가뜨리고 / 망가뜨려서",
        {
          "id": "verb_4160686f0d_te",
          "level": "N4",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "子どもがおもちゃを壊してしまって、困りました。",
              "hira": "こわして",
              "pronunciation": "코와시테",
              "meaning": "아이가 장난감을 망가뜨려서 곤란했습니다."
            }
          ],
          "baseId": "verb_4160686f0d",
          "form": "conjugation"
        }
      ],
      [
        "壊れて",
        "こわれて",
        "코와레테",
        "망가지고 / 망가져서",
        {
          "id": "verb_c34da08306_te",
          "level": "N4",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "パソコンが壊れて、仕事ができませんでした。",
              "hira": "こわれて",
              "pronunciation": "코와레테",
              "meaning": "컴퓨터가 고장 나서 일을 할 수 없었습니다."
            }
          ],
          "baseId": "verb_c34da08306",
          "form": "conjugation"
        }
      ],
      [
        "遅れて",
        "おくれて",
        "오쿠레테",
        "늦고 / 늦어서",
        {
          "id": "verb_89aa88ff42_te",
          "level": "N4",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "電車が遅れて、少し困りました。",
              "hira": "おくれて",
              "pronunciation": "오쿠레테",
              "meaning": "전철이 늦어서 조금 곤란했습니다."
            }
          ],
          "baseId": "verb_89aa88ff42",
          "form": "conjugation"
        }
      ],
      [
        "間に合って",
        "まにあって",
        "마니앗테",
        "시간에 맞고 / 맞아서",
        {
          "id": "verb_28940f5774_te",
          "level": "N4",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "電車に間に合って、安心しました。",
              "hira": "まにあって",
              "pronunciation": "마니앗테",
              "meaning": "전철에 늦지 않게 타서 안심했습니다."
            }
          ],
          "baseId": "verb_28940f5774",
          "form": "conjugation"
        }
      ],
      [
        "参加して",
        "さんかして",
        "산카시테",
        "참가하고 / 참가해서",
        {
          "id": "verb_f8da0bc1c2_te",
          "level": "N4",
          "meta": {
            "verbGroup": "3그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "明日の会議に参加してください。",
              "hira": "さんかして",
              "pronunciation": "산카시테",
              "meaning": "참가해 주세요."
            }
          ],
          "baseId": "verb_f8da0bc1c2",
          "form": "conjugation"
        }
      ],
      [
        "止まって",
        "とまって",
        "토마루",
        "멈추다(て형)",
        {
          "id": "verb_extra_1_te",
          "baseId": "verb_extra_1",
          "form": "conjugation",
          "level": "N4",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "自動詞"
          },
          "examples": [
            {
              "jp": "電車が止まって、少し待ちました。",
              "hira": "でんしゃがとまって、すこしまちました。",
              "pronunciation": "덴샤가 토맛테, 스코시 마치마시타",
              "meaning": "전철이 멈춰서 조금 기다렸습니다."
            }
          ]
        }
      ],
      [
        "呼んで",
        "よんで",
        "요부",
        "부르다(て형)",
        {
          "id": "verb_extra_2_te",
          "baseId": "verb_extra_2",
          "form": "conjugation",
          "level": "N4",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "他動詞"
          },
          "examples": [
            {
              "jp": "店員を呼んでください。",
              "hira": "てんいんをよんでください。",
              "pronunciation": "텐인오 욘데 쿠다사이",
              "meaning": "점원을 불러 주세요."
            }
          ]
        }
      ],
      [
        "泊まって",
        "とまって",
        "토마루",
        "묵다 / 숙박하다(て형)",
        {
          "id": "verb_extra_3_te",
          "baseId": "verb_extra_3",
          "form": "conjugation",
          "level": "N4",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "自動詞"
          },
          "examples": [
            {
              "jp": "駅の近くに泊まってください。",
              "hira": "えきのちかくにとまってください。",
              "pronunciation": "에키노 치카쿠니 토맛테 쿠다사이",
              "meaning": "역 근처에 묵어 주세요."
            }
          ]
        }
      ],
      [
        "着いて",
        "ついて",
        "츠쿠",
        "도착하다(て형)",
        {
          "id": "verb_extra_4_te",
          "baseId": "verb_extra_4",
          "form": "conjugation",
          "level": "N4",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "自動詞"
          },
          "examples": [
            {
              "jp": "駅に着いてから電話します。",
              "hira": "えきについてからでんわします。",
              "pronunciation": "에키니 츠이테카라 덴와시마스",
              "meaning": "역에 도착한 후 전화하겠습니다."
            }
          ]
        }
      ],
      [
        "乗り換えて",
        "のりかえて",
        "노리카에루",
        "갈아타다(て형)",
        {
          "id": "verb_extra_5_te",
          "baseId": "verb_extra_5",
          "form": "conjugation",
          "level": "N4",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "自動詞"
          },
          "examples": [
            {
              "jp": "二番線で乗り換えてください。",
              "hira": "にばんせんでのりかえてください。",
              "pronunciation": "니반센데 노리카에테 쿠다사이",
              "meaning": "2번 승강장에서 갈아타 주세요."
            }
          ]
        }
      ]
    ],
    "た형": [
      [
        "行った",
        "いった",
        "잇타",
        "갔어 (과거형)",
        {
          "id": "verb_iku_ta",
          "baseId": "verb_iku",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "昨日は学校へ行った。",
              "hira": "いった",
              "pronunciation": "잇타",
              "meaning": "어제는 학교에 갔습니다."
            }
          ]
        }
      ],
      [
        "食べた",
        "たべた",
        "타베타",
        "먹었어 (과거형)",
        {
          "id": "verb_taberu_ta",
          "baseId": "verb_taberu",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "毎朝、朝ご飯を食べた。",
              "hira": "たべた",
              "pronunciation": "타베타",
              "meaning": "매일 아침, 아침밥을 먹었습니다."
            }
          ]
        }
      ],
      [
        "見た",
        "みた",
        "미타",
        "봤어 (과거형)",
        {
          "id": "verb_miru_ta",
          "baseId": "verb_miru",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "夜に映画を見た。",
              "hira": "みた",
              "pronunciation": "미타",
              "meaning": "밤에 영화를 봤습니다."
            }
          ]
        }
      ],
      [
        "飲んだ",
        "のんだ",
        "논다",
        "마셨어 (과거형)",
        {
          "id": "verb_nomu_ta",
          "baseId": "verb_nomu",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "毎朝、水を飲んだ。",
              "hira": "のんだ",
              "pronunciation": "논다",
              "meaning": "매일 아침 물을 마셨습니다."
            }
          ]
        }
      ],
      [
        "書いた",
        "かいた",
        "카이타",
        "썼어 (과거형)",
        {
          "id": "verb_kaku_ta",
          "baseId": "verb_kaku",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "ノートに名前を書いた。",
              "hira": "かいた",
              "pronunciation": "카이타",
              "meaning": "공책에 이름을 썼습니다."
            }
          ]
        }
      ],
      [
        "読んだ",
        "よんだ",
        "욘다",
        "읽었어 (과거형)",
        {
          "id": "verb_yomu_ta",
          "baseId": "verb_yomu",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "寝る前に本を読んだ。",
              "hira": "よんだ",
              "pronunciation": "욘다",
              "meaning": "자기 전에 책을 읽었습니다."
            }
          ]
        }
      ],
      [
        "話した",
        "はなした",
        "하나시타",
        "말했어 / 이야기했어 (과거형)",
        {
          "id": "verb_hanasu_ta",
          "baseId": "verb_hanasu",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "友達と日本語で話した。",
              "hira": "はなした",
              "pronunciation": "하나시타",
              "meaning": "친구와 일본어로 이야기했습니다."
            }
          ]
        }
      ],
      [
        "買った",
        "かった",
        "캇타",
        "샀어 (과거형)",
        {
          "id": "verb_kau_ta",
          "baseId": "verb_kau",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "駅で切符を買った。",
              "hira": "かった",
              "pronunciation": "캇타",
              "meaning": "역에서 표를 샀습니다."
            }
          ]
        }
      ],
      [
        "帰った",
        "かえった",
        "카엣타",
        "돌아갔어 / 돌아왔어 (과거형)",
        {
          "id": "verb_kaeru_ta",
          "baseId": "verb_kaeru",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "仕事が終わったら家に帰った。",
              "hira": "かえった",
              "pronunciation": "카엣타",
              "meaning": "일이 끝나면 집에 돌아갔습니다."
            }
          ]
        }
      ],
      [
        "会った",
        "会った",
        "会った",
        "만났어 (과거형)",
        {
          "id": "verb_8c96a83e_ta",
          "baseId": "verb_8c96a83e",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "週末に友達に会った。",
              "hira": "会った",
              "pronunciation": "会った",
              "meaning": "주말에 친구를 만났습니다."
            }
          ]
        }
      ],
      [
        "あった",
        "あった",
        "아타",
        "있었어 (과거형)",
        {
          "id": "verb_b8345a61_ta",
          "baseId": "verb_b8345a61",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "机の上に本があった。",
              "hira": "あった",
              "pronunciation": "아타",
              "meaning": "책상 위에 책이 있었습니다."
            }
          ]
        }
      ],
      [
        "いた",
        "いた",
        "이타",
        "있었어 (과거형)",
        {
          "id": "verb_bb9d44f8_ta",
          "baseId": "verb_bb9d44f8",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "教室に先生がいた。",
              "hira": "いた",
              "pronunciation": "이타",
              "meaning": "교실에 선생님이 계셨습니다."
            }
          ]
        }
      ],
      [
        "起きた",
        "起きた",
        "起きた",
        "일어났어 (과거형)",
        {
          "id": "verb_f1e80ce9_ta",
          "baseId": "verb_f1e80ce9",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "毎朝、七時に起きた。",
              "hira": "起きた",
              "pronunciation": "起きた",
              "meaning": "매일 아침 7시에 일어났습니다."
            }
          ]
        }
      ],
      [
        "寝た",
        "寝た",
        "寝た",
        "잤어 (과거형)",
        {
          "id": "verb_32c88ea6_ta",
          "baseId": "verb_32c88ea6",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "毎晩、十一時に寝た。",
              "hira": "寝た",
              "pronunciation": "寝た",
              "meaning": "매일 밤 11시에 잤습니다."
            }
          ]
        }
      ],
      [
        "働いた",
        "働いた",
        "働いた",
        "일했어 (과거형)",
        {
          "id": "verb_b39fc552_ta",
          "baseId": "verb_b39fc552",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "東京の会社で働いた。",
              "hira": "働いた",
              "pronunciation": "働いた",
              "meaning": "도쿄의 회사에서 일했습니다."
            }
          ]
        }
      ],
      [
        "休んだ",
        "休んだ",
        "休んだ",
        "쉬었어 / 결석했어 (과거형)",
        {
          "id": "verb_8b24f26b_ta",
          "baseId": "verb_8b24f26b",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "今日は家でゆっくり休んだ。",
              "hira": "休んだ",
              "pronunciation": "休んだ",
              "meaning": "오늘은 집에서 푹 쉬었습니다."
            }
          ]
        }
      ],
      [
        "使った",
        "使った",
        "使った",
        "사용했어 (과거형)",
        {
          "id": "verb_bb0e5d22_ta",
          "baseId": "verb_bb0e5d22",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "このアプリを毎日使った。",
              "hira": "使った",
              "pronunciation": "使った",
              "meaning": "이 앱을 매일 사용했습니다."
            }
          ]
        }
      ],
      [
        "作った",
        "作った",
        "作った",
        "만들었어 (과거형)",
        {
          "id": "verb_94b87121_ta",
          "baseId": "verb_94b87121",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "週末にカレーを作った。",
              "hira": "作った",
              "pronunciation": "作った",
              "meaning": "주말에 카레를 만들었습니다."
            }
          ]
        }
      ],
      [
        "持った",
        "持った",
        "持った",
        "가졌어 / 들었어 (과거형)",
        {
          "id": "verb_9197e4fd_ta",
          "baseId": "verb_9197e4fd",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "傘を持った。",
              "hira": "持った",
              "pronunciation": "持った",
              "meaning": "우산을 가지고 외출했습니다."
            }
          ]
        }
      ],
      [
        "取った",
        "取った",
        "取った",
        "잡았어 / 취했어 (과거형)",
        {
          "id": "verb_49234a82_ta",
          "baseId": "verb_49234a82",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "大事なことをノートに取った。",
              "hira": "取った",
              "pronunciation": "取った",
              "meaning": "여행 사진을 많이 찍었습니다."
            }
          ]
        }
      ],
      [
        "置いた",
        "置いた",
        "置いた",
        "놓았어 / 뒀어 (과거형)",
        {
          "id": "verb_fc7721ef_ta",
          "baseId": "verb_fc7721ef",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "鍵をテーブルの上に置いた。",
              "hira": "置いた",
              "pronunciation": "置いた",
              "meaning": "열쇠를 테이블 위에 놓았습니다."
            }
          ]
        }
      ],
      [
        "開けた",
        "開けた",
        "開けた",
        "열었어 (과거형)",
        {
          "id": "verb_75b7bd31_ta",
          "baseId": "verb_75b7bd31",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "窓を開けた。",
              "hira": "開けた",
              "pronunciation": "開けた",
              "meaning": "창문을 열었습니다."
            }
          ]
        }
      ],
      [
        "閉めた",
        "閉めた",
        "閉めた",
        "닫았어 (과거형)",
        {
          "id": "verb_cc46a6d5_ta",
          "baseId": "verb_cc46a6d5",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "寝る前にドアを閉めた。",
              "hira": "閉めた",
              "pronunciation": "閉めた",
              "meaning": "자기 전에 문을 닫았습니다."
            }
          ]
        }
      ],
      [
        "開いた",
        "開いた",
        "開いた",
        "열렸어 (과거형)",
        {
          "id": "verb_8c7f33dc_ta",
          "baseId": "verb_8c7f33dc",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "店は九時に開いた。",
              "hira": "開いた",
              "pronunciation": "開いた",
              "meaning": "가게는 9시에 열었습니다."
            }
          ]
        }
      ],
      [
        "閉まった",
        "閉まった",
        "閉まった",
        "닫혔어 (과거형)",
        {
          "id": "verb_7a531040_ta",
          "baseId": "verb_7a531040",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "この店は八時に閉まった。",
              "hira": "閉まった",
              "pronunciation": "閉まった",
              "meaning": "이 가게는 8시에 문을 닫았습니다."
            }
          ]
        }
      ],
      [
        "始めた",
        "始めた",
        "始めた",
        "시작했어 (과거형)",
        {
          "id": "verb_af915dc0_ta",
          "baseId": "verb_af915dc0",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "九時から仕事を始めた。",
              "hira": "始めた",
              "pronunciation": "始めた",
              "meaning": "9시부터 일을 시작했습니다."
            }
          ]
        }
      ],
      [
        "始まった",
        "始まった",
        "始まった",
        "시작됐어 (과거형)",
        {
          "id": "verb_6d0d725d_ta",
          "baseId": "verb_6d0d725d",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "授業は九時に始まった。",
              "hira": "始まった",
              "pronunciation": "始まった",
              "meaning": "수업은 9시에 시작되었습니다."
            }
          ]
        }
      ],
      [
        "終わった",
        "終わった",
        "終わった",
        "끝났어 (과거형)",
        {
          "id": "verb_282e7ad7_ta",
          "baseId": "verb_282e7ad7",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "授業は三時に終わった。",
              "hira": "終わった",
              "pronunciation": "終わった",
              "meaning": "수업은 3시에 끝났습니다."
            }
          ]
        }
      ],
      [
        "教えた",
        "教えた",
        "教えた",
        "가르쳤어 / 알려 줬어 (과거형)",
        {
          "id": "verb_8fcd9672_ta",
          "baseId": "verb_8fcd9672",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "先生が日本語を教えた。",
              "hira": "教えた",
              "pronunciation": "教えた",
              "meaning": "선생님이 일본어를 가르쳤습니다."
            }
          ]
        }
      ],
      [
        "習った",
        "習った",
        "習った",
        "배웠어 (과거형)",
        {
          "id": "verb_815c9429_ta",
          "baseId": "verb_815c9429",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "先生から日本語を習った。",
              "hira": "習った",
              "pronunciation": "習った",
              "meaning": "선생님에게 일본어를 배웠습니다."
            }
          ]
        }
      ],
      [
        "勉強した",
        "べんきょうした",
        "벤쿄오시타",
        "공부했어 (과거형)",
        {
          "id": "verb_c17e2e8d_ta",
          "baseId": "verb_c17e2e8d",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "3그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "毎日、日本語を勉強した。",
              "hira": "べんきょうした",
              "pronunciation": "벤쿄오시타",
              "meaning": "매일 일본어를 공부했습니다."
            }
          ]
        }
      ],
      [
        "練習した",
        "れんしゅうした",
        "렌슈우시타",
        "연습했어 (과거형)",
        {
          "id": "verb_869aa4c0_ta",
          "baseId": "verb_869aa4c0",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "3그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "毎日、会話を練習した。",
              "hira": "れんしゅうした",
              "pronunciation": "렌슈우시타",
              "meaning": "매일 회화를 연습했습니다."
            }
          ]
        }
      ],
      [
        "掃除した",
        "そうじした",
        "소오지시타",
        "청소했어 (과거형)",
        {
          "id": "verb_52eafdbf_ta",
          "baseId": "verb_52eafdbf",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "3그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "毎週、部屋を掃除した。",
              "hira": "そうじした",
              "pronunciation": "소오지시타",
              "meaning": "매주 방을 청소했습니다."
            }
          ]
        }
      ],
      [
        "料理した",
        "りょうりした",
        "료오리시타",
        "요리했어 (과거형)",
        {
          "id": "verb_76f375dd_ta",
          "baseId": "verb_76f375dd",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "3그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "週末に家で料理した。",
              "hira": "りょうりした",
              "pronunciation": "료오리시타",
              "meaning": "주말에 집에서 요리했습니다."
            }
          ]
        }
      ],
      [
        "電話した",
        "でんわした",
        "덴와시타",
        "전화했어 (과거형)",
        {
          "id": "verb_c9e5c467_ta",
          "baseId": "verb_c9e5c467",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "3그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "母に電話した。",
              "hira": "でんわした",
              "pronunciation": "덴와시타",
              "meaning": "어머니에게 전화했습니다."
            }
          ]
        }
      ],
      [
        "住んだ",
        "住んだ",
        "住んだ",
        "살았어 (과거형)",
        {
          "id": "verb_42073ff3_ta",
          "baseId": "verb_42073ff3",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "ソウルに住んだ。",
              "hira": "住んだ",
              "pronunciation": "住んだ",
              "meaning": "서울에 살았습니다."
            }
          ]
        }
      ],
      [
        "乗った",
        "乗った",
        "乗った",
        "탔어 (과거형)",
        {
          "id": "verb_82276e1f_ta",
          "baseId": "verb_82276e1f",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "毎朝、電車に乗った。",
              "hira": "乗った",
              "pronunciation": "乗った",
              "meaning": "매일 아침 전철을 탔습니다."
            }
          ]
        }
      ],
      [
        "降りた",
        "降りた",
        "降りた",
        "내렸어 (과거형)",
        {
          "id": "verb_6432570a_ta",
          "baseId": "verb_6432570a",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "次の駅で電車を降りた。",
              "hira": "降りた",
              "pronunciation": "降りた",
              "meaning": "다음 역에서 전철에서 내렸습니다."
            }
          ]
        }
      ],
      [
        "歩いた",
        "歩いた",
        "歩いた",
        "걸었어 (과거형)",
        {
          "id": "verb_be581e40_ta",
          "baseId": "verb_be581e40",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "駅まで歩いた。",
              "hira": "歩いた",
              "pronunciation": "歩いた",
              "meaning": "역까지 걸어갔습니다."
            }
          ]
        }
      ],
      [
        "走った",
        "走った",
        "走った",
        "달렸어 (과거형)",
        {
          "id": "verb_be92b238_ta",
          "baseId": "verb_be92b238",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "毎朝、公園を走った。",
              "hira": "走った",
              "pronunciation": "走った",
              "meaning": "매일 아침 공원을 달렸습니다."
            }
          ]
        }
      ],
      [
        "泳いだ",
        "泳いだ",
        "泳いだ",
        "수영했어 (과거형)",
        {
          "id": "verb_c033fc3e_ta",
          "baseId": "verb_c033fc3e",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "夏は海で泳いだ。",
              "hira": "泳いだ",
              "pronunciation": "泳いだ",
              "meaning": "여름에는 바다에서 수영했습니다."
            }
          ]
        }
      ],
      [
        "遊んだ",
        "遊んだ",
        "遊んだ",
        "놀았어 (과거형)",
        {
          "id": "verb_0a81a103_ta",
          "baseId": "verb_0a81a103",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "週末に友達と遊んだ。",
              "hira": "遊んだ",
              "pronunciation": "遊んだ",
              "meaning": "주말에 친구와 놀았습니다."
            }
          ]
        }
      ],
      [
        "歌った",
        "歌った",
        "歌った",
        "노래했어 (과거형)",
        {
          "id": "verb_9a70b818_ta",
          "baseId": "verb_9a70b818",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "カラオケで好きな歌を歌った。",
              "hira": "歌った",
              "pronunciation": "歌った",
              "meaning": "노래방에서 좋아하는 노래를 불렀습니다."
            }
          ]
        }
      ],
      [
        "弾いた",
        "弾いた",
        "弾いた",
        "연주했어 / 쳤어 (과거형)",
        {
          "id": "verb_354a8800_ta",
          "baseId": "verb_354a8800",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "ピアノで好きな曲を弾いた。",
              "hira": "弾いた",
              "pronunciation": "弾いた",
              "meaning": "피아노로 좋아하는 곡을 연주했습니다."
            }
          ]
        }
      ],
      [
        "送った",
        "送った",
        "送った",
        "보냈어 (과거형)",
        {
          "id": "verb_db6ec419_ta",
          "baseId": "verb_db6ec419",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "友達に写真を送った。",
              "hira": "送った",
              "pronunciation": "送った",
              "meaning": "친구에게 사진을 보냈습니다."
            }
          ]
        }
      ],
      [
        "もらった",
        "もらった",
        "모라타",
        "받았어 (과거형)",
        {
          "id": "verb_b893c882_ta",
          "baseId": "verb_b893c882",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "友達からプレゼントをもらった。",
              "hira": "もらった",
              "pronunciation": "모라타",
              "meaning": "친구에게서 선물을 받았습니다."
            }
          ]
        }
      ],
      [
        "あげた",
        "あげた",
        "아게타",
        "줬어 (과거형)",
        {
          "id": "verb_feb367cc_ta",
          "baseId": "verb_feb367cc",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "妹に誕生日プレゼントをあげた。",
              "hira": "あげた",
              "pronunciation": "아게타",
              "meaning": "여동생에게 생일 선물을 주었습니다."
            }
          ]
        }
      ],
      [
        "くれた",
        "くれた",
        "쿠레타",
        "줬어 (과거형)",
        {
          "id": "verb_a98f3e33_ta",
          "baseId": "verb_a98f3e33",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "友達が本をくれた。",
              "hira": "くれた",
              "pronunciation": "쿠레타",
              "meaning": "친구가 책을 주었습니다."
            }
          ]
        }
      ],
      [
        "借りた",
        "借りた",
        "借りた",
        "빌렸어 (과거형)",
        {
          "id": "verb_95d2b597_ta",
          "baseId": "verb_95d2b597",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "図書館で本を借りた。",
              "hira": "借りた",
              "pronunciation": "借りた",
              "meaning": "도서관에서 책을 빌렸습니다."
            }
          ]
        }
      ],
      [
        "貸した",
        "貸した",
        "貸した",
        "빌려줬어 (과거형)",
        {
          "id": "verb_d91a49e4_ta",
          "baseId": "verb_d91a49e4",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "友達に傘を貸した。",
              "hira": "貸した",
              "pronunciation": "貸した",
              "meaning": "친구에게 우산을 빌려주었습니다."
            }
          ]
        }
      ],
      [
        "返した",
        "返した",
        "返した",
        "돌려줬어 / 반환했어 (과거형)",
        {
          "id": "verb_37b69281_ta",
          "baseId": "verb_37b69281",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "借りた本を図書館に返した。",
              "hira": "返した",
              "pronunciation": "返した",
              "meaning": "빌린 책을 도서관에 돌려주었습니다."
            }
          ]
        }
      ],
      [
        "忘れた",
        "忘れた",
        "忘れた",
        "잊었어 (과거형)",
        {
          "id": "verb_9040ec21_ta",
          "baseId": "verb_9040ec21",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "財布を家に忘れた。",
              "hira": "忘れた",
              "pronunciation": "忘れた",
              "meaning": "지갑을 집에 두고 왔습니다."
            }
          ]
        }
      ],
      [
        "覚えた",
        "覚えた",
        "覚えた",
        "외웠어 / 기억했어 (과거형)",
        {
          "id": "verb_e9ccbd29_ta",
          "baseId": "verb_e9ccbd29",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "新しい単語を覚えた。",
              "hira": "覚えた",
              "pronunciation": "覚えた",
              "meaning": "새로운 단어를 외웠습니다."
            }
          ]
        }
      ],
      [
        "知った",
        "知った",
        "知った",
        "알았어 (과거형)",
        {
          "id": "verb_e59eecb9_ta",
          "baseId": "verb_e59eecb9",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "そのニュースを知った。",
              "hira": "知った",
              "pronunciation": "知った",
              "meaning": "그 뉴스를 알게 되었습니다."
            }
          ]
        }
      ],
      [
        "分かった",
        "分かった",
        "分かった",
        "알았어 / 이해했어 (과거형)",
        {
          "id": "verb_c3f97595_ta",
          "baseId": "verb_c3f97595",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "この問題の答えが分かった。",
              "hira": "分かった",
              "pronunciation": "分かった",
              "meaning": "이 문제의 답을 알았습니다."
            }
          ]
        }
      ],
      [
        "思った",
        "思った",
        "思った",
        "생각했어 (과거형)",
        {
          "id": "verb_5d47ba56_ta",
          "baseId": "verb_5d47ba56",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "それはいい考えだと思った。",
              "hira": "思った",
              "pronunciation": "思った",
              "meaning": "그것은 좋은 생각이라고 생각했습니다."
            }
          ]
        }
      ],
      [
        "考えた",
        "考えた",
        "考えた",
        "생각했어 / 고려했어 (과거형)",
        {
          "id": "verb_32df321f_ta",
          "baseId": "verb_32df321f",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "週末の予定を考えた。",
              "hira": "考えた",
              "pronunciation": "考えた",
              "meaning": "주말 계획을 생각했습니다."
            }
          ]
        }
      ],
      [
        "言った",
        "言った",
        "言った",
        "말했어 (과거형)",
        {
          "id": "verb_a51e57f2_ta",
          "baseId": "verb_a51e57f2",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "自分の意見をはっきり言った。",
              "hira": "言った",
              "pronunciation": "言った",
              "meaning": "자신의 의견을 분명하게 말했습니다."
            }
          ]
        }
      ],
      [
        "聞いた",
        "聞いた",
        "聞いた",
        "들었어 / 물었어 (과거형)",
        {
          "id": "verb_797f8264_ta",
          "baseId": "verb_797f8264",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "先生の話をよく聞いた。",
              "hira": "聞いた",
              "pronunciation": "聞いた",
              "meaning": "선생님에게 질문을 했습니다."
            }
          ]
        }
      ],
      [
        "答えた",
        "答えた",
        "答えた",
        "대답했어 (과거형)",
        {
          "id": "verb_b03e9e2d_ta",
          "baseId": "verb_b03e9e2d",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "質問に日本語で答えた。",
              "hira": "答えた",
              "pronunciation": "答えた",
              "meaning": "질문에 일본어로 대답했습니다."
            }
          ]
        }
      ],
      [
        "待った",
        "待った",
        "待った",
        "기다렸어 (과거형)",
        {
          "id": "verb_aec76c47_ta",
          "baseId": "verb_aec76c47",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "駅で友達を待った。",
              "hira": "待った",
              "pronunciation": "待った",
              "meaning": "역에서 친구를 기다렸습니다."
            }
          ]
        }
      ],
      [
        "急いだ",
        "急いだ",
        "急いだ",
        "서둘렀어 (과거형)",
        {
          "id": "verb_26e8be16_ta",
          "baseId": "verb_26e8be16",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "時間がないので急いだ。",
              "hira": "急いだ",
              "pronunciation": "急いだ",
              "meaning": "시간이 없어서 서둘렀습니다."
            }
          ]
        }
      ],
      [
        "入った",
        "入った",
        "入った",
        "들어갔어 (과거형)",
        {
          "id": "verb_ffa98111_ta",
          "baseId": "verb_ffa98111",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "八時に会社に入った。",
              "hira": "入った",
              "pronunciation": "入った",
              "meaning": "8시에 회사에 들어갔습니다."
            }
          ]
        }
      ],
      [
        "出た",
        "出た",
        "出た",
        "나왔어 / 나갔어 (과거형)",
        {
          "id": "verb_022a74da_ta",
          "baseId": "verb_022a74da",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "毎朝、七時に家を出た。",
              "hira": "出た",
              "pronunciation": "出た",
              "meaning": "매일 아침 7시에 집을 나섰습니다."
            }
          ]
        }
      ],
      [
        "入れた",
        "入れた",
        "入れた",
        "넣었어 (과거형)",
        {
          "id": "verb_8aee63b8_ta",
          "baseId": "verb_8aee63b8",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "かばんに財布を入れた。",
              "hira": "入れた",
              "pronunciation": "入れた",
              "meaning": "가방에 지갑을 넣었습니다."
            }
          ]
        }
      ],
      [
        "出した",
        "出した",
        "出した",
        "꺼냈어 / 냈어 (과거형)",
        {
          "id": "verb_667067d9_ta",
          "baseId": "verb_667067d9",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "かばんから財布を出した。",
              "hira": "出した",
              "pronunciation": "出した",
              "meaning": "가방에서 지갑을 꺼냈습니다."
            }
          ]
        }
      ],
      [
        "着た",
        "着た",
        "着た",
        "입었어 (과거형)",
        {
          "id": "verb_1466ca64_ta",
          "baseId": "verb_1466ca64",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "寒い日はコートを着た。",
              "hira": "着た",
              "pronunciation": "着た",
              "meaning": "추운 날에는 코트를 입었습니다."
            }
          ]
        }
      ],
      [
        "脱いだ",
        "脱いだ",
        "脱いだ",
        "벗었어 (과거형)",
        {
          "id": "verb_a6ae45f8_ta",
          "baseId": "verb_a6ae45f8",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "家に帰ったら靴を脱いだ。",
              "hira": "脱いだ",
              "pronunciation": "脱いだ",
              "meaning": "집에 돌아오면 신발을 벗었습니다."
            }
          ]
        }
      ],
      [
        "洗った",
        "洗った",
        "洗った",
        "씻었어 (과거형)",
        {
          "id": "verb_390ef05f_ta",
          "baseId": "verb_390ef05f",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "食事の前に手を洗った。",
              "hira": "洗った",
              "pronunciation": "洗った",
              "meaning": "식사 전에 손을 씻었습니다."
            }
          ]
        }
      ],
      [
        "できた",
        "できた",
        "できた",
        "할 수 있었어 / 가능했어 (과거형)",
        {
          "id": "verb_0f9c874c_ta",
          "baseId": "verb_0f9c874c",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "今日は早く仕事ができた。",
              "hira": "できた",
              "pronunciation": "できた",
              "meaning": "오늘은 일을 일찍 끝낼 수 있었습니다."
            }
          ]
        }
      ],
      [
        "終えた",
        "終えた",
        "終えた",
        "끝냈어 (과거형)",
        {
          "id": "verb_extra_終える_ta",
          "baseId": "verb_extra_終える",
          "form": "conjugation",
          "level": "N3",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "午後五時までに仕事を終えた。",
              "hira": "終えた",
              "pronunciation": "終えた",
              "meaning": "오후 5시까지 일을 끝냈습니다."
            }
          ]
        }
      ],
      [
        "続けた",
        "続けた",
        "続けた",
        "계속했어 (과거형)",
        {
          "id": "verb_extra_続ける_ta",
          "baseId": "verb_extra_続ける",
          "form": "conjugation",
          "level": "N4",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "毎日、日本語の勉強を続けた。",
              "hira": "続けた",
              "pronunciation": "続けた",
              "meaning": "매일 일본어 공부를 계속했습니다."
            }
          ]
        }
      ],
      [
        "止めた",
        "止めた",
        "止めた",
        "멈췄어 / 세웠어 (과거형)",
        {
          "id": "verb_extra_止める_ta",
          "baseId": "verb_extra_止める",
          "form": "conjugation",
          "level": "N4",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "ここに車を止めた。",
              "hira": "止めた",
              "pronunciation": "止めた",
              "meaning": "여기에 차를 세웠습니다."
            }
          ]
        }
      ],
      [
        "変えた",
        "変えた",
        "変えた",
        "바꿨어 (과거형)",
        {
          "id": "verb_extra_変える_ta",
          "baseId": "verb_extra_変える",
          "form": "conjugation",
          "level": "N4",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "旅行の予定を変えた。",
              "hira": "変えた",
              "pronunciation": "変えた",
              "meaning": "여행 일정을 바꿨습니다."
            }
          ]
        }
      ],
      [
        "決めた",
        "決めた",
        "決めた",
        "정했어 (과거형)",
        {
          "id": "verb_extra_決める_ta",
          "baseId": "verb_extra_決める",
          "form": "conjugation",
          "level": "N4",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "先週までに日程を決めた。",
              "hira": "決めた",
              "pronunciation": "決めた",
              "meaning": "이번 주 안에 일정을 정했습니다."
            }
          ]
        }
      ],
      [
        "選んだ",
        "選んだ",
        "選んだ",
        "골랐어 / 선택했어 (과거형)",
        {
          "id": "verb_extra_選ぶ_ta",
          "baseId": "verb_extra_選ぶ",
          "form": "conjugation",
          "level": "N4",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "好きな色を選んだ。",
              "hira": "選んだ",
              "pronunciation": "選んだ",
              "meaning": "좋아하는 색을 골랐습니다."
            }
          ]
        }
      ],
      [
        "探した",
        "探した",
        "探した",
        "찾았어 (과거형)",
        {
          "id": "verb_extra_探す_ta",
          "baseId": "verb_extra_探す",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "駅でホテルを探した。",
              "hira": "探した",
              "pronunciation": "探した",
              "meaning": "역에서 호텔을 찾았습니다."
            }
          ]
        }
      ],
      [
        "見つけた",
        "見つけた",
        "見つけた",
        "찾아냈어 / 발견했어 (과거형)",
        {
          "id": "verb_extra_見つける_ta",
          "baseId": "verb_extra_見つける",
          "form": "conjugation",
          "level": "N4",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "駅の近くでいい店を見つけた。",
              "hira": "見つけた",
              "pronunciation": "見つけた",
              "meaning": "역 근처에서 좋은 가게를 찾았습니다."
            }
          ]
        }
      ],
      [
        "見つかった",
        "見つかった",
        "見つかった",
        "발견됐어 / 찾아졌어 (과거형)",
        {
          "id": "verb_extra_見つかる_ta",
          "baseId": "verb_extra_見つかる",
          "form": "conjugation",
          "level": "N4",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "なくした鍵が見つかった。",
              "hira": "見つかった",
              "pronunciation": "見つかった",
              "meaning": "잃어버린 열쇠를 찾게 되었습니다."
            }
          ]
        }
      ],
      [
        "調べた",
        "調べた",
        "調べた",
        "조사했어 / 찾아봤어 (과거형)",
        {
          "id": "verb_extra_調べる_ta",
          "baseId": "verb_extra_調べる",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "分からない言葉を辞書で調べた。",
              "hira": "調べた",
              "pronunciation": "調べた",
              "meaning": "모르는 단어를 사전에서 찾아봤습니다."
            }
          ]
        }
      ],
      [
        "決まった",
        "決まった",
        "決まった",
        "정해졌어 (과거형)",
        {
          "id": "verb_extra_決まる_ta",
          "baseId": "verb_extra_決まる",
          "form": "conjugation",
          "level": "N4",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "先月の予定が決まった。",
              "hira": "決まった",
              "pronunciation": "決まった",
              "meaning": "다음 달 일정이 정해졌습니다."
            }
          ]
        }
      ],
      [
        "比べた",
        "くらべた",
        "쿠라베타",
        "비교했어 (과거형)",
        {
          "id": "verb_extra_比べる_ta",
          "baseId": "verb_extra_比べる",
          "form": "conjugation",
          "level": "N4",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "二つの商品を比べた。",
              "hira": "くらべた",
              "pronunciation": "쿠라베타",
              "meaning": "두 상품을 비교했습니다."
            }
          ]
        }
      ],
      [
        "受けた",
        "受けた",
        "受けた",
        "받았어 / 응시했어 (과거형)",
        {
          "id": "verb_extra_受ける_ta",
          "baseId": "verb_extra_受ける",
          "form": "conjugation",
          "level": "N4",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "先月、日本語の試験を受けた。",
              "hira": "受けた",
              "pronunciation": "受けた",
              "meaning": "다음 달 일본어 시험을 봤습니다."
            }
          ]
        }
      ],
      [
        "申し込んだ",
        "もうしこんだ",
        "모오시콘다",
        "신청했어 (과거형)",
        {
          "id": "verb_extra_申し込む_ta",
          "baseId": "verb_extra_申し込む",
          "form": "conjugation",
          "level": "N3",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "オンラインで講座に申し込んだ。",
              "hira": "もうしこんだ",
              "pronunciation": "모오시콘다",
              "meaning": "온라인으로 강좌를 신청했습니다."
            }
          ]
        }
      ],
      [
        "予約した",
        "よやくした",
        "요야쿠시타",
        "예약했어 (과거형)",
        {
          "id": "verb_extra_予約する_ta",
          "baseId": "verb_extra_予約する",
          "form": "conjugation",
          "level": "N4",
          "meta": {
            "verbGroup": "3그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "ホテルをインターネットで予約した。",
              "hira": "よやくした",
              "pronunciation": "요야쿠시타",
              "meaning": "호텔을 인터넷으로 예약했습니다."
            }
          ]
        }
      ],
      [
        "確認した",
        "確認した",
        "確認した",
        "확인했어 (과거형)",
        {
          "id": "verb_extra_確認する_ta",
          "baseId": "verb_extra_確認する",
          "form": "conjugation",
          "level": "N3",
          "meta": {
            "verbGroup": "3그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "出発時間を確認した。",
              "hira": "確認した",
              "pronunciation": "確認した",
              "meaning": "출발 시간을 확인했습니다."
            }
          ]
        }
      ],
      [
        "連絡した",
        "れんらくした",
        "렌라쿠시타",
        "연락했어 (과거형)",
        {
          "id": "verb_extra_連絡する_ta",
          "baseId": "verb_extra_連絡する",
          "form": "conjugation",
          "level": "N3",
          "meta": {
            "verbGroup": "3그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "着いたら連絡した。",
              "hira": "れんらくした",
              "pronunciation": "렌라쿠시타",
              "meaning": "도착하면 연락했습니다."
            }
          ]
        }
      ],
      [
        "説明した",
        "説明した",
        "説明した",
        "설명했어 (과거형)",
        {
          "id": "verb_extra_説明する_ta",
          "baseId": "verb_extra_説明する",
          "form": "conjugation",
          "level": "N3",
          "meta": {
            "verbGroup": "3그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "先生が文法を説明した。",
              "hira": "説明した",
              "pronunciation": "説明した",
              "meaning": "선생님이 문법을 설명했습니다."
            }
          ]
        }
      ],
      [
        "準備した",
        "じゅんびした",
        "준비시타",
        "준비했어 (과거형)",
        {
          "id": "verb_extra_準備する_ta",
          "baseId": "verb_extra_準備する",
          "form": "conjugation",
          "level": "N4",
          "meta": {
            "verbGroup": "3그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "旅行の準備をした。",
              "hira": "じゅんびした",
              "pronunciation": "준비시타",
              "meaning": "여행 준비를 했습니다."
            }
          ]
        }
      ],
      [
        "片付けた",
        "片付けた",
        "片付けた",
        "정리했어 / 치웠어 (과거형)",
        {
          "id": "verb_extra_片付ける_ta",
          "baseId": "verb_extra_片付ける",
          "form": "conjugation",
          "level": "N4",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "食事の後で部屋を片付けた。",
              "hira": "片付けた",
              "pronunciation": "片付けた",
              "meaning": "식사 후에 방을 정리했습니다."
            }
          ]
        }
      ],
      [
        "洗濯した",
        "洗濯した",
        "洗濯した",
        "세탁했어 (과거형)",
        {
          "id": "verb_extra_洗濯する_ta",
          "baseId": "verb_extra_洗濯する",
          "form": "conjugation",
          "level": "N4",
          "meta": {
            "verbGroup": "3그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "土曜日に洗濯した。",
              "hira": "洗濯した",
              "pronunciation": "洗濯した",
              "meaning": "토요일에 빨래했습니다."
            }
          ]
        }
      ],
      [
        "出発した",
        "出発した",
        "出発した",
        "출발했어 (과거형)",
        {
          "id": "verb_extra_出発する_ta",
          "baseId": "verb_extra_出発する",
          "form": "conjugation",
          "level": "N4",
          "meta": {
            "verbGroup": "3그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "朝八時に東京を出発した。",
              "hira": "出発した",
              "pronunciation": "出発した",
              "meaning": "아침 8시에 도쿄를 출발했습니다."
            }
          ]
        }
      ],
      [
        "到着した",
        "到着した",
        "到着した",
        "도착했어 (과거형)",
        {
          "id": "verb_extra_到着する_ta",
          "baseId": "verb_extra_到着する",
          "form": "conjugation",
          "level": "N3",
          "meta": {
            "verbGroup": "3그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "午後三時に京都に到着した。",
              "hira": "到着した",
              "pronunciation": "到着した",
              "meaning": "오후 3시에 교토에 도착했습니다."
            }
          ]
        }
      ],
      [
        "利用した",
        "利用した",
        "利用した",
        "이용했어 (과거형)",
        {
          "id": "verb_extra_利用する_ta",
          "baseId": "verb_extra_利用する",
          "form": "conjugation",
          "level": "N3",
          "meta": {
            "verbGroup": "3그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "旅行中はこのサービスを利用した。",
              "hira": "利用した",
              "pronunciation": "利用した",
              "meaning": "여행 중에는 이 서비스를 이용했습니다."
            }
          ]
        }
      ],
      [
        "運んだ",
        "はこんだ",
        "하콘다",
        "날랐어 / 운반했어 (과거형)",
        {
          "id": "verb_c2486c41e6_ta",
          "level": "N4",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "荷物を部屋まで運んだ。",
              "hira": "はこんだ",
              "pronunciation": "하콘다",
              "meaning": "짐을 방까지 날랐습니다."
            }
          ],
          "baseId": "verb_c2486c41e6",
          "form": "conjugation"
        }
      ],
      [
        "売った",
        "うった",
        "웃타",
        "팔았어 (과거형)",
        {
          "id": "verb_ec51fc2e16_ta",
          "level": "N4",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "使わなくなった本を売った。",
              "hira": "うった",
              "pronunciation": "웃타",
              "meaning": "더 이상 사용하지 않는 책을 팔았습니다."
            }
          ],
          "baseId": "verb_ec51fc2e16",
          "form": "conjugation"
        }
      ],
      [
        "消した",
        "けした",
        "케시타",
        "껐어 / 지웠어 (과거형)",
        {
          "id": "verb_df2b3a6397_ta",
          "level": "N4",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "寝る前に電気を消した。",
              "hira": "けした",
              "pronunciation": "케시타",
              "meaning": "자기 전에 불을 껐습니다."
            }
          ],
          "baseId": "verb_df2b3a6397",
          "form": "conjugation"
        }
      ],
      [
        "押した",
        "おした",
        "오시타",
        "눌렀어 / 밀었어 (과거형)",
        {
          "id": "verb_30038e39f3_ta",
          "level": "N4",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "このボタンを押した。",
              "hira": "おした",
              "pronunciation": "오시타",
              "meaning": "이 버튼을 눌렀습니다."
            }
          ],
          "baseId": "verb_30038e39f3",
          "form": "conjugation"
        }
      ],
      [
        "引いた",
        "ひいた",
        "히이타",
        "당겼어 / 끌었어 (과거형)",
        {
          "id": "verb_371c196bcb_ta",
          "level": "N4",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "ドアを手前に引いた。",
              "hira": "ひいた",
              "pronunciation": "히이타",
              "meaning": "문을 자기 쪽으로 당겼습니다."
            }
          ],
          "baseId": "verb_371c196bcb",
          "form": "conjugation"
        }
      ],
      [
        "拾った",
        "ひろった",
        "히롯타",
        "주웠어 (과거형)",
        {
          "id": "verb_d404351530_ta",
          "level": "N4",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "道で財布を拾った。",
              "hira": "ひろった",
              "pronunciation": "히롯타",
              "meaning": "길에서 지갑을 주웠습니다."
            }
          ],
          "baseId": "verb_d404351530",
          "form": "conjugation"
        }
      ],
      [
        "捨てた",
        "すてた",
        "스테타",
        "버렸어 (과거형)",
        {
          "id": "verb_e720775ac7_ta",
          "level": "N4",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "古い服を捨てた。",
              "hira": "すてた",
              "pronunciation": "스테타",
              "meaning": "낡은 옷을 버렸습니다."
            }
          ],
          "baseId": "verb_e720775ac7",
          "form": "conjugation"
        }
      ],
      [
        "集めた",
        "あつめた",
        "아츠메타",
        "모았어 (과거형)",
        {
          "id": "verb_0a49f1e34a_ta",
          "level": "N4",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "旅行の情報を集めた。",
              "hira": "あつめた",
              "pronunciation": "아츠메타",
              "meaning": "여행 정보를 모았습니다."
            }
          ],
          "baseId": "verb_0a49f1e34a",
          "form": "conjugation"
        }
      ],
      [
        "直した",
        "なおした",
        "나오시타",
        "고쳤어 / 수리했어 (과거형)",
        {
          "id": "verb_442e7ec90b_ta",
          "level": "N4",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "間違いを直した。",
              "hira": "なおした",
              "pronunciation": "나오시타",
              "meaning": "틀린 부분을 고쳤습니다."
            }
          ],
          "baseId": "verb_442e7ec90b",
          "form": "conjugation"
        }
      ],
      [
        "直った",
        "なおった",
        "나옷타",
        "고쳐졌어 / 나았어 (과거형)",
        {
          "id": "verb_1f8de4ba37_ta",
          "level": "N4",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "壊れていた時計が直った。",
              "hira": "なおった",
              "pronunciation": "나옷타",
              "meaning": "고장 났던 시계가 고쳐졌습니다."
            }
          ],
          "baseId": "verb_1f8de4ba37",
          "form": "conjugation"
        }
      ],
      [
        "壊した",
        "こわした",
        "코와시타",
        "망가뜨렸어 / 고장 냈어 (과거형)",
        {
          "id": "verb_4160686f0d_ta",
          "level": "N4",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "子どもがおもちゃを壊した。",
              "hira": "こわした",
              "pronunciation": "코와시타",
              "meaning": "아이가 장난감을 망가뜨렸습니다."
            }
          ],
          "baseId": "verb_4160686f0d",
          "form": "conjugation"
        }
      ],
      [
        "壊れた",
        "こわれた",
        "코와레타",
        "망가졌어 / 고장 났어 (과거형)",
        {
          "id": "verb_c34da08306_ta",
          "level": "N4",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "古いパソコンが壊れた。",
              "hira": "こわれた",
              "pronunciation": "코와레타",
              "meaning": "오래된 컴퓨터가 고장 났습니다."
            }
          ],
          "baseId": "verb_c34da08306",
          "form": "conjugation"
        }
      ],
      [
        "遅れた",
        "おくれた",
        "오쿠레타",
        "늦었어 / 늦어졌어 (과거형)",
        {
          "id": "verb_89aa88ff42_ta",
          "level": "N4",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "電車が十分ほど遅れた。",
              "hira": "おくれた",
              "pronunciation": "오쿠레타",
              "meaning": "전철이 10분 정도 늦었습니다."
            }
          ],
          "baseId": "verb_89aa88ff42",
          "form": "conjugation"
        }
      ],
      [
        "間に合った",
        "まにあった",
        "마니앗타",
        "시간에 맞았어 (과거형)",
        {
          "id": "verb_28940f5774_ta",
          "level": "N4",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "急げば八時の電車に間に合った。",
              "hira": "まにあった",
              "pronunciation": "마니앗타",
              "meaning": "서두르면 8시 전철에 늦지 않게 탈 수 있었습니다."
            }
          ],
          "baseId": "verb_28940f5774",
          "form": "conjugation"
        }
      ],
      [
        "参加した",
        "さんかした",
        "산카시타",
        "참가했어 (과거형)",
        {
          "id": "verb_f8da0bc1c2_ta",
          "level": "N4",
          "meta": {
            "verbGroup": "3그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "明日の会議に参加した。",
              "hira": "さんかした",
              "pronunciation": "산카시타",
              "meaning": "내일 회의에 참가했습니다."
            }
          ],
          "baseId": "verb_f8da0bc1c2",
          "form": "conjugation"
        }
      ],
      [
        "止まった",
        "とまった",
        "토마루",
        "멈추다(과거형)",
        {
          "id": "verb_extra_1_ta",
          "baseId": "verb_extra_1",
          "form": "conjugation",
          "level": "N4",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "自動詞"
          },
          "examples": [
            {
              "jp": "電車が急に止まりました。",
              "hira": "でんしゃがきゅうにとまりました。",
              "pronunciation": "덴샤가 큐우니 토마리마시타",
              "meaning": "전철이 갑자기 멈췄습니다."
            }
          ]
        }
      ],
      [
        "呼んだ",
        "よんだ",
        "요부",
        "부르다(과거형)",
        {
          "id": "verb_extra_2_ta",
          "baseId": "verb_extra_2",
          "form": "conjugation",
          "level": "N4",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "他動詞"
          },
          "examples": [
            {
              "jp": "昨日、タクシーを呼びました。",
              "hira": "きのう、たくしーをよびました。",
              "pronunciation": "키노오, 타쿠시이오 요비마시타",
              "meaning": "어제 택시를 불렀습니다."
            }
          ]
        }
      ],
      [
        "泊まった",
        "とまった",
        "토마루",
        "묵다 / 숙박하다(과거형)",
        {
          "id": "verb_extra_3_ta",
          "baseId": "verb_extra_3",
          "form": "conjugation",
          "level": "N4",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "自動詞"
          },
          "examples": [
            {
              "jp": "京都で二泊しました。",
              "hira": "きょうとでにはくしました。",
              "pronunciation": "쿄오토데 니하쿠시마시타",
              "meaning": "교토에서 이틀 숙박했습니다."
            }
          ]
        }
      ],
      [
        "着いた",
        "ついた",
        "츠쿠",
        "도착하다(과거형)",
        {
          "id": "verb_extra_4_ta",
          "baseId": "verb_extra_4",
          "form": "conjugation",
          "level": "N4",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "自動詞"
          },
          "examples": [
            {
              "jp": "昨日、無事にホテルに着きました。",
              "hira": "きのう、ぶじにほてるにつきました。",
              "pronunciation": "키노오, 부지니 호테루니 츠키마시타",
              "meaning": "어제 무사히 호텔에 도착했습니다."
            }
          ]
        }
      ],
      [
        "乗り換えた",
        "のりかえた",
        "노리카에루",
        "갈아타다(과거형)",
        {
          "id": "verb_extra_5_ta",
          "baseId": "verb_extra_5",
          "form": "conjugation",
          "level": "N4",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "自動詞"
          },
          "examples": [
            {
              "jp": "昨日、東京で電車を乗り換えました。",
              "hira": "きのう、とうきょうででんしゃをのりかえました。",
              "pronunciation": "키노오, 토오쿄오데 덴샤오 노리카에마시타",
              "meaning": "어제 도쿄에서 전철을 갈아탔습니다."
            }
          ]
        }
      ]
    ],
    "ない형": [
      [
        "行かない",
        "いかない",
        "이카나이",
        "가지 않아",
        {
          "id": "verb_iku_nai",
          "baseId": "verb_iku",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "明日は学校へ行かない。",
              "hira": "いかない",
              "pronunciation": "이카나이",
              "meaning": "내일은 학교에 가지 않습니다."
            }
          ]
        }
      ],
      [
        "食べない",
        "たべない",
        "타베나이",
        "먹지 않아",
        {
          "id": "verb_taberu_nai",
          "baseId": "verb_taberu",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "毎朝、朝ご飯を食べない。",
              "hira": "たべない",
              "pronunciation": "타베나이",
              "meaning": "매일 아침, 아침밥을 먹지 않습니다."
            }
          ]
        }
      ],
      [
        "見ない",
        "みない",
        "미나이",
        "보지 않아",
        {
          "id": "verb_miru_nai",
          "baseId": "verb_miru",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "夜に映画を見ない。",
              "hira": "みない",
              "pronunciation": "미나이",
              "meaning": "밤에 영화를 보지 않습니다."
            }
          ]
        }
      ],
      [
        "飲まない",
        "のまない",
        "노마나이",
        "마시지 않아",
        {
          "id": "verb_nomu_nai",
          "baseId": "verb_nomu",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "毎朝、水を飲まない。",
              "hira": "のまない",
              "pronunciation": "노마나이",
              "meaning": "매일 아침 물을 마시지 않습니다."
            }
          ]
        }
      ],
      [
        "書かない",
        "かかない",
        "카카나이",
        "쓰지 않아",
        {
          "id": "verb_kaku_nai",
          "baseId": "verb_kaku",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "ノートに名前を書かない。",
              "hira": "かかない",
              "pronunciation": "카카나이",
              "meaning": "공책에 이름을 쓰지 않습니다."
            }
          ]
        }
      ],
      [
        "読まない",
        "よまない",
        "요마나이",
        "읽지 않아",
        {
          "id": "verb_yomu_nai",
          "baseId": "verb_yomu",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "寝る前に本を読まない。",
              "hira": "よまない",
              "pronunciation": "요마나이",
              "meaning": "자기 전에 책을 읽지 않습니다."
            }
          ]
        }
      ],
      [
        "話さない",
        "はなさない",
        "하나사나이",
        "말하지 않아 / 이야기하지 않아",
        {
          "id": "verb_hanasu_nai",
          "baseId": "verb_hanasu",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "友達と日本語で話さない。",
              "hira": "はなさない",
              "pronunciation": "하나사나이",
              "meaning": "친구와 일본어로 이야기하지 않습니다."
            }
          ]
        }
      ],
      [
        "買わない",
        "かわない",
        "카와나이",
        "사지 않아",
        {
          "id": "verb_kau_nai",
          "baseId": "verb_kau",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "駅で切符を買わない。",
              "hira": "かわない",
              "pronunciation": "카와나이",
              "meaning": "역에서 표를 사지 않습니다."
            }
          ]
        }
      ],
      [
        "帰らない",
        "かえらない",
        "카에라나이",
        "돌아가지 않아 / 돌아오지 않아",
        {
          "id": "verb_kaeru_nai",
          "baseId": "verb_kaeru",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "仕事が終わったら家に帰らない。",
              "hira": "かえらない",
              "pronunciation": "카에라나이",
              "meaning": "일이 끝나도 집에 돌아가지 않습니다."
            }
          ]
        }
      ],
      [
        "会わない",
        "会わない",
        "会わない",
        "만나지 않아",
        {
          "id": "verb_8c96a83e_nai",
          "baseId": "verb_8c96a83e",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "週末に友達に会わない。",
              "hira": "会わない",
              "pronunciation": "会わない",
              "meaning": "주말에 친구를 만나지 않습니다."
            }
          ]
        }
      ],
      [
        "あらない",
        "あらない",
        "아라나이",
        "있지 않아",
        {
          "id": "verb_b8345a61_nai",
          "baseId": "verb_b8345a61",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "机の上に本がない。",
              "hira": "あらない",
              "pronunciation": "아라나이",
              "meaning": "책상 위에 책이 없습니다."
            }
          ]
        }
      ],
      [
        "いない",
        "いない",
        "이나이",
        "있지 않아",
        {
          "id": "verb_bb9d44f8_nai",
          "baseId": "verb_bb9d44f8",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "教室に先生がいない。",
              "hira": "いない",
              "pronunciation": "이나이",
              "meaning": "교실에 선생님이 계시지 않습니다."
            }
          ]
        }
      ],
      [
        "起きない",
        "起きない",
        "起きない",
        "일어나지 않아",
        {
          "id": "verb_f1e80ce9_nai",
          "baseId": "verb_f1e80ce9",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "毎朝、七時に起きない。",
              "hira": "起きない",
              "pronunciation": "起きない",
              "meaning": "매일 아침 7시에 일어나지 않습니다."
            }
          ]
        }
      ],
      [
        "寝ない",
        "寝ない",
        "寝ない",
        "자지 않아",
        {
          "id": "verb_32c88ea6_nai",
          "baseId": "verb_32c88ea6",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "毎晩、十一時に寝ない。",
              "hira": "寝ない",
              "pronunciation": "寝ない",
              "meaning": "매일 밤 11시에 자지 않습니다."
            }
          ]
        }
      ],
      [
        "働かない",
        "働かない",
        "働かない",
        "일하지 않아",
        {
          "id": "verb_b39fc552_nai",
          "baseId": "verb_b39fc552",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "東京の会社で働かない。",
              "hira": "働かない",
              "pronunciation": "働かない",
              "meaning": "도쿄의 회사에서 일하지 않습니다."
            }
          ]
        }
      ],
      [
        "休まない",
        "休まない",
        "休まない",
        "쉬지 않아 / 결석하지 않아",
        {
          "id": "verb_8b24f26b_nai",
          "baseId": "verb_8b24f26b",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "今日は家でゆっくり休まない。",
              "hira": "休まない",
              "pronunciation": "休まない",
              "meaning": "오늘은 집에서 쉬지 않습니다."
            }
          ]
        }
      ],
      [
        "使わない",
        "使わない",
        "使わない",
        "사용하지 않아",
        {
          "id": "verb_bb0e5d22_nai",
          "baseId": "verb_bb0e5d22",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "このアプリを毎日使わない。",
              "hira": "使わない",
              "pronunciation": "使わない",
              "meaning": "이 앱을 매일 사용하지 않습니다."
            }
          ]
        }
      ],
      [
        "作らない",
        "作らない",
        "作らない",
        "만들지 않아",
        {
          "id": "verb_94b87121_nai",
          "baseId": "verb_94b87121",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "週末にカレーを作らない。",
              "hira": "作らない",
              "pronunciation": "作らない",
              "meaning": "주말에 카레를 만들지 않습니다."
            }
          ]
        }
      ],
      [
        "持たない",
        "持たない",
        "持たない",
        "가지지 않아 / 들지 않아",
        {
          "id": "verb_9197e4fd_nai",
          "baseId": "verb_9197e4fd",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "傘を持たない。",
              "hira": "持たない",
              "pronunciation": "持たない",
              "meaning": "우산을 가지고 외출하지 않습니다."
            }
          ]
        }
      ],
      [
        "取らない",
        "取らない",
        "取らない",
        "잡지 않아 / 취하지 않아",
        {
          "id": "verb_49234a82_nai",
          "baseId": "verb_49234a82",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "大事なことをノートに取らない。",
              "hira": "取らない",
              "pronunciation": "取らない",
              "meaning": "여행 사진을 많이 찍지 않습니다."
            }
          ]
        }
      ],
      [
        "置かない",
        "置かない",
        "置かない",
        "놓지 않아 / 두지 않아",
        {
          "id": "verb_fc7721ef_nai",
          "baseId": "verb_fc7721ef",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "鍵をテーブルの上に置かない。",
              "hira": "置かない",
              "pronunciation": "置かない",
              "meaning": "열쇠를 테이블 위에 놓지 않습니다."
            }
          ]
        }
      ],
      [
        "開けない",
        "開けない",
        "開けない",
        "열지 않아",
        {
          "id": "verb_75b7bd31_nai",
          "baseId": "verb_75b7bd31",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "窓を開けない。",
              "hira": "開けない",
              "pronunciation": "開けない",
              "meaning": "창문을 열지 않습니다."
            }
          ]
        }
      ],
      [
        "閉めない",
        "閉めない",
        "閉めない",
        "닫지 않아",
        {
          "id": "verb_cc46a6d5_nai",
          "baseId": "verb_cc46a6d5",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "寝る前にドアを閉めない。",
              "hira": "閉めない",
              "pronunciation": "閉めない",
              "meaning": "자기 전에 문을 닫지 않습니다."
            }
          ]
        }
      ],
      [
        "開かない",
        "開かない",
        "開かない",
        "열리지 않아",
        {
          "id": "verb_8c7f33dc_nai",
          "baseId": "verb_8c7f33dc",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "店は九時に開かない。",
              "hira": "開かない",
              "pronunciation": "開かない",
              "meaning": "가게는 9시에 열리지 않습니다."
            }
          ]
        }
      ],
      [
        "閉まらない",
        "閉まらない",
        "閉まらない",
        "닫히지 않아",
        {
          "id": "verb_7a531040_nai",
          "baseId": "verb_7a531040",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "この店は八時に閉まらない。",
              "hira": "閉まらない",
              "pronunciation": "閉まらない",
              "meaning": "이 가게는 8시에 문을 닫지 않습니다."
            }
          ]
        }
      ],
      [
        "始めない",
        "始めない",
        "始めない",
        "시작하지 않아",
        {
          "id": "verb_af915dc0_nai",
          "baseId": "verb_af915dc0",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "九時から仕事を始めない。",
              "hira": "始めない",
              "pronunciation": "始めない",
              "meaning": "9시부터 일을 시작하지 않습니다."
            }
          ]
        }
      ],
      [
        "始まらない",
        "始まらない",
        "始まらない",
        "시작되지 않아",
        {
          "id": "verb_6d0d725d_nai",
          "baseId": "verb_6d0d725d",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "授業は九時に始まらない。",
              "hira": "始まらない",
              "pronunciation": "始まらない",
              "meaning": "수업은 9시에 시작되지 않습니다."
            }
          ]
        }
      ],
      [
        "終わらない",
        "終わらない",
        "終わらない",
        "끝나지 않아",
        {
          "id": "verb_282e7ad7_nai",
          "baseId": "verb_282e7ad7",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "授業は三時に終わらない。",
              "hira": "終わらない",
              "pronunciation": "終わらない",
              "meaning": "수업은 3시에 끝나지 않습니다."
            }
          ]
        }
      ],
      [
        "教えない",
        "教えない",
        "教えない",
        "가르치지 않아 / 알려 주지 않아",
        {
          "id": "verb_8fcd9672_nai",
          "baseId": "verb_8fcd9672",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "先生が日本語を教えない。",
              "hira": "教えない",
              "pronunciation": "教えない",
              "meaning": "선생님이 일본어를 가르치지 않습니다."
            }
          ]
        }
      ],
      [
        "習わない",
        "習わない",
        "習わない",
        "배우지 않아",
        {
          "id": "verb_815c9429_nai",
          "baseId": "verb_815c9429",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "先生から日本語を習わない。",
              "hira": "習わない",
              "pronunciation": "習わない",
              "meaning": "선생님에게 일본어를 배우지 않습니다."
            }
          ]
        }
      ],
      [
        "勉強しない",
        "べんきょうしない",
        "벤쿄오시나이",
        "공부하지 않아",
        {
          "id": "verb_c17e2e8d_nai",
          "baseId": "verb_c17e2e8d",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "3그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "毎日、日本語を勉強しない。",
              "hira": "べんきょうしない",
              "pronunciation": "벤쿄오시나이",
              "meaning": "매일 일본어를 공부하지 않습니다."
            }
          ]
        }
      ],
      [
        "練習しない",
        "れんしゅうしない",
        "렌슈우시나이",
        "연습하지 않아",
        {
          "id": "verb_869aa4c0_nai",
          "baseId": "verb_869aa4c0",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "3그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "毎日、会話を練習しない。",
              "hira": "れんしゅうしない",
              "pronunciation": "렌슈우시나이",
              "meaning": "매일 회화를 연습하지 않습니다."
            }
          ]
        }
      ],
      [
        "掃除しない",
        "そうじしない",
        "소오지시나이",
        "청소하지 않아",
        {
          "id": "verb_52eafdbf_nai",
          "baseId": "verb_52eafdbf",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "3그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "毎週、部屋を掃除しない。",
              "hira": "そうじしない",
              "pronunciation": "소오지시나이",
              "meaning": "매주 방을 청소하지 않습니다."
            }
          ]
        }
      ],
      [
        "料理しない",
        "りょうりしない",
        "료오리시나이",
        "요리하지 않아",
        {
          "id": "verb_76f375dd_nai",
          "baseId": "verb_76f375dd",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "3그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "週末に家で料理しない。",
              "hira": "りょうりしない",
              "pronunciation": "료오리시나이",
              "meaning": "주말에 집에서 요리하지 않습니다."
            }
          ]
        }
      ],
      [
        "電話しない",
        "でんわしない",
        "덴와시나이",
        "전화하지 않아",
        {
          "id": "verb_c9e5c467_nai",
          "baseId": "verb_c9e5c467",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "3그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "母に電話しない。",
              "hira": "でんわしない",
              "pronunciation": "덴와시나이",
              "meaning": "어머니에게 전화하지 않습니다."
            }
          ]
        }
      ],
      [
        "住まない",
        "住まない",
        "住まない",
        "살지 않아",
        {
          "id": "verb_42073ff3_nai",
          "baseId": "verb_42073ff3",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "ソウルに住まない。",
              "hira": "住まない",
              "pronunciation": "住まない",
              "meaning": "서울에 살지 않습니다."
            }
          ]
        }
      ],
      [
        "乗らない",
        "乗らない",
        "乗らない",
        "타지 않아",
        {
          "id": "verb_82276e1f_nai",
          "baseId": "verb_82276e1f",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "毎朝、電車に乗らない。",
              "hira": "乗らない",
              "pronunciation": "乗らない",
              "meaning": "매일 아침 전철을 타지 않습니다."
            }
          ]
        }
      ],
      [
        "降りない",
        "降りない",
        "降りない",
        "내리지 않아",
        {
          "id": "verb_6432570a_nai",
          "baseId": "verb_6432570a",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "次の駅で電車を降りない。",
              "hira": "降りない",
              "pronunciation": "降りない",
              "meaning": "다음 역에서 전철에서 내리지 않습니다."
            }
          ]
        }
      ],
      [
        "歩かない",
        "歩かない",
        "歩かない",
        "걷지 않아",
        {
          "id": "verb_be581e40_nai",
          "baseId": "verb_be581e40",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "駅まで歩かない。",
              "hira": "歩かない",
              "pronunciation": "歩かない",
              "meaning": "역까지 걷지 않습니다."
            }
          ]
        }
      ],
      [
        "走らない",
        "走らない",
        "走らない",
        "달리지 않아",
        {
          "id": "verb_be92b238_nai",
          "baseId": "verb_be92b238",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "毎朝、公園を走らない。",
              "hira": "走らない",
              "pronunciation": "走らない",
              "meaning": "매일 아침 공원을 달리지 않습니다."
            }
          ]
        }
      ],
      [
        "泳がない",
        "泳がない",
        "泳がない",
        "수영하지 않아",
        {
          "id": "verb_c033fc3e_nai",
          "baseId": "verb_c033fc3e",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "夏は海で泳がない。",
              "hira": "泳がない",
              "pronunciation": "泳がない",
              "meaning": "여름에는 바다에서 수영하지 않습니다."
            }
          ]
        }
      ],
      [
        "遊ばない",
        "遊ばない",
        "遊ばない",
        "놀지 않아",
        {
          "id": "verb_0a81a103_nai",
          "baseId": "verb_0a81a103",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "週末に友達と遊ばない。",
              "hira": "遊ばない",
              "pronunciation": "遊ばない",
              "meaning": "주말에 친구와 놀지 않습니다."
            }
          ]
        }
      ],
      [
        "歌わない",
        "歌わない",
        "歌わない",
        "노래하지 않아",
        {
          "id": "verb_9a70b818_nai",
          "baseId": "verb_9a70b818",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "カラオケで好きな歌を歌わない。",
              "hira": "歌わない",
              "pronunciation": "歌わない",
              "meaning": "노래방에서 좋아하는 노래를 부르지 않습니다."
            }
          ]
        }
      ],
      [
        "弾かない",
        "弾かない",
        "弾かない",
        "연주하지 않아 / 치지 않아",
        {
          "id": "verb_354a8800_nai",
          "baseId": "verb_354a8800",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "ピアノで好きな曲を弾かない。",
              "hira": "弾かない",
              "pronunciation": "弾かない",
              "meaning": "피아노로 좋아하는 곡을 연주하지 않습니다."
            }
          ]
        }
      ],
      [
        "送らない",
        "送らない",
        "送らない",
        "보내지 않아",
        {
          "id": "verb_db6ec419_nai",
          "baseId": "verb_db6ec419",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "友達に写真を送らない。",
              "hira": "送らない",
              "pronunciation": "送らない",
              "meaning": "친구에게 사진을 보내지 않습니다."
            }
          ]
        }
      ],
      [
        "もらわない",
        "もらわない",
        "모라와나이",
        "받지 않아",
        {
          "id": "verb_b893c882_nai",
          "baseId": "verb_b893c882",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "友達からプレゼントをもらわない。",
              "hira": "もらわない",
              "pronunciation": "모라와나이",
              "meaning": "친구에게서 선물을 받지 않습니다."
            }
          ]
        }
      ],
      [
        "あげない",
        "あげない",
        "아게나이",
        "주지 않아",
        {
          "id": "verb_feb367cc_nai",
          "baseId": "verb_feb367cc",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "妹に誕生日プレゼントをあげない。",
              "hira": "あげない",
              "pronunciation": "아게나이",
              "meaning": "여동생에게 생일 선물을 주지 않습니다."
            }
          ]
        }
      ],
      [
        "くれない",
        "くれない",
        "쿠레나이",
        "주지 않아",
        {
          "id": "verb_a98f3e33_nai",
          "baseId": "verb_a98f3e33",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "友達が本をくれない。",
              "hira": "くれない",
              "pronunciation": "쿠레나이",
              "meaning": "친구가 책을 주지 않습니다."
            }
          ]
        }
      ],
      [
        "借りない",
        "借りない",
        "借りない",
        "빌리지 않아",
        {
          "id": "verb_95d2b597_nai",
          "baseId": "verb_95d2b597",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "図書館で本を借りない。",
              "hira": "借りない",
              "pronunciation": "借りない",
              "meaning": "도서관에서 책을 빌리지 않습니다."
            }
          ]
        }
      ],
      [
        "貸さない",
        "貸さない",
        "貸さない",
        "빌려주지 않아",
        {
          "id": "verb_d91a49e4_nai",
          "baseId": "verb_d91a49e4",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "友達に傘を貸さない。",
              "hira": "貸さない",
              "pronunciation": "貸さない",
              "meaning": "친구에게 우산을 빌려주지 않습니다."
            }
          ]
        }
      ],
      [
        "返さない",
        "返さない",
        "返さない",
        "돌려주지 않아 / 반환하지 않아",
        {
          "id": "verb_37b69281_nai",
          "baseId": "verb_37b69281",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "借りた本を図書館に返さない。",
              "hira": "返さない",
              "pronunciation": "返さない",
              "meaning": "빌린 책을 도서관에 돌려주지 않습니다."
            }
          ]
        }
      ],
      [
        "忘れない",
        "忘れない",
        "忘れない",
        "잊지 않아",
        {
          "id": "verb_9040ec21_nai",
          "baseId": "verb_9040ec21",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "財布を家に忘れない。",
              "hira": "忘れない",
              "pronunciation": "忘れない",
              "meaning": "지갑을 집에 두고 오지 않습니다."
            }
          ]
        }
      ],
      [
        "覚えない",
        "覚えない",
        "覚えない",
        "외우지 않아 / 기억하지 않아",
        {
          "id": "verb_e9ccbd29_nai",
          "baseId": "verb_e9ccbd29",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "新しい単語を覚えない。",
              "hira": "覚えない",
              "pronunciation": "覚えない",
              "meaning": "새로운 단어를 외우지 않습니다."
            }
          ]
        }
      ],
      [
        "知らない",
        "知らない",
        "知らない",
        "알지 않아",
        {
          "id": "verb_e59eecb9_nai",
          "baseId": "verb_e59eecb9",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "そのニュースを知らない。",
              "hira": "知らない",
              "pronunciation": "知らない",
              "meaning": "그 뉴스를 알지 못합니다."
            }
          ]
        }
      ],
      [
        "分からない",
        "分からない",
        "分からない",
        "알지 않아 / 이해하지 않아",
        {
          "id": "verb_c3f97595_nai",
          "baseId": "verb_c3f97595",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "この問題の答えが分からない。",
              "hira": "分からない",
              "pronunciation": "分からない",
              "meaning": "이 문제의 답을 이해하지 못합니다."
            }
          ]
        }
      ],
      [
        "思わない",
        "思わない",
        "思わない",
        "생각하지 않아",
        {
          "id": "verb_5d47ba56_nai",
          "baseId": "verb_5d47ba56",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "それはいい考えだと思わない。",
              "hira": "思わない",
              "pronunciation": "思わない",
              "meaning": "그것은 좋은 생각이라고 생각하지 않습니다."
            }
          ]
        }
      ],
      [
        "考えない",
        "考えない",
        "考えない",
        "생각하지 않아 / 고려하지 않아",
        {
          "id": "verb_32df321f_nai",
          "baseId": "verb_32df321f",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "週末の予定を考えない。",
              "hira": "考えない",
              "pronunciation": "考えない",
              "meaning": "주말 계획을 생각하지 않습니다."
            }
          ]
        }
      ],
      [
        "言わない",
        "言わない",
        "言わない",
        "말하지 않아",
        {
          "id": "verb_a51e57f2_nai",
          "baseId": "verb_a51e57f2",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "自分の意見をはっきり言わない。",
              "hira": "言わない",
              "pronunciation": "言わない",
              "meaning": "자신의 의견을 분명하게 말하지 않습니다."
            }
          ]
        }
      ],
      [
        "聞かない",
        "聞かない",
        "聞かない",
        "듣지 않아 / 묻지 않아",
        {
          "id": "verb_797f8264_nai",
          "baseId": "verb_797f8264",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "先生の話をよく聞かない。",
              "hira": "聞かない",
              "pronunciation": "聞かない",
              "meaning": "선생님에게 질문하지 않습니다."
            }
          ]
        }
      ],
      [
        "答えない",
        "答えない",
        "答えない",
        "대답하지 않아",
        {
          "id": "verb_b03e9e2d_nai",
          "baseId": "verb_b03e9e2d",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "質問に日本語で答えない。",
              "hira": "答えない",
              "pronunciation": "答えない",
              "meaning": "질문에 일본어로 대답하지 않습니다."
            }
          ]
        }
      ],
      [
        "待たない",
        "待たない",
        "待たない",
        "기다리지 않아",
        {
          "id": "verb_aec76c47_nai",
          "baseId": "verb_aec76c47",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "駅で友達を待たない。",
              "hira": "待たない",
              "pronunciation": "待たない",
              "meaning": "역에서 친구를 기다리지 않습니다."
            }
          ]
        }
      ],
      [
        "急がない",
        "急がない",
        "急がない",
        "서두르지 않아",
        {
          "id": "verb_26e8be16_nai",
          "baseId": "verb_26e8be16",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "時間がないので急がない。",
              "hira": "急がない",
              "pronunciation": "急がない",
              "meaning": "시간이 없어서 서두르지 않습니다."
            }
          ]
        }
      ],
      [
        "入らない",
        "入らない",
        "入らない",
        "들어가지 않아",
        {
          "id": "verb_ffa98111_nai",
          "baseId": "verb_ffa98111",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "八時に会社に入らない。",
              "hira": "入らない",
              "pronunciation": "入らない",
              "meaning": "8시에 회사에 들어가지 않습니다."
            }
          ]
        }
      ],
      [
        "出ない",
        "出ない",
        "出ない",
        "나오지 않아 / 나가지 않아",
        {
          "id": "verb_022a74da_nai",
          "baseId": "verb_022a74da",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "毎朝、七時に家を出ない。",
              "hira": "出ない",
              "pronunciation": "出ない",
              "meaning": "매일 아침 7시에 집을 나서지 않습니다."
            }
          ]
        }
      ],
      [
        "入れない",
        "入れない",
        "入れない",
        "넣지 않아",
        {
          "id": "verb_8aee63b8_nai",
          "baseId": "verb_8aee63b8",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "かばんに財布を入れない。",
              "hira": "入れない",
              "pronunciation": "入れない",
              "meaning": "가방에 지갑을 넣지 않습니다."
            }
          ]
        }
      ],
      [
        "出さない",
        "出さない",
        "出さない",
        "꺼내지 않아 / 내지 않아",
        {
          "id": "verb_667067d9_nai",
          "baseId": "verb_667067d9",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "かばんから財布を出さない。",
              "hira": "出さない",
              "pronunciation": "出さない",
              "meaning": "가방에서 지갑을 꺼내지 않습니다."
            }
          ]
        }
      ],
      [
        "着ない",
        "着ない",
        "着ない",
        "입지 않아",
        {
          "id": "verb_1466ca64_nai",
          "baseId": "verb_1466ca64",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "寒い日はコートを着ない。",
              "hira": "着ない",
              "pronunciation": "着ない",
              "meaning": "추운 날에는 코트를 입지 않습니다."
            }
          ]
        }
      ],
      [
        "脱がない",
        "脱がない",
        "脱がない",
        "벗지 않아",
        {
          "id": "verb_a6ae45f8_nai",
          "baseId": "verb_a6ae45f8",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "家に帰ったら靴を脱がない。",
              "hira": "脱がない",
              "pronunciation": "脱がない",
              "meaning": "집에 돌아와도 신발을 벗지 않습니다."
            }
          ]
        }
      ],
      [
        "洗わない",
        "洗わない",
        "洗わない",
        "씻지 않아",
        {
          "id": "verb_390ef05f_nai",
          "baseId": "verb_390ef05f",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "食事の前に手を洗わない。",
              "hira": "洗わない",
              "pronunciation": "洗わない",
              "meaning": "식사 전에 손을 씻지 않습니다."
            }
          ]
        }
      ],
      [
        "できない",
        "できない",
        "できない",
        "할 수 없어",
        {
          "id": "verb_0f9c874c_nai",
          "baseId": "verb_0f9c874c",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "今日は早く仕事ができない。",
              "hira": "できない",
              "pronunciation": "できない",
              "meaning": "오늘은 일을 일찍 끝낼 수 없습니다."
            }
          ]
        }
      ],
      [
        "終えない",
        "終えない",
        "終えない",
        "끝내지 않아",
        {
          "id": "verb_extra_終える_nai",
          "baseId": "verb_extra_終える",
          "form": "conjugation",
          "level": "N3",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "午後五時までに仕事を終えない。",
              "hira": "終えない",
              "pronunciation": "終えない",
              "meaning": "오후 5시까지 일을 끝내지 않습니다."
            }
          ]
        }
      ],
      [
        "続けない",
        "続けない",
        "続けない",
        "계속하지 않아",
        {
          "id": "verb_extra_続ける_nai",
          "baseId": "verb_extra_続ける",
          "form": "conjugation",
          "level": "N4",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "毎日、日本語の勉強を続けない。",
              "hira": "続けない",
              "pronunciation": "続けない",
              "meaning": "매일 일본어 공부를 계속하지 않습니다."
            }
          ]
        }
      ],
      [
        "止めない",
        "止めない",
        "止めない",
        "멈추지 않아 / 세우지 않아",
        {
          "id": "verb_extra_止める_nai",
          "baseId": "verb_extra_止める",
          "form": "conjugation",
          "level": "N4",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "ここに車を止めない。",
              "hira": "止めない",
              "pronunciation": "止めない",
              "meaning": "여기에 차를 세우지 않습니다."
            }
          ]
        }
      ],
      [
        "変えない",
        "変えない",
        "変えない",
        "바꾸지 않아",
        {
          "id": "verb_extra_変える_nai",
          "baseId": "verb_extra_変える",
          "form": "conjugation",
          "level": "N4",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "旅行の予定を変えない。",
              "hira": "変えない",
              "pronunciation": "変えない",
              "meaning": "여행 일정을 바꾸지 않습니다."
            }
          ]
        }
      ],
      [
        "決めない",
        "決めない",
        "決めない",
        "정하지 않아",
        {
          "id": "verb_extra_決める_nai",
          "baseId": "verb_extra_決める",
          "form": "conjugation",
          "level": "N4",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "今週中に日程を決めない。",
              "hira": "決めない",
              "pronunciation": "決めない",
              "meaning": "이번 주 안에 일정을 정하지 않습니다."
            }
          ]
        }
      ],
      [
        "選ばない",
        "選ばない",
        "選ばない",
        "고르지 않아 / 선택하지 않아",
        {
          "id": "verb_extra_選ぶ_nai",
          "baseId": "verb_extra_選ぶ",
          "form": "conjugation",
          "level": "N4",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "好きな色を選ばない。",
              "hira": "選ばない",
              "pronunciation": "選ばない",
              "meaning": "좋아하는 색을 고르지 않습니다."
            }
          ]
        }
      ],
      [
        "探さない",
        "探さない",
        "探さない",
        "찾지 않아",
        {
          "id": "verb_extra_探す_nai",
          "baseId": "verb_extra_探す",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "駅でホテルを探さない。",
              "hira": "探さない",
              "pronunciation": "探さない",
              "meaning": "역에서 호텔을 찾지 않습니다."
            }
          ]
        }
      ],
      [
        "見つけない",
        "見つけない",
        "見つけない",
        "찾아내지 않아 / 발견하지 않아",
        {
          "id": "verb_extra_見つける_nai",
          "baseId": "verb_extra_見つける",
          "form": "conjugation",
          "level": "N4",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "駅の近くでいい店を見つけない。",
              "hira": "見つけない",
              "pronunciation": "見つけない",
              "meaning": "역 근처에서 좋은 가게를 찾지 않습니다."
            }
          ]
        }
      ],
      [
        "見つからない",
        "見つからない",
        "見つからない",
        "발견되지 않아 / 찾아지지 않아",
        {
          "id": "verb_extra_見つかる_nai",
          "baseId": "verb_extra_見つかる",
          "form": "conjugation",
          "level": "N4",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "なくした鍵が見つからない。",
              "hira": "見つからない",
              "pronunciation": "見つからない",
              "meaning": "잃어버린 열쇠가 찾아지지 않습니다."
            }
          ]
        }
      ],
      [
        "調べない",
        "調べない",
        "調べない",
        "조사하지 않아 / 찾아보지 않아",
        {
          "id": "verb_extra_調べる_nai",
          "baseId": "verb_extra_調べる",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "分からない言葉を辞書で調べない。",
              "hira": "調べない",
              "pronunciation": "調べない",
              "meaning": "모르는 단어를 사전에서 찾아보지 않습니다."
            }
          ]
        }
      ],
      [
        "決まらない",
        "決まらない",
        "決まらない",
        "정해지지 않아",
        {
          "id": "verb_extra_決まる_nai",
          "baseId": "verb_extra_決まる",
          "form": "conjugation",
          "level": "N4",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "来月の予定が決まらない。",
              "hira": "決まらない",
              "pronunciation": "決まらない",
              "meaning": "다음 달 일정이 정해지지 않습니다."
            }
          ]
        }
      ],
      [
        "比べない",
        "くらべない",
        "쿠라베나이",
        "비교하지 않아",
        {
          "id": "verb_extra_比べる_nai",
          "baseId": "verb_extra_比べる",
          "form": "conjugation",
          "level": "N4",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "二つの商品を比べない。",
              "hira": "くらべない",
              "pronunciation": "쿠라베나이",
              "meaning": "두 상품을 비교하지 않습니다."
            }
          ]
        }
      ],
      [
        "受けない",
        "受けない",
        "受けない",
        "받지 않아 / 응시하지 않아",
        {
          "id": "verb_extra_受ける_nai",
          "baseId": "verb_extra_受ける",
          "form": "conjugation",
          "level": "N4",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "来月、日本語の試験を受けない。",
              "hira": "受けない",
              "pronunciation": "受けない",
              "meaning": "다음 달 일본어 시험을 보지 않습니다."
            }
          ]
        }
      ],
      [
        "申し込まない",
        "もうしこまない",
        "모오시코마나이",
        "신청하지 않아",
        {
          "id": "verb_extra_申し込む_nai",
          "baseId": "verb_extra_申し込む",
          "form": "conjugation",
          "level": "N3",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "オンラインで講座に申し込まない。",
              "hira": "もうしこまない",
              "pronunciation": "모오시코마나이",
              "meaning": "온라인으로 강좌를 신청하지 않습니다."
            }
          ]
        }
      ],
      [
        "予約しない",
        "よやくしない",
        "요야쿠시나이",
        "예약하지 않아",
        {
          "id": "verb_extra_予約する_nai",
          "baseId": "verb_extra_予約する",
          "form": "conjugation",
          "level": "N4",
          "meta": {
            "verbGroup": "3그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "ホテルをインターネットで予約しない。",
              "hira": "よやくしない",
              "pronunciation": "요야쿠시나이",
              "meaning": "호텔을 인터넷으로 예약하지 않습니다."
            }
          ]
        }
      ],
      [
        "確認しない",
        "確認しない",
        "確認しない",
        "확인하지 않아",
        {
          "id": "verb_extra_確認する_nai",
          "baseId": "verb_extra_確認する",
          "form": "conjugation",
          "level": "N3",
          "meta": {
            "verbGroup": "3그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "出発時間を確認しない。",
              "hira": "確認しない",
              "pronunciation": "確認しない",
              "meaning": "출발 시간을 확인하지 않습니다."
            }
          ]
        }
      ],
      [
        "連絡しない",
        "れんらくしない",
        "렌라쿠시나이",
        "연락하지 않아",
        {
          "id": "verb_extra_連絡する_nai",
          "baseId": "verb_extra_連絡する",
          "form": "conjugation",
          "level": "N3",
          "meta": {
            "verbGroup": "3그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "着いたら連絡しない。",
              "hira": "れんらくしない",
              "pronunciation": "렌라쿠시나이",
              "meaning": "도착해도 연락하지 않습니다."
            }
          ]
        }
      ],
      [
        "説明しない",
        "説明しない",
        "説明しない",
        "설명하지 않아",
        {
          "id": "verb_extra_説明する_nai",
          "baseId": "verb_extra_説明する",
          "form": "conjugation",
          "level": "N3",
          "meta": {
            "verbGroup": "3그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "先生が文法を説明しない。",
              "hira": "説明しない",
              "pronunciation": "説明しない",
              "meaning": "선생님이 문법을 설명하지 않습니다."
            }
          ]
        }
      ],
      [
        "準備しない",
        "じゅんびしない",
        "준비시나이",
        "준비하지 않아",
        {
          "id": "verb_extra_準備する_nai",
          "baseId": "verb_extra_準備する",
          "form": "conjugation",
          "level": "N4",
          "meta": {
            "verbGroup": "3그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "旅行の準備をしない。",
              "hira": "じゅんびしない",
              "pronunciation": "준비시나이",
              "meaning": "여행 준비를 하지 않습니다."
            }
          ]
        }
      ],
      [
        "片付けない",
        "片付けない",
        "片付けない",
        "정리하지 않아 / 치우지 않아",
        {
          "id": "verb_extra_片付ける_nai",
          "baseId": "verb_extra_片付ける",
          "form": "conjugation",
          "level": "N4",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "食事の後で部屋を片付けない。",
              "hira": "片付けない",
              "pronunciation": "片付けない",
              "meaning": "식사 후에 방을 정리하지 않습니다."
            }
          ]
        }
      ],
      [
        "洗濯しない",
        "洗濯しない",
        "洗濯しない",
        "세탁하지 않아",
        {
          "id": "verb_extra_洗濯する_nai",
          "baseId": "verb_extra_洗濯する",
          "form": "conjugation",
          "level": "N4",
          "meta": {
            "verbGroup": "3그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "土曜日に洗濯しない。",
              "hira": "洗濯しない",
              "pronunciation": "洗濯しない",
              "meaning": "토요일에 빨래하지 않습니다."
            }
          ]
        }
      ],
      [
        "出発しない",
        "出発しない",
        "出発しない",
        "출발하지 않아",
        {
          "id": "verb_extra_出発する_nai",
          "baseId": "verb_extra_出発する",
          "form": "conjugation",
          "level": "N4",
          "meta": {
            "verbGroup": "3그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "朝八時に東京を出発しない。",
              "hira": "出発しない",
              "pronunciation": "出発しない",
              "meaning": "아침 8시에 도쿄를 출발하지 않습니다."
            }
          ]
        }
      ],
      [
        "到着しない",
        "到着しない",
        "到着しない",
        "도착하지 않아",
        {
          "id": "verb_extra_到着する_nai",
          "baseId": "verb_extra_到着する",
          "form": "conjugation",
          "level": "N3",
          "meta": {
            "verbGroup": "3그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "午後三時に京都に到着しない。",
              "hira": "到着しない",
              "pronunciation": "到着しない",
              "meaning": "오후 3시에 교토에 도착하지 않습니다."
            }
          ]
        }
      ],
      [
        "利用しない",
        "利用しない",
        "利用しない",
        "이용하지 않아",
        {
          "id": "verb_extra_利用する_nai",
          "baseId": "verb_extra_利用する",
          "form": "conjugation",
          "level": "N3",
          "meta": {
            "verbGroup": "3그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "旅行中はこのサービスを利用しない。",
              "hira": "利用しない",
              "pronunciation": "利用しない",
              "meaning": "여행 중에는 이 서비스를 이용하지 않습니다."
            }
          ]
        }
      ],
      [
        "運ばない",
        "はこばない",
        "하코바나이",
        "나르지 않아 / 운반하지 않아",
        {
          "id": "verb_c2486c41e6_nai",
          "level": "N4",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "荷物を部屋まで運ばない。",
              "hira": "はこばない",
              "pronunciation": "하코바나이",
              "meaning": "짐을 방까지 나르지 않습니다."
            }
          ],
          "baseId": "verb_c2486c41e6",
          "form": "conjugation"
        }
      ],
      [
        "売らない",
        "うらない",
        "우라나이",
        "팔지 않아",
        {
          "id": "verb_ec51fc2e16_nai",
          "level": "N4",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "使わなくなった本を売らない。",
              "hira": "うらない",
              "pronunciation": "우라나이",
              "meaning": "더 이상 사용하지 않는 책을 팔지 않습니다."
            }
          ],
          "baseId": "verb_ec51fc2e16",
          "form": "conjugation"
        }
      ],
      [
        "消さない",
        "けさない",
        "케사나이",
        "끄지 않아 / 지우지 않아",
        {
          "id": "verb_df2b3a6397_nai",
          "level": "N4",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "寝る前に電気を消さない。",
              "hira": "けさない",
              "pronunciation": "케사나이",
              "meaning": "자기 전에 불을 끄지 않습니다."
            }
          ],
          "baseId": "verb_df2b3a6397",
          "form": "conjugation"
        }
      ],
      [
        "押さない",
        "おさない",
        "오사나이",
        "누르지 않아 / 밀지 않아",
        {
          "id": "verb_30038e39f3_nai",
          "level": "N4",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "このボタンを押さない。",
              "hira": "おさない",
              "pronunciation": "오사나이",
              "meaning": "이 버튼을 누르지 않습니다."
            }
          ],
          "baseId": "verb_30038e39f3",
          "form": "conjugation"
        }
      ],
      [
        "引かない",
        "ひかない",
        "히카나이",
        "당기지 않아 / 끌지 않아",
        {
          "id": "verb_371c196bcb_nai",
          "level": "N4",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "ドアを手前に引かない。",
              "hira": "ひかない",
              "pronunciation": "히카나이",
              "meaning": "문을 자기 쪽으로 당기지 않습니다."
            }
          ],
          "baseId": "verb_371c196bcb",
          "form": "conjugation"
        }
      ],
      [
        "拾わない",
        "ひろわない",
        "히로와나이",
        "줍지 않아",
        {
          "id": "verb_d404351530_nai",
          "level": "N4",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "道で財布を拾わない。",
              "hira": "ひろわない",
              "pronunciation": "히로와나이",
              "meaning": "길에서 지갑을 줍지 않습니다."
            }
          ],
          "baseId": "verb_d404351530",
          "form": "conjugation"
        }
      ],
      [
        "捨てない",
        "すてない",
        "스테나이",
        "버리지 않아",
        {
          "id": "verb_e720775ac7_nai",
          "level": "N4",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "古い服を捨てない。",
              "hira": "すてない",
              "pronunciation": "스테나이",
              "meaning": "낡은 옷을 버리지 않습니다."
            }
          ],
          "baseId": "verb_e720775ac7",
          "form": "conjugation"
        }
      ],
      [
        "集めない",
        "あつめない",
        "아츠메나이",
        "모으지 않아",
        {
          "id": "verb_0a49f1e34a_nai",
          "level": "N4",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "旅行の情報を集めない。",
              "hira": "あつめない",
              "pronunciation": "아츠메나이",
              "meaning": "여행 정보를 모으지 않습니다."
            }
          ],
          "baseId": "verb_0a49f1e34a",
          "form": "conjugation"
        }
      ],
      [
        "直さない",
        "なおさない",
        "나오사나이",
        "고치지 않아 / 수리하지 않아",
        {
          "id": "verb_442e7ec90b_nai",
          "level": "N4",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "間違いを直さない。",
              "hira": "なおさない",
              "pronunciation": "나오사나이",
              "meaning": "틀린 부분을 고치지 않습니다."
            }
          ],
          "baseId": "verb_442e7ec90b",
          "form": "conjugation"
        }
      ],
      [
        "直らない",
        "なおらない",
        "나오라나이",
        "고쳐지지 않아 / 낫지 않아",
        {
          "id": "verb_1f8de4ba37_nai",
          "level": "N4",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "壊れていた時計が直らない。",
              "hira": "なおらない",
              "pronunciation": "나오라나이",
              "meaning": "고장 났던 시계가 고쳐지지 않습니다."
            }
          ],
          "baseId": "verb_1f8de4ba37",
          "form": "conjugation"
        }
      ],
      [
        "壊さない",
        "こわさない",
        "코와사나이",
        "망가뜨리지 않아 / 고장 내지 않아",
        {
          "id": "verb_4160686f0d_nai",
          "level": "N4",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "子どもがおもちゃを壊さない。",
              "hira": "こわさない",
              "pronunciation": "코와사나이",
              "meaning": "아이가 장난감을 망가뜨리지 않습니다."
            }
          ],
          "baseId": "verb_4160686f0d",
          "form": "conjugation"
        }
      ],
      [
        "壊れない",
        "こわれない",
        "코와레나이",
        "망가지지 않아 / 고장 나지 않아",
        {
          "id": "verb_c34da08306_nai",
          "level": "N4",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "古いパソコンが壊れない。",
              "hira": "こわれない",
              "pronunciation": "코와레나이",
              "meaning": "오래된 컴퓨터가 고장 나지 않습니다."
            }
          ],
          "baseId": "verb_c34da08306",
          "form": "conjugation"
        }
      ],
      [
        "遅れない",
        "おくれない",
        "오쿠레나이",
        "늦지 않아 / 늦어지지 않아",
        {
          "id": "verb_89aa88ff42_nai",
          "level": "N4",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "電車が十分ほど遅れない。",
              "hira": "おくれない",
              "pronunciation": "오쿠레나이",
              "meaning": "전철이 10분 정도 늦지 않습니다."
            }
          ],
          "baseId": "verb_89aa88ff42",
          "form": "conjugation"
        }
      ],
      [
        "間に合わない",
        "まにあわない",
        "마니아와나이",
        "시간에 맞지 않아 / 늦어",
        {
          "id": "verb_28940f5774_nai",
          "level": "N4",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "急げば八時の電車に間に合わない。",
              "hira": "まにあわない",
              "pronunciation": "마니아와나이",
              "meaning": "서두르지 않으면 8시 전철에 늦습니다."
            }
          ],
          "baseId": "verb_28940f5774",
          "form": "conjugation"
        }
      ],
      [
        "参加しない",
        "さんかしない",
        "산카시나이",
        "참가하지 않아",
        {
          "id": "verb_f8da0bc1c2_nai",
          "level": "N4",
          "meta": {
            "verbGroup": "3그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "明日の会議に参加しない。",
              "hira": "さんかしない",
              "pronunciation": "산카시나이",
              "meaning": "내일 회의에 참가하지 않습니다."
            }
          ],
          "baseId": "verb_f8da0bc1c2",
          "form": "conjugation"
        }
      ],
      [
        "止まらない",
        "とまらない",
        "토마루",
        "멈추다(부정형)",
        {
          "id": "verb_extra_1_nai",
          "baseId": "verb_extra_1",
          "form": "conjugation",
          "level": "N4",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "自動詞"
          },
          "examples": [
            {
              "jp": "この電車はここでは止まらない。",
              "hira": "このでんしゃはここではとまらない。",
              "pronunciation": "코노 덴샤와 코코데와 토마라나이",
              "meaning": "이 전철은 여기에는 서지 않는다."
            }
          ]
        }
      ],
      [
        "呼ばない",
        "よばない",
        "요부",
        "부르다(부정형)",
        {
          "id": "verb_extra_2_nai",
          "baseId": "verb_extra_2",
          "form": "conjugation",
          "level": "N4",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "他動詞"
          },
          "examples": [
            {
              "jp": "今は誰も呼ばない。",
              "hira": "いまはだれもよばない。",
              "pronunciation": "이마와 다레모 요바나이",
              "meaning": "지금은 아무도 부르지 않는다."
            }
          ]
        }
      ],
      [
        "泊まらない",
        "とまらない",
        "토마루",
        "묵다 / 숙박하다(부정형)",
        {
          "id": "verb_extra_3_nai",
          "baseId": "verb_extra_3",
          "form": "conjugation",
          "level": "N4",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "自動詞"
          },
          "examples": [
            {
              "jp": "今回はホテルに泊まらない。",
              "hira": "こんかいはほてるにとまらない。",
              "pronunciation": "콘카이와 호테루니 토마라나이",
              "meaning": "이번에는 호텔에 묵지 않는다."
            }
          ]
        }
      ],
      [
        "着かない",
        "つかない",
        "츠쿠",
        "도착하다(부정형)",
        {
          "id": "verb_extra_4_nai",
          "baseId": "verb_extra_4",
          "form": "conjugation",
          "level": "N4",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "自動詞"
          },
          "examples": [
            {
              "jp": "まだ駅に着かない。",
              "hira": "まだえきにつかない。",
              "pronunciation": "마다 에키니 츠카나이",
              "meaning": "아직 역에 도착하지 않는다."
            }
          ]
        }
      ],
      [
        "乗り換えない",
        "のりかえない",
        "노리카에루",
        "갈아타다(부정형)",
        {
          "id": "verb_extra_5_nai",
          "baseId": "verb_extra_5",
          "form": "conjugation",
          "level": "N4",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "自動詞"
          },
          "examples": [
            {
              "jp": "ここでは乗り換えない。",
              "hira": "ここではのりかえない。",
              "pronunciation": "코코데와 노리카에나이",
              "meaning": "여기서는 갈아타지 않는다."
            }
          ]
        }
      ]
    ],
    "미래형": [
      [
        "行くつもりだ",
        "いくつもりだ",
        "이쿠 츠모리다",
        "갈 거야 (미래형)",
        {
          "id": "verb_iku_future",
          "baseId": "verb_iku",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "明日は学校へ行くつもりだ。",
              "hira": "いくつもりだ",
              "pronunciation": "이쿠 츠모리다",
              "meaning": "내일은 학교에 갈 생각입니다."
            }
          ]
        }
      ],
      [
        "食べるつもりだ",
        "たべるつもりだ",
        "타베루 츠모리다",
        "먹을 거야 (미래형)",
        {
          "id": "verb_taberu_future",
          "baseId": "verb_taberu",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "毎朝、朝ご飯を食べるつもりだ。",
              "hira": "たべるつもりだ",
              "pronunciation": "타베루 츠모리다",
              "meaning": "매일 아침, 아침밥을 먹을 생각입니다."
            }
          ]
        }
      ],
      [
        "見るつもりだ",
        "みるつもりだ",
        "미루 츠모리다",
        "볼 거야 (미래형)",
        {
          "id": "verb_miru_future",
          "baseId": "verb_miru",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "夜に映画を見るつもりだ。",
              "hira": "みるつもりだ",
              "pronunciation": "미루 츠모리다",
              "meaning": "밤에 영화를 볼 생각입니다."
            }
          ]
        }
      ],
      [
        "飲むつもりだ",
        "のむつもりだ",
        "노무 츠모리다",
        "마실 거야 (미래형)",
        {
          "id": "verb_nomu_future",
          "baseId": "verb_nomu",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "毎朝、水を飲むつもりだ。",
              "hira": "のむつもりだ",
              "pronunciation": "노무 츠모리다",
              "meaning": "매일 아침 물을 마실 생각입니다."
            }
          ]
        }
      ],
      [
        "書くつもりだ",
        "かくつもりだ",
        "카쿠 츠모리다",
        "쓸 거야 (미래형)",
        {
          "id": "verb_kaku_future",
          "baseId": "verb_kaku",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "ノートに名前を書くつもりだ。",
              "hira": "かくつもりだ",
              "pronunciation": "카쿠 츠모리다",
              "meaning": "공책에 이름을 쓸 생각입니다."
            }
          ]
        }
      ],
      [
        "読むつもりだ",
        "よむつもりだ",
        "요무 츠모리다",
        "읽을 거야 (미래형)",
        {
          "id": "verb_yomu_future",
          "baseId": "verb_yomu",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "寝る前に本を読むつもりだ。",
              "hira": "よむつもりだ",
              "pronunciation": "요무 츠모리다",
              "meaning": "자기 전에 책을 읽을 생각입니다."
            }
          ]
        }
      ],
      [
        "話すつもりだ",
        "はなすつもりだ",
        "하나스 츠모리다",
        "말할 거야 / 이야기할 거야 (미래형)",
        {
          "id": "verb_hanasu_future",
          "baseId": "verb_hanasu",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "友達と日本語で話すつもりだ。",
              "hira": "はなすつもりだ",
              "pronunciation": "하나스 츠모리다",
              "meaning": "친구와 일본어로 이야기할 생각입니다."
            }
          ]
        }
      ],
      [
        "買うつもりだ",
        "かうつもりだ",
        "카우 츠모리다",
        "살 거야 (미래형)",
        {
          "id": "verb_kau_future",
          "baseId": "verb_kau",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "駅で切符を買うつもりだ。",
              "hira": "かうつもりだ",
              "pronunciation": "카우 츠모리다",
              "meaning": "역에서 표를 살 생각입니다."
            }
          ]
        }
      ],
      [
        "帰るつもりだ",
        "かえるつもりだ",
        "카에루 츠모리다",
        "돌아갈 거야 / 돌아올 거야 (미래형)",
        {
          "id": "verb_kaeru_future",
          "baseId": "verb_kaeru",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "仕事が終わったら家に帰るつもりだ。",
              "hira": "かえるつもりだ",
              "pronunciation": "카에루 츠모리다",
              "meaning": "일이 끝나면 집에 돌아갈 생각입니다."
            }
          ]
        }
      ],
      [
        "会うつもりだ",
        "あうつもりだ",
        "아우 츠모리다",
        "만날 거야 (미래형)",
        {
          "id": "verb_8c96a83e_future",
          "baseId": "verb_8c96a83e",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "週末に友達に会うつもりだ。",
              "hira": "あうつもりだ",
              "pronunciation": "아우 츠모리다",
              "meaning": "주말에 친구를 만날 생각입니다."
            }
          ]
        }
      ],
      [
        "あるつもりだ",
        "あるつもりだ",
        "아루 츠모리다",
        "있을 거야 (미래형)",
        {
          "id": "verb_b8345a61_future",
          "baseId": "verb_b8345a61",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "必要な資料はここにあるつもりだ。",
              "hira": "あるつもりだ",
              "pronunciation": "아루 츠모리다",
              "meaning": "필요한 자료가 여기에 있을 거라고 생각합니다."
            }
          ]
        }
      ],
      [
        "いるつもりだ",
        "いるつもりだ",
        "いるつもりだ",
        "있을 거야 (미래형)",
        {
          "id": "verb_bb9d44f8_future",
          "baseId": "verb_bb9d44f8",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "私は明日もここにいるつもりだ。",
              "hira": "いるつもりだ",
              "pronunciation": "いるつもりだ",
              "meaning": "저는 내일도 여기에 있을 생각입니다."
            }
          ]
        }
      ],
      [
        "起きるつもりだ",
        "おきるつもりだ",
        "오키루 츠모리다",
        "일어날 거야 (미래형)",
        {
          "id": "verb_f1e80ce9_future",
          "baseId": "verb_f1e80ce9",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "毎朝、七時に起きるつもりだ。",
              "hira": "おきるつもりだ",
              "pronunciation": "오키루 츠모리다",
              "meaning": "매일 아침 7시에 일어날 생각입니다."
            }
          ]
        }
      ],
      [
        "寝るつもりだ",
        "ねるつもりだ",
        "네루 츠모리다",
        "잘 거야 (미래형)",
        {
          "id": "verb_32c88ea6_future",
          "baseId": "verb_32c88ea6",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "毎晩、十一時に寝るつもりだ。",
              "hira": "ねるつもりだ",
              "pronunciation": "네루 츠모리다",
              "meaning": "매일 밤 11시에 잘 생각입니다."
            }
          ]
        }
      ],
      [
        "働くつもりだ",
        "はたらくつもりだ",
        "하타라쿠 츠모리다",
        "일할 거야 (미래형)",
        {
          "id": "verb_b39fc552_future",
          "baseId": "verb_b39fc552",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "東京の会社で働くつもりだ。",
              "hira": "はたらくつもりだ",
              "pronunciation": "하타라쿠 츠모리다",
              "meaning": "도쿄의 회사에서 일할 생각입니다."
            }
          ]
        }
      ],
      [
        "休むつもりだ",
        "やすむつもりだ",
        "야스무 츠모리다",
        "쉴 거야 / 결석할 거야 (미래형)",
        {
          "id": "verb_8b24f26b_future",
          "baseId": "verb_8b24f26b",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "今日は家でゆっくり休むつもりだ。",
              "hira": "やすむつもりだ",
              "pronunciation": "야스무 츠모리다",
              "meaning": "오늘은 집에서 푹 쉴 생각입니다."
            }
          ]
        }
      ],
      [
        "使うつもりだ",
        "つかうつもりだ",
        "츠카우 츠모리다",
        "사용할 거야 (미래형)",
        {
          "id": "verb_bb0e5d22_future",
          "baseId": "verb_bb0e5d22",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "このアプリを毎日使うつもりだ。",
              "hira": "つかうつもりだ",
              "pronunciation": "츠카우 츠모리다",
              "meaning": "이 앱을 매일 사용할 생각입니다."
            }
          ]
        }
      ],
      [
        "作るつもりだ",
        "つくるつもりだ",
        "츠쿠루 츠모리다",
        "만들 거야 (미래형)",
        {
          "id": "verb_94b87121_future",
          "baseId": "verb_94b87121",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "週末にカレーを作るつもりだ。",
              "hira": "つくるつもりだ",
              "pronunciation": "츠쿠루 츠모리다",
              "meaning": "주말에 카레를 만들 생각입니다."
            }
          ]
        }
      ],
      [
        "持つつもりだ",
        "もつつもりだ",
        "모츠 츠모리다",
        "가질 거야 / 들 거야 (미래형)",
        {
          "id": "verb_9197e4fd_future",
          "baseId": "verb_9197e4fd",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "傘を持つつもりだ。",
              "hira": "もつつもりだ",
              "pronunciation": "모츠 츠모리다",
              "meaning": "우산을 가지고 외출할 생각입니다."
            }
          ]
        }
      ],
      [
        "取るつもりだ",
        "とるつもりだ",
        "토루 츠모리다",
        "잡을 거야 / 취할 거야 (미래형)",
        {
          "id": "verb_49234a82_future",
          "baseId": "verb_49234a82",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "大事なことをノートに取るつもりだ。",
              "hira": "とるつもりだ",
              "pronunciation": "토루 츠모리다",
              "meaning": "여행 사진을 많이 찍을 생각입니다."
            }
          ]
        }
      ],
      [
        "置くつもりだ",
        "おくつもりだ",
        "오쿠 츠모리다",
        "놓을 거야 / 둘 거야 (미래형)",
        {
          "id": "verb_fc7721ef_future",
          "baseId": "verb_fc7721ef",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "鍵をテーブルの上に置くつもりだ。",
              "hira": "おくつもりだ",
              "pronunciation": "오쿠 츠모리다",
              "meaning": "열쇠를 테이블 위에 놓을 생각입니다."
            }
          ]
        }
      ],
      [
        "開けるつもりだ",
        "あけるつもりだ",
        "아케루 츠모리다",
        "열 거야 (미래형)",
        {
          "id": "verb_75b7bd31_future",
          "baseId": "verb_75b7bd31",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "窓を開けるつもりだ。",
              "hira": "あけるつもりだ",
              "pronunciation": "아케루 츠모리다",
              "meaning": "창문을 열 생각입니다."
            }
          ]
        }
      ],
      [
        "閉めるつもりだ",
        "しめるつもりだ",
        "시메루 츠모리다",
        "닫을 거야 (미래형)",
        {
          "id": "verb_cc46a6d5_future",
          "baseId": "verb_cc46a6d5",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "寝る前にドアを閉めるつもりだ。",
              "hira": "しめるつもりだ",
              "pronunciation": "시메루 츠모리다",
              "meaning": "자기 전에 문을 닫을 생각입니다."
            }
          ]
        }
      ],
      [
        "開くつもりだ",
        "あくつもりだ",
        "아쿠 츠모리다",
        "열릴 거야 (미래형)",
        {
          "id": "verb_8c7f33dc_future",
          "baseId": "verb_8c7f33dc",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "店は九時に開くつもりだ。",
              "hira": "あくつもりだ",
              "pronunciation": "아쿠 츠모리다",
              "meaning": "가게는 9시에 열릴 예정입니다."
            }
          ]
        }
      ],
      [
        "閉まるつもりだ",
        "しまるつもりだ",
        "시마루 츠모리다",
        "닫힐 거야 (미래형)",
        {
          "id": "verb_7a531040_future",
          "baseId": "verb_7a531040",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "この店は八時に閉まるつもりだ。",
              "hira": "しまるつもりだ",
              "pronunciation": "시마루 츠모리다",
              "meaning": "이 가게는 8시에 문을 닫을 예정입니다."
            }
          ]
        }
      ],
      [
        "始めるつもりだ",
        "はじめるつもりだ",
        "하지메루 츠모리다",
        "시작할 거야 (미래형)",
        {
          "id": "verb_af915dc0_future",
          "baseId": "verb_af915dc0",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "九時から仕事を始めるつもりだ。",
              "hira": "はじめるつもりだ",
              "pronunciation": "하지메루 츠모리다",
              "meaning": "9시부터 일을 시작할 생각입니다."
            }
          ]
        }
      ],
      [
        "始まるつもりだ",
        "はじまるつもりだ",
        "하지마루 츠모리다",
        "시작될 거야 (미래형)",
        {
          "id": "verb_6d0d725d_future",
          "baseId": "verb_6d0d725d",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "授業は九時に始まるつもりだ。",
              "hira": "はじまるつもりだ",
              "pronunciation": "하지마루 츠모리다",
              "meaning": "수업은 9시에 시작될 예정입니다."
            }
          ]
        }
      ],
      [
        "終わるつもりだ",
        "おわるつもりだ",
        "오와루 츠모리다",
        "끝날 거야 (미래형)",
        {
          "id": "verb_282e7ad7_future",
          "baseId": "verb_282e7ad7",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "授業は三時に終わるつもりだ。",
              "hira": "おわるつもりだ",
              "pronunciation": "오와루 츠모리다",
              "meaning": "수업은 3시에 끝날 예정입니다."
            }
          ]
        }
      ],
      [
        "教えるつもりだ",
        "おしえるつもりだ",
        "오시에루 츠모리다",
        "가르칠 거야 / 알려 줄 거야 (미래형)",
        {
          "id": "verb_8fcd9672_future",
          "baseId": "verb_8fcd9672",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "先生が日本語を教えるつもりだ。",
              "hira": "おしえるつもりだ",
              "pronunciation": "오시에루 츠모리다",
              "meaning": "선생님이 일본어를 가르칠 생각입니다."
            }
          ]
        }
      ],
      [
        "習うつもりだ",
        "ならうつもりだ",
        "나라우 츠모리다",
        "배울 거야 (미래형)",
        {
          "id": "verb_815c9429_future",
          "baseId": "verb_815c9429",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "先生から日本語を習うつもりだ。",
              "hira": "ならうつもりだ",
              "pronunciation": "나라우 츠모리다",
              "meaning": "선생님에게 일본어를 배울 생각입니다."
            }
          ]
        }
      ],
      [
        "勉強するつもりだ",
        "べんきょうするつもりだ",
        "벤쿄오스루 츠모리다",
        "공부할 거야 (미래형)",
        {
          "id": "verb_c17e2e8d_future",
          "baseId": "verb_c17e2e8d",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "3그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "毎日、日本語を勉強するつもりだ。",
              "hira": "べんきょうするつもりだ",
              "pronunciation": "벤쿄오스루 츠모리다",
              "meaning": "매일 일본어를 공부할 생각입니다."
            }
          ]
        }
      ],
      [
        "練習するつもりだ",
        "れんしゅうするつもりだ",
        "렌슈우스루 츠모리다",
        "연습할 거야 (미래형)",
        {
          "id": "verb_869aa4c0_future",
          "baseId": "verb_869aa4c0",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "3그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "毎日、会話を練習するつもりだ。",
              "hira": "れんしゅうするつもりだ",
              "pronunciation": "렌슈우스루 츠모리다",
              "meaning": "매일 회화를 연습할 생각입니다."
            }
          ]
        }
      ],
      [
        "掃除するつもりだ",
        "そうじするつもりだ",
        "소오지스루 츠모리다",
        "청소할 거야 (미래형)",
        {
          "id": "verb_52eafdbf_future",
          "baseId": "verb_52eafdbf",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "3그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "毎週、部屋を掃除するつもりだ。",
              "hira": "そうじするつもりだ",
              "pronunciation": "소오지스루 츠모리다",
              "meaning": "매주 방을 청소할 생각입니다."
            }
          ]
        }
      ],
      [
        "料理するつもりだ",
        "りょうりするつもりだ",
        "료오리스루 츠모리다",
        "요리할 거야 (미래형)",
        {
          "id": "verb_76f375dd_future",
          "baseId": "verb_76f375dd",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "3그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "週末に家で料理するつもりだ。",
              "hira": "りょうりするつもりだ",
              "pronunciation": "료오리스루 츠모리다",
              "meaning": "주말에 집에서 요리할 생각입니다."
            }
          ]
        }
      ],
      [
        "電話するつもりだ",
        "でんわするつもりだ",
        "덴와스루 츠모리다",
        "전화할 거야 (미래형)",
        {
          "id": "verb_c9e5c467_future",
          "baseId": "verb_c9e5c467",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "3그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "母に電話するつもりだ。",
              "hira": "でんわするつもりだ",
              "pronunciation": "덴와스루 츠모리다",
              "meaning": "어머니에게 전화할 생각입니다."
            }
          ]
        }
      ],
      [
        "住むつもりだ",
        "すむつもりだ",
        "스무 츠모리다",
        "살 거야 (미래형)",
        {
          "id": "verb_42073ff3_future",
          "baseId": "verb_42073ff3",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "ソウルに住むつもりだ",
              "hira": "すむつもりだ",
              "pronunciation": "스무 츠모리다",
              "meaning": "서울에 살 생각입니다."
            }
          ]
        }
      ],
      [
        "乗るつもりだ",
        "のるつもりだ",
        "노루 츠모리다",
        "탈 거야 (미래형)",
        {
          "id": "verb_82276e1f_future",
          "baseId": "verb_82276e1f",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "毎朝、電車に乗るつもりだ。",
              "hira": "のるつもりだ",
              "pronunciation": "노루 츠모리다",
              "meaning": "매일 아침 전철을 탈 생각입니다."
            }
          ]
        }
      ],
      [
        "降りるつもりだ",
        "おりるつもりだ",
        "오리루 츠모리다",
        "내릴 거야 (미래형)",
        {
          "id": "verb_6432570a_future",
          "baseId": "verb_6432570a",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "次の駅で電車を降りるつもりだ。",
              "hira": "おりるつもりだ",
              "pronunciation": "오리루 츠모리다",
              "meaning": "다음 역에서 전철에서 내릴 생각입니다."
            }
          ]
        }
      ],
      [
        "歩くつもりだ",
        "あるくつもりだ",
        "아루쿠 츠모리다",
        "걸을 거야 (미래형)",
        {
          "id": "verb_be581e40_future",
          "baseId": "verb_be581e40",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "駅まで歩くつもりだ。",
              "hira": "あるくつもりだ",
              "pronunciation": "아루쿠 츠모리다",
              "meaning": "역까지 걸어갈 생각입니다."
            }
          ]
        }
      ],
      [
        "走るつもりだ",
        "はしるつもりだ",
        "하시루 츠모리다",
        "달릴 거야 (미래형)",
        {
          "id": "verb_be92b238_future",
          "baseId": "verb_be92b238",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "毎朝、公園を走るつもりだ。",
              "hira": "はしるつもりだ",
              "pronunciation": "하시루 츠모리다",
              "meaning": "매일 아침 공원을 달릴 생각입니다."
            }
          ]
        }
      ],
      [
        "泳ぐつもりだ",
        "およぐつもりだ",
        "오요구 츠모리다",
        "수영할 거야 (미래형)",
        {
          "id": "verb_c033fc3e_future",
          "baseId": "verb_c033fc3e",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "夏は海で泳ぐつもりだ。",
              "hira": "およぐつもりだ",
              "pronunciation": "오요구 츠모리다",
              "meaning": "여름에는 바다에서 수영할 생각입니다."
            }
          ]
        }
      ],
      [
        "遊ぶつもりだ",
        "あそぶつもりだ",
        "아소부 츠모리다",
        "놀 거야 (미래형)",
        {
          "id": "verb_0a81a103_future",
          "baseId": "verb_0a81a103",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "週末に友達と遊ぶつもりだ。",
              "hira": "あそぶつもりだ",
              "pronunciation": "아소부 츠모리다",
              "meaning": "주말에 친구와 놀 생각입니다."
            }
          ]
        }
      ],
      [
        "歌うつもりだ",
        "うたうつもりだ",
        "우타우 츠모리다",
        "노래할 거야 (미래형)",
        {
          "id": "verb_9a70b818_future",
          "baseId": "verb_9a70b818",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "カラオケで好きな歌を歌うつもりだ。",
              "hira": "うたうつもりだ",
              "pronunciation": "우타우 츠모리다",
              "meaning": "노래방에서 좋아하는 노래를 부를 생각입니다."
            }
          ]
        }
      ],
      [
        "弾くつもりだ",
        "ひくつもりだ",
        "히쿠 츠모리다",
        "연주할 거야 / 칠 거야 (미래형)",
        {
          "id": "verb_354a8800_future",
          "baseId": "verb_354a8800",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "ピアノで好きな曲を弾くつもりだ。",
              "hira": "ひくつもりだ",
              "pronunciation": "히쿠 츠모리다",
              "meaning": "피아노로 좋아하는 곡을 연주할 생각입니다."
            }
          ]
        }
      ],
      [
        "送るつもりだ",
        "おくるつもりだ",
        "오쿠루 츠모리다",
        "보낼 거야 (미래형)",
        {
          "id": "verb_db6ec419_future",
          "baseId": "verb_db6ec419",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "友達に写真を送るつもりだ。",
              "hira": "おくるつもりだ",
              "pronunciation": "오쿠루 츠모리다",
              "meaning": "친구에게 사진을 보낼 생각입니다."
            }
          ]
        }
      ],
      [
        "もらうつもりだ",
        "もらうつもりだ",
        "모라우 츠모리다",
        "받을 거야 (미래형)",
        {
          "id": "verb_b893c882_future",
          "baseId": "verb_b893c882",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "友達からプレゼントをもらうつもりだ。",
              "hira": "もらうつもりだ",
              "pronunciation": "모라우 츠모리다",
              "meaning": "친구에게서 선물을 받을 생각입니다."
            }
          ]
        }
      ],
      [
        "あげるつもりだ",
        "あげるつもりだ",
        "아게루 츠모리다",
        "줄 거야 (미래형)",
        {
          "id": "verb_feb367cc_future",
          "baseId": "verb_feb367cc",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "妹に誕生日プレゼントをあげるつもりだ。",
              "hira": "あげるつもりだ",
              "pronunciation": "아게루 츠모리다",
              "meaning": "여동생에게 생일 선물을 줄 생각입니다."
            }
          ]
        }
      ],
      [
        "くれるつもりだ",
        "くれるつもりだ",
        "くれるつもりだ",
        "줄 거야 (미래형)",
        {
          "id": "verb_a98f3e33_future",
          "baseId": "verb_a98f3e33",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "友達が本をくれるつもりだ。",
              "hira": "くれるつもりだ",
              "pronunciation": "くれるつもりだ",
              "meaning": "친구가 책을 줄 생각입니다."
            }
          ]
        }
      ],
      [
        "借りるつもりだ",
        "かりるつもりだ",
        "카리루 츠모리다",
        "빌릴 거야 (미래형)",
        {
          "id": "verb_95d2b597_future",
          "baseId": "verb_95d2b597",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "図書館で本を借りるつもりだ。",
              "hira": "かりるつもりだ",
              "pronunciation": "카리루 츠모리다",
              "meaning": "도서관에서 책을 빌릴 생각입니다."
            }
          ]
        }
      ],
      [
        "貸すつもりだ",
        "かすつもりだ",
        "카스 츠모리다",
        "빌려줄 거야 (미래형)",
        {
          "id": "verb_d91a49e4_future",
          "baseId": "verb_d91a49e4",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "友達に傘を貸すつもりだ。",
              "hira": "かすつもりだ",
              "pronunciation": "카스 츠모리다",
              "meaning": "친구에게 우산을 빌려줄 생각입니다."
            }
          ]
        }
      ],
      [
        "返すつもりだ",
        "かえすつもりだ",
        "카에스 츠모리다",
        "돌려줄 거야 / 반환할 거야 (미래형)",
        {
          "id": "verb_37b69281_future",
          "baseId": "verb_37b69281",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "借りた本を図書館に返すつもりだ。",
              "hira": "かえすつもりだ",
              "pronunciation": "카에스 츠모리다",
              "meaning": "빌린 책을 도서관에 돌려줄 생각입니다."
            }
          ]
        }
      ],
      [
        "忘れるつもりだ",
        "わすれるつもりだ",
        "와스레루 츠모리다",
        "잊을 거야 (미래형)",
        {
          "id": "verb_9040ec21_future",
          "baseId": "verb_9040ec21",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "財布を家に忘れるつもりだ。",
              "hira": "わすれるつもりだ",
              "pronunciation": "와스레루 츠모리다",
              "meaning": "지갑을 집에 두고 올 생각입니다."
            }
          ]
        }
      ],
      [
        "覚えるつもりだ",
        "おぼえるつもりだ",
        "오보에루 츠모리다",
        "외울 거야 / 기억할 거야 (미래형)",
        {
          "id": "verb_e9ccbd29_future",
          "baseId": "verb_e9ccbd29",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "新しい単語を覚えるつもりだ。",
              "hira": "おぼえるつもりだ",
              "pronunciation": "오보에루 츠모리다",
              "meaning": "새로운 단어를 외울 생각입니다."
            }
          ]
        }
      ],
      [
        "知るつもりだ",
        "しるつもりだ",
        "시루 츠모리다",
        "알 거야 (미래형)",
        {
          "id": "verb_e59eecb9_future",
          "baseId": "verb_e59eecb9",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "そのニュースを知るつもりだ。",
              "hira": "しるつもりだ",
              "pronunciation": "시루 츠모리다",
              "meaning": "그 뉴스를 알게 될 예정입니다."
            }
          ]
        }
      ],
      [
        "分かるつもりだ",
        "わかるつもりだ",
        "와카루 츠모리다",
        "알 거야 / 이해할 거야 (미래형)",
        {
          "id": "verb_c3f97595_future",
          "baseId": "verb_c3f97595",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "この問題の答えが分かるつもりだ。",
              "hira": "わかるつもりだ",
              "pronunciation": "와카루 츠모리다",
              "meaning": "이 문제의 답을 알게 될 예정입니다."
            }
          ]
        }
      ],
      [
        "思うつもりだ",
        "おもうつもりだ",
        "오모우 츠모리다",
        "생각할 거야 (미래형)",
        {
          "id": "verb_5d47ba56_future",
          "baseId": "verb_5d47ba56",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "それはいい考えだと思うつもりだ。",
              "hira": "おもうつもりだ",
              "pronunciation": "오모우 츠모리다",
              "meaning": "그것은 좋은 생각이라고 생각할 예정입니다."
            }
          ]
        }
      ],
      [
        "考えるつもりだ",
        "かんがえるつもりだ",
        "칸가에루 츠모리다",
        "생각할 거야 / 고려할 거야 (미래형)",
        {
          "id": "verb_32df321f_future",
          "baseId": "verb_32df321f",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "週末の予定を考えるつもりだ。",
              "hira": "かんがえるつもりだ",
              "pronunciation": "칸가에루 츠모리다",
              "meaning": "주말 계획을 생각할 생각입니다."
            }
          ]
        }
      ],
      [
        "言うつもりだ",
        "いうつもりだ",
        "이우 츠모리다",
        "말할 거야 (미래형)",
        {
          "id": "verb_a51e57f2_future",
          "baseId": "verb_a51e57f2",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "自分の意見をはっきり言うつもりだ。",
              "hira": "いうつもりだ",
              "pronunciation": "이우 츠모리다",
              "meaning": "자신의 의견을 분명하게 말할 생각입니다."
            }
          ]
        }
      ],
      [
        "聞くつもりだ",
        "きくつもりだ",
        "키쿠 츠모리다",
        "들을 거야 / 물을 거야 (미래형)",
        {
          "id": "verb_797f8264_future",
          "baseId": "verb_797f8264",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "先生の話をよく聞くつもりだ。",
              "hira": "きくつもりだ",
              "pronunciation": "키쿠 츠모리다",
              "meaning": "선생님에게 질문할 생각입니다."
            }
          ]
        }
      ],
      [
        "答えるつもりだ",
        "こたえるつもりだ",
        "코타에루 츠모리다",
        "대답할 거야 (미래형)",
        {
          "id": "verb_b03e9e2d_future",
          "baseId": "verb_b03e9e2d",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "質問に日本語で答えるつもりだ。",
              "hira": "こたえるつもりだ",
              "pronunciation": "코타에루 츠모리다",
              "meaning": "질문에 일본어로 대답할 생각입니다."
            }
          ]
        }
      ],
      [
        "待つつもりだ",
        "まつつもりだ",
        "마츠 츠모리다",
        "기다릴 거야 (미래형)",
        {
          "id": "verb_aec76c47_future",
          "baseId": "verb_aec76c47",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "駅で友達を待つつもりだ。",
              "hira": "まつつもりだ",
              "pronunciation": "마츠 츠모리다",
              "meaning": "역에서 친구를 기다릴 생각입니다."
            }
          ]
        }
      ],
      [
        "急ぐつもりだ",
        "いそぐつもりだ",
        "이소구 츠모리다",
        "서두를 거야 (미래형)",
        {
          "id": "verb_26e8be16_future",
          "baseId": "verb_26e8be16",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "時間がないので急ぐつもりだ。",
              "hira": "いそぐつもりだ",
              "pronunciation": "이소구 츠모리다",
              "meaning": "시간이 없어서 서두를 생각입니다."
            }
          ]
        }
      ],
      [
        "入るつもりだ",
        "はいるつもりだ",
        "하이루 츠모리다",
        "들어갈 거야 (미래형)",
        {
          "id": "verb_ffa98111_future",
          "baseId": "verb_ffa98111",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "八時に会社に入るつもりだ。",
              "hira": "はいるつもりだ",
              "pronunciation": "하이루 츠모리다",
              "meaning": "8시에 회사에 들어갈 생각입니다."
            }
          ]
        }
      ],
      [
        "出るつもりだ",
        "でるつもりだ",
        "데루 츠모리다",
        "나올 거야 / 나갈 거야 (미래형)",
        {
          "id": "verb_022a74da_future",
          "baseId": "verb_022a74da",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "毎朝、七時に家を出るつもりだ。",
              "hira": "でるつもりだ",
              "pronunciation": "데루 츠모리다",
              "meaning": "매일 아침 7시에 집을 나설 생각입니다."
            }
          ]
        }
      ],
      [
        "入れるつもりだ",
        "いれるつもりだ",
        "이레루 츠모리다",
        "넣을 거야 (미래형)",
        {
          "id": "verb_8aee63b8_future",
          "baseId": "verb_8aee63b8",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "かばんに財布を入れるつもりだ。",
              "hira": "いれるつもりだ",
              "pronunciation": "이레루 츠모리다",
              "meaning": "가방에 지갑을 넣을 생각입니다."
            }
          ]
        }
      ],
      [
        "出すつもりだ",
        "だすつもりだ",
        "다스 츠모리다",
        "꺼낼 거야 / 낼 거야 (미래형)",
        {
          "id": "verb_667067d9_future",
          "baseId": "verb_667067d9",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "かばんから財布を出すつもりだ。",
              "hira": "だすつもりだ",
              "pronunciation": "다스 츠모리다",
              "meaning": "가방에서 지갑을 꺼낼 생각입니다."
            }
          ]
        }
      ],
      [
        "着るつもりだ",
        "きるつもりだ",
        "키루 츠모리다",
        "입을 거야 (미래형)",
        {
          "id": "verb_1466ca64_future",
          "baseId": "verb_1466ca64",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "寒い日はコートを着るつもりだ。",
              "hira": "きるつもりだ",
              "pronunciation": "키루 츠모리다",
              "meaning": "추운 날에는 코트를 입을 생각입니다."
            }
          ]
        }
      ],
      [
        "脱ぐつもりだ",
        "ぬぐつもりだ",
        "누구 츠모리다",
        "벗을 거야 (미래형)",
        {
          "id": "verb_a6ae45f8_future",
          "baseId": "verb_a6ae45f8",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "家に帰ったら靴を脱ぐつもりだ。",
              "hira": "ぬぐつもりだ",
              "pronunciation": "누구 츠모리다",
              "meaning": "집에 돌아오면 신발을 벗을 생각입니다."
            }
          ]
        }
      ],
      [
        "洗うつもりだ",
        "あらうつもりだ",
        "아라우 츠모리다",
        "씻을 거야 (미래형)",
        {
          "id": "verb_390ef05f_future",
          "baseId": "verb_390ef05f",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "食事の前に手を洗うつもりだ。",
              "hira": "あらうつもりだ",
              "pronunciation": "아라우 츠모리다",
              "meaning": "식사 전에 손을 씻을 생각입니다."
            }
          ]
        }
      ],
      [
        "できるつもりだ",
        "できるつもりだ",
        "できるつもりだ",
        "할 수 있을 거야 (미래형)",
        {
          "id": "verb_0f9c874c_future",
          "baseId": "verb_0f9c874c",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "今日は早く仕事ができるつもりだ。",
              "hira": "できるつもりだ",
              "pronunciation": "できるつもりだ",
              "meaning": "오늘은 일을 일찍 끝낼 수 있을 예정입니다."
            }
          ]
        }
      ],
      [
        "終えるつもりだ",
        "おえるつもりだ",
        "오에루 츠모리다",
        "끝낼 거야 (미래형)",
        {
          "id": "verb_extra_終える_future",
          "baseId": "verb_extra_終える",
          "form": "conjugation",
          "level": "N3",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "午後五時までに仕事を終えるつもりだ。",
              "hira": "おえるつもりだ",
              "pronunciation": "오에루 츠모리다",
              "meaning": "오후 5시까지 일을 끝낼 생각입니다."
            }
          ]
        }
      ],
      [
        "続けるつもりだ",
        "つづけるつもりだ",
        "츠즈케루 츠모리다",
        "계속할 거야 (미래형)",
        {
          "id": "verb_extra_続ける_future",
          "baseId": "verb_extra_続ける",
          "form": "conjugation",
          "level": "N4",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "毎日、日本語の勉強を続けるつもりだ。",
              "hira": "つづけるつもりだ",
              "pronunciation": "츠즈케루 츠모리다",
              "meaning": "매일 일본어 공부를 계속할 생각입니다."
            }
          ]
        }
      ],
      [
        "止めるつもりだ",
        "とめるつもりだ",
        "토메루 츠모리다",
        "멈출 거야 / 세울 거야 (미래형)",
        {
          "id": "verb_extra_止める_future",
          "baseId": "verb_extra_止める",
          "form": "conjugation",
          "level": "N4",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "ここに車を止めるつもりだ。",
              "hira": "とめるつもりだ",
              "pronunciation": "토메루 츠모리다",
              "meaning": "여기에 차를 세울 생각입니다."
            }
          ]
        }
      ],
      [
        "変えるつもりだ",
        "かえるつもりだ",
        "카에루 츠모리다",
        "바꿀 거야 (미래형)",
        {
          "id": "verb_extra_変える_future",
          "baseId": "verb_extra_変える",
          "form": "conjugation",
          "level": "N4",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "旅行の予定を変えるつもりだ。",
              "hira": "かえるつもりだ",
              "pronunciation": "카에루 츠모리다",
              "meaning": "여행 일정을 바꿀 생각입니다."
            }
          ]
        }
      ],
      [
        "決めるつもりだ",
        "きめるつもりだ",
        "키메루 츠모리다",
        "정할 거야 (미래형)",
        {
          "id": "verb_extra_決める_future",
          "baseId": "verb_extra_決める",
          "form": "conjugation",
          "level": "N4",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "今週中に日程を決めるつもりだ。",
              "hira": "きめるつもりだ",
              "pronunciation": "키메루 츠모리다",
              "meaning": "이번 주 안에 일정을 정할 생각입니다."
            }
          ]
        }
      ],
      [
        "選ぶつもりだ",
        "えらぶつもりだ",
        "에라부 츠모리다",
        "고를 거야 / 선택할 거야 (미래형)",
        {
          "id": "verb_extra_選ぶ_future",
          "baseId": "verb_extra_選ぶ",
          "form": "conjugation",
          "level": "N4",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "好きな色を選ぶつもりだ。",
              "hira": "えらぶつもりだ",
              "pronunciation": "에라부 츠모리다",
              "meaning": "좋아하는 색을 고를 생각입니다."
            }
          ]
        }
      ],
      [
        "探すつもりだ",
        "さがすつもりだ",
        "사가스 츠모리다",
        "찾을 거야 (미래형)",
        {
          "id": "verb_extra_探す_future",
          "baseId": "verb_extra_探す",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "駅でホテルを探すつもりだ。",
              "hira": "さがすつもりだ",
              "pronunciation": "사가스 츠모리다",
              "meaning": "역에서 호텔을 찾을 생각입니다."
            }
          ]
        }
      ],
      [
        "見つけるつもりだ",
        "みつけるつもりだ",
        "미츠케루 츠모리다",
        "찾아낼 거야 / 발견할 거야 (미래형)",
        {
          "id": "verb_extra_見つける_future",
          "baseId": "verb_extra_見つける",
          "form": "conjugation",
          "level": "N4",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "駅の近くでいい店を見つけるつもりだ。",
              "hira": "みつけるつもりだ",
              "pronunciation": "미츠케루 츠모리다",
              "meaning": "역 근처에서 좋은 가게를 찾을 생각입니다."
            }
          ]
        }
      ],
      [
        "見つかるつもりだ",
        "みつかるつもりだ",
        "미츠카루 츠모리다",
        "발견될 거야 / 찾아질 거야 (미래형)",
        {
          "id": "verb_extra_見つかる_future",
          "baseId": "verb_extra_見つかる",
          "form": "conjugation",
          "level": "N4",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "なくした鍵が見つかるつもりだ。",
              "hira": "みつかるつもりだ",
              "pronunciation": "미츠카루 츠모리다",
              "meaning": "잃어버린 열쇠를 찾게 될 예정입니다."
            }
          ]
        }
      ],
      [
        "調べるつもりだ",
        "しらべるつもりだ",
        "시라베루 츠모리다",
        "조사할 거야 / 찾아볼 거야 (미래형)",
        {
          "id": "verb_extra_調べる_future",
          "baseId": "verb_extra_調べる",
          "form": "conjugation",
          "level": "N5",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "分からない言葉を辞書で調べるつもりだ。",
              "hira": "しらべるつもりだ",
              "pronunciation": "시라베루 츠모리다",
              "meaning": "모르는 단어를 사전에서 찾아볼 생각입니다."
            }
          ]
        }
      ],
      [
        "決まるつもりだ",
        "きまるつもりだ",
        "키마루 츠모리다",
        "정해질 거야 (미래형)",
        {
          "id": "verb_extra_決まる_future",
          "baseId": "verb_extra_決まる",
          "form": "conjugation",
          "level": "N4",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "来月の予定が決まるつもりだ。",
              "hira": "きまるつもりだ",
              "pronunciation": "키마루 츠모리다",
              "meaning": "다음 달 일정이 정해질 예정입니다."
            }
          ]
        }
      ],
      [
        "比べるつもりだ",
        "くらべるつもりだ",
        "쿠라베루 츠모리다",
        "비교할 거야 (미래형)",
        {
          "id": "verb_extra_比べる_future",
          "baseId": "verb_extra_比べる",
          "form": "conjugation",
          "level": "N4",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "二つの商品を比べるつもりだ。",
              "hira": "くらべるつもりだ",
              "pronunciation": "쿠라베루 츠모리다",
              "meaning": "두 상품을 비교할 생각입니다."
            }
          ]
        }
      ],
      [
        "受けるつもりだ",
        "うけるつもりだ",
        "우케루 츠모리다",
        "받을 거야 / 응시할 거야 (미래형)",
        {
          "id": "verb_extra_受ける_future",
          "baseId": "verb_extra_受ける",
          "form": "conjugation",
          "level": "N4",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "来月、日本語の試験を受けるつもりだ。",
              "hira": "うけるつもりだ",
              "pronunciation": "우케루 츠모리다",
              "meaning": "다음 달 일본어 시험을 볼 생각입니다."
            }
          ]
        }
      ],
      [
        "申し込むつもりだ",
        "もうしこむつもりだ",
        "모오시코무 츠모리다",
        "신청할 거야 (미래형)",
        {
          "id": "verb_extra_申し込む_future",
          "baseId": "verb_extra_申し込む",
          "form": "conjugation",
          "level": "N3",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "オンラインで講座に申し込むつもりだ。",
              "hira": "もうしこむつもりだ",
              "pronunciation": "모오시코무 츠모리다",
              "meaning": "온라인으로 강좌를 신청할 생각입니다."
            }
          ]
        }
      ],
      [
        "予約するつもりだ",
        "よやくするつもりだ",
        "요야쿠 스루 츠모리다",
        "예약할 거야 (미래형)",
        {
          "id": "verb_extra_予約する_future",
          "baseId": "verb_extra_予約する",
          "form": "conjugation",
          "level": "N4",
          "meta": {
            "verbGroup": "3그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "ホテルをインターネットで予約するつもりだ。",
              "hira": "よやくするつもりだ",
              "pronunciation": "요야쿠 스루 츠모리다",
              "meaning": "호텔을 인터넷으로 예약할 생각입니다."
            }
          ]
        }
      ],
      [
        "確認するつもりだ",
        "かくにんするつもりだ",
        "카쿠닌 스루 츠모리다",
        "확인할 거야 (미래형)",
        {
          "id": "verb_extra_確認する_future",
          "baseId": "verb_extra_確認する",
          "form": "conjugation",
          "level": "N3",
          "meta": {
            "verbGroup": "3그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "出発時間を確認するつもりだ。",
              "hira": "かくにんするつもりだ",
              "pronunciation": "카쿠닌 스루 츠모리다",
              "meaning": "출발 시간을 확인할 생각입니다."
            }
          ]
        }
      ],
      [
        "連絡するつもりだ",
        "れんらくするつもりだ",
        "렌라쿠 스루 츠모리다",
        "연락할 거야 (미래형)",
        {
          "id": "verb_extra_連絡する_future",
          "baseId": "verb_extra_連絡する",
          "form": "conjugation",
          "level": "N3",
          "meta": {
            "verbGroup": "3그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "着いたら連絡するつもりだ。",
              "hira": "れんらくするつもりだ",
              "pronunciation": "렌라쿠 스루 츠모리다",
              "meaning": "도착하면 연락할 생각입니다."
            }
          ]
        }
      ],
      [
        "説明するつもりだ",
        "せつめいするつもりだ",
        "세츠메이 스루 츠모리다",
        "설명할 거야 (미래형)",
        {
          "id": "verb_extra_説明する_future",
          "baseId": "verb_extra_説明する",
          "form": "conjugation",
          "level": "N3",
          "meta": {
            "verbGroup": "3그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "先生が文法を説明するつもりだ。",
              "hira": "せつめいするつもりだ",
              "pronunciation": "세츠메이 스루 츠모리다",
              "meaning": "선생님이 문법을 설명할 생각입니다."
            }
          ]
        }
      ],
      [
        "準備するつもりだ",
        "じゅんびするつもりだ",
        "준비 스루 츠모리다",
        "준비할 거야 (미래형)",
        {
          "id": "verb_extra_準備する_future",
          "baseId": "verb_extra_準備する",
          "form": "conjugation",
          "level": "N4",
          "meta": {
            "verbGroup": "3그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "旅行の準備をするつもりだ。",
              "hira": "じゅんびするつもりだ",
              "pronunciation": "준비 스루 츠모리다",
              "meaning": "여행 준비를 할 생각입니다."
            }
          ]
        }
      ],
      [
        "片付けるつもりだ",
        "かたづけるつもりだ",
        "카타즈케루 츠모리다",
        "정리할 거야 / 치울 거야 (미래형)",
        {
          "id": "verb_extra_片付ける_future",
          "baseId": "verb_extra_片付ける",
          "form": "conjugation",
          "level": "N4",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "食事の後で部屋を片付けるつもりだ。",
              "hira": "かたづけるつもりだ",
              "pronunciation": "카타즈케루 츠모리다",
              "meaning": "식사 후에 방을 정리할 생각입니다."
            }
          ]
        }
      ],
      [
        "洗濯するつもりだ",
        "せんたくするつもりだ",
        "센타쿠 스루 츠모리다",
        "세탁할 거야 (미래형)",
        {
          "id": "verb_extra_洗濯する_future",
          "baseId": "verb_extra_洗濯する",
          "form": "conjugation",
          "level": "N4",
          "meta": {
            "verbGroup": "3그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "土曜日に洗濯するつもりだ。",
              "hira": "せんたくするつもりだ",
              "pronunciation": "센타쿠 스루 츠모리다",
              "meaning": "토요일에 빨래할 생각입니다."
            }
          ]
        }
      ],
      [
        "出発するつもりだ",
        "しゅっぱつするつもりだ",
        "슛파츠 스루 츠모리다",
        "출발할 거야 (미래형)",
        {
          "id": "verb_extra_出発する_future",
          "baseId": "verb_extra_出発する",
          "form": "conjugation",
          "level": "N4",
          "meta": {
            "verbGroup": "3그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "朝八時に東京を出発するつもりだ。",
              "hira": "しゅっぱつするつもりだ",
              "pronunciation": "슛파츠 스루 츠모리다",
              "meaning": "아침 8시에 도쿄를 출발할 생각입니다."
            }
          ]
        }
      ],
      [
        "到着するつもりだ",
        "とうちゃくするつもりだ",
        "토오차쿠 스루 츠모리다",
        "도착할 거야 (미래형)",
        {
          "id": "verb_extra_到着する_future",
          "baseId": "verb_extra_到着する",
          "form": "conjugation",
          "level": "N3",
          "meta": {
            "verbGroup": "3그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "午後三時に京都に到着するつもりだ。",
              "hira": "とうちゃくするつもりだ",
              "pronunciation": "토오차쿠 스루 츠모리다",
              "meaning": "오후 3시에 교토에 도착할 예정입니다."
            }
          ]
        }
      ],
      [
        "利用するつもりだ",
        "りようするつもりだ",
        "리요오 스루 츠모리다",
        "이용할 거야 (미래형)",
        {
          "id": "verb_extra_利用する_future",
          "baseId": "verb_extra_利用する",
          "form": "conjugation",
          "level": "N3",
          "meta": {
            "verbGroup": "3그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "旅行中はこのサービスを利用するつもりだ。",
              "hira": "りようするつもりだ",
              "pronunciation": "리요오 스루 츠모리다",
              "meaning": "여행 중에는 이 서비스를 이용할 생각입니다."
            }
          ]
        }
      ],
      [
        "運ぶつもりだ",
        "はこぶつもりだ",
        "하코부 츠모리다",
        "나를 거야 / 운반할 거야 (미래형)",
        {
          "id": "verb_c2486c41e6_future",
          "level": "N4",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "荷物を部屋まで運ぶつもりだ。",
              "hira": "はこぶつもりだ",
              "pronunciation": "하코부 츠모리다",
              "meaning": "짐을 방까지 나를 생각입니다."
            }
          ],
          "baseId": "verb_c2486c41e6",
          "form": "conjugation"
        }
      ],
      [
        "売るつもりだ",
        "うるつもりだ",
        "우루 츠모리다",
        "팔 거야 (미래형)",
        {
          "id": "verb_ec51fc2e16_future",
          "level": "N4",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "使わなくなった本を売るつもりだ。",
              "hira": "うるつもりだ",
              "pronunciation": "우루 츠모리다",
              "meaning": "더 이상 사용하지 않는 책을 팔 생각입니다."
            }
          ],
          "baseId": "verb_ec51fc2e16",
          "form": "conjugation"
        }
      ],
      [
        "消すつもりだ",
        "けすつもりだ",
        "케스 츠모리다",
        "끌 거야 / 지울 거야 (미래형)",
        {
          "id": "verb_df2b3a6397_future",
          "level": "N4",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "寝る前に電気を消すつもりだ。",
              "hira": "けすつもりだ",
              "pronunciation": "케스 츠모리다",
              "meaning": "자기 전에 불을 끌 생각입니다."
            }
          ],
          "baseId": "verb_df2b3a6397",
          "form": "conjugation"
        }
      ],
      [
        "押すつもりだ",
        "おすつもりだ",
        "오스 츠모리다",
        "누를 거야 / 밀 거야 (미래형)",
        {
          "id": "verb_30038e39f3_future",
          "level": "N4",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "このボタンを押すつもりだ。",
              "hira": "おすつもりだ",
              "pronunciation": "오스 츠모리다",
              "meaning": "이 버튼을 누를 생각입니다."
            }
          ],
          "baseId": "verb_30038e39f3",
          "form": "conjugation"
        }
      ],
      [
        "引くつもりだ",
        "ひくつもりだ",
        "히쿠 츠모리다",
        "당길 거야 / 끌 거야 (미래형)",
        {
          "id": "verb_371c196bcb_future",
          "level": "N4",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "ドアを手前に引くつもりだ。",
              "hira": "ひくつもりだ",
              "pronunciation": "히쿠 츠모리다",
              "meaning": "문을 자기 쪽으로 당길 생각입니다."
            }
          ],
          "baseId": "verb_371c196bcb",
          "form": "conjugation"
        }
      ],
      [
        "拾うつもりだ",
        "ひろうつもりだ",
        "히로우 츠모리다",
        "주울 거야 (미래형)",
        {
          "id": "verb_d404351530_future",
          "level": "N4",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "道で財布を拾うつもりだ。",
              "hira": "ひろうつもりだ",
              "pronunciation": "히로우 츠모리다",
              "meaning": "길에서 지갑을 주울 생각입니다."
            }
          ],
          "baseId": "verb_d404351530",
          "form": "conjugation"
        }
      ],
      [
        "捨てるつもりだ",
        "すてるつもりだ",
        "스테루 츠모리다",
        "버릴 거야 (미래형)",
        {
          "id": "verb_e720775ac7_future",
          "level": "N4",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "古い服を捨てるつもりだ。",
              "hira": "すてるつもりだ",
              "pronunciation": "스테루 츠모리다",
              "meaning": "낡은 옷을 버릴 생각입니다."
            }
          ],
          "baseId": "verb_e720775ac7",
          "form": "conjugation"
        }
      ],
      [
        "集めるつもりだ",
        "あつめるつもりだ",
        "아츠메루 츠모리다",
        "모을 거야 (미래형)",
        {
          "id": "verb_0a49f1e34a_future",
          "level": "N4",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "旅行の情報を集めるつもりだ。",
              "hira": "あつめるつもりだ",
              "pronunciation": "아츠메루 츠모리다",
              "meaning": "여행 정보를 모을 생각입니다."
            }
          ],
          "baseId": "verb_0a49f1e34a",
          "form": "conjugation"
        }
      ],
      [
        "直すつもりだ",
        "なおすつもりだ",
        "나오스 츠모리다",
        "고칠 거야 / 수리할 거야 (미래형)",
        {
          "id": "verb_442e7ec90b_future",
          "level": "N4",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "間違いを直すつもりだ。",
              "hira": "なおすつもりだ",
              "pronunciation": "나오스 츠모리다",
              "meaning": "틀린 부분을 고칠 생각입니다."
            }
          ],
          "baseId": "verb_442e7ec90b",
          "form": "conjugation"
        }
      ],
      [
        "直るつもりだ",
        "なおるつもりだ",
        "나오루 츠모리다",
        "고쳐질 거야 / 나을 거야 (미래형)",
        {
          "id": "verb_1f8de4ba37_future",
          "level": "N4",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "壊れていた時計が直るつもりだ。",
              "hira": "なおるつもりだ",
              "pronunciation": "나오루 츠모리다",
              "meaning": "고장 났던 시계가 고쳐질 예정입니다."
            }
          ],
          "baseId": "verb_1f8de4ba37",
          "form": "conjugation"
        }
      ],
      [
        "壊すつもりだ",
        "こわすつもりだ",
        "코와스 츠모리다",
        "망가뜨릴 거야 / 고장 낼 거야 (미래형)",
        {
          "id": "verb_4160686f0d_future",
          "level": "N4",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "타동사"
          },
          "examples": [
            {
              "jp": "子どもがおもちゃを壊すつもりだ。",
              "hira": "こわすつもりだ",
              "pronunciation": "코와스 츠모리다",
              "meaning": "아이가 장난감을 망가뜨릴 생각입니다."
            }
          ],
          "baseId": "verb_4160686f0d",
          "form": "conjugation"
        }
      ],
      [
        "壊れるつもりだ",
        "こわれるつもりだ",
        "코와레루 츠모리다",
        "망가질 거야 / 고장 날 거야 (미래형)",
        {
          "id": "verb_c34da08306_future",
          "level": "N4",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "古いパソコンが壊れるつもりだ。",
              "hira": "こわれるつもりだ",
              "pronunciation": "코와레루 츠모리다",
              "meaning": "오래된 컴퓨터가 고장 날 예정입니다."
            }
          ],
          "baseId": "verb_c34da08306",
          "form": "conjugation"
        }
      ],
      [
        "遅れるつもりだ",
        "おくれるつもりだ",
        "오쿠레루 츠모리다",
        "늦을 거야 / 늦어질 거야 (미래형)",
        {
          "id": "verb_89aa88ff42_future",
          "level": "N4",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "電車が十分ほど遅れるつもりだ。",
              "hira": "おくれるつもりだ",
              "pronunciation": "오쿠레루 츠모리다",
              "meaning": "전철이 10분 정도 늦을 예정입니다."
            }
          ],
          "baseId": "verb_89aa88ff42",
          "form": "conjugation"
        }
      ],
      [
        "間に合うつもりだ",
        "まにあうつもりだ",
        "마니아우 츠모리다",
        "시간에 맞을 거야 (미래형)",
        {
          "id": "verb_28940f5774_future",
          "level": "N4",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "急げば八時の電車に間に合うつもりだ。",
              "hira": "まにあうつもりだ",
              "pronunciation": "마니아우 츠모리다",
              "meaning": "서두르면 8시 전철에 늦지 않게 탈 수 있을 것입니다."
            }
          ],
          "baseId": "verb_28940f5774",
          "form": "conjugation"
        }
      ],
      [
        "参加するつもりだ",
        "さんかするつもりだ",
        "산카스루 츠모리다",
        "참가할 거야 (미래형)",
        {
          "id": "verb_f8da0bc1c2_future",
          "level": "N4",
          "meta": {
            "verbGroup": "3그룹",
            "transitivity": "자동사"
          },
          "examples": [
            {
              "jp": "明日の会議に参加するつもりだ。",
              "hira": "さんかするつもりだ",
              "pronunciation": "산카스루 츠모리다",
              "meaning": "내일 회의에 참가할 생각입니다."
            }
          ],
          "baseId": "verb_f8da0bc1c2",
          "form": "conjugation"
        }
      ],
      [
        "止まるつもりだ",
        "とまるつもりだ",
        "토마루",
        "멈추다할 생각이다",
        {
          "id": "verb_extra_1_future",
          "baseId": "verb_extra_1",
          "form": "conjugation",
          "level": "N4",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "自動詞"
          },
          "examples": [
            {
              "jp": "次の駅で止まるつもりです。",
              "hira": "つぎのえきでとまるつもりです。",
              "pronunciation": "츠기노 에키데 토마루 츠모리데스",
              "meaning": "다음 역에서 멈출 생각입니다."
            }
          ]
        }
      ],
      [
        "呼ぶつもりだ",
        "よぶつもりだ",
        "요부",
        "부르다할 생각이다",
        {
          "id": "verb_extra_2_future",
          "baseId": "verb_extra_2",
          "form": "conjugation",
          "level": "N4",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "他動詞"
          },
          "examples": [
            {
              "jp": "必要なら後で呼ぶつもりです。",
              "hira": "ひつようならあとでよぶつもりです。",
              "pronunciation": "히츠요오나라 아토데 요부 츠모리데스",
              "meaning": "필요하면 나중에 부를 생각입니다."
            }
          ]
        }
      ],
      [
        "泊まるつもりだ",
        "とまるつもりだ",
        "토마루",
        "묵다 / 숙박하다할 생각이다",
        {
          "id": "verb_extra_3_future",
          "baseId": "verb_extra_3",
          "form": "conjugation",
          "level": "N4",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "自動詞"
          },
          "examples": [
            {
              "jp": "次の旅行では温泉旅館に泊まるつもりです。",
              "hira": "つぎのりょこうではおんせんりょかんにとまるつもりです。",
              "pronunciation": "츠기노 료코오데와 온센료칸니 토마루 츠모리데스",
              "meaning": "다음 여행에서는 온천 료칸에 묵을 생각입니다."
            }
          ]
        }
      ],
      [
        "着くつもりだ",
        "つくつもりだ",
        "츠쿠",
        "도착하다할 생각이다",
        {
          "id": "verb_extra_4_future",
          "baseId": "verb_extra_4",
          "form": "conjugation",
          "level": "N4",
          "meta": {
            "verbGroup": "1그룹",
            "transitivity": "自動詞"
          },
          "examples": [
            {
              "jp": "明日の朝、早く空港に着くつもりです。",
              "hira": "あしたのあさ、はやくくうこうにつくつもりです。",
              "pronunciation": "아시타노 아사, 하야쿠 쿠우코오니 츠쿠 츠모리데스",
              "meaning": "내일 아침 일찍 공항에 도착할 생각입니다."
            }
          ]
        }
      ],
      [
        "乗り換えるつもりだ",
        "のりかえるつもりだ",
        "노리카에루",
        "갈아타다할 생각이다",
        {
          "id": "verb_extra_5_future",
          "baseId": "verb_extra_5",
          "form": "conjugation",
          "level": "N4",
          "meta": {
            "verbGroup": "2그룹",
            "transitivity": "自動詞"
          },
          "examples": [
            {
              "jp": "次の駅で地下鉄に乗り換えるつもりです。",
              "hira": "つぎのえきでちかてつにのりかえるつもりです。",
              "pronunciation": "츠기노 에키데 치카테츠니 노리카에루 츠모리데스",
              "meaning": "다음 역에서 지하철로 갈아탈 생각입니다."
            }
          ]
        }
      ]
    ]
  },
  "명사": {
    "학교": [
      [
        "学校",
        "がっこう",
        "각코오",
        "학교",
        {
          "id": "noun_gakkou",
          "level": "N5",
          "examples": [
            {
              "jp": "学校へ行きます。",
              "hira": "がっこうへいきます。",
              "pronunciation": "각코오에 이키마스",
              "meaning": "학교에 갑니다."
            }
          ]
        }
      ],
      [
        "授業",
        "じゅぎょう",
        "주교오",
        "수업",
        {
          "id": "noun_15582",
          "form": "noun",
          "level": "N5",
          "meta": {
            "partOfSpeech": "명사"
          },
          "examples": [
            {
              "jp": "これは授業です。",
              "hira": "これはじゅぎょうです。",
              "pronunciation": "주교오",
              "meaning": "이것은 수업입니다."
            }
          ]
        }
      ],
      [
        "教室",
        "きょうしつ",
        "쿄오시츠",
        "교실",
        {
          "id": "noun_27413",
          "form": "noun",
          "level": "N5",
          "meta": {
            "partOfSpeech": "명사"
          },
          "examples": [
            {
              "jp": "これは教室です。",
              "hira": "これはきょうしつです。",
              "pronunciation": "쿄오시츠",
              "meaning": "이것은 교실입니다."
            }
          ]
        }
      ],
      [
        "宿題",
        "しゅくだい",
        "슈쿠다이",
        "숙제",
        {
          "id": "noun_28516",
          "form": "noun",
          "level": "N5",
          "meta": {
            "partOfSpeech": "명사"
          },
          "examples": [
            {
              "jp": "これは宿題です。",
              "hira": "これはしゅくだいです。",
              "pronunciation": "슈쿠다이",
              "meaning": "이것은 숙제입니다."
            }
          ]
        }
      ],
      [
        "試験",
        "しけん",
        "시켄",
        "시험",
        {
          "id": "noun_86460",
          "form": "noun",
          "level": "N5",
          "meta": {
            "partOfSpeech": "명사"
          },
          "examples": [
            {
              "jp": "これは試験です。",
              "hira": "これはしけんです。",
              "pronunciation": "시켄",
              "meaning": "이것은 시험입니다."
            }
          ]
        }
      ],
      [
        "質問",
        "しつもん",
        "시츠몬",
        "질문",
        {
          "id": "noun_14939",
          "form": "noun",
          "level": "N5",
          "meta": {
            "partOfSpeech": "명사"
          },
          "examples": [
            {
              "jp": "これは質問です。",
              "hira": "これはしつもんです。",
              "pronunciation": "시츠몬",
              "meaning": "이것은 질문입니다."
            }
          ]
        }
      ],
      [
        "答え",
        "こたえ",
        "코타에",
        "대답 / 답",
        {
          "id": "noun_76162",
          "form": "noun",
          "level": "N5",
          "meta": {
            "partOfSpeech": "명사"
          },
          "examples": [
            {
              "jp": "これは答えです。",
              "hira": "これはこたえです。",
              "pronunciation": "코타에",
              "meaning": "이것은 대답 / 답입니다."
            }
          ]
        }
      ],
      [
        "先生",
        "せんせい",
        "센세이",
        "선생님",
        {
          "id": "noun_64205",
          "form": "noun",
          "level": "N5",
          "meta": {
            "partOfSpeech": "명사"
          },
          "examples": [
            {
              "jp": "これは先生です。",
              "hira": "これはせんせいです。",
              "pronunciation": "센세이",
              "meaning": "이것은 선생님입니다."
            }
          ]
        }
      ],
      [
        "学生",
        "がくせい",
        "각세이",
        "학생",
        {
          "id": "noun_44487",
          "form": "noun",
          "level": "N5",
          "meta": {
            "partOfSpeech": "명사"
          },
          "examples": [
            {
              "jp": "これは学生です。",
              "hira": "これはがくせいです。",
              "pronunciation": "각세이",
              "meaning": "이것은 학생입니다."
            }
          ]
        }
      ],
      [
        "大学",
        "だいがく",
        "다이가쿠",
        "대학교",
        {
          "id": "noun_77642",
          "form": "noun",
          "level": "N5",
          "meta": {
            "partOfSpeech": "명사"
          },
          "examples": [
            {
              "jp": "これは大学です。",
              "hira": "これはだいがくです。",
              "pronunciation": "다이가쿠",
              "meaning": "이것은 대학교입니다."
            }
          ]
        }
      ],
      [
        "高校",
        "こうこう",
        "코오코오",
        "고등학교",
        {
          "id": "noun_27697",
          "form": "noun",
          "level": "N5",
          "meta": {
            "partOfSpeech": "명사"
          },
          "examples": [
            {
              "jp": "これは高校です。",
              "hira": "これはこうこうです。",
              "pronunciation": "코오코오",
              "meaning": "이것은 고등학교입니다."
            }
          ]
        }
      ]
    ],
    "사람": [
      [
        "友達",
        "ともだち",
        "토모다치",
        "친구",
        {
          "id": "noun_tomodachi",
          "level": "N5",
          "examples": [
            {
              "jp": "友達と話します。",
              "hira": "ともだちとはなします。",
              "pronunciation": "토모다치토 하나시마스",
              "meaning": "친구와 이야기합니다."
            }
          ]
        }
      ],
      [
        "家族",
        "かぞく",
        "카조쿠",
        "가족",
        {
          "id": "noun_71543",
          "form": "noun",
          "level": "N5",
          "meta": {
            "partOfSpeech": "명사"
          },
          "examples": [
            {
              "jp": "これは家族です。",
              "hira": "これはかぞくです。",
              "pronunciation": "카조쿠",
              "meaning": "이것은 가족입니다."
            }
          ]
        }
      ],
      [
        "父親",
        "ちちおや",
        "치치오야",
        "아버지",
        {
          "id": "noun_23411",
          "form": "noun",
          "level": "N5",
          "meta": {
            "partOfSpeech": "명사"
          },
          "examples": [
            {
              "jp": "これは父親です。",
              "hira": "これはちちおやです。",
              "pronunciation": "치치오야",
              "meaning": "이것은 아버지입니다."
            }
          ]
        }
      ],
      [
        "母親",
        "ははおや",
        "하하오야",
        "어머니",
        {
          "id": "noun_84494",
          "form": "noun",
          "level": "N5",
          "meta": {
            "partOfSpeech": "명사"
          },
          "examples": [
            {
              "jp": "これは母親です。",
              "hira": "これはははおやです。",
              "pronunciation": "하하오야",
              "meaning": "이것은 어머니입니다."
            }
          ]
        }
      ],
      [
        "兄",
        "あに",
        "아니",
        "형 / 오빠 / 남동생이 말하는 형",
        {
          "id": "noun_9579",
          "form": "noun",
          "level": "N5",
          "meta": {
            "partOfSpeech": "명사"
          },
          "examples": [
            {
              "jp": "これは兄です。",
              "hira": "これはあにです。",
              "pronunciation": "아니",
              "meaning": "이것은 형 / 오빠 / 남동생이 말하는 형입니다."
            }
          ]
        }
      ],
      [
        "姉",
        "あね",
        "아네",
        "누나 / 언니 / 동생이 말하는 누나",
        {
          "id": "noun_7346",
          "form": "noun",
          "level": "N5",
          "meta": {
            "partOfSpeech": "명사"
          },
          "examples": [
            {
              "jp": "これは姉です。",
              "hira": "これはあねです。",
              "pronunciation": "아네",
              "meaning": "이것은 누나 / 언니 / 동생이 말하는 누나입니다."
            }
          ]
        }
      ],
      [
        "弟",
        "おとうと",
        "오토오토",
        "남동생",
        {
          "id": "noun_22001",
          "form": "noun",
          "level": "N5",
          "meta": {
            "partOfSpeech": "명사"
          },
          "examples": [
            {
              "jp": "これは弟です。",
              "hira": "これはおとうとです。",
              "pronunciation": "오토오토",
              "meaning": "이것은 남동생입니다."
            }
          ]
        }
      ],
      [
        "妹",
        "いもうと",
        "이모오토",
        "여동생",
        {
          "id": "noun_88333",
          "form": "noun",
          "level": "N5",
          "meta": {
            "partOfSpeech": "명사"
          },
          "examples": [
            {
              "jp": "これは妹です。",
              "hira": "これはいもうとです。",
              "pronunciation": "이모오토",
              "meaning": "이것은 여동생입니다."
            }
          ]
        }
      ],
      [
        "子ども",
        "こども",
        "코도모",
        "아이",
        {
          "id": "noun_92249",
          "form": "noun",
          "level": "N5",
          "meta": {
            "partOfSpeech": "명사"
          },
          "examples": [
            {
              "jp": "これは子どもです。",
              "hira": "これはこどもです。",
              "pronunciation": "코도모",
              "meaning": "이것은 아이입니다."
            }
          ]
        }
      ],
      [
        "大人",
        "おとな",
        "오토나",
        "어른",
        {
          "id": "noun_72374",
          "form": "noun",
          "level": "N5",
          "meta": {
            "partOfSpeech": "명사"
          },
          "examples": [
            {
              "jp": "これは大人です。",
              "hira": "これはおとなです。",
              "pronunciation": "오토나",
              "meaning": "이것은 어른입니다."
            }
          ]
        }
      ],
      [
        "客",
        "きゃく",
        "캬쿠",
        "손님",
        {
          "id": "noun_34651",
          "form": "noun",
          "level": "N5",
          "meta": {
            "partOfSpeech": "명사"
          },
          "examples": [
            {
              "jp": "これは客です。",
              "hira": "これはきゃくです。",
              "pronunciation": "캬쿠",
              "meaning": "이것은 손님입니다."
            }
          ]
        }
      ],
      [
        "店員",
        "てんいん",
        "텐인",
        "점원",
        {
          "id": "noun_23184",
          "form": "noun",
          "level": "N5",
          "meta": {
            "partOfSpeech": "명사"
          },
          "examples": [
            {
              "jp": "これは店員です。",
              "hira": "これはてんいんです。",
              "pronunciation": "텐인",
              "meaning": "이것은 점원입니다."
            }
          ]
        }
      ],
      [
        "会社員",
        "かいしゃいん",
        "카이샤인",
        "회사원",
        {
          "id": "noun_72967",
          "form": "noun",
          "level": "N5",
          "meta": {
            "partOfSpeech": "명사"
          },
          "examples": [
            {
              "jp": "これは会社員です。",
              "hira": "これはかいしゃいんです。",
              "pronunciation": "카이샤인",
              "meaning": "이것은 회사원입니다."
            }
          ]
        }
      ],
      [
        "医者",
        "いしゃ",
        "이샤",
        "의사",
        {
          "id": "noun_50091",
          "form": "noun",
          "level": "N5",
          "meta": {
            "partOfSpeech": "명사"
          },
          "examples": [
            {
              "jp": "これは医者です。",
              "hira": "これはいしゃです。",
              "pronunciation": "이샤",
              "meaning": "이것은 의사입니다."
            }
          ]
        }
      ],
      [
        "看護師",
        "かんごし",
        "칸고시",
        "간호사",
        {
          "id": "noun_28181",
          "form": "noun",
          "level": "N5",
          "meta": {
            "partOfSpeech": "명사"
          },
          "examples": [
            {
              "jp": "これは看護師です。",
              "hira": "これはかんごしです。",
              "pronunciation": "칸고시",
              "meaning": "이것은 간호사입니다."
            }
          ]
        }
      ]
    ],
    "집·생활": [
      [
        "家",
        "いえ",
        "이에",
        "집",
        {
          "id": "noun_ie",
          "level": "N5",
          "examples": [
            {
              "jp": "家に帰ります。",
              "hira": "いえにかえります。",
              "pronunciation": "이에니 카에리마스",
              "meaning": "집에 돌아갑니다."
            }
          ]
        }
      ],
      [
        "部屋",
        "へや",
        "헤야",
        "방",
        {
          "id": "noun_78439",
          "form": "noun",
          "level": "N5",
          "meta": {
            "partOfSpeech": "명사"
          },
          "examples": [
            {
              "jp": "これは部屋です。",
              "hira": "これはへやです。",
              "pronunciation": "헤야",
              "meaning": "이것은 방입니다."
            }
          ]
        }
      ],
      [
        "台所",
        "だいどころ",
        "다이도코로",
        "부엌",
        {
          "id": "noun_5484",
          "form": "noun",
          "level": "N5",
          "meta": {
            "partOfSpeech": "명사"
          },
          "examples": [
            {
              "jp": "これは台所です。",
              "hira": "これはだいどころです。",
              "pronunciation": "다이도코로",
              "meaning": "이것은 부엌입니다."
            }
          ]
        }
      ],
      [
        "玄関",
        "げんかん",
        "겐칸",
        "현관",
        {
          "id": "noun_6520",
          "form": "noun",
          "level": "N5",
          "meta": {
            "partOfSpeech": "명사"
          },
          "examples": [
            {
              "jp": "これは玄関です。",
              "hira": "これはげんかんです。",
              "pronunciation": "겐칸",
              "meaning": "이것은 현관입니다."
            }
          ]
        }
      ],
      [
        "窓",
        "まど",
        "마도",
        "창문",
        {
          "id": "noun_8332",
          "form": "noun",
          "level": "N5",
          "meta": {
            "partOfSpeech": "명사"
          },
          "examples": [
            {
              "jp": "これは窓です。",
              "hira": "これはまどです。",
              "pronunciation": "마도",
              "meaning": "이것은 창문입니다."
            }
          ]
        }
      ],
      [
        "壁",
        "かべ",
        "카베",
        "벽",
        {
          "id": "noun_56674",
          "form": "noun",
          "level": "N5",
          "meta": {
            "partOfSpeech": "명사"
          },
          "examples": [
            {
              "jp": "これは壁です。",
              "hira": "これはかべです。",
              "pronunciation": "카베",
              "meaning": "이것은 벽입니다."
            }
          ]
        }
      ],
      [
        "床",
        "ゆか",
        "유카",
        "바닥",
        {
          "id": "noun_87683",
          "form": "noun",
          "level": "N5",
          "meta": {
            "partOfSpeech": "명사"
          },
          "examples": [
            {
              "jp": "これは床です。",
              "hira": "これはゆかです。",
              "pronunciation": "유카",
              "meaning": "이것은 바닥입니다."
            }
          ]
        }
      ],
      [
        "机",
        "つくえ",
        "츠쿠에",
        "책상",
        {
          "id": "noun_2971",
          "form": "noun",
          "level": "N5",
          "meta": {
            "partOfSpeech": "명사"
          },
          "examples": [
            {
              "jp": "これは机です。",
              "hira": "これはつくえです。",
              "pronunciation": "츠쿠에",
              "meaning": "이것은 책상입니다."
            }
          ]
        }
      ],
      [
        "椅子",
        "いす",
        "이스",
        "의자",
        {
          "id": "noun_98255",
          "form": "noun",
          "level": "N5",
          "meta": {
            "partOfSpeech": "명사"
          },
          "examples": [
            {
              "jp": "これは椅子です。",
              "hira": "これはいすです。",
              "pronunciation": "이스",
              "meaning": "이것은 의자입니다."
            }
          ]
        }
      ],
      [
        "冷蔵庫",
        "れいぞうこ",
        "레이조오코",
        "냉장고",
        {
          "id": "noun_81913",
          "form": "noun",
          "level": "N5",
          "meta": {
            "partOfSpeech": "명사"
          },
          "examples": [
            {
              "jp": "これは冷蔵庫です。",
              "hira": "これはれいぞうこです。",
              "pronunciation": "레이조오코",
              "meaning": "이것은 냉장고입니다."
            }
          ]
        }
      ],
      [
        "洗濯機",
        "せんたくき",
        "센타쿠키",
        "세탁기",
        {
          "id": "noun_77045",
          "form": "noun",
          "level": "N5",
          "meta": {
            "partOfSpeech": "명사"
          },
          "examples": [
            {
              "jp": "これは洗濯機です。",
              "hira": "これはせんたくきです。",
              "pronunciation": "센타쿠키",
              "meaning": "이것은 세탁기입니다."
            }
          ]
        }
      ],
      [
        "電気",
        "でんき",
        "덴키",
        "전기 / 불",
        {
          "id": "noun_24228",
          "form": "noun",
          "level": "N5",
          "meta": {
            "partOfSpeech": "명사"
          },
          "examples": [
            {
              "jp": "これは電気です。",
              "hira": "これはでんきです。",
              "pronunciation": "덴키",
              "meaning": "이것은 전기 / 불입니다."
            }
          ]
        }
      ],
      [
        "鍵",
        "かぎ",
        "카기",
        "열쇠",
        {
          "id": "noun_1647",
          "form": "noun",
          "level": "N5",
          "meta": {
            "partOfSpeech": "명사"
          },
          "examples": [
            {
              "jp": "これは鍵です。",
              "hira": "これはかぎです。",
              "pronunciation": "카기",
              "meaning": "이것은 열쇠입니다."
            }
          ]
        }
      ],
      [
        "財布",
        "さいふ",
        "사이후",
        "지갑",
        {
          "id": "noun_65270",
          "form": "noun",
          "level": "N5",
          "meta": {
            "partOfSpeech": "명사"
          },
          "examples": [
            {
              "jp": "これは財布です。",
              "hira": "これはさいふです。",
              "pronunciation": "사이후",
              "meaning": "이것은 지갑입니다."
            }
          ]
        }
      ],
      [
        "傘",
        "かさ",
        "카사",
        "우산",
        {
          "id": "noun_3306",
          "form": "noun",
          "level": "N5",
          "meta": {
            "partOfSpeech": "명사"
          },
          "examples": [
            {
              "jp": "これは傘です。",
              "hira": "これはかさです。",
              "pronunciation": "카사",
              "meaning": "이것은 우산입니다."
            }
          ]
        }
      ],
      [
        "時計",
        "とけい",
        "토케이",
        "시계",
        {
          "id": "noun_16608",
          "form": "noun",
          "level": "N5",
          "meta": {
            "partOfSpeech": "명사"
          },
          "examples": [
            {
              "jp": "これは時計です。",
              "hira": "これはとけいです。",
              "pronunciation": "토케이",
              "meaning": "이것은 시계입니다."
            }
          ]
        }
      ]
    ],
    "음식·음료": [
      [
        "水",
        "みず",
        "미즈",
        "물",
        {
          "id": "noun_mizu",
          "level": "N5",
          "examples": [
            {
              "jp": "水を飲みます。",
              "hira": "みずをのみます。",
              "pronunciation": "미즈오 노미마스",
              "meaning": "물을 마십니다."
            }
          ]
        }
      ],
      [
        "ご飯",
        "ごはん",
        "고항",
        "밥 / 식사",
        {
          "id": "noun_gohan",
          "level": "N5",
          "examples": [
            {
              "jp": "ご飯を食べます。",
              "hira": "ごはんをたべます。",
              "pronunciation": "고항오 타베마스",
              "meaning": "밥을 먹습니다."
            }
          ]
        }
      ],
      [
        "朝ご飯",
        "あさごはん",
        "아사고항",
        "아침밥",
        {
          "id": "noun_38278",
          "form": "noun",
          "level": "N5",
          "meta": {
            "partOfSpeech": "명사"
          },
          "examples": [
            {
              "jp": "これは朝ご飯です。",
              "hira": "これはあさごはんです。",
              "pronunciation": "아사고항",
              "meaning": "이것은 아침밥입니다."
            }
          ]
        }
      ],
      [
        "昼ご飯",
        "ひるごはん",
        "히루고항",
        "점심밥",
        {
          "id": "noun_7188",
          "form": "noun",
          "level": "N5",
          "meta": {
            "partOfSpeech": "명사"
          },
          "examples": [
            {
              "jp": "これは昼ご飯です。",
              "hira": "これはひるごはんです。",
              "pronunciation": "히루고항",
              "meaning": "이것은 점심밥입니다."
            }
          ]
        }
      ],
      [
        "晩ご飯",
        "ばんごはん",
        "반고항",
        "저녁밥",
        {
          "id": "noun_92318",
          "form": "noun",
          "level": "N5",
          "meta": {
            "partOfSpeech": "명사"
          },
          "examples": [
            {
              "jp": "これは晩ご飯です。",
              "hira": "これはばんごはんです。",
              "pronunciation": "반고항",
              "meaning": "이것은 저녁밥입니다."
            }
          ]
        }
      ],
      [
        "お茶",
        "おちゃ",
        "오차",
        "차",
        {
          "id": "noun_32678",
          "form": "noun",
          "level": "N5",
          "meta": {
            "partOfSpeech": "명사"
          },
          "examples": [
            {
              "jp": "これはお茶です。",
              "hira": "これはおちゃです。",
              "pronunciation": "오차",
              "meaning": "이것은 차입니다."
            }
          ]
        }
      ],
      [
        "牛乳",
        "ぎゅうにゅう",
        "규우뉴우",
        "우유",
        {
          "id": "noun_66381",
          "form": "noun",
          "level": "N5",
          "meta": {
            "partOfSpeech": "명사"
          },
          "examples": [
            {
              "jp": "これは牛乳です。",
              "hira": "これはぎゅうにゅうです。",
              "pronunciation": "규우뉴우",
              "meaning": "이것은 우유입니다."
            }
          ]
        }
      ],
      [
        "肉",
        "にく",
        "니쿠",
        "고기",
        {
          "id": "noun_19761",
          "form": "noun",
          "level": "N5",
          "meta": {
            "partOfSpeech": "명사"
          },
          "examples": [
            {
              "jp": "これは肉です。",
              "hira": "これはにくです。",
              "pronunciation": "니쿠",
              "meaning": "이것은 고기입니다."
            }
          ]
        }
      ],
      [
        "魚",
        "さかな",
        "사카나",
        "생선 / 물고기",
        {
          "id": "noun_43404",
          "form": "noun",
          "level": "N5",
          "meta": {
            "partOfSpeech": "명사"
          },
          "examples": [
            {
              "jp": "これは魚です。",
              "hira": "これはさかなです。",
              "pronunciation": "사카나",
              "meaning": "이것은 생선 / 물고기입니다."
            }
          ]
        }
      ],
      [
        "野菜",
        "やさい",
        "야사이",
        "채소",
        {
          "id": "noun_27961",
          "form": "noun",
          "level": "N5",
          "meta": {
            "partOfSpeech": "명사"
          },
          "examples": [
            {
              "jp": "これは野菜です。",
              "hira": "これはやさいです。",
              "pronunciation": "야사이",
              "meaning": "이것은 채소입니다."
            }
          ]
        }
      ],
      [
        "果物",
        "くだもの",
        "쿠다모노",
        "과일",
        {
          "id": "noun_24099",
          "form": "noun",
          "level": "N5",
          "meta": {
            "partOfSpeech": "명사"
          },
          "examples": [
            {
              "jp": "これは果物です。",
              "hira": "これはくだものです。",
              "pronunciation": "쿠다모노",
              "meaning": "이것은 과일입니다."
            }
          ]
        }
      ],
      [
        "料理",
        "りょうり",
        "료오리",
        "요리",
        {
          "id": "noun_96873",
          "form": "noun",
          "level": "N5",
          "meta": {
            "partOfSpeech": "명사"
          },
          "examples": [
            {
              "jp": "これは料理です。",
              "hira": "これはりょうりです。",
              "pronunciation": "료오리",
              "meaning": "이것은 요리입니다."
            }
          ]
        }
      ],
      [
        "味",
        "あじ",
        "아지",
        "맛",
        {
          "id": "noun_55857",
          "form": "noun",
          "level": "N5",
          "meta": {
            "partOfSpeech": "명사"
          },
          "examples": [
            {
              "jp": "これは味です。",
              "hira": "これはあじです。",
              "pronunciation": "아지",
              "meaning": "이것은 맛입니다."
            }
          ]
        }
      ],
      [
        "砂糖",
        "さとう",
        "사토오",
        "설탕",
        {
          "id": "noun_62040",
          "form": "noun",
          "level": "N5",
          "meta": {
            "partOfSpeech": "명사"
          },
          "examples": [
            {
              "jp": "これは砂糖です。",
              "hira": "これはさとうです。",
              "pronunciation": "사토오",
              "meaning": "이것은 설탕입니다."
            }
          ]
        }
      ],
      [
        "塩",
        "しお",
        "시오",
        "소금",
        {
          "id": "noun_99730",
          "form": "noun",
          "level": "N5",
          "meta": {
            "partOfSpeech": "명사"
          },
          "examples": [
            {
              "jp": "これは塩です。",
              "hira": "これはしおです。",
              "pronunciation": "시오",
              "meaning": "이것은 소금입니다."
            }
          ]
        }
      ],
      [
        "箸",
        "はし",
        "하시",
        "젓가락",
        {
          "id": "noun_31132",
          "form": "noun",
          "level": "N5",
          "meta": {
            "partOfSpeech": "명사"
          },
          "examples": [
            {
              "jp": "これは箸です。",
              "hira": "これははしです。",
              "pronunciation": "하시",
              "meaning": "이것은 젓가락입니다."
            }
          ]
        }
      ],
      [
        "皿",
        "さら",
        "사라",
        "접시",
        {
          "id": "noun_34224",
          "form": "noun",
          "level": "N5",
          "meta": {
            "partOfSpeech": "명사"
          },
          "examples": [
            {
              "jp": "これは皿です。",
              "hira": "これはさらです。",
              "pronunciation": "사라",
              "meaning": "이것은 접시입니다."
            }
          ]
        }
      ],
      [
        "弁当",
        "べんとう",
        "벤토오",
        "도시락",
        {
          "id": "noun_53288",
          "form": "noun",
          "level": "N5",
          "meta": {
            "partOfSpeech": "명사"
          },
          "examples": [
            {
              "jp": "これは弁当です。",
              "hira": "これはべんとうです。",
              "pronunciation": "벤토오",
              "meaning": "이것은 도시락입니다."
            }
          ]
        }
      ]
    ],
    "교통": [
      [
        "駅",
        "えき",
        "에키",
        "역",
        {
          "id": "noun_add_교통_0",
          "level": "N5",
          "examples": [
            {
              "jp": "駅で友達を待ちます。",
              "hira": "えきでともだちをまちます",
              "pronunciation": "에키데 토모다치오 마치마스",
              "meaning": "역에서 친구를 기다립니다."
            }
          ]
        }
      ],
      [
        "電車",
        "でんしゃ",
        "덴샤",
        "전철",
        {
          "id": "noun_add_교통_1",
          "level": "N5",
          "examples": [
            {
              "jp": "電車に乗ります。",
              "hira": "でんしゃにのります",
              "pronunciation": "덴샤니 노리마스",
              "meaning": "전철을 탑니다."
            }
          ]
        }
      ],
      [
        "地下鉄",
        "ちかてつ",
        "치카테츠",
        "지하철",
        {
          "id": "noun_add_교통_2",
          "level": "N5",
          "examples": [
            {
              "jp": "地下鉄で行きます。",
              "hira": "ちかてつでいきます",
              "pronunciation": "치카테츠데 이키마스",
              "meaning": "지하철로 갑니다."
            }
          ]
        }
      ],
      [
        "バス",
        "ばす",
        "바스",
        "버스",
        {
          "id": "noun_add_교통_3",
          "level": "N5",
          "examples": [
            {
              "jp": "バスに乗ります。",
              "hira": "ばすにのります",
              "pronunciation": "바스니 노리마스",
              "meaning": "버스를 탑니다."
            }
          ]
        }
      ],
      [
        "タクシー",
        "たくしー",
        "타쿠시이",
        "택시",
        {
          "id": "noun_add_교통_4",
          "level": "N5",
          "examples": [
            {
              "jp": "タクシーを呼びます。",
              "hira": "たくしーをよびます",
              "pronunciation": "타쿠시이오 요비마스",
              "meaning": "택시를 부릅니다."
            }
          ]
        }
      ],
      [
        "空港",
        "くうこう",
        "쿠우코오",
        "공항",
        {
          "id": "noun_add_교통_5",
          "level": "N5",
          "examples": [
            {
              "jp": "空港へ行きます。",
              "hira": "くうこうへいきます",
              "pronunciation": "쿠우코오에 이키마스",
              "meaning": "공항에 갑니다."
            }
          ]
        }
      ]
    ],
    "직장": [
      [
        "会社",
        "かいしゃ",
        "카이샤",
        "회사",
        {
          "id": "noun_kaisha",
          "level": "N5",
          "examples": [
            {
              "jp": "会社へ行きます。",
              "hira": "かいしゃへいきます。",
              "pronunciation": "카이샤에 이키마스",
              "meaning": "회사에 갑니다."
            }
          ]
        }
      ],
      [
        "仕事",
        "しごと",
        "시고토",
        "일 / 직업",
        {
          "id": "noun_98214",
          "form": "noun",
          "level": "N5",
          "meta": {
            "partOfSpeech": "명사"
          },
          "examples": [
            {
              "jp": "これは仕事です。",
              "hira": "これはしごとです。",
              "pronunciation": "시고토",
              "meaning": "이것은 일 / 직업입니다."
            }
          ]
        }
      ],
      [
        "会議",
        "かいぎ",
        "카이기",
        "회의",
        {
          "id": "noun_3052",
          "form": "noun",
          "level": "N5",
          "meta": {
            "partOfSpeech": "명사"
          },
          "examples": [
            {
              "jp": "これは会議です。",
              "hira": "これはかいぎです。",
              "pronunciation": "카이기",
              "meaning": "이것은 회의입니다."
            }
          ]
        }
      ],
      [
        "予定",
        "よてい",
        "요테이",
        "예정 / 일정",
        {
          "id": "noun_7126",
          "form": "noun",
          "level": "N5",
          "meta": {
            "partOfSpeech": "명사"
          },
          "examples": [
            {
              "jp": "これは予定です。",
              "hira": "これはよていです。",
              "pronunciation": "요테이",
              "meaning": "이것은 예정 / 일정입니다."
            }
          ]
        }
      ],
      [
        "資料",
        "しりょう",
        "시료오",
        "자료",
        {
          "id": "noun_40438",
          "form": "noun",
          "level": "N5",
          "meta": {
            "partOfSpeech": "명사"
          },
          "examples": [
            {
              "jp": "これは資料です。",
              "hira": "これはしりょうです。",
              "pronunciation": "시료오",
              "meaning": "이것은 자료입니다."
            }
          ]
        }
      ],
      [
        "電話",
        "でんわ",
        "덴와",
        "전화",
        {
          "id": "noun_14777",
          "form": "noun",
          "level": "N5",
          "meta": {
            "partOfSpeech": "명사"
          },
          "examples": [
            {
              "jp": "これは電話です。",
              "hira": "これはでんわです。",
              "pronunciation": "덴와",
              "meaning": "이것은 전화입니다."
            }
          ]
        }
      ],
      [
        "メール",
        "めーる",
        "메에루",
        "이메일",
        {
          "id": "noun_10951",
          "form": "noun",
          "level": "N5",
          "meta": {
            "partOfSpeech": "명사"
          },
          "examples": [
            {
              "jp": "これはメールです。",
              "hira": "これはめーるです。",
              "pronunciation": "메에루",
              "meaning": "이것은 이메일입니다."
            }
          ]
        }
      ],
      [
        "名前",
        "なまえ",
        "나마에",
        "이름",
        {
          "id": "noun_86259",
          "form": "noun",
          "level": "N5",
          "meta": {
            "partOfSpeech": "명사"
          },
          "examples": [
            {
              "jp": "これは名前です。",
              "hira": "これはなまえです。",
              "pronunciation": "나마에",
              "meaning": "이것은 이름입니다."
            }
          ]
        }
      ],
      [
        "住所",
        "じゅうしょ",
        "주우쇼",
        "주소",
        {
          "id": "noun_31966",
          "form": "noun",
          "level": "N5",
          "meta": {
            "partOfSpeech": "명사"
          },
          "examples": [
            {
              "jp": "これは住所です。",
              "hira": "これはじゅうしょです。",
              "pronunciation": "주우쇼",
              "meaning": "이것은 주소입니다."
            }
          ]
        }
      ],
      [
        "受付",
        "うけつけ",
        "우케츠케",
        "접수처 / 접수",
        {
          "id": "noun_521",
          "form": "noun",
          "level": "N5",
          "meta": {
            "partOfSpeech": "명사"
          },
          "examples": [
            {
              "jp": "これは受付です。",
              "hira": "これはうけつけです。",
              "pronunciation": "우케츠케",
              "meaning": "이것은 접수처 / 접수입니다."
            }
          ]
        }
      ]
    ],
    "시간·날짜": [
      [
        "今日",
        "きょう",
        "쿄오",
        "오늘",
        {
          "id": "noun_add_시간·날짜_0",
          "level": "N5",
          "examples": [
            {
              "jp": "今日は休みです。",
              "hira": "きょうはやすみです",
              "pronunciation": "쿄오와 야스미데스",
              "meaning": "오늘은 쉽니다."
            }
          ]
        }
      ],
      [
        "明日",
        "あした",
        "아시타",
        "내일",
        {
          "id": "noun_add_시간·날짜_1",
          "level": "N5",
          "examples": [
            {
              "jp": "明日会いましょう。",
              "hira": "あしたあいましょう",
              "pronunciation": "아시타 아이마쇼오",
              "meaning": "내일 만나요."
            }
          ]
        }
      ],
      [
        "昨日",
        "きのう",
        "키노오",
        "어제",
        {
          "id": "noun_add_시간·날짜_2",
          "level": "N5",
          "examples": [
            {
              "jp": "昨日勉強しました。",
              "hira": "きのうべんきょうしました",
              "pronunciation": "키노오 벤쿄오 시마시타",
              "meaning": "어제 공부했습니다."
            }
          ]
        }
      ],
      [
        "週末",
        "しゅうまつ",
        "슈우마츠",
        "주말",
        {
          "id": "noun_add_시간·날짜_3",
          "level": "N5",
          "examples": [
            {
              "jp": "週末は休みです。",
              "hira": "しゅうまつはやすみです",
              "pronunciation": "슈우마츠와 야스미데스",
              "meaning": "주말은 쉽니다."
            }
          ]
        }
      ],
      [
        "朝",
        "あさ",
        "아사",
        "아침",
        {
          "id": "noun_add_시간·날짜_4",
          "level": "N5",
          "examples": [
            {
              "jp": "朝ご飯を食べます。",
              "hira": "あさごはんをたべます",
              "pronunciation": "아사고항오 타베마스",
              "meaning": "아침밥을 먹습니다."
            }
          ]
        }
      ]
    ],
    "날씨·환경": [
      [
        "天気",
        "てんき",
        "텐키",
        "날씨",
        {
          "id": "noun_tenki",
          "level": "N5",
          "examples": [
            {
              "jp": "今日は天気がいいです。",
              "hira": "きょうはてんきがいいです。",
              "pronunciation": "쿄오와 텐키가 이이데스",
              "meaning": "오늘은 날씨가 좋습니다."
            }
          ]
        }
      ],
      [
        "雨",
        "あめ",
        "아메",
        "비",
        {
          "id": "noun_ame",
          "level": "N5",
          "examples": [
            {
              "jp": "雨が降っています。",
              "hira": "あめがふっています。",
              "pronunciation": "아메가 훗테이마스",
              "meaning": "비가 내리고 있습니다."
            }
          ]
        }
      ],
      [
        "空",
        "そら",
        "소라",
        "하늘",
        {
          "id": "noun_75983",
          "form": "noun",
          "level": "N5",
          "meta": {
            "partOfSpeech": "명사"
          },
          "examples": [
            {
              "jp": "これは空です。",
              "hira": "これはそらです。",
              "pronunciation": "소라",
              "meaning": "이것은 하늘입니다."
            }
          ]
        }
      ],
      [
        "雲",
        "くも",
        "쿠모",
        "구름",
        {
          "id": "noun_84006",
          "form": "noun",
          "level": "N5",
          "meta": {
            "partOfSpeech": "명사"
          },
          "examples": [
            {
              "jp": "これは雲です。",
              "hira": "これはくもです。",
              "pronunciation": "쿠모",
              "meaning": "이것은 구름입니다."
            }
          ]
        }
      ],
      [
        "雪",
        "ゆき",
        "유키",
        "눈",
        {
          "id": "noun_58831",
          "form": "noun",
          "level": "N5",
          "meta": {
            "partOfSpeech": "명사"
          },
          "examples": [
            {
              "jp": "これは雪です。",
              "hira": "これはゆきです。",
              "pronunciation": "유키",
              "meaning": "이것은 눈입니다."
            }
          ]
        }
      ],
      [
        "風",
        "かぜ",
        "카제",
        "바람",
        {
          "id": "noun_15657",
          "form": "noun",
          "level": "N5",
          "meta": {
            "partOfSpeech": "명사"
          },
          "examples": [
            {
              "jp": "これは風です。",
              "hira": "これはかぜです。",
              "pronunciation": "카제",
              "meaning": "이것은 바람입니다."
            }
          ]
        }
      ],
      [
        "台風",
        "たいふう",
        "타이후우",
        "태풍",
        {
          "id": "noun_99637",
          "form": "noun",
          "level": "N5",
          "meta": {
            "partOfSpeech": "명사"
          },
          "examples": [
            {
              "jp": "これは台風です。",
              "hira": "これはたいふうです。",
              "pronunciation": "타이후우",
              "meaning": "이것은 태풍입니다."
            }
          ]
        }
      ],
      [
        "季節",
        "きせつ",
        "키세츠",
        "계절",
        {
          "id": "noun_59201",
          "form": "noun",
          "level": "N5",
          "meta": {
            "partOfSpeech": "명사"
          },
          "examples": [
            {
              "jp": "これは季節です。",
              "hira": "これはきせつです。",
              "pronunciation": "키세츠",
              "meaning": "이것은 계절입니다."
            }
          ]
        }
      ],
      [
        "春",
        "はる",
        "하루",
        "봄",
        {
          "id": "noun_44954",
          "form": "noun",
          "level": "N5",
          "meta": {
            "partOfSpeech": "명사"
          },
          "examples": [
            {
              "jp": "これは春です。",
              "hira": "これははるです。",
              "pronunciation": "하루",
              "meaning": "이것은 봄입니다."
            }
          ]
        }
      ],
      [
        "夏",
        "なつ",
        "나츠",
        "여름",
        {
          "id": "noun_37441",
          "form": "noun",
          "level": "N5",
          "meta": {
            "partOfSpeech": "명사"
          },
          "examples": [
            {
              "jp": "これは夏です。",
              "hira": "これはなつです。",
              "pronunciation": "나츠",
              "meaning": "이것은 여름입니다."
            }
          ]
        }
      ],
      [
        "秋",
        "あき",
        "아키",
        "가을",
        {
          "id": "noun_9056",
          "form": "noun",
          "level": "N5",
          "meta": {
            "partOfSpeech": "명사"
          },
          "examples": [
            {
              "jp": "これは秋です。",
              "hira": "これはあきです。",
              "pronunciation": "아키",
              "meaning": "이것은 가을입니다."
            }
          ]
        }
      ],
      [
        "冬",
        "ふゆ",
        "후유",
        "겨울",
        {
          "id": "noun_95462",
          "form": "noun",
          "level": "N5",
          "meta": {
            "partOfSpeech": "명사"
          },
          "examples": [
            {
              "jp": "これは冬です。",
              "hira": "これはふゆです。",
              "pronunciation": "후유",
              "meaning": "이것은 겨울입니다."
            }
          ]
        }
      ],
      [
        "気温",
        "きおん",
        "키온",
        "기온",
        {
          "id": "noun_58328",
          "form": "noun",
          "level": "N5",
          "meta": {
            "partOfSpeech": "명사"
          },
          "examples": [
            {
              "jp": "これは気温です。",
              "hira": "これはきおんです。",
              "pronunciation": "키온",
              "meaning": "이것은 기온입니다."
            }
          ]
        }
      ]
    ],
    "여행": [
      [
        "旅行",
        "りょこう",
        "료코오",
        "여행",
        {
          "id": "noun_add_여행_0",
          "level": "N5",
          "examples": [
            {
              "jp": "来月旅行します。",
              "hira": "らいげつりょこうします",
              "pronunciation": "라이게츠 료코오 시마스",
              "meaning": "다음 달에 여행합니다."
            }
          ]
        }
      ],
      [
        "ホテル",
        "ほてる",
        "호테루",
        "호텔",
        {
          "id": "noun_add_여행_1",
          "level": "N5",
          "examples": [
            {
              "jp": "ホテルを予約しました。",
              "hira": "ほてるをよやくしました",
              "pronunciation": "호테루오 요야쿠 시마시타",
              "meaning": "호텔을 예약했습니다."
            }
          ]
        }
      ],
      [
        "予約",
        "よやく",
        "요야쿠",
        "예약",
        {
          "id": "noun_add_여행_2",
          "level": "N5",
          "examples": [
            {
              "jp": "予約があります。",
              "hira": "よやくがあります",
              "pronunciation": "요야쿠가 아리마스",
              "meaning": "예약이 있습니다."
            }
          ]
        }
      ],
      [
        "荷物",
        "にもつ",
        "니모츠",
        "짐",
        {
          "id": "noun_add_여행_3",
          "level": "N5",
          "examples": [
            {
              "jp": "荷物を持ちます。",
              "hira": "にもつをもちます",
              "pronunciation": "니모츠오 모치마스",
              "meaning": "짐을 듭니다."
            }
          ]
        }
      ]
    ],
    "쇼핑": [
      [
        "店",
        "みせ",
        "미세",
        "가게",
        {
          "id": "noun_add_쇼핑_0",
          "level": "N5",
          "examples": [
            {
              "jp": "この店は安いです。",
              "hira": "このみせはやすいです",
              "pronunciation": "코노 미세와 야스이데스",
              "meaning": "이 가게는 쌉니다."
            }
          ]
        }
      ],
      [
        "値段",
        "ねだん",
        "네단",
        "가격",
        {
          "id": "noun_add_쇼핑_1",
          "level": "N5",
          "examples": [
            {
              "jp": "値段を見ます。",
              "hira": "ねだんをみます",
              "pronunciation": "네단오 미마스",
              "meaning": "가격을 봅니다."
            }
          ]
        }
      ],
      [
        "商品",
        "しょうひん",
        "쇼오힌",
        "상품",
        {
          "id": "noun_add_쇼핑_2",
          "level": "N5",
          "examples": [
            {
              "jp": "商品を確認します。",
              "hira": "しょうひんをかくにんします",
              "pronunciation": "쇼오힌오 카쿠닌 시마스",
              "meaning": "상품을 확인합니다."
            }
          ]
        }
      ],
      [
        "買い物",
        "かいもの",
        "카이모노",
        "쇼핑",
        {
          "id": "noun_add_쇼핑_3",
          "level": "N5",
          "examples": [
            {
              "jp": "週末に買い物します。",
              "hira": "しゅうまつにかいものします",
              "pronunciation": "슈우마츠니 카이모노 시마스",
              "meaning": "주말에 쇼핑합니다."
            }
          ]
        }
      ]
    ],
    "건강·신체": [
      [
        "病院",
        "びょういん",
        "뵤오인",
        "병원",
        {
          "id": "noun_add_건강·신체_0",
          "level": "N5",
          "examples": [
            {
              "jp": "病院へ行きます。",
              "hira": "びょういんへいきます",
              "pronunciation": "뵤오인에 이키마스",
              "meaning": "병원에 갑니다."
            }
          ]
        }
      ],
      [
        "薬",
        "くすり",
        "쿠스리",
        "약",
        {
          "id": "noun_add_건강·신체_1",
          "level": "N5",
          "examples": [
            {
              "jp": "薬を飲みます。",
              "hira": "くすりをのみます",
              "pronunciation": "쿠스리오 노미마스",
              "meaning": "약을 먹습니다."
            }
          ]
        }
      ],
      [
        "頭",
        "あたま",
        "아타마",
        "머리",
        {
          "id": "noun_add_건강·신체_2",
          "level": "N5",
          "examples": [
            {
              "jp": "頭が痛いです。",
              "hira": "あたまがいたいです",
              "pronunciation": "아타마가 이타이데스",
              "meaning": "머리가 아픕니다."
            }
          ]
        }
      ],
      [
        "手",
        "て",
        "테",
        "손",
        {
          "id": "noun_add_건강·신체_3",
          "level": "N5",
          "examples": [
            {
              "jp": "手を洗います。",
              "hira": "てをあらいます",
              "pronunciation": "테오 아라이마스",
              "meaning": "손을 씻습니다."
            }
          ]
        }
      ],
      [
        "足",
        "あし",
        "아시",
        "발 / 다리",
        {
          "id": "noun_add_건강·신체_4",
          "level": "N5",
          "examples": [
            {
              "jp": "足が痛いです。",
              "hira": "あしがいたいです",
              "pronunciation": "아시가 이타이데스",
              "meaning": "발이 아픕니다."
            }
          ]
        }
      ]
    ],
    "자연·날씨": [
      [
        "晴れ",
        "はれ",
        "하레",
        "맑음",
        {
          "id": "noun_add_자연·날씨_1",
          "level": "N5",
          "examples": [
            {
              "jp": "明日は晴れです。",
              "hira": "あしたははれです",
              "pronunciation": "아시타와 하레데스",
              "meaning": "내일은 맑습니다."
            }
          ]
        }
      ],
      [
        "曇り",
        "くもり",
        "쿠모리",
        "흐림",
        {
          "id": "noun_add_자연·날씨_2",
          "level": "N5",
          "examples": [
            {
              "jp": "今日は曇りです。",
              "hira": "きょうはくもりです",
              "pronunciation": "쿄오와 쿠모리데스",
              "meaning": "오늘은 흐립니다."
            }
          ]
        }
      ]
    ],
    "학교·교육": [
      [
        "大学生",
        "だいがくせい",
        "다이가쿠세이",
        "대학생",
        {
          "id": "noun_add_118281f9",
          "level": "N5",
          "examples": [
            {
              "jp": "兄は大学生です。",
              "hira": "あにはだいがくせいです。",
              "pronunciation": "아니와 다이가쿠세이데스",
              "meaning": "형은 대학생입니다."
            }
          ]
        }
      ]
    ],
    "가족·관계": [
      [
        "両親",
        "りょうしん",
        "료오신",
        "부모님",
        {
          "id": "noun_add_f2c17cd7",
          "level": "N5",
          "examples": [
            {
              "jp": "両親は元気です。",
              "hira": "りょうしんはげんきです。",
              "pronunciation": "료오신와 겐키데스",
              "meaning": "부모님은 건강하십니다."
            }
          ]
        }
      ],
      [
        "恋人",
        "こいびと",
        "코이비토",
        "연인",
        {
          "id": "noun_add_e4b6f2fc",
          "level": "N5",
          "examples": [
            {
              "jp": "恋人にプレゼントを買いました。",
              "hira": "こいびとにぷれぜんとをかいました。",
              "pronunciation": "코이비토니 푸레젠토오 카이마시타",
              "meaning": "연인에게 선물을 샀습니다."
            }
          ]
        }
      ],
      [
        "友人",
        "ゆうじん",
        "유우진",
        "친구 / 지인",
        {
          "id": "noun_add_d0c720a6",
          "level": "N5",
          "examples": [
            {
              "jp": "友人と旅行に行きます。",
              "hira": "ゆうじんとりょこうにいきます。",
              "pronunciation": "유우진토 료코오니 이키마스",
              "meaning": "친구와 여행을 갑니다."
            }
          ]
        }
      ]
    ],
    "전자기기": [
      [
        "携帯電話",
        "けいたいでんわ",
        "케이타이 덴와",
        "휴대전화",
        {
          "id": "noun_add_b3a36d76",
          "level": "N5",
          "examples": [
            {
              "jp": "携帯電話を充電します。",
              "hira": "けいたいでんわをじゅうでんします。",
              "pronunciation": "케이타이 덴와오 주우덴시마스",
              "meaning": "휴대전화를 충전합니다."
            }
          ]
        }
      ],
      [
        "スマートフォン",
        "すまーとふぉん",
        "스마아토폰",
        "스마트폰",
        {
          "id": "noun_add_c5e00aec",
          "level": "N5",
          "examples": [
            {
              "jp": "スマートフォンで写真を撮ります。",
              "hira": "すまーとふぉんでしゃしんをとります。",
              "pronunciation": "스마아토폰데 샤신오 토리마스",
              "meaning": "스마트폰으로 사진을 찍습니다."
            }
          ]
        }
      ],
      [
        "パソコン",
        "ぱそこん",
        "파소콘",
        "컴퓨터",
        {
          "id": "noun_add_82cd5d9b",
          "level": "N5",
          "examples": [
            {
              "jp": "パソコンで仕事をします。",
              "hira": "ぱそこんでしごとをします。",
              "pronunciation": "파소콘데 시고토오 시마스",
              "meaning": "컴퓨터로 일을 합니다."
            }
          ]
        }
      ],
      [
        "画面",
        "がめん",
        "가멘",
        "화면",
        {
          "id": "noun_add_d11e19e1",
          "level": "N5",
          "examples": [
            {
              "jp": "画面を見てください。",
              "hira": "がめんをみてください。",
              "pronunciation": "가멘오 미테 쿠다사이",
              "meaning": "화면을 봐 주세요."
            }
          ]
        }
      ],
      [
        "写真",
        "しゃしん",
        "샤신",
        "사진",
        {
          "id": "noun_add_94a82949",
          "level": "N5",
          "examples": [
            {
              "jp": "旅行の写真を見せます。",
              "hira": "りょこうのしゃしんをみせます。",
              "pronunciation": "료코오노 샤신오 미세마스",
              "meaning": "여행 사진을 보여 드립니다."
            }
          ]
        }
      ],
      [
        "充電器",
        "じゅうでんき",
        "주우덴키",
        "충전기",
        {
          "id": "noun_add_3846b303",
          "level": "N5",
          "examples": [
            {
              "jp": "充電器を持っていますか。",
              "hira": "じゅうでんきをもっていますか。",
              "pronunciation": "주우덴키오 못테이마스카",
              "meaning": "충전기를 가지고 있나요?"
            }
          ]
        }
      ]
    ],
    "취미·여가": [
      [
        "映画",
        "えいが",
        "에이가",
        "영화",
        {
          "id": "noun_add_9f7d09e7",
          "level": "N5",
          "examples": [
            {
              "jp": "週末に映画を見ます。",
              "hira": "しゅうまつにえいがをみます。",
              "pronunciation": "슈우마츠니 에이가오 미마스",
              "meaning": "주말에 영화를 봅니다."
            }
          ]
        }
      ],
      [
        "音楽",
        "おんがく",
        "온가쿠",
        "음악",
        {
          "id": "noun_add_4b26e69e",
          "level": "N5",
          "examples": [
            {
              "jp": "音楽を聞きながら歩きます。",
              "hira": "おんがくをききながらあるきます。",
              "pronunciation": "온가쿠오 키키나가라 아루키마스",
              "meaning": "음악을 들으면서 걷습니다."
            }
          ]
        }
      ],
      [
        "写真撮影",
        "しゃしんさつえい",
        "샤신 사츠에이",
        "사진 촬영",
        {
          "id": "noun_add_cf34ec10",
          "level": "N5",
          "examples": [
            {
              "jp": "写真撮影が趣味です。",
              "hira": "しゃしんさつえいがしゅみです。",
              "pronunciation": "샤신 사츠에이가 슈미데스",
              "meaning": "사진 촬영이 취미입니다."
            }
          ]
        }
      ],
      [
        "趣味",
        "しゅみ",
        "슈미",
        "취미",
        {
          "id": "noun_add_14244d15",
          "level": "N5",
          "examples": [
            {
              "jp": "趣味は何ですか。",
              "hira": "しゅみはなんですか。",
              "pronunciation": "슈미와 난데스카",
              "meaning": "취미가 무엇인가요?"
            }
          ]
        }
      ],
      [
        "散歩",
        "さんぽ",
        "산포",
        "산책",
        {
          "id": "noun_add_a2b96567",
          "level": "N5",
          "examples": [
            {
              "jp": "毎朝、散歩をします。",
              "hira": "まいあさ、さんぽをします。",
              "pronunciation": "마이아사 산포오 시마스",
              "meaning": "매일 아침 산책을 합니다."
            }
          ]
        }
      ],
      [
        "公園",
        "こうえん",
        "코오엔",
        "공원",
        {
          "id": "noun_add_d563728d",
          "level": "N5",
          "examples": [
            {
              "jp": "公園で散歩しました。",
              "hira": "こうえんでさんぽしました。",
              "pronunciation": "코오엔데 산포시마시타",
              "meaning": "공원에서 산책했습니다."
            }
          ]
        }
      ]
    ],
    "도시·시설": [
      [
        "銀行",
        "ぎんこう",
        "긴코오",
        "은행",
        {
          "id": "noun_add_deff338c",
          "level": "N5",
          "examples": [
            {
              "jp": "銀行でお金を下ろします。",
              "hira": "ぎんこうでおかねをおろします。",
              "pronunciation": "긴코오데 오카네오 오로시마스",
              "meaning": "은행에서 돈을 찾습니다."
            }
          ]
        }
      ],
      [
        "郵便局",
        "ゆうびんきょく",
        "유우빈쿄쿠",
        "우체국",
        {
          "id": "noun_add_329b1085",
          "level": "N5",
          "examples": [
            {
              "jp": "郵便局から荷物を送ります。",
              "hira": "ゆうびんきょくからにもつをおくります。",
              "pronunciation": "유우빈쿄쿠카라 니모츠오 오쿠리마스",
              "meaning": "우체국에서 짐을 보냅니다."
            }
          ]
        }
      ],
      [
        "薬局",
        "やっきょく",
        "약쿄쿠",
        "약국",
        {
          "id": "noun_add_557c774c",
          "level": "N5",
          "examples": [
            {
              "jp": "薬局は駅の近くです。",
              "hira": "やっきょくはえきのちかくです。",
              "pronunciation": "약쿄쿠와 에키노 치카쿠데스",
              "meaning": "약국은 역 근처에 있습니다."
            }
          ]
        }
      ],
      [
        "交番",
        "こうばん",
        "코오반",
        "파출소",
        {
          "id": "noun_add_22322c80",
          "level": "N5",
          "examples": [
            {
              "jp": "交番で道を聞きました。",
              "hira": "こうばんでみちをききました。",
              "pronunciation": "코오반데 미치오 키키마시타",
              "meaning": "파출소에서 길을 물었습니다."
            }
          ]
        }
      ],
      [
        "図書館",
        "としょかん",
        "토쇼칸",
        "도서관",
        {
          "id": "noun_add_cc9bb021",
          "level": "N5",
          "examples": [
            {
              "jp": "図書館で本を借ります。",
              "hira": "としょかんでほんをかります。",
              "pronunciation": "토쇼칸데 혼오 카리마스",
              "meaning": "도서관에서 책을 빌립니다."
            }
          ]
        }
      ],
      [
        "市役所",
        "しやくしょ",
        "시야쿠쇼",
        "시청",
        {
          "id": "noun_add_82d83be3",
          "level": "N5",
          "examples": [
            {
              "jp": "市役所で手続きをします。",
              "hira": "しやくしょでてつづきをします。",
              "pronunciation": "시야쿠쇼데 테츠즈키오 시마스",
              "meaning": "시청에서 절차를 밟습니다."
            }
          ]
        }
      ]
    ],
    "자연·지형": [
      [
        "山",
        "やま",
        "야마",
        "산",
        {
          "id": "nounnature_0",
          "level": "N5",
          "examples": [
            {
              "jp": "週末に山へ行きます。",
              "hira": "しゅうまつにやまへいきます。",
              "pronunciation": "슈우마츠니 야마에 이키마스",
              "meaning": "주말에 산에 가요."
            }
          ]
        }
      ],
      [
        "川",
        "かわ",
        "카와",
        "강 / 개천",
        {
          "id": "nounnature_1",
          "level": "N5",
          "examples": [
            {
              "jp": "川の近くを歩きました。",
              "hira": "かわのちかくをあるきました。",
              "pronunciation": "카와노 치카쿠오 아루키마시타",
              "meaning": "강 근처를 걸었어요."
            }
          ]
        }
      ],
      [
        "海",
        "うみ",
        "우미",
        "바다",
        {
          "id": "nounnature_2",
          "level": "N5",
          "examples": [
            {
              "jp": "夏に海へ行きたいです。",
              "hira": "なつにうみへいきたいです。",
              "pronunciation": "나츠니 우미에 이키타이데스",
              "meaning": "여름에 바다에 가고 싶어요."
            }
          ]
        }
      ],
      [
        "星",
        "ほし",
        "호시",
        "별",
        {
          "id": "nounnature_4",
          "level": "N5",
          "examples": [
            {
              "jp": "夜に星を見ました。",
              "hira": "よるにほしをみました。",
              "pronunciation": "요루니 호시오 미마시타",
              "meaning": "밤에 별을 봤어요."
            }
          ]
        }
      ],
      [
        "花",
        "はな",
        "하나",
        "꽃",
        {
          "id": "nounnature_5",
          "level": "N5",
          "examples": [
            {
              "jp": "庭に花があります。",
              "hira": "にわにはながあります。",
              "pronunciation": "니와니 하나가 아리마스",
              "meaning": "정원에 꽃이 있어요."
            }
          ]
        }
      ],
      [
        "木",
        "き",
        "키",
        "나무",
        {
          "id": "nounnature_6",
          "level": "N5",
          "examples": [
            {
              "jp": "大きな木があります。",
              "hira": "おおきなきがあります。",
              "pronunciation": "오오키나 키가 아리마스",
              "meaning": "큰 나무가 있어요."
            }
          ]
        }
      ],
      [
        "森",
        "もり",
        "모리",
        "숲",
        {
          "id": "nounnature_7",
          "level": "N5",
          "examples": [
            {
              "jp": "森の中は静かです。",
              "hira": "もりのなかはしずかです。",
              "pronunciation": "모리노 나카와 시즈카데스",
              "meaning": "숲속은 조용해요."
            }
          ]
        }
      ],
      [
        "池",
        "いけ",
        "이케",
        "연못",
        {
          "id": "nounnature_8",
          "level": "N5",
          "examples": [
            {
              "jp": "池に魚がいます。",
              "hira": "いけにさかながいます。",
              "pronunciation": "이케니 사카나가 이마스",
              "meaning": "연못에 물고기가 있어요."
            }
          ]
        }
      ],
      [
        "島",
        "しま",
        "시마",
        "섬",
        {
          "id": "nounnature_9",
          "level": "N5",
          "examples": [
            {
              "jp": "小さな島へ旅行しました。",
              "hira": "ちいさなしまへりょこうしました。",
              "pronunciation": "치이사나 시마에 료코오시마시타",
              "meaning": "작은 섬으로 여행했어요."
            }
          ]
        }
      ],
      [
        "石",
        "いし",
        "이시",
        "돌",
        {
          "id": "nounnature_10",
          "level": "N5",
          "examples": [
            {
              "jp": "道に石があります。",
              "hira": "みちにいしがあります。",
              "pronunciation": "미치니 이시가 아리마스",
              "meaning": "길에 돌이 있어요."
            }
          ]
        }
      ],
      [
        "土",
        "つち",
        "츠치",
        "흙 / 땅",
        {
          "id": "nounnature_11",
          "level": "N5",
          "examples": [
            {
              "jp": "土が雨でぬれています。",
              "hira": "つちがあめでぬれています。",
              "pronunciation": "츠치가 아메데 누레테이마스",
              "meaning": "흙이 비에 젖어 있어요."
            }
          ]
        }
      ],
      [
        "砂",
        "すな",
        "스나",
        "모래",
        {
          "id": "nounnature_12",
          "level": "N5",
          "examples": [
            {
              "jp": "砂の上に座りました。",
              "hira": "すなのうえにすわりました。",
              "pronunciation": "스나노 우에니 스와리마시타",
              "meaning": "모래 위에 앉았어요."
            }
          ]
        }
      ],
      [
        "湖",
        "みずうみ",
        "미즈우미",
        "호수",
        {
          "id": "nounnature_13",
          "level": "N5",
          "examples": [
            {
              "jp": "湖の景色がきれいです。",
              "hira": "みずうみのけしきがきれいです。",
              "pronunciation": "미즈우미노 케시키가 키레이데스",
              "meaning": "호수 풍경이 예뻐요."
            }
          ]
        }
      ],
      [
        "海岸",
        "かいがん",
        "카이간",
        "해안",
        {
          "id": "nounnature_14",
          "level": "N5",
          "examples": [
            {
              "jp": "海岸を散歩しました。",
              "hira": "かいがんをさんぽしました。",
              "pronunciation": "카이간오 산포시마시타",
              "meaning": "해안을 산책했어요."
            }
          ]
        }
      ],
      [
        "自然",
        "しぜん",
        "시젠",
        "자연",
        {
          "id": "nounnature_15",
          "level": "N5",
          "examples": [
            {
              "jp": "自然の中でゆっくり休みました。",
              "hira": "しぜんのなかでゆっくりやすみました。",
              "pronunciation": "시젠노 나카데 윳쿠리 야스미마시타",
              "meaning": "자연 속에서 푹 쉬었어요."
            }
          ]
        }
      ],
      [
        "景色",
        "けしき",
        "케시키",
        "경치 / 풍경",
        {
          "id": "nounnature_16",
          "level": "N5",
          "examples": [
            {
              "jp": "ここは景色がきれいです。",
              "hira": "ここはけしきがきれいです。",
              "pronunciation": "코코와 케시키가 키레이데스",
              "meaning": "여기는 경치가 예뻐요."
            }
          ]
        }
      ],
      [
        "地図",
        "ちず",
        "치즈",
        "지도",
        {
          "id": "nounnature_17",
          "level": "N5",
          "examples": [
            {
              "jp": "地図を見ながら歩きます。",
              "hira": "ちずをみながらあるきます。",
              "pronunciation": "치즈오 미나가라 아루키마스",
              "meaning": "지도를 보면서 걸어요."
            }
          ]
        }
      ],
      [
        "場所",
        "ばしょ",
        "바쇼",
        "장소",
        {
          "id": "nounnature_18",
          "level": "N5",
          "examples": [
            {
              "jp": "静かな場所を探しています。",
              "hira": "しずかなばしょをさがしています。",
              "pronunciation": "시즈카나 바쇼오 사가시테이마스",
              "meaning": "조용한 장소를 찾고 있어요."
            }
          ]
        }
      ],
      [
        "方向",
        "ほうこう",
        "호오코오",
        "방향",
        {
          "id": "nounnature_19",
          "level": "N5",
          "examples": [
            {
              "jp": "駅の方向を教えてください。",
              "hira": "えきのほうこうをおしえてください。",
              "pronunciation": "에키노 호오코오오 오시에테 쿠다사이",
              "meaning": "역 방향을 알려 주세요."
            }
          ]
        }
      ]
    ],
    "감정·추상": [
      [
        "気持ち",
        "きもち",
        "키모치",
        "기분 / 마음",
        {
          "id": "nounabstract_0",
          "level": "N4",
          "examples": [
            {
              "jp": "今の気持ちを教えてください。",
              "hira": "いまのきもちをおしえてください。",
              "pronunciation": "이마노 키모치오 오시에테 쿠다사이",
              "meaning": "지금 기분을 알려 주세요."
            }
          ]
        }
      ],
      [
        "気分",
        "きぶん",
        "키분",
        "기분 / 컨디션",
        {
          "id": "nounabstract_1",
          "level": "N4",
          "examples": [
            {
              "jp": "今日は気分がいいです。",
              "hira": "きょうはきぶんがいいです。",
              "pronunciation": "쿄오와 키분가 이이데스",
              "meaning": "오늘은 기분이 좋아요."
            }
          ]
        }
      ],
      [
        "安心",
        "あんしん",
        "안신",
        "안심",
        {
          "id": "nounabstract_2",
          "level": "N4",
          "examples": [
            {
              "jp": "無事だと聞いて安心しました。",
              "hira": "ぶじだときいてあんしんしました。",
              "pronunciation": "부지다토 키이테 안신시마시타",
              "meaning": "무사하다는 말을 듣고 안심했어요."
            }
          ]
        }
      ],
      [
        "心配",
        "しんぱい",
        "신파이",
        "걱정",
        {
          "id": "nounabstract_3",
          "level": "N4",
          "examples": [
            {
              "jp": "心配しないでください。",
              "hira": "しんぱいしないでください。",
              "pronunciation": "신파이 시나이데 쿠다사이",
              "meaning": "걱정하지 마세요."
            }
          ]
        }
      ],
      [
        "希望",
        "きぼう",
        "키보오",
        "희망 / 희망사항",
        {
          "id": "nounabstract_4",
          "level": "N4",
          "examples": [
            {
              "jp": "希望の日を教えてください。",
              "hira": "きぼうのひをおしえてください。",
              "pronunciation": "키보오노 히오 오시에테 쿠다사이",
              "meaning": "희망하는 날짜를 알려 주세요."
            }
          ]
        }
      ],
      [
        "夢",
        "ゆめ",
        "유메",
        "꿈",
        {
          "id": "nounabstract_5",
          "level": "N4",
          "examples": [
            {
              "jp": "将来の夢があります。",
              "hira": "しょうらいのゆめがあります。",
              "pronunciation": "쇼오라이노 유메가 아리마스",
              "meaning": "장래의 꿈이 있어요."
            }
          ]
        }
      ],
      [
        "理由",
        "りゆう",
        "리유우",
        "이유",
        {
          "id": "nounabstract_6",
          "level": "N4",
          "examples": [
            {
              "jp": "理由を教えてください。",
              "hira": "りゆうをおしえてください。",
              "pronunciation": "리유우오 오시에테 쿠다사이",
              "meaning": "이유를 알려 주세요."
            }
          ]
        }
      ],
      [
        "意味",
        "いみ",
        "이미",
        "의미 / 뜻",
        {
          "id": "nounabstract_7",
          "level": "N4",
          "examples": [
            {
              "jp": "この言葉の意味が分かりません。",
              "hira": "このことばのいみがわかりません。",
              "pronunciation": "코노 코토바노 이미가 와카리마센",
              "meaning": "이 말의 뜻을 모르겠어요."
            }
          ]
        }
      ],
      [
        "問題",
        "もんだい",
        "몬다이",
        "문제",
        {
          "id": "nounabstract_8",
          "level": "N4",
          "examples": [
            {
              "jp": "この問題は難しいです。",
              "hira": "このもんだいはむずかしいです。",
              "pronunciation": "코노 몬다이와 무즈카시이데스",
              "meaning": "이 문제는 어려워요."
            }
          ]
        }
      ],
      [
        "経験",
        "けいけん",
        "케이켄",
        "경험",
        {
          "id": "nounabstract_11",
          "level": "N4",
          "examples": [
            {
              "jp": "いい経験になりました。",
              "hira": "いいけいけんになりました。",
              "pronunciation": "이이 케이켄니 나리마시타",
              "meaning": "좋은 경험이 됐어요."
            }
          ]
        }
      ],
      [
        "約束",
        "やくそく",
        "야쿠소쿠",
        "약속",
        {
          "id": "nounabstract_13",
          "level": "N4",
          "examples": [
            {
              "jp": "友達と約束があります。",
              "hira": "ともだちとやくそくがあります。",
              "pronunciation": "토모다치토 야쿠소쿠가 아리마스",
              "meaning": "친구와 약속이 있어요."
            }
          ]
        }
      ],
      [
        "連絡",
        "れんらく",
        "렌라쿠",
        "연락",
        {
          "id": "nounabstract_14",
          "level": "N4",
          "examples": [
            {
              "jp": "後で連絡します。",
              "hira": "あとでれんらくします。",
              "pronunciation": "아토데 렌라쿠시마스",
              "meaning": "나중에 연락할게요."
            }
          ]
        }
      ],
      [
        "情報",
        "じょうほう",
        "죠오호오",
        "정보",
        {
          "id": "nounabstract_15",
          "level": "N4",
          "examples": [
            {
              "jp": "必要な情報を探しています。",
              "hira": "ひつようなじょうほうをさがしています。",
              "pronunciation": "히츠요오나 죠오호오오 사가시테이마스",
              "meaning": "필요한 정보를 찾고 있어요."
            }
          ]
        }
      ],
      [
        "方法",
        "ほうほう",
        "호오호오",
        "방법",
        {
          "id": "nounabstract_16",
          "level": "N4",
          "examples": [
            {
              "jp": "簡単な方法を教えてください。",
              "hira": "かんたんなほうほうをおしえてください。",
              "pronunciation": "칸탄나 호오호오오 오시에테 쿠다사이",
              "meaning": "간단한 방법을 알려 주세요."
            }
          ]
        }
      ],
      [
        "場合",
        "ばあい",
        "바아이",
        "경우",
        {
          "id": "nounabstract_17",
          "level": "N4",
          "examples": [
            {
              "jp": "雨の場合は中止です。",
              "hira": "あめのばあいはちゅうしです。",
              "pronunciation": "아메노 바아이와 추우시데스",
              "meaning": "비가 오는 경우에는 취소예요."
            }
          ]
        }
      ],
      [
        "必要性",
        "ひつようせい",
        "히츠요오세이",
        "필요성",
        {
          "id": "nounabstract_18",
          "level": "N4",
          "examples": [
            {
              "jp": "その必要性を説明します。",
              "hira": "そのひつようせいをせつめいします。",
              "pronunciation": "소노 히츠요오세이오 세츠메이시마스",
              "meaning": "그 필요성을 설명할게요."
            }
          ]
        }
      ],
      [
        "目的",
        "もくてき",
        "모쿠테키",
        "목적",
        {
          "id": "nounabstract_19",
          "level": "N4",
          "examples": [
            {
              "jp": "旅行の目的を教えてください。",
              "hira": "りょこうのもくてきをおしえてください。",
              "pronunciation": "료코오노 모쿠테키오 오시에테 쿠다사이",
              "meaning": "여행 목적을 알려 주세요."
            }
          ]
        }
      ]
    ],
    "일상·생활용품": [
      [
        "眼鏡",
        "めがね",
        "메가네",
        "안경",
        {
          "id": "nounlife_3",
          "level": "N5",
          "examples": [
            {
              "jp": "眼鏡をかけています。",
              "hira": "めがねをかけています。",
              "pronunciation": "메가네오 카케테이마스",
              "meaning": "안경을 쓰고 있어요."
            }
          ]
        }
      ],
      [
        "洗面所",
        "せんめんじょ",
        "센멘조",
        "세면대 / 세면실",
        {
          "id": "nounlife_8",
          "level": "N5",
          "examples": [
            {
              "jp": "洗面所はどこですか。",
              "hira": "せんめんじょはどこですか。",
              "pronunciation": "센멘조와 도코데스카",
              "meaning": "세면실은 어디예요?"
            }
          ]
        }
      ],
      [
        "ドア",
        "どあ",
        "도아",
        "문",
        {
          "id": "nounlife_12",
          "level": "N5",
          "examples": [
            {
              "jp": "ドアを閉めてください。",
              "hira": "どあをしめてください。",
              "pronunciation": "도아오 시메테 쿠다사이",
              "meaning": "문을 닫아 주세요."
            }
          ]
        }
      ],
      [
        "電池",
        "でんち",
        "덴치",
        "배터리 / 건전지",
        {
          "id": "nounlife_13",
          "level": "N5",
          "examples": [
            {
              "jp": "電池がなくなりました。",
              "hira": "でんちがなくなりました。",
              "pronunciation": "덴치가 나쿠나리마시타",
              "meaning": "배터리가 다 됐어요."
            }
          ]
        }
      ],
      [
        "箱",
        "はこ",
        "하코",
        "상자",
        {
          "id": "nounlife_16",
          "level": "N5",
          "examples": [
            {
              "jp": "箱に入れてください。",
              "hira": "はこにいれてください。",
              "pronunciation": "하코니 이레테 쿠다사이",
              "meaning": "상자에 넣어 주세요."
            }
          ]
        }
      ],
      [
        "袋",
        "ふくろ",
        "후쿠로",
        "봉투 / 봉지",
        {
          "id": "nounlife_17",
          "level": "N5",
          "examples": [
            {
              "jp": "袋を一枚ください。",
              "hira": "ふくろをいちまいください。",
              "pronunciation": "후쿠로오 이치마이 쿠다사이",
              "meaning": "봉지 하나 주세요."
            }
          ]
        }
      ],
      [
        "紙",
        "かみ",
        "카미",
        "종이",
        {
          "id": "nounlife_18",
          "level": "N5",
          "examples": [
            {
              "jp": "紙に書いてください。",
              "hira": "かみにかいてください。",
              "pronunciation": "카미니 카이테 쿠다사이",
              "meaning": "종이에 써 주세요."
            }
          ]
        }
      ]
    ],
    "직장·업무": [
      [
        "社員",
        "しゃいん",
        "샤인",
        "사원 / 직원",
        {
          "id": "nounwork_3",
          "level": "N4",
          "examples": [
            {
              "jp": "社員に連絡しました。",
              "hira": "しゃいんにれんらくしました。",
              "pronunciation": "샤인니 렌라쿠시마시타",
              "meaning": "직원에게 연락했어요."
            }
          ]
        }
      ],
      [
        "部長",
        "ぶちょう",
        "부쵸오",
        "부장",
        {
          "id": "nounwork_4",
          "level": "N4",
          "examples": [
            {
              "jp": "部長に報告します。",
              "hira": "ぶちょうにほうこくします。",
              "pronunciation": "부쵸오니 호오코쿠시마스",
              "meaning": "부장님께 보고할게요."
            }
          ]
        }
      ],
      [
        "社長",
        "しゃちょう",
        "샤쵸오",
        "사장",
        {
          "id": "nounwork_5",
          "level": "N4",
          "examples": [
            {
              "jp": "社長は会議中です。",
              "hira": "しゃちょうはかいぎちゅうです。",
              "pronunciation": "샤쵸오와 카이기추우데스",
              "meaning": "사장님은 회의 중이에요."
            }
          ]
        }
      ],
      [
        "報告",
        "ほうこく",
        "호오코쿠",
        "보고",
        {
          "id": "nounwork_6",
          "level": "N4",
          "examples": [
            {
              "jp": "結果を報告します。",
              "hira": "けっかをほうこくします。",
              "pronunciation": "켓카오 호오코쿠시마스",
              "meaning": "결과를 보고할게요."
            }
          ]
        }
      ],
      [
        "連絡先",
        "れんらくさき",
        "렌라쿠사키",
        "연락처",
        {
          "id": "nounwork_7",
          "level": "N4",
          "examples": [
            {
              "jp": "連絡先を教えてください。",
              "hira": "れんらくさきをおしえてください。",
              "pronunciation": "렌라쿠사키오 오시에테 쿠다사이",
              "meaning": "연락처를 알려 주세요."
            }
          ]
        }
      ],
      [
        "予定表",
        "よていひょう",
        "요테이효오",
        "일정표",
        {
          "id": "nounwork_8",
          "level": "N4",
          "examples": [
            {
              "jp": "予定表を確認します。",
              "hira": "よていひょうをかくにんします。",
              "pronunciation": "요테이효오오 카쿠닌시마스",
              "meaning": "일정표를 확인할게요."
            }
          ]
        }
      ],
      [
        "書類",
        "しょるい",
        "쇼루이",
        "서류",
        {
          "id": "nounwork_9",
          "level": "N4",
          "examples": [
            {
              "jp": "書類を提出してください。",
              "hira": "しょるいをていしゅつしてください。",
              "pronunciation": "쇼루이오 테이슈츠시테 쿠다사이",
              "meaning": "서류를 제출해 주세요."
            }
          ]
        }
      ],
      [
        "締切",
        "しめきり",
        "시메키리",
        "마감",
        {
          "id": "nounwork_10",
          "level": "N4",
          "examples": [
            {
              "jp": "締切は金曜日です。",
              "hira": "しめきりはきんようびです。",
              "pronunciation": "시메키리와 킨요오비데스",
              "meaning": "마감은 금요일이에요."
            }
          ]
        }
      ],
      [
        "仕事場",
        "しごとば",
        "시고토바",
        "직장 / 일터",
        {
          "id": "nounwork_11",
          "level": "N4",
          "examples": [
            {
              "jp": "仕事場は駅から近いです。",
              "hira": "しごとばはえきからちかいです。",
              "pronunciation": "시고토바와 에키카라 치카이데스",
              "meaning": "직장은 역에서 가까워요."
            }
          ]
        }
      ],
      [
        "休憩",
        "きゅうけい",
        "큐우케이",
        "휴식 / 휴게",
        {
          "id": "nounwork_12",
          "level": "N4",
          "examples": [
            {
              "jp": "10分休憩しましょう。",
              "hira": "じゅっぷんきゅうけいしましょう。",
              "pronunciation": "쥿푼 큐우케이시마쇼오",
              "meaning": "10분 쉬어요."
            }
          ]
        }
      ],
      [
        "出勤",
        "しゅっきん",
        "슛킨",
        "출근",
        {
          "id": "nounwork_13",
          "level": "N4",
          "examples": [
            {
              "jp": "毎朝九時に出勤します。",
              "hira": "まいあさくじにしゅっきんします。",
              "pronunciation": "마이아사 쿠지니 슛킨시마스",
              "meaning": "매일 아침 9시에 출근해요."
            }
          ]
        }
      ],
      [
        "退勤",
        "たいきん",
        "타이킨",
        "퇴근",
        {
          "id": "nounwork_14",
          "level": "N4",
          "examples": [
            {
              "jp": "六時に退勤します。",
              "hira": "ろくじにたいきんします。",
              "pronunciation": "로쿠지니 타이킨시마스",
              "meaning": "6시에 퇴근해요."
            }
          ]
        }
      ]
    ],
    "일상·추상 추가": [
      [
        "住所",
        "じゅうしょ",
        "쥬우쇼",
        "주소",
        {
          "id": "noun_more_0",
          "level": "N4",
          "examples": [
            {
              "jp": "住所を教えてください。",
              "hira": "じゅうしょをおしえてください。",
              "pronunciation": "쥬우쇼오 오시에테 쿠다사이",
              "meaning": "주소를 알려 주세요."
            }
          ]
        }
      ],
      [
        "電話番号",
        "でんわばんごう",
        "덴와반고오",
        "전화번호",
        {
          "id": "noun_more_1",
          "level": "N4",
          "examples": [
            {
              "jp": "電話番号を教えてもらえますか。",
              "hira": "でんわばんごうをおしえてもらえますか。",
              "pronunciation": "덴와반고오오 오시에테 모라에마스카",
              "meaning": "전화번호를 알려 주실 수 있나요?"
            }
          ]
        }
      ],
      [
        "予約",
        "よやく",
        "요야쿠",
        "예약",
        {
          "id": "noun_more_2",
          "level": "N4",
          "examples": [
            {
              "jp": "ホテルの予約を確認しました。",
              "hira": "ほてるのよやくをかくにんしました。",
              "pronunciation": "호테루노 요야쿠오 카쿠닌시마시타",
              "meaning": "호텔 예약을 확인했습니다."
            }
          ]
        }
      ],
      [
        "予定",
        "よてい",
        "요테이",
        "예정 / 일정",
        {
          "id": "noun_more_3",
          "level": "N4",
          "examples": [
            {
              "jp": "週末の予定はまだありません。",
              "hira": "しゅうまつのよていはまだありません。",
              "pronunciation": "슈우마츠노 요테이와 마다 아리마센",
              "meaning": "주말 일정은 아직 없습니다."
            }
          ]
        }
      ],
      [
        "約束",
        "やくそく",
        "야쿠소쿠",
        "약속",
        {
          "id": "noun_more_4",
          "level": "N4",
          "examples": [
            {
              "jp": "約束を守ってください。",
              "hira": "やくそくをまもってください。",
              "pronunciation": "야쿠소쿠오 마못테 쿠다사이",
              "meaning": "약속을 지켜 주세요."
            }
          ]
        }
      ],
      [
        "連絡",
        "れんらく",
        "렌라쿠",
        "연락",
        {
          "id": "noun_more_5",
          "level": "N4",
          "examples": [
            {
              "jp": "あとで連絡します。",
              "hira": "あとでれんらくします。",
              "pronunciation": "아토데 렌라쿠시마스",
              "meaning": "나중에 연락하겠습니다."
            }
          ]
        }
      ],
      [
        "説明",
        "せつめい",
        "세츠메이",
        "설명",
        {
          "id": "noun_more_6",
          "level": "N4",
          "examples": [
            {
              "jp": "もう一度説明してください。",
              "hira": "もういちどせつめいしてください。",
              "pronunciation": "모오 이치도 세츠메이시테 쿠다사이",
              "meaning": "한 번 더 설명해 주세요."
            }
          ]
        }
      ],
      [
        "理由",
        "りゆう",
        "리유우",
        "이유",
        {
          "id": "noun_more_7",
          "level": "N4",
          "examples": [
            {
              "jp": "理由を教えてください。",
              "hira": "りゆうをおしえてください。",
              "pronunciation": "리유우오 오시에테 쿠다사이",
              "meaning": "이유를 알려 주세요."
            }
          ]
        }
      ],
      [
        "方法",
        "ほうほう",
        "호오호오",
        "방법",
        {
          "id": "noun_more_8",
          "level": "N4",
          "examples": [
            {
              "jp": "使い方の方法を確認します。",
              "hira": "つかいかたのほうほうをかくにんします。",
              "pronunciation": "츠카이카타노 호오호오오 카쿠닌시마스",
              "meaning": "사용 방법을 확인합니다."
            }
          ]
        }
      ],
      [
        "問題",
        "もんだい",
        "몬다이",
        "문제",
        {
          "id": "noun_more_9",
          "level": "N4",
          "examples": [
            {
              "jp": "この問題は難しいです。",
              "hira": "このもんだいはむずかしいです。",
              "pronunciation": "코노 몬다이와 무즈카시이데스",
              "meaning": "이 문제는 어렵습니다."
            }
          ]
        }
      ],
      [
        "答え",
        "こたえ",
        "코타에",
        "답 / 대답",
        {
          "id": "noun_more_10",
          "level": "N4",
          "examples": [
            {
              "jp": "答えを教えてください。",
              "hira": "こたえをおしえてください。",
              "pronunciation": "코타에오 오시에테 쿠다사이",
              "meaning": "답을 알려 주세요."
            }
          ]
        }
      ],
      [
        "質問",
        "しつもん",
        "시츠몬",
        "질문",
        {
          "id": "noun_more_11",
          "level": "N4",
          "examples": [
            {
              "jp": "質問があります。",
              "hira": "しつもんがあります。",
              "pronunciation": "시츠몬가 아리마스",
              "meaning": "질문이 있습니다."
            }
          ]
        }
      ],
      [
        "必要",
        "ひつよう",
        "히츠요오",
        "필요",
        {
          "id": "noun_more_12",
          "level": "N4",
          "examples": [
            {
              "jp": "必要な物を準備します。",
              "hira": "ひつようなものをじゅんびします。",
              "pronunciation": "히츠요오나 모노오 준비시마스",
              "meaning": "필요한 것을 준비합니다."
            }
          ]
        }
      ],
      [
        "準備",
        "じゅんび",
        "쥰비",
        "준비",
        {
          "id": "noun_more_13",
          "level": "N4",
          "examples": [
            {
              "jp": "旅行の準備をします。",
              "hira": "りょこうのじゅんびをします。",
              "pronunciation": "료코오노 쥰비오 시마스",
              "meaning": "여행 준비를 합니다."
            }
          ]
        }
      ],
      [
        "経験",
        "けいけん",
        "케이켄",
        "경험",
        {
          "id": "noun_more_14",
          "level": "N4",
          "examples": [
            {
              "jp": "日本で働いた経験があります。",
              "hira": "にほんではたらいたけいけんがあります。",
              "pronunciation": "니혼데 하타라이타 케이켄가 아리마스",
              "meaning": "일본에서 일한 경험이 있습니다."
            }
          ]
        }
      ],
      [
        "生活",
        "せいかつ",
        "세이카츠",
        "생활",
        {
          "id": "noun_more_15",
          "level": "N4",
          "examples": [
            {
              "jp": "日本の生活に慣れました。",
              "hira": "にほんのせいかつになれました。",
              "pronunciation": "니혼노 세이카츠니 나레마시타",
              "meaning": "일본 생활에 익숙해졌습니다."
            }
          ]
        }
      ],
      [
        "習慣",
        "しゅうかん",
        "슈우칸",
        "습관",
        {
          "id": "noun_more_16",
          "level": "N4",
          "examples": [
            {
              "jp": "毎朝、運動する習慣があります。",
              "hira": "まいあさ、うんどうするしゅうかんがあります。",
              "pronunciation": "마이아사 운도오스루 슈우칸가 아리마스",
              "meaning": "매일 아침 운동하는 습관이 있습니다."
            }
          ]
        }
      ],
      [
        "場合",
        "ばあい",
        "바아이",
        "경우",
        {
          "id": "noun_more_17",
          "level": "N4",
          "examples": [
            {
              "jp": "雨の場合は中止します。",
              "hira": "あめのばあいはちゅうしします。",
              "pronunciation": "아메노 바아이와 추우시시마스",
              "meaning": "비가 오는 경우에는 취소합니다."
            }
          ]
        }
      ],
      [
        "途中",
        "とちゅう",
        "토츄우",
        "도중",
        {
          "id": "noun_more_18",
          "level": "N4",
          "examples": [
            {
              "jp": "途中で休憩しましょう。",
              "hira": "とちゅうできゅうけいしましょう。",
              "pronunciation": "토츄우데 큐우케이시마쇼오",
              "meaning": "도중에 쉬도록 해요."
            }
          ]
        }
      ],
      [
        "目的",
        "もくてき",
        "모쿠테키",
        "목적",
        {
          "id": "noun_more_19",
          "level": "N4",
          "examples": [
            {
              "jp": "旅行の目的を教えてください。",
              "hira": "りょこうのもくてきをおしえてください。",
              "pronunciation": "료코오노 모쿠테키오 오시에테 쿠다사이",
              "meaning": "여행 목적을 알려 주세요."
            }
          ]
        }
      ],
      [
        "場所",
        "ばしょ",
        "바쇼",
        "장소",
        {
          "id": "noun_more_20",
          "level": "N4",
          "examples": [
            {
              "jp": "集合場所は駅です。",
              "hira": "しゅうごうばしょはえきです。",
              "pronunciation": "슈우고오 바쇼와 에키데스",
              "meaning": "집합 장소는 역입니다."
            }
          ]
        }
      ],
      [
        "景色",
        "けしき",
        "케시키",
        "경치",
        {
          "id": "noun_more_21",
          "level": "N4",
          "examples": [
            {
              "jp": "山からの景色がきれいです。",
              "hira": "やまからのけしきがきれいです。",
              "pronunciation": "야마카라노 케시키가 키레이데스",
              "meaning": "산에서 보는 경치가 아름답습니다."
            }
          ]
        }
      ],
      [
        "温泉",
        "おんせん",
        "온센",
        "온천",
        {
          "id": "noun_more_22",
          "level": "N4",
          "examples": [
            {
              "jp": "温泉に入りたいです。",
              "hira": "おんせんにはいりたいです。",
              "pronunciation": "온센니 하이리타이데스",
              "meaning": "온천에 들어가고 싶습니다."
            }
          ]
        }
      ],
      [
        "空港",
        "くうこう",
        "쿠우코오",
        "공항",
        {
          "id": "noun_more_23",
          "level": "N4",
          "examples": [
            {
              "jp": "空港まで電車で行きます。",
              "hira": "くうこうまででんしゃでいきます。",
              "pronunciation": "쿠우코오마데 덴샤데 이키마스",
              "meaning": "공항까지 전철로 갑니다."
            }
          ]
        }
      ],
      [
        "交番",
        "こうばん",
        "코오반",
        "파출소",
        {
          "id": "noun_more_24",
          "level": "N4",
          "examples": [
            {
              "jp": "交番で道を聞きました。",
              "hira": "こうばんでみちをききました。",
              "pronunciation": "코오반데 미치오 키키마시타",
              "meaning": "파출소에서 길을 물었습니다."
            }
          ]
        }
      ],
      [
        "薬局",
        "やっきょく",
        "약쿄쿠",
        "약국",
        {
          "id": "noun_more_25",
          "level": "N4",
          "examples": [
            {
              "jp": "薬局で薬を買います。",
              "hira": "やっきょくでくすりをかいます。",
              "pronunciation": "약쿄쿠데 쿠스리오 카이마스",
              "meaning": "약국에서 약을 삽니다."
            }
          ]
        }
      ],
      [
        "美容院",
        "びよういん",
        "비요오인",
        "미용실",
        {
          "id": "noun_more_26",
          "level": "N4",
          "examples": [
            {
              "jp": "美容院を予約しました。",
              "hira": "びよういんをよやくしました。",
              "pronunciation": "비요오인오 요야쿠시마시타",
              "meaning": "미용실을 예약했습니다."
            }
          ]
        }
      ],
      [
        "洗濯",
        "せんたく",
        "센타쿠",
        "세탁",
        {
          "id": "noun_more_27",
          "level": "N4",
          "examples": [
            {
              "jp": "週末に洗濯をします。",
              "hira": "しゅうまつにせんたくをします。",
              "pronunciation": "슈우마츠니 센타쿠오 시마스",
              "meaning": "주말에 빨래를 합니다."
            }
          ]
        }
      ],
      [
        "掃除",
        "そうじ",
        "소오지",
        "청소",
        {
          "id": "noun_more_28",
          "level": "N4",
          "examples": [
            {
              "jp": "部屋を掃除します。",
              "hira": "へやをそうじします。",
              "pronunciation": "헤야오 소오지시마스",
              "meaning": "방을 청소합니다."
            }
          ]
        }
      ],
      [
        "料理",
        "りょうり",
        "료오리",
        "요리",
        {
          "id": "noun_more_29",
          "level": "N4",
          "examples": [
            {
              "jp": "料理を作るのが好きです。",
              "hira": "りょうりをつくるのがすきです。",
              "pronunciation": "료오리오 츠쿠루노가 스키데스",
              "meaning": "요리하는 것을 좋아합니다."
            }
          ]
        }
      ],
      [
        "荷物",
        "にもつ",
        "니모츠",
        "짐",
        {
          "id": "noun_more_30",
          "level": "N4",
          "examples": [
            {
              "jp": "荷物を預けてもいいですか。",
              "hira": "にもつをあずけてもいいですか。",
              "pronunciation": "니모츠오 아즈케테모 이이데스카",
              "meaning": "짐을 맡겨도 되나요?"
            }
          ]
        }
      ],
      [
        "切符",
        "きっぷ",
        "킷푸",
        "표 / 승차권",
        {
          "id": "noun_more_31",
          "level": "N4",
          "examples": [
            {
              "jp": "切符を買いました。",
              "hira": "きっぷをかいました。",
              "pronunciation": "킷푸오 카이마시타",
              "meaning": "표를 샀습니다."
            }
          ]
        }
      ],
      [
        "改札",
        "かいさつ",
        "카이사츠",
        "개찰구",
        {
          "id": "noun_more_32",
          "level": "N4",
          "examples": [
            {
              "jp": "改札の前で待っています。",
              "hira": "かいさつのまえでまっています。",
              "pronunciation": "카이사츠노 마에데 맛테이마스",
              "meaning": "개찰구 앞에서 기다리고 있습니다."
            }
          ]
        }
      ],
      [
        "階段",
        "かいだん",
        "카이단",
        "계단",
        {
          "id": "noun_more_33",
          "level": "N4",
          "examples": [
            {
              "jp": "階段を上ってください。",
              "hira": "かいだんをのぼってください。",
              "pronunciation": "카이단오 노봇테 쿠다사이",
              "meaning": "계단을 올라가 주세요."
            }
          ]
        }
      ],
      [
        "入口",
        "いりぐち",
        "이리구치",
        "입구",
        {
          "id": "noun_more_34",
          "level": "N4",
          "examples": [
            {
              "jp": "入口は右側です。",
              "hira": "いりぐちはみぎがわです。",
              "pronunciation": "이리구치와 미기카와데스",
              "meaning": "입구는 오른쪽입니다."
            }
          ]
        }
      ],
      [
        "出口",
        "でぐち",
        "데구치",
        "출구",
        {
          "id": "noun_more_35",
          "level": "N4",
          "examples": [
            {
              "jp": "出口はどこですか。",
              "hira": "でぐちはどこですか。",
              "pronunciation": "데구치와 도코데스카",
              "meaning": "출구는 어디입니까?"
            }
          ]
        }
      ],
      [
        "受付",
        "うけつけ",
        "우케츠케",
        "접수처",
        {
          "id": "noun_more_36",
          "level": "N4",
          "examples": [
            {
              "jp": "受付で名前を伝えました。",
              "hira": "うけつけでなまえをつたえました。",
              "pronunciation": "우케츠케데 나마에오 츠타에마시타",
              "meaning": "접수처에서 이름을 말했습니다."
            }
          ]
        }
      ],
      [
        "会議",
        "かいぎ",
        "카이기",
        "회의",
        {
          "id": "noun_more_37",
          "level": "N4",
          "examples": [
            {
              "jp": "午後から会議があります。",
              "hira": "ごごからかいぎがあります。",
              "pronunciation": "고고카라 카이기가 아리마스",
              "meaning": "오후부터 회의가 있습니다."
            }
          ]
        }
      ],
      [
        "資料",
        "しりょう",
        "시료오",
        "자료",
        {
          "id": "noun_more_38",
          "level": "N4",
          "examples": [
            {
              "jp": "資料をメールで送ります。",
              "hira": "しりょうをめーるでおくります。",
              "pronunciation": "시료오오 메에루데 오쿠리마스",
              "meaning": "자료를 메일로 보냅니다."
            }
          ]
        }
      ],
      [
        "仕事",
        "しごと",
        "시고토",
        "일 / 업무",
        {
          "id": "noun_more_39",
          "level": "N4",
          "examples": [
            {
              "jp": "仕事が終わったら連絡します。",
              "hira": "しごとがおわったられんらくします。",
              "pronunciation": "시고토가 오왓타라 렌라쿠시마스",
              "meaning": "일이 끝나면 연락하겠습니다."
            }
          ]
        }
      ],
      [
        "給料",
        "きゅうりょう",
        "큐우료오",
        "급여",
        {
          "id": "noun_more_40",
          "level": "N4",
          "examples": [
            {
              "jp": "給料は月末にもらいます。",
              "hira": "きゅうりょうはげつまつにもらいます。",
              "pronunciation": "큐우료오와 게츠마츠니 모라이마스",
              "meaning": "급여는 월말에 받습니다."
            }
          ]
        }
      ]
    ],
    "추가 어휘·생활": [
      [
        "駅員",
        "えきいん",
        "에키인",
        "역무원",
        {
          "id": "noun_more2_0",
          "level": "N5-N4",
          "examples": [
            {
              "jp": "駅員に聞いてみます。",
              "hira": "えきいんにきいてみます。",
              "pronunciation": "에키인니 키이테 미마스",
              "meaning": "역무원에게 물어볼게요."
            }
          ]
        }
      ],
      [
        "店員",
        "てんいん",
        "텐인",
        "점원",
        {
          "id": "noun_more2_1",
          "level": "N5-N4",
          "examples": [
            {
              "jp": "店員におすすめを聞きました。",
              "hira": "てんいんにおすすめをききました。",
              "pronunciation": "텐인니 오스스메오 키키마시타",
              "meaning": "점원에게 추천을 물어봤습니다."
            }
          ]
        }
      ],
      [
        "客",
        "きゃく",
        "캬쿠",
        "손님",
        {
          "id": "noun_more2_2",
          "level": "N5-N4",
          "examples": [
            {
              "jp": "店に客がたくさんいます。",
              "hira": "みせにきゃくがたくさんいます。",
              "pronunciation": "미세니 캬쿠가 타쿠산 이마스",
              "meaning": "가게에 손님이 많습니다."
            }
          ]
        }
      ],
      [
        "同僚",
        "どうりょう",
        "도오료오",
        "동료",
        {
          "id": "noun_more2_3",
          "level": "N5-N4",
          "examples": [
            {
              "jp": "同僚と昼ご飯を食べます。",
              "hira": "どうりょうとひるごはんをたべます。",
              "pronunciation": "도오료오토 히루고한오 타베마스",
              "meaning": "동료와 점심을 먹습니다."
            }
          ]
        }
      ],
      [
        "先輩",
        "せんぱい",
        "센파이",
        "선배",
        {
          "id": "noun_more2_4",
          "level": "N5-N4",
          "examples": [
            {
              "jp": "先輩に仕事を教えてもらいました。",
              "hira": "せんぱいにしごとをおしえてもらいました。",
              "pronunciation": "센파이니 시고토오 오시에테 모라이마시타",
              "meaning": "선배에게 일을 배웠습니다."
            }
          ]
        }
      ],
      [
        "後輩",
        "こうはい",
        "코오하이",
        "후배",
        {
          "id": "noun_more2_5",
          "level": "N5-N4",
          "examples": [
            {
              "jp": "後輩に仕事を教えます。",
              "hira": "こうはいにしごとをおしえます。",
              "pronunciation": "코오하이니 시고토오 오시에마스",
              "meaning": "후배에게 일을 가르칩니다."
            }
          ]
        }
      ],
      [
        "社長",
        "しゃちょう",
        "샤초오",
        "사장",
        {
          "id": "noun_more2_6",
          "level": "N5-N4",
          "examples": [
            {
              "jp": "社長は会議に参加します。",
              "hira": "しゃちょうはかいぎにさんかします。",
              "pronunciation": "샤초오와 카이기니 산카시마스",
              "meaning": "사장은 회의에 참석합니다."
            }
          ]
        }
      ],
      [
        "部長",
        "ぶちょう",
        "부초오",
        "부장",
        {
          "id": "noun_more2_7",
          "level": "N5-N4",
          "examples": [
            {
              "jp": "部長に報告しました。",
              "hira": "ぶちょうにほうこくしました。",
              "pronunciation": "부초오니 호오코쿠시마시타",
              "meaning": "부장에게 보고했습니다."
            }
          ]
        }
      ],
      [
        "建物",
        "たてもの",
        "타테모노",
        "건물",
        {
          "id": "noun_more2_8",
          "level": "N5-N4",
          "examples": [
            {
              "jp": "この建物は古いです。",
              "hira": "このたてものはふるいです。",
              "pronunciation": "코노 타테모노와 후루이데스",
              "meaning": "이 건물은 오래됐습니다."
            }
          ]
        }
      ],
      [
        "番号",
        "ばんごう",
        "반고오",
        "번호",
        {
          "id": "noun_more2_9",
          "level": "N5-N4",
          "examples": [
            {
              "jp": "電話番号を書いてください。",
              "hira": "でんわばんごうをかいてください。",
              "pronunciation": "덴와반고오오 카이테 쿠다사이",
              "meaning": "전화번호를 적어 주세요."
            }
          ]
        }
      ],
      [
        "電池",
        "でんち",
        "덴치",
        "배터리",
        {
          "id": "noun_more2_10",
          "level": "N5-N4",
          "examples": [
            {
              "jp": "電池がなくなりました。",
              "hira": "でんちがなくなりました。",
              "pronunciation": "덴치가 나쿠나리마시타",
              "meaning": "배터리가 다 됐습니다."
            }
          ]
        }
      ],
      [
        "充電器",
        "じゅうでんき",
        "쥬우덴키",
        "충전기",
        {
          "id": "noun_more2_11",
          "level": "N5-N4",
          "examples": [
            {
              "jp": "充電器を持ってきました。",
              "hira": "じゅうでんきをもってきました。",
              "pronunciation": "쥬우덴키오 못테키마시타",
              "meaning": "충전기를 가져왔습니다."
            }
          ]
        }
      ],
      [
        "電源",
        "でんげん",
        "덴겐",
        "전원",
        {
          "id": "noun_more2_12",
          "level": "N5-N4",
          "examples": [
            {
              "jp": "電源を切ってください。",
              "hira": "でんげんをきってください。",
              "pronunciation": "덴겐오 킷테 쿠다사이",
              "meaning": "전원을 꺼 주세요."
            }
          ]
        }
      ],
      [
        "画面",
        "がめん",
        "가멘",
        "화면",
        {
          "id": "noun_more2_13",
          "level": "N5-N4",
          "examples": [
            {
              "jp": "画面を見てください。",
              "hira": "がめんをみてください。",
              "pronunciation": "가멘오 미테 쿠다사이",
              "meaning": "화면을 봐 주세요."
            }
          ]
        }
      ],
      [
        "動画",
        "どうが",
        "도오가",
        "동영상",
        {
          "id": "noun_more2_14",
          "level": "N5-N4",
          "examples": [
            {
              "jp": "動画を見ました。",
              "hira": "どうがをみました。",
              "pronunciation": "도오가오 미마시타",
              "meaning": "동영상을 봤습니다."
            }
          ]
        }
      ],
      [
        "音",
        "おと",
        "오토",
        "소리",
        {
          "id": "noun_more2_15",
          "level": "N5-N4",
          "examples": [
            {
              "jp": "変な音がします。",
              "hira": "へんなおとがします。",
              "pronunciation": "헨나 오토가 시마스",
              "meaning": "이상한 소리가 납니다."
            }
          ]
        }
      ],
      [
        "声",
        "こえ",
        "코에",
        "목소리",
        {
          "id": "noun_more2_16",
          "level": "N5-N4",
          "examples": [
            {
              "jp": "大きな声で話してください。",
              "hira": "おおきなこえではなしてください。",
              "pronunciation": "오오키나 코에데 하나시테 쿠다사이",
              "meaning": "큰 목소리로 말해 주세요."
            }
          ]
        }
      ],
      [
        "番組",
        "ばんぐみ",
        "반구미",
        "프로그램",
        {
          "id": "noun_more2_17",
          "level": "N5-N4",
          "examples": [
            {
              "jp": "好きな番組を見ています。",
              "hira": "すきなばんぐみをみています。",
              "pronunciation": "스키나 반구미오 미테이마스",
              "meaning": "좋아하는 프로그램을 보고 있습니다."
            }
          ]
        }
      ],
      [
        "記事",
        "きじ",
        "키지",
        "기사",
        {
          "id": "noun_more2_18",
          "level": "N5-N4",
          "examples": [
            {
              "jp": "その記事を読みました。",
              "hira": "そのきじをよみました。",
              "pronunciation": "소노 키지오 요미마시타",
              "meaning": "그 기사를 읽었습니다."
            }
          ]
        }
      ],
      [
        "朝食",
        "ちょうしょく",
        "초오쇼쿠",
        "아침 식사",
        {
          "id": "noun_more2_19",
          "level": "N5-N4",
          "examples": [
            {
              "jp": "朝食を食べてから出かけます。",
              "hira": "ちょうしょくをたべてからでかけます。",
              "pronunciation": "초오쇼쿠오 타베테카라 데카케마스",
              "meaning": "아침 식사를 하고 외출합니다."
            }
          ]
        }
      ],
      [
        "昼食",
        "ちゅうしょく",
        "츄우쇼쿠",
        "점심 식사",
        {
          "id": "noun_more2_20",
          "level": "N5-N4",
          "examples": [
            {
              "jp": "昼食は会社で食べます。",
              "hira": "ちゅうしょくはかいしゃでたべます。",
              "pronunciation": "츄우쇼쿠와 카이샤데 타베마스",
              "meaning": "점심은 회사에서 먹습니다."
            }
          ]
        }
      ],
      [
        "夕食",
        "ゆうしょく",
        "유우쇼쿠",
        "저녁 식사",
        {
          "id": "noun_more2_21",
          "level": "N5-N4",
          "examples": [
            {
              "jp": "夕食は八時ごろ食べます。",
              "hira": "ゆうしょくははちじごろたべます。",
              "pronunciation": "유우쇼쿠와 하치지고로 타베마스",
              "meaning": "저녁 식사는 8시쯤 먹습니다."
            }
          ]
        }
      ],
      [
        "弁当",
        "べんとう",
        "벤토오",
        "도시락",
        {
          "id": "noun_more2_22",
          "level": "N5-N4",
          "examples": [
            {
              "jp": "昼に弁当を食べました。",
              "hira": "ひるにべんとうをたべました。",
              "pronunciation": "히루니 벤토오오 타베마시타",
              "meaning": "점심에 도시락을 먹었습니다."
            }
          ]
        }
      ],
      [
        "野菜",
        "やさい",
        "야사이",
        "채소",
        {
          "id": "noun_more2_23",
          "level": "N5-N4",
          "examples": [
            {
              "jp": "野菜を毎日食べます。",
              "hira": "やさいをまいにちたべます。",
              "pronunciation": "야사이오 마이니치 타베마스",
              "meaning": "채소를 매일 먹습니다."
            }
          ]
        }
      ],
      [
        "果物",
        "くだもの",
        "쿠다모노",
        "과일",
        {
          "id": "noun_more2_24",
          "level": "N5-N4",
          "examples": [
            {
              "jp": "果物を買いました。",
              "hira": "くだものをかいました。",
              "pronunciation": "쿠다모노오 카이마시타",
              "meaning": "과일을 샀습니다."
            }
          ]
        }
      ],
      [
        "肉",
        "にく",
        "니쿠",
        "고기",
        {
          "id": "noun_more2_25",
          "level": "N5-N4",
          "examples": [
            {
              "jp": "肉を少し食べます。",
              "hira": "にくをすこしたべます。",
              "pronunciation": "니쿠오 스코시 타베마스",
              "meaning": "고기를 조금 먹습니다."
            }
          ]
        }
      ],
      [
        "魚",
        "さかな",
        "사카나",
        "생선",
        {
          "id": "noun_more2_26",
          "level": "N5-N4",
          "examples": [
            {
              "jp": "魚が好きです。",
              "hira": "さかながすきです。",
              "pronunciation": "사카나가 스키데스",
              "meaning": "생선을 좋아합니다."
            }
          ]
        }
      ],
      [
        "米",
        "こめ",
        "코메",
        "쌀",
        {
          "id": "noun_more2_27",
          "level": "N5-N4",
          "examples": [
            {
              "jp": "米を買いに行きます。",
              "hira": "こめをかいにいきます。",
              "pronunciation": "코메오 카이니 이키마스",
              "meaning": "쌀을 사러 갑니다."
            }
          ]
        }
      ],
      [
        "卵",
        "たまご",
        "타마고",
        "달걀",
        {
          "id": "noun_more2_28",
          "level": "N5-N4",
          "examples": [
            {
              "jp": "卵を二つ使います。",
              "hira": "たまごをふたつつかいます。",
              "pronunciation": "타마고오 후타츠 츠카이마스",
              "meaning": "달걀 두 개를 사용합니다."
            }
          ]
        }
      ],
      [
        "牛乳",
        "ぎゅうにゅう",
        "규우뉴우",
        "우유",
        {
          "id": "noun_more2_29",
          "level": "N5-N4",
          "examples": [
            {
              "jp": "毎朝、牛乳を飲みます。",
              "hira": "まいあさ、ぎゅうにゅうをのみます。",
              "pronunciation": "마이아사 규우뉴우오 노미마스",
              "meaning": "매일 아침 우유를 마십니다."
            }
          ]
        }
      ],
      [
        "お茶",
        "おちゃ",
        "오차",
        "차",
        {
          "id": "noun_more2_30",
          "level": "N5-N4",
          "examples": [
            {
              "jp": "お茶を一杯ください。",
              "hira": "おちゃをいっぱいください。",
              "pronunciation": "오차오 잇파이 쿠다사이",
              "meaning": "차 한 잔 주세요."
            }
          ]
        }
      ],
      [
        "砂糖",
        "さとう",
        "사토오",
        "설탕",
        {
          "id": "noun_more2_31",
          "level": "N5-N4",
          "examples": [
            {
              "jp": "砂糖を少し入れます。",
              "hira": "さとうをすこしいれます。",
              "pronunciation": "사토오오 스코시 이레마스",
              "meaning": "설탕을 조금 넣습니다."
            }
          ]
        }
      ],
      [
        "塩",
        "しお",
        "시오",
        "소금",
        {
          "id": "noun_more2_32",
          "level": "N5-N4",
          "examples": [
            {
              "jp": "塩を入れすぎないでください。",
              "hira": "しおをいれすぎないでください。",
              "pronunciation": "시오오 이레스기나이데 쿠다사이",
              "meaning": "소금을 너무 많이 넣지 마세요."
            }
          ]
        }
      ],
      [
        "醤油",
        "しょうゆ",
        "쇼오유",
        "간장",
        {
          "id": "noun_more2_33",
          "level": "N5-N4",
          "examples": [
            {
              "jp": "醤油を少し使います。",
              "hira": "しょうゆをすこしつかいます。",
              "pronunciation": "쇼오유오 스코시 츠카이마스",
              "meaning": "간장을 조금 사용합니다."
            }
          ]
        }
      ],
      [
        "洗面所",
        "せんめんじょ",
        "센멘조",
        "세면장",
        {
          "id": "noun_more2_34",
          "level": "N5-N4",
          "examples": [
            {
              "jp": "洗面所はどこですか。",
              "hira": "せんめんじょはどこですか。",
              "pronunciation": "센멘조와 도코데스카",
              "meaning": "세면장은 어디인가요?"
            }
          ]
        }
      ],
      [
        "冷蔵庫",
        "れいぞうこ",
        "레이조오코",
        "냉장고",
        {
          "id": "noun_more2_35",
          "level": "N5-N4",
          "examples": [
            {
              "jp": "牛乳を冷蔵庫に入れます。",
              "hira": "ぎゅうにゅうをれいぞうこにいれます。",
              "pronunciation": "규우뉴우오 레이조오코니 이레마스",
              "meaning": "우유를 냉장고에 넣습니다."
            }
          ]
        }
      ],
      [
        "電子レンジ",
        "でんしれんじ",
        "덴시렌지",
        "전자레인지",
        {
          "id": "noun_more2_36",
          "level": "N5-N4",
          "examples": [
            {
              "jp": "電子レンジで温めます。",
              "hira": "でんしれんじであたためます。",
              "pronunciation": "덴시렌지데 아타타메마스",
              "meaning": "전자레인지로 데웁니다."
            }
          ]
        }
      ],
      [
        "洗濯機",
        "せんたくき",
        "센타쿠키",
        "세탁기",
        {
          "id": "noun_more2_37",
          "level": "N5-N4",
          "examples": [
            {
              "jp": "洗濯機を使います。",
              "hira": "せんたくきをつかいます。",
              "pronunciation": "센타쿠키오 츠카이마스",
              "meaning": "세탁기를 사용합니다."
            }
          ]
        }
      ],
      [
        "掃除機",
        "そうじき",
        "소오지키",
        "청소기",
        {
          "id": "noun_more2_38",
          "level": "N5-N4",
          "examples": [
            {
              "jp": "掃除機をかけます。",
              "hira": "そうじきをかけます。",
              "pronunciation": "소오지키오 카케마스",
              "meaning": "청소기를 돌립니다."
            }
          ]
        }
      ],
      [
        "鍵",
        "かぎ",
        "카기",
        "열쇠",
        {
          "id": "noun_more2_39",
          "level": "N5-N4",
          "examples": [
            {
              "jp": "鍵をなくしました。",
              "hira": "かぎをなくしました。",
              "pronunciation": "카기오 나쿠시마시타",
              "meaning": "열쇠를 잃어버렸습니다."
            }
          ]
        }
      ],
      [
        "財布",
        "さいふ",
        "사이후",
        "지갑",
        {
          "id": "noun_more2_40",
          "level": "N5-N4",
          "examples": [
            {
              "jp": "財布をかばんに入れました。",
              "hira": "さいふをかばんにいれました。",
              "pronunciation": "사이후오 카반니 이레마시타",
              "meaning": "지갑을 가방에 넣었습니다."
            }
          ]
        }
      ],
      [
        "傘",
        "かさ",
        "카사",
        "우산",
        {
          "id": "noun_more2_41",
          "level": "N5-N4",
          "examples": [
            {
              "jp": "雨なので傘を持っていきます。",
              "hira": "あめなのでかさをもっていきます。",
              "pronunciation": "아메나노데 카사오 못테 이키마스",
              "meaning": "비가 와서 우산을 가지고 갑니다."
            }
          ]
        }
      ],
      [
        "靴",
        "くつ",
        "쿠츠",
        "신발",
        {
          "id": "noun_more2_42",
          "level": "N5-N4",
          "examples": [
            {
              "jp": "新しい靴を買いました。",
              "hira": "あたらしいくつをかいました。",
              "pronunciation": "아타라시이 쿠츠오 카이마시타",
              "meaning": "새 신발을 샀습니다."
            }
          ]
        }
      ],
      [
        "服",
        "ふく",
        "후쿠",
        "옷",
        {
          "id": "noun_more2_43",
          "level": "N5-N4",
          "examples": [
            {
              "jp": "この服は少し大きいです。",
              "hira": "このふくはすこしおおきいです。",
              "pronunciation": "코노 후쿠와 스코시 오오키이데스",
              "meaning": "이 옷은 조금 큽니다."
            }
          ]
        }
      ],
      [
        "帽子",
        "ぼうし",
        "보오시",
        "모자",
        {
          "id": "noun_more2_44",
          "level": "N5-N4",
          "examples": [
            {
              "jp": "帽子をかぶっています。",
              "hira": "ぼうしをかぶっています。",
              "pronunciation": "보오시오 카부잇테이마스",
              "meaning": "모자를 쓰고 있습니다."
            }
          ]
        }
      ],
      [
        "眼鏡",
        "めがね",
        "메가네",
        "안경",
        {
          "id": "noun_more2_45",
          "level": "N5-N4",
          "examples": [
            {
              "jp": "眼鏡を忘れました。",
              "hira": "めがねをわすれました。",
              "pronunciation": "메가네오 와스레마시타",
              "meaning": "안경을 잊어버렸습니다."
            }
          ]
        }
      ],
      [
        "荷物",
        "にもつ",
        "니모츠",
        "짐",
        {
          "id": "noun_more2_46",
          "level": "N5-N4",
          "examples": [
            {
              "jp": "荷物が多いです。",
              "hira": "にもつがおおいです。",
              "pronunciation": "니모츠가 오오이데스",
              "meaning": "짐이 많습니다."
            }
          ]
        }
      ],
      [
        "住所",
        "じゅうしょ",
        "쥬우쇼",
        "주소",
        {
          "id": "noun_more2_47",
          "level": "N5-N4",
          "examples": [
            {
              "jp": "住所を書いてください。",
              "hira": "じゅうしょをかいてください。",
              "pronunciation": "쥬우쇼오 카이테 쿠다사이",
              "meaning": "주소를 적어 주세요."
            }
          ]
        }
      ],
      [
        "名前",
        "なまえ",
        "나마에",
        "이름",
        {
          "id": "noun_more2_48",
          "level": "N5-N4",
          "examples": [
            {
              "jp": "名前を書いてください。",
              "hira": "なまえをかいてください。",
              "pronunciation": "나마에오 카이테 쿠다사이",
              "meaning": "이름을 적어 주세요."
            }
          ]
        }
      ],
      [
        "写真",
        "しゃしん",
        "샤신",
        "사진",
        {
          "id": "noun_more2_49",
          "level": "N5-N4",
          "examples": [
            {
              "jp": "写真を送ってください。",
              "hira": "しゃしんをおくってください。",
              "pronunciation": "샤신오 옷테 쿠다사이",
              "meaning": "사진을 보내 주세요."
            }
          ]
        }
      ],
      [
        "音楽",
        "おんがく",
        "온가쿠",
        "음악",
        {
          "id": "noun_more2_50",
          "level": "N5-N4",
          "examples": [
            {
              "jp": "音楽を聞きながら勉強します。",
              "hira": "おんがくをききながらべんきょうします。",
              "pronunciation": "온가쿠오 키키나가라 벤쿄오시마스",
              "meaning": "음악을 들으면서 공부합니다."
            }
          ]
        }
      ],
      [
        "映画館",
        "えいがかん",
        "에이가칸",
        "영화관",
        {
          "id": "noun_more2_51",
          "level": "N5-N4",
          "examples": [
            {
              "jp": "映画館で映画を見ました。",
              "hira": "えいがかんでえいがをみました。",
              "pronunciation": "에이가칸데 에이가오 미마시타",
              "meaning": "영화관에서 영화를 봤습니다."
            }
          ]
        }
      ],
      [
        "美術館",
        "びじゅつかん",
        "비주츠칸",
        "미술관",
        {
          "id": "noun_more2_52",
          "level": "N5-N4",
          "examples": [
            {
              "jp": "週末に美術館へ行きます。",
              "hira": "しゅうまつにびじゅつかんへいきます。",
              "pronunciation": "슈우마츠니 비주츠칸에 이키마스",
              "meaning": "주말에 미술관에 갑니다."
            }
          ]
        }
      ],
      [
        "公園",
        "こうえん",
        "코오엔",
        "공원",
        {
          "id": "noun_more2_53",
          "level": "N5-N4",
          "examples": [
            {
              "jp": "公園を散歩します。",
              "hira": "こうえんをさんぽします。",
              "pronunciation": "코오엔오 산포시마스",
              "meaning": "공원을 산책합니다."
            }
          ]
        }
      ],
      [
        "海岸",
        "かいがん",
        "카이간",
        "해안",
        {
          "id": "noun_more2_54",
          "level": "N5-N4",
          "examples": [
            {
              "jp": "海岸を歩きました。",
              "hira": "かいがんをあるきました。",
              "pronunciation": "카이간오 아루키마시타",
              "meaning": "해안을 걸었습니다."
            }
          ]
        }
      ],
      [
        "島",
        "しま",
        "시마",
        "섬",
        {
          "id": "noun_more2_55",
          "level": "N5-N4",
          "examples": [
            {
              "jp": "小さな島へ行きたいです。",
              "hira": "ちいさなしまへいきたいです。",
              "pronunciation": "치이사나 시마에 이키타이데스",
              "meaning": "작은 섬에 가고 싶습니다."
            }
          ]
        }
      ],
      [
        "川",
        "かわ",
        "카와",
        "강",
        {
          "id": "noun_more2_56",
          "level": "N5-N4",
          "examples": [
            {
              "jp": "川の近くを歩きます。",
              "hira": "かわのちかくをあるきます。",
              "pronunciation": "카와노 치카쿠오 아루키마스",
              "meaning": "강 근처를 걷습니다."
            }
          ]
        }
      ],
      [
        "森",
        "もり",
        "모리",
        "숲",
        {
          "id": "noun_more2_57",
          "level": "N5-N4",
          "examples": [
            {
              "jp": "森の中を歩きました。",
              "hira": "もりのなかをあるきました。",
              "pronunciation": "모리노 나카오 아루키마시타",
              "meaning": "숲속을 걸었습니다."
            }
          ]
        }
      ],
      [
        "空",
        "そら",
        "소라",
        "하늘",
        {
          "id": "noun_more2_58",
          "level": "N5-N4",
          "examples": [
            {
              "jp": "今日は空がきれいです。",
              "hira": "きょうはそらがきれいです。",
              "pronunciation": "쿄오와 소라가 키레이데스",
              "meaning": "오늘은 하늘이 예쁩니다."
            }
          ]
        }
      ],
      [
        "星",
        "ほし",
        "호시",
        "별",
        {
          "id": "noun_more2_59",
          "level": "N5-N4",
          "examples": [
            {
              "jp": "夜に星を見ました。",
              "hira": "よるにほしをみました。",
              "pronunciation": "요루니 호시오 미마시타",
              "meaning": "밤에 별을 봤습니다."
            }
          ]
        }
      ],
      [
        "月",
        "つき",
        "츠키",
        "달",
        {
          "id": "noun_more2_60",
          "level": "N5-N4",
          "examples": [
            {
              "jp": "今日は月がきれいです。",
              "hira": "きょうはつきがきれいです。",
              "pronunciation": "쿄오와 츠키가 키레이데스",
              "meaning": "오늘은 달이 예쁩니다."
            }
          ]
        }
      ],
      [
        "雨",
        "あめ",
        "아메",
        "비",
        {
          "id": "noun_more2_61",
          "level": "N5-N4",
          "examples": [
            {
              "jp": "雨が降っています。",
              "hira": "あめがふっています。",
              "pronunciation": "아메가 훗테이마스",
              "meaning": "비가 오고 있습니다."
            }
          ]
        }
      ],
      [
        "雪",
        "ゆき",
        "유키",
        "눈",
        {
          "id": "noun_more2_62",
          "level": "N5-N4",
          "examples": [
            {
              "jp": "冬は雪が降ります。",
              "hira": "ふゆはゆきがふります。",
              "pronunciation": "후유와 유키가 후리마스",
              "meaning": "겨울에는 눈이 옵니다."
            }
          ]
        }
      ],
      [
        "風",
        "かぜ",
        "카제",
        "바람",
        {
          "id": "noun_more2_63",
          "level": "N5-N4",
          "examples": [
            {
              "jp": "今日は風が強いです。",
              "hira": "きょうはかぜがつよいです。",
              "pronunciation": "쿄오와 카제가 츠요이데스",
              "meaning": "오늘은 바람이 강합니다."
            }
          ]
        }
      ],
      [
        "気温",
        "きおん",
        "키온",
        "기온",
        {
          "id": "noun_more2_64",
          "level": "N5-N4",
          "examples": [
            {
              "jp": "今日は気温が低いです。",
              "hira": "きょうはきおんがひくいです。",
              "pronunciation": "쿄오와 키온가 히쿠이데스",
              "meaning": "오늘은 기온이 낮습니다."
            }
          ]
        }
      ],
      [
        "季節",
        "きせつ",
        "키세츠",
        "계절",
        {
          "id": "noun_more2_65",
          "level": "N5-N4",
          "examples": [
            {
              "jp": "好きな季節は秋です。",
              "hira": "すきなきせつはあきです。",
              "pronunciation": "스키나 키세츠와 아키데스",
              "meaning": "좋아하는 계절은 가을입니다."
            }
          ]
        }
      ],
      [
        "春",
        "はる",
        "하루",
        "봄",
        {
          "id": "noun_more2_66",
          "level": "N5-N4",
          "examples": [
            {
              "jp": "春になると暖かくなります。",
              "hira": "はるになるとあたたかくなります。",
              "pronunciation": "하루니 나루토 아타타카쿠 나리마스",
              "meaning": "봄이 되면 따뜻해집니다."
            }
          ]
        }
      ],
      [
        "夏",
        "なつ",
        "나츠",
        "여름",
        {
          "id": "noun_more2_67",
          "level": "N5-N4",
          "examples": [
            {
              "jp": "夏は海へ行きます。",
              "hira": "なつはうみへいきます。",
              "pronunciation": "나츠와 우미에 이키마스",
              "meaning": "여름에는 바다에 갑니다."
            }
          ]
        }
      ],
      [
        "秋",
        "あき",
        "아키",
        "가을",
        {
          "id": "noun_more2_68",
          "level": "N5-N4",
          "examples": [
            {
              "jp": "秋は涼しいです。",
              "hira": "あきはすずしいです。",
              "pronunciation": "아키와 스즈시이데스",
              "meaning": "가을은 시원합니다."
            }
          ]
        }
      ],
      [
        "冬",
        "ふゆ",
        "후유",
        "겨울",
        {
          "id": "noun_more2_69",
          "level": "N5-N4",
          "examples": [
            {
              "jp": "冬は寒いです。",
              "hira": "ふゆはさむいです。",
              "pronunciation": "후유와 사무이데스",
              "meaning": "겨울은 춥습니다."
            }
          ]
        }
      ]
    ]
  },
  "い형용사": {
    "날씨·환경": [
      [
        "暑い",
        "あつい",
        "아츠이",
        "덥다",
        {
          "id": "i_adj_atsui",
          "level": "N5",
          "examples": [
            {
              "jp": "今日は暑いです。",
              "hira": "きょうはあついです。",
              "pronunciation": "쿄오와 아츠이데스",
              "meaning": "오늘은 덥습니다."
            }
          ]
        }
      ],
      [
        "寒い",
        "さむい",
        "사무이",
        "춥다",
        {
          "id": "i_adj_samui",
          "level": "N5",
          "examples": [
            {
              "jp": "今日は寒いです。",
              "hira": "きょうはさむいです。",
              "pronunciation": "쿄오와 사무이데스",
              "meaning": "오늘은 춥습니다."
            }
          ]
        }
      ]
    ],
    "맛·감각": [
      [
        "甘い",
        "あまい",
        "아마이",
        "달다",
        {
          "id": "iadd_0_맛·감각",
          "level": "N5",
          "examples": [
            {
              "jp": "このケーキは甘いです。",
              "hira": "このけーきはあまいです",
              "pronunciation": "코노 케이키와 아마이데스",
              "meaning": "이 케이크는 답니다."
            }
          ]
        }
      ],
      [
        "辛い",
        "からい",
        "카라이",
        "맵다",
        {
          "id": "iadd_1_맛·감각",
          "level": "N5",
          "examples": [
            {
              "jp": "この料理は辛いです。",
              "hira": "このりょうりはからいです",
              "pronunciation": "코노 료오리와 카라이데스",
              "meaning": "이 요리는 맵습니다."
            }
          ]
        }
      ],
      [
        "苦い",
        "にがい",
        "니가이",
        "쓰다",
        {
          "id": "iadd_2_맛·감각",
          "level": "N5",
          "examples": [
            {
              "jp": "この薬は苦いです。",
              "hira": "このくすりはにがいです",
              "pronunciation": "코노 쿠스리와 니가이데스",
              "meaning": "이 약은 씁니다."
            }
          ]
        }
      ],
      [
        "熱い",
        "あつい",
        "아츠이",
        "뜨겁다",
        {
          "id": "iadd_3_맛·감각",
          "level": "N5",
          "examples": [
            {
              "jp": "お茶が熱いです。",
              "hira": "おちゃがあついです",
              "pronunciation": "오차가 아츠이데스",
              "meaning": "차가 뜨겁습니다."
            }
          ]
        }
      ]
    ],
    "크기·정도": [
      [
        "高い",
        "たかい",
        "타카이",
        "높다 / 비싸다",
        {
          "id": "i_adj_takai",
          "level": "N5",
          "examples": [
            {
              "jp": "この時計は高いです。",
              "hira": "このとけいはたかいです。",
              "pronunciation": "코노 토케이와 타카이데스",
              "meaning": "이 시계는 비쌉니다."
            }
          ]
        }
      ],
      [
        "安い",
        "やすい",
        "야스이",
        "싸다",
        {
          "id": "i_adj_yasui",
          "level": "N5",
          "examples": [
            {
              "jp": "この店は安いです。",
              "hira": "このみせはやすいです。",
              "pronunciation": "코노 미세와 야스이데스",
              "meaning": "이 가게는 쌉니다."
            }
          ]
        }
      ],
      [
        "大きい",
        "おおきい",
        "오오키이",
        "크다",
        {
          "id": "i_adj_ookii",
          "level": "N5",
          "examples": [
            {
              "jp": "この犬は大きいです。",
              "hira": "このいぬはおおきいです。",
              "pronunciation": "코노 이누와 오오키이데스",
              "meaning": "이 개는 큽니다."
            }
          ]
        }
      ],
      [
        "小さい",
        "ちいさい",
        "치이사이",
        "작다",
        {
          "id": "i_adj_chiisai",
          "level": "N5",
          "examples": [
            {
              "jp": "この部屋は小さいです。",
              "hira": "このへやはちいさいです。",
              "pronunciation": "코노 헤야와 치이사이데스",
              "meaning": "이 방은 작습니다."
            }
          ]
        }
      ]
    ],
    "상태": [
      [
        "新しい",
        "あたらしい",
        "아타라시이",
        "새롭다",
        {
          "id": "i_adj_atarashii",
          "level": "N5",
          "examples": [
            {
              "jp": "新しい本です。",
              "hira": "あたらしいほんです。",
              "pronunciation": "아타라시이 혼데스",
              "meaning": "새 책입니다."
            }
          ]
        }
      ]
    ],
    "평가": [
      [
        "良い",
        "いい",
        "이이",
        "좋다",
        {
          "id": "adj_i_a65e82eb35",
          "form": "adjective",
          "level": "N5",
          "meta": {
            "partOfSpeech": "い형용사"
          },
          "examples": [
            {
              "jp": "今日は良いです。",
              "hira": "きょうはいいです。",
              "pronunciation": "이이",
              "meaning": "오늘은 좋다."
            }
          ]
        }
      ]
    ],
    "감정·기분": [
      [
        "楽しい",
        "たのしい",
        "타노시이",
        "즐겁다",
        {
          "id": "iadd_0_감정·기분",
          "level": "N5",
          "examples": [
            {
              "jp": "今日は楽しいです。",
              "hira": "きょうはたのしいです",
              "pronunciation": "쿄오와 타노시이데스",
              "meaning": "오늘은 즐겁습니다."
            }
          ]
        }
      ],
      [
        "嬉しい",
        "うれしい",
        "우레시이",
        "기쁘다",
        {
          "id": "iadd_1_감정·기분",
          "level": "N5",
          "examples": [
            {
              "jp": "とても嬉しいです。",
              "hira": "とてもうれしいです",
              "pronunciation": "토테모 우레시이데스",
              "meaning": "정말 기쁩니다."
            }
          ]
        }
      ],
      [
        "悲しい",
        "かなしい",
        "카나시이",
        "슬프다",
        {
          "id": "iadd_2_감정·기분",
          "level": "N5",
          "examples": [
            {
              "jp": "少し悲しいです。",
              "hira": "すこしかなしいです",
              "pronunciation": "스코시 카나시이데스",
              "meaning": "조금 슬픕니다."
            }
          ]
        }
      ],
      [
        "寂しい",
        "さびしい",
        "사비시이",
        "외롭다",
        {
          "id": "iadd_3_감정·기분",
          "level": "N5",
          "examples": [
            {
              "jp": "一人で寂しいです。",
              "hira": "ひとりでさびしいです",
              "pronunciation": "히토리데 사비시이데스",
              "meaning": "혼자라서 외롭습니다."
            }
          ]
        }
      ]
    ],
    "크기·모양": [
      [
        "太い",
        "ふとい",
        "후토이",
        "굵다",
        {
          "id": "iadd_0_크기·모양",
          "level": "N5",
          "examples": [
            {
              "jp": "この道は太いです。",
              "hira": "このみちはふといです",
              "pronunciation": "코노 미치와 후토이데스",
              "meaning": "이 길은 넓고 굵습니다."
            }
          ]
        }
      ],
      [
        "細い",
        "ほそい",
        "호소이",
        "가늘다",
        {
          "id": "iadd_1_크기·모양",
          "level": "N5",
          "examples": [
            {
              "jp": "細い道です。",
              "hira": "ほそいみちです",
              "pronunciation": "호소이 미치데스",
              "meaning": "좁고 가는 길입니다."
            }
          ]
        }
      ],
      [
        "重い",
        "おもい",
        "오모이",
        "무겁다",
        {
          "id": "iadd_2_크기·모양",
          "level": "N5",
          "examples": [
            {
              "jp": "この荷物は重いです。",
              "hira": "このにもつはおもいです",
              "pronunciation": "코노 니모츠와 오모이데스",
              "meaning": "이 짐은 무겁습니다."
            }
          ]
        }
      ],
      [
        "軽い",
        "かるい",
        "카루이",
        "가볍다",
        {
          "id": "iadd_3_크기·모양",
          "level": "N5",
          "examples": [
            {
              "jp": "この鞄は軽いです。",
              "hira": "このかばんはかるいです",
              "pronunciation": "코노 카방와 카루이데스",
              "meaning": "이 가방은 가볍습니다."
            }
          ]
        }
      ]
    ],
    "성질·상태": [
      [
        "優しい",
        "やさしい",
        "야사시이",
        "상냥하다",
        {
          "id": "iadj_add_cc6e2362",
          "level": "N5",
          "examples": [
            {
              "jp": "あの先生はとても優しいです。",
              "hira": "あのせんせいはとてもやさしいです。",
              "pronunciation": "아노 센세이와 토테모 야사시이데스",
              "meaning": "저 선생님은 매우 상냥합니다."
            }
          ]
        }
      ],
      [
        "厳しい",
        "きびしい",
        "키비시이",
        "엄격하다 / 혹독하다",
        {
          "id": "iadj_add_479c71dd",
          "level": "N5",
          "examples": [
            {
              "jp": "父は仕事に厳しいです。",
              "hira": "ちちはしごとにきびしいです。",
              "pronunciation": "치치와 시고토니 키비시이데스",
              "meaning": "아버지는 일에 엄격합니다."
            }
          ]
        }
      ],
      [
        "若い",
        "わかい",
        "와카이",
        "젊다",
        {
          "id": "iadj_add_93d8120c",
          "level": "N5",
          "examples": [
            {
              "jp": "彼はまだ若いです。",
              "hira": "かれはまだわかいです。",
              "pronunciation": "카레와 마다 와카이데스",
              "meaning": "그는 아직 젊습니다."
            }
          ]
        }
      ],
      [
        "古い",
        "ふるい",
        "후루이",
        "오래되다 / 낡다",
        {
          "id": "iadj_add_4825e141",
          "level": "N5",
          "examples": [
            {
              "jp": "これは古い時計です。",
              "hira": "これはふるいとけいです。",
              "pronunciation": "코레와 후루이 토케이데스",
              "meaning": "이것은 오래된 시계입니다."
            }
          ]
        }
      ],
      [
        "近い",
        "ちかい",
        "치카이",
        "가깝다",
        {
          "id": "iadj_add_5466e8d1",
          "level": "N5",
          "examples": [
            {
              "jp": "駅はここから近いです。",
              "hira": "えきはここからちかいです。",
              "pronunciation": "에키와 코코카라 치카이데스",
              "meaning": "역은 여기서 가깝습니다."
            }
          ]
        }
      ],
      [
        "遠い",
        "とおい",
        "토오이",
        "멀다",
        {
          "id": "iadj_add_19a5a461",
          "level": "N5",
          "examples": [
            {
              "jp": "会社は家から遠いです。",
              "hira": "かいしゃはいえからとおいです。",
              "pronunciation": "카이샤와 이에카라 토오이데스",
              "meaning": "회사는 집에서 멉니다."
            }
          ]
        }
      ],
      [
        "早い",
        "はやい",
        "하야이",
        "빠르다 / 이르다",
        {
          "id": "iadj_add_80a990ac",
          "level": "N5",
          "examples": [
            {
              "jp": "朝は起きるのが早いです。",
              "hira": "あさはおきるのがはやいです。",
              "pronunciation": "아사와 오키루노가 하야이데스",
              "meaning": "아침에는 일찍 일어납니다."
            }
          ]
        }
      ],
      [
        "遅い",
        "おそい",
        "오소이",
        "느리다 / 늦다",
        {
          "id": "iadj_add_1d2d4a23",
          "level": "N5",
          "examples": [
            {
              "jp": "今日は帰りが遅いです。",
              "hira": "きょうはかえりがおそいです。",
              "pronunciation": "쿄오와 카에리가 오소이데스",
              "meaning": "오늘은 귀가가 늦습니다."
            }
          ]
        }
      ],
      [
        "広い",
        "ひろい",
        "히로이",
        "넓다",
        {
          "id": "iadj_add_a46bf87b",
          "level": "N5",
          "examples": [
            {
              "jp": "この部屋は広いです。",
              "hira": "このへやはひろいです。",
              "pronunciation": "코노 헤야와 히로이데스",
              "meaning": "이 방은 넓습니다."
            }
          ]
        }
      ],
      [
        "狭い",
        "せまい",
        "세마이",
        "좁다",
        {
          "id": "iadj_add_d99560c9",
          "level": "N5",
          "examples": [
            {
              "jp": "この道は狭いです。",
              "hira": "このみちはせまいです。",
              "pronunciation": "코노 미치와 세마이데스",
              "meaning": "이 길은 좁습니다."
            }
          ]
        }
      ],
      [
        "明るい",
        "あかるい",
        "아카루이",
        "밝다",
        {
          "id": "iadj_add_4777e1b8",
          "level": "N5",
          "examples": [
            {
              "jp": "この部屋は明るいです。",
              "hira": "このへやはあかるいです。",
              "pronunciation": "코노 헤야와 아카루이데스",
              "meaning": "이 방은 밝습니다."
            }
          ]
        }
      ],
      [
        "暗い",
        "くらい",
        "쿠라이",
        "어둡다",
        {
          "id": "iadj_add_a31d4f73",
          "level": "N5",
          "examples": [
            {
              "jp": "外はもう暗いです。",
              "hira": "そとはもうくらいです。",
              "pronunciation": "소토와 모오 쿠라이데스",
              "meaning": "밖은 벌써 어둡습니다."
            }
          ]
        }
      ],
      [
        "難しい",
        "むずかしい",
        "무즈카시이",
        "어렵다",
        {
          "id": "iadj_add_58f31e4d",
          "level": "N5",
          "examples": [
            {
              "jp": "この問題は難しいです。",
              "hira": "このもんだいはむずかしいです。",
              "pronunciation": "코노 몬다이와 무즈카시이데스",
              "meaning": "이 문제는 어렵습니다."
            }
          ]
        }
      ],
      [
        "易しい",
        "やさしい",
        "야사시이",
        "쉽다",
        {
          "id": "iadj_add_1d9e9dfd",
          "level": "N5",
          "examples": [
            {
              "jp": "この問題は易しいです。",
              "hira": "このもんだいはやさしいです。",
              "pronunciation": "코노 몬다이와 야사시이데스",
              "meaning": "이 문제는 쉽습니다."
            }
          ]
        }
      ],
      [
        "面白い",
        "おもしろい",
        "오모시로이",
        "재미있다",
        {
          "id": "iadj_add_434cc811",
          "level": "N5",
          "examples": [
            {
              "jp": "この映画は面白いです。",
              "hira": "このえいがはおもしろいです。",
              "pronunciation": "코노 에이가와 오모시로이데스",
              "meaning": "이 영화는 재미있습니다."
            }
          ]
        }
      ],
      [
        "つまらない",
        "つまらない",
        "츠마라나이",
        "재미없다",
        {
          "id": "iadj_add_000076e8",
          "level": "N5",
          "examples": [
            {
              "jp": "その映画はつまらなかったです。",
              "hira": "そのえいがはつまらなかったです。",
              "pronunciation": "소노 에이가와 츠마라나캇타데스",
              "meaning": "그 영화는 재미없었습니다."
            }
          ]
        }
      ],
      [
        "長い",
        "ながい",
        "나가이",
        "길다",
        {
          "id": "iadd_4",
          "level": "N5",
          "examples": [
            {
              "jp": "髪が長いです。",
              "hira": "かみがながいです。",
              "pronunciation": "카미가 나가이데스",
              "meaning": "머리가 길어요."
            }
          ]
        }
      ],
      [
        "短い",
        "みじかい",
        "미지카이",
        "짧다",
        {
          "id": "iadd_5",
          "level": "N5",
          "examples": [
            {
              "jp": "休みが短いです。",
              "hira": "やすみがみじかいです。",
              "pronunciation": "야스미가 미지카이데스",
              "meaning": "휴일이 짧아요."
            }
          ]
        }
      ],
      [
        "強い",
        "つよい",
        "츠요이",
        "강하다",
        {
          "id": "iadd_10",
          "level": "N5",
          "examples": [
            {
              "jp": "今日は風が強いです。",
              "hira": "きょうはかぜがつよいです。",
              "pronunciation": "쿄오와 카제가 츠요이데스",
              "meaning": "오늘은 바람이 강해요."
            }
          ]
        }
      ],
      [
        "弱い",
        "よわい",
        "요와이",
        "약하다",
        {
          "id": "iadd_11",
          "level": "N5",
          "examples": [
            {
              "jp": "私はお酒に弱いです。",
              "hira": "わたしはおさけによわいです。",
              "pronunciation": "와타시와 오사케니 요와이데스",
              "meaning": "저는 술에 약해요."
            }
          ]
        }
      ]
    ],
    "감각·성질 추가": [
      [
        "酸っぱい",
        "すっぱい",
        "슷파이",
        "시다",
        {
          "id": "iadd2_3",
          "level": "N4",
          "examples": [
            {
              "jp": "このレモンは酸っぱいです。",
              "hira": "このレモンはすっぱいです。",
              "pronunciation": "코노 레몬와 슷파이데스",
              "meaning": "이 레몬은 셔요."
            }
          ]
        }
      ],
      [
        "美味しい",
        "おいしい",
        "오이시이",
        "맛있다",
        {
          "id": "iadd2_4",
          "level": "N4",
          "examples": [
            {
              "jp": "この店の料理は美味しいです。",
              "hira": "このみせのりょうりはおいしいです。",
              "pronunciation": "코노 미세노 료오리와 오이시이데스",
              "meaning": "이 가게 음식은 맛있어요."
            }
          ]
        }
      ],
      [
        "まずい",
        "まずい",
        "마즈이",
        "맛없다",
        {
          "id": "iadd2_5",
          "level": "N4",
          "examples": [
            {
              "jp": "この料理はまずくないです。",
              "hira": "このりょうりはまずくないです。",
              "pronunciation": "코노 료오리와 마즈쿠 나이데스",
              "meaning": "이 요리는 맛없지 않아요."
            }
          ]
        }
      ],
      [
        "柔らかい",
        "やわらかい",
        "야와라카이",
        "부드럽다",
        {
          "id": "iadd2_6",
          "level": "N4",
          "examples": [
            {
              "jp": "肉が柔らかいです。",
              "hira": "にくがやわらかいです。",
              "pronunciation": "니쿠가 야와라카이데스",
              "meaning": "고기가 부드러워요."
            }
          ]
        }
      ],
      [
        "硬い",
        "かたい",
        "카타이",
        "딱딱하다",
        {
          "id": "iadd2_7",
          "level": "N4",
          "examples": [
            {
              "jp": "このパンは硬いです。",
              "hira": "このパンはかたいです。",
              "pronunciation": "코노 판와 카타이데스",
              "meaning": "이 빵은 딱딱해요."
            }
          ]
        }
      ],
      [
        "深い",
        "ふかい",
        "후카이",
        "깊다",
        {
          "id": "iadd2_8",
          "level": "N4",
          "examples": [
            {
              "jp": "この川は深いです。",
              "hira": "このかわはふかいです。",
              "pronunciation": "코노 카와와 후카이데스",
              "meaning": "이 강은 깊어요."
            }
          ]
        }
      ],
      [
        "浅い",
        "あさい",
        "아사이",
        "얕다",
        {
          "id": "iadd2_9",
          "level": "N4",
          "examples": [
            {
              "jp": "この川は浅いです。",
              "hira": "このかわはあさいです。",
              "pronunciation": "코노 카와와 아사이데스",
              "meaning": "이 강은 얕아요."
            }
          ]
        }
      ]
    ],
    "추가 기초·실전": [
      [
        "難しい",
        "むずかしい",
        "무즈카시이",
        "어렵다",
        {
          "id": "iadj_more_0",
          "level": "N5",
          "examples": [
            {
              "jp": "この漢字は難しいです。",
              "hira": "このかんじはむずかしいです。",
              "pronunciation": "코노 칸지와 무즈카시이데스",
              "meaning": "이 한자는 어렵습니다."
            }
          ]
        }
      ],
      [
        "易しい",
        "やさしい",
        "야사시이",
        "쉽다",
        {
          "id": "iadj_more_1",
          "level": "N5",
          "examples": [
            {
              "jp": "この問題は易しいです。",
              "hira": "このもんだいはやさしいです。",
              "pronunciation": "코노 몬다이와 야사시이데스",
              "meaning": "이 문제는 쉽습니다."
            }
          ]
        }
      ],
      [
        "近い",
        "ちかい",
        "치카이",
        "가깝다",
        {
          "id": "iadj_more_2",
          "level": "N5",
          "examples": [
            {
              "jp": "駅はここから近いです。",
              "hira": "えきはここからちかいです。",
              "pronunciation": "에키와 코코카라 치카이데스",
              "meaning": "역은 여기서 가깝습니다."
            }
          ]
        }
      ],
      [
        "遠い",
        "とおい",
        "토오이",
        "멀다",
        {
          "id": "iadj_more_3",
          "level": "N5",
          "examples": [
            {
              "jp": "駅は少し遠いです。",
              "hira": "えきはすこしとおいです。",
              "pronunciation": "에키와 스코시 토오이데스",
              "meaning": "역은 조금 멉니다."
            }
          ]
        }
      ],
      [
        "早い",
        "はやい",
        "하야이",
        "빠르다 / 이르다",
        {
          "id": "iadj_more_4",
          "level": "N5",
          "examples": [
            {
              "jp": "朝は早いです。",
              "hira": "あさははやいです。",
              "pronunciation": "아사와 하야이데스",
              "meaning": "아침은 이릅니다."
            }
          ]
        }
      ],
      [
        "遅い",
        "おそい",
        "오소이",
        "늦다 / 느리다",
        {
          "id": "iadj_more_5",
          "level": "N5",
          "examples": [
            {
              "jp": "今日は帰りが遅いです。",
              "hira": "きょうはかえりがおそいです。",
              "pronunciation": "쿄오와 카에리가 오소이데스",
              "meaning": "오늘은 귀가가 늦습니다."
            }
          ]
        }
      ],
      [
        "重い",
        "おもい",
        "오모이",
        "무겁다",
        {
          "id": "iadj_more_6",
          "level": "N5",
          "examples": [
            {
              "jp": "この荷物は重いです。",
              "hira": "このにもつはおもいです。",
              "pronunciation": "코노 니모츠와 오모이데스",
              "meaning": "이 짐은 무겁습니다."
            }
          ]
        }
      ],
      [
        "軽い",
        "かるい",
        "카루이",
        "가볍다",
        {
          "id": "iadj_more_7",
          "level": "N5",
          "examples": [
            {
              "jp": "このバッグは軽いです。",
              "hira": "このばっぐはかるいです。",
              "pronunciation": "코노 백구와 카루이데스",
              "meaning": "이 가방은 가볍습니다."
            }
          ]
        }
      ],
      [
        "長い",
        "ながい",
        "나가이",
        "길다",
        {
          "id": "iadj_more_8",
          "level": "N5",
          "examples": [
            {
              "jp": "髪が長いです。",
              "hira": "かみがながいです。",
              "pronunciation": "카미가 나가이데스",
              "meaning": "머리가 깁니다."
            }
          ]
        }
      ],
      [
        "短い",
        "みじかい",
        "미지카이",
        "짧다",
        {
          "id": "iadj_more_9",
          "level": "N5",
          "examples": [
            {
              "jp": "休みは短いです。",
              "hira": "やすみはみじかいです。",
              "pronunciation": "야스미와 미지카이데스",
              "meaning": "휴일은 짧습니다."
            }
          ]
        }
      ]
    ],
    "추가 감각·상태": [
      [
        "深い",
        "ふかい",
        "후카이",
        "깊다",
        {
          "id": "iadj_more2_0",
          "level": "N4",
          "examples": [
            {
              "jp": "この川は深いです。",
              "hira": "このかわはふかいです。",
              "pronunciation": "코노 카와와 후카이데스",
              "meaning": "이 강은 깊습니다."
            }
          ]
        }
      ],
      [
        "浅い",
        "あさい",
        "아사이",
        "얕다",
        {
          "id": "iadj_more2_1",
          "level": "N4",
          "examples": [
            {
              "jp": "このプールは浅いです。",
              "hira": "このぷーるはあさいです。",
              "pronunciation": "코노 푸우루와 아사이데스",
              "meaning": "이 수영장은 얕습니다."
            }
          ]
        }
      ],
      [
        "太い",
        "ふとい",
        "후토이",
        "굵다",
        {
          "id": "iadj_more2_2",
          "level": "N4",
          "examples": [
            {
              "jp": "この道は太いです。",
              "hira": "このみちはふといです。",
              "pronunciation": "코노 미치와 후토이데스",
              "meaning": "이 길은 넓고 굵습니다."
            }
          ]
        }
      ],
      [
        "細い",
        "ほそい",
        "호소이",
        "가늘다",
        {
          "id": "iadj_more2_3",
          "level": "N4",
          "examples": [
            {
              "jp": "このペンは細いです。",
              "hira": "このぺんはほそいです。",
              "pronunciation": "코노 펜와 호소이데스",
              "meaning": "이 펜은 가늘습니다."
            }
          ]
        }
      ],
      [
        "明るい",
        "あかるい",
        "아카루이",
        "밝다",
        {
          "id": "iadj_more2_4",
          "level": "N4",
          "examples": [
            {
              "jp": "この部屋は明るいです。",
              "hira": "このへやはあかるいです。",
              "pronunciation": "코노 헤야와 아카루이데스",
              "meaning": "이 방은 밝습니다."
            }
          ]
        }
      ],
      [
        "暗い",
        "くらい",
        "쿠라이",
        "어둡다",
        {
          "id": "iadj_more2_5",
          "level": "N4",
          "examples": [
            {
              "jp": "外はもう暗いです。",
              "hira": "そとはもうくらいです。",
              "pronunciation": "소토와 모오 쿠라이데스",
              "meaning": "밖은 벌써 어둡습니다."
            }
          ]
        }
      ],
      [
        "温かい",
        "あたたかい",
        "아타타카이",
        "따뜻하다",
        {
          "id": "iadj_more2_6",
          "level": "N4",
          "examples": [
            {
              "jp": "温かいお茶を飲みます。",
              "hira": "あたたかいおちゃをのみます。",
              "pronunciation": "아타타카이 오차오 노미마스",
              "meaning": "따뜻한 차를 마십니다."
            }
          ]
        }
      ],
      [
        "冷たい",
        "つめたい",
        "츠메타이",
        "차갑다",
        {
          "id": "iadj_more2_7",
          "level": "N4",
          "examples": [
            {
              "jp": "冷たい水をください。",
              "hira": "つめたいみずをください。",
              "pronunciation": "츠메타이 미즈오 쿠다사이",
              "meaning": "차가운 물을 주세요."
            }
          ]
        }
      ],
      [
        "柔らかい",
        "やわらかい",
        "야와라카이",
        "부드럽다",
        {
          "id": "iadj_more2_8",
          "level": "N4",
          "examples": [
            {
              "jp": "このパンは柔らかいです。",
              "hira": "このぱんはやわらかいです。",
              "pronunciation": "코노 판와 야와라카이데스",
              "meaning": "이 빵은 부드럽습니다."
            }
          ]
        }
      ],
      [
        "硬い",
        "かたい",
        "카타이",
        "딱딱하다",
        {
          "id": "iadj_more2_9",
          "level": "N4",
          "examples": [
            {
              "jp": "このパンは少し硬いです。",
              "hira": "このぱんはすこしかたいです。",
              "pronunciation": "코노 판와 스코시 카타이데스",
              "meaning": "이 빵은 조금 딱딱합니다."
            }
          ]
        }
      ],
      [
        "珍しい",
        "めずらしい",
        "메즈라시이",
        "드물다 / 진귀하다",
        {
          "id": "iadj_more2_10",
          "level": "N4",
          "examples": [
            {
              "jp": "珍しい料理を食べました。",
              "hira": "めずらしいりょうりをたべました。",
              "pronunciation": "메즈라시이 료오리오 타베마시타",
              "meaning": "특이한 요리를 먹었습니다."
            }
          ]
        }
      ],
      [
        "危ない",
        "あぶない",
        "아부나이",
        "위험하다",
        {
          "id": "iadj_more2_11",
          "level": "N4",
          "examples": [
            {
              "jp": "ここは危ないです。",
              "hira": "ここはあぶないです。",
              "pronunciation": "코코와 아부나이데스",
              "meaning": "여기는 위험합니다."
            }
          ]
        }
      ],
      [
        "眠い",
        "ねむい",
        "네무이",
        "졸리다",
        {
          "id": "iadj_more2_12",
          "level": "N4",
          "examples": [
            {
              "jp": "今日はとても眠いです。",
              "hira": "きょうはとてもねむいです。",
              "pronunciation": "쿄오와 토테모 네무이데스",
              "meaning": "오늘은 매우 졸립니다."
            }
          ]
        }
      ],
      [
        "痛い",
        "いたい",
        "이타이",
        "아프다",
        {
          "id": "iadj_more2_13",
          "level": "N4",
          "examples": [
            {
              "jp": "足が痛いです。",
              "hira": "あしがいたいです。",
              "pronunciation": "아시가 이타이데스",
              "meaning": "발이 아픕니다."
            }
          ]
        }
      ],
      [
        "強い",
        "つよい",
        "츠요이",
        "강하다",
        {
          "id": "iadj_more2_14",
          "level": "N4",
          "examples": [
            {
              "jp": "今日は風が強いです。",
              "hira": "きょうはかぜがつよいです。",
              "pronunciation": "쿄오와 카제가 츠요이데스",
              "meaning": "오늘은 바람이 강합니다."
            }
          ]
        }
      ],
      [
        "弱い",
        "よわい",
        "요와이",
        "약하다",
        {
          "id": "iadj_more2_15",
          "level": "N4",
          "examples": [
            {
              "jp": "この薬は少し弱いです。",
              "hira": "このくすりはすこしよわいです。",
              "pronunciation": "코노 쿠스리와 스코시 요와이데스",
              "meaning": "이 약은 조금 약합니다."
            }
          ]
        }
      ]
    ]
  },
  "な형용사": {
    "상태": [
      [
        "静か",
        "しずか",
        "시즈카",
        "조용하다",
        {
          "id": "na_adj_shizuka",
          "level": "N5",
          "examples": [
            {
              "jp": "この部屋は静かです。",
              "hira": "このへやはしずかです。",
              "pronunciation": "코노 헤야와 시즈카데스",
              "meaning": "이 방은 조용합니다."
            }
          ]
        }
      ],
      [
        "元気",
        "げんき",
        "겐키",
        "건강하다 / 기운이 있다",
        {
          "id": "na_adj_genki",
          "level": "N5",
          "examples": [
            {
              "jp": "元気ですか。",
              "hira": "げんきですか。",
              "pronunciation": "겐키데스카",
              "meaning": "잘 지내세요?"
            }
          ]
        }
      ]
    ],
    "평가": [
      [
        "便利",
        "べんり",
        "벤리",
        "편리하다",
        {
          "id": "na_adj_benri",
          "level": "N5",
          "examples": [
            {
              "jp": "このアプリは便利です。",
              "hira": "このアプリはべんりです。",
              "pronunciation": "코노 아푸리와 벤리데스",
              "meaning": "이 앱은 편리합니다."
            }
          ]
        }
      ],
      [
        "大事",
        "だいじ",
        "다이지",
        "중요하다 / 소중하다",
        {
          "id": "na_adj_daiji",
          "level": "N5",
          "examples": [
            {
              "jp": "家族は大事です。",
              "hira": "かぞくはだいじです。",
              "pronunciation": "카조쿠와 다이지데스",
              "meaning": "가족은 소중합니다."
            }
          ]
        }
      ]
    ],
    "외모·상태": [
      [
        "きれい",
        "きれい",
        "키레이",
        "예쁘다 / 깨끗하다",
        {
          "id": "na_adj_kirei",
          "level": "N5",
          "examples": [
            {
              "jp": "この町はきれいです。",
              "hira": "このまちはきれいです。",
              "pronunciation": "코노 마치와 키레이데스",
              "meaning": "이 마을은 깨끗합니다."
            }
          ]
        }
      ]
    ],
    "감정": [
      [
        "好き",
        "すき",
        "스키",
        "좋아하다 / 좋아하는",
        {
          "id": "na_adj_suki",
          "level": "N5",
          "examples": [
            {
              "jp": "日本語が好きです。",
              "hira": "にほんごがすきです。",
              "pronunciation": "니혼고가 스키데스",
              "meaning": "일본어를 좋아합니다."
            }
          ]
        }
      ]
    ],
    "성격·평가": [
      [
        "真面目",
        "まじめ",
        "마지메",
        "성실하다",
        {
          "id": "naadd_0_성격·평가",
          "level": "N5",
          "examples": [
            {
              "jp": "真面目な学生です。",
              "hira": "まじめながくせいです",
              "pronunciation": "마지메나 가쿠세이데스",
              "meaning": "성실한 학생입니다."
            }
          ]
        }
      ],
      [
        "有名",
        "ゆうめい",
        "유우메이",
        "유명하다",
        {
          "id": "naadd_1_성격·평가",
          "level": "N5",
          "examples": [
            {
              "jp": "有名な店です。",
              "hira": "ゆうめいなみせです",
              "pronunciation": "유우메이나 미세데스",
              "meaning": "유명한 가게입니다."
            }
          ]
        }
      ],
      [
        "特別",
        "とくべつ",
        "토쿠베츠",
        "특별하다",
        {
          "id": "naadd_2_성격·평가",
          "level": "N5",
          "examples": [
            {
              "jp": "今日は特別な日です。",
              "hira": "きょうはとくべつなひです",
              "pronunciation": "쿄오와 토쿠베츠나 히데스",
              "meaning": "오늘은 특별한 날입니다."
            }
          ]
        }
      ],
      [
        "必要",
        "ひつよう",
        "히츠요오",
        "필요하다",
        {
          "id": "naadd_3_성격·평가",
          "level": "N5",
          "examples": [
            {
              "jp": "予約が必要です。",
              "hira": "よやくがひつようです",
              "pronunciation": "요야쿠가 히츠요오데스",
              "meaning": "예약이 필요합니다."
            }
          ]
        }
      ],
      [
        "不便",
        "ふべん",
        "후벤",
        "불편하다",
        {
          "id": "naadd_1",
          "level": "N5",
          "examples": [
            {
              "jp": "駅から遠くて不便です。",
              "hira": "えきからとおくてふべんです。",
              "pronunciation": "에키카라 토오쿠테 후벤데스",
              "meaning": "역에서 멀어서 불편해요."
            }
          ]
        }
      ],
      [
        "簡単",
        "かんたん",
        "칸탄",
        "간단하다 / 쉽다",
        {
          "id": "naadd_2",
          "level": "N5",
          "examples": [
            {
              "jp": "この問題は簡単です。",
              "hira": "このもんだいはかんたんです。",
              "pronunciation": "코노 몬다이와 칸탄데스",
              "meaning": "이 문제는 쉬워요."
            }
          ]
        }
      ],
      [
        "複雑",
        "ふくざつ",
        "후쿠자츠",
        "복잡하다",
        {
          "id": "naadd_3",
          "level": "N5",
          "examples": [
            {
              "jp": "この説明は複雑です。",
              "hira": "このせつめいはふくざつです。",
              "pronunciation": "코노 세츠메이와 후쿠자츠데스",
              "meaning": "이 설명은 복잡해요."
            }
          ]
        }
      ],
      [
        "安全",
        "あんぜん",
        "안젠",
        "안전하다",
        {
          "id": "naadd_4",
          "level": "N5",
          "examples": [
            {
              "jp": "ここは安全です。",
              "hira": "ここはあんぜんです。",
              "pronunciation": "코코와 안젠데스",
              "meaning": "여기는 안전해요."
            }
          ]
        }
      ],
      [
        "危険",
        "きけん",
        "키켄",
        "위험하다",
        {
          "id": "naadd_5",
          "level": "N5",
          "examples": [
            {
              "jp": "夜はこの道が危険です。",
              "hira": "よるはこのみちがきけんです。",
              "pronunciation": "요루와 코노 미치가 키켄데스",
              "meaning": "밤에는 이 길이 위험해요."
            }
          ]
        }
      ],
      [
        "大切",
        "たいせつ",
        "타이세츠",
        "소중하다 / 중요하다",
        {
          "id": "naadd_7",
          "level": "N5",
          "examples": [
            {
              "jp": "家族は大切です。",
              "hira": "かぞくはたいせつです。",
              "pronunciation": "카조쿠와 타이세츠데스",
              "meaning": "가족은 소중해요."
            }
          ]
        }
      ],
      [
        "自由",
        "じゆう",
        "지유우",
        "자유롭다",
        {
          "id": "naadd_8",
          "level": "N5",
          "examples": [
            {
              "jp": "ここでは自由に座れます。",
              "hira": "ここではじゆうにすわれます。",
              "pronunciation": "코코데와 지유우니 스와레마스",
              "meaning": "여기서는 자유롭게 앉을 수 있어요."
            }
          ]
        }
      ],
      [
        "親切",
        "しんせつ",
        "신세츠",
        "친절하다",
        {
          "id": "naadd_9",
          "level": "N5",
          "examples": [
            {
              "jp": "店員さんが親切でした。",
              "hira": "てんいんさんがしんせつでした。",
              "pronunciation": "텐인상가 신세츠데시타",
              "meaning": "점원분이 친절했어요."
            }
          ]
        }
      ]
    ],
    "생활·환경": [
      [
        "暇",
        "ひま",
        "히마",
        "한가하다",
        {
          "id": "naadd_2_생활·환경",
          "level": "N5",
          "examples": [
            {
              "jp": "今日は暇です。",
              "hira": "きょうはひまです",
              "pronunciation": "쿄오와 히마데스",
              "meaning": "오늘은 한가합니다."
            }
          ]
        }
      ],
      [
        "大丈夫",
        "だいじょうぶ",
        "다이조오부",
        "괜찮다",
        {
          "id": "naadd_3_생활·환경",
          "level": "N5",
          "examples": [
            {
              "jp": "もう大丈夫です。",
              "hira": "もうだいじょうぶです",
              "pronunciation": "모오 다이조오부데스",
              "meaning": "이제 괜찮습니다."
            }
          ]
        }
      ]
    ],
    "일상·성격": [
      [
        "上手",
        "じょうず",
        "죠오즈",
        "잘하다 / 능숙하다",
        {
          "id": "nadj_add_01671193",
          "level": "N5",
          "examples": [
            {
              "jp": "彼は日本語が上手です。",
              "hira": "かれはにほんごがじょうずです。",
              "pronunciation": "카레와 니혼고가 죠오즈데스",
              "meaning": "그는 일본어를 잘합니다."
            }
          ]
        }
      ],
      [
        "下手",
        "へた",
        "헤타",
        "서투르다",
        {
          "id": "nadj_add_57b870ac",
          "level": "N5",
          "examples": [
            {
              "jp": "私は料理が下手です。",
              "hira": "わたしはりょうりがへたです。",
              "pronunciation": "와타시와 료오리가 헤타데스",
              "meaning": "저는 요리를 못합니다."
            }
          ]
        }
      ]
    ],
    "상태·성격 추가": [
      [
        "にぎやか",
        "にぎやか",
        "니기야카",
        "활기차다 / 번화하다",
        {
          "id": "naadd2_1",
          "level": "N5",
          "examples": [
            {
              "jp": "駅前はにぎやかです。",
              "hira": "えきまえはにぎやかです。",
              "pronunciation": "에키마에와 니기야카데스",
              "meaning": "역 앞은 활기차요."
            }
          ]
        }
      ],
      [
        "残念",
        "ざんねん",
        "잔넨",
        "아쉽다 / 유감이다",
        {
          "id": "naadd2_7",
          "level": "N5",
          "examples": [
            {
              "jp": "雨で残念です。",
              "hira": "あめでざんねんです。",
              "pronunciation": "아메데 잔넨데스",
              "meaning": "비가 와서 아쉬워요."
            }
          ]
        }
      ]
    ],
    "추가 상태·평가": [
      [
        "簡単",
        "かんたん",
        "칸탄",
        "간단하다",
        {
          "id": "nadj_more_0",
          "level": "N4",
          "examples": [
            {
              "jp": "この問題は簡単です。",
              "hira": "このもんだいはかんたんです。",
              "pronunciation": "코노 몬다이와 칸탄데스",
              "meaning": "이 문제는 간단합니다."
            }
          ]
        }
      ],
      [
        "大切",
        "たいせつ",
        "타이세츠",
        "소중하다 / 중요하다",
        {
          "id": "nadj_more_1",
          "level": "N4",
          "examples": [
            {
              "jp": "時間は大切です。",
              "hira": "じかんはたいせつです。",
              "pronunciation": "지칸와 타이세츠데스",
              "meaning": "시간은 소중합니다."
            }
          ]
        }
      ],
      [
        "必要",
        "ひつよう",
        "히츠요오",
        "필요하다",
        {
          "id": "nadj_more_2",
          "level": "N4",
          "examples": [
            {
              "jp": "パスポートが必要です。",
              "hira": "ぱすぽーとがひつようです。",
              "pronunciation": "파스포오토가 히츠요오데스",
              "meaning": "여권이 필요합니다."
            }
          ]
        }
      ],
      [
        "安全",
        "あんぜん",
        "안젠",
        "안전하다",
        {
          "id": "nadj_more_3",
          "level": "N4",
          "examples": [
            {
              "jp": "この道は安全です。",
              "hira": "このみちはあんぜんです。",
              "pronunciation": "코노 미치와 안젠데스",
              "meaning": "이 길은 안전합니다."
            }
          ]
        }
      ],
      [
        "危険",
        "きけん",
        "키켄",
        "위험하다",
        {
          "id": "nadj_more_4",
          "level": "N4",
          "examples": [
            {
              "jp": "ここは危険です。",
              "hira": "ここはきけんです。",
              "pronunciation": "코코와 키켄데스",
              "meaning": "여기는 위험합니다."
            }
          ]
        }
      ],
      [
        "特別",
        "とくべつ",
        "토쿠베츠",
        "특별하다",
        {
          "id": "nadj_more_5",
          "level": "N4",
          "examples": [
            {
              "jp": "今日は特別な日です。",
              "hira": "きょうはとくべつなひです。",
              "pronunciation": "쿄오와 토쿠베츠나 히데스",
              "meaning": "오늘은 특별한 날입니다."
            }
          ]
        }
      ]
    ],
    "추가 상태·성질": [
      [
        "楽",
        "らく",
        "라쿠",
        "편하다 / 수월하다",
        {
          "id": "nadj_more2_0",
          "level": "N4",
          "examples": [
            {
              "jp": "この靴は楽です。",
              "hira": "このくつはらくです。",
              "pronunciation": "코노 쿠츠와 라쿠데스",
              "meaning": "이 신발은 편합니다."
            }
          ]
        }
      ],
      [
        "複雑",
        "ふくざつ",
        "후쿠자츠",
        "복잡하다",
        {
          "id": "nadj_more2_1",
          "level": "N4",
          "examples": [
            {
              "jp": "この説明は少し複雑です。",
              "hira": "このせつめいはすこしふくざつです。",
              "pronunciation": "코노 세츠메이와 스코시 후쿠자츠데스",
              "meaning": "이 설명은 조금 복잡합니다."
            }
          ]
        }
      ],
      [
        "必要",
        "ひつよう",
        "히츠요오",
        "필요하다",
        {
          "id": "nadj_more2_2",
          "level": "N4",
          "examples": [
            {
              "jp": "予約が必要です。",
              "hira": "よやくがひつようです。",
              "pronunciation": "요야쿠가 히츠요오데스",
              "meaning": "예약이 필요합니다."
            }
          ]
        }
      ],
      [
        "自由",
        "じゆう",
        "지유우",
        "자유롭다",
        {
          "id": "nadj_more2_3",
          "level": "N4",
          "examples": [
            {
              "jp": "ここでは自由に写真を撮れます。",
              "hira": "ここではじゆうにしゃしんをとれます。",
              "pronunciation": "코코데와 지유우니 샤신오 토레마스",
              "meaning": "여기서는 자유롭게 사진을 찍을 수 있습니다."
            }
          ]
        }
      ]
    ]
  },
  "부사": {
    "빈도": [
      [
        "いつも",
        "いつも",
        "이츠모",
        "항상 / 언제나",
        {
          "id": "adv_itsumo",
          "level": "N5",
          "examples": [
            {
              "jp": "いつも早く起きます。",
              "hira": "いつもはやくおきます。",
              "pronunciation": "이츠모 하야쿠 오키마스",
              "meaning": "항상 일찍 일어납니다."
            }
          ]
        }
      ],
      [
        "時々",
        "ときどき",
        "토키도키",
        "가끔 / 때때로",
        {
          "id": "adv_tokidoki",
          "level": "N5",
          "examples": [
            {
              "jp": "時々映画を見ます。",
              "hira": "ときどきえいがをみます。",
              "pronunciation": "토키도키 에이가오 미마스",
              "meaning": "가끔 영화를 봅니다."
            }
          ]
        }
      ],
      [
        "たまに",
        "たまに",
        "타마니",
        "가끔",
        {
          "id": "adv_tamanni",
          "level": "N5",
          "examples": [
            {
              "jp": "たまに外で食べます。",
              "hira": "たまにそとでたべます。",
              "pronunciation": "타마니 소토데 타베마스",
              "meaning": "가끔 밖에서 먹습니다."
            }
          ]
        }
      ],
      [
        "よく",
        "よく",
        "요쿠",
        "자주 / 잘",
        {
          "id": "adv_yoku",
          "level": "N5",
          "examples": [
            {
              "jp": "よく本を読みます。",
              "hira": "よくほんをよみます。",
              "pronunciation": "요쿠 혼오 요미마스",
              "meaning": "자주 책을 읽습니다."
            }
          ]
        }
      ],
      [
        "ときどき",
        "ときどき",
        "토키도키",
        "때때로",
        {
          "id": "adv_3867",
          "form": "adverb",
          "level": "N5",
          "examples": [
            {
              "jp": "ときどき友達に会います。",
              "hira": "ときどきともだちにあいます。",
              "pronunciation": "토키도키 토모다치니 아이마스",
              "meaning": "가끔 친구를 만납니다."
            }
          ]
        }
      ],
      [
        "あまり",
        "あまり",
        "아마리",
        "별로 (주로 부정과 함께)",
        {
          "id": "adv_9513",
          "form": "adverb",
          "level": "N5",
          "examples": [
            {
              "jp": "あまり肉を食べません。",
              "hira": "あまりにくをたべません。",
              "pronunciation": "아마리 니쿠오 타베마센",
              "meaning": "고기를 별로 먹지 않습니다."
            }
          ]
        }
      ],
      [
        "たいてい",
        "たいてい",
        "타이테이",
        "대체로 / 대부분",
        {
          "id": "advfreq_0",
          "level": "N5",
          "examples": [
            {
              "jp": "たいてい七時に起きます。",
              "hira": "たいていしちじにおきます。",
              "pronunciation": "타이테이 시치지니 오키마스",
              "meaning": "대체로 7시에 일어나요."
            }
          ]
        }
      ],
      [
        "ほとんど",
        "ほとんど",
        "호톤도",
        "거의",
        {
          "id": "advfreq_1",
          "level": "N5",
          "examples": [
            {
              "jp": "朝はほとんど食べません。",
              "hira": "あさはほとんどたべません。",
              "pronunciation": "아사와 호톤도 타베마센",
              "meaning": "아침은 거의 먹지 않아요."
            }
          ]
        }
      ],
      [
        "たまには",
        "たまには",
        "타마니와",
        "가끔은",
        {
          "id": "advfreq_2",
          "level": "N5",
          "examples": [
            {
              "jp": "たまにはゆっくり休みましょう。",
              "hira": "たまにはゆっくりやすみましょう。",
              "pronunciation": "타마니와 윳쿠리 야스미마쇼오",
              "meaning": "가끔은 푹 쉬어요."
            }
          ]
        }
      ],
      [
        "めったに",
        "めったに",
        "멧타니",
        "좀처럼 ~않다",
        {
          "id": "advfreq_3",
          "level": "N5",
          "examples": [
            {
              "jp": "彼はめったに怒りません。",
              "hira": "かれはめったにおこりません。",
              "pronunciation": "카레와 멧타니 오코리마센",
              "meaning": "그는 좀처럼 화내지 않아요."
            }
          ]
        }
      ],
      [
        "毎回",
        "まいかい",
        "마이카이",
        "매번",
        {
          "id": "advfreq_4",
          "level": "N5",
          "examples": [
            {
              "jp": "毎回同じ店に行きます。",
              "hira": "まいかいおなじみせにいきます。",
              "pronunciation": "마이카이 오나지 미세니 이키마스",
              "meaning": "매번 같은 가게에 가요."
            }
          ]
        }
      ]
    ],
    "시간": [
      [
        "ずっと",
        "ずっと",
        "즛토",
        "계속 / 줄곧",
        {
          "id": "adv_zutto",
          "level": "N5",
          "examples": [
            {
              "jp": "ずっと待っています。",
              "hira": "ずっとまっています。",
              "pronunciation": "즛토 맛테이마스",
              "meaning": "계속 기다리고 있습니다."
            }
          ]
        }
      ],
      [
        "もう",
        "もう",
        "모오",
        "벌써 / 이미",
        {
          "id": "adv_9695",
          "form": "adverb",
          "level": "N5",
          "examples": [
            {
              "jp": "もう帰ります。",
              "hira": "もうかえります。",
              "pronunciation": "모오 카에리마스",
              "meaning": "이제 돌아갑니다."
            }
          ]
        }
      ],
      [
        "まだ",
        "まだ",
        "마다",
        "아직",
        {
          "id": "adv_9068",
          "form": "adverb",
          "level": "N5",
          "examples": [
            {
              "jp": "まだ宿題が終わっていません。",
              "hira": "まだしゅくだいがおわっていません。",
              "pronunciation": "마다 슈쿠다이가 오왓테이마센",
              "meaning": "아직 숙제가 끝나지 않았습니다."
            }
          ]
        }
      ],
      [
        "すぐ",
        "すぐ",
        "스구",
        "곧 / 바로",
        {
          "id": "adv_4128",
          "form": "adverb",
          "level": "N5",
          "examples": [
            {
              "jp": "すぐ行きます。",
              "hira": "すぐいきます。",
              "pronunciation": "스구 이키마스",
              "meaning": "곧 갑니다."
            }
          ]
        }
      ],
      [
        "先に",
        "さきに",
        "사키니",
        "먼저",
        {
          "id": "adv_6894",
          "form": "adverb",
          "level": "N5",
          "examples": [
            {
              "jp": "先に食べてください。",
              "hira": "さきにたべてください。",
              "pronunciation": "사키니 타베테 쿠다사이",
              "meaning": "먼저 드세요."
            }
          ]
        }
      ],
      [
        "後で",
        "あとで",
        "아토데",
        "나중에",
        {
          "id": "adv_525",
          "form": "adverb",
          "level": "N5",
          "examples": [
            {
              "jp": "後で電話します。",
              "hira": "あとででんわします。",
              "pronunciation": "아토데 덴와시마스",
              "meaning": "나중에 전화하겠습니다."
            }
          ]
        }
      ]
    ],
    "정도": [
      [
        "とても",
        "とても",
        "토테모",
        "매우 / 아주",
        {
          "id": "adv_totemo",
          "level": "N5",
          "examples": [
            {
              "jp": "とてもおいしいです。",
              "hira": "とてもおいしいです。",
              "pronunciation": "토테모 오이시이데스",
              "meaning": "아주 맛있습니다."
            }
          ]
        }
      ],
      [
        "少し",
        "すこし",
        "스코시",
        "조금",
        {
          "id": "adv_1289",
          "form": "adverb",
          "level": "N5",
          "examples": [
            {
              "jp": "少し休みましょう。",
              "hira": "すこしやすみましょう。",
              "pronunciation": "스코시 야스미마쇼오",
              "meaning": "조금 쉽시다."
            }
          ]
        }
      ],
      [
        "ちょっと",
        "ちょっと",
        "촛토",
        "조금 / 좀",
        {
          "id": "adv_2705",
          "form": "adverb",
          "level": "N5",
          "examples": [
            {
              "jp": "ちょっと待ってください。",
              "hira": "ちょっとまってください。",
              "pronunciation": "촛토 맛테 쿠다사이",
              "meaning": "잠깐 기다려 주세요."
            }
          ]
        }
      ],
      [
        "かなり",
        "かなり",
        "카나리",
        "상당히",
        {
          "id": "adv_4355",
          "form": "adverb",
          "level": "N5",
          "examples": [
            {
              "jp": "今日はかなり寒いです。",
              "hira": "きょうはかなりさむいです。",
              "pronunciation": "쿄오와 카나리 사무이데스",
              "meaning": "오늘은 꽤 춥습니다."
            }
          ]
        }
      ],
      [
        "もっと",
        "もっと",
        "못토",
        "더 / 더욱",
        {
          "id": "adv_6717",
          "form": "adverb",
          "level": "N5",
          "examples": [
            {
              "jp": "もっと勉強します。",
              "hira": "もっとべんきょうします。",
              "pronunciation": "못토 벤쿄오시마스",
              "meaning": "더 공부하겠습니다."
            }
          ]
        }
      ],
      [
        "一番",
        "いちばん",
        "이치반",
        "가장",
        {
          "id": "adv_7140",
          "form": "adverb",
          "level": "N5",
          "examples": [
            {
              "jp": "これが一番好きです。",
              "hira": "これがいちばんすきです。",
              "pronunciation": "코레가 이치반 스키데스",
              "meaning": "이것을 가장 좋아합니다."
            }
          ]
        }
      ],
      [
        "ほぼ",
        "ほぼ",
        "호보",
        "거의 / 대부분",
        {
          "id": "advdegree_4",
          "level": "N5",
          "examples": [
            {
              "jp": "仕事はほぼ終わりました。",
              "hira": "しごとはほぼおわりました。",
              "pronunciation": "시고토와 호보 오와리마시타",
              "meaning": "일은 거의 끝났어요."
            }
          ]
        }
      ]
    ],
    "강조": [
      [
        "本当に",
        "ほんとうに",
        "혼토오니",
        "정말 / 정말로",
        {
          "id": "adv_hontou",
          "level": "N5",
          "examples": [
            {
              "jp": "本当にありがとうございます。",
              "hira": "ほんとうにありがとうございます。",
              "pronunciation": "혼토오니 아리가토오 고자이마스",
              "meaning": "정말 감사합니다."
            }
          ]
        }
      ],
      [
        "特に",
        "とくに",
        "토쿠니",
        "특히",
        {
          "id": "adv_1842",
          "form": "adverb",
          "level": "N5",
          "examples": [
            {
              "jp": "特に問題はありません。",
              "hira": "とくにもんだいはありません。",
              "pronunciation": "토쿠니 몬다이와 아리마센",
              "meaning": "특별히 문제는 없습니다."
            }
          ]
        }
      ],
      [
        "もちろん",
        "もちろん",
        "모치론",
        "물론",
        {
          "id": "adv_3512",
          "form": "adverb",
          "level": "N5",
          "examples": [
            {
              "jp": "もちろん参加します。",
              "hira": "もちろんさんかします。",
              "pronunciation": "모치론 산카시마스",
              "meaning": "물론 참가하겠습니다."
            }
          ]
        }
      ]
    ],
    "부정": [
      [
        "全然",
        "ぜんぜん",
        "젠젠",
        "전혀",
        {
          "id": "adv_zenzen",
          "level": "N5",
          "examples": [
            {
              "jp": "全然わかりません。",
              "hira": "ぜんぜんわかりません。",
              "pronunciation": "젠젠 와카리마센",
              "meaning": "전혀 모르겠습니다."
            }
          ]
        }
      ],
      [
        "決して",
        "けっして",
        "켓시테",
        "결코 (부정과 함께)",
        {
          "id": "adv_268",
          "form": "adverb",
          "level": "N5",
          "examples": [
            {
              "jp": "決して忘れません。",
              "hira": "けっしてわすれません。",
              "pronunciation": "켓시테 와스레마센",
              "meaning": "절대 잊지 않겠습니다."
            }
          ]
        }
      ]
    ],
    "방법": [
      [
        "ゆっくり",
        "ゆっくり",
        "윳쿠리",
        "천천히",
        {
          "id": "adv_8508",
          "form": "adverb",
          "level": "N5",
          "examples": [
            {
              "jp": "ゆっくり話してください。",
              "hira": "ゆっくりはなしてください。",
              "pronunciation": "윳쿠리 하나시테 쿠다사이",
              "meaning": "천천히 말해 주세요."
            }
          ]
        }
      ],
      [
        "ちゃんと",
        "ちゃんと",
        "찬토",
        "제대로",
        {
          "id": "adv_1112",
          "form": "adverb",
          "level": "N5",
          "examples": [
            {
              "jp": "ちゃんと確認してください。",
              "hira": "ちゃんとかくにんしてください。",
              "pronunciation": "찬토 카쿠닌시테 쿠다사이",
              "meaning": "제대로 확인해 주세요."
            }
          ]
        }
      ],
      [
        "一緒に",
        "いっしょに",
        "잇쇼니",
        "함께",
        {
          "id": "adv_1339",
          "form": "adverb",
          "level": "N5",
          "examples": [
            {
              "jp": "一緒に行きましょう。",
              "hira": "いっしょにいきましょう。",
              "pronunciation": "잇쇼니 이키마쇼오",
              "meaning": "함께 갑시다."
            }
          ]
        }
      ],
      [
        "別々に",
        "べつべつに",
        "베츠베츠니",
        "따로따로",
        {
          "id": "adv_8269",
          "form": "adverb",
          "level": "N5",
          "examples": [
            {
              "jp": "二人で別々に行きます。",
              "hira": "ふたりでべつべつにいきます。",
              "pronunciation": "후타리데 베츠베츠니 이키마스",
              "meaning": "두 사람은 따로 갑니다."
            }
          ]
        }
      ]
    ],
    "순서": [
      [
        "まず",
        "まず",
        "마즈",
        "우선 / 먼저",
        {
          "id": "adv_9562",
          "form": "adverb",
          "level": "N5",
          "examples": [
            {
              "jp": "まず名前を書きます。",
              "hira": "まずなまえをかきます。",
              "pronunciation": "마즈 나마에오 카키마스",
              "meaning": "먼저 이름을 씁니다."
            }
          ]
        }
      ],
      [
        "次に",
        "つぎに",
        "츠기니",
        "다음으로",
        {
          "id": "adv_299",
          "form": "adverb",
          "level": "N5",
          "examples": [
            {
              "jp": "次に住所を書きます。",
              "hira": "つぎにじゅうしょをかきます。",
              "pronunciation": "츠기니 주우쇼오 카키마스",
              "meaning": "다음으로 주소를 씁니다."
            }
          ]
        }
      ],
      [
        "最後に",
        "さいごに",
        "사이고니",
        "마지막으로",
        {
          "id": "adv_9028",
          "form": "adverb",
          "level": "N5",
          "examples": [
            {
              "jp": "最後にもう一度確認します。",
              "hira": "さいごにもういちどかくにんします。",
              "pronunciation": "사이고니 모오 이치도 카쿠닌시마스",
              "meaning": "마지막으로 한 번 더 확인합니다."
            }
          ]
        }
      ]
    ],
    "시간·빈도": [
      [
        "だんだん",
        "だんだん",
        "단단",
        "점점",
        {
          "id": "adv_add_4",
          "level": "N5",
          "examples": [
            {
              "jp": "だんだん慣れます。",
              "hira": "だんだんなれます",
              "pronunciation": "단단 나레마스",
              "meaning": "점점 익숙해집니다."
            }
          ]
        }
      ]
    ],
    "추측·태도": [
      [
        "しばらく",
        "しばらく",
        "시바라쿠",
        "한동안 / 잠시",
        {
          "id": "adv_add_7ac2b937",
          "level": "N5",
          "examples": [
            {
              "jp": "しばらくここで待ってください。",
              "hira": "しばらくここでまってください。",
              "pronunciation": "시바라쿠 코코데 맛테 쿠다사이",
              "meaning": "잠시 여기서 기다려 주세요."
            }
          ]
        }
      ],
      [
        "とうとう",
        "とうとう",
        "토오토오",
        "마침내",
        {
          "id": "adv_add_3807bc54",
          "level": "N5",
          "examples": [
            {
              "jp": "とうとう試験が終わりました。",
              "hira": "とうとうしけんがおわりました。",
              "pronunciation": "토오토오 시켄가 오와리마시타",
              "meaning": "드디어 시험이 끝났습니다."
            }
          ]
        }
      ],
      [
        "やっと",
        "やっと",
        "얏토",
        "겨우 / 드디어",
        {
          "id": "adv_add_6ca6974e",
          "level": "N5",
          "examples": [
            {
              "jp": "やっと駅に着きました。",
              "hira": "やっとえきにつきました。",
              "pronunciation": "얏토 에키니 츠키마시타",
              "meaning": "겨우 역에 도착했습니다."
            }
          ]
        }
      ],
      [
        "たぶん",
        "たぶん",
        "타분",
        "아마",
        {
          "id": "adv_add_3b2f9e7e",
          "level": "N5",
          "examples": [
            {
              "jp": "たぶん明日は晴れます。",
              "hira": "たぶんあしたははれます。",
              "pronunciation": "타분 아시타와 하레마스",
              "meaning": "아마 내일은 맑을 겁니다."
            }
          ]
        }
      ],
      [
        "きっと",
        "きっと",
        "킷토",
        "분명 / 틀림없이",
        {
          "id": "adv_add_77e037c8",
          "level": "N5",
          "examples": [
            {
              "jp": "きっと大丈夫です。",
              "hira": "きっとだいじょうぶです。",
              "pronunciation": "킷토 다이죠오부데스",
              "meaning": "분명 괜찮을 겁니다."
            }
          ]
        }
      ],
      [
        "ぜひ",
        "ぜひ",
        "제히",
        "꼭 / 부디",
        {
          "id": "adv_add_155efe6c",
          "level": "N5",
          "examples": [
            {
              "jp": "ぜひ一度行ってみてください。",
              "hira": "ぜひいちどいってみてください。",
              "pronunciation": "제히 이치도 잇테 미테 쿠다사이",
              "meaning": "꼭 한 번 가 보세요."
            }
          ]
        }
      ],
      [
        "実は",
        "じつは",
        "지츠와",
        "사실은",
        {
          "id": "adv_add_1c3703b0",
          "level": "N5",
          "examples": [
            {
              "jp": "実は日本へ行ったことがあります。",
              "hira": "じつはにほんへいったことがあります。",
              "pronunciation": "지츠와 니혼에 잇타 코토가 아리마스",
              "meaning": "사실 일본에 가 본 적이 있습니다."
            }
          ]
        }
      ],
      [
        "例えば",
        "たとえば",
        "타토에바",
        "예를 들어",
        {
          "id": "adv_add_f8135d4e",
          "level": "N5",
          "examples": [
            {
              "jp": "例えば、東京や大阪があります。",
              "hira": "たとえば、とうきょうやおおさかがあります。",
              "pronunciation": "타토에바 토오쿄오야 오오사카가 아리마스",
              "meaning": "예를 들어 도쿄나 오사카가 있습니다."
            }
          ]
        }
      ]
    ],
    "추가 빈도·태도": [
      [
        "必ず",
        "かならず",
        "카나라즈",
        "반드시",
        {
          "id": "advadd2_0",
          "level": "N4",
          "examples": [
            {
              "jp": "明日必ず来てください。",
              "hira": "あしたかならずきてください。",
              "pronunciation": "아시타 카나라즈 키테 쿠다사이",
              "meaning": "내일 반드시 와 주세요."
            }
          ]
        }
      ],
      [
        "絶対に",
        "ぜったいに",
        "젯타이니",
        "절대로 / 반드시",
        {
          "id": "advadd2_1",
          "level": "N4",
          "examples": [
            {
              "jp": "絶対に忘れません。",
              "hira": "ぜったいにわすれません。",
              "pronunciation": "젯타이니 와스레마센",
              "meaning": "절대 잊지 않을게요."
            }
          ]
        }
      ],
      [
        "十分",
        "じゅうぶん",
        "주우분",
        "충분히",
        {
          "id": "advadd2_2",
          "level": "N4",
          "examples": [
            {
              "jp": "十分休んでください。",
              "hira": "じゅうぶんやすんでください。",
              "pronunciation": "주우분 야슨데 쿠다사이",
              "meaning": "충분히 쉬세요."
            }
          ]
        }
      ],
      [
        "やはり",
        "やはり",
        "야하리",
        "역시",
        {
          "id": "advadd2_6",
          "level": "N4",
          "examples": [
            {
              "jp": "やはりこの店が一番です。",
              "hira": "やはりこのみせがいちばんです。",
              "pronunciation": "야하리 코노 미세가 이치반데스",
              "meaning": "역시 이 가게가 제일이에요."
            }
          ]
        }
      ],
      [
        "せっかく",
        "せっかく",
        "셋카쿠",
        "모처럼 / 애써서",
        {
          "id": "advadd2_8",
          "level": "N4",
          "examples": [
            {
              "jp": "せっかく来たので、ゆっくりしましょう。",
              "hira": "せっかくきたので、ゆっくりしましょう。",
              "pronunciation": "셋카쿠 키타노데, 윳쿠리 시마쇼오",
              "meaning": "모처럼 왔으니 느긋하게 있어요."
            }
          ]
        }
      ],
      [
        "結局",
        "けっきょく",
        "켓쿄쿠",
        "결국",
        {
          "id": "advadd2_9",
          "level": "N4",
          "examples": [
            {
              "jp": "結局、家に帰りました。",
              "hira": "けっきょく、いえにかえりました。",
              "pronunciation": "켓쿄쿠, 이에니 카에리마시타",
              "meaning": "결국 집에 돌아갔어요."
            }
          ]
        }
      ]
    ],
    "추가·실전": [
      [
        "かなり",
        "かなり",
        "카나리",
        "상당히 / 꽤",
        {
          "id": "adv_more_0",
          "level": "N4",
          "examples": [
            {
              "jp": "今日はかなり寒いです。",
              "hira": "きょうはかなりさむいです。",
              "pronunciation": "쿄오와 카나리 사무이데스",
              "meaning": "오늘은 꽤 춥습니다."
            }
          ]
        }
      ],
      [
        "ほとんど",
        "ほとんど",
        "호톤도",
        "거의",
        {
          "id": "adv_more_1",
          "level": "N4",
          "examples": [
            {
              "jp": "朝はほとんど食べません。",
              "hira": "あさはほとんどたべません。",
              "pronunciation": "아사와 호톤도 타베마센",
              "meaning": "아침에는 거의 먹지 않습니다."
            }
          ]
        }
      ],
      [
        "たぶん",
        "たぶん",
        "타분",
        "아마",
        {
          "id": "adv_more_2",
          "level": "N4",
          "examples": [
            {
              "jp": "たぶん明日は晴れます。",
              "hira": "たぶんあしたははれます。",
              "pronunciation": "타분 아시타와 하레마스",
              "meaning": "아마 내일은 맑을 겁니다."
            }
          ]
        }
      ],
      [
        "きっと",
        "きっと",
        "킷토",
        "분명 / 틀림없이",
        {
          "id": "adv_more_3",
          "level": "N4",
          "examples": [
            {
              "jp": "きっと大丈夫です。",
              "hira": "きっとだいじょうぶです。",
              "pronunciation": "킷토 다이죠오부데스",
              "meaning": "분명 괜찮습니다."
            }
          ]
        }
      ],
      [
        "まず",
        "まず",
        "마즈",
        "우선 / 먼저",
        {
          "id": "adv_more_4",
          "level": "N4",
          "examples": [
            {
              "jp": "まず名前を書いてください。",
              "hira": "まずなまえをかいてください。",
              "pronunciation": "마즈 나마에오 카이테 쿠다사이",
              "meaning": "먼저 이름을 써 주세요."
            }
          ]
        }
      ],
      [
        "もうすぐ",
        "もうすぐ",
        "모오 스구",
        "곧",
        {
          "id": "adv_more_5",
          "level": "N4",
          "examples": [
            {
              "jp": "もうすぐ電車が来ます。",
              "hira": "もうすぐでんしゃがきます。",
              "pronunciation": "모오 스구 덴샤가 키마스",
              "meaning": "곧 전철이 옵니다."
            }
          ]
        }
      ],
      [
        "しばらく",
        "しばらく",
        "시바라쿠",
        "잠시 동안 / 한동안",
        {
          "id": "adv_more_6",
          "level": "N4",
          "examples": [
            {
              "jp": "しばらくここで待ちましょう。",
              "hira": "しばらくここでまちましょう。",
              "pronunciation": "시바라쿠 코코데 마치마쇼오",
              "meaning": "잠시 여기서 기다려요."
            }
          ]
        }
      ],
      [
        "特に",
        "とくに",
        "토쿠니",
        "특히",
        {
          "id": "adv_more_7",
          "level": "N4",
          "examples": [
            {
              "jp": "特に問題はありません。",
              "hira": "とくにもんだいはありません。",
              "pronunciation": "토쿠니 몬다이와 아리마센",
              "meaning": "특별히 문제는 없습니다."
            }
          ]
        }
      ],
      [
        "実は",
        "じつは",
        "지츠와",
        "사실은",
        {
          "id": "adv_more_8",
          "level": "N4",
          "examples": [
            {
              "jp": "実は日本に行ったことがあります。",
              "hira": "じつはにほんにいったことがあります。",
              "pronunciation": "지츠와 니혼니 잇타 코토가 아리마스",
              "meaning": "사실 일본에 가 본 적이 있습니다."
            }
          ]
        }
      ],
      [
        "やはり",
        "やはり",
        "야하리",
        "역시",
        {
          "id": "adv_more_9",
          "level": "N4",
          "examples": [
            {
              "jp": "やはりこの店が一番好きです。",
              "hira": "やはりこのみせがいちばんすきです。",
              "pronunciation": "야하리 코노 미세가 이치반 스키데스",
              "meaning": "역시 이 가게가 가장 좋아요."
            }
          ]
        }
      ]
    ],
    "추가 실전 부사": [
      [
        "一緒に",
        "いっしょに",
        "잇쇼니",
        "함께",
        {
          "id": "adv_more2_0",
          "level": "N4",
          "examples": [
            {
              "jp": "一緒に行きましょう。",
              "hira": "いっしょにいきましょう。",
              "pronunciation": "잇쇼니 이키마쇼오",
              "meaning": "같이 가요."
            }
          ]
        }
      ],
      [
        "ゆっくり",
        "ゆっくり",
        "윳쿠리",
        "천천히",
        {
          "id": "adv_more2_1",
          "level": "N4",
          "examples": [
            {
              "jp": "ゆっくり話してください。",
              "hira": "ゆっくりはなしてください。",
              "pronunciation": "윳쿠리 하나시테 쿠다사이",
              "meaning": "천천히 말해 주세요."
            }
          ]
        }
      ],
      [
        "急に",
        "きゅうに",
        "큐우니",
        "갑자기",
        {
          "id": "adv_more2_2",
          "level": "N4",
          "examples": [
            {
              "jp": "急に雨が降りました。",
              "hira": "きゅうにあめがふりました。",
              "pronunciation": "큐우니 아메가 후리마시타",
              "meaning": "갑자기 비가 왔습니다."
            }
          ]
        }
      ],
      [
        "しっかり",
        "しっかり",
        "싯카리",
        "제대로 / 확실히",
        {
          "id": "adv_more2_3",
          "level": "N4",
          "examples": [
            {
              "jp": "しっかり休んでください。",
              "hira": "しっかりやすんでください。",
              "pronunciation": "싯카리 야슨데 쿠다사이",
              "meaning": "푹 쉬어 주세요."
            }
          ]
        }
      ],
      [
        "ちゃんと",
        "ちゃんと",
        "찬토",
        "제대로",
        {
          "id": "adv_more2_4",
          "level": "N4",
          "examples": [
            {
              "jp": "ちゃんと確認してください。",
              "hira": "ちゃんとかくにんしてください。",
              "pronunciation": "찬토 카쿠닌시테 쿠다사이",
              "meaning": "제대로 확인해 주세요."
            }
          ]
        }
      ],
      [
        "先に",
        "さきに",
        "사키니",
        "먼저",
        {
          "id": "adv_more2_5",
          "level": "N4",
          "examples": [
            {
              "jp": "先に帰ってもいいですか。",
              "hira": "さきにかえってもいいですか。",
              "pronunciation": "사키니 카엣테모 이이데스카",
              "meaning": "먼저 돌아가도 되나요?"
            }
          ]
        }
      ],
      [
        "後で",
        "あとで",
        "아토데",
        "나중에",
        {
          "id": "adv_more2_6",
          "level": "N4",
          "examples": [
            {
              "jp": "後で連絡します。",
              "hira": "あとでれんらくします。",
              "pronunciation": "아토데 렌라쿠시마스",
              "meaning": "나중에 연락하겠습니다."
            }
          ]
        }
      ],
      [
        "最近",
        "さいきん",
        "사이킨",
        "최근",
        {
          "id": "adv_more2_7",
          "level": "N4",
          "examples": [
            {
              "jp": "最近、日本語をよく勉強しています。",
              "hira": "さいきん、にほんごをよくべんきょうしています。",
              "pronunciation": "사이킨, 니혼고오 요쿠 벤쿄오시테이마스",
              "meaning": "최근 일본어를 열심히 공부하고 있습니다."
            }
          ]
        }
      ],
      [
        "以前",
        "いぜん",
        "이젠",
        "이전에는",
        {
          "id": "adv_more2_8",
          "level": "N4",
          "examples": [
            {
              "jp": "以前は東京に住んでいました。",
              "hira": "いぜんはとうきょうにすんでいました。",
              "pronunciation": "이젠와 토오쿄오니 슨데이마시타",
              "meaning": "이전에는 도쿄에 살았습니다."
            }
          ]
        }
      ],
      [
        "直接",
        "ちょくせつ",
        "초쿠세츠",
        "직접",
        {
          "id": "adv_more2_9",
          "level": "N4",
          "examples": [
            {
              "jp": "直接話したいです。",
              "hira": "ちょくせつはなしたいです。",
              "pronunciation": "초쿠세츠 하나시타이데스",
              "meaning": "직접 이야기하고 싶습니다."
            }
          ]
        }
      ]
    ]
  },
  "조사": {
    "기본 조사": [
      [
        "は",
        "は",
        "와",
        "~은 / ~는",
        {
          "id": "particle_wa",
          "level": "N5",
          "examples": [
            {
              "jp": "私は学生です。",
              "hira": "わたしはがくせいです。",
              "pronunciation": "와타시와 각세이데스",
              "meaning": "저는 학생입니다."
            }
          ]
        }
      ],
      [
        "が",
        "が",
        "가",
        "~이 / ~가",
        {
          "id": "particle_ga",
          "level": "N5",
          "examples": [
            {
              "jp": "猫がいます。",
              "hira": "ねこがいます。",
              "pronunciation": "네코가 이마스",
              "meaning": "고양이가 있습니다."
            }
          ]
        }
      ],
      [
        "を",
        "を",
        "오",
        "~을 / ~를",
        {
          "id": "particle_o",
          "level": "N5",
          "examples": [
            {
              "jp": "水を飲みます。",
              "hira": "みずをのみます。",
              "pronunciation": "미즈오 노미마스",
              "meaning": "물을 마십니다."
            }
          ]
        }
      ],
      [
        "に",
        "に",
        "니",
        "~에 / ~에게",
        {
          "id": "particle_ni",
          "level": "N5",
          "examples": [
            {
              "jp": "学校に行きます。",
              "hira": "がっこうにいきます。",
              "pronunciation": "각코오니 이키마스",
              "meaning": "학교에 갑니다."
            }
          ]
        }
      ],
      [
        "で",
        "で",
        "데",
        "~에서 / ~으로",
        {
          "id": "particle_de",
          "level": "N5",
          "examples": [
            {
              "jp": "学校で勉強します。",
              "hira": "がっこうでべんきょうします。",
              "pronunciation": "각코오데 벤쿄오시마스",
              "meaning": "학교에서 공부합니다."
            }
          ]
        }
      ],
      [
        "へ",
        "へ",
        "에",
        "~로 / ~에",
        {
          "id": "particle_e",
          "level": "N5",
          "examples": [
            {
              "jp": "日本へ行きます。",
              "hira": "にほんへいきます。",
              "pronunciation": "니혼에 이키마스",
              "meaning": "일본에 갑니다."
            }
          ]
        }
      ],
      [
        "と",
        "と",
        "토",
        "~와 / ~과 / ~하고",
        {
          "id": "particle_to",
          "level": "N5",
          "examples": [
            {
              "jp": "友達と話します。",
              "hira": "ともだちとはなします。",
              "pronunciation": "토모다치토 하나시마스",
              "meaning": "친구와 이야기합니다."
            }
          ]
        }
      ],
      [
        "の",
        "の",
        "노",
        "~의",
        {
          "id": "particle_no",
          "level": "N5",
          "examples": [
            {
              "jp": "これは私の本です。",
              "hira": "これはわたしのほんです。",
              "pronunciation": "코레와 와타시노 혼데스",
              "meaning": "이것은 제 책입니다."
            }
          ]
        }
      ]
    ],
    "비교·한정": [
      [
        "だけ",
        "だけ",
        "다케",
        "~만",
        {
          "id": "particle_add_0",
          "level": "N5",
          "examples": [
            {
              "jp": "水だけ飲みます。",
              "hira": "みずだけのみます",
              "pronunciation": "미즈다케 노미마스",
              "meaning": "물만 마십니다."
            }
          ]
        }
      ],
      [
        "しか",
        "しか",
        "시카",
        "~밖에",
        {
          "id": "particle_add_1",
          "level": "N5",
          "examples": [
            {
              "jp": "一つしかありません。",
              "hira": "ひとつしかありません",
              "pronunciation": "히토츠시카 아리마센",
              "meaning": "하나밖에 없습니다."
            }
          ]
        }
      ],
      [
        "まで",
        "まで",
        "마데",
        "~까지",
        {
          "id": "particle_add_2",
          "level": "N5",
          "examples": [
            {
              "jp": "五時まで働きます。",
              "hira": "ごじまではたらきます",
              "pronunciation": "고지마데 하타라키마스",
              "meaning": "5시까지 일합니다."
            }
          ]
        }
      ],
      [
        "から",
        "から",
        "카라",
        "~부터 / ~에서",
        {
          "id": "particle_add_3",
          "level": "N5",
          "examples": [
            {
              "jp": "九時から始まります。",
              "hira": "くじからはじまります",
              "pronunciation": "쿠지카라 하지마리마스",
              "meaning": "9시부터 시작합니다."
            }
          ]
        }
      ],
      [
        "より",
        "より",
        "요리",
        "~보다",
        {
          "id": "particle_add_4",
          "level": "N5",
          "examples": [
            {
              "jp": "電車よりバスが安いです。",
              "hira": "でんしゃよりばすがやすいです",
              "pronunciation": "덴샤요리 바스가 야스이데스",
              "meaning": "전철보다 버스가 쌉니다."
            }
          ]
        }
      ]
    ],
    "방향·비교·한정": [
      [
        "や",
        "や",
        "야",
        "~나 / ~등",
        {
          "id": "particle_add_ff8eed9a",
          "level": "N5",
          "examples": [
            {
              "jp": "りんごやバナナを買いました。",
              "hira": "りんごやばななをかいました。",
              "pronunciation": "링고야 바나나오 카이마시타",
              "meaning": "사과나 바나나 등을 샀습니다."
            }
          ]
        }
      ],
      [
        "ほど",
        "ほど",
        "호도",
        "~만큼 / ~정도",
        {
          "id": "particle_add_326cc938",
          "level": "N5",
          "examples": [
            {
              "jp": "思ったほど難しくありません。",
              "hira": "おもったほどむずかしくありません。",
              "pronunciation": "오못타 호도 무즈카시쿠 아리마센",
              "meaning": "생각했던 만큼 어렵지 않습니다."
            }
          ]
        }
      ],
      [
        "こそ",
        "こそ",
        "코소",
        "바로 ~야말로",
        {
          "id": "particle_add_9ad9c0b0",
          "level": "N5",
          "examples": [
            {
              "jp": "今度こそ成功します。",
              "hira": "こんどこそせいこうします。",
              "pronunciation": "콘도코소 세이코오시마스",
              "meaning": "이번에야말로 성공하겠습니다."
            }
          ]
        }
      ],
      [
        "さえ",
        "さえ",
        "사에",
        "~조차 / ~마저",
        {
          "id": "particle_add_7a0b88e1",
          "level": "N5",
          "examples": [
            {
              "jp": "名前さえ知りません。",
              "hira": "なまえさえしりません。",
              "pronunciation": "나마에사에 시리마센",
              "meaning": "이름조차 모릅니다."
            }
          ]
        }
      ]
    ],
    "심화 조사": [
      [
        "までに",
        "までに",
        "마데니",
        "~까지 (기한)",
        {
          "id": "particlex_3",
          "level": "N5",
          "examples": [
            {
              "jp": "五時までに来てください。",
              "hira": "ごじまでにきてください。",
              "pronunciation": "고지마데니 키테 쿠다사이",
              "meaning": "5시까지 와 주세요."
            }
          ]
        }
      ],
      [
        "とか",
        "とか",
        "토카",
        "~라든가 / ~같은 것",
        {
          "id": "particlex_8",
          "level": "N5",
          "examples": [
            {
              "jp": "週末は映画を見るとか、買い物するとかします。",
              "hira": "しゅうまつはえいがをみるとか、かいものするとかします。",
              "pronunciation": "슈우마츠와 에이가오 미루토카, 카이모노스루토카 시마스",
              "meaning": "주말에는 영화나 쇼핑 같은 걸 해요."
            }
          ]
        }
      ],
      [
        "なんか",
        "なんか",
        "난카",
        "~같은 것 / ~따위",
        {
          "id": "particlex_9",
          "level": "N5",
          "examples": [
            {
              "jp": "そんなことなんか気にしないで。",
              "hira": "そんなことなんかきにしないで。",
              "pronunciation": "손나 코토난카 키니 시나이데",
              "meaning": "그런 건 신경 쓰지 마."
            }
          ]
        }
      ]
    ]
  },
  "의문사": {
    "무엇": [
      [
        "何",
        "なに / なん",
        "나니 / 난",
        "무엇 / 뭐",
        {
          "id": "question_nani",
          "level": "N5",
          "examples": [
            {
              "jp": "これは何ですか。",
              "hira": "これはなんですか。",
              "pronunciation": "코레와 난데스카",
              "meaning": "이것은 무엇입니까?"
            }
          ]
        }
      ],
      [
        "なん",
        "なん",
        "난",
        "무엇 / 몇 (뒤에 특정 표현이 붙을 때)",
        {
          "id": "q_1513",
          "form": "question",
          "level": "N5",
          "examples": [
            {
              "jp": "なんですか。",
              "hira": "なんですか。",
              "pronunciation": "난",
              "meaning": "무엇 / 몇 (뒤에 특정 표현이 붙을 때)인가요?"
            }
          ]
        }
      ]
    ],
    "누구": [
      [
        "誰",
        "だれ",
        "다레",
        "누구",
        {
          "id": "question_dare",
          "level": "N5",
          "examples": [
            {
              "jp": "あの人は誰ですか。",
              "hira": "あのひとはだれですか。",
              "pronunciation": "아노 히토와 다레데스카",
              "meaning": "저 사람은 누구입니까?"
            }
          ]
        }
      ],
      [
        "どなた",
        "どなた",
        "도나타",
        "누구 (정중)",
        {
          "id": "q_5983",
          "form": "question",
          "level": "N5",
          "examples": [
            {
              "jp": "どなたですか。",
              "hira": "どなたですか。",
              "pronunciation": "도나타",
              "meaning": "누구 (정중)인가요?"
            }
          ]
        }
      ]
    ],
    "어디": [
      [
        "どこ",
        "どこ",
        "도코",
        "어디",
        {
          "id": "question_doko",
          "level": "N5",
          "examples": [
            {
              "jp": "駅はどこですか。",
              "hira": "えきはどこですか。",
              "pronunciation": "에키와 도코데스카",
              "meaning": "역은 어디입니까?"
            }
          ]
        }
      ],
      [
        "どちら",
        "どちら",
        "도치라",
        "어느 쪽 / 어디 (정중)",
        {
          "id": "q_5854",
          "form": "question",
          "level": "N5",
          "examples": [
            {
              "jp": "どちらですか。",
              "hira": "どちらですか。",
              "pronunciation": "도치라",
              "meaning": "어느 쪽 / 어디 (정중)인가요?"
            }
          ]
        }
      ]
    ],
    "언제": [
      [
        "いつ",
        "いつ",
        "이츠",
        "언제",
        {
          "id": "question_itsu",
          "level": "N5",
          "examples": [
            {
              "jp": "いつ日本へ行きますか。",
              "hira": "いつにほんへいきますか。",
              "pronunciation": "이츠 니혼에 이키마스카",
              "meaning": "언제 일본에 갑니까?"
            }
          ]
        }
      ]
    ],
    "왜": [
      [
        "どうして",
        "どうして",
        "도오시테",
        "왜 / 어째서",
        {
          "id": "question_doushite",
          "level": "N5",
          "examples": [
            {
              "jp": "どうして休みますか。",
              "hira": "どうしてやすみますか。",
              "pronunciation": "도오시테 야스미마스카",
              "meaning": "왜 쉽니까?"
            }
          ]
        }
      ],
      [
        "なぜ",
        "なぜ",
        "나제",
        "왜",
        {
          "id": "q_7869",
          "form": "question",
          "level": "N5",
          "examples": [
            {
              "jp": "なぜですか。",
              "hira": "なぜですか。",
              "pronunciation": "나제",
              "meaning": "왜인가요?"
            }
          ]
        }
      ]
    ],
    "어떻게": [
      [
        "どう",
        "どう",
        "도오",
        "어떻게",
        {
          "id": "question_dou",
          "level": "N5",
          "examples": [
            {
              "jp": "これはどうですか。",
              "hira": "これはどうですか。",
              "pronunciation": "코레와 도오데스카",
              "meaning": "이것은 어떻습니까?"
            }
          ]
        }
      ]
    ],
    "어떤": [
      [
        "どんな",
        "どんな",
        "돈나",
        "어떤",
        {
          "id": "q_8278",
          "form": "question",
          "level": "N5",
          "examples": [
            {
              "jp": "どんなですか。",
              "hira": "どんなですか。",
              "pronunciation": "돈나",
              "meaning": "어떤인가요?"
            }
          ]
        }
      ]
    ],
    "어느 것": [
      [
        "どれ",
        "どれ",
        "도레",
        "어느 것",
        {
          "id": "q_7308",
          "form": "question",
          "level": "N5",
          "examples": [
            {
              "jp": "どれですか。",
              "hira": "どれですか。",
              "pronunciation": "도레",
              "meaning": "어느 것인가요?"
            }
          ]
        }
      ]
    ],
    "어느 쪽": [
      [
        "どっち",
        "どっち",
        "돗치",
        "어느 쪽 / 어느 것 (구어)",
        {
          "id": "q_3447",
          "form": "question",
          "level": "N5",
          "examples": [
            {
              "jp": "どっちですか。",
              "hira": "どっちですか。",
              "pronunciation": "돗치",
              "meaning": "어느 쪽 / 어느 것 (구어)인가요?"
            }
          ]
        }
      ]
    ],
    "얼마": [
      [
        "いくら",
        "いくら",
        "이쿠라",
        "얼마",
        {
          "id": "q_4384",
          "form": "question",
          "level": "N5",
          "examples": [
            {
              "jp": "いくらですか。",
              "hira": "いくらですか。",
              "pronunciation": "이쿠라",
              "meaning": "얼마인가요?"
            }
          ]
        }
      ]
    ],
    "몇": [
      [
        "いくつ",
        "いくつ",
        "이쿠츠",
        "몇 개 / 몇 살",
        {
          "id": "q_7998",
          "form": "question",
          "level": "N5",
          "examples": [
            {
              "jp": "いくつですか。",
              "hira": "いくつですか。",
              "pronunciation": "이쿠츠",
              "meaning": "몇 개 / 몇 살인가요?"
            }
          ]
        }
      ],
      [
        "何時",
        "なんじ",
        "난지",
        "몇 시",
        {
          "id": "q_6367",
          "form": "question",
          "level": "N5",
          "examples": [
            {
              "jp": "何時ですか。",
              "hira": "なんじですか。",
              "pronunciation": "난지",
              "meaning": "몇 시인가요?"
            }
          ]
        }
      ],
      [
        "何人",
        "なんにん",
        "난닌",
        "몇 명",
        {
          "id": "q_6931",
          "form": "question",
          "level": "N5",
          "examples": [
            {
              "jp": "何人ですか。",
              "hira": "なんにんですか。",
              "pronunciation": "난닌",
              "meaning": "몇 명인가요?"
            }
          ]
        }
      ],
      [
        "何曜日",
        "なんようび",
        "난요오비",
        "무슨 요일",
        {
          "id": "q_3261",
          "form": "question",
          "level": "N5",
          "examples": [
            {
              "jp": "何曜日ですか。",
              "hira": "なんようびですか。",
              "pronunciation": "난요오비",
              "meaning": "무슨 요일인가요?"
            }
          ]
        }
      ]
    ],
    "수량·방법": [
      [
        "どのくらい",
        "どのくらい",
        "도노쿠라이",
        "얼마나 / 어느 정도",
        {
          "id": "question_add_8fe510db",
          "level": "N5",
          "examples": [
            {
              "jp": "ここから駅までどのくらいかかりますか。",
              "hira": "ここからえきまでどのくらいかかりますか。",
              "pronunciation": "코코카라 에키마데 도노쿠라이 카카리마스카",
              "meaning": "여기서 역까지 얼마나 걸리나요?"
            }
          ]
        }
      ],
      [
        "どれくらい",
        "どれくらい",
        "도레쿠라이",
        "얼마나 / 어느 정도",
        {
          "id": "question_add_a1611c5e",
          "level": "N5",
          "examples": [
            {
              "jp": "どれくらい日本語を勉強しましたか。",
              "hira": "どれくらいにほんごをべんきょうしましたか。",
              "pronunciation": "도레쿠라이 니혼고오 벤쿄오시마시타카",
              "meaning": "일본어를 얼마나 공부했나요?"
            }
          ]
        }
      ],
      [
        "どうやって",
        "どうやって",
        "도오얏테",
        "어떻게 해서 / 어떤 방법으로",
        {
          "id": "question_add_69e579c9",
          "level": "N5",
          "examples": [
            {
              "jp": "どうやって駅へ行きますか。",
              "hira": "どうやってえきへいきますか。",
              "pronunciation": "도오얏테 에키에 이키마스카",
              "meaning": "어떻게 역에 가나요?"
            }
          ]
        }
      ]
    ],
    "추가 의문 표현": [
      [
        "何回",
        "なんかい",
        "난카이",
        "몇 번",
        {
          "id": "qadd_8",
          "level": "N5",
          "examples": [
            {
              "jp": "何回行きましたか。",
              "hira": "なんかいいきましたか。",
              "pronunciation": "난카이 이키마시타카",
              "meaning": "몇 번 갔어요?"
            }
          ]
        }
      ]
    ]
  },
  "접속사": {
    "순서·전개": [
      [
        "そして",
        "そして",
        "소시테",
        "그리고 / 그리고 나서",
        {
          "id": "conj_soshite",
          "level": "N5",
          "examples": [
            {
              "jp": "朝ご飯を食べました。そして、学校へ行きました。",
              "hira": "あさごはんをたべました。そして、がっこうへいきました。",
              "pronunciation": "아사고항오 타베마시타. 소시테, 각코오에 이키마시타",
              "meaning": "아침밥을 먹었어요. 그리고 학교에 갔어요."
            }
          ]
        }
      ],
      [
        "それから",
        "それから",
        "소레카라",
        "그다음에 / 그리고 나서",
        {
          "id": "conj_3741",
          "form": "conjunction",
          "level": "N5",
          "examples": [
            {
              "jp": "朝ご飯を食べました。それから、学校へ行きました。",
              "hira": "きょうはやすみです。それで、いえにいます。",
              "pronunciation": "쿄오와 야스미데스. 소레데, 이에니 이마스.",
              "meaning": "아침밥을 먹었어요. 그다음에 학교에 갔어요."
            }
          ]
        }
      ],
      [
        "まず",
        "まず",
        "마즈",
        "우선",
        {
          "id": "conj_9562",
          "form": "conjunction",
          "level": "N5",
          "examples": [
            {
              "jp": "まず名前を書いてください。",
              "hira": "きょうはやすみです。それで、いえにいます。",
              "pronunciation": "쿄오와 야스미데스. 소레데, 이에니 이마스.",
              "meaning": "먼저 이름을 써 주세요."
            }
          ]
        }
      ]
    ],
    "대조": [
      [
        "でも",
        "でも",
        "데모",
        "하지만 / 그래도",
        {
          "id": "conj_demo",
          "level": "N5",
          "examples": [
            {
              "jp": "高いです。でも、買います。",
              "hira": "たかいです。でも、かいます。",
              "pronunciation": "타카이데스. 데모, 카이마스",
              "meaning": "비싸요. 하지만 살게요."
            }
          ]
        }
      ],
      [
        "しかし",
        "しかし",
        "시카시",
        "그러나 / 하지만",
        {
          "id": "conj_shikashi",
          "level": "N5",
          "examples": [
            {
              "jp": "難しいです。しかし、頑張ります。",
              "hira": "むずかしいです。しかし、がんばります。",
              "pronunciation": "무즈카시이데스. 시카시, 간바리마스",
              "meaning": "어려워요. 하지만 열심히 할게요."
            }
          ]
        }
      ],
      [
        "ところが",
        "ところが",
        "토코로가",
        "그런데 / 뜻밖에",
        {
          "id": "conj_9851",
          "form": "conjunction",
          "level": "N5",
          "examples": [
            {
              "jp": "今日は晴れると思いました。ところが、雨が降りました。",
              "hira": "きょうはやすみです。それで、いえにいます。",
              "pronunciation": "쿄오와 야스미데스. 소레데, 이에니 이마스.",
              "meaning": "오늘은 맑을 줄 알았어요. 그런데 비가 왔어요."
            }
          ]
        }
      ]
    ],
    "이유·결과": [
      [
        "だから",
        "だから",
        "다카라",
        "그러니까 / 그래서",
        {
          "id": "conj_dakara",
          "level": "N5",
          "examples": [
            {
              "jp": "雨が降っています。だから、家にいます。",
              "hira": "あめです。だから、いえにいます。",
              "pronunciation": "아메데스. 다카라, 이에니 이마스",
              "meaning": "비가 오고 있어요. 그래서 집에 있어요."
            }
          ]
        }
      ],
      [
        "ですから",
        "ですから",
        "데스카라",
        "그러므로 / 그래서 (정중)",
        {
          "id": "conj_9746",
          "form": "conjunction",
          "level": "N5",
          "examples": [
            {
              "jp": "明日は試験です。ですから、今日は勉強します。",
              "hira": "きょうはやすみです。それで、いえにいます。",
              "pronunciation": "쿄오와 야스미데스. 소레데, 이에니 이마스.",
              "meaning": "내일은 시험이에요. 그러니까 오늘은 공부할 거예요."
            }
          ]
        }
      ],
      [
        "それで",
        "それで",
        "소레데",
        "그래서 / 그 결과",
        {
          "id": "conj_4605",
          "form": "conjunction",
          "level": "N5",
          "examples": [
            {
              "jp": "電車が遅れました。それで、遅刻しました。",
              "hira": "きょうはやすみです。それで、いえにいます。",
              "pronunciation": "쿄오와 야스미데스. 소레데, 이에니 이마스.",
              "meaning": "전철이 늦었어요. 그래서 지각했어요."
            }
          ]
        }
      ],
      [
        "そのため",
        "そのため",
        "소노타메",
        "그 때문에 / 그 결과",
        {
          "id": "conj_61",
          "form": "conjunction",
          "level": "N5",
          "examples": [
            {
              "jp": "雨が強く降りました。そのため、試合は中止になりました。",
              "hira": "きょうはやすみです。それで、いえにいます。",
              "pronunciation": "쿄오와 야스미데스. 소레데, 이에니 이마스.",
              "meaning": "비가 많이 왔어요. 그 때문에 경기가 취소됐어요."
            }
          ]
        }
      ]
    ],
    "전환": [
      [
        "それでは",
        "それでは",
        "소레데와",
        "그러면 / 그럼",
        {
          "id": "conj_6997",
          "form": "conjunction",
          "level": "N5",
          "examples": [
            {
              "jp": "時間になりました。それでは、始めましょう。",
              "hira": "きょうはやすみです。それで、いえにいます。",
              "pronunciation": "쿄오와 야스미데스. 소레데, 이에니 이마스.",
              "meaning": "시간이 됐어요. 그럼 시작해요."
            }
          ]
        }
      ],
      [
        "では",
        "では",
        "데와",
        "그럼 / 그러면",
        {
          "id": "conj_3597",
          "form": "conjunction",
          "level": "N5",
          "examples": [
            {
              "jp": "今日はここまでです。では、また明日。",
              "hira": "きょうはやすみです。それで、いえにいます。",
              "pronunciation": "쿄오와 야스미데스. 소레데, 이에니 이마스.",
              "meaning": "오늘은 여기까지예요. 그럼 내일 봐요."
            }
          ]
        }
      ]
    ],
    "첨가": [
      [
        "また",
        "また",
        "마타",
        "또한 / 다시",
        {
          "id": "conj_4122",
          "form": "conjunction",
          "level": "N5",
          "examples": [
            {
              "jp": "この店は安いです。また、駅からも近いです。",
              "hira": "きょうはやすみです。それで、いえにいます。",
              "pronunciation": "쿄오와 야스미데스. 소레데, 이에니 이마스.",
              "meaning": "이 가게는 싸요. 게다가 역에서도 가까워요."
            }
          ]
        }
      ],
      [
        "さらに",
        "さらに",
        "사라니",
        "더욱이 / 더 나아가",
        {
          "id": "conj_5935",
          "form": "conjunction",
          "level": "N5",
          "examples": [
            {
              "jp": "この方法は簡単です。さらに、時間もかかりません。",
              "hira": "きょうはやすみです。それで、いえにいます。",
              "pronunciation": "쿄오와 야스미데스. 소레데, 이에니 이마스.",
              "meaning": "이 방법은 간단해요. 게다가 시간도 많이 걸리지 않아요."
            }
          ]
        }
      ]
    ],
    "설명": [
      [
        "つまり",
        "つまり",
        "츠마리",
        "즉 / 다시 말하면",
        {
          "id": "conj_1089",
          "form": "conjunction",
          "level": "N5",
          "examples": [
            {
              "jp": "彼は来ません。つまり、今日は一人で行くことになります。",
              "hira": "きょうはやすみです。それで、いえにいます。",
              "pronunciation": "쿄오와 야스미데스. 소레데, 이에니 이마스.",
              "meaning": "그는 오지 않아요. 즉, 오늘은 혼자 가게 되는 거예요."
            }
          ]
        }
      ]
    ],
    "정리·전환": [
      [
        "その後",
        "そのご",
        "소노고",
        "그 후",
        {
          "id": "conj_add_bab91cff",
          "level": "N5",
          "examples": [
            {
              "jp": "仕事が終わりました。その後、友達と食事しました。",
              "hira": "そのご、いえにかえりました。",
              "pronunciation": "소노고 이에니 카에리마시타",
              "meaning": "일이 끝났어요. 그 후 친구와 식사했어요."
            }
          ]
        }
      ],
      [
        "それでも",
        "それでも",
        "소레데모",
        "그럼에도 / 그래도",
        {
          "id": "conj_add_5eb91c4c",
          "level": "N5",
          "examples": [
            {
              "jp": "難しいです。それでも、もう一度やってみます。",
              "hira": "それでも、もういちどやってみます。",
              "pronunciation": "소레데모 모오 이치도 얏테 미마스",
              "meaning": "어려워요. 그래도 한 번 더 해 볼게요."
            }
          ]
        }
      ],
      [
        "なぜなら",
        "なぜなら",
        "나제나라",
        "왜냐하면",
        {
          "id": "conj_add_d859d21a",
          "level": "N5",
          "examples": [
            {
              "jp": "今日は行きません。なぜなら、体調が悪いからです。",
              "hira": "いきません。なぜなら、いそがしいからです。",
              "pronunciation": "이키마센 나제나라 이소가시이카라데스",
              "meaning": "오늘은 가지 않아요. 왜냐하면 몸 상태가 안 좋기 때문이에요."
            }
          ]
        }
      ],
      [
        "たとえば",
        "たとえば",
        "타토에바",
        "예를 들면",
        {
          "id": "conj_add_5c990a0a",
          "level": "N5",
          "examples": [
            {
              "jp": "日本には大きな都市があります。たとえば、東京です。",
              "hira": "たとえば、とうきょうはおおきなまちです。",
              "pronunciation": "타토에바 토오쿄오와 오오키나 마치데스",
              "meaning": "일본에는 큰 도시가 있어요. 예를 들면 도쿄예요."
            }
          ]
        }
      ]
    ],
    "추가 전개": [
      [
        "例えば",
        "たとえば",
        "타토에바",
        "예를 들면",
        {
          "id": "conjx_5",
          "level": "N5",
          "examples": [
            {
              "jp": "例えば、東京や大阪があります。",
              "hira": "たとえば、とうきょうやおおさかがあります。",
              "pronunciation": "타토에바, 토오쿄오야 오오사카가 아리마스",
              "meaning": "예를 들면 도쿄나 오사카가 있어요."
            }
          ]
        }
      ],
      [
        "一方で",
        "いっぽうで",
        "잇포오데",
        "한편 / 반면에",
        {
          "id": "conjx_6",
          "level": "N5",
          "examples": [
            {
              "jp": "この仕事は大変です。一方で、やりがいもあります。",
              "hira": "べんりないっぽうで、ねだんがたかいです。",
              "pronunciation": "벤리나 잇포오데, 네단가 타카이데스",
              "meaning": "이 일은 힘들어요. 한편 보람도 있어요."
            }
          ]
        }
      ],
      [
        "または",
        "または",
        "마타와",
        "또는",
        {
          "id": "conjx_7",
          "level": "N5",
          "examples": [
            {
              "jp": "電車またはバスで来てください。",
              "hira": "でんしゃまたはバスできてください。",
              "pronunciation": "덴샤 마타와 바스데 키테 쿠다사이",
              "meaning": "전철 또는 버스로 와 주세요."
            }
          ]
        }
      ],
      [
        "もし",
        "もし",
        "모시",
        "만약",
        {
          "id": "conjx_8",
          "level": "N5",
          "examples": [
            {
              "jp": "もし時間があれば、来てください。",
              "hira": "もしじかんがあれば、きてください。",
              "pronunciation": "모시 지칸가 아레바, 키테 쿠다사이",
              "meaning": "만약 시간이 있으면 와 주세요."
            }
          ]
        }
      ]
    ],
    "추가 연결": [
      [
        "だから",
        "だから",
        "다카라",
        "그러니까 / 그래서",
        {
          "id": "conj_more_0",
          "level": "N4",
          "examples": [
            {
              "jp": "雨です。だから、今日は出かけません。",
              "hira": "あめです。だから、きょうはでかけません。",
              "pronunciation": "아메데스. 다카라, 쿄오와 데카케마센",
              "meaning": "비가 옵니다. 그래서 오늘은 외출하지 않습니다."
            }
          ]
        }
      ],
      [
        "それで",
        "それで",
        "소레데",
        "그래서 / 그러고 나서",
        {
          "id": "conj_more_1",
          "level": "N4",
          "examples": [
            {
              "jp": "電車が遅れました。それで、少し遅刻しました。",
              "hira": "でんしゃがおくれました。それで、すこしちこくしました。",
              "pronunciation": "덴샤가 오쿠레마시타. 소레데, 스코시 치코쿠시마시타",
              "meaning": "전철이 늦었습니다. 그래서 조금 지각했습니다."
            }
          ]
        }
      ],
      [
        "しかし",
        "しかし",
        "시카시",
        "그러나 / 하지만",
        {
          "id": "conj_more_2",
          "level": "N4",
          "examples": [
            {
              "jp": "便利です。しかし、少し高いです。",
              "hira": "べんりです。しかし、すこしたかいです。",
              "pronunciation": "벤리데스. 시카시, 스코시 타카이데스",
              "meaning": "편리합니다. 하지만 조금 비쌉니다."
            }
          ]
        }
      ],
      [
        "それとも",
        "それとも",
        "소레토모",
        "아니면",
        {
          "id": "conj_more_3",
          "level": "N4",
          "examples": [
            {
              "jp": "電車で行きますか。それとも、バスで行きますか。",
              "hira": "でんしゃでいきますか。それとも、ばすでいきますか。",
              "pronunciation": "덴샤데 이키마스카. 소레토모, 바스데 이키마스카",
              "meaning": "전철로 가나요? 아니면 버스로 가나요?"
            }
          ]
        }
      ],
      [
        "たとえば",
        "たとえば",
        "타토에바",
        "예를 들면",
        {
          "id": "conj_more_4",
          "level": "N4",
          "examples": [
            {
              "jp": "たとえば、東京や大阪に行きたいです。",
              "hira": "たとえば、とうきょうやおおさかにいきたいです。",
              "pronunciation": "타토에바, 토오쿄오야 오오사카니 이키타이데스",
              "meaning": "예를 들면 도쿄나 오사카에 가고 싶습니다."
            }
          ]
        }
      ],
      [
        "そのため",
        "そのため",
        "소노타메",
        "그 때문에 / 그러기 위해",
        {
          "id": "conj_more_5",
          "level": "N4",
          "examples": [
            {
              "jp": "日本で働きたいです。そのため、日本語を勉強しています。",
              "hira": "にほんではたらきたいです。そのため、にほんごをべんきょうしています。",
              "pronunciation": "니혼데 하타라키타이데스. 소노타메, 니혼고오 벤쿄오시테이마스",
              "meaning": "일본에서 일하고 싶습니다. 그러기 위해 일본어를 공부하고 있습니다."
            }
          ]
        }
      ]
    ]
  },
  "문법": {
    "N5": [
      [
        "～です",
        "～です",
        "코레와 가쿠세이데스",
        "~입니다",
        {
          "id": "grammar_n5_0",
          "level": "N5",
          "meta": {
            "pattern": "명사 / な형용사 + です"
          },
          "examples": [
            {
              "jp": "これは学生です。",
              "hira": "これはがくせいです。",
              "pronunciation": "코레와 가쿠세이데스",
              "meaning": "이것은 학생입니다."
            }
          ]
        }
      ],
      [
        "～でした",
        "～でした",
        "키노오와 야스미데시타",
        "~였습니다 / ~했어요",
        {
          "id": "grammar_n5_1",
          "level": "N5",
          "meta": {
            "pattern": "명사 / な형용사 + でした"
          },
          "examples": [
            {
              "jp": "昨日は休みでした。",
              "hira": "きのうはやすみでした。",
              "pronunciation": "키노오와 야스미데시타",
              "meaning": "어제는 쉬는 날이었어요."
            }
          ]
        }
      ],
      [
        "～ではありません",
        "～ではありません",
        "와타시와 센세이데와 아리마센",
        "~이 아닙니다",
        {
          "id": "grammar_n5_2",
          "level": "N5",
          "meta": {
            "pattern": "명사 / な형용사 + ではありません"
          },
          "examples": [
            {
              "jp": "私は先生ではありません。",
              "hira": "わたしはせんせいではありません。",
              "pronunciation": "와타시와 센세이데와 아리마센",
              "meaning": "저는 선생님이 아닙니다."
            }
          ]
        }
      ],
      [
        "～じゃないです",
        "～じゃないです",
        "쿄오와 야스미자 나이데스",
        "~이 아니에요",
        {
          "id": "grammar_n5_3",
          "level": "N5",
          "meta": {
            "pattern": "명사 / な형용사 + じゃないです"
          },
          "examples": [
            {
              "jp": "今日は休みじゃないです。",
              "hira": "きょうはやすみじゃないです。",
              "pronunciation": "쿄오와 야스미자 나이데스",
              "meaning": "오늘은 쉬는 날이 아니에요."
            }
          ]
        }
      ],
      [
        "～があります",
        "～があります",
        "츠쿠에노 우에니 혼가 아리마스",
        "~이/가 있습니다 (사물·식물)",
        {
          "id": "grammar_n5_4",
          "level": "N5",
          "meta": {
            "pattern": "명사 + があります"
          },
          "examples": [
            {
              "jp": "机の上に本があります。",
              "hira": "つくえのうえにほんがあります。",
              "pronunciation": "츠쿠에노 우에니 혼가 아리마스",
              "meaning": "책상 위에 책이 있어요."
            }
          ]
        }
      ],
      [
        "～がいます",
        "～がいます",
        "코오엔니 코도모가 이마스",
        "~이/가 있습니다 (사람·동물)",
        {
          "id": "grammar_n5_5",
          "level": "N5",
          "meta": {
            "pattern": "명사 + がいます"
          },
          "examples": [
            {
              "jp": "公園に子どもがいます。",
              "hira": "こうえんにこどもがいます。",
              "pronunciation": "코오엔니 코도모가 이마스",
              "meaning": "공원에 아이가 있어요."
            }
          ]
        }
      ],
      [
        "～をください",
        "～をください",
        "미즈오 히토츠 쿠다사이",
        "~을/를 주세요",
        {
          "id": "grammar_n5_6",
          "level": "N5",
          "meta": {
            "pattern": "명사 + をください"
          },
          "examples": [
            {
              "jp": "水を一つください。",
              "hira": "みずをひとつください。",
              "pronunciation": "미즈오 히토츠 쿠다사이",
              "meaning": "물 한 개 주세요."
            }
          ]
        }
      ],
      [
        "～てください",
        "～てください",
        "나마에오 카이테 쿠다사이",
        "~해 주세요",
        {
          "id": "grammar_n5_7",
          "level": "N5",
          "meta": {
            "pattern": "동사 て형 + ください"
          },
          "examples": [
            {
              "jp": "名前を書いてください。",
              "hira": "なまえをかいてください。",
              "pronunciation": "나마에오 카이테 쿠다사이",
              "meaning": "이름을 써 주세요."
            }
          ]
        }
      ],
      [
        "～ないでください",
        "～ないでください",
        "코코데 샤신오 토라나이데 쿠다사이",
        "~하지 말아 주세요",
        {
          "id": "grammar_n5_8",
          "level": "N5",
          "meta": {
            "pattern": "동사 ない형 + でください"
          },
          "examples": [
            {
              "jp": "ここで写真を撮らないでください。",
              "hira": "ここでしゃしんをとらないでください。",
              "pronunciation": "코코데 샤신오 토라나이데 쿠다사이",
              "meaning": "여기서 사진을 찍지 말아 주세요."
            }
          ]
        }
      ],
      [
        "～ています",
        "～ています",
        "이마, 니혼고오 벤쿄오시테이마스",
        "~하고 있어요 / ~해져 있어요",
        {
          "id": "grammar_n5_9",
          "level": "N5",
          "meta": {
            "pattern": "동사 て형 + います"
          },
          "examples": [
            {
              "jp": "今、日本語を勉強しています。",
              "hira": "いま、にほんごをべんきょうしています。",
              "pronunciation": "이마, 니혼고오 벤쿄오시테이마스",
              "meaning": "지금 일본어를 공부하고 있어요."
            }
          ]
        }
      ],
      [
        "～てもいいです",
        "～てもいいです",
        "코코니 스왓테모 이이데스",
        "~해도 돼요",
        {
          "id": "grammar_n5_10",
          "level": "N5",
          "meta": {
            "pattern": "동사 て형 + もいいです"
          },
          "examples": [
            {
              "jp": "ここに座ってもいいです。",
              "hira": "ここにすわってもいいです。",
              "pronunciation": "코코니 스왓테모 이이데스",
              "meaning": "여기에 앉아도 돼요."
            }
          ]
        }
      ],
      [
        "～てはいけません",
        "～てはいけません",
        "코코데 타바코오 슷테와 이케마센",
        "~하면 안 됩니다",
        {
          "id": "grammar_n5_11",
          "level": "N5",
          "meta": {
            "pattern": "동사 て형 + はいけません"
          },
          "examples": [
            {
              "jp": "ここでタバコを吸ってはいけません。",
              "hira": "ここでたばこをすってはいけません。",
              "pronunciation": "코코데 타바코오 슷테와 이케마센",
              "meaning": "여기서 담배를 피우면 안 됩니다."
            }
          ]
        }
      ],
      [
        "～たいです",
        "～たいです",
        "니혼에 이키타이데스",
        "~하고 싶어요",
        {
          "id": "grammar_n5_12",
          "level": "N5",
          "meta": {
            "pattern": "동사 ます형 어간 + たいです"
          },
          "examples": [
            {
              "jp": "日本へ行きたいです。",
              "hira": "にほんへいきたいです。",
              "pronunciation": "니혼에 이키타이데스",
              "meaning": "일본에 가고 싶어요."
            }
          ]
        }
      ],
      [
        "～たくないです",
        "～たくないです",
        "쿄오와 소토니 데타쿠 나이데스",
        "~하고 싶지 않아요",
        {
          "id": "grammar_n5_13",
          "level": "N5",
          "meta": {
            "pattern": "동사 ます형 어간 + たくないです"
          },
          "examples": [
            {
              "jp": "今日は外に出たくないです。",
              "hira": "きょうはそとにでたくないです。",
              "pronunciation": "쿄오와 소토니 데타쿠 나이데스",
              "meaning": "오늘은 밖에 나가고 싶지 않아요."
            }
          ]
        }
      ],
      [
        "～たことがあります",
        "～たことがあります",
        "니혼에 잇타 코토가 아리마스",
        "~한 적이 있어요",
        {
          "id": "grammar_n5_14",
          "level": "N5",
          "meta": {
            "pattern": "동사 た형 + ことがあります"
          },
          "examples": [
            {
              "jp": "日本へ行ったことがあります。",
              "hira": "にほんへいったことがあります。",
              "pronunciation": "니혼에 잇타 코토가 아리마스",
              "meaning": "일본에 가 본 적이 있어요."
            }
          ]
        }
      ],
      [
        "～たことがありません",
        "～たことがありません",
        "후지산오 미타 코토가 아리마센",
        "~한 적이 없어요",
        {
          "id": "grammar_n5_15",
          "level": "N5",
          "meta": {
            "pattern": "동사 た형 + ことがありません"
          },
          "examples": [
            {
              "jp": "富士山を見たことがありません。",
              "hira": "ふじさんをみたことがありません。",
              "pronunciation": "후지산오 미타 코토가 아리마센",
              "meaning": "후지산을 본 적이 없어요."
            }
          ]
        }
      ],
      [
        "～ましょう",
        "～ましょう",
        "잇쇼니 타베마쇼오",
        "~합시다 / ~할까요",
        {
          "id": "grammar_n5_16",
          "level": "N5",
          "meta": {
            "pattern": "동사 ます형 어간 + ましょう"
          },
          "examples": [
            {
              "jp": "一緒に食べましょう。",
              "hira": "いっしょにたべましょう。",
              "pronunciation": "잇쇼니 타베마쇼오",
              "meaning": "같이 먹어요."
            }
          ]
        }
      ],
      [
        "～ませんか",
        "～ませんか",
        "잇쇼니 에이가오 미마센카",
        "~하지 않을래요?",
        {
          "id": "grammar_n5_17",
          "level": "N5",
          "meta": {
            "pattern": "동사 ます형 + ませんか"
          },
          "examples": [
            {
              "jp": "一緒に映画を見ませんか。",
              "hira": "いっしょにえいがをみませんか。",
              "pronunciation": "잇쇼니 에이가오 미마센카",
              "meaning": "같이 영화 보지 않을래요?"
            }
          ]
        }
      ],
      [
        "～ましょうか",
        "～ましょうか",
        "니모츠오 모치마쇼오카",
        "~할까요?",
        {
          "id": "grammar_n5_18",
          "level": "N5",
          "meta": {
            "pattern": "동사 ます형 어간 + ましょうか"
          },
          "examples": [
            {
              "jp": "荷物を持ちましょうか。",
              "hira": "にもつをもちましょうか。",
              "pronunciation": "니모츠오 모치마쇼오카",
              "meaning": "짐을 들어 드릴까요?"
            }
          ]
        }
      ],
      [
        "～から",
        "～から",
        "아메가 훗테이루카라, 타쿠시이데 이키마스",
        "~이니까 / ~해서",
        {
          "id": "grammar_n5_19",
          "level": "N5",
          "meta": {
            "pattern": "문장 + から"
          },
          "examples": [
            {
              "jp": "雨が降っているから、タクシーで行きます。",
              "hira": "あめがふっているから、タクシーでいきます。",
              "pronunciation": "아메가 훗테이루카라, 타쿠시이데 이키마스",
              "meaning": "비가 오고 있어서 택시로 갈게요."
            }
          ]
        }
      ],
      [
        "～けど",
        "～けど",
        "이키타이케도, 지칸가 아리마센",
        "~지만 / ~인데",
        {
          "id": "grammar_n5_20",
          "level": "N5",
          "meta": {
            "pattern": "문장 + けど"
          },
          "examples": [
            {
              "jp": "行きたいけど、時間がありません。",
              "hira": "いきたいけど、じかんがありません。",
              "pronunciation": "이키타이케도, 지칸가 아리마센",
              "meaning": "가고 싶지만 시간이 없어요."
            }
          ]
        }
      ],
      [
        "～ので",
        "～ので",
        "쿄오와 야스미나노데, 이에니 이마스",
        "~해서 / ~이므로",
        {
          "id": "grammar_n5_21",
          "level": "N5",
          "meta": {
            "pattern": "문장 + ので"
          },
          "examples": [
            {
              "jp": "今日は休みなので、家にいます。",
              "hira": "きょうはやすみなので、いえにいます。",
              "pronunciation": "쿄오와 야스미나노데, 이에니 이마스",
              "meaning": "오늘은 쉬는 날이라 집에 있어요."
            }
          ]
        }
      ],
      [
        "～たり～たりする",
        "～たり～たりする",
        "슈우마츠와 에이가오 미타리, 카이모노오 시타리시마스",
        "~하기도 하고 ~하기도 하다",
        {
          "id": "grammar_n5_22",
          "level": "N5",
          "meta": {
            "pattern": "동사 た형 + り + 동사 た형 + りする"
          },
          "examples": [
            {
              "jp": "週末は映画を見たり、買い物をしたりします。",
              "hira": "しゅうまつはえいがをみたり、かいものをしたりします。",
              "pronunciation": "슈우마츠와 에이가오 미타리, 카이모노오 시타리시마스",
              "meaning": "주말에는 영화를 보기도 하고 쇼핑을 하기도 해요."
            }
          ]
        }
      ],
      [
        "～ながら",
        "～ながら",
        "온가쿠오 키키나가라 아루키마스",
        "~하면서",
        {
          "id": "grammar_n5_23",
          "level": "N5",
          "meta": {
            "pattern": "동사 ます형 어간 + ながら"
          },
          "examples": [
            {
              "jp": "音楽を聞きながら歩きます。",
              "hira": "おんがくをききながらあるきます。",
              "pronunciation": "온가쿠오 키키나가라 아루키마스",
              "meaning": "음악을 들으면서 걸어요."
            }
          ]
        }
      ],
      [
        "～てから",
        "～てから",
        "고항오 타베테카라 벤쿄오시마스",
        "~하고 나서",
        {
          "id": "grammar_n5_24",
          "level": "N5",
          "meta": {
            "pattern": "동사 て형 + から"
          },
          "examples": [
            {
              "jp": "ご飯を食べてから勉強します。",
              "hira": "ごはんをたべてからべんきょうします。",
              "pronunciation": "고항오 타베테카라 벤쿄오시마스",
              "meaning": "밥을 먹고 나서 공부해요."
            }
          ]
        }
      ],
      [
        "～前に",
        "～前に",
        "네루 마에니 하오 미가키마스",
        "~하기 전에",
        {
          "id": "grammar_n5_25",
          "level": "N5",
          "meta": {
            "pattern": "동사 사전형 + 前に / 명사 + の前に"
          },
          "examples": [
            {
              "jp": "寝る前に歯を磨きます。",
              "hira": "ねるまえにはをみがきます。",
              "pronunciation": "네루 마에니 하오 미가키마스",
              "meaning": "자기 전에 이를 닦아요."
            }
          ]
        }
      ],
      [
        "～後で",
        "～後で",
        "시고토노 아토데 토모다치니 아이마스",
        "~한 후에",
        {
          "id": "grammar_n5_26",
          "level": "N5",
          "meta": {
            "pattern": "동사 た형 + 後で / 명사 + の後で"
          },
          "examples": [
            {
              "jp": "仕事の後で友達に会います。",
              "hira": "しごとのあとでともだちにあいます。",
              "pronunciation": "시고토노 아토데 토모다치니 아이마스",
              "meaning": "일이 끝난 후에 친구를 만나요."
            }
          ]
        }
      ],
      [
        "～ことができる",
        "～ことができる",
        "니혼고오 스코시 하나스 코토가 데키마스",
        "~할 수 있다",
        {
          "id": "grammar_n5_27",
          "level": "N5",
          "meta": {
            "pattern": "동사 사전형 + ことができる"
          },
          "examples": [
            {
              "jp": "日本語を少し話すことができます。",
              "hira": "にほんごをすこしはなすことができます。",
              "pronunciation": "니혼고오 스코시 하나스 코토가 데키마스",
              "meaning": "일본어를 조금 할 수 있어요."
            }
          ]
        }
      ],
      [
        "～ほうがいい",
        "～ほうがいい",
        "하야쿠 네타 호오가 이이데스",
        "~하는 게 좋다",
        {
          "id": "grammar_n5_28",
          "level": "N5",
          "meta": {
            "pattern": "동사 た형 / ない형 + ほうがいい"
          },
          "examples": [
            {
              "jp": "早く寝たほうがいいです。",
              "hira": "はやくねたほうがいいです。",
              "pronunciation": "하야쿠 네타 호오가 이이데스",
              "meaning": "일찍 자는 게 좋아요."
            }
          ]
        }
      ],
      [
        "～ないほうがいい",
        "～ないほうがいい",
        "무리오 시나이 호오가 이이데스",
        "~하지 않는 게 좋다",
        {
          "id": "grammar_n5_29",
          "level": "N5",
          "meta": {
            "pattern": "동사 ない형 + ほうがいい"
          },
          "examples": [
            {
              "jp": "無理をしないほうがいいです。",
              "hira": "むりをしないほうがいいです。",
              "pronunciation": "무리오 시나이 호오가 이이데스",
              "meaning": "무리하지 않는 게 좋아요."
            }
          ]
        }
      ],
      [
        "～と思います",
        "～と思います",
        "아시타와 하레루토 오모이마스",
        "~라고 생각해요",
        {
          "id": "grammar_n5_30",
          "level": "N5",
          "meta": {
            "pattern": "보통형 + と思います"
          },
          "examples": [
            {
              "jp": "明日は晴れると思います。",
              "hira": "あしたははれるとおもいます。",
              "pronunciation": "아시타와 하레루토 오모이마스",
              "meaning": "내일은 맑을 거라고 생각해요."
            }
          ]
        }
      ],
      [
        "～でしょう",
        "～でしょう",
        "아시타와 사무이데쇼오",
        "~겠지요 / ~일 거예요",
        {
          "id": "grammar_n5_31",
          "level": "N5",
          "meta": {
            "pattern": "보통형 + でしょう"
          },
          "examples": [
            {
              "jp": "明日は寒いでしょう。",
              "hira": "あしたはさむいでしょう。",
              "pronunciation": "아시타와 사무이데쇼오",
              "meaning": "내일은 춥겠지요."
            }
          ]
        }
      ],
      [
        "～くらい / ～ぐらい",
        "～くらい / ～ぐらい",
        "쥿푼구라이 맛테 쿠다사이",
        "~정도 / ~쯤",
        {
          "id": "grammar_n5_32",
          "level": "N5",
          "meta": {
            "pattern": "수량 + くらい / ぐらい"
          },
          "examples": [
            {
              "jp": "10分ぐらい待ってください。",
              "hira": "じゅっぷんぐらいまってください。",
              "pronunciation": "쥿푼구라이 맛테 쿠다사이",
              "meaning": "10분 정도 기다려 주세요."
            }
          ]
        }
      ],
      [
        "～だけ",
        "～だけ",
        "쿄오와 미즈다케 노미마스",
        "~만 / ~뿐",
        {
          "id": "grammar_n5_33",
          "level": "N5",
          "meta": {
            "pattern": "명사 + だけ"
          },
          "examples": [
            {
              "jp": "今日は水だけ飲みます。",
              "hira": "きょうはみずだけのみます。",
              "pronunciation": "쿄오와 미즈다케 노미마스",
              "meaning": "오늘은 물만 마실게요."
            }
          ]
        }
      ],
      [
        "～しか～ない",
        "～しか～ない",
        "햐쿠엔시카 아리마센",
        "~밖에 ~없다",
        {
          "id": "grammar_n5_34",
          "level": "N5",
          "meta": {
            "pattern": "명사 + しか + 부정형"
          },
          "examples": [
            {
              "jp": "100円しかありません。",
              "hira": "ひゃくえんしかありません。",
              "pronunciation": "햐쿠엔시카 아리마센",
              "meaning": "100엔밖에 없어요."
            }
          ]
        }
      ],
      [
        "～のが好きです",
        "～のが好きです",
        "온가쿠오 키쿠노가 스키데스",
        "~하는 것을 좋아하다",
        {
          "id": "grammar_n5_35",
          "level": "N5",
          "meta": {
            "pattern": "동사 사전형 + のが好きです"
          },
          "examples": [
            {
              "jp": "音楽を聞くのが好きです。",
              "hira": "おんがくをきくのがすきです。",
              "pronunciation": "온가쿠오 키쿠노가 스키데스",
              "meaning": "음악 듣는 것을 좋아해요."
            }
          ]
        }
      ],
      [
        "～のが上手です",
        "～のが上手です",
        "료오리오 츠쿠루노가 죠오즈데스",
        "~하는 것을 잘하다",
        {
          "id": "grammar_n5_36",
          "level": "N5",
          "meta": {
            "pattern": "동사 사전형 + のが上手です"
          },
          "examples": [
            {
              "jp": "料理を作るのが上手です。",
              "hira": "りょうりをつくるのがじょうずです。",
              "pronunciation": "료오리오 츠쿠루노가 죠오즈데스",
              "meaning": "요리를 잘해요."
            }
          ]
        }
      ]
    ],
    "N4": [
      [
        "～つもりだ",
        "～つもりだ",
        "라이넨, 니혼에 이쿠 츠모리데스",
        "~할 생각이다 / ~할 예정이다",
        {
          "id": "grammar_n4_0",
          "level": "N4",
          "meta": {
            "pattern": "동사 사전형 + つもりだ"
          },
          "examples": [
            {
              "jp": "来年、日本へ行くつもりです。",
              "hira": "らいねん、にほんへいくつもりです。",
              "pronunciation": "라이넨, 니혼에 이쿠 츠모리데스",
              "meaning": "내년에 일본에 갈 생각이에요."
            }
          ]
        }
      ],
      [
        "～そうだ",
        "～そうだ",
        "코노 케에키와 오이시소오데스",
        "~할 것 같다 / ~해 보이다",
        {
          "id": "grammar_n4_1",
          "level": "N4",
          "meta": {
            "pattern": "동사 ます형 어간 / い형용사 어간 + そうだ"
          },
          "examples": [
            {
              "jp": "このケーキはおいしそうです。",
              "hira": "このケーキはおいしそうです。",
              "pronunciation": "코노 케에키와 오이시소오데스",
              "meaning": "이 케이크는 맛있어 보여요."
            }
          ]
        }
      ],
      [
        "～ようだ",
        "～ようだ",
        "타나카상와 이소가시이 요오데스",
        "~인 것 같다 / ~인 듯하다",
        {
          "id": "grammar_n4_2",
          "level": "N4",
          "meta": {
            "pattern": "보통형 + ようだ"
          },
          "examples": [
            {
              "jp": "田中さんは忙しいようです。",
              "hira": "たなかさんはいそがしいようです。",
              "pronunciation": "타나카상와 이소가시이 요오데스",
              "meaning": "다나카 씨는 바쁜 것 같아요."
            }
          ]
        }
      ],
      [
        "～みたいだ",
        "～みたいだ",
        "아노 히토와 센세이 미타이데스",
        "~인 것 같다 / ~같다",
        {
          "id": "grammar_n4_3",
          "level": "N4",
          "meta": {
            "pattern": "보통형 + みたいだ"
          },
          "examples": [
            {
              "jp": "あの人は先生みたいです。",
              "hira": "あのひとはせんせいみたいです。",
              "pronunciation": "아노 히토와 센세이 미타이데스",
              "meaning": "저 사람은 선생님인 것 같아요."
            }
          ]
        }
      ],
      [
        "～ために",
        "～ために",
        "니혼데 하타라쿠 타메니, 니혼고오 벤쿄오시테이마스",
        "~하기 위해 / ~을 위해",
        {
          "id": "grammar_n4_4",
          "level": "N4",
          "meta": {
            "pattern": "동사 사전형 + ために"
          },
          "examples": [
            {
              "jp": "日本で働くために、日本語を勉強しています。",
              "hira": "にほんではたらくために、にほんごをべんきょうしています。",
              "pronunciation": "니혼데 하타라쿠 타메니, 니혼고오 벤쿄오시테이마스",
              "meaning": "일본에서 일하기 위해 일본어를 공부하고 있어요."
            }
          ]
        }
      ],
      [
        "～ように",
        "～ように",
        "와스레나이 요오니, 메모시마스",
        "~하도록 / ~할 수 있도록",
        {
          "id": "grammar_n4_5",
          "level": "N4",
          "meta": {
            "pattern": "동사 사전형·ない형 + ように"
          },
          "examples": [
            {
              "jp": "忘れないように、メモします。",
              "hira": "わすれないように、メモします。",
              "pronunciation": "와스레나이 요오니, 메모시마스",
              "meaning": "잊지 않도록 메모해요."
            }
          ]
        }
      ],
      [
        "～なら",
        "～なら",
        "니혼에 이쿠나라, 하루가 오스스메데스",
        "~라면 / ~이라면",
        {
          "id": "grammar_n4_6",
          "level": "N4",
          "meta": {
            "pattern": "명사 / 보통형 + なら"
          },
          "examples": [
            {
              "jp": "日本へ行くなら、春がおすすめです。",
              "hira": "にほんへいくなら、はるがおすすめです。",
              "pronunciation": "니혼에 이쿠나라, 하루가 오스스메데스",
              "meaning": "일본에 갈 거라면 봄을 추천해요."
            }
          ]
        }
      ],
      [
        "～たら",
        "～たら",
        "에키니 츠이타라, 덴와시테 쿠다사이",
        "~하면 / ~했을 때",
        {
          "id": "grammar_n4_7",
          "level": "N4",
          "meta": {
            "pattern": "동사 た형 + ら"
          },
          "examples": [
            {
              "jp": "駅に着いたら、電話してください。",
              "hira": "えきについたら、でんわしてください。",
              "pronunciation": "에키니 츠이타라, 덴와시테 쿠다사이",
              "meaning": "역에 도착하면 전화해 주세요."
            }
          ]
        }
      ],
      [
        "～ば",
        "～ば",
        "지칸가 아레바, 테츠다이마스",
        "~하면 / ~라면",
        {
          "id": "grammar_n4_8",
          "level": "N4",
          "meta": {
            "pattern": "동사 ば형 / い형용사 + ければ"
          },
          "examples": [
            {
              "jp": "時間があれば、手伝います。",
              "hira": "じかんがあれば、てつだいます。",
              "pronunciation": "지칸가 아레바, 테츠다이마스",
              "meaning": "시간이 있으면 도와드릴게요."
            }
          ]
        }
      ],
      [
        "～のに",
        "～のに",
        "벤쿄오 시타노니, 와스레테시마이마시타",
        "~인데도 / ~했는데도",
        {
          "id": "grammar_n4_9",
          "level": "N4",
          "meta": {
            "pattern": "보통형 + のに"
          },
          "examples": [
            {
              "jp": "勉強したのに、忘れてしまいました。",
              "hira": "べんきょうしたのに、わすれてしまいました。",
              "pronunciation": "벤쿄오 시타노니, 와스레테시마이마시타",
              "meaning": "공부했는데도 잊어버렸어요."
            }
          ]
        }
      ],
      [
        "～てしまう",
        "～てしまう",
        "사이후오 와스레테시마이마시타",
        "~해 버리다",
        {
          "id": "grammar_n4_10",
          "level": "N4",
          "meta": {
            "pattern": "동사 て형 + しまう"
          },
          "examples": [
            {
              "jp": "財布を忘れてしまいました。",
              "hira": "さいふをわすれてしまいました。",
              "pronunciation": "사이후오 와스레테시마이마시타",
              "meaning": "지갑을 잊어버렸어요."
            }
          ]
        }
      ],
      [
        "～てみる",
        "～てみる",
        "코노 료오리오 타베테미마스",
        "~해 보다",
        {
          "id": "grammar_n4_11",
          "level": "N4",
          "meta": {
            "pattern": "동사 て형 + みる"
          },
          "examples": [
            {
              "jp": "この料理を食べてみます。",
              "hira": "このりょうりをたべてみます。",
              "pronunciation": "코노 료오리오 타베테미마스",
              "meaning": "이 요리를 먹어 볼게요."
            }
          ]
        }
      ],
      [
        "～続ける",
        "～続ける",
        "마이니치, 니혼고오 벤쿄오시츠즈케테이마스",
        "계속 ~하다",
        {
          "id": "grammar_n4_12",
          "level": "N4",
          "meta": {
            "pattern": "동사 ます형 어간 + 続ける"
          },
          "examples": [
            {
              "jp": "毎日、日本語を勉強し続けています。",
              "hira": "まいにち、にほんごをべんきょうしつづけています。",
              "pronunciation": "마이니치, 니혼고오 벤쿄오시츠즈케테이마스",
              "meaning": "매일 일본어 공부를 계속하고 있어요."
            }
          ]
        }
      ],
      [
        "～始める",
        "～始める",
        "아메가 후리하지메마시타",
        "~하기 시작하다",
        {
          "id": "grammar_n4_13",
          "level": "N4",
          "meta": {
            "pattern": "동사 ます형 어간 + 始める"
          },
          "examples": [
            {
              "jp": "雨が降り始めました。",
              "hira": "あめがふりはじめました。",
              "pronunciation": "아메가 후리하지메마시타",
              "meaning": "비가 내리기 시작했어요."
            }
          ]
        }
      ],
      [
        "～終わる",
        "～終わる",
        "슈쿠다이오 야리오와리마시타",
        "~을 끝내다",
        {
          "id": "grammar_n4_14",
          "level": "N4",
          "meta": {
            "pattern": "동사 ます형 어간 + 終わる"
          },
          "examples": [
            {
              "jp": "宿題をやり終わりました。",
              "hira": "しゅくだいをやりおわりました。",
              "pronunciation": "슈쿠다이오 야리오와리마시타",
              "meaning": "숙제를 다 끝냈어요."
            }
          ]
        }
      ],
      [
        "～間に",
        "～間に",
        "네테이루 아이다니 아메가 후리마시타",
        "~하는 동안에",
        {
          "id": "grammar_n4_15",
          "level": "N4",
          "meta": {
            "pattern": "동사 ている형 / 명사 + の間に"
          },
          "examples": [
            {
              "jp": "寝ている間に雨が降りました。",
              "hira": "ねているあいだにあめがふりました。",
              "pronunciation": "네테이루 아이다니 아메가 후리마시타",
              "meaning": "자고 있는 동안 비가 왔어요."
            }
          ]
        }
      ],
      [
        "～間",
        "～間",
        "니혼니 이루 아이다, 니혼고오 타쿠산 츠카이마시타",
        "~하는 동안",
        {
          "id": "grammar_n4_16",
          "level": "N4",
          "meta": {
            "pattern": "동사 ている형 + 間"
          },
          "examples": [
            {
              "jp": "日本にいる間、日本語をたくさん使いました。",
              "hira": "にほんにいるあいだ、にほんごをたくさんつかいました。",
              "pronunciation": "니혼니 이루 아이다, 니혼고오 타쿠산 츠카이마시타",
              "meaning": "일본에 있는 동안 일본어를 많이 사용했어요."
            }
          ]
        }
      ],
      [
        "～ようになる",
        "～ようになる",
        "니혼고가 하나세루 요오니 나리마시타",
        "~하게 되다",
        {
          "id": "grammar_n4_17",
          "level": "N4",
          "meta": {
            "pattern": "동사 사전형 / 가능형 + ようになる"
          },
          "examples": [
            {
              "jp": "日本語が話せるようになりました。",
              "hira": "にほんごがはなせるようになりました。",
              "pronunciation": "니혼고가 하나세루 요오니 나리마시타",
              "meaning": "일본어를 말할 수 있게 되었어요."
            }
          ]
        }
      ],
      [
        "～ようにする",
        "～ようにする",
        "마이니치, 니혼고오 하나스 요오니 시테이마스",
        "~하도록 하다 / 노력하다",
        {
          "id": "grammar_n4_18",
          "level": "N4",
          "meta": {
            "pattern": "동사 사전형 / ない형 + ようにする"
          },
          "examples": [
            {
              "jp": "毎日、日本語を話すようにしています。",
              "hira": "まいにち、にほんごをはなすようにしています。",
              "pronunciation": "마이니치, 니혼고오 하나스 요오니 시테이마스",
              "meaning": "매일 일본어를 말하려고 하고 있어요."
            }
          ]
        }
      ],
      [
        "～ことにする",
        "～ことにする",
        "마이니치 산쥬푼 벤쿄오 스루 코토니 시마시타",
        "~하기로 하다",
        {
          "id": "grammar_n4_19",
          "level": "N4",
          "meta": {
            "pattern": "동사 사전형 / ない형 + ことにする"
          },
          "examples": [
            {
              "jp": "毎日30分勉強することにしました。",
              "hira": "まいにちさんじゅっぷんべんきょうすることにしました。",
              "pronunciation": "마이니치 산쥬푼 벤쿄오 스루 코토니 시마시타",
              "meaning": "매일 30분 공부하기로 했어요."
            }
          ]
        }
      ],
      [
        "～ことになる",
        "～ことになる",
        "라이게츠카라 토오쿄오데 하타라쿠 코토니 나리마시타",
        "~하게 되다 / ~하기로 정해지다",
        {
          "id": "grammar_n4_20",
          "level": "N4",
          "meta": {
            "pattern": "동사 사전형 + ことになる"
          },
          "examples": [
            {
              "jp": "来月から東京で働くことになりました。",
              "hira": "らいげつからとうきょうではたらくことになりました。",
              "pronunciation": "라이게츠카라 토오쿄오데 하타라쿠 코토니 나리마시타",
              "meaning": "다음 달부터 도쿄에서 일하게 됐어요."
            }
          ]
        }
      ],
      [
        "～たばかりだ",
        "～たばかりだ",
        "니혼니 키타 바카리데스",
        "막 ~했다",
        {
          "id": "grammar_n4_21",
          "level": "N4",
          "meta": {
            "pattern": "동사 た형 + ばかりだ"
          },
          "examples": [
            {
              "jp": "日本に来たばかりです。",
              "hira": "にほんにきたばかりです。",
              "pronunciation": "니혼니 키타 바카리데스",
              "meaning": "일본에 막 왔어요."
            }
          ]
        }
      ],
      [
        "～やすい",
        "～やすい",
        "코노 펜와 카키야스이데스",
        "~하기 쉽다",
        {
          "id": "grammar_n4_22",
          "level": "N4",
          "meta": {
            "pattern": "동사 ます형 어간 + やすい"
          },
          "examples": [
            {
              "jp": "このペンは書きやすいです。",
              "hira": "このペンはかきやすいです。",
              "pronunciation": "코노 펜와 카키야스이데스",
              "meaning": "이 펜은 쓰기 편해요."
            }
          ]
        }
      ],
      [
        "～にくい",
        "～にくい",
        "코노 지와 요미니쿠이데스",
        "~하기 어렵다",
        {
          "id": "grammar_n4_23",
          "level": "N4",
          "meta": {
            "pattern": "동사 ます형 어간 + にくい"
          },
          "examples": [
            {
              "jp": "この字は読みにくいです。",
              "hira": "このじはよみにくいです。",
              "pronunciation": "코노 지와 요미니쿠이데스",
              "meaning": "이 글자는 읽기 어려워요."
            }
          ]
        }
      ],
      [
        "～すぎる",
        "～すぎる",
        "코노 카반와 타카스기마스",
        "너무 ~하다",
        {
          "id": "grammar_n4_24",
          "level": "N4",
          "meta": {
            "pattern": "동사 ます형 어간 / 형용사 어간 + すぎる"
          },
          "examples": [
            {
              "jp": "このかばんは高すぎます。",
              "hira": "このかばんはたかすぎます。",
              "pronunciation": "코노 카반와 타카스기마스",
              "meaning": "이 가방은 너무 비싸요."
            }
          ]
        }
      ],
      [
        "～そうに",
        "～そうに",
        "카레와 타노시소오니 하나시테이마스",
        "~해 보이게 / ~할 것처럼",
        {
          "id": "grammar_n4_25",
          "level": "N4",
          "meta": {
            "pattern": "어간 + そうに"
          },
          "examples": [
            {
              "jp": "彼は楽しそうに話しています。",
              "hira": "かれはたのしそうにはなしています。",
              "pronunciation": "카레와 타노시소오니 하나시테이마스",
              "meaning": "그는 즐거워 보이는 표정으로 이야기하고 있어요."
            }
          ]
        }
      ],
      [
        "～しかない",
        "～しかない",
        "모오 카에루시카 아리마센",
        "~할 수밖에 없다 / ~밖에 없다",
        {
          "id": "grammar_n4_26",
          "level": "N4",
          "meta": {
            "pattern": "동사 사전형 + しかない"
          },
          "examples": [
            {
              "jp": "もう帰るしかありません。",
              "hira": "もうかえるしかありません。",
              "pronunciation": "모오 카에루시카 아리마센",
              "meaning": "이제 돌아갈 수밖에 없어요."
            }
          ]
        }
      ],
      [
        "～ようと思う",
        "～ようと思う",
        "라이넨, 니혼에 이코오토 오못테이마스",
        "~하려고 생각하다",
        {
          "id": "grammar_n4_27",
          "level": "N4",
          "meta": {
            "pattern": "동사 의지형 + と思う"
          },
          "examples": [
            {
              "jp": "来年、日本へ行こうと思っています。",
              "hira": "らいねん、にほんへいこうとおもっています。",
              "pronunciation": "라이넨, 니혼에 이코오토 오못테이마스",
              "meaning": "내년에 일본에 가려고 생각하고 있어요."
            }
          ]
        }
      ],
      [
        "～ても",
        "～ても",
        "아메가 훗테모 이키마스",
        "~해도",
        {
          "id": "grammar_n4_28",
          "level": "N4",
          "meta": {
            "pattern": "동사 て형 + も"
          },
          "examples": [
            {
              "jp": "雨が降っても行きます。",
              "hira": "あめがふってもいきます。",
              "pronunciation": "아메가 훗테모 이키마스",
              "meaning": "비가 와도 갈 거예요."
            }
          ]
        }
      ],
      [
        "～たらどうですか",
        "～たらどうですか",
        "스코시 야슨다라 도오데스카",
        "~하는 게 어때요?",
        {
          "id": "grammar_n4_29",
          "level": "N4",
          "meta": {
            "pattern": "동사 た형 + らどうですか"
          },
          "examples": [
            {
              "jp": "少し休んだらどうですか。",
              "hira": "すこしやすんだらどうですか。",
              "pronunciation": "스코시 야슨다라 도오데스카",
              "meaning": "좀 쉬는 게 어때요?"
            }
          ]
        }
      ]
    ],
    "희망·의지": [
      [
        "～たい",
        "～たい",
        "타이",
        "~하고 싶다",
        {
          "id": "grammar_add_희망·의지_0",
          "level": "N4",
          "examples": [
            {
              "jp": "週末に映画を見たいです。",
              "hira": "しゅうまつにえいがをみたいです。",
              "pronunciation": "슈우마츠니 에이가오 미타이데스",
              "meaning": "주말에 영화를 보고 싶습니다."
            }
          ],
          "meta": {
            "pattern": "~하고 싶다"
          }
        }
      ]
    ],
    "경험·완료": [
      [
        "～たばかり",
        "～たばかり",
        "삿키 히루고항오 타베타 바카리데스",
        "막 ~했다",
        {
          "id": "gramexp_0",
          "level": "N4",
          "meta": {
            "pattern": "동사 た형 + ばかり"
          },
          "examples": [
            {
              "jp": "さっき昼ご飯を食べたばかりです。",
              "hira": "さっきひるごはんをたべたばかりです。",
              "pronunciation": "삿키 히루고항오 타베타 바카리데스",
              "meaning": "방금 점심을 먹었어요."
            }
          ]
        }
      ],
      [
        "～てしまいました",
        "～てしまいました",
        "사이후오 나쿠시테시마이마시타",
        "~해 버렸습니다 / ~하고 말았습니다",
        {
          "id": "gramexp_1",
          "level": "N4",
          "meta": {
            "pattern": "동사 て형 + しまいました"
          },
          "examples": [
            {
              "jp": "財布をなくしてしまいました。",
              "hira": "さいふをなくしてしまいました。",
              "pronunciation": "사이후오 나쿠시테시마이마시타",
              "meaning": "지갑을 잃어버리고 말았어요."
            }
          ]
        }
      ]
    ],
    "허가·의무·추측": [
      [
        "～なくてもいい",
        "～なくてもいい",
        "나쿠테모 이이",
        "~하지 않아도 된다",
        {
          "id": "grammar_add_ac50a57e",
          "level": "N4",
          "examples": [
            {
              "jp": "今日は来なくてもいいです。",
              "hira": "きょうはこなくてもいいです。",
              "pronunciation": "쿄오와 코나쿠테모 이이데스",
              "meaning": "오늘은 오지 않아도 됩니다."
            }
          ]
        }
      ],
      [
        "～なければならない",
        "～なければならない",
        "나케레바 나라나이",
        "~해야 한다",
        {
          "id": "grammar_add_f77a3b54",
          "level": "N4",
          "examples": [
            {
              "jp": "明日までに宿題をしなければなりません。",
              "hira": "あしたまでにしゅくだいをしなければなりません。",
              "pronunciation": "아시타마데니 슈쿠다이오 시나케레바 나리마센",
              "meaning": "내일까지 숙제를 해야 합니다."
            }
          ]
        }
      ],
      [
        "～と思う",
        "～とおもう",
        "토 오모우",
        "~라고 생각하다",
        {
          "id": "grammar_add_de6ab202",
          "level": "N4",
          "examples": [
            {
              "jp": "明日は雨だと思います。",
              "hira": "あしたはあめだとおもいます。",
              "pronunciation": "아시타와 아메다토 오모이마스",
              "meaning": "내일은 비가 올 것이라고 생각합니다."
            }
          ]
        }
      ],
      [
        "～と言う",
        "～という",
        "토 이우",
        "~라고 말하다",
        {
          "id": "grammar_add_3bea3aa7",
          "level": "N4",
          "examples": [
            {
              "jp": "彼は行かないと言いました。",
              "hira": "かれはいかないといいました。",
              "pronunciation": "카레와 이카나이토 이이마시타",
              "meaning": "그는 가지 않겠다고 말했습니다."
            }
          ]
        }
      ],
      [
        "～らしい",
        "～らしい",
        "라시이",
        "~인 것 같다 / ~답다",
        {
          "id": "grammar_add_85abd0ad",
          "level": "N3",
          "examples": [
            {
              "jp": "彼は学生らしいです。",
              "hira": "かれはがくせいらしいです。",
              "pronunciation": "카레와 가쿠세이라시이데스",
              "meaning": "그는 학생인 것 같습니다."
            }
          ]
        }
      ]
    ],
    "N3": [
      [
        "～わけではない",
        "～わけではない",
        "키라이나 와케데와 아리마센",
        "반드시 ~인 것은 아니다",
        {
          "id": "grammar_n3_0",
          "level": "N3",
          "meta": {
            "pattern": "보통형 + わけではない"
          },
          "examples": [
            {
              "jp": "嫌いなわけではありません。",
              "hira": "きらいなわけではありません。",
              "pronunciation": "키라이나 와케데와 아리마센",
              "meaning": "싫어하는 것은 아니에요."
            }
          ]
        }
      ],
      [
        "～わけがない",
        "～わけがない",
        "손나 코토가 아루 와케가 나이",
        "~일 리가 없다",
        {
          "id": "grammar_n3_1",
          "level": "N3",
          "meta": {
            "pattern": "보통형 + わけがない"
          },
          "examples": [
            {
              "jp": "そんなことがあるわけがない。",
              "hira": "そんなことがあるわけがない。",
              "pronunciation": "손나 코토가 아루 와케가 나이",
              "meaning": "그런 일이 있을 리가 없어."
            }
          ]
        }
      ],
      [
        "～はずだ",
        "～はずだ",
        "카레와 모오 츠이타 하즈데스",
        "~일 것이다 / ~임이 틀림없다",
        {
          "id": "grammar_n3_2",
          "level": "N3",
          "meta": {
            "pattern": "보통형 + はずだ"
          },
          "examples": [
            {
              "jp": "彼はもう着いたはずです。",
              "hira": "かれはもうついたはずです。",
              "pronunciation": "카레와 모오 츠이타 하즈데스",
              "meaning": "그는 이미 도착했을 거예요."
            }
          ]
        }
      ],
      [
        "～はずがない",
        "～はずがない",
        "카레가 손나 코토오 스루 하즈가 아리마센",
        "~일 리가 없다",
        {
          "id": "grammar_n3_3",
          "level": "N3",
          "meta": {
            "pattern": "보통형 + はずがない"
          },
          "examples": [
            {
              "jp": "彼がそんなことをするはずがありません。",
              "hira": "かれがそんなことをするはずがありません。",
              "pronunciation": "카레가 손나 코토오 스루 하즈가 아리마센",
              "meaning": "그가 그런 일을 할 리가 없어요."
            }
          ]
        }
      ],
      [
        "～ことはない",
        "～ことはない",
        "이소구 코토와 아리마센",
        "~할 필요가 없다",
        {
          "id": "grammar_n3_4",
          "level": "N3",
          "meta": {
            "pattern": "동사 사전형 + ことはない"
          },
          "examples": [
            {
              "jp": "急ぐことはありません。",
              "hira": "いそぐことはありません。",
              "pronunciation": "이소구 코토와 아리마센",
              "meaning": "서두를 필요 없어요."
            }
          ]
        }
      ],
      [
        "～たところ",
        "～たところ",
        "시라베타 토코로, 마치가이가 아리마시타",
        "~해 보니 / ~했더니",
        {
          "id": "grammar_n3_5",
          "level": "N3",
          "meta": {
            "pattern": "동사 た형 + ところ"
          },
          "examples": [
            {
              "jp": "調べたところ、間違いがありました。",
              "hira": "しらべたところ、まちがいがありました。",
              "pronunciation": "시라베타 토코로, 마치가이가 아리마시타",
              "meaning": "확인해 보니 잘못된 부분이 있었어요."
            }
          ]
        }
      ],
      [
        "～ところだ",
        "～ところだ",
        "이마카라 데카케루 토코로데스",
        "막 ~하려는 참이다",
        {
          "id": "grammar_n3_6",
          "level": "N3",
          "meta": {
            "pattern": "동사 사전형 + ところだ"
          },
          "examples": [
            {
              "jp": "今から出かけるところです。",
              "hira": "いまからでかけるところです。",
              "pronunciation": "이마카라 데카케루 토코로데스",
              "meaning": "지금 막 나가려던 참이에요."
            }
          ]
        }
      ],
      [
        "～ところだった",
        "～ところだった",
        "덴샤니 노리오쿠레루 토코로데시타",
        "하마터면 ~할 뻔했다",
        {
          "id": "grammar_n3_7",
          "level": "N3",
          "meta": {
            "pattern": "동사 사전형 + ところだった"
          },
          "examples": [
            {
              "jp": "電車に乗り遅れるところでした。",
              "hira": "でんしゃにのりおくれるところでした。",
              "pronunciation": "덴샤니 노리오쿠레루 토코로데시타",
              "meaning": "하마터면 전철을 놓칠 뻔했어요."
            }
          ]
        }
      ],
      [
        "～たびに",
        "～たびに",
        "코노 샤신오 미루 타비니 오모이다시마스",
        "~할 때마다",
        {
          "id": "grammar_n3_8",
          "level": "N3",
          "meta": {
            "pattern": "동사 사전형 / 명사 + の + たびに"
          },
          "examples": [
            {
              "jp": "この写真を見るたびに思い出します。",
              "hira": "このしゃしんをみるたびにおもいだします。",
              "pronunciation": "코노 샤신오 미루 타비니 오모이다시마스",
              "meaning": "이 사진을 볼 때마다 생각나요."
            }
          ]
        }
      ],
      [
        "～につれて",
        "～につれて",
        "토시오 토루니 츠레테, 타이료쿠가 오치마스",
        "~함에 따라",
        {
          "id": "grammar_n3_9",
          "level": "N3",
          "meta": {
            "pattern": "동사 사전형 / 명사 + につれて"
          },
          "examples": [
            {
              "jp": "年を取るにつれて、体力が落ちます。",
              "hira": "としをとるにつれて、たいりょくがおちます。",
              "pronunciation": "토시오 토루니 츠레테, 타이료쿠가 오치마스",
              "meaning": "나이가 들수록 체력이 떨어져요."
            }
          ]
        }
      ],
      [
        "～に対して",
        "～に対して",
        "센세이와 가쿠세이니 타이시테 테이네이니 세츠메이시마시타",
        "~에 대해 / ~에 반해",
        {
          "id": "grammar_n3_10",
          "level": "N3",
          "meta": {
            "pattern": "명사 + に対して"
          },
          "examples": [
            {
              "jp": "先生は学生に対して丁寧に説明しました。",
              "hira": "せんせいはがくせいにたいしてていねいにせつめいしました。",
              "pronunciation": "센세이와 가쿠세이니 타이시테 테이네이니 세츠메이시마시타",
              "meaning": "선생님은 학생에게 정중하게 설명했어요."
            }
          ]
        }
      ],
      [
        "～に違いない",
        "～に違いない",
        "카레와 니혼진니 치가이아리마센",
        "틀림없이 ~이다",
        {
          "id": "grammar_n3_11",
          "level": "N3",
          "meta": {
            "pattern": "보통형 + に違いない"
          },
          "examples": [
            {
              "jp": "彼は日本人に違いありません。",
              "hira": "かれはにほんじんにちがいありません。",
              "pronunciation": "카레와 니혼진니 치가이아리마센",
              "meaning": "그는 틀림없이 일본인일 거예요."
            }
          ]
        }
      ],
      [
        "～という",
        "～という",
        "타나카상토 이우 히토카라 덴와가 아리마시타",
        "~라는 / ~이라고 하는",
        {
          "id": "grammar_n3_12",
          "level": "N3",
          "meta": {
            "pattern": "명사 + という"
          },
          "examples": [
            {
              "jp": "田中さんという人から電話がありました。",
              "hira": "たなかさんというひとからでんわがありました。",
              "pronunciation": "타나카상토 이우 히토카라 덴와가 아리마시타",
              "meaning": "다나카 씨라는 사람에게서 전화가 왔어요."
            }
          ]
        }
      ],
      [
        "～ような",
        "～ような",
        "유메노 요오나 하나시데스",
        "~와 같은 / ~처럼",
        {
          "id": "grammar_n3_13",
          "level": "N3",
          "meta": {
            "pattern": "명사 + のような"
          },
          "examples": [
            {
              "jp": "夢のような話です。",
              "hira": "ゆめのようなはなしです。",
              "pronunciation": "유메노 요오나 하나시데스",
              "meaning": "꿈 같은 이야기예요."
            }
          ]
        }
      ],
      [
        "～にしては",
        "～にしては",
        "하지메테니 시테와 죠오즈데스네",
        "~치고는",
        {
          "id": "grammar_n3_14",
          "level": "N3",
          "meta": {
            "pattern": "명사 / 보통형 + にしては"
          },
          "examples": [
            {
              "jp": "初めてにしては上手ですね。",
              "hira": "はじめてにしてはじょうずですね。",
              "pronunciation": "하지메테니 시테와 죠오즈데스네",
              "meaning": "처음치고는 잘하네요."
            }
          ]
        }
      ],
      [
        "～にとって",
        "～にとって",
        "와타시니 톳테 타이세츠나 케이켄데스",
        "~에게는 / ~의 입장에서는",
        {
          "id": "grammar_n3_15",
          "level": "N3",
          "meta": {
            "pattern": "명사 + にとって"
          },
          "examples": [
            {
              "jp": "私にとって大切な経験です。",
              "hira": "わたしにとってたいせつなけいけんです。",
              "pronunciation": "와타시니 톳테 타이세츠나 케이켄데스",
              "meaning": "저에게는 소중한 경험이에요."
            }
          ]
        }
      ],
      [
        "～おかげで",
        "～おかげで",
        "토모다치노 오카게데 타스카리마시타",
        "~덕분에",
        {
          "id": "grammar_n3_16",
          "level": "N3",
          "meta": {
            "pattern": "명사 / 보통형 + おかげで"
          },
          "examples": [
            {
              "jp": "友達のおかげで助かりました。",
              "hira": "ともだちのおかげでたすかりました。",
              "pronunciation": "토모다치노 오카게데 타스카리마시타",
              "meaning": "친구 덕분에 도움을 받았어요."
            }
          ]
        }
      ],
      [
        "～せいで",
        "～せいで",
        "아메노 세이데 덴샤가 오쿠레마시타",
        "~탓에",
        {
          "id": "grammar_n3_17",
          "level": "N3",
          "meta": {
            "pattern": "명사 / 보통형 + せいで"
          },
          "examples": [
            {
              "jp": "雨のせいで電車が遅れました。",
              "hira": "あめのせいででんしゃがおくれました。",
              "pronunciation": "아메노 세이데 덴샤가 오쿠레마시타",
              "meaning": "비 때문에 전철이 늦었어요."
            }
          ]
        }
      ],
      [
        "～ばかり",
        "～ばかり",
        "아마이 모노바카리 타베테이마스",
        "~만 / ~뿐",
        {
          "id": "grammar_n3_18",
          "level": "N3",
          "meta": {
            "pattern": "명사 + ばかり"
          },
          "examples": [
            {
              "jp": "甘いものばかり食べています。",
              "hira": "あまいものばかりたべています。",
              "pronunciation": "아마이 모노바카리 타베테이마스",
              "meaning": "단것만 먹고 있어요."
            }
          ]
        }
      ],
      [
        "～ように言う",
        "～ように言う",
        "와스레나이 요오니 이이마시타",
        "~하도록 말하다",
        {
          "id": "grammar_n3_19",
          "level": "N3",
          "meta": {
            "pattern": "동사 사전형 / ない형 + ように言う"
          },
          "examples": [
            {
              "jp": "忘れないように言いました。",
              "hira": "わすれないようにいいました。",
              "pronunciation": "와스레나이 요오니 이이마시타",
              "meaning": "잊지 말라고 말했어요."
            }
          ]
        }
      ]
    ]
  },
  "회화": {
    "인사": [
      [
        "おはようございます。",
        "おはようございます。",
        "오하요오 고자이마스",
        "안녕하세요 / 좋은 아침입니다.",
        {
          "id": "conversation_ohayou",
          "level": "N5",
          "examples": [
            {
              "jp": "おはようございます。今日もよろしくお願いします。",
              "hira": "おはようございます。きょうもよろしくおねがいします。",
              "pronunciation": "오하요오 고자이마스. 쿄오모 요로시쿠 오네가이시마스",
              "meaning": "안녕하세요. 오늘도 잘 부탁드립니다."
            }
          ]
        }
      ],
      [
        "こんにちは。",
        "こんにちは。",
        "곤니치와",
        "안녕하세요.",
        {
          "id": "conv_196964",
          "form": "conversation",
          "level": "N5",
          "examples": [
            {
              "jp": "こんにちは。",
              "hira": "こんにちは。",
              "pronunciation": "곤니치와",
              "meaning": "안녕하세요."
            }
          ]
        }
      ],
      [
        "こんばんは。",
        "こんばんは。",
        "곤반와",
        "안녕하세요 / 좋은 저녁입니다.",
        {
          "id": "conv_407465",
          "form": "conversation",
          "level": "N5",
          "examples": [
            {
              "jp": "こんばんは。",
              "hira": "こんばんは。",
              "pronunciation": "곤반와",
              "meaning": "안녕하세요 / 좋은 저녁입니다."
            }
          ]
        }
      ],
      [
        "おやすみなさい。",
        "おやすみなさい。",
        "오야스미나사이",
        "안녕히 주무세요.",
        {
          "id": "conv_997911",
          "form": "conversation",
          "level": "N5",
          "examples": [
            {
              "jp": "おやすみなさい。",
              "hira": "おやすみなさい。",
              "pronunciation": "오야스미나사이",
              "meaning": "안녕히 주무세요."
            }
          ]
        }
      ]
    ],
    "감사": [
      [
        "ありがとうございます。",
        "ありがとうございます。",
        "아리가토오 고자이마스",
        "감사합니다.",
        {
          "id": "conversation_arigatou",
          "level": "N5",
          "examples": [
            {
              "jp": "手伝ってくれて、ありがとうございます。",
              "hira": "てつだってくれて、ありがとうございます。",
              "pronunciation": "테츠닷테 쿠레테, 아리가토오 고자이마스",
              "meaning": "도와주셔서 감사합니다."
            }
          ]
        }
      ],
      [
        "どうもありがとうございます。",
        "どうもありがとうございます。",
        "도오모 아리가토오 고자이마스",
        "정말 감사합니다.",
        {
          "id": "conv_383466",
          "form": "conversation",
          "level": "N5",
          "examples": [
            {
              "jp": "どうもありがとうございます。",
              "hira": "どうもありがとうございます。",
              "pronunciation": "도오모 아리가토오 고자이마스",
              "meaning": "정말 감사합니다."
            }
          ]
        }
      ]
    ],
    "사과·호출": [
      [
        "すみません。",
        "すみません。",
        "스미마센",
        "죄송합니다 / 실례합니다.",
        {
          "id": "conversation_sumimasen",
          "level": "N5",
          "examples": [
            {
              "jp": "すみません、駅はどこですか。",
              "hira": "すみません、えきはどこですか。",
              "pronunciation": "스미마센, 에키와 도코데스카",
              "meaning": "실례합니다. 역은 어디입니까?"
            }
          ]
        }
      ],
      [
        "ごめんなさい。",
        "ごめんなさい。",
        "고멘나사이",
        "미안합니다.",
        {
          "id": "conv_286834",
          "form": "conversation",
          "level": "N5",
          "examples": [
            {
              "jp": "ごめんなさい。",
              "hira": "ごめんなさい。",
              "pronunciation": "고멘나사이",
              "meaning": "미안합니다."
            }
          ]
        }
      ]
    ],
    "부탁": [
      [
        "お願いします。",
        "おねがいします。",
        "오네가이시마스",
        "부탁합니다 / 잘 부탁드립니다.",
        {
          "id": "conversation_onegai",
          "level": "N5",
          "examples": [
            {
              "jp": "これをお願いします。",
              "hira": "これをおねがいします。",
              "pronunciation": "코레오 오네가이시마스",
              "meaning": "이것으로 부탁합니다."
            }
          ]
        }
      ],
      [
        "ちょっと待ってください。",
        "ちょっとまってください。",
        "촛토 맛테 쿠다사이",
        "잠시 기다려 주세요.",
        {
          "id": "conv_69918",
          "form": "conversation",
          "level": "N5",
          "examples": [
            {
              "jp": "ちょっと待ってください。",
              "hira": "ちょっとまってください。",
              "pronunciation": "촛토 맛테 쿠다사이",
              "meaning": "잠시 기다려 주세요."
            }
          ]
        }
      ],
      [
        "もう一度お願いします。",
        "もういちどおねがいします。",
        "모오 이치도 오네가이시마스",
        "한 번 더 부탁드립니다.",
        {
          "id": "conv_12377",
          "form": "conversation",
          "level": "N5",
          "examples": [
            {
              "jp": "もう一度お願いします。",
              "hira": "もういちどおねがいします。",
              "pronunciation": "모오 이치도 오네가이시마스",
              "meaning": "한 번 더 부탁드립니다."
            }
          ]
        }
      ],
      [
        "手伝ってもらえますか。",
        "てつだってもらえますか。",
        "테츠닷테 모라에마스카",
        "도와주실 수 있나요?",
        {
          "id": "conv_352483",
          "form": "conversation",
          "level": "N5",
          "examples": [
            {
              "jp": "手伝ってもらえますか。",
              "hira": "てつだってもらえますか。",
              "pronunciation": "테츠닷테 모라에마스카",
              "meaning": "도와주실 수 있나요?"
            }
          ]
        }
      ]
    ],
    "상태·반응": [
      [
        "大丈夫です。",
        "だいじょうぶです。",
        "다이죠오부데스",
        "괜찮습니다.",
        {
          "id": "conversation_daijoubu",
          "level": "N5",
          "examples": [
            {
              "jp": "大丈夫です。ありがとうございます。",
              "hira": "だいじょうぶです。ありがとうございます。",
              "pronunciation": "다이죠오부데스. 아리가토오 고자이마스",
              "meaning": "괜찮습니다. 감사합니다."
            }
          ]
        }
      ],
      [
        "分かりません。",
        "わかりません。",
        "와카리마센",
        "모르겠습니다 / 이해하지 못했습니다.",
        {
          "id": "conv_114214",
          "form": "conversation",
          "level": "N5",
          "examples": [
            {
              "jp": "分かりません。",
              "hira": "わかりません。",
              "pronunciation": "와카리마센",
              "meaning": "모르겠습니다 / 이해하지 못했습니다."
            }
          ]
        }
      ],
      [
        "分かりました。",
        "わかりました。",
        "와카리마시타",
        "알겠습니다.",
        {
          "id": "conv_851472",
          "form": "conversation",
          "level": "N5",
          "examples": [
            {
              "jp": "分かりました。",
              "hira": "わかりました。",
              "pronunciation": "와카리마시타",
              "meaning": "알겠습니다."
            }
          ]
        }
      ],
      [
        "本当ですか。",
        "ほんとうですか。",
        "혼토오데스카",
        "정말이에요?",
        {
          "id": "conv_284229",
          "form": "conversation",
          "level": "N5",
          "examples": [
            {
              "jp": "本当ですか。",
              "hira": "ほんとうですか。",
              "pronunciation": "혼토오데스카",
              "meaning": "정말이에요?"
            }
          ]
        }
      ]
    ],
    "대답": [
      [
        "はい、わかりました。",
        "はい、わかりました",
        "하이, 와카리마시타",
        "네, 알겠습니다.",
        {
          "id": "conv_add_2",
          "level": "N5",
          "examples": [
            {
              "jp": "はい、わかりました。",
              "hira": "はい、わかりました",
              "pronunciation": "하이, 와카리마시타",
              "meaning": "네, 알겠습니다."
            }
          ]
        }
      ],
      [
        "いいえ、わかりません。",
        "いいえ、わかりません",
        "이이에, 와카리마센",
        "아니요, 모르겠습니다.",
        {
          "id": "conv_add_3",
          "level": "N5",
          "examples": [
            {
              "jp": "いいえ、わかりません。",
              "hira": "いいえ、わかりません",
              "pronunciation": "이이에, 와카리마센",
              "meaning": "아니요, 모르겠습니다."
            }
          ]
        }
      ]
    ],
    "약속": [
      [
        "また明日。",
        "またあした。",
        "마타 아시타",
        "내일 또 봐요.",
        {
          "id": "conversation_itsuka",
          "level": "N5",
          "examples": [
            {
              "jp": "では、また明日。",
              "hira": "では、またあした。",
              "pronunciation": "데와, 마타 아시타",
              "meaning": "그럼, 내일 또 봐요."
            }
          ]
        }
      ],
      [
        "また後で。",
        "またあとで。",
        "마타 아토데",
        "나중에 또 봐요.",
        {
          "id": "conv_982881",
          "form": "conversation",
          "level": "N5",
          "examples": [
            {
              "jp": "また後で。",
              "hira": "またあとで。",
              "pronunciation": "마타 아토데",
              "meaning": "나중에 또 봐요."
            }
          ]
        }
      ]
    ],
    "인사·마무리": [
      [
        "お疲れさまでした。",
        "おつかれさまでした。",
        "오츠카레사마데시타",
        "수고하셨습니다.",
        {
          "id": "conversation_otsukare",
          "level": "N5",
          "examples": [
            {
              "jp": "今日もお疲れさまでした。",
              "hira": "きょうもおつかれさまでした。",
              "pronunciation": "쿄오모 오츠카레사마데시타",
              "meaning": "오늘도 수고하셨습니다."
            }
          ]
        }
      ]
    ],
    "쇼핑": [
      [
        "これを見せてください。",
        "これをみせてください",
        "코레오 미세테 쿠다사이",
        "이것을 보여 주세요.",
        {
          "id": "conv_add_6",
          "level": "N5",
          "examples": [
            {
              "jp": "これを見せてください。",
              "hira": "これをみせてください",
              "pronunciation": "코레오 미세테 쿠다사이",
              "meaning": "이것을 보여 주세요."
            }
          ]
        }
      ],
      [
        "これをください。",
        "これをください。",
        "코레오 쿠다사이",
        "이것을 주세요.",
        {
          "id": "conv_add_012",
          "level": "N5",
          "examples": [
            {
              "jp": "これを二つください。",
              "hira": "これをふたつください。",
              "pronunciation": "코레오 후타츠 쿠다사이",
              "meaning": "이것을 두 개 주세요."
            }
          ]
        }
      ],
      [
        "試着してもいいですか。",
        "しちゃくしてもいいですか。",
        "시차쿠시테모 이이데스카",
        "입어 봐도 될까요?",
        {
          "id": "conv_add_013",
          "level": "N5",
          "examples": [
            {
              "jp": "この服を試着してもいいですか。",
              "hira": "このふくをしちゃくしてもいいですか。",
              "pronunciation": "코노 후쿠오 시차쿠시테모 이이데스카",
              "meaning": "이 옷을 입어 봐도 될까요?"
            }
          ]
        }
      ]
    ],
    "식당": [
      [
        "お水をください。",
        "おみずをください",
        "오미즈오 쿠다사이",
        "물 주세요.",
        {
          "id": "conv_add_5",
          "level": "N5",
          "examples": [
            {
              "jp": "お水をください。",
              "hira": "おみずをください",
              "pronunciation": "오미즈오 쿠다사이",
              "meaning": "물 주세요."
            }
          ]
        }
      ],
      [
        "おすすめは何ですか。",
        "おすすめはなんですか。",
        "오스스메와 난데스카",
        "추천 메뉴가 뭐예요?",
        {
          "id": "conv_add_010",
          "level": "N5",
          "examples": [
            {
              "jp": "おすすめは何ですか。",
              "hira": "おすすめはなんですか。",
              "pronunciation": "오스스메와 난데스카",
              "meaning": "추천 메뉴가 뭐예요?"
            }
          ]
        }
      ],
      [
        "お会計お願いします。",
        "おかいけいおねがいします。",
        "오카이케이 오네가이시마스",
        "계산 부탁드립니다.",
        {
          "id": "conv_add_011",
          "level": "N5",
          "examples": [
            {
              "jp": "すみません、お会計お願いします。",
              "hira": "すみません、おかいけいおねがいします。",
              "pronunciation": "스미마센 오카이케이 오네가이시마스",
              "meaning": "실례합니다, 계산 부탁드립니다."
            }
          ]
        }
      ]
    ],
    "교통": [
      [
        "次の駅で降ります。",
        "つぎのえきでおります",
        "츠기노 에키데 오리마스",
        "다음 역에서 내립니다.",
        {
          "id": "conv_add_7",
          "level": "N5",
          "examples": [
            {
              "jp": "次の駅で降ります。",
              "hira": "つぎのえきでおります",
              "pronunciation": "츠기노 에키데 오리마스",
              "meaning": "다음 역에서 내립니다."
            }
          ]
        }
      ],
      [
        "この電車は東京へ行きますか。",
        "このでんしゃはとうきょうへいきますか。",
        "코노 덴샤와 토오쿄오에 이키마스카",
        "이 전철은 도쿄로 가나요?",
        {
          "id": "conv_add_014",
          "level": "N5",
          "examples": [
            {
              "jp": "この電車は東京へ行きますか。",
              "hira": "このでんしゃはとうきょうへいきますか。",
              "pronunciation": "코노 덴샤와 토오쿄오에 이키마스카",
              "meaning": "이 전철은 도쿄로 가나요?"
            }
          ]
        }
      ],
      [
        "次の電車は何時ですか。",
        "つぎのでんしゃはなんじですか。",
        "츠기노 덴샤와 난지데스카",
        "다음 전철은 몇 시인가요?",
        {
          "id": "conv_add_015",
          "level": "N5",
          "examples": [
            {
              "jp": "次の電車は何時ですか。",
              "hira": "つぎのでんしゃはなんじですか。",
              "pronunciation": "츠기노 덴샤와 난지데스카",
              "meaning": "다음 전철은 몇 시인가요?"
            }
          ]
        }
      ]
    ],
    "호텔": [
      [
        "予約しています。",
        "よやくしています。",
        "요야쿠시테이마스",
        "예약했어요 / 예약해 두었어요",
        {
          "id": "conv_957543",
          "form": "conversation",
          "level": "N5",
          "examples": [
            {
              "jp": "予約しています。",
              "hira": "よやくしています。",
              "pronunciation": "요야쿠시테이마스",
              "meaning": "예약했어요 / 예약해 두었어요"
            }
          ]
        }
      ],
      [
        "チェックインをお願いします。",
        "チェックインをおねがいします。",
        "쳇쿠인오 오네가이시마스",
        "체크인 부탁드립니다.",
        {
          "id": "conv_300981",
          "form": "conversation",
          "level": "N5",
          "examples": [
            {
              "jp": "チェックインをお願いします。",
              "hira": "チェックインをおねがいします。",
              "pronunciation": "쳇쿠인오 오네가이시마스",
              "meaning": "체크인 부탁드립니다."
            }
          ]
        }
      ],
      [
        "部屋にWi-Fiはありますか。",
        "へやにわいふぁいはありますか。",
        "헤야니 와이파이와 아리마스카",
        "객실에 와이파이가 있나요?",
        {
          "id": "conv_add_017",
          "level": "N5",
          "examples": [
            {
              "jp": "部屋にWi-Fiはありますか。",
              "hira": "へやにわいふぁいはありますか。",
              "pronunciation": "헤야니 와이파이와 아리마스카",
              "meaning": "객실에 와이파이가 있나요?"
            }
          ]
        }
      ]
    ],
    "전화": [
      [
        "もしもし。",
        "もしもし。",
        "모시모시",
        "여보세요.",
        {
          "id": "conv_661452",
          "form": "conversation",
          "level": "N5",
          "examples": [
            {
              "jp": "もしもし。",
              "hira": "もしもし。",
              "pronunciation": "모시모시",
              "meaning": "여보세요."
            }
          ]
        }
      ],
      [
        "今、話せますか。",
        "いま、はなせますか。",
        "이마, 하나세마스카",
        "지금 통화할 수 있어요?",
        {
          "id": "conv_264868",
          "form": "conversation",
          "level": "N5",
          "examples": [
            {
              "jp": "今、話せますか。",
              "hira": "いま、はなせますか。",
              "pronunciation": "이마, 하나세마스카",
              "meaning": "지금 통화할 수 있어요?"
            }
          ]
        }
      ],
      [
        "後でかけ直します。",
        "あとでかけなおします。",
        "아토데 카케나오시마스",
        "나중에 다시 전화하겠습니다.",
        {
          "id": "conv_add_018",
          "level": "N5",
          "examples": [
            {
              "jp": "後でかけ直します。",
              "hira": "あとでかけなおします。",
              "pronunciation": "아토데 카케나오시마스",
              "meaning": "나중에 다시 전화하겠습니다."
            }
          ]
        }
      ]
    ],
    "리액션": [
      [
        "よかったですね。",
        "よかったですね",
        "요캇타데스네",
        "다행이네요.",
        {
          "id": "conv_add_11",
          "level": "N5",
          "examples": [
            {
              "jp": "よかったですね。",
              "hira": "よかったですね",
              "pronunciation": "요캇타데스네",
              "meaning": "다행이네요."
            }
          ]
        }
      ]
    ],
    "온라인/SNS": [
      [
        "了解です。",
        "りょうかいです。",
        "료오카이데스",
        "알겠습니다.",
        {
          "id": "conv_864910",
          "form": "conversation",
          "level": "N5",
          "examples": [
            {
              "jp": "了解です。",
              "hira": "りょうかいです。",
              "pronunciation": "료오카이데스",
              "meaning": "알겠습니다."
            }
          ]
        }
      ],
      [
        "今向かっています。",
        "いまむかっています。",
        "이마 무캇테이마스",
        "지금 가는 중이에요.",
        {
          "id": "conv_991345",
          "form": "conversation",
          "level": "N5",
          "examples": [
            {
              "jp": "今向かっています。",
              "hira": "いまむかっています。",
              "pronunciation": "이마 무캇테이마스",
              "meaning": "지금 가는 중이에요."
            }
          ]
        }
      ]
    ],
    "질문": [
      [
        "どういう意味ですか。",
        "どういういみですか。",
        "도오이우 이미데스카",
        "무슨 뜻이에요?",
        {
          "id": "conv_134470",
          "form": "conversation",
          "level": "N5",
          "examples": [
            {
              "jp": "どういう意味ですか。",
              "hira": "どういういみですか。",
              "pronunciation": "도오이우 이미데스카",
              "meaning": "무슨 뜻이에요?"
            }
          ]
        }
      ],
      [
        "これは何ですか。",
        "これはなんですか。",
        "코레와 난데스카",
        "이것은 무엇인가요?",
        {
          "id": "conv_add_007",
          "level": "N5",
          "examples": [
            {
              "jp": "これは何ですか。",
              "hira": "これはなんですか。",
              "pronunciation": "코레와 난데스카",
              "meaning": "이것은 무엇인가요?"
            }
          ]
        }
      ],
      [
        "いくらですか。",
        "いくらですか。",
        "이쿠라데스카",
        "얼마예요?",
        {
          "id": "conv_add_008",
          "level": "N5",
          "examples": [
            {
              "jp": "このかばんはいくらですか。",
              "hira": "このかばんはいくらですか。",
              "pronunciation": "코노 카반와 이쿠라데스카",
              "meaning": "이 가방은 얼마예요?"
            }
          ]
        }
      ],
      [
        "トイレはどこですか。",
        "といれはどこですか。",
        "토이레와 도코데스카",
        "화장실은 어디인가요?",
        {
          "id": "conv_add_009",
          "level": "N5",
          "examples": [
            {
              "jp": "すみません、トイレはどこですか。",
              "hira": "すみません、といれはどこですか。",
              "pronunciation": "스미마센 토이레와 도코데스카",
              "meaning": "실례합니다, 화장실은 어디인가요?"
            }
          ]
        }
      ]
    ],
    "실례·질문": [
      [
        "すみません、駅はどこですか。",
        "すみません、えきはどこですか",
        "스미마센, 에키와 도코데스카",
        "실례합니다, 역은 어디인가요?",
        {
          "id": "conv_add_0",
          "level": "N5",
          "examples": [
            {
              "jp": "すみません、駅はどこですか。",
              "hira": "すみません、えきはどこですか",
              "pronunciation": "스미마센, 에키와 도코데스카",
              "meaning": "실례합니다, 역은 어디인가요?"
            }
          ]
        }
      ],
      [
        "これはいくらですか。",
        "これはいくらですか",
        "코레와 이쿠라데스카",
        "이것은 얼마인가요?",
        {
          "id": "conv_add_1",
          "level": "N5",
          "examples": [
            {
              "jp": "これはいくらですか。",
              "hira": "これはいくらですか",
              "pronunciation": "코레와 이쿠라데스카",
              "meaning": "이것은 얼마인가요?"
            }
          ]
        }
      ]
    ],
    "안부": [
      [
        "元気ですか。",
        "げんきですか。",
        "겐키데스카",
        "잘 지내세요?",
        {
          "id": "conv_add_000",
          "level": "N5",
          "examples": [
            {
              "jp": "元気ですか。",
              "hira": "げんきですか。",
              "pronunciation": "겐키데스카",
              "meaning": "잘 지내세요?"
            }
          ]
        }
      ],
      [
        "最近どうですか。",
        "さいきんどうですか。",
        "사이킨 도오데스카",
        "요즘 어떠세요?",
        {
          "id": "conv_add_001",
          "level": "N5",
          "examples": [
            {
              "jp": "最近どうですか。",
              "hira": "さいきんどうですか。",
              "pronunciation": "사이킨 도오데스카",
              "meaning": "요즘 어떠세요?"
            }
          ]
        }
      ]
    ],
    "감정": [
      [
        "うれしいです。",
        "うれしいです。",
        "우레시이데스",
        "기쁩니다.",
        {
          "id": "conv_add_002",
          "level": "N5",
          "examples": [
            {
              "jp": "うれしいです。",
              "hira": "うれしいです。",
              "pronunciation": "우레시이데스",
              "meaning": "기쁩니다."
            }
          ]
        }
      ],
      [
        "残念です。",
        "ざんねんです。",
        "잔넨데스",
        "아쉽습니다 / 유감입니다.",
        {
          "id": "conv_add_003",
          "level": "N5",
          "examples": [
            {
              "jp": "残念です。また今度行きましょう。",
              "hira": "ざんねんです。またこんどいきましょう。",
              "pronunciation": "잔넨데스 마타 콘도 이키마쇼오",
              "meaning": "아쉽네요. 다음에 또 갑시다."
            }
          ]
        }
      ],
      [
        "よかったです。",
        "よかったです。",
        "요캇타데스",
        "다행입니다 / 잘됐습니다.",
        {
          "id": "conv_add_004",
          "level": "N5",
          "examples": [
            {
              "jp": "無事でよかったです。",
              "hira": "ぶじでよかったです。",
              "pronunciation": "부지데 요캇타데스",
              "meaning": "무사해서 다행입니다."
            }
          ]
        }
      ]
    ],
    "온라인": [
      [
        "メッセージを確認しました。",
        "めっせーじをかくにんしました。",
        "멧세에지오 카쿠닌시마시타",
        "메시지를 확인했습니다.",
        {
          "id": "conv_add_019",
          "level": "N5",
          "examples": [
            {
              "jp": "メッセージを確認しました。",
              "hira": "めっせーじをかくにんしました。",
              "pronunciation": "멧세에지오 카쿠닌시마시타",
              "meaning": "메시지를 확인했습니다."
            }
          ]
        }
      ],
      [
        "後で返信します。",
        "あとでへんしんします。",
        "아토데 헨신시마스",
        "나중에 답장하겠습니다.",
        {
          "id": "conv_add_020",
          "level": "N5",
          "examples": [
            {
              "jp": "後で返信します。",
              "hira": "あとでへんしんします。",
              "pronunciation": "아토데 헨신시마스",
              "meaning": "나중에 답장하겠습니다."
            }
          ]
        }
      ]
    ],
    "일상 실전": [
      [
        "ちょっといいですか。",
        "ちょっといいですか。",
        "춋토 이이데스카",
        "잠깐 괜찮으세요?",
        {
          "id": "convx_0",
          "level": "N5",
          "examples": [
            {
              "jp": "すみません、ちょっといいですか。",
              "hira": "すみません、ちょっといいですか。",
              "pronunciation": "스미마센, 춋토 이이데스카",
              "meaning": "실례하지만 잠깐 괜찮으세요?"
            }
          ]
        }
      ],
      [
        "ゆっくり話してください。",
        "ゆっくりはなしてください。",
        "윳쿠리 하나시테 쿠다사이",
        "천천히 말해 주세요.",
        {
          "id": "convx_2",
          "level": "N5",
          "examples": [
            {
              "jp": "もう少しゆっくり話してください。",
              "hira": "もうすこしゆっくりはなしてください。",
              "pronunciation": "모오 스코시 윳쿠리 하나시테 쿠다사이",
              "meaning": "조금만 더 천천히 말해 주세요."
            }
          ]
        }
      ],
      [
        "日本語でお願いします。",
        "にほんごでおねがいします。",
        "니혼고데 오네가이시마스",
        "일본어로 부탁드립니다.",
        {
          "id": "convx_3",
          "level": "N5",
          "examples": [
            {
              "jp": "日本語でお願いします。",
              "hira": "にほんごでおねがいします。",
              "pronunciation": "니혼고데 오네가이시마스",
              "meaning": "일본어로 부탁드려요."
            }
          ]
        }
      ],
      [
        "気をつけてください。",
        "きをつけてください。",
        "키오 츠케테 쿠다사이",
        "조심하세요.",
        {
          "id": "convx_8",
          "level": "N5",
          "examples": [
            {
              "jp": "帰り道、気をつけてください。",
              "hira": "かえりみち、きをつけてください。",
              "pronunciation": "카에리미치, 키오 츠케테 쿠다사이",
              "meaning": "돌아가는 길 조심하세요."
            }
          ]
        }
      ],
      [
        "また連絡します。",
        "またれんらくします。",
        "마타 렌라쿠시마스",
        "다시 연락할게요.",
        {
          "id": "convx_9",
          "level": "N5",
          "examples": [
            {
              "jp": "後でまた連絡します。",
              "hira": "あとでまたれんらくします。",
              "pronunciation": "아토데 마타 렌라쿠시마스",
              "meaning": "나중에 다시 연락할게요."
            }
          ]
        }
      ],
      [
        "先にどうぞ。",
        "さきにどうぞ。",
        "사키니 도오조",
        "먼저 가세요 / 먼저 하세요.",
        {
          "id": "convx_11",
          "level": "N5",
          "examples": [
            {
              "jp": "お先にどうぞ。",
              "hira": "おさきにどうぞ。",
              "pronunciation": "오사키니 도오조",
              "meaning": "먼저 하세요."
            }
          ]
        }
      ],
      [
        "お待たせしました。",
        "おまたせしました。",
        "오마타세시마시타",
        "기다리게 해서 죄송합니다.",
        {
          "id": "convx_12",
          "level": "N5",
          "examples": [
            {
              "jp": "お待たせしました。どうぞ。",
              "hira": "おまたせしました。どうぞ。",
              "pronunciation": "오마타세시마시타. 도오조",
              "meaning": "기다리게 해서 죄송합니다. 여기요."
            }
          ]
        }
      ],
      [
        "気にしないでください。",
        "きにしないでください。",
        "키니 시나이데 쿠다사이",
        "신경 쓰지 마세요.",
        {
          "id": "convx_13",
          "level": "N5",
          "examples": [
            {
              "jp": "大丈夫です。気にしないでください。",
              "hira": "だいじょうぶです。きにしないでください。",
              "pronunciation": "다이죠오부데스. 키니 시나이데 쿠다사이",
              "meaning": "괜찮아요. 신경 쓰지 마세요."
            }
          ]
        }
      ],
      [
        "お先に失礼します。",
        "おさきにしつれいします。",
        "오사키니 시츠레이시마스",
        "먼저 실례하겠습니다.",
        {
          "id": "convx_14",
          "level": "N5",
          "examples": [
            {
              "jp": "今日はこれで、お先に失礼します。",
              "hira": "きょうはこれで、おさきにしつれいします。",
              "pronunciation": "쿄오와 코레데, 오사키니 시츠레이시마스",
              "meaning": "오늘은 이만 먼저 실례하겠습니다."
            }
          ]
        }
      ],
      [
        "お疲れさまです。",
        "おつかれさまです。",
        "오츠카레사마데스",
        "수고 많으세요.",
        {
          "id": "convx_15",
          "level": "N5",
          "examples": [
            {
              "jp": "今日もお疲れさまです。",
              "hira": "きょうもおつかれさまです。",
              "pronunciation": "쿄오모 오츠카레사마데스",
              "meaning": "오늘도 수고 많으세요."
            }
          ]
        }
      ]
    ],
    "여행·문제 해결": [
      [
        "予約の名前は何ですか。",
        "よやくのなまえはなんですか。",
        "요야쿠노 나마에와 난데스카",
        "예약자 이름이 어떻게 되나요?",
        {
          "id": "convtravel_0",
          "level": "N4",
          "examples": [
            {
              "jp": "予約の名前は何ですか。",
              "hira": "よやくのなまえはなんですか。",
              "pronunciation": "요야쿠노 나마에와 난데스카",
              "meaning": "예약자 이름이 어떻게 되나요?"
            }
          ]
        }
      ],
      [
        "予約を変更したいです。",
        "よやくをへんこうしたいです。",
        "요야쿠오 헨코오시타이데스",
        "예약을 변경하고 싶어요.",
        {
          "id": "convtravel_1",
          "level": "N4",
          "examples": [
            {
              "jp": "予約の日付を変更したいです。",
              "hira": "よやくのひづけをへんこうしたいです。",
              "pronunciation": "요야쿠노 히즈케오 헨코오시타이데스",
              "meaning": "예약 날짜를 변경하고 싶어요."
            }
          ]
        }
      ],
      [
        "道に迷いました。",
        "みちにまよいました。",
        "미치니 마요이마시타",
        "길을 잃었어요.",
        {
          "id": "convtravel_2",
          "level": "N4",
          "examples": [
            {
              "jp": "すみません、道に迷いました。",
              "hira": "すみません、みちにまよいました。",
              "pronunciation": "스미마센, 미치니 마요이마시타",
              "meaning": "실례합니다, 길을 잃었어요."
            }
          ]
        }
      ],
      [
        "駅はどちらですか。",
        "えきはどちらですか。",
        "에키와 도치라데스카",
        "역은 어느 쪽인가요?",
        {
          "id": "convtravel_3",
          "level": "N4",
          "examples": [
            {
              "jp": "すみません、駅はどちらですか。",
              "hira": "すみません、えきはどちらですか。",
              "pronunciation": "스미마센, 에키와 도치라데스카",
              "meaning": "실례합니다, 역은 어느 쪽인가요?"
            }
          ]
        }
      ],
      [
        "この電車は東京に行きますか。",
        "このでんしゃはとうきょうにいきますか。",
        "코노 덴샤와 토오쿄오니 이키마스카",
        "이 전철은 도쿄로 가나요?",
        {
          "id": "convtravel_4",
          "level": "N4",
          "examples": [
            {
              "jp": "この電車は東京に行きますか。",
              "hira": "このでんしゃはとうきょうにいきますか。",
              "pronunciation": "코노 덴샤와 토오쿄오니 이키마스카",
              "meaning": "이 전철은 도쿄로 가나요?"
            }
          ]
        }
      ],
      [
        "切符を一枚ください。",
        "きっぷをいちまいください。",
        "킷푸오 이치마이 쿠다사이",
        "표 한 장 주세요.",
        {
          "id": "convtravel_5",
          "level": "N4",
          "examples": [
            {
              "jp": "東京までの切符を一枚ください。",
              "hira": "とうきょうまでのきっぷをいちまいください。",
              "pronunciation": "토오쿄오마데노 킷푸오 이치마이 쿠다사이",
              "meaning": "도쿄까지 표 한 장 주세요."
            }
          ]
        }
      ],
      [
        "どこで乗り換えますか。",
        "どこでのりかえますか。",
        "도코데 노리카에마스카",
        "어디에서 갈아타나요?",
        {
          "id": "convtravel_6",
          "level": "N4",
          "examples": [
            {
              "jp": "東京駅で乗り換えます。",
              "hira": "とうきょうえきでのりかえます。",
              "pronunciation": "토오쿄오에키데 노리카에마스",
              "meaning": "도쿄역에서 갈아타요."
            }
          ]
        }
      ],
      [
        "荷物を預けたいです。",
        "にもつをあずけたいです。",
        "니모츠오 아즈케타이데스",
        "짐을 맡기고 싶어요.",
        {
          "id": "convtravel_7",
          "level": "N4",
          "examples": [
            {
              "jp": "荷物をホテルに預けたいです。",
              "hira": "にもつをホテルにあずけたいです。",
              "pronunciation": "니모츠오 호테루니 아즈케타이데스",
              "meaning": "짐을 호텔에 맡기고 싶어요."
            }
          ]
        }
      ],
      [
        "部屋を掃除してください。",
        "へやをそうじしてください。",
        "헤야오 소오지시테 쿠다사이",
        "방을 청소해 주세요.",
        {
          "id": "convtravel_8",
          "level": "N4",
          "examples": [
            {
              "jp": "すみません、部屋を掃除してください。",
              "hira": "すみません、へやをそうじしてください。",
              "pronunciation": "스미마센, 헤야오 소오지시테 쿠다사이",
              "meaning": "죄송하지만 방을 청소해 주세요."
            }
          ]
        }
      ],
      [
        "Wi-Fiはありますか。",
        "ワイファイはありますか。",
        "와이파이와 아리마스카",
        "와이파이가 있나요?",
        {
          "id": "convtravel_9",
          "level": "N4",
          "examples": [
            {
              "jp": "ホテルにWi-Fiはありますか。",
              "hira": "ホテルにワイファイはありますか。",
              "pronunciation": "호테루니 와이파이와 아리마스카",
              "meaning": "호텔에 와이파이가 있나요?"
            }
          ]
        }
      ],
      [
        "カードは使えますか。",
        "カードはつかえますか。",
        "카아도와 츠카에마스카",
        "카드를 사용할 수 있나요?",
        {
          "id": "convtravel_10",
          "level": "N4",
          "examples": [
            {
              "jp": "この店でカードは使えますか。",
              "hira": "このみせでカードはつかえますか。",
              "pronunciation": "코노 미세데 카아도와 츠카에마스카",
              "meaning": "이 가게에서 카드 사용할 수 있나요?"
            }
          ]
        }
      ],
      [
        "現金だけですか。",
        "げんきんだけですか。",
        "겐킨다케데스카",
        "현금만 가능한가요?",
        {
          "id": "convtravel_11",
          "level": "N4",
          "examples": [
            {
              "jp": "支払いは現金だけですか。",
              "hira": "しはらいはげんきんだけですか。",
              "pronunciation": "시하라이와 겐킨다케데스카",
              "meaning": "결제는 현금만 가능한가요?"
            }
          ]
        }
      ],
      [
        "領収書をください。",
        "りょうしゅうしょをください。",
        "료오슈우쇼오 쿠다사이",
        "영수증 주세요.",
        {
          "id": "convtravel_12",
          "level": "N4",
          "examples": [
            {
              "jp": "領収書を一枚ください。",
              "hira": "りょうしゅうしょをいちまいください。",
              "pronunciation": "료오슈우쇼오 이치마이 쿠다사이",
              "meaning": "영수증 한 장 주세요."
            }
          ]
        }
      ],
      [
        "これは何に使いますか。",
        "これはなににつかいますか。",
        "코레와 나니니 츠카이마스카",
        "이것은 어디에 쓰나요?",
        {
          "id": "convtravel_13",
          "level": "N4",
          "examples": [
            {
              "jp": "これは何に使いますか。",
              "hira": "これはなににつかいますか。",
              "pronunciation": "코레와 나니니 츠카이마스카",
              "meaning": "이것은 어디에 쓰나요?"
            }
          ]
        }
      ],
      [
        "写真を撮ってもいいですか。",
        "しゃしんをとってもいいですか。",
        "샤신오 톳테모 이이데스카",
        "사진을 찍어도 될까요?",
        {
          "id": "convtravel_14",
          "level": "N4",
          "examples": [
            {
              "jp": "ここで写真を撮ってもいいですか。",
              "hira": "ここでしゃしんをとってもいいですか。",
              "pronunciation": "코코데 샤신오 톳테모 이이데스카",
              "meaning": "여기서 사진을 찍어도 될까요?"
            }
          ]
        }
      ],
      [
        "助けてください。",
        "たすけてください。",
        "타스케테 쿠다사이",
        "도와주세요.",
        {
          "id": "convtravel_15",
          "level": "N4",
          "examples": [
            {
              "jp": "すみません、助けてください。",
              "hira": "すみません、たすけてください。",
              "pronunciation": "스미마센, 타스케테 쿠다사이",
              "meaning": "실례합니다, 도와주세요."
            }
          ]
        }
      ],
      [
        "大丈夫ですか。",
        "だいじょうぶですか。",
        "다이죠오부데스카",
        "괜찮으세요?",
        {
          "id": "convtravel_16",
          "level": "N4",
          "examples": [
            {
              "jp": "けがは大丈夫ですか。",
              "hira": "けがはだいじょうぶですか。",
              "pronunciation": "케가와 다이죠오부데스카",
              "meaning": "다친 곳은 괜찮으세요?"
            }
          ]
        }
      ],
      [
        "病院はどこですか。",
        "びょういんはどこですか。",
        "뵤오인와 도코데스카",
        "병원은 어디인가요?",
        {
          "id": "convtravel_17",
          "level": "N4",
          "examples": [
            {
              "jp": "近くの病院はどこですか。",
              "hira": "ちかくのびょういんはどこですか。",
              "pronunciation": "치카쿠노 뵤오인와 도코데스카",
              "meaning": "근처 병원은 어디인가요?"
            }
          ]
        }
      ],
      [
        "タクシーを呼んでください。",
        "タクシーをよんでください。",
        "타쿠시이오 욘데 쿠다사이",
        "택시를 불러 주세요.",
        {
          "id": "convtravel_18",
          "level": "N4",
          "examples": [
            {
              "jp": "ホテルからタクシーを呼んでください。",
              "hira": "ホテルからタクシーをよんでください。",
              "pronunciation": "호테루카라 타쿠시이오 욘데 쿠다사이",
              "meaning": "호텔에서 택시를 불러 주세요."
            }
          ]
        }
      ],
      [
        "お会計をお願いします。",
        "おかいけいをおねがいします。",
        "오카이케이오 오네가이시마스",
        "계산 부탁드립니다.",
        {
          "id": "convtravel_19",
          "level": "N4",
          "examples": [
            {
              "jp": "すみません、お会計をお願いします。",
              "hira": "すみません、おかいけいをおねがいします。",
              "pronunciation": "스미마센, 오카이케이오 오네가이시마스",
              "meaning": "실례합니다, 계산 부탁드립니다."
            }
          ]
        }
      ]
    ],
    "추가 실전": [
      [
        "もう一度お願いします。",
        "もういちどおねがいします。",
        "모오 이치도 오네가이시마스",
        "한 번 더 부탁드립니다.",
        {
          "id": "conv_more_0",
          "level": "N5",
          "examples": [
            {
              "jp": "すみません、もう一度お願いします。",
              "hira": "すみません、もういちどおねがいします。",
              "pronunciation": "스미마센, 모오 이치도 오네가이시마스",
              "meaning": "죄송하지만 한 번 더 부탁드립니다."
            }
          ]
        }
      ],
      [
        "ゆっくり話してください。",
        "ゆっくりはなしてください。",
        "윳쿠리 하나시테 쿠다사이",
        "천천히 말해 주세요.",
        {
          "id": "conv_more_1",
          "level": "N5",
          "examples": [
            {
              "jp": "すみません、もう少しゆっくり話してください。",
              "hira": "すみません、もうすこしゆっくりはなしてください。",
              "pronunciation": "스미마센, 모오 스코시 윳쿠리 하나시테 쿠다사이",
              "meaning": "죄송하지만 조금만 천천히 말해 주세요."
            }
          ]
        }
      ],
      [
        "もう一度言ってください。",
        "もういちどいってください。",
        "모오 이치도 잇테 쿠다사이",
        "한 번 더 말해 주세요.",
        {
          "id": "conv_more_2",
          "level": "N5",
          "examples": [
            {
              "jp": "すみません、もう一度言ってください。",
              "hira": "すみません、もういちどいってください。",
              "pronunciation": "스미마센, 모오 이치도 잇테 쿠다사이",
              "meaning": "죄송하지만 한 번 더 말해 주세요."
            }
          ]
        }
      ],
      [
        "写真を撮ってもいいですか。",
        "しゃしんをとってもいいですか。",
        "샤신오 톳테모 이이데스카",
        "사진을 찍어도 되나요?",
        {
          "id": "conv_more_3",
          "level": "N5",
          "examples": [
            {
              "jp": "ここで写真を撮ってもいいですか。",
              "hira": "ここでしゃしんをとってもいいですか。",
              "pronunciation": "코코데 샤신오 톳테모 이이데스카",
              "meaning": "여기서 사진을 찍어도 되나요?"
            }
          ]
        }
      ],
      [
        "ここで食べてもいいですか。",
        "ここでたべてもいいですか。",
        "코코데 타베테모 이이데스카",
        "여기서 먹어도 되나요?",
        {
          "id": "conv_more_4",
          "level": "N5",
          "examples": [
            {
              "jp": "ここで食べてもいいですか。",
              "hira": "ここでたべてもいいですか。",
              "pronunciation": "코코데 타베테모 이이데스카",
              "meaning": "여기서 먹어도 되나요?"
            }
          ]
        }
      ],
      [
        "カードで払えますか。",
        "かーどではらえますか。",
        "카아도데 하라에마스카",
        "카드로 결제할 수 있나요?",
        {
          "id": "conv_more_5",
          "level": "N5",
          "examples": [
            {
              "jp": "カードで払えますか。",
              "hira": "かーどではらえますか。",
              "pronunciation": "카아도데 하라에마스카",
              "meaning": "카드로 결제할 수 있나요?"
            }
          ]
        }
      ],
      [
        "現金だけですか。",
        "げんきんだけですか。",
        "겐킨다케데스카",
        "현금만 가능한가요?",
        {
          "id": "conv_more_6",
          "level": "N5",
          "examples": [
            {
              "jp": "支払いは現金だけですか。",
              "hira": "しはらいはげんきんだけですか。",
              "pronunciation": "시하라이와 겐킨다케데스카",
              "meaning": "결제는 현금만 가능한가요?"
            }
          ]
        }
      ],
      [
        "予約しています。",
        "よやくしています。",
        "요야쿠시테이마스",
        "예약했습니다.",
        {
          "id": "conv_more_7",
          "level": "N5",
          "examples": [
            {
              "jp": "七時に予約しています。",
              "hira": "しちじによやくしています。",
              "pronunciation": "시치지니 요야쿠시테이마스",
              "meaning": "7시에 예약했습니다."
            }
          ]
        }
      ],
      [
        "おすすめは何ですか。",
        "おすすめはなんですか。",
        "오스스메와 난데스카",
        "추천 메뉴가 무엇인가요?",
        {
          "id": "conv_more_8",
          "level": "N5",
          "examples": [
            {
              "jp": "この店のおすすめは何ですか。",
              "hira": "このみせのおすすめはなんですか。",
              "pronunciation": "코노 미세노 오스스메와 난데스카",
              "meaning": "이 가게의 추천 메뉴는 무엇인가요?"
            }
          ]
        }
      ],
      [
        "これをください。",
        "これをください。",
        "코레오 쿠다사이",
        "이것을 주세요.",
        {
          "id": "conv_more_9",
          "level": "N5",
          "examples": [
            {
              "jp": "すみません、これをください。",
              "hira": "すみません、これをください。",
              "pronunciation": "스미마센, 코레오 쿠다사이",
              "meaning": "실례합니다, 이것을 주세요."
            }
          ]
        }
      ],
      [
        "袋をください。",
        "ふくろをください。",
        "후쿠로오 쿠다사이",
        "봉투를 주세요.",
        {
          "id": "conv_more_10",
          "level": "N5",
          "examples": [
            {
              "jp": "袋を一枚ください。",
              "hira": "ふくろをいちまいください。",
              "pronunciation": "후쿠로오 이치마이 쿠다사이",
              "meaning": "봉투 하나 주세요."
            }
          ]
        }
      ],
      [
        "持ち帰りできますか。",
        "もちかえりできますか。",
        "모치카에리 데키마스카",
        "포장 가능한가요?",
        {
          "id": "conv_more_11",
          "level": "N5",
          "examples": [
            {
              "jp": "これ、持ち帰りできますか。",
              "hira": "これ、もちかえりできますか。",
              "pronunciation": "코레, 모치카에리 데키마스카",
              "meaning": "이거 포장 가능한가요?"
            }
          ]
        }
      ],
      [
        "トイレはどこですか。",
        "といれはどこですか。",
        "토이레와 도코데스카",
        "화장실은 어디인가요?",
        {
          "id": "conv_more_12",
          "level": "N5",
          "examples": [
            {
              "jp": "すみません、トイレはどこですか。",
              "hira": "すみません、といれはどこですか。",
              "pronunciation": "스미마센, 토이레와 도코데스카",
              "meaning": "실례합니다, 화장실은 어디인가요?"
            }
          ]
        }
      ],
      [
        "駅までどう行きますか。",
        "えきまでどういきますか。",
        "에키마데 도오 이키마스카",
        "역까지 어떻게 가나요?",
        {
          "id": "conv_more_13",
          "level": "N5",
          "examples": [
            {
              "jp": "ここから駅までどう行きますか。",
              "hira": "ここからえきまでどういきますか。",
              "pronunciation": "코코카라 에키마데 도오 이키마스카",
              "meaning": "여기서 역까지 어떻게 가나요?"
            }
          ]
        }
      ],
      [
        "何時に出ますか。",
        "なんじにでますか。",
        "난지니 데마스카",
        "몇 시에 출발하나요?",
        {
          "id": "conv_more_14",
          "level": "N5",
          "examples": [
            {
              "jp": "次のバスは何時に出ますか。",
              "hira": "つぎのばすはなんじにでますか。",
              "pronunciation": "츠기노 바스와 난지니 데마스카",
              "meaning": "다음 버스는 몇 시에 출발하나요?"
            }
          ]
        }
      ],
      [
        "荷物を預けたいです。",
        "にもつをあずけたいです。",
        "니모츠오 아즈케타이데스",
        "짐을 맡기고 싶습니다.",
        {
          "id": "conv_more_15",
          "level": "N5",
          "examples": [
            {
              "jp": "荷物をここに預けたいです。",
              "hira": "にもつをここにあずけたいです。",
              "pronunciation": "니모츠오 코코니 아즈케타이데스",
              "meaning": "짐을 여기에 맡기고 싶습니다."
            }
          ]
        }
      ],
      [
        "チェックインをお願いします。",
        "ちぇっくいんをおねがいします。",
        "첵쿠인오 오네가이시마스",
        "체크인 부탁드립니다.",
        {
          "id": "conv_more_16",
          "level": "N5",
          "examples": [
            {
              "jp": "ホテルのチェックインをお願いします。",
              "hira": "ほてるのちぇっくいんをおねがいします。",
              "pronunciation": "호테루노 첵쿠인오 오네가이시마스",
              "meaning": "호텔 체크인 부탁드립니다."
            }
          ]
        }
      ],
      [
        "Wi-Fiはありますか。",
        "わいふぁいはありますか。",
        "와이파이와 아리마스카",
        "와이파이가 있나요?",
        {
          "id": "conv_more_17",
          "level": "N5",
          "examples": [
            {
              "jp": "部屋にWi-Fiはありますか。",
              "hira": "へやにわいふぁいはありますか。",
              "pronunciation": "헤야니 와이파이와 아리마스카",
              "meaning": "방에 와이파이가 있나요?"
            }
          ]
        }
      ],
      [
        "少し待ってください。",
        "すこしまってください。",
        "스코시 맛테 쿠다사이",
        "잠시 기다려 주세요.",
        {
          "id": "conv_more_18",
          "level": "N5",
          "examples": [
            {
              "jp": "ここで少し待ってください。",
              "hira": "ここですこしまってください。",
              "pronunciation": "코코데 스코시 맛테 쿠다사이",
              "meaning": "여기서 잠시 기다려 주세요."
            }
          ]
        }
      ],
      [
        "分かりません。",
        "わかりません。",
        "와카리마센",
        "모르겠습니다.",
        {
          "id": "conv_more_19",
          "level": "N5",
          "examples": [
            {
              "jp": "すみません、よく分かりません。",
              "hira": "すみません、よくわかりません。",
              "pronunciation": "스미마센, 요쿠 와카리마센",
              "meaning": "죄송하지만 잘 모르겠습니다."
            }
          ]
        }
      ],
      [
        "日本語が少し話せます。",
        "にほんごがすこしはなせます。",
        "니혼고가 스코시 하나세마스",
        "일본어를 조금 할 수 있습니다.",
        {
          "id": "conv_more_20",
          "level": "N5",
          "examples": [
            {
              "jp": "日本語が少し話せます。",
              "hira": "にほんごがすこしはなせます。",
              "pronunciation": "니혼고가 스코시 하나세마스",
              "meaning": "일본어를 조금 할 수 있습니다."
            }
          ]
        }
      ]
    ]
  },
  "한자": {
    "N5": [
      [
        "日",
        "ひ / にち / じつ",
        "히 / 니치 / 지츠",
        "날 / 해 / 일",
        {
          "id": "kanji_26085",
          "level": "N5",
          "meta": {
            "readings": [
              "ひ",
              "にち",
              "じつ"
            ],
            "exampleWord": "日曜日"
          },
          "examples": [
            {
              "jp": "日曜日",
              "hira": "にちようび",
              "pronunciation": "니치요오비",
              "meaning": "일요일"
            }
          ]
        }
      ],
      [
        "月",
        "つき / げつ / がつ",
        "츠키 / 게츠 / 가츠",
        "달 / 월",
        {
          "id": "kanji_26376",
          "level": "N5",
          "meta": {
            "readings": [
              "つき",
              "げつ",
              "がつ"
            ],
            "exampleWord": "月曜日"
          },
          "examples": [
            {
              "jp": "月曜日",
              "hira": "げつようび",
              "pronunciation": "게츠요오비",
              "meaning": "월요일"
            }
          ]
        }
      ],
      [
        "火",
        "ひ / か / かようび",
        "히 / 카 / 카요오비",
        "불 / 화",
        {
          "id": "kanji_28779",
          "level": "N5",
          "meta": {
            "readings": [
              "ひ",
              "か",
              "かようび"
            ],
            "exampleWord": "火曜日"
          },
          "examples": [
            {
              "jp": "火曜日",
              "hira": "かようび",
              "pronunciation": "카요오비",
              "meaning": "화요일"
            }
          ]
        }
      ],
      [
        "水",
        "みず / すい",
        "미즈 / 스이",
        "물 / 수",
        {
          "id": "kanji_27700",
          "level": "N5",
          "meta": {
            "readings": [
              "みず",
              "すい"
            ],
            "exampleWord": "水曜日"
          },
          "examples": [
            {
              "jp": "水曜日",
              "hira": "すいようび",
              "pronunciation": "스이요오비",
              "meaning": "수요일"
            }
          ]
        }
      ],
      [
        "木",
        "き / もく",
        "키 / 모쿠",
        "나무 / 목",
        {
          "id": "kanji_26408",
          "level": "N5",
          "meta": {
            "readings": [
              "き",
              "もく"
            ],
            "exampleWord": "木曜日"
          },
          "examples": [
            {
              "jp": "木曜日",
              "hira": "もくようび",
              "pronunciation": "모쿠요오비",
              "meaning": "목요일"
            }
          ]
        }
      ],
      [
        "金",
        "かね / きん",
        "카네 / 킨",
        "금 / 돈",
        {
          "id": "kanji_37329",
          "level": "N5",
          "meta": {
            "readings": [
              "かね",
              "きん"
            ],
            "exampleWord": "お金"
          },
          "examples": [
            {
              "jp": "お金",
              "hira": "おかね",
              "pronunciation": "오카네",
              "meaning": "돈"
            }
          ]
        }
      ],
      [
        "人",
        "ひと / じん / にん",
        "히토 / 진 / 닌",
        "사람",
        {
          "id": "kanji_20154",
          "level": "N5",
          "meta": {
            "readings": [
              "ひと",
              "じん",
              "にん"
            ],
            "exampleWord": "日本人"
          },
          "examples": [
            {
              "jp": "日本人",
              "hira": "にほんじん",
              "pronunciation": "니혼진",
              "meaning": "일본인"
            }
          ]
        }
      ],
      [
        "大",
        "おお / だい / たい",
        "오오 / 다이 / 타이",
        "크다 / 큰",
        {
          "id": "kanji_22823",
          "level": "N5",
          "meta": {
            "readings": [
              "おお",
              "だい",
              "たい"
            ],
            "exampleWord": "大きい"
          },
          "examples": [
            {
              "jp": "大きい",
              "hira": "おおきい",
              "pronunciation": "오오키이",
              "meaning": "크다"
            }
          ]
        }
      ],
      [
        "小",
        "ちい / しょう",
        "치이 / 쇼오",
        "작다 / 작은",
        {
          "id": "kanji_23567",
          "level": "N5",
          "meta": {
            "readings": [
              "ちい",
              "しょう"
            ],
            "exampleWord": "小さい"
          },
          "examples": [
            {
              "jp": "小さい",
              "hira": "ちいさい",
              "pronunciation": "치이사이",
              "meaning": "작다"
            }
          ]
        }
      ],
      [
        "学",
        "がく / まなぶ",
        "가쿠 / 마나부",
        "배움 / 배우다",
        {
          "id": "kanji_23398",
          "level": "N5",
          "meta": {
            "readings": [
              "がく",
              "まなぶ"
            ],
            "exampleWord": "学校"
          },
          "examples": [
            {
              "jp": "学校",
              "hira": "がっこう",
              "pronunciation": "각코오",
              "meaning": "학교"
            }
          ]
        }
      ],
      [
        "先",
        "さき / せん",
        "사키 / 센",
        "앞 / 먼저",
        {
          "id": "kanji_20808",
          "level": "N5",
          "meta": {
            "readings": [
              "さき",
              "せん"
            ],
            "exampleWord": "先生"
          },
          "examples": [
            {
              "jp": "先生",
              "hira": "せんせい",
              "pronunciation": "센세이",
              "meaning": "선생님"
            }
          ]
        }
      ],
      [
        "生",
        "せい / しょう / いきる",
        "세이 / 쇼오 / 이키루",
        "삶 / 나다 / 살다",
        {
          "id": "kanji_29983",
          "level": "N5",
          "meta": {
            "readings": [
              "せい",
              "しょう",
              "いきる"
            ],
            "exampleWord": "学生"
          },
          "examples": [
            {
              "jp": "学生",
              "hira": "がくせい",
              "pronunciation": "각세이",
              "meaning": "학생"
            }
          ]
        }
      ],
      [
        "土",
        "ど / つち",
        "도 / 츠치",
        "흙, 토",
        {
          "id": "kanji_土_6",
          "form": "kanji",
          "level": "N5",
          "meta": {
            "readings": "ど / つち",
            "examples": "土曜日、土地"
          },
          "examples": [
            {
              "jp": "土曜日。",
              "hira": "土曜日",
              "pronunciation": "도 / 츠치",
              "meaning": "흙, 토와 관련된 대표 단어입니다."
            }
          ]
        }
      ],
      [
        "子",
        "し / こ",
        "시 / 코",
        "아이, 자식",
        {
          "id": "kanji_子_8",
          "form": "kanji",
          "level": "N5",
          "meta": {
            "readings": "し / こ",
            "examples": "子ども、女子"
          },
          "examples": [
            {
              "jp": "子ども。",
              "hira": "子ども",
              "pronunciation": "시 / 코",
              "meaning": "아이, 자식와 관련된 대표 단어입니다."
            }
          ]
        }
      ],
      [
        "女",
        "じょ / おんな",
        "조 / 온나",
        "여자",
        {
          "id": "kanji_女_9",
          "form": "kanji",
          "level": "N5",
          "meta": {
            "readings": "じょ / おんな",
            "examples": "女性、女の子"
          },
          "examples": [
            {
              "jp": "女性。",
              "hira": "女性",
              "pronunciation": "조 / 온나",
              "meaning": "여자와 관련된 대표 단어입니다."
            }
          ]
        }
      ],
      [
        "男",
        "だん / おとこ",
        "단 / 오토코",
        "남자",
        {
          "id": "kanji_男_10",
          "form": "kanji",
          "level": "N5",
          "meta": {
            "readings": "だん / おとこ",
            "examples": "男性、男の子"
          },
          "examples": [
            {
              "jp": "男性。",
              "hira": "男性",
              "pronunciation": "단 / 오토코",
              "meaning": "남자와 관련된 대표 단어입니다."
            }
          ]
        }
      ],
      [
        "父",
        "ふ / ちち",
        "후 / 치치",
        "아버지",
        {
          "id": "kanji_父_11",
          "form": "kanji",
          "level": "N5",
          "meta": {
            "readings": "ふ / ちち",
            "examples": "父親、父"
          },
          "examples": [
            {
              "jp": "父親。",
              "hira": "父親",
              "pronunciation": "후 / 치치",
              "meaning": "아버지와 관련된 대표 단어입니다."
            }
          ]
        }
      ],
      [
        "母",
        "ぼ / はは",
        "보 / 하하",
        "어머니",
        {
          "id": "kanji_母_12",
          "form": "kanji",
          "level": "N5",
          "meta": {
            "readings": "ぼ / はは",
            "examples": "母親、母"
          },
          "examples": [
            {
              "jp": "母親。",
              "hira": "母親",
              "pronunciation": "보 / 하하",
              "meaning": "어머니와 관련된 대표 단어입니다."
            }
          ]
        }
      ],
      [
        "友",
        "ゆう / とも",
        "유우 / 토모",
        "친구",
        {
          "id": "kanji_友_13",
          "form": "kanji",
          "level": "N5",
          "meta": {
            "readings": "ゆう / とも",
            "examples": "友達、友人"
          },
          "examples": [
            {
              "jp": "友達。",
              "hira": "友達",
              "pronunciation": "유우 / 토모",
              "meaning": "친구와 관련된 대표 단어입니다."
            }
          ]
        }
      ],
      [
        "校",
        "こう",
        "코오",
        "학교",
        {
          "id": "kanji_校_17",
          "form": "kanji",
          "level": "N5",
          "meta": {
            "readings": "こう",
            "examples": "学校、高校"
          },
          "examples": [
            {
              "jp": "学校。",
              "hira": "学校",
              "pronunciation": "코오",
              "meaning": "학교와 관련된 대표 단어입니다."
            }
          ]
        }
      ],
      [
        "時",
        "じ / とき",
        "지 / 토키",
        "때, 시간",
        {
          "id": "kanji_時_18",
          "form": "kanji",
          "level": "N5",
          "meta": {
            "readings": "じ / とき",
            "examples": "時間、何時"
          },
          "examples": [
            {
              "jp": "時間。",
              "hira": "時間",
              "pronunciation": "지 / 토키",
              "meaning": "때, 시간와 관련된 대표 단어입니다."
            }
          ]
        }
      ],
      [
        "分",
        "ぶん / ふん",
        "분 / 훈",
        "나누다, 분",
        {
          "id": "kanji_分_19",
          "form": "kanji",
          "level": "N5",
          "meta": {
            "readings": "ぶん / ふん",
            "examples": "五分、分かる"
          },
          "examples": [
            {
              "jp": "五分。",
              "hira": "五分",
              "pronunciation": "분 / 훈",
              "meaning": "나누다, 분와 관련된 대표 단어입니다."
            }
          ]
        }
      ],
      [
        "今",
        "こん / いま",
        "콘 / 이마",
        "지금",
        {
          "id": "kanji_今_20",
          "form": "kanji",
          "level": "N5",
          "meta": {
            "readings": "こん / いま",
            "examples": "今日、今"
          },
          "examples": [
            {
              "jp": "今日。",
              "hira": "今日",
              "pronunciation": "콘 / 이마",
              "meaning": "지금와 관련된 대표 단어입니다."
            }
          ]
        }
      ],
      [
        "年",
        "ねん / とし",
        "넨 / 토시",
        "해, 년",
        {
          "id": "kanji_年_21",
          "form": "kanji",
          "level": "N5",
          "meta": {
            "readings": "ねん / とし",
            "examples": "今年、来年"
          },
          "examples": [
            {
              "jp": "今年。",
              "hira": "今年",
              "pronunciation": "넨 / 토시",
              "meaning": "해, 년와 관련된 대표 단어입니다."
            }
          ]
        }
      ],
      [
        "週",
        "しゅう",
        "슈우",
        "주",
        {
          "id": "kanji_週_22",
          "form": "kanji",
          "level": "N5",
          "meta": {
            "readings": "しゅう",
            "examples": "毎週、週末"
          },
          "examples": [
            {
              "jp": "毎週。",
              "hira": "毎週",
              "pronunciation": "슈우",
              "meaning": "주와 관련된 대표 단어입니다."
            }
          ]
        }
      ],
      [
        "何",
        "なに / なん",
        "나니 / 난",
        "무엇",
        {
          "id": "kanji_何_23",
          "form": "kanji",
          "level": "N5",
          "meta": {
            "readings": "なに / なん",
            "examples": "何人、何時"
          },
          "examples": [
            {
              "jp": "何人。",
              "hira": "何人",
              "pronunciation": "나니 / 난",
              "meaning": "무엇와 관련된 대표 단어입니다."
            }
          ]
        }
      ],
      [
        "名",
        "めい / な",
        "메이 / 나",
        "이름",
        {
          "id": "kanji_名_24",
          "form": "kanji",
          "level": "N5",
          "meta": {
            "readings": "めい / な",
            "examples": "名前、有名"
          },
          "examples": [
            {
              "jp": "名前。",
              "hira": "名前",
              "pronunciation": "메이 / 나",
              "meaning": "이름와 관련된 대표 단어입니다."
            }
          ]
        }
      ],
      [
        "本",
        "ほん / もと",
        "혼 / 모토",
        "책, 근본",
        {
          "id": "kanji_本_25",
          "form": "kanji",
          "level": "N5",
          "meta": {
            "readings": "ほん / もと",
            "examples": "本、基本"
          },
          "examples": [
            {
              "jp": "本。",
              "hira": "本",
              "pronunciation": "혼 / 모토",
              "meaning": "책, 근본와 관련된 대표 단어입니다."
            }
          ]
        }
      ],
      [
        "語",
        "ご / かた",
        "고 / 카타",
        "말, 언어",
        {
          "id": "kanji_語_26",
          "form": "kanji",
          "level": "N5",
          "meta": {
            "readings": "ご / かた",
            "examples": "日本語、言語"
          },
          "examples": [
            {
              "jp": "日本語。",
              "hira": "日本語",
              "pronunciation": "고 / 카타",
              "meaning": "말, 언어와 관련된 대표 단어입니다."
            }
          ]
        }
      ],
      [
        "話",
        "わ / はな",
        "와 / 하나",
        "말하다, 이야기",
        {
          "id": "kanji_話_27",
          "form": "kanji",
          "level": "N5",
          "meta": {
            "readings": "わ / はな",
            "examples": "話す、電話"
          },
          "examples": [
            {
              "jp": "話す。",
              "hira": "話す",
              "pronunciation": "와 / 하나",
              "meaning": "말하다, 이야기와 관련된 대표 단어입니다."
            }
          ]
        }
      ],
      [
        "読",
        "どく / よ",
        "도쿠 / 요",
        "읽다",
        {
          "id": "kanji_読_28",
          "form": "kanji",
          "level": "N5",
          "meta": {
            "readings": "どく / よ",
            "examples": "読む、読書"
          },
          "examples": [
            {
              "jp": "読む。",
              "hira": "読む",
              "pronunciation": "도쿠 / 요",
              "meaning": "읽다와 관련된 대표 단어입니다."
            }
          ]
        }
      ],
      [
        "書",
        "しょ / か",
        "쇼 / 카",
        "쓰다",
        {
          "id": "kanji_書_29",
          "form": "kanji",
          "level": "N5",
          "meta": {
            "readings": "しょ / か",
            "examples": "書く、図書館"
          },
          "examples": [
            {
              "jp": "書く。",
              "hira": "書く",
              "pronunciation": "쇼 / 카",
              "meaning": "쓰다와 관련된 대표 단어입니다."
            }
          ]
        }
      ],
      [
        "見",
        "けん / み",
        "켄 / 미",
        "보다",
        {
          "id": "kanji_見_30",
          "form": "kanji",
          "level": "N5",
          "meta": {
            "readings": "けん / み",
            "examples": "見る、意見"
          },
          "examples": [
            {
              "jp": "見る。",
              "hira": "見る",
              "pronunciation": "켄 / 미",
              "meaning": "보다와 관련된 대표 단어입니다."
            }
          ]
        }
      ],
      [
        "聞",
        "ぶん / き",
        "분 / 키",
        "듣다, 묻다",
        {
          "id": "kanji_聞_31",
          "form": "kanji",
          "level": "N5",
          "meta": {
            "readings": "ぶん / き",
            "examples": "聞く、新聞"
          },
          "examples": [
            {
              "jp": "聞く。",
              "hira": "聞く",
              "pronunciation": "분 / 키",
              "meaning": "듣다, 묻다와 관련된 대표 단어입니다."
            }
          ]
        }
      ],
      [
        "食",
        "しょく / た",
        "쇼쿠 / 타",
        "먹다, 음식",
        {
          "id": "kanji_食_32",
          "form": "kanji",
          "level": "N5",
          "meta": {
            "readings": "しょく / た",
            "examples": "食べる、食事"
          },
          "examples": [
            {
              "jp": "食べる。",
              "hira": "食べる",
              "pronunciation": "쇼쿠 / 타",
              "meaning": "먹다, 음식와 관련된 대표 단어입니다."
            }
          ]
        }
      ],
      [
        "飲",
        "いん / の",
        "인 / 노",
        "마시다",
        {
          "id": "kanji_飲_33",
          "form": "kanji",
          "level": "N5",
          "meta": {
            "readings": "いん / の",
            "examples": "飲む、飲料"
          },
          "examples": [
            {
              "jp": "飲む。",
              "hira": "飲む",
              "pronunciation": "인 / 노",
              "meaning": "마시다와 관련된 대표 단어입니다."
            }
          ]
        }
      ],
      [
        "買",
        "ばい / か",
        "바이 / 카",
        "사다",
        {
          "id": "kanji_買_34",
          "form": "kanji",
          "level": "N5",
          "meta": {
            "readings": "ばい / か",
            "examples": "買う、買い物"
          },
          "examples": [
            {
              "jp": "買う。",
              "hira": "買う",
              "pronunciation": "바이 / 카",
              "meaning": "사다와 관련된 대표 단어입니다."
            }
          ]
        }
      ],
      [
        "売",
        "ばい / う",
        "바이 / 우",
        "팔다",
        {
          "id": "kanji_売_35",
          "form": "kanji",
          "level": "N5",
          "meta": {
            "readings": "ばい / う",
            "examples": "売る、販売"
          },
          "examples": [
            {
              "jp": "売る。",
              "hira": "売る",
              "pronunciation": "바이 / 우",
              "meaning": "팔다와 관련된 대표 단어입니다."
            }
          ]
        }
      ],
      [
        "行",
        "こう / い",
        "코오 / 이",
        "가다, 행하다",
        {
          "id": "kanji_行_36",
          "form": "kanji",
          "level": "N5",
          "meta": {
            "readings": "こう / い",
            "examples": "行く、銀行"
          },
          "examples": [
            {
              "jp": "行く。",
              "hira": "行く",
              "pronunciation": "코오 / 이",
              "meaning": "가다, 행하다와 관련된 대표 단어입니다."
            }
          ]
        }
      ],
      [
        "来",
        "らい / く",
        "라이 / 쿠",
        "오다",
        {
          "id": "kanji_来_37",
          "form": "kanji",
          "level": "N5",
          "meta": {
            "readings": "らい / く",
            "examples": "来る、来年"
          },
          "examples": [
            {
              "jp": "来る。",
              "hira": "来る",
              "pronunciation": "라이 / 쿠",
              "meaning": "오다와 관련된 대표 단어입니다."
            }
          ]
        }
      ],
      [
        "帰",
        "き / かえ",
        "키 / 카에",
        "돌아가다",
        {
          "id": "kanji_帰_38",
          "form": "kanji",
          "level": "N5",
          "meta": {
            "readings": "き / かえ",
            "examples": "帰る、帰宅"
          },
          "examples": [
            {
              "jp": "帰る。",
              "hira": "帰る",
              "pronunciation": "키 / 카에",
              "meaning": "돌아가다와 관련된 대표 단어입니다."
            }
          ]
        }
      ],
      [
        "入",
        "にゅう / はい",
        "뉴우 / 하이",
        "들어가다",
        {
          "id": "kanji_入_39",
          "form": "kanji",
          "level": "N5",
          "meta": {
            "readings": "にゅう / はい",
            "examples": "入る、入口"
          },
          "examples": [
            {
              "jp": "入る。",
              "hira": "入る",
              "pronunciation": "뉴우 / 하이",
              "meaning": "들어가다와 관련된 대표 단어입니다."
            }
          ]
        }
      ],
      [
        "出",
        "しゅつ / で",
        "슈츠 / 데",
        "나가다, 나오다",
        {
          "id": "kanji_出_40",
          "form": "kanji",
          "level": "N5",
          "meta": {
            "readings": "しゅつ / で",
            "examples": "出る、出口"
          },
          "examples": [
            {
              "jp": "出る。",
              "hira": "出る",
              "pronunciation": "슈츠 / 데",
              "meaning": "나가다, 나오다와 관련된 대표 단어입니다."
            }
          ]
        }
      ],
      [
        "上",
        "じょう / うえ",
        "조오 / 우에",
        "위, 오르다",
        {
          "id": "kanji_上_41",
          "form": "kanji",
          "level": "N5",
          "meta": {
            "readings": "じょう / うえ",
            "examples": "上、上手"
          },
          "examples": [
            {
              "jp": "上。",
              "hira": "上",
              "pronunciation": "조오 / 우에",
              "meaning": "위, 오르다와 관련된 대표 단어입니다."
            }
          ]
        }
      ],
      [
        "下",
        "か / した",
        "카 / 시타",
        "아래, 내리다",
        {
          "id": "kanji_下_42",
          "form": "kanji",
          "level": "N5",
          "meta": {
            "readings": "か / した",
            "examples": "下、地下"
          },
          "examples": [
            {
              "jp": "下。",
              "hira": "下",
              "pronunciation": "카 / 시타",
              "meaning": "아래, 내리다와 관련된 대표 단어입니다."
            }
          ]
        }
      ],
      [
        "中",
        "ちゅう / なか",
        "추우 / 나카",
        "안, 가운데",
        {
          "id": "kanji_中_43",
          "form": "kanji",
          "level": "N5",
          "meta": {
            "readings": "ちゅう / なか",
            "examples": "中、中心"
          },
          "examples": [
            {
              "jp": "中。",
              "hira": "中",
              "pronunciation": "추우 / 나카",
              "meaning": "안, 가운데와 관련된 대표 단어입니다."
            }
          ]
        }
      ],
      [
        "外",
        "がい / そと",
        "가이 / 소토",
        "밖, 외부",
        {
          "id": "kanji_外_44",
          "form": "kanji",
          "level": "N5",
          "meta": {
            "readings": "がい / そと",
            "examples": "外国、外"
          },
          "examples": [
            {
              "jp": "外国。",
              "hira": "外国",
              "pronunciation": "가이 / 소토",
              "meaning": "밖, 외부와 관련된 대표 단어입니다."
            }
          ]
        }
      ],
      [
        "東",
        "とう / ひがし",
        "토오 / 히가시",
        "동쪽",
        {
          "id": "kanji_東_45",
          "form": "kanji",
          "level": "N5",
          "meta": {
            "readings": "とう / ひがし",
            "examples": "東京、東"
          },
          "examples": [
            {
              "jp": "東京。",
              "hira": "東京",
              "pronunciation": "토오 / 히가시",
              "meaning": "동쪽와 관련된 대표 단어입니다."
            }
          ]
        }
      ],
      [
        "西",
        "せい / にし",
        "세이 / 니시",
        "서쪽",
        {
          "id": "kanji_西_46",
          "form": "kanji",
          "level": "N5",
          "meta": {
            "readings": "せい / にし",
            "examples": "西口、西"
          },
          "examples": [
            {
              "jp": "西口。",
              "hira": "西口",
              "pronunciation": "세이 / 니시",
              "meaning": "서쪽와 관련된 대표 단어입니다."
            }
          ]
        }
      ],
      [
        "南",
        "なん / みなみ",
        "난 / 미나미",
        "남쪽",
        {
          "id": "kanji_南_47",
          "form": "kanji",
          "level": "N5",
          "meta": {
            "readings": "なん / みなみ",
            "examples": "南口、南"
          },
          "examples": [
            {
              "jp": "南口。",
              "hira": "南口",
              "pronunciation": "난 / 미나미",
              "meaning": "남쪽와 관련된 대표 단어입니다."
            }
          ]
        }
      ],
      [
        "北",
        "ほく / きた",
        "호쿠 / 키타",
        "북쪽",
        {
          "id": "kanji_北_48",
          "form": "kanji",
          "level": "N5",
          "meta": {
            "readings": "ほく / きた",
            "examples": "北口、北"
          },
          "examples": [
            {
              "jp": "北口。",
              "hira": "北口",
              "pronunciation": "호쿠 / 키타",
              "meaning": "북쪽와 관련된 대표 단어입니다."
            }
          ]
        }
      ],
      [
        "電",
        "でん",
        "덴",
        "전기",
        {
          "id": "kanji_電_49",
          "form": "kanji",
          "level": "N5",
          "meta": {
            "readings": "でん",
            "examples": "電車、電話"
          },
          "examples": [
            {
              "jp": "電車。",
              "hira": "電車",
              "pronunciation": "덴",
              "meaning": "전기와 관련된 대표 단어입니다."
            }
          ]
        }
      ]
    ],
    "N4": [
      [
        "会",
        "かい / あう",
        "카이 / 아우",
        "만날 회",
        {
          "id": "kanji_n4_0",
          "level": "N4",
          "meta": {
            "readings": [
              "かい",
              "あう"
            ],
            "exampleWord": "会う"
          },
          "examples": [
            {
              "jp": "会う",
              "hira": "あう",
              "pronunciation": "아우",
              "meaning": "만나다"
            }
          ]
        }
      ],
      [
        "社",
        "しゃ / やしろ",
        "샤 / 야시로",
        "회사 사",
        {
          "id": "kanji_n4_1",
          "level": "N4",
          "meta": {
            "readings": [
              "しゃ",
              "やしろ"
            ],
            "exampleWord": "会社"
          },
          "examples": [
            {
              "jp": "会社",
              "hira": "かいしゃ",
              "pronunciation": "카이샤",
              "meaning": "회사"
            }
          ]
        }
      ],
      [
        "員",
        "いん",
        "인",
        "인원 원",
        {
          "id": "kanji_n4_2",
          "level": "N4",
          "meta": {
            "readings": [
              "いん"
            ],
            "exampleWord": "会社員"
          },
          "examples": [
            {
              "jp": "会社員",
              "hira": "かいしゃいん",
              "pronunciation": "카이샤인",
              "meaning": "회사원"
            }
          ]
        }
      ],
      [
        "働",
        "どう / はたらく",
        "도오 / 하타라쿠",
        "일하다 / 일할 (일본 고유 한자)",
        {
          "id": "kanji_n4_3",
          "level": "N4",
          "meta": {
            "readings": [
              "どう",
              "はたらく"
            ],
            "exampleWord": "働く"
          },
          "examples": [
            {
              "jp": "働く",
              "hira": "はたらく",
              "pronunciation": "하타라쿠",
              "meaning": "일하다"
            }
          ]
        }
      ],
      [
        "仕",
        "し",
        "시",
        "벼슬할 사",
        {
          "id": "kanji_n4_4",
          "level": "N4",
          "meta": {
            "readings": [
              "し"
            ],
            "exampleWord": "仕事"
          },
          "examples": [
            {
              "jp": "仕事",
              "hira": "しごと",
              "pronunciation": "시고토",
              "meaning": "일 / 직업"
            }
          ]
        }
      ],
      [
        "事",
        "じ / こと",
        "지 / 코토",
        "일 사 / 일·일어난 일",
        {
          "id": "kanji_n4_5",
          "level": "N4",
          "meta": {
            "readings": [
              "じ",
              "こと"
            ],
            "exampleWord": "大事"
          },
          "examples": [
            {
              "jp": "大事",
              "hira": "だいじ",
              "pronunciation": "다이지",
              "meaning": "중요한 일 / 중요함"
            }
          ]
        }
      ],
      [
        "地",
        "ち / じ",
        "치 / 지",
        "땅 지",
        {
          "id": "kanji_n4_6",
          "level": "N4",
          "meta": {
            "readings": [
              "ち",
              "じ"
            ],
            "exampleWord": "地下"
          },
          "examples": [
            {
              "jp": "地下",
              "hira": "ちか",
              "pronunciation": "치카",
              "meaning": "지하"
            }
          ]
        }
      ],
      [
        "鉄",
        "てつ",
        "테츠",
        "쇠 철",
        {
          "id": "kanji_n4_7",
          "level": "N4",
          "meta": {
            "readings": [
              "てつ"
            ],
            "exampleWord": "電鉄"
          },
          "examples": [
            {
              "jp": "電鉄",
              "hira": "でんてつ",
              "pronunciation": "덴테츠",
              "meaning": "전철"
            }
          ]
        }
      ],
      [
        "車",
        "しゃ / くるま",
        "샤 / 쿠루마",
        "수레 차",
        {
          "id": "kanji_n4_9",
          "level": "N4",
          "meta": {
            "readings": [
              "しゃ",
              "くるま"
            ],
            "exampleWord": "電車"
          },
          "examples": [
            {
              "jp": "電車",
              "hira": "でんしゃ",
              "pronunciation": "덴샤",
              "meaning": "전철"
            }
          ]
        }
      ],
      [
        "旅",
        "りょ / たび",
        "료 / 타비",
        "나그네 려",
        {
          "id": "kanji_n4_10",
          "level": "N4",
          "meta": {
            "readings": [
              "りょ",
              "たび"
            ],
            "exampleWord": "旅行"
          },
          "examples": [
            {
              "jp": "旅行",
              "hira": "りょこう",
              "pronunciation": "료코오",
              "meaning": "여행"
            }
          ]
        }
      ],
      [
        "館",
        "かん",
        "칸",
        "집 관",
        {
          "id": "kanji_n4_11",
          "level": "N4",
          "meta": {
            "readings": [
              "かん"
            ],
            "exampleWord": "図書館"
          },
          "examples": [
            {
              "jp": "図書館",
              "hira": "としょかん",
              "pronunciation": "토쇼칸",
              "meaning": "도서관"
            }
          ]
        }
      ],
      [
        "図",
        "ず / と",
        "즈 / 토",
        "그림 도",
        {
          "id": "kanji_n4_12",
          "level": "N4",
          "meta": {
            "readings": [
              "ず",
              "と"
            ],
            "exampleWord": "図書館"
          },
          "examples": [
            {
              "jp": "図書館",
              "hira": "としょかん",
              "pronunciation": "토쇼칸",
              "meaning": "도서관"
            }
          ]
        }
      ],
      [
        "院",
        "いん",
        "인",
        "집 원",
        {
          "id": "kanji_n4_14",
          "level": "N4",
          "meta": {
            "readings": [
              "いん"
            ],
            "exampleWord": "病院"
          },
          "examples": [
            {
              "jp": "病院",
              "hira": "びょういん",
              "pronunciation": "뵤오인",
              "meaning": "병원"
            }
          ]
        }
      ],
      [
        "病",
        "びょう / やむ",
        "뵤오 / 야무",
        "병 병",
        {
          "id": "kanji_n4_15",
          "level": "N4",
          "meta": {
            "readings": [
              "びょう",
              "やむ"
            ],
            "exampleWord": "病院"
          },
          "examples": [
            {
              "jp": "病院",
              "hira": "びょういん",
              "pronunciation": "뵤오인",
              "meaning": "병원"
            }
          ]
        }
      ],
      [
        "薬",
        "やく / くすり",
        "야쿠 / 쿠스리",
        "약 약",
        {
          "id": "kanji_n4_16",
          "level": "N4",
          "meta": {
            "readings": [
              "やく",
              "くすり"
            ],
            "exampleWord": "薬"
          },
          "examples": [
            {
              "jp": "薬",
              "hira": "くすり",
              "pronunciation": "쿠스리",
              "meaning": "약"
            }
          ]
        }
      ],
      [
        "運",
        "うん / はこぶ",
        "운 / 하코부",
        "옮길 운",
        {
          "id": "kanji_n4_17",
          "level": "N4",
          "meta": {
            "readings": [
              "うん",
              "はこぶ"
            ],
            "exampleWord": "運ぶ"
          },
          "examples": [
            {
              "jp": "運ぶ",
              "hira": "はこぶ",
              "pronunciation": "하코부",
              "meaning": "나르다"
            }
          ]
        }
      ],
      [
        "送",
        "そう / おくる",
        "소오 / 오쿠루",
        "보낼 송",
        {
          "id": "kanji_n4_18",
          "level": "N4",
          "meta": {
            "readings": [
              "そう",
              "おくる"
            ],
            "exampleWord": "送る"
          },
          "examples": [
            {
              "jp": "送る",
              "hira": "おくる",
              "pronunciation": "오쿠루",
              "meaning": "보내다"
            }
          ]
        }
      ],
      [
        "返",
        "へん / かえす",
        "헨 / 카에스",
        "돌이킬 반",
        {
          "id": "kanji_n4_19",
          "level": "N4",
          "meta": {
            "readings": [
              "へん",
              "かえす"
            ],
            "exampleWord": "返す"
          },
          "examples": [
            {
              "jp": "返す",
              "hira": "かえす",
              "pronunciation": "카에스",
              "meaning": "돌려주다"
            }
          ]
        }
      ],
      [
        "借",
        "しゃく / かりる",
        "샤쿠 / 카리루",
        "빌릴 차",
        {
          "id": "kanji_n4_20",
          "level": "N4",
          "meta": {
            "readings": [
              "しゃく",
              "かりる"
            ],
            "exampleWord": "借りる"
          },
          "examples": [
            {
              "jp": "借りる",
              "hira": "かりる",
              "pronunciation": "카리루",
              "meaning": "빌리다"
            }
          ]
        }
      ],
      [
        "貸",
        "たい / かす",
        "타이 / 카스",
        "빌려줄 대",
        {
          "id": "kanji_n4_21",
          "level": "N4",
          "meta": {
            "readings": [
              "たい",
              "かす"
            ],
            "exampleWord": "貸す"
          },
          "examples": [
            {
              "jp": "貸す",
              "hira": "かす",
              "pronunciation": "카스",
              "meaning": "빌려주다"
            }
          ]
        }
      ],
      [
        "選",
        "せん / えらぶ",
        "센 / 에라부",
        "가릴 선",
        {
          "id": "kanji_n4_22",
          "level": "N4",
          "meta": {
            "readings": [
              "せん",
              "えらぶ"
            ],
            "exampleWord": "選ぶ"
          },
          "examples": [
            {
              "jp": "選ぶ",
              "hira": "えらぶ",
              "pronunciation": "에라부",
              "meaning": "고르다"
            }
          ]
        }
      ],
      [
        "決",
        "けつ / きめる",
        "케츠 / 키메루",
        "결정할 결",
        {
          "id": "kanji_n4_23",
          "level": "N4",
          "meta": {
            "readings": [
              "けつ",
              "きめる"
            ],
            "exampleWord": "決める"
          },
          "examples": [
            {
              "jp": "決める",
              "hira": "きめる",
              "pronunciation": "키메루",
              "meaning": "정하다"
            }
          ]
        }
      ],
      [
        "定",
        "てい / さだめる",
        "테이 / 사다메루",
        "정할 정",
        {
          "id": "kanji_n4_24",
          "level": "N4",
          "meta": {
            "readings": [
              "てい",
              "さだめる"
            ],
            "exampleWord": "予定"
          },
          "examples": [
            {
              "jp": "予定",
              "hira": "よてい",
              "pronunciation": "요테이",
              "meaning": "예정"
            }
          ]
        }
      ],
      [
        "予",
        "よ",
        "요",
        "미리 예",
        {
          "id": "kanji_n4_25",
          "level": "N4",
          "meta": {
            "readings": [
              "よ"
            ],
            "exampleWord": "予約"
          },
          "examples": [
            {
              "jp": "予約",
              "hira": "よやく",
              "pronunciation": "요야쿠",
              "meaning": "예약"
            }
          ]
        }
      ],
      [
        "約",
        "やく",
        "야쿠",
        "맺을 약",
        {
          "id": "kanji_n4_26",
          "level": "N4",
          "meta": {
            "readings": [
              "やく"
            ],
            "exampleWord": "予約"
          },
          "examples": [
            {
              "jp": "予約",
              "hira": "よやく",
              "pronunciation": "요야쿠",
              "meaning": "예약"
            }
          ]
        }
      ],
      [
        "連",
        "れん",
        "렌",
        "잇닿을 련",
        {
          "id": "kanji_n4_27",
          "level": "N4",
          "meta": {
            "readings": [
              "れん"
            ],
            "exampleWord": "連絡"
          },
          "examples": [
            {
              "jp": "連絡",
              "hira": "れんらく",
              "pronunciation": "렌라쿠",
              "meaning": "연락"
            }
          ]
        }
      ],
      [
        "絡",
        "らく",
        "라쿠",
        "얽힐 락",
        {
          "id": "kanji_n4_28",
          "level": "N4",
          "meta": {
            "readings": [
              "らく"
            ],
            "exampleWord": "連絡"
          },
          "examples": [
            {
              "jp": "連絡",
              "hira": "れんらく",
              "pronunciation": "렌라쿠",
              "meaning": "연락"
            }
          ]
        }
      ],
      [
        "説",
        "せつ",
        "세츠",
        "말씀 설",
        {
          "id": "kanji_n4_29",
          "level": "N4",
          "meta": {
            "readings": [
              "せつ"
            ],
            "exampleWord": "説明"
          },
          "examples": [
            {
              "jp": "説明",
              "hira": "せつめい",
              "pronunciation": "세츠메이",
              "meaning": "설명"
            }
          ]
        }
      ],
      [
        "明",
        "めい / あかるい",
        "메이 / 아카루이",
        "밝을 명",
        {
          "id": "kanji_n4_30",
          "level": "N4",
          "meta": {
            "readings": [
              "めい",
              "あかるい"
            ],
            "exampleWord": "説明"
          },
          "examples": [
            {
              "jp": "説明",
              "hira": "せつめい",
              "pronunciation": "세츠메이",
              "meaning": "설명"
            }
          ]
        }
      ],
      [
        "準",
        "じゅん",
        "준",
        "준할 준",
        {
          "id": "kanji_n4_31",
          "level": "N4",
          "meta": {
            "readings": [
              "じゅん"
            ],
            "exampleWord": "準備"
          },
          "examples": [
            {
              "jp": "準備",
              "hira": "じゅんび",
              "pronunciation": "준비",
              "meaning": "준비"
            }
          ]
        }
      ],
      [
        "備",
        "び / そなえる",
        "비 / 소나에루",
        "갖출 비",
        {
          "id": "kanji_n4_32",
          "level": "N4",
          "meta": {
            "readings": [
              "び",
              "そなえる"
            ],
            "exampleWord": "準備"
          },
          "examples": [
            {
              "jp": "準備",
              "hira": "じゅんび",
              "pronunciation": "준비",
              "meaning": "준비"
            }
          ]
        }
      ],
      [
        "理",
        "り",
        "리",
        "다스릴 리",
        {
          "id": "kanji_n4_33",
          "level": "N4",
          "meta": {
            "readings": [
              "り"
            ],
            "exampleWord": "料理"
          },
          "examples": [
            {
              "jp": "料理",
              "hira": "りょうり",
              "pronunciation": "료오리",
              "meaning": "요리"
            }
          ]
        }
      ],
      [
        "洗",
        "せん / あらう",
        "센 / 아라우",
        "씻을 세",
        {
          "id": "kanji_n4_34",
          "level": "N4",
          "meta": {
            "readings": [
              "せん",
              "あらう"
            ],
            "exampleWord": "洗濯"
          },
          "examples": [
            {
              "jp": "洗濯",
              "hira": "せんたく",
              "pronunciation": "센타쿠",
              "meaning": "세탁"
            }
          ]
        }
      ],
      [
        "濯",
        "たく",
        "타쿠",
        "빨 탁",
        {
          "id": "kanji_n4_35",
          "level": "N4",
          "meta": {
            "readings": [
              "たく"
            ],
            "exampleWord": "洗濯"
          },
          "examples": [
            {
              "jp": "洗濯",
              "hira": "せんたく",
              "pronunciation": "센타쿠",
              "meaning": "세탁"
            }
          ]
        }
      ],
      [
        "始",
        "し / はじめる",
        "시 / 하지메루",
        "비로소 시",
        {
          "id": "kanji_n4_36",
          "level": "N4",
          "meta": {
            "readings": [
              "し",
              "はじめる"
            ],
            "exampleWord": "始める"
          },
          "examples": [
            {
              "jp": "始める",
              "hira": "はじめる",
              "pronunciation": "하지메루",
              "meaning": "시작하다"
            }
          ]
        }
      ],
      [
        "終",
        "しゅう / おわる",
        "슈우 / 오와루",
        "마칠 종",
        {
          "id": "kanji_n4_37",
          "level": "N4",
          "meta": {
            "readings": [
              "しゅう",
              "おわる"
            ],
            "exampleWord": "終わる"
          },
          "examples": [
            {
              "jp": "終わる",
              "hira": "おわる",
              "pronunciation": "오와루",
              "meaning": "끝나다"
            }
          ]
        }
      ],
      [
        "続",
        "ぞく / つづく",
        "조쿠 / 츠즈쿠",
        "이을 속",
        {
          "id": "kanji_n4_38",
          "level": "N4",
          "meta": {
            "readings": [
              "ぞく",
              "つづく"
            ],
            "exampleWord": "続ける"
          },
          "examples": [
            {
              "jp": "続ける",
              "hira": "つづける",
              "pronunciation": "츠즈케루",
              "meaning": "계속하다"
            }
          ]
        }
      ],
      [
        "変",
        "へん / かわる",
        "헨 / 카와루",
        "변할 변",
        {
          "id": "kanji_n4_39",
          "level": "N4",
          "meta": {
            "readings": [
              "へん",
              "かわる"
            ],
            "exampleWord": "変更"
          },
          "examples": [
            {
              "jp": "変更",
              "hira": "へんこう",
              "pronunciation": "헨코오",
              "meaning": "변경"
            }
          ]
        }
      ],
      [
        "更",
        "こう / さら",
        "코오 / 사라",
        "고칠 경 / 바꾸다",
        {
          "id": "kanji_n4_40",
          "level": "N4",
          "meta": {
            "readings": [
              "こう",
              "さら"
            ],
            "exampleWord": "変更"
          },
          "examples": [
            {
              "jp": "変更",
              "hira": "へんこう",
              "pronunciation": "헨코오",
              "meaning": "변경"
            }
          ]
        }
      ],
      [
        "重",
        "じゅう / おもい",
        "주우 / 오모이",
        "무거울 중",
        {
          "id": "kanji_n4_41",
          "level": "N4",
          "meta": {
            "readings": [
              "じゅう",
              "おもい"
            ],
            "exampleWord": "重要"
          },
          "examples": [
            {
              "jp": "重要",
              "hira": "じゅうよう",
              "pronunciation": "주우요오",
              "meaning": "중요"
            }
          ]
        }
      ],
      [
        "要",
        "よう / いる",
        "요오 / 이루",
        "중요할 요 / 필요하다",
        {
          "id": "kanji_n4_42",
          "level": "N4",
          "meta": {
            "readings": [
              "よう",
              "いる"
            ],
            "exampleWord": "必要"
          },
          "examples": [
            {
              "jp": "必要",
              "hira": "ひつよう",
              "pronunciation": "히츠요오",
              "meaning": "필요"
            }
          ]
        }
      ],
      [
        "必",
        "ひつ",
        "히츠",
        "반드시 필",
        {
          "id": "kanji_n4_43",
          "level": "N4",
          "meta": {
            "readings": [
              "ひつ"
            ],
            "exampleWord": "必要"
          },
          "examples": [
            {
              "jp": "必要",
              "hira": "ひつよう",
              "pronunciation": "히츠요오",
              "meaning": "필요"
            }
          ]
        }
      ],
      [
        "全",
        "ぜん / まったく",
        "젠 / 맛타쿠",
        "온전할 전",
        {
          "id": "kanji_n4_44",
          "level": "N4",
          "meta": {
            "readings": [
              "ぜん",
              "まったく"
            ],
            "exampleWord": "安全"
          },
          "examples": [
            {
              "jp": "安全",
              "hira": "あんぜん",
              "pronunciation": "안젠",
              "meaning": "안전"
            }
          ]
        }
      ],
      [
        "安",
        "あん / やすい",
        "안 / 야스이",
        "편안할 안",
        {
          "id": "kanji_n4_45",
          "level": "N4",
          "meta": {
            "readings": [
              "あん",
              "やすい"
            ],
            "exampleWord": "安全"
          },
          "examples": [
            {
              "jp": "安全",
              "hira": "あんぜん",
              "pronunciation": "안젠",
              "meaning": "안전"
            }
          ]
        }
      ],
      [
        "危",
        "き / あぶない",
        "키 / 아부나이",
        "위태할 위",
        {
          "id": "kanji_n4_46",
          "level": "N4",
          "meta": {
            "readings": [
              "き",
              "あぶない"
            ],
            "exampleWord": "危険"
          },
          "examples": [
            {
              "jp": "危険",
              "hira": "きけん",
              "pronunciation": "키켄",
              "meaning": "위험"
            }
          ]
        }
      ],
      [
        "険",
        "けん",
        "켄",
        "험할 험",
        {
          "id": "kanji_n4_47",
          "level": "N4",
          "meta": {
            "readings": [
              "けん"
            ],
            "exampleWord": "危険"
          },
          "examples": [
            {
              "jp": "危険",
              "hira": "きけん",
              "pronunciation": "키켄",
              "meaning": "위험"
            }
          ]
        }
      ],
      [
        "近",
        "きん / ちかい",
        "킨 / 치카이",
        "가까울 근",
        {
          "id": "kanji_n4_48",
          "level": "N4",
          "meta": {
            "readings": [
              "きん",
              "ちかい"
            ],
            "exampleWord": "近い"
          },
          "examples": [
            {
              "jp": "近い",
              "hira": "ちかい",
              "pronunciation": "치카이",
              "meaning": "가깝다"
            }
          ]
        }
      ],
      [
        "遠",
        "えん / とおい",
        "엔 / 토오이",
        "멀 원",
        {
          "id": "kanji_n4_49",
          "level": "N4",
          "meta": {
            "readings": [
              "えん",
              "とおい"
            ],
            "exampleWord": "遠い"
          },
          "examples": [
            {
              "jp": "遠い",
              "hira": "とおい",
              "pronunciation": "토오이",
              "meaning": "멀다"
            }
          ]
        }
      ],
      [
        "軽",
        "けい / かるい",
        "케이 / 카루이",
        "가벼울 경",
        {
          "id": "kanji_n4_51",
          "level": "N4",
          "meta": {
            "readings": [
              "けい",
              "かるい"
            ],
            "exampleWord": "軽い"
          },
          "examples": [
            {
              "jp": "軽い",
              "hira": "かるい",
              "pronunciation": "카루이",
              "meaning": "가볍다"
            }
          ]
        }
      ],
      [
        "強",
        "きょう / つよい",
        "쿄오 / 츠요이",
        "강할 강",
        {
          "id": "kanji_n4_52",
          "level": "N4",
          "meta": {
            "readings": [
              "きょう",
              "つよい"
            ],
            "exampleWord": "強い"
          },
          "examples": [
            {
              "jp": "強い",
              "hira": "つよい",
              "pronunciation": "츠요이",
              "meaning": "강하다"
            }
          ]
        }
      ],
      [
        "弱",
        "じゃく / よわい",
        "자쿠 / 요와이",
        "약할 약",
        {
          "id": "kanji_n4_53",
          "level": "N4",
          "meta": {
            "readings": [
              "じゃく",
              "よわい"
            ],
            "exampleWord": "弱い"
          },
          "examples": [
            {
              "jp": "弱い",
              "hira": "よわい",
              "pronunciation": "요와이",
              "meaning": "약하다"
            }
          ]
        }
      ],
      [
        "早",
        "そう / はやい",
        "소오 / 하야이",
        "이를 조",
        {
          "id": "kanji_n4_54",
          "level": "N4",
          "meta": {
            "readings": [
              "そう",
              "はやい"
            ],
            "exampleWord": "早い"
          },
          "examples": [
            {
              "jp": "早い",
              "hira": "はやい",
              "pronunciation": "하야이",
              "meaning": "빠르다 / 이르다"
            }
          ]
        }
      ],
      [
        "遅",
        "ち / おそい",
        "치 / 오소이",
        "더딜 지",
        {
          "id": "kanji_n4_55",
          "level": "N4",
          "meta": {
            "readings": [
              "ち",
              "おそい"
            ],
            "exampleWord": "遅い"
          },
          "examples": [
            {
              "jp": "遅い",
              "hira": "おそい",
              "pronunciation": "오소이",
              "meaning": "느리다 / 늦다"
            }
          ]
        }
      ],
      [
        "広",
        "こう / ひろい",
        "코오 / 히로이",
        "넓을 광",
        {
          "id": "kanji_n4_56",
          "level": "N4",
          "meta": {
            "readings": [
              "こう",
              "ひろい"
            ],
            "exampleWord": "広い"
          },
          "examples": [
            {
              "jp": "広い",
              "hira": "ひろい",
              "pronunciation": "히로이",
              "meaning": "넓다"
            }
          ]
        }
      ],
      [
        "狭",
        "きょう / せまい",
        "쿄오 / 세마이",
        "좁을 협",
        {
          "id": "kanji_n4_57",
          "level": "N4",
          "meta": {
            "readings": [
              "きょう",
              "せまい"
            ],
            "exampleWord": "狭い"
          },
          "examples": [
            {
              "jp": "狭い",
              "hira": "せまい",
              "pronunciation": "세마이",
              "meaning": "좁다"
            }
          ]
        }
      ],
      [
        "暗",
        "あん / くらい",
        "안 / 쿠라이",
        "어두울 암",
        {
          "id": "kanji_n4_59",
          "level": "N4",
          "meta": {
            "readings": [
              "あん",
              "くらい"
            ],
            "exampleWord": "暗い"
          },
          "examples": [
            {
              "jp": "暗い",
              "hira": "くらい",
              "pronunciation": "쿠라이",
              "meaning": "어둡다"
            }
          ]
        }
      ],
      [
        "温",
        "おん / あたたかい",
        "온 / 아타타카이",
        "따뜻할 온",
        {
          "id": "kanji_n4_62",
          "level": "N4",
          "meta": {
            "readings": [
              "おん",
              "あたたかい"
            ],
            "exampleWord": "温度"
          },
          "examples": [
            {
              "jp": "温度",
              "hira": "おんど",
              "pronunciation": "온도",
              "meaning": "온도"
            }
          ]
        }
      ],
      [
        "度",
        "ど / たび",
        "도 / 타비",
        "법도 도",
        {
          "id": "kanji_n4_63",
          "level": "N4",
          "meta": {
            "readings": [
              "ど",
              "たび"
            ],
            "exampleWord": "温度"
          },
          "examples": [
            {
              "jp": "温度",
              "hira": "おんど",
              "pronunciation": "온도",
              "meaning": "온도"
            }
          ]
        }
      ],
      [
        "服",
        "ふく",
        "후쿠",
        "옷 복",
        {
          "id": "kanji_n4_64",
          "level": "N4",
          "meta": {
            "readings": [
              "ふく"
            ],
            "exampleWord": "服"
          },
          "examples": [
            {
              "jp": "服",
              "hira": "ふく",
              "pronunciation": "후쿠",
              "meaning": "옷"
            }
          ]
        }
      ],
      [
        "色",
        "しょく / いろ",
        "쇼쿠 / 이로",
        "빛 색",
        {
          "id": "kanji_n4_65",
          "level": "N4",
          "meta": {
            "readings": [
              "しょく",
              "いろ"
            ],
            "exampleWord": "色"
          },
          "examples": [
            {
              "jp": "色",
              "hira": "いろ",
              "pronunciation": "이로",
              "meaning": "색"
            }
          ]
        }
      ],
      [
        "黒",
        "こく / くろい",
        "코쿠 / 쿠로이",
        "검을 흑",
        {
          "id": "kanji_n4_66",
          "level": "N4",
          "meta": {
            "readings": [
              "こく",
              "くろい"
            ],
            "exampleWord": "黒い"
          },
          "examples": [
            {
              "jp": "黒い",
              "hira": "くろい",
              "pronunciation": "쿠로이",
              "meaning": "검다"
            }
          ]
        }
      ],
      [
        "白",
        "はく / しろい",
        "하쿠 / 시로이",
        "흰 백",
        {
          "id": "kanji_n4_67",
          "level": "N4",
          "meta": {
            "readings": [
              "はく",
              "しろい"
            ],
            "exampleWord": "白い"
          },
          "examples": [
            {
              "jp": "白い",
              "hira": "しろい",
              "pronunciation": "시로이",
              "meaning": "희다"
            }
          ]
        }
      ],
      [
        "赤",
        "せき / あかい",
        "세키 / 아카이",
        "붉을 적",
        {
          "id": "kanji_n4_68",
          "level": "N4",
          "meta": {
            "readings": [
              "せき",
              "あかい"
            ],
            "exampleWord": "赤い"
          },
          "examples": [
            {
              "jp": "赤い",
              "hira": "あかい",
              "pronunciation": "아카이",
              "meaning": "빨갛다"
            }
          ]
        }
      ],
      [
        "青",
        "せい / あおい",
        "세이 / 아오이",
        "푸를 청",
        {
          "id": "kanji_n4_69",
          "level": "N4",
          "meta": {
            "readings": [
              "せい",
              "あおい"
            ],
            "exampleWord": "青い"
          },
          "examples": [
            {
              "jp": "青い",
              "hira": "あおい",
              "pronunciation": "아오이",
              "meaning": "파랗다"
            }
          ]
        }
      ],
      [
        "店",
        "てん / みせ",
        "텐 / 미세",
        "가게 점",
        {
          "id": "kanji_n4_70",
          "level": "N4",
          "meta": {
            "readings": [
              "てん",
              "みせ"
            ],
            "exampleWord": "店"
          },
          "examples": [
            {
              "jp": "店",
              "hira": "みせ",
              "pronunciation": "미세",
              "meaning": "가게"
            }
          ]
        }
      ],
      [
        "物",
        "ぶつ / もの",
        "부츠 / 모노",
        "물건 물",
        {
          "id": "kanji_n4_71",
          "level": "N4",
          "meta": {
            "readings": [
              "ぶつ",
              "もの"
            ],
            "exampleWord": "物"
          },
          "examples": [
            {
              "jp": "物",
              "hira": "もの",
              "pronunciation": "모노",
              "meaning": "물건"
            }
          ]
        }
      ],
      [
        "場",
        "じょう / ば",
        "죠오 / 바",
        "마당 장",
        {
          "id": "kanji_n4_72",
          "level": "N4",
          "meta": {
            "readings": [
              "じょう",
              "ば"
            ],
            "exampleWord": "場所"
          },
          "examples": [
            {
              "jp": "場所",
              "hira": "ばしょ",
              "pronunciation": "바쇼",
              "meaning": "장소"
            }
          ]
        }
      ],
      [
        "所",
        "しょ / ところ",
        "쇼 / 토코로",
        "곳 소",
        {
          "id": "kanji_n4_73",
          "level": "N4",
          "meta": {
            "readings": [
              "しょ",
              "ところ"
            ],
            "exampleWord": "場所"
          },
          "examples": [
            {
              "jp": "場所",
              "hira": "ばしょ",
              "pronunciation": "바쇼",
              "meaning": "장소"
            }
          ]
        }
      ],
      [
        "住",
        "じゅう / すむ",
        "주우 / 스무",
        "살 주",
        {
          "id": "kanji_n4_74",
          "level": "N4",
          "meta": {
            "readings": [
              "じゅう",
              "すむ"
            ],
            "exampleWord": "住む"
          },
          "examples": [
            {
              "jp": "住む",
              "hira": "すむ",
              "pronunciation": "스무",
              "meaning": "살다"
            }
          ]
        }
      ],
      [
        "民",
        "みん / たみ",
        "민 / 타미",
        "백성 민",
        {
          "id": "kanji_n4_75",
          "level": "N4",
          "meta": {
            "readings": [
              "みん",
              "たみ"
            ],
            "exampleWord": "市民"
          },
          "examples": [
            {
              "jp": "市民",
              "hira": "しみん",
              "pronunciation": "시민",
              "meaning": "시민"
            }
          ]
        }
      ],
      [
        "市",
        "し / いち",
        "시 / 이치",
        "저자 시",
        {
          "id": "kanji_n4_76",
          "level": "N4",
          "meta": {
            "readings": [
              "し",
              "いち"
            ],
            "exampleWord": "市民"
          },
          "examples": [
            {
              "jp": "市民",
              "hira": "しみん",
              "pronunciation": "시민",
              "meaning": "시민"
            }
          ]
        }
      ],
      [
        "町",
        "ちょう / まち",
        "쵸오 / 마치",
        "마을 정",
        {
          "id": "kanji_n4_77",
          "level": "N4",
          "meta": {
            "readings": [
              "ちょう",
              "まち"
            ],
            "exampleWord": "町"
          },
          "examples": [
            {
              "jp": "町",
              "hira": "まち",
              "pronunciation": "마치",
              "meaning": "마을"
            }
          ]
        }
      ],
      [
        "村",
        "そん / むら",
        "손 / 무라",
        "마을 촌",
        {
          "id": "kanji_n4_78",
          "level": "N4",
          "meta": {
            "readings": [
              "そん",
              "むら"
            ],
            "exampleWord": "村"
          },
          "examples": [
            {
              "jp": "村",
              "hira": "むら",
              "pronunciation": "무라",
              "meaning": "마을"
            }
          ]
        }
      ],
      [
        "道",
        "どう / みち",
        "도오 / 미치",
        "길 도",
        {
          "id": "kanji_n4_79",
          "level": "N4",
          "meta": {
            "readings": [
              "どう",
              "みち"
            ],
            "exampleWord": "道"
          },
          "examples": [
            {
              "jp": "道",
              "hira": "みち",
              "pronunciation": "미치",
              "meaning": "길"
            }
          ]
        }
      ],
      [
        "交",
        "こう / まじわる",
        "코오 / 마지와루",
        "사귈 교",
        {
          "id": "kanji_n4_80",
          "level": "N4",
          "meta": {
            "readings": [
              "こう",
              "まじわる"
            ],
            "exampleWord": "交通"
          },
          "examples": [
            {
              "jp": "交通",
              "hira": "こうつう",
              "pronunciation": "코오츠우",
              "meaning": "교통"
            }
          ]
        }
      ],
      [
        "通",
        "つう / とおる",
        "츠우 / 토오루",
        "통할 통",
        {
          "id": "kanji_n4_81",
          "level": "N4",
          "meta": {
            "readings": [
              "つう",
              "とおる"
            ],
            "exampleWord": "交通"
          },
          "examples": [
            {
              "jp": "交通",
              "hira": "こうつう",
              "pronunciation": "코오츠우",
              "meaning": "교통"
            }
          ]
        }
      ],
      [
        "料",
        "りょう",
        "료오",
        "헤아릴 료",
        {
          "id": "kanji_n4_82",
          "level": "N4",
          "meta": {
            "readings": [
              "りょう"
            ],
            "exampleWord": "料理"
          },
          "examples": [
            {
              "jp": "料理",
              "hira": "りょうり",
              "pronunciation": "료오리",
              "meaning": "요리"
            }
          ]
        }
      ],
      [
        "医",
        "い",
        "이",
        "의원 의",
        {
          "id": "kanji_n4_84",
          "level": "N4",
          "meta": {
            "readings": [
              "い"
            ],
            "exampleWord": "医者"
          },
          "examples": [
            {
              "jp": "医者",
              "hira": "いしゃ",
              "pronunciation": "이샤",
              "meaning": "의사"
            }
          ]
        }
      ],
      [
        "者",
        "しゃ / もの",
        "샤 / 모노",
        "사람 자 / ~하는 사람",
        {
          "id": "kanji_n4_85",
          "level": "N4",
          "meta": {
            "readings": [
              "しゃ",
              "もの"
            ],
            "exampleWord": "医者"
          },
          "examples": [
            {
              "jp": "医者",
              "hira": "いしゃ",
              "pronunciation": "이샤",
              "meaning": "의사"
            }
          ]
        }
      ],
      [
        "考",
        "こう / かんがえる",
        "코오 / 칸가에루",
        "생각할 고",
        {
          "id": "kanji_n4_94",
          "level": "N4",
          "meta": {
            "readings": [
              "こう",
              "かんがえる"
            ],
            "exampleWord": "考える"
          },
          "examples": [
            {
              "jp": "考える",
              "hira": "かんがえる",
              "pronunciation": "칸가에루",
              "meaning": "생각하다"
            }
          ]
        }
      ],
      [
        "思",
        "し / おもう",
        "시 / 오모우",
        "생각 사",
        {
          "id": "kanji_n4_95",
          "level": "N4",
          "meta": {
            "readings": [
              "し",
              "おもう"
            ],
            "exampleWord": "思う"
          },
          "examples": [
            {
              "jp": "思う",
              "hira": "おもう",
              "pronunciation": "오모우",
              "meaning": "생각하다"
            }
          ]
        }
      ],
      [
        "知",
        "ち / しる",
        "치 / 시루",
        "알 지",
        {
          "id": "kanji_n4_96",
          "level": "N4",
          "meta": {
            "readings": [
              "ち",
              "しる"
            ],
            "exampleWord": "知る"
          },
          "examples": [
            {
              "jp": "知る",
              "hira": "しる",
              "pronunciation": "시루",
              "meaning": "알다"
            }
          ]
        }
      ],
      [
        "覚",
        "かく / おぼえる",
        "카쿠 / 오보에루",
        "깨달을 각",
        {
          "id": "kanji_n4_97",
          "level": "N4",
          "meta": {
            "readings": [
              "かく",
              "おぼえる"
            ],
            "exampleWord": "覚える"
          },
          "examples": [
            {
              "jp": "覚える",
              "hira": "おぼえる",
              "pronunciation": "오보에루",
              "meaning": "외우다 / 기억하다"
            }
          ]
        }
      ],
      [
        "忘",
        "ぼう / わすれる",
        "보오 / 와스레루",
        "잊을 망",
        {
          "id": "kanji_n4_98",
          "level": "N4",
          "meta": {
            "readings": [
              "ぼう",
              "わすれる"
            ],
            "exampleWord": "忘れる"
          },
          "examples": [
            {
              "jp": "忘れる",
              "hira": "わすれる",
              "pronunciation": "와스레루",
              "meaning": "잊다"
            }
          ]
        }
      ],
      [
        "答",
        "とう / こたえる",
        "토오 / 코타에루",
        "대답할 답",
        {
          "id": "kanji_n4_99",
          "level": "N4",
          "meta": {
            "readings": [
              "とう",
              "こたえる"
            ],
            "exampleWord": "答える"
          },
          "examples": [
            {
              "jp": "答える",
              "hira": "こたえる",
              "pronunciation": "코타에루",
              "meaning": "대답하다"
            }
          ]
        }
      ],
      [
        "問",
        "もん / とう",
        "몬 / 토우",
        "물을 문",
        {
          "id": "kanji_n4_100",
          "level": "N4",
          "meta": {
            "readings": [
              "もん",
              "とう"
            ],
            "exampleWord": "質問"
          },
          "examples": [
            {
              "jp": "質問",
              "hira": "しつもん",
              "pronunciation": "시츠몬",
              "meaning": "질문"
            }
          ]
        }
      ],
      [
        "質",
        "しつ",
        "시츠",
        "바탕 질",
        {
          "id": "kanji_n4_101",
          "level": "N4",
          "meta": {
            "readings": [
              "しつ"
            ],
            "exampleWord": "質問"
          },
          "examples": [
            {
              "jp": "質問",
              "hira": "しつもん",
              "pronunciation": "시츠몬",
              "meaning": "질문"
            }
          ]
        }
      ],
      [
        "験",
        "けん",
        "켄",
        "시험할 험",
        {
          "id": "kanji_n4_102",
          "level": "N4",
          "meta": {
            "readings": [
              "けん"
            ],
            "exampleWord": "経験"
          },
          "examples": [
            {
              "jp": "経験",
              "hira": "けいけん",
              "pronunciation": "케이켄",
              "meaning": "경험"
            }
          ]
        }
      ],
      [
        "経",
        "けい / へる",
        "케이 / 헤루",
        "지날 경",
        {
          "id": "kanji_n4_103",
          "level": "N4",
          "meta": {
            "readings": [
              "けい",
              "へる"
            ],
            "exampleWord": "経験"
          },
          "examples": [
            {
              "jp": "経験",
              "hira": "けいけん",
              "pronunciation": "케이켄",
              "meaning": "경험"
            }
          ]
        }
      ],
      [
        "業",
        "ぎょう / わざ",
        "교오 / 와자",
        "업 업",
        {
          "id": "kanji_n4_104",
          "level": "N4",
          "meta": {
            "readings": [
              "ぎょう",
              "わざ"
            ],
            "exampleWord": "授業"
          },
          "examples": [
            {
              "jp": "授業",
              "hira": "じゅぎょう",
              "pronunciation": "주교오",
              "meaning": "수업"
            }
          ]
        }
      ],
      [
        "習",
        "しゅう / ならう",
        "슈우 / 나라우",
        "익힐 습",
        {
          "id": "kanji_n4_105",
          "level": "N4",
          "meta": {
            "readings": [
              "しゅう",
              "ならう"
            ],
            "exampleWord": "習う"
          },
          "examples": [
            {
              "jp": "習う",
              "hira": "ならう",
              "pronunciation": "나라우",
              "meaning": "배우다"
            }
          ]
        }
      ],
      [
        "練",
        "れん / ねる",
        "렌 / 네루",
        "익힐 련",
        {
          "id": "kanji_n4_106",
          "level": "N4",
          "meta": {
            "readings": [
              "れん",
              "ねる"
            ],
            "exampleWord": "練習"
          },
          "examples": [
            {
              "jp": "練習",
              "hira": "れんしゅう",
              "pronunciation": "렌슈우",
              "meaning": "연습"
            }
          ]
        }
      ],
      [
        "試",
        "し / ためす",
        "시 / 타메스",
        "시험할 시",
        {
          "id": "kanji_n4_107",
          "level": "N4",
          "meta": {
            "readings": [
              "し",
              "ためす"
            ],
            "exampleWord": "試験"
          },
          "examples": [
            {
              "jp": "試験",
              "hira": "しけん",
              "pronunciation": "시켄",
              "meaning": "시험"
            }
          ]
        }
      ],
      [
        "計",
        "けい / はかる",
        "케이 / 하카루",
        "셀 계",
        {
          "id": "kanji_n4_109",
          "level": "N4",
          "meta": {
            "readings": [
              "けい",
              "はかる"
            ],
            "exampleWord": "計画"
          },
          "examples": [
            {
              "jp": "計画",
              "hira": "けいかく",
              "pronunciation": "케이카쿠",
              "meaning": "계획"
            }
          ]
        }
      ],
      [
        "画",
        "が / かく",
        "가 / 카쿠",
        "그림 화",
        {
          "id": "kanji_n4_110",
          "level": "N4",
          "meta": {
            "readings": [
              "が",
              "かく"
            ],
            "exampleWord": "計画"
          },
          "examples": [
            {
              "jp": "計画",
              "hira": "けいかく",
              "pronunciation": "케이카쿠",
              "meaning": "계획"
            }
          ]
        }
      ],
      [
        "映",
        "えい / うつる",
        "에이 / 우츠루",
        "비칠 영",
        {
          "id": "kanji_n4_113",
          "level": "N4",
          "meta": {
            "readings": [
              "えい",
              "うつる"
            ],
            "exampleWord": "映画"
          },
          "examples": [
            {
              "jp": "映画",
              "hira": "えいが",
              "pronunciation": "에이가",
              "meaning": "영화"
            }
          ]
        }
      ],
      [
        "写",
        "しゃ / うつす",
        "샤 / 우츠스",
        "베낄 사",
        {
          "id": "kanji_n4_115",
          "level": "N4",
          "meta": {
            "readings": [
              "しゃ",
              "うつす"
            ],
            "exampleWord": "写真"
          },
          "examples": [
            {
              "jp": "写真",
              "hira": "しゃしん",
              "pronunciation": "샤신",
              "meaning": "사진"
            }
          ]
        }
      ],
      [
        "真",
        "しん / ま",
        "신 / 마",
        "참 진",
        {
          "id": "kanji_n4_116",
          "level": "N4",
          "meta": {
            "readings": [
              "しん",
              "ま"
            ],
            "exampleWord": "写真"
          },
          "examples": [
            {
              "jp": "写真",
              "hira": "しゃしん",
              "pronunciation": "샤신",
              "meaning": "사진"
            }
          ]
        }
      ],
      [
        "音",
        "おん / おと",
        "온 / 오토",
        "소리 음",
        {
          "id": "kanji_n4_117",
          "level": "N4",
          "meta": {
            "readings": [
              "おん",
              "おと"
            ],
            "exampleWord": "音楽"
          },
          "examples": [
            {
              "jp": "音楽",
              "hira": "おんがく",
              "pronunciation": "온가쿠",
              "meaning": "음악"
            }
          ]
        }
      ],
      [
        "楽",
        "がく / たのしい",
        "가쿠 / 타노시이",
        "즐거울 락",
        {
          "id": "kanji_n4_118",
          "level": "N4",
          "meta": {
            "readings": [
              "がく",
              "たのしい"
            ],
            "exampleWord": "音楽"
          },
          "examples": [
            {
              "jp": "音楽",
              "hira": "おんがく",
              "pronunciation": "온가쿠",
              "meaning": "음악"
            }
          ]
        }
      ],
      [
        "歌",
        "か / うた",
        "카 / 우타",
        "노래 가",
        {
          "id": "kanji_n4_119",
          "level": "N4",
          "meta": {
            "readings": [
              "か",
              "うた"
            ],
            "exampleWord": "歌う"
          },
          "examples": [
            {
              "jp": "歌う",
              "hira": "うたう",
              "pronunciation": "우타우",
              "meaning": "노래하다"
            }
          ]
        }
      ],
      [
        "難",
        "なん / むずかしい",
        "난 / 무즈카시이",
        "어려울 난",
        {
          "id": "kanji_n4_121",
          "level": "N4",
          "meta": {
            "readings": [
              "なん",
              "むずかしい"
            ],
            "exampleWord": "難しい"
          },
          "examples": [
            {
              "jp": "難しい",
              "hira": "むずかしい",
              "pronunciation": "무즈카시이",
              "meaning": "어렵다"
            }
          ]
        }
      ],
      [
        "簡",
        "かん",
        "칸",
        "대쪽 간",
        {
          "id": "kanji_n4_122",
          "level": "N4",
          "meta": {
            "readings": [
              "かん"
            ],
            "exampleWord": "簡単"
          },
          "examples": [
            {
              "jp": "簡単",
              "hira": "かんたん",
              "pronunciation": "칸탄",
              "meaning": "간단하다"
            }
          ]
        }
      ],
      [
        "単",
        "たん",
        "탄",
        "홑 단",
        {
          "id": "kanji_n4_123",
          "level": "N4",
          "meta": {
            "readings": [
              "たん"
            ],
            "exampleWord": "簡単"
          },
          "examples": [
            {
              "jp": "簡単",
              "hira": "かんたん",
              "pronunciation": "칸탄",
              "meaning": "간단하다"
            }
          ]
        }
      ],
      [
        "複",
        "ふく",
        "후쿠",
        "겹칠 복",
        {
          "id": "kanji_n4_124",
          "level": "N4",
          "meta": {
            "readings": [
              "ふく"
            ],
            "exampleWord": "複雑"
          },
          "examples": [
            {
              "jp": "複雑",
              "hira": "ふくざつ",
              "pronunciation": "후쿠자츠",
              "meaning": "복잡하다"
            }
          ]
        }
      ],
      [
        "雑",
        "ざつ",
        "자츠",
        "섞일 잡",
        {
          "id": "kanji_n4_125",
          "level": "N4",
          "meta": {
            "readings": [
              "ざつ"
            ],
            "exampleWord": "複雑"
          },
          "examples": [
            {
              "jp": "複雑",
              "hira": "ふくざつ",
              "pronunciation": "후쿠자츠",
              "meaning": "복잡하다"
            }
          ]
        }
      ]
    ],
    "N3": [
      [
        "現",
        "げん / あらわす",
        "겐 / 아라와스",
        "나타날 현",
        {
          "id": "kanji_n3_0",
          "level": "N3",
          "meta": {
            "readings": [
              "げん",
              "あらわす"
            ],
            "exampleWord": "現在"
          },
          "examples": [
            {
              "jp": "現在",
              "hira": "げんざい",
              "pronunciation": "겐자이",
              "meaning": "현재"
            }
          ]
        }
      ],
      [
        "在",
        "ざい / ある",
        "자이 / 아루",
        "있을 재",
        {
          "id": "kanji_n3_1",
          "level": "N3",
          "meta": {
            "readings": [
              "ざい",
              "ある"
            ],
            "exampleWord": "現在"
          },
          "examples": [
            {
              "jp": "現在",
              "hira": "げんざい",
              "pronunciation": "겐자이",
              "meaning": "현재"
            }
          ]
        }
      ],
      [
        "最",
        "さい / もっとも",
        "사이 / 못토모",
        "가장 최",
        {
          "id": "kanji_n3_2",
          "level": "N3",
          "meta": {
            "readings": [
              "さい",
              "もっとも"
            ],
            "exampleWord": "最近"
          },
          "examples": [
            {
              "jp": "最近",
              "hira": "さいきん",
              "pronunciation": "사이킨",
              "meaning": "최근"
            }
          ]
        }
      ],
      [
        "機",
        "き / はた",
        "키 / 하타",
        "틀 기",
        {
          "id": "kanji_n3_6",
          "level": "N3",
          "meta": {
            "readings": [
              "き",
              "はた"
            ],
            "exampleWord": "機会"
          },
          "examples": [
            {
              "jp": "機会",
              "hira": "きかい",
              "pronunciation": "키카이",
              "meaning": "기회"
            }
          ]
        }
      ],
      [
        "関",
        "かん / かかわる",
        "칸 / 카카와루",
        "관계할 관",
        {
          "id": "kanji_n3_10",
          "level": "N3",
          "meta": {
            "readings": [
              "かん",
              "かかわる"
            ],
            "exampleWord": "関係"
          },
          "examples": [
            {
              "jp": "関係",
              "hira": "かんけい",
              "pronunciation": "칸케이",
              "meaning": "관계"
            }
          ]
        }
      ],
      [
        "係",
        "けい / かかる",
        "케이 / 카카루",
        "맬 계",
        {
          "id": "kanji_n3_11",
          "level": "N3",
          "meta": {
            "readings": [
              "けい",
              "かかる"
            ],
            "exampleWord": "関係"
          },
          "examples": [
            {
              "jp": "関係",
              "hira": "かんけい",
              "pronunciation": "칸케이",
              "meaning": "관계"
            }
          ]
        }
      ],
      [
        "化",
        "か / ばける",
        "카 / 바케루",
        "될 화",
        {
          "id": "kanji_n3_14",
          "level": "N3",
          "meta": {
            "readings": [
              "か",
              "ばける"
            ],
            "exampleWord": "変化"
          },
          "examples": [
            {
              "jp": "変化",
              "hira": "へんか",
              "pronunciation": "헨카",
              "meaning": "변화"
            }
          ]
        }
      ],
      [
        "増",
        "ぞう / ふえる",
        "조오 / 후에루",
        "늘 증",
        {
          "id": "kanji_n3_15",
          "level": "N3",
          "meta": {
            "readings": [
              "ぞう",
              "ふえる"
            ],
            "exampleWord": "増える"
          },
          "examples": [
            {
              "jp": "増える",
              "hira": "ふえる",
              "pronunciation": "후에루",
              "meaning": "늘어나다"
            }
          ]
        }
      ],
      [
        "減",
        "げん / へる",
        "겐 / 헤루",
        "줄 감",
        {
          "id": "kanji_n3_16",
          "level": "N3",
          "meta": {
            "readings": [
              "げん",
              "へる"
            ],
            "exampleWord": "減る"
          },
          "examples": [
            {
              "jp": "減る",
              "hira": "へる",
              "pronunciation": "헤루",
              "meaning": "줄어들다"
            }
          ]
        }
      ],
      [
        "比",
        "ひ / くらべる",
        "히 / 쿠라베루",
        "견줄 비",
        {
          "id": "kanji_n3_17",
          "level": "N3",
          "meta": {
            "readings": [
              "ひ",
              "くらべる"
            ],
            "exampleWord": "比較"
          },
          "examples": [
            {
              "jp": "比較",
              "hira": "ひかく",
              "pronunciation": "히카쿠",
              "meaning": "비교"
            }
          ]
        }
      ],
      [
        "較",
        "かく",
        "카쿠",
        "견줄 교",
        {
          "id": "kanji_n3_18",
          "level": "N3",
          "meta": {
            "readings": [
              "かく"
            ],
            "exampleWord": "比較"
          },
          "examples": [
            {
              "jp": "比較",
              "hira": "ひかく",
              "pronunciation": "히카쿠",
              "meaning": "비교"
            }
          ]
        }
      ],
      [
        "確",
        "かく / たしか",
        "카쿠 / 타시카",
        "확실할 확",
        {
          "id": "kanji_n3_19",
          "level": "N3",
          "meta": {
            "readings": [
              "かく",
              "たしか"
            ],
            "exampleWord": "確認"
          },
          "examples": [
            {
              "jp": "確認",
              "hira": "かくにん",
              "pronunciation": "카쿠닌",
              "meaning": "확인"
            }
          ]
        }
      ],
      [
        "認",
        "にん / みとめる",
        "닌 / 미토메루",
        "알 인",
        {
          "id": "kanji_n3_20",
          "level": "N3",
          "meta": {
            "readings": [
              "にん",
              "みとめる"
            ],
            "exampleWord": "確認"
          },
          "examples": [
            {
              "jp": "確認",
              "hira": "かくにん",
              "pronunciation": "카쿠닌",
              "meaning": "확인"
            }
          ]
        }
      ],
      [
        "解",
        "かい / とく",
        "카이 / 토쿠",
        "풀 해",
        {
          "id": "kanji_n3_21",
          "level": "N3",
          "meta": {
            "readings": [
              "かい",
              "とく"
            ],
            "exampleWord": "解決"
          },
          "examples": [
            {
              "jp": "解決",
              "hira": "かいけつ",
              "pronunciation": "카이케츠",
              "meaning": "해결"
            }
          ]
        }
      ],
      [
        "心",
        "しん / こころ",
        "신 / 코코로",
        "마음 심",
        {
          "id": "kanji_n3_24",
          "level": "N3",
          "meta": {
            "readings": [
              "しん",
              "こころ"
            ],
            "exampleWord": "関心"
          },
          "examples": [
            {
              "jp": "関心",
              "hira": "かんしん",
              "pronunciation": "칸신",
              "meaning": "관심"
            }
          ]
        }
      ],
      [
        "意",
        "い",
        "이",
        "뜻 의",
        {
          "id": "kanji_n3_25",
          "level": "N3",
          "meta": {
            "readings": [
              "い"
            ],
            "exampleWord": "意味"
          },
          "examples": [
            {
              "jp": "意味",
              "hira": "いみ",
              "pronunciation": "이미",
              "meaning": "의미"
            }
          ]
        }
      ],
      [
        "味",
        "み / あじ",
        "미 / 아지",
        "맛 미",
        {
          "id": "kanji_n3_26",
          "level": "N3",
          "meta": {
            "readings": [
              "み",
              "あじ"
            ],
            "exampleWord": "意味"
          },
          "examples": [
            {
              "jp": "意味",
              "hira": "いみ",
              "pronunciation": "이미",
              "meaning": "의미"
            }
          ]
        }
      ],
      [
        "常",
        "じょう / つね",
        "죠오 / 츠네",
        "항상 상",
        {
          "id": "kanji_n3_28",
          "level": "N3",
          "meta": {
            "readings": [
              "じょう",
              "つね"
            ],
            "exampleWord": "通常"
          },
          "examples": [
            {
              "jp": "通常",
              "hira": "つうじょう",
              "pronunciation": "츠우죠오",
              "meaning": "보통 / 평소"
            }
          ]
        }
      ],
      [
        "特",
        "とく",
        "토쿠",
        "특별할 특",
        {
          "id": "kanji_n3_30",
          "level": "N3",
          "meta": {
            "readings": [
              "とく"
            ],
            "exampleWord": "特別"
          },
          "examples": [
            {
              "jp": "特別",
              "hira": "とくべつ",
              "pronunciation": "토쿠베츠",
              "meaning": "특별"
            }
          ]
        }
      ],
      [
        "別",
        "べつ / わかれる",
        "베츠 / 와카레루",
        "나눌 별",
        {
          "id": "kanji_n3_31",
          "level": "N3",
          "meta": {
            "readings": [
              "べつ",
              "わかれる"
            ],
            "exampleWord": "特別"
          },
          "examples": [
            {
              "jp": "特別",
              "hira": "とくべつ",
              "pronunciation": "토쿠베츠",
              "meaning": "특별"
            }
          ]
        }
      ],
      [
        "普",
        "ふ",
        "후",
        "널리 보",
        {
          "id": "kanji_n3_32",
          "level": "N3",
          "meta": {
            "readings": [
              "ふ"
            ],
            "exampleWord": "普通"
          },
          "examples": [
            {
              "jp": "普通",
              "hira": "ふつう",
              "pronunciation": "후츠우",
              "meaning": "보통"
            }
          ]
        }
      ],
      [
        "同",
        "どう / おなじ",
        "도오 / 오나지",
        "같을 동",
        {
          "id": "kanji_n3_33",
          "level": "N3",
          "meta": {
            "readings": [
              "どう",
              "おなじ"
            ],
            "exampleWord": "同じ"
          },
          "examples": [
            {
              "jp": "同じ",
              "hira": "おなじ",
              "pronunciation": "오나지",
              "meaning": "같다"
            }
          ]
        }
      ],
      [
        "当",
        "とう / あたる",
        "토오 / 아타루",
        "마땅할 당",
        {
          "id": "kanji_n3_34",
          "level": "N3",
          "meta": {
            "readings": [
              "とう",
              "あたる"
            ],
            "exampleWord": "本当"
          },
          "examples": [
            {
              "jp": "本当",
              "hira": "ほんとう",
              "pronunciation": "혼토오",
              "meaning": "정말"
            }
          ]
        }
      ],
      [
        "以",
        "い",
        "이",
        "써 이",
        {
          "id": "kanji_n3_36",
          "level": "N3",
          "meta": {
            "readings": [
              "い"
            ],
            "exampleWord": "以上"
          },
          "examples": [
            {
              "jp": "以上",
              "hira": "いじょう",
              "pronunciation": "이죠오",
              "meaning": "이상"
            }
          ]
        }
      ],
      [
        "表",
        "ひょう / おもて",
        "효오 / 오모테",
        "겉 표",
        {
          "id": "kanji_n3_40",
          "level": "N3",
          "meta": {
            "readings": [
              "ひょう",
              "おもて"
            ],
            "exampleWord": "表現"
          },
          "examples": [
            {
              "jp": "表現",
              "hira": "ひょうげん",
              "pronunciation": "효오겐",
              "meaning": "표현"
            }
          ]
        }
      ],
      [
        "択",
        "たく",
        "타쿠",
        "가릴 택",
        {
          "id": "kanji_n3_43",
          "level": "N3",
          "meta": {
            "readings": [
              "たく"
            ],
            "exampleWord": "選択"
          },
          "examples": [
            {
              "jp": "選択",
              "hira": "せんたく",
              "pronunciation": "센타쿠",
              "meaning": "선택"
            }
          ]
        }
      ],
      [
        "相",
        "そう / あい",
        "소오 / 아이",
        "서로 상",
        {
          "id": "kanji_n3_44",
          "level": "N3",
          "meta": {
            "readings": [
              "そう",
              "あい"
            ],
            "exampleWord": "相談"
          },
          "examples": [
            {
              "jp": "相談",
              "hira": "そうだん",
              "pronunciation": "소오단",
              "meaning": "상담"
            }
          ]
        }
      ],
      [
        "談",
        "だん",
        "단",
        "말씀 담",
        {
          "id": "kanji_n3_45",
          "level": "N3",
          "meta": {
            "readings": [
              "だん"
            ],
            "exampleWord": "相談"
          },
          "examples": [
            {
              "jp": "相談",
              "hira": "そうだん",
              "pronunciation": "소오단",
              "meaning": "상담"
            }
          ]
        }
      ],
      [
        "報",
        "ほう / むくいる",
        "호오 / 무쿠이루",
        "알릴 보",
        {
          "id": "kanji_n3_46",
          "level": "N3",
          "meta": {
            "readings": [
              "ほう",
              "むくいる"
            ],
            "exampleWord": "情報"
          },
          "examples": [
            {
              "jp": "情報",
              "hira": "じょうほう",
              "pronunciation": "죠오호오",
              "meaning": "정보"
            }
          ]
        }
      ],
      [
        "情",
        "じょう / なさけ",
        "죠오 / 나사케",
        "뜻 정",
        {
          "id": "kanji_n3_47",
          "level": "N3",
          "meta": {
            "readings": [
              "じょう",
              "なさけ"
            ],
            "exampleWord": "情報"
          },
          "examples": [
            {
              "jp": "情報",
              "hira": "じょうほう",
              "pronunciation": "죠오호오",
              "meaning": "정보"
            }
          ]
        }
      ],
      [
        "状",
        "じょう",
        "죠오",
        "모양 상",
        {
          "id": "kanji_n3_48",
          "level": "N3",
          "meta": {
            "readings": [
              "じょう"
            ],
            "exampleWord": "状態"
          },
          "examples": [
            {
              "jp": "状態",
              "hira": "じょうたい",
              "pronunciation": "죠오타이",
              "meaning": "상태"
            }
          ]
        }
      ],
      [
        "態",
        "たい",
        "타이",
        "모양 태",
        {
          "id": "kanji_n3_49",
          "level": "N3",
          "meta": {
            "readings": [
              "たい"
            ],
            "exampleWord": "状態"
          },
          "examples": [
            {
              "jp": "状態",
              "hira": "じょうたい",
              "pronunciation": "죠오타이",
              "meaning": "상태"
            }
          ]
        }
      ]
    ]
  },
  "대명사": {
    "사람·지시": [
      [
        "私",
        "わたし",
        "와타시",
        "나 / 저",
        {
          "id": "pron_0",
          "level": "N5",
          "examples": [
            {
              "jp": "私は韓国人です。",
              "hira": "わたしはかんこくじんです。",
              "pronunciation": "와타시와 칸코쿠진데스",
              "meaning": "저는 한국인입니다."
            }
          ]
        }
      ],
      [
        "僕",
        "ぼく",
        "보쿠",
        "나 (남성의 비교적 부드러운 표현)",
        {
          "id": "pron_1",
          "level": "N5",
          "examples": [
            {
              "jp": "僕は学生です。",
              "hira": "ぼくはがくせいです。",
              "pronunciation": "보쿠와 가쿠세이데스",
              "meaning": "저는 학생이에요."
            }
          ]
        }
      ],
      [
        "あなた",
        "あなた",
        "아나타",
        "당신 / 너",
        {
          "id": "pron_2",
          "level": "N5",
          "examples": [
            {
              "jp": "あなたはどう思いますか。",
              "hira": "あなたはどうおもいますか。",
              "pronunciation": "아나타와 도오 오모이마스카",
              "meaning": "당신은 어떻게 생각하세요?"
            }
          ]
        }
      ],
      [
        "彼",
        "かれ",
        "카레",
        "그 / 남자친구",
        {
          "id": "pron_3",
          "level": "N5",
          "examples": [
            {
              "jp": "彼は会社員です。",
              "hira": "かれはかいしゃいんです。",
              "pronunciation": "카레와 카이샤인데스",
              "meaning": "그는 회사원이에요."
            }
          ]
        }
      ],
      [
        "彼女",
        "かのじょ",
        "카노조",
        "그녀 / 여자친구",
        {
          "id": "pron_4",
          "level": "N5",
          "examples": [
            {
              "jp": "彼女は先生です。",
              "hira": "かのじょはせんせいです。",
              "pronunciation": "카노조와 센세이데스",
              "meaning": "그녀는 선생님이에요."
            }
          ]
        }
      ],
      [
        "私たち",
        "わたしたち",
        "와타시타치",
        "우리",
        {
          "id": "pron_5",
          "level": "N5",
          "examples": [
            {
              "jp": "私たちは友達です。",
              "hira": "わたしたちはともだちです。",
              "pronunciation": "와타시타치와 토모다치데스",
              "meaning": "우리는 친구예요."
            }
          ]
        }
      ],
      [
        "これ",
        "これ",
        "코레",
        "이것",
        {
          "id": "pron_6",
          "level": "N5",
          "examples": [
            {
              "jp": "これは何ですか。",
              "hira": "これはなんですか。",
              "pronunciation": "코레와 난데스카",
              "meaning": "이것은 뭐예요?"
            }
          ]
        }
      ],
      [
        "それ",
        "それ",
        "소레",
        "그것",
        {
          "id": "pron_7",
          "level": "N5",
          "examples": [
            {
              "jp": "それは私のです。",
              "hira": "それはわたしのです。",
              "pronunciation": "소레와 와타시노데스",
              "meaning": "그것은 제 것이에요."
            }
          ]
        }
      ],
      [
        "あれ",
        "あれ",
        "아레",
        "저것",
        {
          "id": "pron_8",
          "level": "N5",
          "examples": [
            {
              "jp": "あれは何ですか。",
              "hira": "あれはなんですか。",
              "pronunciation": "아레와 난데스카",
              "meaning": "저것은 뭐예요?"
            }
          ]
        }
      ],
      [
        "ここ",
        "ここ",
        "코코",
        "여기",
        {
          "id": "pron_9",
          "level": "N5",
          "examples": [
            {
              "jp": "ここに座ってください。",
              "hira": "ここにすわってください。",
              "pronunciation": "코코니 스왓테 쿠다사이",
              "meaning": "여기에 앉아 주세요."
            }
          ]
        }
      ],
      [
        "そこ",
        "そこ",
        "소코",
        "거기",
        {
          "id": "pron_10",
          "level": "N5",
          "examples": [
            {
              "jp": "そこに置いてください。",
              "hira": "そこにおいてください。",
              "pronunciation": "소코니 오이테 쿠다사이",
              "meaning": "거기에 놓아 주세요."
            }
          ]
        }
      ],
      [
        "あそこ",
        "あそこ",
        "아소코",
        "저기",
        {
          "id": "pron_11",
          "level": "N5",
          "examples": [
            {
              "jp": "あそこに駅があります。",
              "hira": "あそこにえきがあります。",
              "pronunciation": "아소코니 에키가 아리마스",
              "meaning": "저기에 역이 있어요."
            }
          ]
        }
      ],
      [
        "こちら",
        "こちら",
        "코치라",
        "이쪽 / 이분",
        {
          "id": "pron_12",
          "level": "N5",
          "examples": [
            {
              "jp": "こちらへどうぞ。",
              "hira": "こちらへどうぞ。",
              "pronunciation": "코치라에 도오조",
              "meaning": "이쪽으로 오세요."
            }
          ]
        }
      ],
      [
        "そちら",
        "そちら",
        "소치라",
        "그쪽 / 그분",
        {
          "id": "pron_13",
          "level": "N5",
          "examples": [
            {
              "jp": "そちらは大丈夫ですか。",
              "hira": "そちらはだいじょうぶですか。",
              "pronunciation": "소치라와 다이죠오부데스카",
              "meaning": "그쪽은 괜찮으세요?"
            }
          ]
        }
      ],
      [
        "あちら",
        "あちら",
        "아치라",
        "저쪽 / 저분",
        {
          "id": "pron_14",
          "level": "N5",
          "examples": [
            {
              "jp": "あちらに見えます。",
              "hira": "あちらにみえます。",
              "pronunciation": "아치라니 미에마스",
              "meaning": "저쪽에서 보여요."
            }
          ]
        }
      ],
      [
        "どちら",
        "どちら",
        "도치라",
        "어느 쪽 / 어느 분",
        {
          "id": "pron_15",
          "level": "N5",
          "examples": [
            {
              "jp": "どちらから来ましたか。",
              "hira": "どちらからきましたか。",
              "pronunciation": "도치라카라 키마시타카",
              "meaning": "어디에서 오셨어요?"
            }
          ]
        }
      ]
    ]
  },
  "수사": {
    "기본 숫자": [
      [
        "一",
        "いち",
        "이치",
        "1 / 하나",
        {
          "id": "num_0",
          "level": "N5",
          "examples": [
            {
              "jp": "一から始めましょう。",
              "hira": "いちからはじめましょう。",
              "pronunciation": "이치카라 하지메마쇼오",
              "meaning": "1부터 시작해요."
            }
          ]
        }
      ],
      [
        "二",
        "に",
        "니",
        "2 / 둘",
        {
          "id": "num_1",
          "level": "N5",
          "examples": [
            {
              "jp": "二つください。",
              "hira": "ふたつください。",
              "pronunciation": "후타츠 쿠다사이",
              "meaning": "두 개 주세요."
            }
          ]
        }
      ],
      [
        "三",
        "さん",
        "산",
        "3 / 셋",
        {
          "id": "num_2",
          "level": "N5",
          "examples": [
            {
              "jp": "三人で行きます。",
              "hira": "さんにんでいきます。",
              "pronunciation": "산닌데 이키마스",
              "meaning": "세 명이서 가요."
            }
          ]
        }
      ],
      [
        "四",
        "よん / し",
        "욘 / 시",
        "4 / 넷",
        {
          "id": "num_3",
          "level": "N5",
          "examples": [
            {
              "jp": "四時に会いましょう。",
              "hira": "よじにあいましょう。",
              "pronunciation": "요지니 아이마쇼오",
              "meaning": "4시에 만나요."
            }
          ]
        }
      ],
      [
        "五",
        "ご",
        "고",
        "5 / 다섯",
        {
          "id": "num_4",
          "level": "N5",
          "examples": [
            {
              "jp": "五分待ってください。",
              "hira": "ごふんまってください。",
              "pronunciation": "고훈 맛테 쿠다사이",
              "meaning": "5분 기다려 주세요."
            }
          ]
        }
      ],
      [
        "六",
        "ろく",
        "로쿠",
        "6 / 여섯",
        {
          "id": "num_5",
          "level": "N5",
          "examples": [
            {
              "jp": "六時に起きます。",
              "hira": "ろくじにおきます。",
              "pronunciation": "로쿠지니 오키마스",
              "meaning": "6시에 일어나요."
            }
          ]
        }
      ],
      [
        "七",
        "なな / しち",
        "나나 / 시치",
        "7 / 일곱",
        {
          "id": "num_6",
          "level": "N5",
          "examples": [
            {
              "jp": "七月に旅行します。",
              "hira": "しちがつにりょこうします。",
              "pronunciation": "시치가츠니 료코오시마스",
              "meaning": "7월에 여행해요."
            }
          ]
        }
      ],
      [
        "八",
        "はち",
        "하치",
        "8 / 여덟",
        {
          "id": "num_7",
          "level": "N5",
          "examples": [
            {
              "jp": "八人います。",
              "hira": "はちにんいます。",
              "pronunciation": "하치닌 이마스",
              "meaning": "8명이 있어요."
            }
          ]
        }
      ],
      [
        "九",
        "きゅう / く",
        "큐우 / 쿠",
        "9 / 아홉",
        {
          "id": "num_8",
          "level": "N5",
          "examples": [
            {
              "jp": "九時に始まります。",
              "hira": "くじにはじまります。",
              "pronunciation": "쿠지니 하지마리마스",
              "meaning": "9시에 시작해요."
            }
          ]
        }
      ],
      [
        "十",
        "じゅう",
        "주우",
        "10 / 열",
        {
          "id": "num_9",
          "level": "N5",
          "examples": [
            {
              "jp": "十個あります。",
              "hira": "じゅっこあります。",
              "pronunciation": "쥿코 아리마스",
              "meaning": "10개 있어요."
            }
          ]
        }
      ],
      [
        "百",
        "ひゃく",
        "햐쿠",
        "100",
        {
          "id": "num_10",
          "level": "N5",
          "examples": [
            {
              "jp": "百円です。",
              "hira": "ひゃくえんです。",
              "pronunciation": "햐쿠엔데스",
              "meaning": "100엔이에요."
            }
          ]
        }
      ],
      [
        "千",
        "せん",
        "센",
        "1,000",
        {
          "id": "num_11",
          "level": "N5",
          "examples": [
            {
              "jp": "千円払いました。",
              "hira": "せんえんはらいました。",
              "pronunciation": "센엔 하라이마시타",
              "meaning": "1,000엔 냈어요."
            }
          ]
        }
      ],
      [
        "万",
        "まん",
        "만",
        "10,000",
        {
          "id": "num_12",
          "level": "N5",
          "examples": [
            {
              "jp": "一万円あります。",
              "hira": "いちまんえんあります。",
              "pronunciation": "이치만엔 아리마스",
              "meaning": "1만 엔 있어요."
            }
          ]
        }
      ],
      [
        "一人",
        "ひとり",
        "히토리",
        "한 명",
        {
          "id": "num_13",
          "level": "N5",
          "examples": [
            {
              "jp": "一人で行きます。",
              "hira": "ひとりでいきます。",
              "pronunciation": "히토리데 이키마스",
              "meaning": "혼자 가요."
            }
          ]
        }
      ],
      [
        "二人",
        "ふたり",
        "후타리",
        "두 명",
        {
          "id": "num_14",
          "level": "N5",
          "examples": [
            {
              "jp": "二人で食べました。",
              "hira": "ふたりでたべました。",
              "pronunciation": "후타리데 타베마시타",
              "meaning": "둘이서 먹었어요."
            }
          ]
        }
      ],
      [
        "一つ",
        "ひとつ",
        "히토츠",
        "한 개",
        {
          "id": "num_15",
          "level": "N5",
          "examples": [
            {
              "jp": "一つください。",
              "hira": "ひとつください。",
              "pronunciation": "히토츠 쿠다사이",
              "meaning": "한 개 주세요."
            }
          ]
        }
      ],
      [
        "二つ",
        "ふたつ",
        "후타츠",
        "두 개",
        {
          "id": "num_16",
          "level": "N5",
          "examples": [
            {
              "jp": "二つ買いました。",
              "hira": "ふたつかいました。",
              "pronunciation": "후타츠 카이마시타",
              "meaning": "두 개 샀어요."
            }
          ]
        }
      ],
      [
        "一番",
        "いちばん",
        "이치반",
        "가장 / 1등",
        {
          "id": "num_17",
          "level": "N5",
          "examples": [
            {
              "jp": "これが一番好きです。",
              "hira": "これがいちばんすきです。",
              "pronunciation": "코레가 이치반 스키데스",
              "meaning": "이게 제일 좋아요."
            }
          ]
        }
      ]
    ]
  },
  "단위·수량": {
    "개수·사람·시간": [
      [
        "個",
        "こ",
        "코",
        "개 (작은 물건의 수량 단위)",
        {
          "id": "counter_0",
          "level": "N5",
          "examples": [
            {
              "jp": "りんごを三個買いました。",
              "hira": "りんごをさんこかいました。",
              "pronunciation": "링고오 산코 카이마시타",
              "meaning": "사과를 세 개 샀어요."
            }
          ]
        }
      ],
      [
        "枚",
        "まい",
        "마이",
        "장 (얇고 납작한 것)",
        {
          "id": "counter_1",
          "level": "N5",
          "examples": [
            {
              "jp": "切符を二枚ください。",
              "hira": "きっぷをにまいください。",
              "pronunciation": "킷푸오 니마이 쿠다사이",
              "meaning": "표 두 장 주세요."
            }
          ]
        }
      ],
      [
        "本",
        "ほん",
        "혼",
        "자루 / 병 / 개 (길쭉한 것)",
        {
          "id": "counter_2",
          "level": "N5",
          "examples": [
            {
              "jp": "ペンを三本買いました。",
              "hira": "ペンをさんぼんかいました。",
              "pronunciation": "펜오 산본 카이마시타",
              "meaning": "펜 세 자루 샀어요."
            }
          ]
        }
      ],
      [
        "冊",
        "さつ",
        "사츠",
        "권 (책)",
        {
          "id": "counter_3",
          "level": "N5",
          "examples": [
            {
              "jp": "本を二冊借りました。",
              "hira": "ほんをにさつかりました。",
              "pronunciation": "혼오 니사츠 카리마시타",
              "meaning": "책 두 권 빌렸어요."
            }
          ]
        }
      ],
      [
        "台",
        "だい",
        "다이",
        "대 / 대수 (기계·차량)",
        {
          "id": "counter_4",
          "level": "N5",
          "examples": [
            {
              "jp": "車が二台あります。",
              "hira": "くるまがにだいあります。",
              "pronunciation": "쿠루마가 니다이 아리마스",
              "meaning": "차가 두 대 있어요."
            }
          ]
        }
      ],
      [
        "匹",
        "ひき",
        "히키",
        "마리 (작은 동물)",
        {
          "id": "counter_5",
          "level": "N5",
          "examples": [
            {
              "jp": "猫が二匹います。",
              "hira": "ねこがにひきいます。",
              "pronunciation": "네코가 니히키 이마스",
              "meaning": "고양이 두 마리가 있어요."
            }
          ]
        }
      ],
      [
        "人",
        "にん",
        "닌",
        "명 (사람 수)",
        {
          "id": "counter_6",
          "level": "N5",
          "examples": [
            {
              "jp": "五人で行きます。",
              "hira": "ごにんでいきます。",
              "pronunciation": "고닌데 이키마스",
              "meaning": "다섯 명이서 가요."
            }
          ]
        }
      ],
      [
        "回",
        "かい",
        "카이",
        "회 / 번",
        {
          "id": "counter_7",
          "level": "N5",
          "examples": [
            {
              "jp": "三回見ました。",
              "hira": "さんかいみました。",
              "pronunciation": "산카이 미마시타",
              "meaning": "세 번 봤어요."
            }
          ]
        }
      ],
      [
        "分",
        "ふん / ぷん",
        "훈 / 푼",
        "분",
        {
          "id": "counter_8",
          "level": "N5",
          "examples": [
            {
              "jp": "十分待ちました。",
              "hira": "じゅっぷんまちました。",
              "pronunciation": "쥿푼 마치마시타",
              "meaning": "10분 기다렸어요."
            }
          ]
        }
      ],
      [
        "時間",
        "じかん",
        "지칸",
        "시간",
        {
          "id": "counter_9",
          "level": "N5",
          "examples": [
            {
              "jp": "二時間勉強しました。",
              "hira": "にじかんべんきょうしました。",
              "pronunciation": "니지칸 벤쿄오시마시타",
              "meaning": "두 시간 공부했어요."
            }
          ]
        }
      ],
      [
        "週間",
        "しゅうかん",
        "슈우칸",
        "주일 / 주간",
        {
          "id": "counter_10",
          "level": "N5",
          "examples": [
            {
              "jp": "一週間休みます。",
              "hira": "いっしゅうかんやすみます。",
              "pronunciation": "잇슈우칸 야스미마스",
              "meaning": "일주일 쉬어요."
            }
          ]
        }
      ],
      [
        "か月",
        "かげつ",
        "카게츠",
        "개월",
        {
          "id": "counter_11",
          "level": "N5",
          "examples": [
            {
              "jp": "三か月勉強しました。",
              "hira": "さんかげつべんきょうしました。",
              "pronunciation": "산카게츠 벤쿄오시마시타",
              "meaning": "3개월 공부했어요."
            }
          ]
        }
      ],
      [
        "歳",
        "さい",
        "사이",
        "살 (나이)",
        {
          "id": "counter_12",
          "level": "N5",
          "examples": [
            {
              "jp": "二十歳です。",
              "hira": "はたちです。",
              "pronunciation": "하타치데스",
              "meaning": "스무 살이에요."
            }
          ]
        }
      ]
    ]
  },
  "시간·날짜 표현": {
    "날짜·시간": [
      [
        "今朝",
        "けさ",
        "케사",
        "오늘 아침",
        {
          "id": "time_0",
          "level": "N5",
          "examples": [
            {
              "jp": "今朝、七時に起きました。",
              "hira": "けさ、しちじにおきました。",
              "pronunciation": "케사, 시치지니 오키마시타",
              "meaning": "오늘 아침 7시에 일어났어요."
            }
          ]
        }
      ],
      [
        "今晩",
        "こんばん",
        "콘반",
        "오늘 밤",
        {
          "id": "time_1",
          "level": "N5",
          "examples": [
            {
              "jp": "今晩は家で食べます。",
              "hira": "こんばんはいえでたべます。",
              "pronunciation": "콘반와 이에데 타베마스",
              "meaning": "오늘 밤은 집에서 먹어요."
            }
          ]
        }
      ],
      [
        "昨夜",
        "さくや",
        "사쿠야",
        "어젯밤",
        {
          "id": "time_2",
          "level": "N5",
          "examples": [
            {
              "jp": "昨夜はよく眠れました。",
              "hira": "さくやはよくねむれました。",
              "pronunciation": "사쿠야와 요쿠 네무레마시타",
              "meaning": "어젯밤에는 잘 잤어요."
            }
          ]
        }
      ],
      [
        "毎朝",
        "まいあさ",
        "마이아사",
        "매일 아침",
        {
          "id": "time_3",
          "level": "N5",
          "examples": [
            {
              "jp": "毎朝コーヒーを飲みます。",
              "hira": "まいあさコーヒーをのみます。",
              "pronunciation": "마이아사 코오히이오 노미마스",
              "meaning": "매일 아침 커피를 마셔요."
            }
          ]
        }
      ],
      [
        "毎晩",
        "まいばん",
        "마이반",
        "매일 밤",
        {
          "id": "time_4",
          "level": "N5",
          "examples": [
            {
              "jp": "毎晩本を読みます。",
              "hira": "まいばんほんをよみます。",
              "pronunciation": "마이반 혼오 요미마스",
              "meaning": "매일 밤 책을 읽어요."
            }
          ]
        }
      ],
      [
        "先週",
        "せんしゅう",
        "센슈우",
        "지난주",
        {
          "id": "time_5",
          "level": "N5",
          "examples": [
            {
              "jp": "先週は忙しかったです。",
              "hira": "せんしゅうはいそがしかったです。",
              "pronunciation": "센슈우와 이소가시캇타데스",
              "meaning": "지난주는 바빴어요."
            }
          ]
        }
      ],
      [
        "今週",
        "こんしゅう",
        "콘슈우",
        "이번 주",
        {
          "id": "time_6",
          "level": "N5",
          "examples": [
            {
              "jp": "今週は休みがありません。",
              "hira": "こんしゅうはやすみがありません。",
              "pronunciation": "콘슈우와 야스미가 아리마센",
              "meaning": "이번 주는 쉬는 날이 없어요."
            }
          ]
        }
      ],
      [
        "来週",
        "らいしゅう",
        "라이슈우",
        "다음 주",
        {
          "id": "time_7",
          "level": "N5",
          "examples": [
            {
              "jp": "来週また会いましょう。",
              "hira": "らいしゅうまたあいましょう。",
              "pronunciation": "라이슈우 마타 아이마쇼오",
              "meaning": "다음 주에 또 만나요."
            }
          ]
        }
      ],
      [
        "先月",
        "せんげつ",
        "센게츠",
        "지난달",
        {
          "id": "time_8",
          "level": "N5",
          "examples": [
            {
              "jp": "先月、日本へ行きました。",
              "hira": "せんげつ、にほんへいきました。",
              "pronunciation": "센게츠, 니혼에 이키마시타",
              "meaning": "지난달에 일본에 갔어요."
            }
          ]
        }
      ],
      [
        "来月",
        "らいげつ",
        "라이게츠",
        "다음 달",
        {
          "id": "time_9",
          "level": "N5",
          "examples": [
            {
              "jp": "来月引っ越します。",
              "hira": "らいげつひっこします。",
              "pronunciation": "라이게츠 힛코시마스",
              "meaning": "다음 달에 이사해요."
            }
          ]
        }
      ],
      [
        "去年",
        "きょねん",
        "쿄넨",
        "작년",
        {
          "id": "time_10",
          "level": "N5",
          "examples": [
            {
              "jp": "去年は日本に住んでいました。",
              "hira": "きょねんはにほんにすんでいました。",
              "pronunciation": "쿄넨와 니혼니 슨데이마시타",
              "meaning": "작년에는 일본에 살았어요."
            }
          ]
        }
      ],
      [
        "今年",
        "ことし",
        "코토시",
        "올해",
        {
          "id": "time_11",
          "level": "N5",
          "examples": [
            {
              "jp": "今年は日本語を勉強します。",
              "hira": "ことしはにほんごをべんきょうします。",
              "pronunciation": "코토시와 니혼고오 벤쿄오시마스",
              "meaning": "올해는 일본어를 공부할 거예요."
            }
          ]
        }
      ],
      [
        "来年",
        "らいねん",
        "라이넨",
        "내년",
        {
          "id": "time_12",
          "level": "N5",
          "examples": [
            {
              "jp": "来年日本へ行くつもりです。",
              "hira": "らいねんにほんへいくつもりです。",
              "pronunciation": "라이넨 니혼에 이쿠 츠모리데스",
              "meaning": "내년에 일본에 갈 생각이에요."
            }
          ]
        }
      ],
      [
        "午前",
        "ごぜん",
        "고젠",
        "오전",
        {
          "id": "time_13",
          "level": "N5",
          "examples": [
            {
              "jp": "午前九時に始まります。",
              "hira": "ごぜんくじにはじまります。",
              "pronunciation": "고젠 쿠지니 하지마리마스",
              "meaning": "오전 9시에 시작해요."
            }
          ]
        }
      ],
      [
        "午後",
        "ごご",
        "고고",
        "오후",
        {
          "id": "time_14",
          "level": "N5",
          "examples": [
            {
              "jp": "午後三時に会いましょう。",
              "hira": "ごごさんじにあいましょう。",
              "pronunciation": "고고 산지니 아이마쇼오",
              "meaning": "오후 3시에 만나요."
            }
          ]
        }
      ],
      [
        "半",
        "はん",
        "한",
        "반 (시간)",
        {
          "id": "time_15",
          "level": "N5",
          "examples": [
            {
              "jp": "七時半に起きます。",
              "hira": "しちじはんにおきます。",
              "pronunciation": "시치지한니 오키마스",
              "meaning": "7시 반에 일어나요."
            }
          ]
        }
      ]
    ]
  },
  "감탄사": {
    "반응·감정": [
      [
        "あっ",
        "あっ",
        "앗",
        "아!",
        {
          "id": "interj_0",
          "level": "N5",
          "examples": [
            {
              "jp": "あっ、忘れました。",
              "hira": "あっ、わすれました。",
              "pronunciation": "앗, 와스레마시타",
              "meaning": "아, 잊어버렸어요."
            }
          ]
        }
      ],
      [
        "えっ",
        "えっ",
        "엣",
        "엥? / 뭐?",
        {
          "id": "interj_1",
          "level": "N5",
          "examples": [
            {
              "jp": "えっ、本当ですか。",
              "hira": "えっ、ほんとうですか。",
              "pronunciation": "엣, 혼토오데스카",
              "meaning": "엥, 정말이에요?"
            }
          ]
        }
      ],
      [
        "ああ",
        "ああ",
        "아아",
        "아 / 아 그렇구나",
        {
          "id": "interj_2",
          "level": "N5",
          "examples": [
            {
              "jp": "ああ、分かりました。",
              "hira": "ああ、わかりました。",
              "pronunciation": "아아, 와카리마시타",
              "meaning": "아, 알겠어요."
            }
          ]
        }
      ],
      [
        "なるほど",
        "なるほど",
        "나루호도",
        "그렇구나 / 과연",
        {
          "id": "interj_3",
          "level": "N5",
          "examples": [
            {
              "jp": "なるほど、そういう意味ですね。",
              "hira": "なるほど、そういういみですね。",
              "pronunciation": "나루호도, 소오이우 이미데스네",
              "meaning": "그렇구나, 그런 뜻이군요."
            }
          ]
        }
      ],
      [
        "やった",
        "やった",
        "얏타",
        "해냈다! / 좋다!",
        {
          "id": "interj_4",
          "level": "N5",
          "examples": [
            {
              "jp": "やった、合格しました。",
              "hira": "やった、ごうかくしました。",
              "pronunciation": "얏타, 고오카쿠시마시타",
              "meaning": "해냈다, 합격했어요!"
            }
          ]
        }
      ],
      [
        "よし",
        "よし",
        "요시",
        "좋아 / 됐어",
        {
          "id": "interj_5",
          "level": "N5",
          "examples": [
            {
              "jp": "よし、始めましょう。",
              "hira": "よし、はじめましょう。",
              "pronunciation": "요시, 하지메마쇼오",
              "meaning": "좋아, 시작하자."
            }
          ]
        }
      ],
      [
        "まあ",
        "まあ",
        "마아",
        "뭐 / 글쎄",
        {
          "id": "interj_6",
          "level": "N5",
          "examples": [
            {
              "jp": "まあ、いいでしょう。",
              "hira": "まあ、いいでしょう。",
              "pronunciation": "마아, 이이데쇼오",
              "meaning": "뭐, 괜찮겠지요."
            }
          ]
        }
      ],
      [
        "ほら",
        "ほら",
        "호라",
        "봐 / 거봐",
        {
          "id": "interj_7",
          "level": "N5",
          "examples": [
            {
              "jp": "ほら、見てください。",
              "hira": "ほら、みてください。",
              "pronunciation": "호라, 미테 쿠다사이",
              "meaning": "봐요, 보세요."
            }
          ]
        }
      ],
      [
        "もしもし",
        "もしもし",
        "모시모시",
        "여보세요",
        {
          "id": "interj_8",
          "level": "N5",
          "examples": [
            {
              "jp": "もしもし、田中さんですか。",
              "hira": "もしもし、たなかさんですか。",
              "pronunciation": "모시모시, 타나카상데스카",
              "meaning": "여보세요, 다나카 씨인가요?"
            }
          ]
        }
      ],
      [
        "おめでとう",
        "おめでとう",
        "오메데토오",
        "축하해",
        {
          "id": "interj_9",
          "level": "N5",
          "examples": [
            {
              "jp": "誕生日おめでとう。",
              "hira": "たんじょうびおめでとう。",
              "pronunciation": "탄죠오비 오메데토오",
              "meaning": "생일 축하해."
            }
          ]
        }
      ],
      [
        "ありがとう",
        "ありがとう",
        "아리가토오",
        "고마워",
        {
          "id": "interj_10",
          "level": "N5",
          "examples": [
            {
              "jp": "手伝ってくれてありがとう。",
              "hira": "てつだってくれてありがとう。",
              "pronunciation": "테츠닷테 쿠레테 아리가토오",
              "meaning": "도와줘서 고마워."
            }
          ]
        }
      ],
      [
        "ごめん",
        "ごめん",
        "고멘",
        "미안",
        {
          "id": "interj_11",
          "level": "N5",
          "examples": [
            {
              "jp": "遅れてごめん。",
              "hira": "おくれてごめん。",
              "pronunciation": "오쿠레테 고멘",
              "meaning": "늦어서 미안해."
            }
          ]
        }
      ]
    ]
  },
  "의성어·의태어": {
    "일상": [
      [
        "わくわく",
        "わくわく",
        "와쿠와쿠",
        "두근두근 / 기대되어 설레는 모양",
        {
          "id": "mimetic_0",
          "level": "N5",
          "examples": [
            {
              "jp": "旅行が楽しみでわくわくしています。",
              "hira": "りょこうがたのしみでわくわくしています。",
              "pronunciation": "료코오가 타노시미데 와쿠와쿠시테이마스",
              "meaning": "여행이 기대돼서 두근두근하고 있어요."
            }
          ]
        }
      ],
      [
        "どきどき",
        "どきどき",
        "도키도키",
        "두근두근 / 긴장되는 모양",
        {
          "id": "mimetic_1",
          "level": "N5",
          "examples": [
            {
              "jp": "試験の前はどきどきします。",
              "hira": "しけんのまえはどきどきします。",
              "pronunciation": "시켄노 마에와 도키도키시마스",
              "meaning": "시험 전에는 두근두근해요."
            }
          ]
        }
      ],
      [
        "にこにこ",
        "にこにこ",
        "니코니코",
        "싱글벙글",
        {
          "id": "mimetic_2",
          "level": "N5",
          "examples": [
            {
              "jp": "彼はいつもにこにこしています。",
              "hira": "かれはいつもにこにこしています。",
              "pronunciation": "카레와 이츠모 니코니코시테이마스",
              "meaning": "그는 항상 싱글벙글하고 있어요."
            }
          ]
        }
      ],
      [
        "にやにや",
        "にやにや",
        "니야니야",
        "히죽히죽",
        {
          "id": "mimetic_3",
          "level": "N5",
          "examples": [
            {
              "jp": "彼は何を考えているのか、にやにやしています。",
              "hira": "かれはなにをかんがえているのか、にやにやしています。",
              "pronunciation": "카레와 나니오 칸가에테이루노카, 니야니야시테이마스",
              "meaning": "그는 무슨 생각을 하는지 히죽히죽하고 있어요."
            }
          ]
        }
      ],
      [
        "しっかり",
        "しっかり",
        "싯카리",
        "단단히 / 확실히",
        {
          "id": "mimetic_4",
          "level": "N5",
          "examples": [
            {
              "jp": "しっかり勉強してください。",
              "hira": "しっかりべんきょうしてください。",
              "pronunciation": "싯카리 벤쿄오시테 쿠다사이",
              "meaning": "열심히 공부하세요."
            }
          ]
        }
      ],
      [
        "ゆっくり",
        "ゆっくり",
        "윳쿠리",
        "천천히 / 느긋하게",
        {
          "id": "mimetic_5",
          "level": "N5",
          "examples": [
            {
              "jp": "ゆっくり話してください。",
              "hira": "ゆっくりはなしてください。",
              "pronunciation": "윳쿠리 하나시테 쿠다사이",
              "meaning": "천천히 말해 주세요."
            }
          ]
        }
      ],
      [
        "ぐっすり",
        "ぐっすり",
        "굿스리",
        "푹 / 깊이",
        {
          "id": "mimetic_6",
          "level": "N5",
          "examples": [
            {
              "jp": "昨夜はぐっすり眠りました。",
              "hira": "さくやはぐっすりねむりました。",
              "pronunciation": "사쿠야와 굿스리 네무리마시타",
              "meaning": "어젯밤에는 푹 잤어요."
            }
          ]
        }
      ],
      [
        "ぺこぺこ",
        "ぺこぺこ",
        "페코페코",
        "배가 몹시 고픈 모양",
        {
          "id": "mimetic_7",
          "level": "N5",
          "examples": [
            {
              "jp": "お腹がぺこぺこです。",
              "hira": "おなかがぺこぺこです。",
              "pronunciation": "오나카가 페코페코데스",
              "meaning": "배가 너무 고파요."
            }
          ]
        }
      ],
      [
        "ぴかぴか",
        "ぴかぴか",
        "피카피카",
        "반짝반짝 / 윤이 나는 모양",
        {
          "id": "mimetic_8",
          "level": "N5",
          "examples": [
            {
              "jp": "靴をぴかぴかにしました。",
              "hira": "くつをぴかぴかにしました。",
              "pronunciation": "쿠츠오 피카피카니 시마시타",
              "meaning": "신발을 반짝반짝하게 닦았어요."
            }
          ]
        }
      ],
      [
        "ぐちゃぐちゃ",
        "ぐちゃぐちゃ",
        "구차구차",
        "엉망진창",
        {
          "id": "mimetic_9",
          "level": "N5",
          "examples": [
            {
              "jp": "机の上がぐちゃぐちゃです。",
              "hira": "つくえのうえがぐちゃぐちゃです。",
              "pronunciation": "츠쿠에노 우에가 구차구차데스",
              "meaning": "책상 위가 엉망이에요."
            }
          ]
        }
      ],
      [
        "ばらばら",
        "ばらばら",
        "바라바라",
        "뿔뿔이 / 따로따로",
        {
          "id": "mimetic_10",
          "level": "N5",
          "examples": [
            {
              "jp": "みんなばらばらに帰りました。",
              "hira": "みんなばらばらにかえりました。",
              "pronunciation": "민나 바라바라니 카에리마시타",
              "meaning": "모두 뿔뿔이 돌아갔어요."
            }
          ]
        }
      ],
      [
        "ぴったり",
        "ぴったり",
        "핏타리",
        "딱 맞게 / 꼭 맞게",
        {
          "id": "mimetic_11",
          "level": "N5",
          "examples": [
            {
              "jp": "この靴はサイズがぴったりです。",
              "hira": "このくつはサイズがぴったりです。",
              "pronunciation": "코노 쿠츠와 사이즈가 핏타리데스",
              "meaning": "이 신발은 사이즈가 딱 맞아요."
            }
          ]
        }
      ],
      [
        "はっきり",
        "はっきり",
        "핫키리",
        "분명히 / 뚜렷하게",
        {
          "id": "mimetic_12",
          "level": "N5",
          "examples": [
            {
              "jp": "はっきり言ってください。",
              "hira": "はっきりいってください。",
              "pronunciation": "핫키리 잇테 쿠다사이",
              "meaning": "분명하게 말해 주세요."
            }
          ]
        }
      ],
      [
        "そっと",
        "そっと",
        "솟토",
        "살며시 / 조용히",
        {
          "id": "mimetic_13",
          "level": "N5",
          "examples": [
            {
              "jp": "ドアをそっと閉めました。",
              "hira": "ドアをそっとしめました。",
              "pronunciation": "도아오 솟토 시메마시타",
              "meaning": "문을 살며시 닫았어요."
            }
          ]
        }
      ],
      [
        "どんどん",
        "どんどん",
        "돈돈",
        "점점 / 계속해서",
        {
          "id": "mimetic_14",
          "level": "N5",
          "examples": [
            {
              "jp": "日本語がどんどん上手になっています。",
              "hira": "にほんごがどんどんじょうずになっています。",
              "pronunciation": "니혼고가 돈돈 죠오즈니 낫테이마스",
              "meaning": "일본어가 점점 능숙해지고 있어요."
            }
          ]
        }
      ]
    ]
  },
  "복합어": {
    "일상 복합어": [
      [
        "食べ物",
        "たべもの",
        "타베모노",
        "음식",
        {
          "id": "compound_0",
          "level": "N4",
          "examples": [
            {
              "jp": "日本の食べ物が好きです。",
              "hira": "にほんのたべものがすきです。",
              "pronunciation": "니혼노 타베모노가 스키데스",
              "meaning": "일본 음식을 좋아해요."
            }
          ]
        }
      ],
      [
        "飲み物",
        "のみもの",
        "노미모노",
        "음료",
        {
          "id": "compound_1",
          "level": "N4",
          "examples": [
            {
              "jp": "飲み物は何にしますか。",
              "hira": "のみものはなににしますか。",
              "pronunciation": "노미모노와 나니니 시마스카",
              "meaning": "음료는 무엇으로 하실래요?"
            }
          ]
        }
      ],
      [
        "買い物",
        "かいもの",
        "카이모노",
        "쇼핑 / 장보기",
        {
          "id": "compound_2",
          "level": "N4",
          "examples": [
            {
              "jp": "週末に買い物をします。",
              "hira": "しゅうまつにかいものをします。",
              "pronunciation": "슈우마츠니 카이모노오 시마스",
              "meaning": "주말에 쇼핑해요."
            }
          ]
        }
      ],
      [
        "乗り物",
        "のりもの",
        "노리모노",
        "탈것 / 교통수단",
        {
          "id": "compound_3",
          "level": "N4",
          "examples": [
            {
              "jp": "この乗り物は便利です。",
              "hira": "こののりものはべんりです。",
              "pronunciation": "코노 노리모노와 벤리데스",
              "meaning": "이 교통수단은 편리해요."
            }
          ]
        }
      ],
      [
        "忘れ物",
        "わすれもの",
        "와스레모노",
        "두고 온 물건 / 분실물",
        {
          "id": "compound_4",
          "level": "N4",
          "examples": [
            {
              "jp": "電車に忘れ物をしました。",
              "hira": "でんしゃにわすれものをしました。",
              "pronunciation": "덴샤니 와스레모노오 시마시타",
              "meaning": "전철에 물건을 두고 내렸어요."
            }
          ]
        }
      ],
      [
        "入口",
        "いりぐち",
        "이리구치",
        "입구",
        {
          "id": "compound_5",
          "level": "N4",
          "examples": [
            {
              "jp": "入口はあちらです。",
              "hira": "いりぐちはあちらです。",
              "pronunciation": "이리구치와 아치라데스",
              "meaning": "입구는 저쪽이에요."
            }
          ]
        }
      ],
      [
        "出口",
        "でぐち",
        "데구치",
        "출구",
        {
          "id": "compound_6",
          "level": "N4",
          "examples": [
            {
              "jp": "出口はどこですか。",
              "hira": "でぐちはどこですか。",
              "pronunciation": "데구치와 도코데스카",
              "meaning": "출구는 어디예요?"
            }
          ]
        }
      ],
      [
        "受付",
        "うけつけ",
        "우케츠케",
        "접수처 / 접수",
        {
          "id": "compound_7",
          "level": "N4",
          "examples": [
            {
              "jp": "受付で名前を書いてください。",
              "hira": "うけつけでなまえをかいてください。",
              "pronunciation": "우케츠케데 나마에오 카이테 쿠다사이",
              "meaning": "접수처에서 이름을 써 주세요."
            }
          ]
        }
      ],
      [
        "電気代",
        "でんきだい",
        "덴키다이",
        "전기요금",
        {
          "id": "compound_8",
          "level": "N4",
          "examples": [
            {
              "jp": "今月の電気代が高いです。",
              "hira": "こんげつのでんきだいがたかいです。",
              "pronunciation": "콘게츠노 덴키다이가 타카이데스",
              "meaning": "이번 달 전기요금이 비싸요."
            }
          ]
        }
      ],
      [
        "駅前",
        "えきまえ",
        "에키마에",
        "역 앞",
        {
          "id": "compound_9",
          "level": "N4",
          "examples": [
            {
              "jp": "駅前で待っています。",
              "hira": "えきまえでまっています。",
              "pronunciation": "에키마에데 맛테이마스",
              "meaning": "역 앞에서 기다리고 있어요."
            }
          ]
        }
      ],
      [
        "駅員",
        "えきいん",
        "에키인",
        "역무원",
        {
          "id": "compound_10",
          "level": "N4",
          "examples": [
            {
              "jp": "駅員さんに聞いてください。",
              "hira": "えきいんさんにきいてください。",
              "pronunciation": "에키인상니 키이테 쿠다사이",
              "meaning": "역무원에게 물어보세요."
            }
          ]
        }
      ],
      [
        "会社員",
        "かいしゃいん",
        "카이샤인",
        "회사원",
        {
          "id": "compound_11",
          "level": "N4",
          "examples": [
            {
              "jp": "父は会社員です。",
              "hira": "ちちはかいしゃいんです。",
              "pronunciation": "치치와 카이샤인데스",
              "meaning": "아버지는 회사원이에요."
            }
          ]
        }
      ],
      [
        "大学院生",
        "だいがくいんせい",
        "다이가쿠인세이",
        "대학원생",
        {
          "id": "compound_12",
          "level": "N4",
          "examples": [
            {
              "jp": "兄は大学院生です。",
              "hira": "あにはだいがくいんせいです。",
              "pronunciation": "아니와 다이가쿠인세이데스",
              "meaning": "형은 대학원생이에요."
            }
          ]
        }
      ],
      [
        "日本語学習",
        "にほんごがくしゅう",
        "니혼고 가쿠슈우",
        "일본어 학습",
        {
          "id": "compound_13",
          "level": "N4",
          "examples": [
            {
              "jp": "日本語学習を続けています。",
              "hira": "にほんごがくしゅうをつづけています。",
              "pronunciation": "니혼고 가쿠슈우오 츠즈케테이마스",
              "meaning": "일본어 공부를 계속하고 있어요."
            }
          ]
        }
      ]
    ]
  },
  "관용표현": {
    "자주 쓰는 표현": [
      [
        "気をつける",
        "きをつける",
        "키오 츠케루",
        "조심하다",
        {
          "id": "idiom_0",
          "level": "N4",
          "examples": [
            {
              "jp": "体に気をつけてください。",
              "hira": "からだにきをつけてください。",
              "pronunciation": "카라다니 키오 츠케테 쿠다사이",
              "meaning": "몸 조심하세요."
            }
          ]
        }
      ],
      [
        "気になる",
        "きになる",
        "키니 나루",
        "신경 쓰이다 / 궁금하다",
        {
          "id": "idiom_1",
          "level": "N4",
          "examples": [
            {
              "jp": "そのニュースが気になります。",
              "hira": "そのニュースがきになります。",
              "pronunciation": "소노 뉴우스가 키니 나리마스",
              "meaning": "그 뉴스가 신경 쓰여요."
            }
          ]
        }
      ],
      [
        "気にする",
        "きにする",
        "키니 스루",
        "신경 쓰다",
        {
          "id": "idiom_2",
          "level": "N4",
          "examples": [
            {
              "jp": "そんなことを気にしないで。",
              "hira": "そんなことをきにしないで。",
              "pronunciation": "손나 코토오 키니 시나이데",
              "meaning": "그런 건 신경 쓰지 마."
            }
          ]
        }
      ],
      [
        "役に立つ",
        "やくにたつ",
        "야쿠니 타츠",
        "도움이 되다",
        {
          "id": "idiom_3",
          "level": "N4",
          "examples": [
            {
              "jp": "この本は勉強に役に立ちます。",
              "hira": "このほんはべんきょうにやくにたちます。",
              "pronunciation": "코노 혼와 벤쿄오니 야쿠니 타치마스",
              "meaning": "이 책은 공부에 도움이 돼요."
            }
          ]
        }
      ],
      [
        "間に合う",
        "まにあう",
        "마니아우",
        "시간에 맞다",
        {
          "id": "idiom_4",
          "level": "N4",
          "examples": [
            {
              "jp": "電車に間に合いました。",
              "hira": "でんしゃにまにあいました。",
              "pronunciation": "덴샤니 마니아이마시타",
              "meaning": "전철 시간에 맞췄어요."
            }
          ]
        }
      ],
      [
        "間違える",
        "まちがえる",
        "마치가에루",
        "잘못하다 / 틀리다",
        {
          "id": "idiom_5",
          "level": "N4",
          "examples": [
            {
              "jp": "答えを間違えました。",
              "hira": "こたえをまちがえました。",
              "pronunciation": "코타에오 마치가에마시타",
              "meaning": "답을 틀렸어요."
            }
          ]
        }
      ],
      [
        "気に入る",
        "きにいる",
        "키니 이루",
        "마음에 들다",
        {
          "id": "idiom_6",
          "level": "N4",
          "examples": [
            {
              "jp": "この靴が気に入りました。",
              "hira": "このくつがきにいりました。",
              "pronunciation": "코노 쿠츠가 키니 이리마시타",
              "meaning": "이 신발이 마음에 들었어요."
            }
          ]
        }
      ],
      [
        "世話になる",
        "せわになる",
        "세와니 나루",
        "신세를 지다",
        {
          "id": "idiom_7",
          "level": "N4",
          "examples": [
            {
              "jp": "いろいろお世話になりました。",
              "hira": "いろいろおせわになりました。",
              "pronunciation": "이로이로 오세와니 나리마시타",
              "meaning": "여러모로 신세 많이 졌습니다."
            }
          ]
        }
      ],
      [
        "久しぶり",
        "ひさしぶり",
        "히사시부리",
        "오랜만",
        {
          "id": "idiom_8",
          "level": "N4",
          "examples": [
            {
              "jp": "久しぶりですね。元気でしたか。",
              "hira": "ひさしぶりですね。げんきでしたか。",
              "pronunciation": "히사시부리데스네. 겐키데시타카",
              "meaning": "오랜만이네요. 잘 지냈어요?"
            }
          ]
        }
      ],
      [
        "お大事に",
        "おだいじに",
        "오다이지니",
        "몸조리 잘하세요",
        {
          "id": "idiom_9",
          "level": "N4",
          "examples": [
            {
              "jp": "風邪ですか。お大事に。",
              "hira": "かぜですか。おだいじに。",
              "pronunciation": "카제데스카. 오다이지니",
              "meaning": "감기예요? 몸조리 잘하세요."
            }
          ]
        }
      ],
      [
        "よろしくお願いします",
        "よろしくおねがいします",
        "요로시쿠 오네가이시마스",
        "잘 부탁드립니다",
        {
          "id": "idiom_10",
          "level": "N4",
          "examples": [
            {
              "jp": "これからよろしくお願いします。",
              "hira": "これからよろしくおねがいします。",
              "pronunciation": "코레카라 요로시쿠 오네가이시마스",
              "meaning": "앞으로 잘 부탁드립니다."
            }
          ]
        }
      ],
      [
        "お元気で",
        "おげんきで",
        "오겐키데",
        "건강하게 잘 지내세요",
        {
          "id": "idiom_11",
          "level": "N4",
          "examples": [
            {
              "jp": "また会う日まで、お元気で。",
              "hira": "またあうひまで、おげんきで。",
              "pronunciation": "마타 아우 히마데, 오겐키데",
              "meaning": "다시 만나는 날까지 건강하게 지내세요."
            }
          ]
        }
      ]
    ]
  },
  "동사 활용·심화": {
    "가능형": [
      [
        "～られる",
        "～られる",
        "니혼고가 하나세마스",
        "~할 수 있다",
        {
          "id": "verbposs_0",
          "level": "N4",
          "meta": {
            "pattern": "2그룹 동사 る → られる / 1그룹은 어간 변화"
          },
          "examples": [
            {
              "jp": "日本語が話せます。",
              "hira": "にほんごがはなせます。",
              "pronunciation": "니혼고가 하나세마스",
              "meaning": "일본어를 말할 수 있어요."
            }
          ]
        }
      ],
      [
        "～える / ～う",
        "～える / ～う",
        "코노 지가 요메마스",
        "~할 수 있다",
        {
          "id": "verbposs_1",
          "level": "N4",
          "meta": {
            "pattern": "1그룹 가능형"
          },
          "examples": [
            {
              "jp": "この字が読めます。",
              "hira": "このじがよめます。",
              "pronunciation": "코노 지가 요메마스",
              "meaning": "이 글자를 읽을 수 있어요."
            }
          ]
        }
      ],
      [
        "～できる",
        "～できる",
        "니혼고가 데키마스",
        "~할 수 있다",
        {
          "id": "verbposs_2",
          "level": "N4",
          "meta": {
            "pattern": "명사 + できる / する동사 가능 표현"
          },
          "examples": [
            {
              "jp": "日本語ができます。",
              "hira": "にほんごができます。",
              "pronunciation": "니혼고가 데키마스",
              "meaning": "일본어를 할 수 있어요."
            }
          ]
        }
      ]
    ],
    "수동형": [
      [
        "～れる / ～られる",
        "～れる / ～られる",
        "센세이니 호메라레마시타",
        "~되다 / ~을 받다",
        {
          "id": "verbpass_0",
          "level": "N3",
          "meta": {
            "pattern": "동사 수동형"
          },
          "examples": [
            {
              "jp": "先生にほめられました。",
              "hira": "せんせいにほめられました。",
              "pronunciation": "센세이니 호메라레마시타",
              "meaning": "선생님에게 칭찬받았어요."
            }
          ]
        }
      ],
      [
        "～に～られる",
        "～に～られる",
        "토모다치니 와라와레마시타",
        "~에게 ~당하다",
        {
          "id": "verbpass_1",
          "level": "N3",
          "meta": {
            "pattern": "타동사 수동형"
          },
          "examples": [
            {
              "jp": "友達に笑われました。",
              "hira": "ともだちにわらわれました。",
              "pronunciation": "토모다치니 와라와레마시타",
              "meaning": "친구에게 비웃음을 당했어요."
            }
          ]
        }
      ]
    ],
    "사역형": [
      [
        "～せる / ～させる",
        "～せる / ～させる",
        "하하와 코도모니 야사이오 타베사세마시타",
        "~하게 하다 / 시키다",
        {
          "id": "verbcaus_0",
          "level": "N3",
          "meta": {
            "pattern": "동사 사역형"
          },
          "examples": [
            {
              "jp": "母は子どもに野菜を食べさせました。",
              "hira": "はははこどもにやさいをたべさせました。",
              "pronunciation": "하하와 코도모니 야사이오 타베사세마시타",
              "meaning": "어머니는 아이에게 채소를 먹게 했어요."
            }
          ]
        }
      ],
      [
        "～させてください",
        "～させてください",
        "와타시니모 야라세테 쿠다사이",
        "~하게 해 주세요",
        {
          "id": "verbcaus_1",
          "level": "N3",
          "meta": {
            "pattern": "사역형 + ください"
          },
          "examples": [
            {
              "jp": "私にもやらせてください。",
              "hira": "わたしにもやらせてください。",
              "pronunciation": "와타시니모 야라세테 쿠다사이",
              "meaning": "저도 하게 해 주세요."
            }
          ]
        }
      ]
    ],
    "의지·명령·금지": [
      [
        "～よう",
        "～よう",
        "잇쇼니 이코오",
        "~하자 / ~할까",
        {
          "id": "verbmood_0",
          "level": "N4",
          "meta": {
            "pattern": "동사 의지형"
          },
          "examples": [
            {
              "jp": "一緒に行こう。",
              "hira": "いっしょにいこう。",
              "pronunciation": "잇쇼니 이코오",
              "meaning": "같이 가자."
            }
          ]
        }
      ],
      [
        "～なさい",
        "～なさい",
        "하야쿠 네나사이",
        "~하세요",
        {
          "id": "verbmood_1",
          "level": "N4",
          "meta": {
            "pattern": "동사 ます형 어간 + なさい"
          },
          "examples": [
            {
              "jp": "早く寝なさい。",
              "hira": "はやくねなさい。",
              "pronunciation": "하야쿠 네나사이",
              "meaning": "빨리 자렴."
            }
          ]
        }
      ],
      [
        "～な",
        "～な",
        "코코니 하이루나",
        "~하지 마",
        {
          "id": "verbmood_2",
          "level": "N4",
          "meta": {
            "pattern": "동사 사전형 + な"
          },
          "examples": [
            {
              "jp": "ここに入るな。",
              "hira": "ここにはいるな。",
              "pronunciation": "코코니 하이루나",
              "meaning": "여기에 들어오지 마."
            }
          ]
        }
      ]
    ]
  },
  "경어": {
    "존경어·겸양어": [
      [
        "いらっしゃる",
        "いらっしゃる",
        "이라샤루",
        "오시다 / 가시다 / 계시다 (존경어)",
        {
          "id": "honor_0",
          "level": "N3",
          "examples": [
            {
              "jp": "先生はいらっしゃいますか。",
              "hira": "せんせいはいらっしゃいますか。",
              "pronunciation": "센세이와 이랏샤이마스카",
              "meaning": "선생님 계세요?"
            }
          ]
        }
      ],
      [
        "召し上がる",
        "めしあがる",
        "메시아가루",
        "드시다 (존경어)",
        {
          "id": "honor_1",
          "level": "N3",
          "examples": [
            {
              "jp": "どうぞ召し上がってください。",
              "hira": "どうぞめしあがってください。",
              "pronunciation": "도오조 메시아갓테 쿠다사이",
              "meaning": "맛있게 드세요."
            }
          ]
        }
      ],
      [
        "おっしゃる",
        "おっしゃる",
        "옷샤루",
        "말씀하시다 (존경어)",
        {
          "id": "honor_2",
          "level": "N3",
          "examples": [
            {
              "jp": "先生は何とおっしゃいましたか。",
              "hira": "せんせいはなんとおっしゃいましたか。",
              "pronunciation": "센세이와 난토 옷샤이마시타카",
              "meaning": "선생님께서 뭐라고 말씀하셨어요?"
            }
          ]
        }
      ],
      [
        "ご覧になる",
        "ごらんになる",
        "고란니 나루",
        "보시다 (존경어)",
        {
          "id": "honor_3",
          "level": "N3",
          "examples": [
            {
              "jp": "こちらをご覧ください。",
              "hira": "こちらをごらんください。",
              "pronunciation": "코치라오 고란 쿠다사이",
              "meaning": "이쪽을 봐 주세요."
            }
          ]
        }
      ],
      [
        "お休みになる",
        "おやすみになる",
        "오야스미니 나루",
        "주무시다 (존경어)",
        {
          "id": "honor_4",
          "level": "N3",
          "examples": [
            {
              "jp": "先生はもうお休みになりました。",
              "hira": "せんせいはもうおやすみになりました。",
              "pronunciation": "센세이와 모오 오야스미니 나리마시타",
              "meaning": "선생님은 이미 주무셨어요."
            }
          ]
        }
      ],
      [
        "おいでになる",
        "おいでになる",
        "오이데니 나루",
        "오시다 / 가시다 / 계시다 (존경어)",
        {
          "id": "honor_5",
          "level": "N3",
          "examples": [
            {
              "jp": "社長はいつおいでになりますか。",
              "hira": "しゃちょうはいつおいでになりますか。",
              "pronunciation": "샤쵸오와 이츠 오이데니 나리마스카",
              "meaning": "사장님은 언제 오세요?"
            }
          ]
        }
      ],
      [
        "くださる",
        "くださる",
        "쿠다사루",
        "주시다 (존경어)",
        {
          "id": "honor_6",
          "level": "N3",
          "examples": [
            {
              "jp": "先生が本をくださいました。",
              "hira": "せんせいがほんをくださいました。",
              "pronunciation": "센세이가 혼오 쿠다사이마시타",
              "meaning": "선생님께서 책을 주셨어요."
            }
          ]
        }
      ],
      [
        "なさる",
        "なさる",
        "나사루",
        "하시다 (존경어)",
        {
          "id": "honor_7",
          "level": "N3",
          "examples": [
            {
              "jp": "何をなさっていますか。",
              "hira": "なにをなさっていますか。",
              "pronunciation": "나니오 나사앗테이마스카",
              "meaning": "무엇을 하고 계세요?"
            }
          ]
        }
      ],
      [
        "いたす",
        "いたす",
        "이타스",
        "하다 (겸양어)",
        {
          "id": "honor_8",
          "level": "N3",
          "examples": [
            {
              "jp": "私がいたします。",
              "hira": "わたしがいたします。",
              "pronunciation": "와타시가 이타시마스",
              "meaning": "제가 하겠습니다."
            }
          ]
        }
      ],
      [
        "申す",
        "もうす",
        "모오스",
        "말씀드리다 / ~라고 하다 (겸양어)",
        {
          "id": "honor_9",
          "level": "N3",
          "examples": [
            {
              "jp": "田中と申します。",
              "hira": "たなかともうします。",
              "pronunciation": "타나카토 모오시마스",
              "meaning": "다나카라고 합니다."
            }
          ]
        }
      ],
      [
        "伺う",
        "うかがう",
        "우카가우",
        "여쭙다 / 찾아뵙다 (겸양어)",
        {
          "id": "honor_10",
          "level": "N3",
          "examples": [
            {
              "jp": "明日、会社に伺います。",
              "hira": "あした、かいしゃにうかがいます。",
              "pronunciation": "아시타, 카이샤니 우카가이마스",
              "meaning": "내일 회사로 찾아뵙겠습니다."
            }
          ]
        }
      ],
      [
        "参る",
        "まいる",
        "마이루",
        "가다 / 오다 (겸양어)",
        {
          "id": "honor_11",
          "level": "N3",
          "examples": [
            {
              "jp": "明日そちらへ参ります。",
              "hira": "あしたそちらへまいります。",
              "pronunciation": "아시타 소치라에 마이리마스",
              "meaning": "내일 그쪽으로 가겠습니다."
            }
          ]
        }
      ],
      [
        "いただく",
        "いただく",
        "이타다쿠",
        "받다 / 먹다 (겸양어)",
        {
          "id": "honor_12",
          "level": "N3",
          "examples": [
            {
              "jp": "ありがとうございます。いただきます。",
              "hira": "ありがとうございます。いただきます。",
              "pronunciation": "아리가토오 고자이마스. 이타다키마스",
              "meaning": "감사합니다. 잘 먹겠습니다."
            }
          ]
        }
      ],
      [
        "存じる",
        "ぞんじる",
        "존지루",
        "알다 (겸양어)",
        {
          "id": "honor_13",
          "level": "N3",
          "examples": [
            {
              "jp": "そのことは存じません。",
              "hira": "そのことはぞんじません。",
              "pronunciation": "소노 코토와 존지마센",
              "meaning": "그 일은 알지 못합니다."
            }
          ]
        }
      ],
      [
        "お目にかかる",
        "おめにかかる",
        "오메니 카카루",
        "뵙다 (겸양어)",
        {
          "id": "honor_14",
          "level": "N3",
          "examples": [
            {
              "jp": "お目にかかれてうれしいです。",
              "hira": "おめにかかれてうれしいです。",
              "pronunciation": "오메니 카카레테 우레시이데스",
              "meaning": "뵙게 되어 기쁩니다."
            }
          ]
        }
      ],
      [
        "よろしくお願いいたします",
        "よろしくおねがいいたします",
        "요로시쿠 오네가이이타시마스",
        "잘 부탁드립니다 (격식 있는 표현)",
        {
          "id": "honor_15",
          "level": "N3",
          "examples": [
            {
              "jp": "今後ともよろしくお願いいたします。",
              "hira": "こんごともよろしくおねがいいたします。",
              "pronunciation": "콘고토모 요로시쿠 오네가이이타시마스",
              "meaning": "앞으로도 잘 부탁드립니다."
            }
          ]
        }
      ],
      [
        "失礼いたします",
        "しつれいいたします",
        "시츠레이 이타시마스",
        "실례하겠습니다 (격식)",
        {
          "id": "honor_16",
          "level": "N3",
          "examples": [
            {
              "jp": "それでは、失礼いたします。",
              "hira": "それでは、しつれいいたします。",
              "pronunciation": "소레데와, 시츠레이 이타시마스",
              "meaning": "그럼 이만 실례하겠습니다."
            }
          ]
        }
      ]
    ]
  },
  "접두사·접미사": {
    "자주 쓰는 접사": [
      [
        "お～",
        "お～",
        "오~",
        "말을 공손하게 만드는 접두사",
        {
          "id": "affix_0",
          "level": "N4",
          "examples": [
            {
              "jp": "お名前を教えてください。",
              "hira": "おなまえをおしえてください。",
              "pronunciation": "오나마에오 오시에테 쿠다사이",
              "meaning": "성함을 알려 주세요."
            }
          ]
        }
      ],
      [
        "ご～",
        "ご～",
        "고~",
        "한자어에 붙여 공손하게 만드는 접두사",
        {
          "id": "affix_1",
          "level": "N4",
          "examples": [
            {
              "jp": "ご家族はお元気ですか。",
              "hira": "ごかぞくはおげんきですか。",
              "pronunciation": "고카조쿠와 오겐키데스카",
              "meaning": "가족분들은 잘 지내세요?"
            }
          ]
        }
      ],
      [
        "～さん",
        "～さん",
        "~상",
        "이름 뒤에 붙이는 기본 존칭",
        {
          "id": "affix_2",
          "level": "N4",
          "examples": [
            {
              "jp": "田中さんは先生です。",
              "hira": "たなかさんはせんせいです。",
              "pronunciation": "타나카상와 센세이데스",
              "meaning": "다나카 씨는 선생님이에요."
            }
          ]
        }
      ],
      [
        "～ちゃん",
        "～ちゃん",
        "~짱",
        "친근함을 나타내는 호칭",
        {
          "id": "affix_3",
          "level": "N4",
          "examples": [
            {
              "jp": "子どもにちゃん付けで呼びます。",
              "hira": "こどもにちゃんづけでよびます。",
              "pronunciation": "코도모니 찬즈케데 요비마스",
              "meaning": "아이를 ~짱을 붙여 불러요."
            }
          ]
        }
      ],
      [
        "～くん",
        "～くん",
        "~군",
        "주로 남성 이름 등에 붙이는 호칭",
        {
          "id": "affix_4",
          "level": "N4",
          "examples": [
            {
              "jp": "田中くんは学生です。",
              "hira": "たなかくんはがくせいです。",
              "pronunciation": "타나카쿤와 가쿠세이데스",
              "meaning": "다나카 군은 학생이에요."
            }
          ]
        }
      ],
      [
        "～人",
        "～じん",
        "~진",
        "~사람 / 국적을 나타내는 접미사",
        {
          "id": "affix_5",
          "level": "N4",
          "examples": [
            {
              "jp": "私は韓国人です。",
              "hira": "わたしはかんこくじんです。",
              "pronunciation": "와타시와 칸코쿠진데스",
              "meaning": "저는 한국인이에요."
            }
          ]
        }
      ],
      [
        "～者",
        "～しゃ",
        "~샤",
        "~하는 사람 / 직업·행위자를 나타내는 접미사",
        {
          "id": "affix_6",
          "level": "N4",
          "examples": [
            {
              "jp": "参加者を確認します。",
              "hira": "さんかしゃをかくにんします。",
              "pronunciation": "산카샤오 카쿠닌시마스",
              "meaning": "참가자를 확인합니다."
            }
          ]
        }
      ],
      [
        "～的",
        "～てき",
        "~테키",
        "~적인",
        {
          "id": "affix_7",
          "level": "N4",
          "examples": [
            {
              "jp": "日本的な考え方です。",
              "hira": "にほんてきなかんがえかたです。",
              "pronunciation": "니혼테키나 칸가에카타데스",
              "meaning": "일본적인 사고방식이에요."
            }
          ]
        }
      ],
      [
        "～化",
        "～か",
        "~카",
        "~화",
        {
          "id": "affix_8",
          "level": "N4",
          "examples": [
            {
              "jp": "生活の変化について話します。",
              "hira": "せいかつのへんかについてはなします。",
              "pronunciation": "세이카츠노 헨카니 츠이테 하나시마스",
              "meaning": "생활의 변화에 대해 이야기해요."
            }
          ]
        }
      ],
      [
        "～中",
        "～ちゅう",
        "~중",
        "~하는 중 / ~중",
        {
          "id": "affix_9",
          "level": "N4",
          "examples": [
            {
              "jp": "今、仕事中です。",
              "hira": "いま、しごとちゅうです。",
              "pronunciation": "이마, 시고토추우데스",
              "meaning": "지금 일하는 중이에요."
            }
          ]
        }
      ],
      [
        "～前",
        "～まえ",
        "~전",
        "~하기 전 / ~앞",
        {
          "id": "affix_10",
          "level": "N4",
          "examples": [
            {
              "jp": "出発前に確認します。",
              "hira": "しゅっぱつまえにかくにんします。",
              "pronunciation": "슛파츠마에니 카쿠닌시마스",
              "meaning": "출발 전에 확인합니다."
            }
          ]
        }
      ],
      [
        "～後",
        "～ご / あと",
        "~후",
        "~한 후",
        {
          "id": "affix_11",
          "level": "N4",
          "examples": [
            {
              "jp": "仕事後に食事します。",
              "hira": "しごとごにしょくじします。",
              "pronunciation": "시고토고니 쇼쿠지시마스",
              "meaning": "일이 끝난 후 식사해요."
            }
          ]
        }
      ]
    ]
  },
  "연어·자주 쓰는 조합": {
    "동사+명사": [
      [
        "写真を撮る",
        "しゃしんをとる",
        "샤신오 토루",
        "사진을 찍다",
        {
          "id": "colloc_0",
          "level": "N4",
          "examples": [
            {
              "jp": "旅行で写真をたくさん撮りました。",
              "hira": "りょこうでしゃしんをたくさんとりました。",
              "pronunciation": "료코오데 샤신오 타쿠산 토리마시타",
              "meaning": "여행에서 사진을 많이 찍었어요."
            }
          ]
        }
      ],
      [
        "予約をする",
        "よやくをする",
        "요야쿠오 스루",
        "예약하다",
        {
          "id": "colloc_1",
          "level": "N4",
          "examples": [
            {
              "jp": "ホテルを予約しました。",
              "hira": "ホテルをよやくしました。",
              "pronunciation": "호테루오 요야쿠시마시타",
              "meaning": "호텔을 예약했어요."
            }
          ]
        }
      ],
      [
        "電話をかける",
        "でんわをかける",
        "덴와오 카케루",
        "전화를 걸다",
        {
          "id": "colloc_2",
          "level": "N4",
          "examples": [
            {
              "jp": "後で電話をかけます。",
              "hira": "あとででんわをかけます。",
              "pronunciation": "아토데 덴와오 카케마스",
              "meaning": "나중에 전화할게요."
            }
          ]
        }
      ],
      [
        "電気をつける",
        "でんきをつける",
        "덴키오 츠케루",
        "불을 켜다",
        {
          "id": "colloc_3",
          "level": "N4",
          "examples": [
            {
              "jp": "部屋の電気をつけてください。",
              "hira": "へやのでんきをつけてください。",
              "pronunciation": "헤야노 덴키오 츠케테 쿠다사이",
              "meaning": "방 불을 켜 주세요."
            }
          ]
        }
      ],
      [
        "電気を消す",
        "でんきをけす",
        "덴키오 케스",
        "불을 끄다",
        {
          "id": "colloc_4",
          "level": "N4",
          "examples": [
            {
              "jp": "寝る前に電気を消します。",
              "hira": "ねるまえにでんきをけします。",
              "pronunciation": "네루 마에니 덴키오 케시마스",
              "meaning": "자기 전에 불을 꺼요."
            }
          ]
        }
      ],
      [
        "宿題をする",
        "しゅくだいをする",
        "슈쿠다이오 스루",
        "숙제하다",
        {
          "id": "colloc_5",
          "level": "N4",
          "examples": [
            {
              "jp": "宿題をしてから遊びます。",
              "hira": "しゅくだいをしてからあそびます。",
              "pronunciation": "슈쿠다이오 시테카라 아소비마스",
              "meaning": "숙제하고 나서 놀아요."
            }
          ]
        }
      ],
      [
        "買い物をする",
        "かいものをする",
        "카이모노오 스루",
        "쇼핑하다",
        {
          "id": "colloc_6",
          "level": "N4",
          "examples": [
            {
              "jp": "週末に買い物をします。",
              "hira": "しゅうまつにかいものをします。",
              "pronunciation": "슈우마츠니 카이모노오 시마스",
              "meaning": "주말에 쇼핑해요."
            }
          ]
        }
      ],
      [
        "料理を作る",
        "りょうりをつくる",
        "료오리오 츠쿠루",
        "요리하다",
        {
          "id": "colloc_7",
          "level": "N4",
          "examples": [
            {
              "jp": "家で料理を作ります。",
              "hira": "いえでりょうりをつくります。",
              "pronunciation": "이에데 료오리오 츠쿠리마스",
              "meaning": "집에서 요리해요."
            }
          ]
        }
      ],
      [
        "約束を守る",
        "やくそくをまもる",
        "야쿠소쿠오 마모루",
        "약속을 지키다",
        {
          "id": "colloc_8",
          "level": "N4",
          "examples": [
            {
              "jp": "約束を守ってください。",
              "hira": "やくそくをまもってください。",
              "pronunciation": "야쿠소쿠오 마못테 쿠다사이",
              "meaning": "약속을 지켜 주세요."
            }
          ]
        }
      ],
      [
        "時間を守る",
        "じかんをまもる",
        "지칸오 마모루",
        "시간을 지키다",
        {
          "id": "colloc_9",
          "level": "N4",
          "examples": [
            {
              "jp": "時間を守ることは大切です。",
              "hira": "じかんをまもることはたいせつです。",
              "pronunciation": "지칸오 마모루 코토와 타이세츠데스",
              "meaning": "시간을 지키는 것은 중요해요."
            }
          ]
        }
      ],
      [
        "気持ちを伝える",
        "きもちをつたえる",
        "키모치오 츠타에루",
        "마음을 전하다",
        {
          "id": "colloc_10",
          "level": "N4",
          "examples": [
            {
              "jp": "感謝の気持ちを伝えました。",
              "hira": "かんしゃのきもちをつたえました。",
              "pronunciation": "칸샤노 키모치오 츠타에마시타",
              "meaning": "감사의 마음을 전했어요."
            }
          ]
        }
      ],
      [
        "問題を解決する",
        "もんだいをかいけつする",
        "몬다이오 카이케츠스루",
        "문제를 해결하다",
        {
          "id": "colloc_11",
          "level": "N4",
          "examples": [
            {
              "jp": "問題を一緒に解決しましょう。",
              "hira": "もんだいをいっしょにかいけつしましょう。",
              "pronunciation": "몬다이오 잇쇼니 카이케츠시마쇼오",
              "meaning": "문제를 같이 해결해요."
            }
          ]
        }
      ],
      [
        "情報を確認する",
        "じょうほうをかくにんする",
        "죠오호오오 카쿠닌스루",
        "정보를 확인하다",
        {
          "id": "colloc_12",
          "level": "N4",
          "examples": [
            {
              "jp": "予約の情報を確認します。",
              "hira": "よやくのじょうほうをかくにんします。",
              "pronunciation": "요야쿠노 죠오호오오 카쿠닌시마스",
              "meaning": "예약 정보를 확인할게요."
            }
          ]
        }
      ],
      [
        "予定を立てる",
        "よていをたてる",
        "요테이오 타테루",
        "일정을 세우다",
        {
          "id": "colloc_13",
          "level": "N4",
          "examples": [
            {
              "jp": "旅行の予定を立てています。",
              "hira": "りょこうのよていをたてています。",
              "pronunciation": "료코오노 요테이오 타테테이마스",
              "meaning": "여행 일정을 짜고 있어요."
            }
          ]
        }
      ],
      [
        "注意する",
        "ちゅういする",
        "츄우이스루",
        "주의하다",
        {
          "id": "colloc_14",
          "level": "N4",
          "examples": [
            {
              "jp": "足元に注意してください。",
              "hira": "あしもとにちゅういしてください。",
              "pronunciation": "아시모토니 츄우이시테 쿠다사이",
              "meaning": "발밑을 조심하세요."
            }
          ]
        }
      ]
    ]
  },
  "외래어": {
    "일상 외래어": [
      [
        "コンビニ",
        "こんびに",
        "콘비니",
        "편의점",
        {
          "id": "loan_0",
          "level": "N5",
          "examples": [
            {
              "jp": "コンビニで水を買います。",
              "hira": "コンビニでみずをかいます。",
              "pronunciation": "콘비니데 미즈오 카이마스",
              "meaning": "편의점에서 물을 사요."
            }
          ]
        }
      ],
      [
        "スーパー",
        "すーぱー",
        "수우파아",
        "슈퍼마켓",
        {
          "id": "loan_1",
          "level": "N5",
          "examples": [
            {
              "jp": "スーパーで野菜を買いました。",
              "hira": "スーパーでやさいをかいました。",
              "pronunciation": "수우파아데 야사이오 카이마시타",
              "meaning": "슈퍼에서 채소를 샀어요."
            }
          ]
        }
      ],
      [
        "レストラン",
        "れすとらん",
        "레스토랑",
        "레스토랑",
        {
          "id": "loan_2",
          "level": "N5",
          "examples": [
            {
              "jp": "駅の近くにレストランがあります。",
              "hira": "えきのちかくにレストランがあります。",
              "pronunciation": "에키노 치카쿠니 레스토랑가 아리마스",
              "meaning": "역 근처에 레스토랑이 있어요."
            }
          ]
        }
      ],
      [
        "ホテル",
        "ほてる",
        "호테루",
        "호텔",
        {
          "id": "loan_3",
          "level": "N5",
          "examples": [
            {
              "jp": "ホテルを予約しました。",
              "hira": "ホテルをよやくしました。",
              "pronunciation": "호테루오 요야쿠시마시타",
              "meaning": "호텔을 예약했어요."
            }
          ]
        }
      ],
      [
        "スマートフォン",
        "すまーとふぉん",
        "스마아토폰",
        "스마트폰",
        {
          "id": "loan_4",
          "level": "N5",
          "examples": [
            {
              "jp": "スマートフォンで写真を撮ります。",
              "hira": "スマートフォンでしゃしんをとります。",
              "pronunciation": "스마아토폰데 샤신오 토리마스",
              "meaning": "스마트폰으로 사진을 찍어요."
            }
          ]
        }
      ],
      [
        "パソコン",
        "ぱそこん",
        "파소콘",
        "컴퓨터",
        {
          "id": "loan_5",
          "level": "N5",
          "examples": [
            {
              "jp": "パソコンで仕事をします。",
              "hira": "パソコンでしごとをします。",
              "pronunciation": "파소콘데 시고토오 시마스",
              "meaning": "컴퓨터로 일을 해요."
            }
          ]
        }
      ],
      [
        "メール",
        "めーる",
        "메에루",
        "이메일",
        {
          "id": "loan_6",
          "level": "N5",
          "examples": [
            {
              "jp": "メールを確認しました。",
              "hira": "メールをかくにんしました。",
              "pronunciation": "메에루오 카쿠닌시마시타",
              "meaning": "이메일을 확인했어요."
            }
          ]
        }
      ],
      [
        "メッセージ",
        "めっせーじ",
        "멧세에지",
        "메시지",
        {
          "id": "loan_7",
          "level": "N5",
          "examples": [
            {
              "jp": "メッセージを送りました。",
              "hira": "メッセージをおくりました。",
              "pronunciation": "멧세에지오 오쿠리마시타",
              "meaning": "메시지를 보냈어요."
            }
          ]
        }
      ],
      [
        "アプリ",
        "あぷり",
        "아푸리",
        "앱",
        {
          "id": "loan_8",
          "level": "N5",
          "examples": [
            {
              "jp": "新しいアプリを使っています。",
              "hira": "あたらしいアプリをつかっています。",
              "pronunciation": "아타라시이 아푸리오 츠캇테이마스",
              "meaning": "새 앱을 사용하고 있어요."
            }
          ]
        }
      ],
      [
        "ニュース",
        "にゅーす",
        "뉴우스",
        "뉴스",
        {
          "id": "loan_9",
          "level": "N5",
          "examples": [
            {
              "jp": "毎朝ニュースを見ます。",
              "hira": "まいあさニュースをみます。",
              "pronunciation": "마이아사 뉴우스오 미마스",
              "meaning": "매일 아침 뉴스를 봐요."
            }
          ]
        }
      ],
      [
        "チケット",
        "ちけっと",
        "치켓토",
        "티켓 / 표",
        {
          "id": "loan_10",
          "level": "N5",
          "examples": [
            {
              "jp": "チケットを二枚買いました。",
              "hira": "チケットをにまいかいました。",
              "pronunciation": "치켓토오 니마이 카이마시타",
              "meaning": "티켓을 두 장 샀어요."
            }
          ]
        }
      ]
    ]
  }
};
