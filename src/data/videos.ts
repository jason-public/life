export interface VideoItem {
  id: string;
  youtubeId: string;
  title: string;
  url: string;
  categories: string[];
  views: number;
  date: string;
  channel: string;
  tags: string[];
  thumbnail: string;
}

export const CATEGORIES = [
  "인생조언",
  "인간관계",
  "대화법",
  "동기부여",
  "자기계발",
  "마인드셋"
];

export const INITIAL_VIDEOS: VideoItem[] = [
  {
    "id": "1",
    "youtubeId": "T45Xy50f4p0",
    "title": "모든 함정은 작게 시작한다",
    "url": "https://youtube.com/shorts/T45Xy50f4p0",
    "categories": [
      "인간관계",
      "마인드셋",
      "인생조언",
      "동기부여",
      "자기계발"
    ],
    "views": 124239,
    "date": "2025. 4. 8.",
    "channel": "지혜의 등대",
    "tags": [
      "인간관계",
      "마인드셋",
      "인생조언",
      "동기부여",
      "자기계발"
    ],
    "thumbnail": "https://img.youtube.com/vi/T45Xy50f4p0/mqdefault.jpg"
  },
  {
    "id": "2",
    "youtubeId": "Fq6X6djF6og",
    "title": "독사가 가장 후회했던 단 한 번의 선택",
    "url": "https://youtube.com/shorts/Fq6X6djF6og",
    "categories": [
      "인간관계",
      "마인드셋",
      "인생조언",
      "동기부여",
      "자기계발"
    ],
    "views": 128478,
    "date": "2025. 7. 15.",
    "channel": "철학의 숲",
    "tags": [
      "인간관계",
      "마인드셋",
      "인생조언",
      "동기부여",
      "자기계발"
    ],
    "thumbnail": "https://img.youtube.com/vi/Fq6X6djF6og/mqdefault.jpg"
  },
  {
    "id": "3",
    "youtubeId": "MeTHtojeXkw",
    "title": "힘들어도 항상 정직해야 하는 이유",
    "url": "https://youtube.com/shorts/MeTHtojeXkw",
    "categories": [
      "인생조언"
    ],
    "views": 132717,
    "date": "2025. 10. 22.",
    "channel": "동기부여 연구소",
    "tags": [
      "인생조언"
    ],
    "thumbnail": "https://img.youtube.com/vi/MeTHtojeXkw/mqdefault.jpg"
  },
  {
    "id": "4",
    "youtubeId": "z-WBDqluAlY",
    "title": "어머니가 알려주신 지혜의 말씀",
    "url": "https://youtube.com/shorts/z-WBDqluAlY",
    "categories": [
      "인생조언"
    ],
    "views": 136956,
    "date": "2025. 1. 1.",
    "channel": "성공 마인드",
    "tags": [
      "인생조언"
    ],
    "thumbnail": "https://img.youtube.com/vi/z-WBDqluAlY/mqdefault.jpg"
  },
  {
    "id": "5",
    "youtubeId": "0Ln43omQlV4",
    "title": "니체가 죽기 직전까지 가장 후회했던 인간관계 여섯 가지 진실",
    "url": "https://youtube.com/shorts/0Ln43omQlV4",
    "categories": [
      "인간관계",
      "인생조언"
    ],
    "views": 141195,
    "date": "2025. 4. 8.",
    "channel": "처세술 가이드",
    "tags": [
      "인간관계",
      "인생조언"
    ],
    "thumbnail": "https://img.youtube.com/vi/0Ln43omQlV4/mqdefault.jpg"
  },
  {
    "id": "6",
    "youtubeId": "crhp23-tvRs",
    "title": "불안을 지우는 가장 빠른 방법",
    "url": "https://youtube.com/shorts/crhp23-tvRs",
    "categories": [
      "마인드셋"
    ],
    "views": 145434,
    "date": "2025. 7. 15.",
    "channel": "위로의 멜로디",
    "tags": [
      "마인드셋"
    ],
    "thumbnail": "https://img.youtube.com/vi/crhp23-tvRs/mqdefault.jpg"
  },
  {
    "id": "7",
    "youtubeId": "589TNz4dpcE",
    "title": "죽고 나면 아무 의미 없어지는 3가지",
    "url": "https://youtube.com/shorts/589TNz4dpcE",
    "categories": [
      "동기부여",
      "인간관계",
      "인생조언"
    ],
    "views": 149673,
    "date": "2025. 10. 22.",
    "channel": "인생학개론",
    "tags": [
      "동기부여",
      "인간관계",
      "인생조언"
    ],
    "thumbnail": "https://img.youtube.com/vi/589TNz4dpcE/mqdefault.jpg"
  },
  {
    "id": "8",
    "youtubeId": "PTWQ86blKXo",
    "title": "항상 집을 깨끗하게 유지하는 사람들의 소름 돋는 심리",
    "url": "https://youtube.com/shorts/PTWQ86blKXo",
    "categories": [
      "동기부여",
      "인간관계",
      "인생조언"
    ],
    "views": 153912,
    "date": "2025. 1. 1.",
    "channel": "지혜의 등대",
    "tags": [
      "동기부여",
      "인간관계",
      "인생조언"
    ],
    "thumbnail": "https://img.youtube.com/vi/PTWQ86blKXo/mqdefault.jpg"
  },
  {
    "id": "9",
    "youtubeId": "SZjYkJL_EpU",
    "title": "가난한 사람 99%가 가진 습관",
    "url": "https://youtube.com/shorts/SZjYkJL_EpU",
    "categories": [
      "자기계발",
      "동기부여",
      "인간관계",
      "인생조언"
    ],
    "views": 158151,
    "date": "2025. 4. 8.",
    "channel": "철학의 숲",
    "tags": [
      "자기계발",
      "동기부여",
      "인간관계",
      "인생조언"
    ],
    "thumbnail": "https://img.youtube.com/vi/SZjYkJL_EpU/mqdefault.jpg"
  },
  {
    "id": "10",
    "youtubeId": "3FEadcJGaMM",
    "title": "역대급 분노하는 추성훈",
    "url": "https://youtube.com/shorts/3FEadcJGaMM",
    "categories": [
      "동기부여"
    ],
    "views": 162390,
    "date": "2025. 7. 15.",
    "channel": "동기부여 연구소",
    "tags": [
      "동기부여"
    ],
    "thumbnail": "https://img.youtube.com/vi/3FEadcJGaMM/mqdefault.jpg"
  },
  {
    "id": "11",
    "youtubeId": "x1Z92vaD8yY",
    "title": "한동훈, 국회 본회의 참석 후 부산행…주말 지역 일정 / 채널A / 뉴스 TOP10",
    "url": "https://youtu.be/x1Z92vaD8yY",
    "categories": [
      "인생조언"
    ],
    "views": 166629,
    "date": "2025. 10. 22.",
    "channel": "성공 마인드",
    "tags": [
      "인생조언"
    ],
    "thumbnail": "https://img.youtube.com/vi/x1Z92vaD8yY/mqdefault.jpg"
  },
  {
    "id": "12",
    "youtubeId": "N6cHGxrnil0",
    "title": "내 마음을 후벼파는 10가지 인생명언",
    "url": "https://youtube.com/shorts/N6cHGxrnil0",
    "categories": [
      "인생조언"
    ],
    "views": 170868,
    "date": "2025. 1. 1.",
    "channel": "처세술 가이드",
    "tags": [
      "인생조언"
    ],
    "thumbnail": "https://img.youtube.com/vi/N6cHGxrnil0/mqdefault.jpg"
  },
  {
    "id": "13",
    "youtubeId": "c4kl03kD7as",
    "title": "힘들 때 웃는 자가 일류다",
    "url": "https://youtube.com/shorts/c4kl03kD7as",
    "categories": [
      "인생조언"
    ],
    "views": 175107,
    "date": "2025. 4. 8.",
    "channel": "위로의 멜로디",
    "tags": [
      "인생조언"
    ],
    "thumbnail": "https://img.youtube.com/vi/c4kl03kD7as/mqdefault.jpg"
  },
  {
    "id": "14",
    "youtubeId": "lC4jlRlv5EM",
    "title": "포기하지 않으면 실패가 아니다",
    "url": "https://youtube.com/shorts/lC4jlRlv5EM",
    "categories": [
      "동기부여"
    ],
    "views": 179346,
    "date": "2025. 7. 15.",
    "channel": "인생학개론",
    "tags": [
      "동기부여"
    ],
    "thumbnail": "https://img.youtube.com/vi/lC4jlRlv5EM/mqdefault.jpg"
  },
  {
    "id": "15",
    "youtubeId": "0Nu65KU2Ttk",
    "title": "인생을 바꿔줄 작은 습관의 힘",
    "url": "https://youtube.com/shorts/0Nu65KU2Ttk",
    "categories": [
      "자기계발",
      "인생조언"
    ],
    "views": 183585,
    "date": "2025. 10. 22.",
    "channel": "지혜의 등대",
    "tags": [
      "자기계발",
      "인생조언"
    ],
    "thumbnail": "https://img.youtube.com/vi/0Nu65KU2Ttk/mqdefault.jpg"
  },
  {
    "id": "16",
    "youtubeId": "OdgPnFQFMCU",
    "title": "당신은 너무 늦지 않았으면 좋겠다.",
    "url": "https://youtube.com/shorts/OdgPnFQFMCU",
    "categories": [
      "인생조언"
    ],
    "views": 187824,
    "date": "2025. 1. 1.",
    "channel": "철학의 숲",
    "tags": [
      "인생조언"
    ],
    "thumbnail": "https://img.youtube.com/vi/OdgPnFQFMCU/mqdefault.jpg"
  },
  {
    "id": "17",
    "youtubeId": "ikwbEy7h78g",
    "title": "느린 게 나쁜 게 아니다",
    "url": "https://youtube.com/shorts/ikwbEy7h78g",
    "categories": [
      "인생조언"
    ],
    "views": 192063,
    "date": "2025. 4. 8.",
    "channel": "동기부여 연구소",
    "tags": [
      "인생조언"
    ],
    "thumbnail": "https://img.youtube.com/vi/ikwbEy7h78g/mqdefault.jpg"
  },
  {
    "id": "18",
    "youtubeId": "xbxr6DSMlJU",
    "title": "시도하는 게 두렵고 고민될 때",
    "url": "https://youtube.com/shorts/xbxr6DSMlJU",
    "categories": [
      "인생조언"
    ],
    "views": 196302,
    "date": "2025. 7. 15.",
    "channel": "성공 마인드",
    "tags": [
      "인생조언"
    ],
    "thumbnail": "https://img.youtube.com/vi/xbxr6DSMlJU/mqdefault.jpg"
  },
  {
    "id": "19",
    "youtubeId": "D2c0B964c30",
    "title": "답이 없을 때 사람이 드러난다",
    "url": "https://youtube.com/shorts/D2c0B964c30",
    "categories": [
      "인간관계"
    ],
    "views": 200541,
    "date": "2025. 10. 22.",
    "channel": "처세술 가이드",
    "tags": [
      "인간관계"
    ],
    "thumbnail": "https://img.youtube.com/vi/D2c0B964c30/mqdefault.jpg"
  },
  {
    "id": "20",
    "youtubeId": "NJ88zYsRZBc",
    "title": "똑같은 상황에서 한동훈·하정우의 반응은?",
    "url": "https://youtube.com/shorts/NJ88zYsRZBc",
    "categories": [
      "인생조언"
    ],
    "views": 204780,
    "date": "2025. 1. 1.",
    "channel": "위로의 멜로디",
    "tags": [
      "인생조언"
    ],
    "thumbnail": "https://img.youtube.com/vi/NJ88zYsRZBc/mqdefault.jpg"
  },
  {
    "id": "21",
    "youtubeId": "UPu5-BUWeKo",
    "title": "일단 저지르고 나면 다 수습 가능해",
    "url": "https://youtube.com/shorts/UPu5-BUWeKo",
    "categories": [
      "인생조언"
    ],
    "views": 209019,
    "date": "2025. 4. 8.",
    "channel": "인생학개론",
    "tags": [
      "인생조언"
    ],
    "thumbnail": "https://img.youtube.com/vi/UPu5-BUWeKo/mqdefault.jpg"
  },
  {
    "id": "22",
    "youtubeId": "FMWaF4yCBlw",
    "title": "나에게 해주는 8가지 쓴소리",
    "url": "https://youtube.com/shorts/FMWaF4yCBlw",
    "categories": [
      "대화법"
    ],
    "views": 213258,
    "date": "2025. 7. 15.",
    "channel": "지혜의 등대",
    "tags": [
      "대화법"
    ],
    "thumbnail": "https://img.youtube.com/vi/FMWaF4yCBlw/mqdefault.jpg"
  },
  {
    "id": "23",
    "youtubeId": "cbejpa88oFE",
    "title": "그냥 하는 사람이 결국 끝까지 간다",
    "url": "https://youtube.com/shorts/cbejpa88oFE",
    "categories": [
      "인간관계"
    ],
    "views": 217497,
    "date": "2025. 10. 22.",
    "channel": "철학의 숲",
    "tags": [
      "인간관계"
    ],
    "thumbnail": "https://img.youtube.com/vi/cbejpa88oFE/mqdefault.jpg"
  },
  {
    "id": "24",
    "youtubeId": "c2Cwd8gh9rI",
    "title": "Amor Fati - 운명을 사랑하라",
    "url": "https://youtube.com/shorts/c2Cwd8gh9rI",
    "categories": [
      "인생조언"
    ],
    "views": 221736,
    "date": "2025. 1. 1.",
    "channel": "동기부여 연구소",
    "tags": [
      "인생조언"
    ],
    "thumbnail": "https://img.youtube.com/vi/c2Cwd8gh9rI/mqdefault.jpg"
  },
  {
    "id": "25",
    "youtubeId": "bqUNnzey4n8",
    "title": "권력을 선택한 현빈 원칙을 믿는 우도환",
    "url": "https://youtube.com/shorts/bqUNnzey4n8",
    "categories": [
      "인생조언"
    ],
    "views": 225975,
    "date": "2025. 4. 8.",
    "channel": "성공 마인드",
    "tags": [
      "인생조언"
    ],
    "thumbnail": "https://img.youtube.com/vi/bqUNnzey4n8/mqdefault.jpg"
  },
  {
    "id": "26",
    "youtubeId": "EDwIHbML0Zw",
    "title": "\"맨날 미루는 사람들 꼭 보세요\" 게으름에서 벗어나 갑자기 성실해지는 방법",
    "url": "https://youtu.be/EDwIHbML0Zw",
    "categories": [
      "인간관계"
    ],
    "views": 230214,
    "date": "2025. 7. 15.",
    "channel": "처세술 가이드",
    "tags": [
      "인간관계"
    ],
    "thumbnail": "https://img.youtube.com/vi/EDwIHbML0Zw/mqdefault.jpg"
  },
  {
    "id": "27",
    "youtubeId": "5oIKh8jnw2U",
    "title": "운은 가만히 있는 사람을 절대 돕지 않는다",
    "url": "https://youtube.com/shorts/5oIKh8jnw2U",
    "categories": [
      "동기부여",
      "인간관계",
      "인생조언"
    ],
    "views": 234453,
    "date": "2025. 10. 22.",
    "channel": "위로의 멜로디",
    "tags": [
      "동기부여",
      "인간관계",
      "인생조언"
    ],
    "thumbnail": "https://img.youtube.com/vi/5oIKh8jnw2U/mqdefault.jpg"
  },
  {
    "id": "28",
    "youtubeId": "t_dPH8_0Fkg",
    "title": "주변에 징징대는 사람 두면 안되는 이유",
    "url": "https://youtube.com/shorts/t_dPH8_0Fkg",
    "categories": [
      "인간관계"
    ],
    "views": 238692,
    "date": "2025. 1. 1.",
    "channel": "인생학개론",
    "tags": [
      "인간관계"
    ],
    "thumbnail": "https://img.youtube.com/vi/t_dPH8_0Fkg/mqdefault.jpg"
  },
  {
    "id": "29",
    "youtubeId": "AZ5_rsHTbv0",
    "title": "참전용사인 아버지가 가르쳐주는 학폭 대처법",
    "url": "https://youtube.com/shorts/AZ5_rsHTbv0",
    "categories": [
      "인생조언"
    ],
    "views": 242931,
    "date": "2025. 4. 8.",
    "channel": "지혜의 등대",
    "tags": [
      "인생조언"
    ],
    "thumbnail": "https://img.youtube.com/vi/AZ5_rsHTbv0/mqdefault.jpg"
  },
  {
    "id": "30",
    "youtubeId": "sCFrHbH1j-4",
    "title": "공자가 한 달 만에 성과 내겠다는 제자에게 건넨 일침 🍶",
    "url": "https://youtube.com/shorts/sCFrHbH1j-4",
    "categories": [
      "자기계발",
      "인생조언"
    ],
    "views": 247170,
    "date": "2025. 7. 15.",
    "channel": "철학의 숲",
    "tags": [
      "자기계발",
      "인생조언"
    ],
    "thumbnail": "https://img.youtube.com/vi/sCFrHbH1j-4/mqdefault.jpg"
  },
  {
    "id": "31",
    "youtubeId": "YHpWQSfTYis",
    "title": "돈만 없었던 장항준의 여름방학같은 신혼시절",
    "url": "https://youtube.com/shorts/YHpWQSfTYis",
    "categories": [
      "자기계발"
    ],
    "views": 251409,
    "date": "2025. 10. 22.",
    "channel": "동기부여 연구소",
    "tags": [
      "자기계발"
    ],
    "thumbnail": "https://img.youtube.com/vi/YHpWQSfTYis/mqdefault.jpg"
  },
  {
    "id": "32",
    "youtubeId": "-5EMjRaGY9I",
    "title": "장항준 따라 MT 갔다가 인생역전된 알바생 정체",
    "url": "https://youtube.com/shorts/-5EMjRaGY9I",
    "categories": [
      "인생조언"
    ],
    "views": 255648,
    "date": "2025. 1. 1.",
    "channel": "성공 마인드",
    "tags": [
      "인생조언"
    ],
    "thumbnail": "https://img.youtube.com/vi/-5EMjRaGY9I/mqdefault.jpg"
  },
  {
    "id": "33",
    "youtubeId": "sUCNVZs7vEI",
    "title": "아들 죽인 왜군인데... 어린 소년병을 자식처럼 거둔 이순신 장군의 충격적인 인품",
    "url": "https://youtube.com/shorts/sUCNVZs7vEI",
    "categories": [
      "인생조언"
    ],
    "views": 259887,
    "date": "2025. 4. 8.",
    "channel": "처세술 가이드",
    "tags": [
      "인생조언"
    ],
    "thumbnail": "https://img.youtube.com/vi/sUCNVZs7vEI/mqdefault.jpg"
  },
  {
    "id": "34",
    "youtubeId": "7G_WamKBoCw",
    "title": "평범한 직장인에게 제대로 은혜 갚은 대표",
    "url": "https://youtube.com/shorts/7G_WamKBoCw",
    "categories": [
      "인생조언"
    ],
    "views": 264126,
    "date": "2025. 7. 15.",
    "channel": "위로의 멜로디",
    "tags": [
      "인생조언"
    ],
    "thumbnail": "https://img.youtube.com/vi/7G_WamKBoCw/mqdefault.jpg"
  },
  {
    "id": "35",
    "youtubeId": "default_35",
    "title": "40대 넘어서 처음 운동 시작한 남자들이 후회하는 것 6 | 지큐 코리아",
    "url": "https://www.gqkorea.co.kr/?p=378661",
    "categories": [
      "인생조언"
    ],
    "views": 268365,
    "date": "2025. 10. 22.",
    "channel": "인생학개론",
    "tags": [
      "인생조언"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500"
  },
  {
    "id": "36",
    "youtubeId": "sv3TVMnRp24",
    "title": "하녀 출신 후궁의 무릎이 까진 이유는?",
    "url": "https://youtube.com/shorts/sv3TVMnRp24",
    "categories": [
      "인생조언"
    ],
    "views": 272604,
    "date": "2025. 1. 1.",
    "channel": "지혜의 등대",
    "tags": [
      "인생조언"
    ],
    "thumbnail": "https://img.youtube.com/vi/sv3TVMnRp24/mqdefault.jpg"
  },
  {
    "id": "37",
    "youtubeId": "8iwEfs7TYmQ",
    "title": "시한부 선고받은 최민수가 결심한 것",
    "url": "https://youtube.com/shorts/8iwEfs7TYmQ",
    "categories": [
      "인생조언"
    ],
    "views": 276843,
    "date": "2025. 4. 8.",
    "channel": "철학의 숲",
    "tags": [
      "인생조언"
    ],
    "thumbnail": "https://img.youtube.com/vi/8iwEfs7TYmQ/mqdefault.jpg"
  },
  {
    "id": "38",
    "youtubeId": "mERRd6ucq7Y",
    "title": "어디서든 상위권에 있는 사람 특징.",
    "url": "https://youtube.com/shorts/mERRd6ucq7Y",
    "categories": [
      "인간관계"
    ],
    "views": 281082,
    "date": "2025. 7. 15.",
    "channel": "동기부여 연구소",
    "tags": [
      "인간관계"
    ],
    "thumbnail": "https://img.youtube.com/vi/mERRd6ucq7Y/mqdefault.jpg"
  },
  {
    "id": "39",
    "youtubeId": "-feHaEvFO-4",
    "title": "무대에서 바이올린이 고장나면",
    "url": "https://youtube.com/shorts/-feHaEvFO-4",
    "categories": [
      "인생조언"
    ],
    "views": 285321,
    "date": "2025. 10. 22.",
    "channel": "성공 마인드",
    "tags": [
      "인생조언"
    ],
    "thumbnail": "https://img.youtube.com/vi/-feHaEvFO-4/mqdefault.jpg"
  },
  {
    "id": "40",
    "youtubeId": "i1HZISa-RCw",
    "title": "상류층과 하류층의 차이",
    "url": "https://youtube.com/shorts/i1HZISa-RCw",
    "categories": [
      "인생조언"
    ],
    "views": 289560,
    "date": "2025. 1. 1.",
    "channel": "처세술 가이드",
    "tags": [
      "인생조언"
    ],
    "thumbnail": "https://img.youtube.com/vi/i1HZISa-RCw/mqdefault.jpg"
  },
  {
    "id": "41",
    "youtubeId": "Sn7CD5fuHYc",
    "title": "생각많은 사람이 아무것도 못하는 이유",
    "url": "https://youtube.com/shorts/Sn7CD5fuHYc",
    "categories": [
      "마인드셋",
      "동기부여",
      "인간관계",
      "인생조언"
    ],
    "views": 293799,
    "date": "2025. 4. 8.",
    "channel": "위로의 멜로디",
    "tags": [
      "마인드셋",
      "동기부여",
      "인간관계",
      "인생조언"
    ],
    "thumbnail": "https://img.youtube.com/vi/Sn7CD5fuHYc/mqdefault.jpg"
  },
  {
    "id": "42",
    "youtubeId": "QzHxBS7yaAA",
    "title": "인생 대박 나기 직전 반드시 겪는 장조 5가지.",
    "url": "https://youtube.com/shorts/QzHxBS7yaAA",
    "categories": [
      "인생조언"
    ],
    "views": 298038,
    "date": "2025. 7. 15.",
    "channel": "인생학개론",
    "tags": [
      "인생조언"
    ],
    "thumbnail": "https://img.youtube.com/vi/QzHxBS7yaAA/mqdefault.jpg"
  },
  {
    "id": "43",
    "youtubeId": "LiCrA6Sjx_8",
    "title": "지금까지 본 명언 중 이게 진짜 최고다",
    "url": "https://youtube.com/shorts/LiCrA6Sjx_8",
    "categories": [
      "인생조언"
    ],
    "views": 302277,
    "date": "2025. 10. 22.",
    "channel": "지혜의 등대",
    "tags": [
      "인생조언"
    ],
    "thumbnail": "https://img.youtube.com/vi/LiCrA6Sjx_8/mqdefault.jpg"
  },
  {
    "id": "44",
    "youtubeId": "MYvsoELoA_k",
    "title": "취미로 게임하는 95세 할아버지의 과거",
    "url": "https://youtube.com/shorts/MYvsoELoA_k",
    "categories": [
      "인생조언"
    ],
    "views": 306516,
    "date": "2025. 1. 1.",
    "channel": "철학의 숲",
    "tags": [
      "인생조언"
    ],
    "thumbnail": "https://img.youtube.com/vi/MYvsoELoA_k/mqdefault.jpg"
  },
  {
    "id": "45",
    "youtubeId": "eWDQqg5gpXs",
    "title": "늦었다는 이유로 멈췄다면 못 봤을 장면",
    "url": "https://youtube.com/shorts/eWDQqg5gpXs",
    "categories": [
      "인생조언"
    ],
    "views": 310755,
    "date": "2025. 4. 8.",
    "channel": "동기부여 연구소",
    "tags": [
      "인생조언"
    ],
    "thumbnail": "https://img.youtube.com/vi/eWDQqg5gpXs/mqdefault.jpg"
  },
  {
    "id": "46",
    "youtubeId": "wR1oyXLQg8Y",
    "title": "돈 아끼려다가 인생 망하는 습관 7가지.",
    "url": "https://youtube.com/shorts/wR1oyXLQg8Y",
    "categories": [
      "자기계발",
      "인생조언"
    ],
    "views": 314994,
    "date": "2025. 7. 15.",
    "channel": "성공 마인드",
    "tags": [
      "자기계발",
      "인생조언"
    ],
    "thumbnail": "https://img.youtube.com/vi/wR1oyXLQg8Y/mqdefault.jpg"
  },
  {
    "id": "47",
    "youtubeId": "fAWQ1YZPwiA",
    "title": "절대로 목표를 누구에게도 말하지 마라.",
    "url": "https://youtube.com/shorts/fAWQ1YZPwiA",
    "categories": [
      "동기부여",
      "대화법"
    ],
    "views": 319233,
    "date": "2025. 10. 22.",
    "channel": "처세술 가이드",
    "tags": [
      "동기부여",
      "대화법"
    ],
    "thumbnail": "https://img.youtube.com/vi/fAWQ1YZPwiA/mqdefault.jpg"
  },
  {
    "id": "48",
    "youtubeId": "JS5v6LrJUwc",
    "title": "금수저들이 귀티나는 진짜 이유 7가지.",
    "url": "https://youtube.com/shorts/JS5v6LrJUwc",
    "categories": [
      "인생조언"
    ],
    "views": 323472,
    "date": "2025. 1. 1.",
    "channel": "위로의 멜로디",
    "tags": [
      "인생조언"
    ],
    "thumbnail": "https://img.youtube.com/vi/JS5v6LrJUwc/mqdefault.jpg"
  },
  {
    "id": "49",
    "youtubeId": "XW56rHpiAWU",
    "title": "우리는 왜 사랑하는 사람과 말이 안 통할까?",
    "url": "https://youtube.com/shorts/XW56rHpiAWU",
    "categories": [
      "인간관계"
    ],
    "views": 327711,
    "date": "2025. 4. 8.",
    "channel": "인생학개론",
    "tags": [
      "인간관계"
    ],
    "thumbnail": "https://img.youtube.com/vi/XW56rHpiAWU/mqdefault.jpg"
  },
  {
    "id": "50",
    "youtubeId": "H7ArEJ9EGq0",
    "title": "파티장 대신 편의점? 대기업 대표로 승진하자마자 달려간 소름 돋는 이유",
    "url": "https://youtube.com/shorts/H7ArEJ9EGq0",
    "categories": [
      "인생조언"
    ],
    "views": 331950,
    "date": "2025. 7. 15.",
    "channel": "지혜의 등대",
    "tags": [
      "인생조언"
    ],
    "thumbnail": "https://img.youtube.com/vi/H7ArEJ9EGq0/mqdefault.jpg"
  },
  {
    "id": "51",
    "youtubeId": "yKqPx9NUGWg",
    "title": "편하게 밥먹기도 힘든 고대의 정치싸움",
    "url": "https://youtube.com/shorts/yKqPx9NUGWg",
    "categories": [
      "인생조언"
    ],
    "views": 336189,
    "date": "2025. 10. 22.",
    "channel": "철학의 숲",
    "tags": [
      "인생조언"
    ],
    "thumbnail": "https://img.youtube.com/vi/yKqPx9NUGWg/mqdefault.jpg"
  },
  {
    "id": "52",
    "youtubeId": "vqtqcKYpFZo",
    "title": "아무리 도와줘도 고마워하지 않는 사람들의 특징 8가지.",
    "url": "https://youtube.com/shorts/vqtqcKYpFZo",
    "categories": [
      "인간관계"
    ],
    "views": 340428,
    "date": "2025. 1. 1.",
    "channel": "동기부여 연구소",
    "tags": [
      "인간관계"
    ],
    "thumbnail": "https://img.youtube.com/vi/vqtqcKYpFZo/mqdefault.jpg"
  },
  {
    "id": "53",
    "youtubeId": "km1xDygo4Qo",
    "title": "타짜 박정민도 놀란 20억짜리 명언 한마디",
    "url": "https://youtube.com/shorts/km1xDygo4Qo",
    "categories": [
      "인생조언"
    ],
    "views": 344667,
    "date": "2025. 4. 8.",
    "channel": "성공 마인드",
    "tags": [
      "인생조언"
    ],
    "thumbnail": "https://img.youtube.com/vi/km1xDygo4Qo/mqdefault.jpg"
  },
  {
    "id": "54",
    "youtubeId": "gSQGqnPYsFs",
    "title": "걍 즐기면 돼",
    "url": "https://youtube.com/shorts/gSQGqnPYsFs",
    "categories": [
      "인생조언"
    ],
    "views": 348906,
    "date": "2025. 7. 15.",
    "channel": "처세술 가이드",
    "tags": [
      "인생조언"
    ],
    "thumbnail": "https://img.youtube.com/vi/gSQGqnPYsFs/mqdefault.jpg"
  },
  {
    "id": "55",
    "youtubeId": "Rqp1LbSVvaM",
    "title": "성공 공식이 사람마다 다른 이유",
    "url": "https://youtube.com/shorts/Rqp1LbSVvaM",
    "categories": [
      "동기부여",
      "인간관계"
    ],
    "views": 353145,
    "date": "2025. 10. 22.",
    "channel": "위로의 멜로디",
    "tags": [
      "동기부여",
      "인간관계"
    ],
    "thumbnail": "https://img.youtube.com/vi/Rqp1LbSVvaM/mqdefault.jpg"
  },
  {
    "id": "56",
    "youtubeId": "hCfu7fyCdVc",
    "title": "꺾인 꽃은 결코 오래가지 못합니다",
    "url": "https://youtube.com/shorts/hCfu7fyCdVc",
    "categories": [
      "인생조언"
    ],
    "views": 357384,
    "date": "2025. 1. 1.",
    "channel": "인생학개론",
    "tags": [
      "인생조언"
    ],
    "thumbnail": "https://img.youtube.com/vi/hCfu7fyCdVc/mqdefault.jpg"
  },
  {
    "id": "57",
    "youtubeId": "qvYhAErEX6U",
    "title": "멘탈 터졌을 때 제발 이것만은 하지 마세요 조언",
    "url": "https://youtube.com/shorts/qvYhAErEX6U",
    "categories": [
      "마인드셋",
      "인생조언"
    ],
    "views": 361623,
    "date": "2025. 4. 8.",
    "channel": "지혜의 등대",
    "tags": [
      "마인드셋",
      "인생조언"
    ],
    "thumbnail": "https://img.youtube.com/vi/qvYhAErEX6U/mqdefault.jpg"
  },
  {
    "id": "58",
    "youtubeId": "3ipBDVzYkjo",
    "title": "전 세계 1% 리더들의 성공 공식",
    "url": "https://youtube.com/shorts/3ipBDVzYkjo",
    "categories": [
      "동기부여"
    ],
    "views": 365862,
    "date": "2025. 7. 15.",
    "channel": "철학의 숲",
    "tags": [
      "동기부여"
    ],
    "thumbnail": "https://img.youtube.com/vi/3ipBDVzYkjo/mqdefault.jpg"
  },
  {
    "id": "59",
    "youtubeId": "HeFR0l5bJ_Q",
    "title": "성공하는 사람들의 공통점",
    "url": "https://youtube.com/shorts/HeFR0l5bJ_Q",
    "categories": [
      "동기부여",
      "인간관계"
    ],
    "views": 370101,
    "date": "2025. 10. 22.",
    "channel": "동기부여 연구소",
    "tags": [
      "동기부여",
      "인간관계"
    ],
    "thumbnail": "https://img.youtube.com/vi/HeFR0l5bJ_Q/mqdefault.jpg"
  },
  {
    "id": "60",
    "youtubeId": "nj3inzbs3NY",
    "title": "당신이 성공하지 못하는이유",
    "url": "https://youtube.com/shorts/nj3inzbs3NY",
    "categories": [
      "동기부여"
    ],
    "views": 374340,
    "date": "2025. 1. 1.",
    "channel": "성공 마인드",
    "tags": [
      "동기부여"
    ],
    "thumbnail": "https://img.youtube.com/vi/nj3inzbs3NY/mqdefault.jpg"
  },
  {
    "id": "61",
    "youtubeId": "e9mQ9G8O8QE",
    "title": "성공을위한 필수조건",
    "url": "https://youtube.com/shorts/e9mQ9G8O8QE",
    "categories": [
      "동기부여"
    ],
    "views": 378579,
    "date": "2025. 4. 8.",
    "channel": "처세술 가이드",
    "tags": [
      "동기부여"
    ],
    "thumbnail": "https://img.youtube.com/vi/e9mQ9G8O8QE/mqdefault.jpg"
  },
  {
    "id": "62",
    "youtubeId": "ZqdplsKx6Uw",
    "title": "성공은 결국 포기하지 않는 자의 몫",
    "url": "https://youtube.com/shorts/ZqdplsKx6Uw",
    "categories": [
      "동기부여"
    ],
    "views": 382818,
    "date": "2025. 7. 15.",
    "channel": "위로의 멜로디",
    "tags": [
      "동기부여"
    ],
    "thumbnail": "https://img.youtube.com/vi/ZqdplsKx6Uw/mqdefault.jpg"
  },
  {
    "id": "63",
    "youtubeId": "7fl_OZg7GHY",
    "title": "성공하는 사람들의 시선",
    "url": "https://youtube.com/shorts/7fl_OZg7GHY",
    "categories": [
      "동기부여",
      "인간관계"
    ],
    "views": 387057,
    "date": "2025. 10. 22.",
    "channel": "인생학개론",
    "tags": [
      "동기부여",
      "인간관계"
    ],
    "thumbnail": "https://img.youtube.com/vi/7fl_OZg7GHY/mqdefault.jpg"
  },
  {
    "id": "64",
    "youtubeId": "tcGldWHPbu0",
    "title": "찬혁이 미래를 보고 수현을 붙잡은 이유",
    "url": "https://youtube.com/shorts/tcGldWHPbu0",
    "categories": [
      "인생조언"
    ],
    "views": 391296,
    "date": "2025. 1. 1.",
    "channel": "지혜의 등대",
    "tags": [
      "인생조언"
    ],
    "thumbnail": "https://img.youtube.com/vi/tcGldWHPbu0/mqdefault.jpg"
  },
  {
    "id": "65",
    "youtubeId": "_neKk_xHP2o",
    "title": "악악무 컴백까지 과정 정리해보면 이럼",
    "url": "https://youtube.com/shorts/_neKk_xHP2o",
    "categories": [
      "인생조언"
    ],
    "views": 395535,
    "date": "2025. 4. 8.",
    "channel": "철학의 숲",
    "tags": [
      "인생조언"
    ],
    "thumbnail": "https://img.youtube.com/vi/_neKk_xHP2o/mqdefault.jpg"
  },
  {
    "id": "66",
    "youtubeId": "S8BUe0F-jUk",
    "title": "아저씨도 그냥 되는게 아니다",
    "url": "https://youtube.com/shorts/S8BUe0F-jUk",
    "categories": [
      "인생조언"
    ],
    "views": 399774,
    "date": "2025. 7. 15.",
    "channel": "동기부여 연구소",
    "tags": [
      "인생조언"
    ],
    "thumbnail": "https://img.youtube.com/vi/S8BUe0F-jUk/mqdefault.jpg"
  },
  {
    "id": "67",
    "youtubeId": "fFRkLnfl1mk",
    "title": "조혜련 인생조언 인생은성공과 과정만있다",
    "url": "https://youtube.com/shorts/fFRkLnfl1mk",
    "categories": [
      "동기부여",
      "인생조언"
    ],
    "views": 404013,
    "date": "2025. 10. 22.",
    "channel": "성공 마인드",
    "tags": [
      "동기부여",
      "인생조언"
    ],
    "thumbnail": "https://img.youtube.com/vi/fFRkLnfl1mk/mqdefault.jpg"
  },
  {
    "id": "68",
    "youtubeId": "CjieH-uXPsw",
    "title": "대행사 명대사 길을찾지마세요",
    "url": "https://youtube.com/shorts/CjieH-uXPsw",
    "categories": [
      "인생조언"
    ],
    "views": 408252,
    "date": "2025. 1. 1.",
    "channel": "처세술 가이드",
    "tags": [
      "인생조언"
    ],
    "thumbnail": "https://img.youtube.com/vi/CjieH-uXPsw/mqdefault.jpg"
  },
  {
    "id": "69",
    "youtubeId": "EEjRn783RbY",
    "title": "아는만큼 똑똑하고 하는만큼 되는거야",
    "url": "https://youtube.com/shorts/EEjRn783RbY",
    "categories": [
      "인생조언"
    ],
    "views": 412491,
    "date": "2025. 4. 8.",
    "channel": "위로의 멜로디",
    "tags": [
      "인생조언"
    ],
    "thumbnail": "https://img.youtube.com/vi/EEjRn783RbY/mqdefault.jpg"
  },
  {
    "id": "70",
    "youtubeId": "ZpUZLuT4bD8",
    "title": "게으른 나를 벌떡 일어나게 만든 촌철 명언",
    "url": "https://youtube.com/shorts/ZpUZLuT4bD8",
    "categories": [
      "마인드셋",
      "동기부여",
      "인생조언"
    ],
    "views": 416730,
    "date": "2025. 7. 15.",
    "channel": "인생학개론",
    "tags": [
      "마인드셋",
      "동기부여",
      "인생조언"
    ],
    "thumbnail": "https://img.youtube.com/vi/ZpUZLuT4bD8/mqdefault.jpg"
  },
  {
    "id": "71",
    "youtubeId": "YGTLDlGcQtQ",
    "title": "탈출보다 식사를 택한 쥐",
    "url": "https://youtube.com/shorts/YGTLDlGcQtQ",
    "categories": [
      "인생조언"
    ],
    "views": 420969,
    "date": "2025. 10. 22.",
    "channel": "지혜의 등대",
    "tags": [
      "인생조언"
    ],
    "thumbnail": "https://img.youtube.com/vi/YGTLDlGcQtQ/mqdefault.jpg"
  },
  {
    "id": "72",
    "youtubeId": "JJbNN3CFBGo",
    "title": "네모가 쳐 맞고 동그라미가 되어가는 과정 ㅋㅋㅋ",
    "url": "https://youtube.com/shorts/JJbNN3CFBGo",
    "categories": [
      "인생조언"
    ],
    "views": 425208,
    "date": "2025. 1. 1.",
    "channel": "철학의 숲",
    "tags": [
      "인생조언"
    ],
    "thumbnail": "https://img.youtube.com/vi/JJbNN3CFBGo/mqdefault.jpg"
  },
  {
    "id": "73",
    "youtubeId": "VTpfNCVAh6w",
    "title": "까칠한교수에게 특급칭찬 받은 전공의 1년차",
    "url": "https://youtube.com/shorts/VTpfNCVAh6w",
    "categories": [
      "인생조언"
    ],
    "views": 429447,
    "date": "2025. 4. 8.",
    "channel": "동기부여 연구소",
    "tags": [
      "인생조언"
    ],
    "thumbnail": "https://img.youtube.com/vi/VTpfNCVAh6w/mqdefault.jpg"
  },
  {
    "id": "74",
    "youtubeId": "MQ8lrff3X1o",
    "title": "S : 왜 살까가 왜 있어야 되지? N : ???",
    "url": "https://youtube.com/shorts/MQ8lrff3X1o",
    "categories": [
      "인생조언"
    ],
    "views": 433686,
    "date": "2025. 7. 15.",
    "channel": "성공 마인드",
    "tags": [
      "인생조언"
    ],
    "thumbnail": "https://img.youtube.com/vi/MQ8lrff3X1o/mqdefault.jpg"
  },
  {
    "id": "75",
    "youtubeId": "uHAnji6L794",
    "title": "가짜 왕이 신하의 마음을 얻는 법",
    "url": "https://youtube.com/shorts/uHAnji6L794",
    "categories": [
      "인생조언"
    ],
    "views": 437925,
    "date": "2025. 10. 22.",
    "channel": "처세술 가이드",
    "tags": [
      "인생조언"
    ],
    "thumbnail": "https://img.youtube.com/vi/uHAnji6L794/mqdefault.jpg"
  },
  {
    "id": "76",
    "youtubeId": "5URG3f3GZXw",
    "title": "외모만 보고 판단하지 말 것!",
    "url": "https://youtube.com/shorts/5URG3f3GZXw",
    "categories": [
      "인생조언"
    ],
    "views": 442164,
    "date": "2025. 1. 1.",
    "channel": "위로의 멜로디",
    "tags": [
      "인생조언"
    ],
    "thumbnail": "https://img.youtube.com/vi/5URG3f3GZXw/mqdefault.jpg"
  },
  {
    "id": "77",
    "youtubeId": "2FG-FZCuKTI",
    "title": "재산 250조 젠슨황의 인생명언",
    "url": "https://youtube.com/shorts/2FG-FZCuKTI",
    "categories": [
      "마인드셋",
      "인생조언"
    ],
    "views": 446403,
    "date": "2025. 4. 8.",
    "channel": "인생학개론",
    "tags": [
      "마인드셋",
      "인생조언"
    ],
    "thumbnail": "https://img.youtube.com/vi/2FG-FZCuKTI/mqdefault.jpg"
  },
  {
    "id": "78",
    "youtubeId": "WajLm3ft7Mw",
    "title": "한 번 삐끗하면 바로 나락가버리는 세상 ㅋㅋㅋ",
    "url": "https://youtube.com/shorts/WajLm3ft7Mw",
    "categories": [
      "인생조언"
    ],
    "views": 450642,
    "date": "2025. 7. 15.",
    "channel": "지혜의 등대",
    "tags": [
      "인생조언"
    ],
    "thumbnail": "https://img.youtube.com/vi/WajLm3ft7Mw/mqdefault.jpg"
  },
  {
    "id": "79",
    "youtubeId": "6nQcCHGAPv0",
    "title": "장항준 바람설 장모님이 확신한 이유",
    "url": "https://youtube.com/shorts/6nQcCHGAPv0",
    "categories": [
      "인생조언"
    ],
    "views": 454881,
    "date": "2025. 10. 22.",
    "channel": "철학의 숲",
    "tags": [
      "인생조언"
    ],
    "thumbnail": "https://img.youtube.com/vi/6nQcCHGAPv0/mqdefault.jpg"
  },
  {
    "id": "80",
    "youtubeId": "KaGxQjVxNCs",
    "title": "장항준 김은희 신혼시절 저세상 텐션",
    "url": "https://youtube.com/shorts/KaGxQjVxNCs",
    "categories": [
      "인생조언"
    ],
    "views": 459120,
    "date": "2025. 1. 1.",
    "channel": "동기부여 연구소",
    "tags": [
      "인생조언"
    ],
    "thumbnail": "https://img.youtube.com/vi/KaGxQjVxNCs/mqdefault.jpg"
  },
  {
    "id": "81",
    "youtubeId": "WzAN0qAzgZc",
    "title": "장항준과 두 모녀 썰",
    "url": "https://youtube.com/shorts/WzAN0qAzgZc",
    "categories": [
      "인생조언"
    ],
    "views": 463359,
    "date": "2025. 4. 8.",
    "channel": "성공 마인드",
    "tags": [
      "인생조언"
    ],
    "thumbnail": "https://img.youtube.com/vi/WzAN0qAzgZc/mqdefault.jpg"
  },
  {
    "id": "82",
    "youtubeId": "8k1-3phWYIY",
    "title": "대세는 장항준식 긍정적 사고",
    "url": "https://youtube.com/shorts/8k1-3phWYIY",
    "categories": [
      "인생조언"
    ],
    "views": 467598,
    "date": "2025. 7. 15.",
    "channel": "처세술 가이드",
    "tags": [
      "인생조언"
    ],
    "thumbnail": "https://img.youtube.com/vi/8k1-3phWYIY/mqdefault.jpg"
  },
  {
    "id": "83",
    "youtubeId": "oEH4X3I0x6Y",
    "title": "\"김은희 통장 관리는 내가 해\" 신이 내린 꿀 팔자 장항준의 아내 카드 사용법ㅋㅋ",
    "url": "https://youtu.be/oEH4X3I0x6Y",
    "categories": [
      "인생조언"
    ],
    "views": 471837,
    "date": "2025. 10. 22.",
    "channel": "위로의 멜로디",
    "tags": [
      "인생조언"
    ],
    "thumbnail": "https://img.youtube.com/vi/oEH4X3I0x6Y/mqdefault.jpg"
  },
  {
    "id": "84",
    "youtubeId": "_xpjyYBGkNc",
    "title": "제발 딱 2년만 이렇게 버텨라. 인생 무조건 잘 풀린다.",
    "url": "https://youtube.com/shorts/_xpjyYBGkNc",
    "categories": [
      "인생조언"
    ],
    "views": 476076,
    "date": "2025. 1. 1.",
    "channel": "인생학개론",
    "tags": [
      "인생조언"
    ],
    "thumbnail": "https://img.youtube.com/vi/_xpjyYBGkNc/mqdefault.jpg"
  },
  {
    "id": "85",
    "youtubeId": "JGIwXIW1IUg",
    "title": "사람을 만나면 잘해주지 말고 이렇게 대하라 !",
    "url": "https://youtube.com/shorts/JGIwXIW1IUg",
    "categories": [
      "인간관계"
    ],
    "views": 480315,
    "date": "2025. 4. 8.",
    "channel": "지혜의 등대",
    "tags": [
      "인간관계"
    ],
    "thumbnail": "https://img.youtube.com/vi/JGIwXIW1IUg/mqdefault.jpg"
  },
  {
    "id": "86",
    "youtubeId": "dytFixuR2lc",
    "title": "역대급 참교육 사이다",
    "url": "https://youtube.com/shorts/dytFixuR2lc",
    "categories": [
      "인생조언"
    ],
    "views": 484554,
    "date": "2025. 7. 15.",
    "channel": "철학의 숲",
    "tags": [
      "인생조언"
    ],
    "thumbnail": "https://img.youtube.com/vi/dytFixuR2lc/mqdefault.jpg"
  },
  {
    "id": "87",
    "youtubeId": "m0iblN3rAR4",
    "title": "인생이 너무 복잡할 때 딱 기억할 두가지",
    "url": "https://youtube.com/shorts/m0iblN3rAR4",
    "categories": [
      "인생조언"
    ],
    "views": 488793,
    "date": "2025. 10. 22.",
    "channel": "동기부여 연구소",
    "tags": [
      "인생조언"
    ],
    "thumbnail": "https://img.youtube.com/vi/m0iblN3rAR4/mqdefault.jpg"
  },
  {
    "id": "88",
    "youtubeId": "MOnIOrw6jlc",
    "title": "사랑받고 자란 여자를 좋아하면 생기는 일",
    "url": "https://youtube.com/shorts/MOnIOrw6jlc",
    "categories": [
      "인생조언"
    ],
    "views": 493032,
    "date": "2025. 1. 1.",
    "channel": "성공 마인드",
    "tags": [
      "인생조언"
    ],
    "thumbnail": "https://img.youtube.com/vi/MOnIOrw6jlc/mqdefault.jpg"
  },
  {
    "id": "89",
    "youtubeId": "CNvpTDpSp5A",
    "title": "에픽하이가 절대 곁에 두지 말라는 사람의 특징",
    "url": "https://youtube.com/shorts/CNvpTDpSp5A",
    "categories": [
      "인간관계"
    ],
    "views": 497271,
    "date": "2025. 4. 8.",
    "channel": "처세술 가이드",
    "tags": [
      "인간관계"
    ],
    "thumbnail": "https://img.youtube.com/vi/CNvpTDpSp5A/mqdefault.jpg"
  },
  {
    "id": "90",
    "youtubeId": "EDmL_WtkfkE",
    "title": "이영자가 자존감 무너질 때 버틸 수 있던 이유",
    "url": "https://youtube.com/shorts/EDmL_WtkfkE",
    "categories": [
      "마인드셋"
    ],
    "views": 501510,
    "date": "2025. 7. 15.",
    "channel": "위로의 멜로디",
    "tags": [
      "마인드셋"
    ],
    "thumbnail": "https://img.youtube.com/vi/EDmL_WtkfkE/mqdefault.jpg"
  },
  {
    "id": "91",
    "youtubeId": "NGpDfdMvYAw",
    "title": "김국진이 매일 1시간씩 아내 강수지와 대화하는 이유",
    "url": "https://youtube.com/shorts/NGpDfdMvYAw",
    "categories": [
      "대화법"
    ],
    "views": 505749,
    "date": "2025. 10. 22.",
    "channel": "인생학개론",
    "tags": [
      "대화법"
    ],
    "thumbnail": "https://img.youtube.com/vi/NGpDfdMvYAw/mqdefault.jpg"
  },
  {
    "id": "92",
    "youtubeId": "APHh0qGOZs8",
    "title": "연기파 배우 유해진이 성공할 수밖에 없던 이유",
    "url": "https://youtube.com/shorts/APHh0qGOZs8",
    "categories": [
      "동기부여",
      "자기계발"
    ],
    "views": 509988,
    "date": "2025. 1. 1.",
    "channel": "지혜의 등대",
    "tags": [
      "동기부여",
      "자기계발"
    ],
    "thumbnail": "https://img.youtube.com/vi/APHh0qGOZs8/mqdefault.jpg"
  },
  {
    "id": "93",
    "youtubeId": "KF_28b_bzsU",
    "title": "제일 준비 된 사람은?",
    "url": "https://youtube.com/shorts/KF_28b_bzsU",
    "categories": [
      "인간관계"
    ],
    "views": 514227,
    "date": "2025. 4. 8.",
    "channel": "철학의 숲",
    "tags": [
      "인간관계"
    ],
    "thumbnail": "https://img.youtube.com/vi/KF_28b_bzsU/mqdefault.jpg"
  },
  {
    "id": "94",
    "youtubeId": "T0tRUy7Mx-U",
    "title": "인생은 장항준처럼! 당당하게 살아가는 법",
    "url": "https://youtube.com/shorts/T0tRUy7Mx-U",
    "categories": [
      "인생조언"
    ],
    "views": 518466,
    "date": "2025. 7. 15.",
    "channel": "동기부여 연구소",
    "tags": [
      "인생조언"
    ],
    "thumbnail": "https://img.youtube.com/vi/T0tRUy7Mx-U/mqdefault.jpg"
  },
  {
    "id": "95",
    "youtubeId": "3KdBcMERiCs",
    "title": "이성을 볼때 외모를 많이 보시나요??",
    "url": "https://youtube.com/shorts/3KdBcMERiCs",
    "categories": [
      "인생조언"
    ],
    "views": 522705,
    "date": "2025. 10. 22.",
    "channel": "성공 마인드",
    "tags": [
      "인생조언"
    ],
    "thumbnail": "https://img.youtube.com/vi/3KdBcMERiCs/mqdefault.jpg"
  },
  {
    "id": "96",
    "youtubeId": "WSk8mVr6JHk",
    "title": "사람은 잘해주면 슬슬 무시한다 하지만 이렇게 대하면 바로 예의 차린다",
    "url": "https://youtu.be/WSk8mVr6JHk",
    "categories": [
      "인간관계"
    ],
    "views": 526944,
    "date": "2025. 1. 1.",
    "channel": "처세술 가이드",
    "tags": [
      "인간관계"
    ],
    "thumbnail": "https://img.youtube.com/vi/WSk8mVr6JHk/mqdefault.jpg"
  },
  {
    "id": "97",
    "youtubeId": "vxrgcSVpJRc",
    "title": "(실화) 망하기 직전 김으로 인생역전",
    "url": "https://youtube.com/shorts/vxrgcSVpJRc",
    "categories": [
      "인생조언"
    ],
    "views": 531183,
    "date": "2025. 4. 8.",
    "channel": "위로의 멜로디",
    "tags": [
      "인생조언"
    ],
    "thumbnail": "https://img.youtube.com/vi/vxrgcSVpJRc/mqdefault.jpg"
  },
  {
    "id": "98",
    "youtubeId": "4rFaLg5ibV0",
    "title": "신동엽이 단 한 가지 일로 삶의 태도를 바꾼 이유",
    "url": "https://youtube.com/shorts/4rFaLg5ibV0",
    "categories": [
      "인생조언"
    ],
    "views": 535422,
    "date": "2025. 7. 15.",
    "channel": "인생학개론",
    "tags": [
      "인생조언"
    ],
    "thumbnail": "https://img.youtube.com/vi/4rFaLg5ibV0/mqdefault.jpg"
  },
  {
    "id": "99",
    "youtubeId": "En3wSMQL6Zs",
    "title": "Surround yourself with people who won't watch you fall, they reach befor...",
    "url": "https://youtube.com/shorts/En3wSMQL6Zs",
    "categories": [
      "인생조언"
    ],
    "views": 539661,
    "date": "2025. 10. 22.",
    "channel": "지혜의 등대",
    "tags": [
      "인생조언"
    ],
    "thumbnail": "https://img.youtube.com/vi/En3wSMQL6Zs/mqdefault.jpg"
  },
  {
    "id": "100",
    "youtubeId": "1RrWZVYtewY",
    "title": "When a fish understands the system better than humans 🥺❤️‍🩹🩹",
    "url": "https://youtube.com/shorts/1RrWZVYtewY",
    "categories": [
      "인생조언"
    ],
    "views": 543900,
    "date": "2025. 1. 1.",
    "channel": "철학의 숲",
    "tags": [
      "인생조언"
    ],
    "thumbnail": "https://img.youtube.com/vi/1RrWZVYtewY/mqdefault.jpg"
  },
  {
    "id": "101",
    "youtubeId": "dUr4JkyxFNM",
    "title": "Real Leaders Don't Bark Their Presence Speaks.🥺❤️‍🩹🩹",
    "url": "https://youtube.com/shorts/dUr4JkyxFNM",
    "categories": [
      "인생조언"
    ],
    "views": 548139,
    "date": "2025. 4. 8.",
    "channel": "동기부여 연구소",
    "tags": [
      "인생조언"
    ],
    "thumbnail": "https://img.youtube.com/vi/dUr4JkyxFNM/mqdefault.jpg"
  },
  {
    "id": "102",
    "youtubeId": "aYJmkQ6Mv-E",
    "title": "학생들이 단체로 수업을 거부했던 이유",
    "url": "https://youtube.com/shorts/aYJmkQ6Mv-E",
    "categories": [
      "인생조언"
    ],
    "views": 552378,
    "date": "2025. 7. 15.",
    "channel": "성공 마인드",
    "tags": [
      "인생조언"
    ],
    "thumbnail": "https://img.youtube.com/vi/aYJmkQ6Mv-E/mqdefault.jpg"
  },
  {
    "id": "103",
    "youtubeId": "hJqKXuOZR5s",
    "title": "탁재훈이 사랑받던 이유 ㅋㅋ",
    "url": "https://youtube.com/shorts/hJqKXuOZR5s",
    "categories": [
      "인생조언"
    ],
    "views": 556617,
    "date": "2025. 10. 22.",
    "channel": "처세술 가이드",
    "tags": [
      "인생조언"
    ],
    "thumbnail": "https://img.youtube.com/vi/hJqKXuOZR5s/mqdefault.jpg"
  },
  {
    "id": "104",
    "youtubeId": "rUEGw6uQY-c",
    "title": "돈 없어도 왕처럼 지낸 탁재훈 과거 ㅋㅋ",
    "url": "https://youtube.com/shorts/rUEGw6uQY-c",
    "categories": [
      "자기계발"
    ],
    "views": 560856,
    "date": "2025. 1. 1.",
    "channel": "위로의 멜로디",
    "tags": [
      "자기계발"
    ],
    "thumbnail": "https://img.youtube.com/vi/rUEGw6uQY-c/mqdefault.jpg"
  },
  {
    "id": "105",
    "youtubeId": "pABVF0Lsbzw",
    "title": "서현철 입담 레전드 부부일상토크 ㅋㅋㅋㅋㅋ개꿀잼",
    "url": "https://youtube.com/shorts/pABVF0Lsbzw",
    "categories": [
      "인생조언"
    ],
    "views": 565095,
    "date": "2025. 4. 8.",
    "channel": "인생학개론",
    "tags": [
      "인생조언"
    ],
    "thumbnail": "https://img.youtube.com/vi/pABVF0Lsbzw/mqdefault.jpg"
  },
  {
    "id": "106",
    "youtubeId": "3Q-ACWAt4YY",
    "title": "레이싱 역사상 최고의 낭만 사고임",
    "url": "https://youtube.com/shorts/3Q-ACWAt4YY",
    "categories": [
      "인생조언"
    ],
    "views": 569334,
    "date": "2025. 7. 15.",
    "channel": "지혜의 등대",
    "tags": [
      "인생조언"
    ],
    "thumbnail": "https://img.youtube.com/vi/3Q-ACWAt4YY/mqdefault.jpg"
  },
  {
    "id": "107",
    "youtubeId": "m6nKzxzbZh8",
    "title": "일타 강사 이지영의 강의 맛보기 : 장자의 나룻배",
    "url": "https://youtube.com/shorts/m6nKzxzbZh8",
    "categories": [
      "인생조언"
    ],
    "views": 573573,
    "date": "2025. 10. 22.",
    "channel": "철학의 숲",
    "tags": [
      "인생조언"
    ],
    "thumbnail": "https://img.youtube.com/vi/m6nKzxzbZh8/mqdefault.jpg"
  },
  {
    "id": "108",
    "youtubeId": "H416Ll2H5w8",
    "title": "40대 에픽하이가 바라본 30대",
    "url": "https://youtube.com/shorts/H416Ll2H5w8",
    "categories": [
      "인생조언"
    ],
    "views": 577812,
    "date": "2025. 1. 1.",
    "channel": "동기부여 연구소",
    "tags": [
      "인생조언"
    ],
    "thumbnail": "https://img.youtube.com/vi/H416Ll2H5w8/mqdefault.jpg"
  },
  {
    "id": "109",
    "youtubeId": "IQTYaDhTiVY",
    "title": "직장 상사가 마음에 들지 않을때",
    "url": "https://youtube.com/shorts/IQTYaDhTiVY",
    "categories": [
      "인생조언"
    ],
    "views": 582051,
    "date": "2025. 4. 8.",
    "channel": "성공 마인드",
    "tags": [
      "인생조언"
    ],
    "thumbnail": "https://img.youtube.com/vi/IQTYaDhTiVY/mqdefault.jpg"
  },
  {
    "id": "110",
    "youtubeId": "4eZhvOAiz3Q",
    "title": "50만뷰 자존감을 올리는 방법",
    "url": "https://youtube.com/shorts/4eZhvOAiz3Q",
    "categories": [
      "마인드셋"
    ],
    "views": 586290,
    "date": "2025. 7. 15.",
    "channel": "처세술 가이드",
    "tags": [
      "마인드셋"
    ],
    "thumbnail": "https://img.youtube.com/vi/4eZhvOAiz3Q/mqdefault.jpg"
  },
  {
    "id": "111",
    "youtubeId": "WAlBpZIfbGA",
    "title": "타블로 조언",
    "url": "https://youtube.com/shorts/WAlBpZIfbGA",
    "categories": [
      "자기계발",
      "동기부여",
      "인생조언"
    ],
    "views": 590529,
    "date": "2025. 10. 22.",
    "channel": "위로의 멜로디",
    "tags": [
      "자기계발",
      "동기부여",
      "인생조언"
    ],
    "thumbnail": "https://img.youtube.com/vi/WAlBpZIfbGA/mqdefault.jpg"
  },
  {
    "id": "112",
    "youtubeId": "YeWFM3v4feo",
    "title": "54세 이혼남이 사는 법!",
    "url": "https://youtube.com/shorts/YeWFM3v4feo",
    "categories": [
      "인생조언"
    ],
    "views": 594768,
    "date": "2025. 1. 1.",
    "channel": "인생학개론",
    "tags": [
      "인생조언"
    ],
    "thumbnail": "https://img.youtube.com/vi/YeWFM3v4feo/mqdefault.jpg"
  },
  {
    "id": "113",
    "youtubeId": "AsAQLcbJZ30",
    "title": "성공을 꿰뚫는 그림 7가지 ✨",
    "url": "https://youtube.com/shorts/AsAQLcbJZ30",
    "categories": [
      "동기부여"
    ],
    "views": 599007,
    "date": "2025. 4. 8.",
    "channel": "지혜의 등대",
    "tags": [
      "동기부여"
    ],
    "thumbnail": "https://img.youtube.com/vi/AsAQLcbJZ30/mqdefault.jpg"
  },
  {
    "id": "114",
    "youtubeId": "btB2w1lFHEU",
    "title": "결국 인생에서 가장 중요한 건.. ✨",
    "url": "https://youtube.com/shorts/btB2w1lFHEU",
    "categories": [
      "인생조언"
    ],
    "views": 603246,
    "date": "2025. 7. 15.",
    "channel": "철학의 숲",
    "tags": [
      "인생조언"
    ],
    "thumbnail": "https://img.youtube.com/vi/btB2w1lFHEU/mqdefault.jpg"
  },
  {
    "id": "115",
    "youtubeId": "jCS0k0KCuNM",
    "title": "삶에 길이 없다고 느껴질 때 ✨",
    "url": "https://youtube.com/shorts/jCS0k0KCuNM",
    "categories": [
      "인생조언"
    ],
    "views": 607485,
    "date": "2025. 10. 22.",
    "channel": "동기부여 연구소",
    "tags": [
      "인생조언"
    ],
    "thumbnail": "https://img.youtube.com/vi/jCS0k0KCuNM/mqdefault.jpg"
  },
  {
    "id": "116",
    "youtubeId": "Nxp5Wc4OCng",
    "title": "불안을 다스리는 그림 7가지 ✨",
    "url": "https://youtube.com/shorts/Nxp5Wc4OCng",
    "categories": [
      "마인드셋"
    ],
    "views": 611724,
    "date": "2025. 1. 1.",
    "channel": "성공 마인드",
    "tags": [
      "마인드셋"
    ],
    "thumbnail": "https://img.youtube.com/vi/Nxp5Wc4OCng/mqdefault.jpg"
  },
  {
    "id": "117",
    "youtubeId": "Abh1yh7v3fE",
    "title": "산업화 시대의 가스라이팅 ✨",
    "url": "https://youtube.com/shorts/Abh1yh7v3fE",
    "categories": [
      "인생조언"
    ],
    "views": 615963,
    "date": "2025. 4. 8.",
    "channel": "처세술 가이드",
    "tags": [
      "인생조언"
    ],
    "thumbnail": "https://img.youtube.com/vi/Abh1yh7v3fE/mqdefault.jpg"
  },
  {
    "id": "118",
    "youtubeId": "4CZurOsyuk0",
    "title": "세상을 꿰뚫는 그림 7가지 ✨",
    "url": "https://youtube.com/shorts/4CZurOsyuk0",
    "categories": [
      "인생조언"
    ],
    "views": 620202,
    "date": "2025. 7. 15.",
    "channel": "위로의 멜로디",
    "tags": [
      "인생조언"
    ],
    "thumbnail": "https://img.youtube.com/vi/4CZurOsyuk0/mqdefault.jpg"
  },
  {
    "id": "119",
    "youtubeId": "t-U7z0GE8nI",
    "title": "하기 싫은 것도 해야하는 이유",
    "url": "https://youtube.com/shorts/t-U7z0GE8nI",
    "categories": [
      "인생조언"
    ],
    "views": 624441,
    "date": "2025. 10. 22.",
    "channel": "인생학개론",
    "tags": [
      "인생조언"
    ],
    "thumbnail": "https://img.youtube.com/vi/t-U7z0GE8nI/mqdefault.jpg"
  },
  {
    "id": "120",
    "youtubeId": "ofEc35_VcIw",
    "title": "일론 머스크, 면접 때 항상 하는 질문🫣",
    "url": "https://youtube.com/shorts/ofEc35_VcIw",
    "categories": [
      "인생조언"
    ],
    "views": 628680,
    "date": "2025. 1. 1.",
    "channel": "지혜의 등대",
    "tags": [
      "인생조언"
    ],
    "thumbnail": "https://img.youtube.com/vi/ofEc35_VcIw/mqdefault.jpg"
  },
  {
    "id": "121",
    "youtubeId": "AYwWNg8AEq8",
    "title": "자기객관화 없이는 실력도 없다",
    "url": "https://youtube.com/shorts/AYwWNg8AEq8",
    "categories": [
      "인생조언"
    ],
    "views": 632919,
    "date": "2025. 4. 8.",
    "channel": "철학의 숲",
    "tags": [
      "인생조언"
    ],
    "thumbnail": "https://img.youtube.com/vi/AYwWNg8AEq8/mqdefault.jpg"
  },
  {
    "id": "122",
    "youtubeId": "gkwtXK2zeb4",
    "title": "성공은 혼자 만들어지지않는다",
    "url": "https://youtube.com/shorts/gkwtXK2zeb4",
    "categories": [
      "동기부여"
    ],
    "views": 637158,
    "date": "2025. 7. 15.",
    "channel": "동기부여 연구소",
    "tags": [
      "동기부여"
    ],
    "thumbnail": "https://img.youtube.com/vi/gkwtXK2zeb4/mqdefault.jpg"
  },
  {
    "id": "123",
    "youtubeId": "99ISIQGZnH4",
    "title": "주변 사람 말을 들을 필요가 없는 이유",
    "url": "https://youtube.com/shorts/99ISIQGZnH4",
    "categories": [
      "동기부여",
      "인간관계"
    ],
    "views": 641397,
    "date": "2025. 10. 22.",
    "channel": "성공 마인드",
    "tags": [
      "동기부여",
      "인간관계"
    ],
    "thumbnail": "https://img.youtube.com/vi/99ISIQGZnH4/mqdefault.jpg"
  },
  {
    "id": "124",
    "youtubeId": "NsSI60F9BZ4",
    "title": "세계 랭킹 1위 김연경의 리더십",
    "url": "https://youtube.com/shorts/NsSI60F9BZ4",
    "categories": [
      "인생조언"
    ],
    "views": 645636,
    "date": "2025. 1. 1.",
    "channel": "처세술 가이드",
    "tags": [
      "인생조언"
    ],
    "thumbnail": "https://img.youtube.com/vi/NsSI60F9BZ4/mqdefault.jpg"
  },
  {
    "id": "125",
    "youtubeId": "Dk6P582QxTc",
    "title": "멋진 선배 김나희",
    "url": "https://youtube.com/shorts/Dk6P582QxTc",
    "categories": [
      "인생조언"
    ],
    "views": 649875,
    "date": "2025. 4. 8.",
    "channel": "위로의 멜로디",
    "tags": [
      "인생조언"
    ],
    "thumbnail": "https://img.youtube.com/vi/Dk6P582QxTc/mqdefault.jpg"
  },
  {
    "id": "126",
    "youtubeId": "fNeVxKx_Slk",
    "title": "김연경 말만 들으면 벌어지는 일",
    "url": "https://youtube.com/shorts/fNeVxKx_Slk",
    "categories": [
      "인생조언"
    ],
    "views": 654114,
    "date": "2025. 7. 15.",
    "channel": "인생학개론",
    "tags": [
      "인생조언"
    ],
    "thumbnail": "https://img.youtube.com/vi/fNeVxKx_Slk/mqdefault.jpg"
  },
  {
    "id": "127",
    "youtubeId": "msVBnvlj4rY",
    "title": "동기부여와 위로가 되는 드라마 속 명대사 [낭만닥터 김사부]",
    "url": "https://youtu.be/msVBnvlj4rY",
    "categories": [
      "동기부여"
    ],
    "views": 658353,
    "date": "2025. 10. 22.",
    "channel": "지혜의 등대",
    "tags": [
      "동기부여"
    ],
    "thumbnail": "https://img.youtube.com/vi/msVBnvlj4rY/mqdefault.jpg"
  },
  {
    "id": "128",
    "youtubeId": "HTFNL9jEfd8",
    "title": "돌아보면 정답이었던 명언모음",
    "url": "https://youtube.com/shorts/HTFNL9jEfd8",
    "categories": [
      "인생조언"
    ],
    "views": 662592,
    "date": "2025. 1. 1.",
    "channel": "철학의 숲",
    "tags": [
      "인생조언"
    ],
    "thumbnail": "https://img.youtube.com/vi/HTFNL9jEfd8/mqdefault.jpg"
  },
  {
    "id": "129",
    "youtubeId": "7FFWGJj_hwU",
    "title": "여성이 남자를 만날 때 보는 1위-3위",
    "url": "https://youtube.com/shorts/7FFWGJj_hwU",
    "categories": [
      "인생조언"
    ],
    "views": 666831,
    "date": "2025. 4. 8.",
    "channel": "동기부여 연구소",
    "tags": [
      "인생조언"
    ],
    "thumbnail": "https://img.youtube.com/vi/7FFWGJj_hwU/mqdefault.jpg"
  },
  {
    "id": "130",
    "youtubeId": "3m6ytTMrWgs",
    "title": "말보다 행동을 봐야하는 이유🫣",
    "url": "https://youtube.com/shorts/3m6ytTMrWgs",
    "categories": [
      "인생조언"
    ],
    "views": 671070,
    "date": "2025. 7. 15.",
    "channel": "성공 마인드",
    "tags": [
      "인생조언"
    ],
    "thumbnail": "https://img.youtube.com/vi/3m6ytTMrWgs/mqdefault.jpg"
  },
  {
    "id": "131",
    "youtubeId": "GzTYAi6XL_8",
    "title": "인생에서 가장 중요한 수업…",
    "url": "https://youtube.com/shorts/GzTYAi6XL_8",
    "categories": [
      "인생조언"
    ],
    "views": 675309,
    "date": "2025. 10. 22.",
    "channel": "처세술 가이드",
    "tags": [
      "인생조언"
    ],
    "thumbnail": "https://img.youtube.com/vi/GzTYAi6XL_8/mqdefault.jpg"
  },
  {
    "id": "132",
    "youtubeId": "Tf0N6HOdd5A",
    "title": "억만장자들보다 더 값졌다고 한 인터뷰",
    "url": "https://youtube.com/shorts/Tf0N6HOdd5A",
    "categories": [
      "인생조언"
    ],
    "views": 679548,
    "date": "2025. 1. 1.",
    "channel": "위로의 멜로디",
    "tags": [
      "인생조언"
    ],
    "thumbnail": "https://img.youtube.com/vi/Tf0N6HOdd5A/mqdefault.jpg"
  },
  {
    "id": "133",
    "youtubeId": "FviMCp2CuaM",
    "title": "나의 길을 가려는 너를 위해🏆",
    "url": "https://youtube.com/shorts/FviMCp2CuaM",
    "categories": [
      "마인드셋",
      "동기부여",
      "인생조언"
    ],
    "views": 683787,
    "date": "2025. 4. 8.",
    "channel": "인생학개론",
    "tags": [
      "마인드셋",
      "동기부여",
      "인생조언"
    ],
    "thumbnail": "https://img.youtube.com/vi/FviMCp2CuaM/mqdefault.jpg"
  },
  {
    "id": "134",
    "youtubeId": "pwYhNR2rkOE",
    "title": "중요한건 꺾이지 않는 마음🏆",
    "url": "https://youtube.com/shorts/pwYhNR2rkOE",
    "categories": [
      "동기부여"
    ],
    "views": 688026,
    "date": "2025. 7. 15.",
    "channel": "지혜의 등대",
    "tags": [
      "동기부여"
    ],
    "thumbnail": "https://img.youtube.com/vi/pwYhNR2rkOE/mqdefault.jpg"
  },
  {
    "id": "135",
    "youtubeId": "sAeS_9NK5To",
    "title": "진정한 선배의 품격🏆",
    "url": "https://youtube.com/shorts/sAeS_9NK5To",
    "categories": [
      "동기부여"
    ],
    "views": 692265,
    "date": "2025. 10. 22.",
    "channel": "철학의 숲",
    "tags": [
      "동기부여"
    ],
    "thumbnail": "https://img.youtube.com/vi/sAeS_9NK5To/mqdefault.jpg"
  },
  {
    "id": "136",
    "youtubeId": "c6qsQeXVuFc",
    "title": "모두를 감동시킨 행위 예술가의 표현",
    "url": "https://youtube.com/shorts/c6qsQeXVuFc",
    "categories": [
      "인생조언"
    ],
    "views": 696504,
    "date": "2025. 1. 1.",
    "channel": "동기부여 연구소",
    "tags": [
      "인생조언"
    ],
    "thumbnail": "https://img.youtube.com/vi/c6qsQeXVuFc/mqdefault.jpg"
  },
  {
    "id": "137",
    "youtubeId": "Fvg7-MBKJXs",
    "title": "[🔴ON AIR] ＂그냥 와서 내 옆에 있어만 줘＂ 이보영의 도움으로 한준우에게 진심을 전한 손나은｜대행사｜JTBC 230225 방송",
    "url": "https://youtu.be/Fvg7-MBKJXs",
    "categories": [
      "인생조언"
    ],
    "views": 700743,
    "date": "2025. 4. 8.",
    "channel": "성공 마인드",
    "tags": [
      "인생조언"
    ],
    "thumbnail": "https://img.youtube.com/vi/Fvg7-MBKJXs/mqdefault.jpg"
  },
  {
    "id": "138",
    "youtubeId": "hfClHk8VFKc",
    "title": "진짜아름다움은 두려움뒤에",
    "url": "https://youtube.com/shorts/hfClHk8VFKc",
    "categories": [
      "인생조언"
    ],
    "views": 704982,
    "date": "2025. 7. 15.",
    "channel": "처세술 가이드",
    "tags": [
      "인생조언"
    ],
    "thumbnail": "https://img.youtube.com/vi/hfClHk8VFKc/mqdefault.jpg"
  },
  {
    "id": "139",
    "youtubeId": "px4vz4WVmY8",
    "title": "기적이 되어라",
    "url": "https://youtube.com/shorts/px4vz4WVmY8",
    "categories": [
      "인생조언"
    ],
    "views": 709221,
    "date": "2025. 10. 22.",
    "channel": "위로의 멜로디",
    "tags": [
      "인생조언"
    ],
    "thumbnail": "https://img.youtube.com/vi/px4vz4WVmY8/mqdefault.jpg"
  },
  {
    "id": "140",
    "youtubeId": "zFjHmFbazQQ",
    "title": "상처 받을 위험을 감수하라",
    "url": "https://youtube.com/shorts/zFjHmFbazQQ",
    "categories": [
      "인생조언"
    ],
    "views": 713460,
    "date": "2025. 1. 1.",
    "channel": "인생학개론",
    "tags": [
      "인생조언"
    ],
    "thumbnail": "https://img.youtube.com/vi/zFjHmFbazQQ/mqdefault.jpg"
  },
  {
    "id": "141",
    "youtubeId": "i2cHPyuDzIg",
    "title": "어떤 선택이든 가치는 존재한다",
    "url": "https://youtube.com/shorts/i2cHPyuDzIg",
    "categories": [
      "마인드셋"
    ],
    "views": 717699,
    "date": "2025. 4. 8.",
    "channel": "지혜의 등대",
    "tags": [
      "마인드셋"
    ],
    "thumbnail": "https://img.youtube.com/vi/i2cHPyuDzIg/mqdefault.jpg"
  },
  {
    "id": "142",
    "youtubeId": "L9-JPhTQb6U",
    "title": "탐욕은 가장 비싼 예술이다",
    "url": "https://youtube.com/shorts/L9-JPhTQb6U",
    "categories": [
      "인생조언"
    ],
    "views": 721938,
    "date": "2025. 7. 15.",
    "channel": "철학의 숲",
    "tags": [
      "인생조언"
    ],
    "thumbnail": "https://img.youtube.com/vi/L9-JPhTQb6U/mqdefault.jpg"
  },
  {
    "id": "143",
    "youtubeId": "lwD50wXPw24",
    "title": "문제는 늘 작은 균열부터 시작된다",
    "url": "https://youtube.com/shorts/lwD50wXPw24",
    "categories": [
      "인생조언"
    ],
    "views": 726177,
    "date": "2025. 10. 22.",
    "channel": "동기부여 연구소",
    "tags": [
      "인생조언"
    ],
    "thumbnail": "https://img.youtube.com/vi/lwD50wXPw24/mqdefault.jpg"
  },
  {
    "id": "144",
    "youtubeId": "X6_rqjKG1fc",
    "title": "겉모습으로 판단하지 말기",
    "url": "https://youtube.com/shorts/X6_rqjKG1fc",
    "categories": [
      "인생조언"
    ],
    "views": 730416,
    "date": "2025. 1. 1.",
    "channel": "성공 마인드",
    "tags": [
      "인생조언"
    ],
    "thumbnail": "https://img.youtube.com/vi/X6_rqjKG1fc/mqdefault.jpg"
  },
  {
    "id": "145",
    "youtubeId": "suw4fPsAgJQ",
    "title": "박정민 에피소드 운전기사편",
    "url": "https://youtube.com/shorts/suw4fPsAgJQ",
    "categories": [
      "인생조언"
    ],
    "views": 734655,
    "date": "2025. 4. 8.",
    "channel": "처세술 가이드",
    "tags": [
      "인생조언"
    ],
    "thumbnail": "https://img.youtube.com/vi/suw4fPsAgJQ/mqdefault.jpg"
  },
  {
    "id": "146",
    "youtubeId": "YvbPWIhNwxg",
    "title": "아무리 근육이 많아도… 고기만 먹다 돌연사, 50초 안에 설명하기",
    "url": "https://youtube.com/shorts/YvbPWIhNwxg",
    "categories": [
      "인생조언"
    ],
    "views": 738894,
    "date": "2025. 7. 15.",
    "channel": "위로의 멜로디",
    "tags": [
      "인생조언"
    ],
    "thumbnail": "https://img.youtube.com/vi/YvbPWIhNwxg/mqdefault.jpg"
  },
  {
    "id": "147",
    "youtubeId": "tZGtLw_199U",
    "title": "성실함도 개인기다",
    "url": "https://youtube.com/shorts/tZGtLw_199U",
    "categories": [
      "인생조언"
    ],
    "views": 743133,
    "date": "2025. 10. 22.",
    "channel": "인생학개론",
    "tags": [
      "인생조언"
    ],
    "thumbnail": "https://img.youtube.com/vi/tZGtLw_199U/mqdefault.jpg"
  },
  {
    "id": "148",
    "youtubeId": "TMHGdCrs6oM",
    "title": "성공의 기본 조건",
    "url": "https://youtube.com/shorts/TMHGdCrs6oM",
    "categories": [
      "동기부여"
    ],
    "views": 747372,
    "date": "2025. 1. 1.",
    "channel": "지혜의 등대",
    "tags": [
      "동기부여"
    ],
    "thumbnail": "https://img.youtube.com/vi/TMHGdCrs6oM/mqdefault.jpg"
  },
  {
    "id": "149",
    "youtubeId": "dPgkLlLITvA",
    "title": "일은 힘든 게 정상이다 재밌으면 돈 내고 다닌다",
    "url": "https://youtube.com/shorts/dPgkLlLITvA",
    "categories": [
      "자기계발",
      "마인드셋",
      "동기부여",
      "인생조언"
    ],
    "views": 751611,
    "date": "2025. 4. 8.",
    "channel": "철학의 숲",
    "tags": [
      "자기계발",
      "마인드셋",
      "동기부여",
      "인생조언"
    ],
    "thumbnail": "https://img.youtube.com/vi/dPgkLlLITvA/mqdefault.jpg"
  },
  {
    "id": "150",
    "youtubeId": "HSMQD1AvT60",
    "title": "큰일에는 원칙 작은 일에는 연민이면 충분하다",
    "url": "https://youtube.com/shorts/HSMQD1AvT60",
    "categories": [
      "인간관계",
      "마인드셋",
      "인생조언",
      "동기부여",
      "자기계발"
    ],
    "views": 755850,
    "date": "2025. 7. 15.",
    "channel": "동기부여 연구소",
    "tags": [
      "인간관계",
      "마인드셋",
      "인생조언",
      "동기부여",
      "자기계발"
    ],
    "thumbnail": "https://img.youtube.com/vi/HSMQD1AvT60/mqdefault.jpg"
  },
  {
    "id": "151",
    "youtubeId": "XQbB91r-wCQ",
    "title": "짜증나는 일로 망치지 말고 닦고 지나가면 그만이다",
    "url": "https://youtube.com/shorts/XQbB91r-wCQ",
    "categories": [
      "자기계발",
      "마인드셋",
      "동기부여",
      "인생조언"
    ],
    "views": 760089,
    "date": "2025. 10. 22.",
    "channel": "성공 마인드",
    "tags": [
      "자기계발",
      "마인드셋",
      "동기부여",
      "인생조언"
    ],
    "thumbnail": "https://img.youtube.com/vi/XQbB91r-wCQ/mqdefault.jpg"
  },
  {
    "id": "152",
    "youtubeId": "6TCXd6NgxNs",
    "title": "아직 안 망했어 다시 해내면 그게 성공이다 ...",
    "url": "https://youtube.com/shorts/6TCXd6NgxNs",
    "categories": [
      "인간관계",
      "마인드셋",
      "인생조언",
      "동기부여",
      "자기계발"
    ],
    "views": 764328,
    "date": "2025. 1. 1.",
    "channel": "처세술 가이드",
    "tags": [
      "인간관계",
      "마인드셋",
      "인생조언",
      "동기부여",
      "자기계발"
    ],
    "thumbnail": "https://img.youtube.com/vi/6TCXd6NgxNs/mqdefault.jpg"
  },
  {
    "id": "153",
    "youtubeId": "aOFefIyoeYY",
    "title": "드웨인 존슨이 분노한 이유 😡 행복은 '선택'이라는 헛소리, 그만하세요.",
    "url": "https://youtube.com/shorts/aOFefIyoeYY",
    "categories": [
      "마인드셋",
      "인생조언"
    ],
    "views": 768567,
    "date": "2025. 4. 8.",
    "channel": "위로의 멜로디",
    "tags": [
      "마인드셋",
      "인생조언"
    ],
    "thumbnail": "https://img.youtube.com/vi/aOFefIyoeYY/mqdefault.jpg"
  },
  {
    "id": "154",
    "youtubeId": "D6xYAieclWI",
    "title": "😔당신이 자꾸 넘어져도 괜찮은 이유",
    "url": "https://youtube.com/shorts/D6xYAieclWI",
    "categories": [
      "인생조언"
    ],
    "views": 772806,
    "date": "2025. 7. 15.",
    "channel": "인생학개론",
    "tags": [
      "인생조언"
    ],
    "thumbnail": "https://img.youtube.com/vi/D6xYAieclWI/mqdefault.jpg"
  },
  {
    "id": "155",
    "youtubeId": "sxi-ahG32ec",
    "title": "해외에서 여우 조연상을 받은 여배우의 한마디",
    "url": "https://youtube.com/shorts/sxi-ahG32ec",
    "categories": [
      "자기계발"
    ],
    "views": 777045,
    "date": "2025. 10. 22.",
    "channel": "지혜의 등대",
    "tags": [
      "자기계발"
    ],
    "thumbnail": "https://img.youtube.com/vi/sxi-ahG32ec/mqdefault.jpg"
  },
  {
    "id": "156",
    "youtubeId": "EoA0ChwTMOY",
    "title": "진짜 친구가 없다고 느껴질때…",
    "url": "https://youtube.com/shorts/EoA0ChwTMOY",
    "categories": [
      "인간관계",
      "자기계발"
    ],
    "views": 781284,
    "date": "2025. 1. 1.",
    "channel": "철학의 숲",
    "tags": [
      "인간관계",
      "자기계발"
    ],
    "thumbnail": "https://img.youtube.com/vi/EoA0ChwTMOY/mqdefault.jpg"
  },
  {
    "id": "157",
    "youtubeId": "-6UF2j70A-w",
    "title": "BBC도 인정한 손흥민의 클래스 태도까지 완벽하다",
    "url": "https://youtube.com/shorts/-6UF2j70A-w",
    "categories": [
      "인생조언"
    ],
    "views": 785523,
    "date": "2025. 4. 8.",
    "channel": "동기부여 연구소",
    "tags": [
      "인생조언"
    ],
    "thumbnail": "https://img.youtube.com/vi/-6UF2j70A-w/mqdefault.jpg"
  },
  {
    "id": "158",
    "youtubeId": "ZZNouVwDKEE",
    "title": "우리가 몰랐던 손흥민의 득점왕 당시 숨은 이야기",
    "url": "https://youtube.com/shorts/ZZNouVwDKEE",
    "categories": [
      "인생조언"
    ],
    "views": 789762,
    "date": "2025. 7. 15.",
    "channel": "성공 마인드",
    "tags": [
      "인생조언"
    ],
    "thumbnail": "https://img.youtube.com/vi/ZZNouVwDKEE/mqdefault.jpg"
  },
  {
    "id": "159",
    "youtubeId": "tMTRQzg0pf4",
    "title": "🟪'올해 나만 힘들어?' 하는 분들 꼭 보세요! - 김미경 인생강연",
    "url": "https://youtu.be/tMTRQzg0pf4",
    "categories": [
      "인생조언"
    ],
    "views": 794001,
    "date": "2025. 10. 22.",
    "channel": "처세술 가이드",
    "tags": [
      "인생조언"
    ],
    "thumbnail": "https://img.youtube.com/vi/tMTRQzg0pf4/mqdefault.jpg"
  },
  {
    "id": "160",
    "youtubeId": "f4MiCUFll6Y",
    "title": "🟪아무리 애써도 안될 때 멘탈 지키려면 꼭 '이걸' 해보세요! - 김미경의 인생강연",
    "url": "https://youtu.be/f4MiCUFll6Y",
    "categories": [
      "마인드셋",
      "인생조언"
    ],
    "views": 798240,
    "date": "2025. 1. 1.",
    "channel": "위로의 멜로디",
    "tags": [
      "마인드셋",
      "인생조언"
    ],
    "thumbnail": "https://img.youtube.com/vi/f4MiCUFll6Y/mqdefault.jpg"
  },
  {
    "id": "161",
    "youtubeId": "LBMAwcjUm9k",
    "title": "너를 이해하지 못하는 사람에게 설명하지 마라.",
    "url": "https://youtube.com/shorts/LBMAwcjUm9k",
    "categories": [
      "인간관계"
    ],
    "views": 802479,
    "date": "2025. 4. 8.",
    "channel": "인생학개론",
    "tags": [
      "인간관계"
    ],
    "thumbnail": "https://img.youtube.com/vi/LBMAwcjUm9k/mqdefault.jpg"
  },
  {
    "id": "162",
    "youtubeId": "_1F1dFfIkKI",
    "title": "내가 참고 있는 모든 건 언젠가 폭발한다.",
    "url": "https://youtube.com/shorts/_1F1dFfIkKI",
    "categories": [
      "인생조언"
    ],
    "views": 806718,
    "date": "2025. 7. 15.",
    "channel": "지혜의 등대",
    "tags": [
      "인생조언"
    ],
    "thumbnail": "https://img.youtube.com/vi/_1F1dFfIkKI/mqdefault.jpg"
  },
  {
    "id": "163",
    "youtubeId": "wtsLkfLRcm8",
    "title": "이해를 구걸하지 마라.",
    "url": "https://youtube.com/shorts/wtsLkfLRcm8",
    "categories": [
      "인생조언"
    ],
    "views": 810957,
    "date": "2025. 10. 22.",
    "channel": "철학의 숲",
    "tags": [
      "인생조언"
    ],
    "thumbnail": "https://img.youtube.com/vi/wtsLkfLRcm8/mqdefault.jpg"
  },
  {
    "id": "164",
    "youtubeId": "hNnfw0QJTxE",
    "title": "늙어봐야 깨닫는 인생의 현실 명언 5가지",
    "url": "https://youtube.com/shorts/hNnfw0QJTxE",
    "categories": [
      "자기계발",
      "동기부여",
      "인생조언"
    ],
    "views": 815196,
    "date": "2025. 1. 1.",
    "channel": "동기부여 연구소",
    "tags": [
      "자기계발",
      "동기부여",
      "인생조언"
    ],
    "thumbnail": "https://img.youtube.com/vi/hNnfw0QJTxE/mqdefault.jpg"
  },
  {
    "id": "165",
    "youtubeId": "ClArv9CPIX8",
    "title": "존중받는 사람이 절대 안 하는 행동 5가지",
    "url": "https://youtube.com/shorts/ClArv9CPIX8",
    "categories": [
      "자기계발",
      "동기부여",
      "인간관계",
      "인생조언"
    ],
    "views": 819435,
    "date": "2025. 4. 8.",
    "channel": "성공 마인드",
    "tags": [
      "자기계발",
      "동기부여",
      "인간관계",
      "인생조언"
    ],
    "thumbnail": "https://img.youtube.com/vi/ClArv9CPIX8/mqdefault.jpg"
  },
  {
    "id": "166",
    "youtubeId": "IJS8m8288No",
    "title": "한명회의 처세술, 50년을 버틴 단 3가지 법칙",
    "url": "https://youtube.com/shorts/IJS8m8288No",
    "categories": [
      "자기계발",
      "동기부여",
      "인생조언"
    ],
    "views": 823674,
    "date": "2025. 7. 15.",
    "channel": "처세술 가이드",
    "tags": [
      "자기계발",
      "동기부여",
      "인생조언"
    ],
    "thumbnail": "https://img.youtube.com/vi/IJS8m8288No/mqdefault.jpg"
  },
  {
    "id": "167",
    "youtubeId": "3EH6nFJVMRs",
    "title": "프레이밍 효과. 말투 하나로 판단이 바뀐다.",
    "url": "https://youtube.com/shorts/3EH6nFJVMRs",
    "categories": [
      "대화법"
    ],
    "views": 827913,
    "date": "2025. 10. 22.",
    "channel": "위로의 멜로디",
    "tags": [
      "대화법"
    ],
    "thumbnail": "https://img.youtube.com/vi/3EH6nFJVMRs/mqdefault.jpg"
  },
  {
    "id": "168",
    "youtubeId": "default_168",
    "title": "인생에서 절대 돈 아끼면 안 되는 7가지 | 북올림",
    "url": "https://share.google/aTFWlzZVC51CJxSeX",
    "categories": [
      "자기계발",
      "인생조언"
    ],
    "views": 832152,
    "date": "2025. 1. 1.",
    "channel": "인생학개론",
    "tags": [
      "자기계발",
      "인생조언"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500"
  },
  {
    "id": "169",
    "youtubeId": "cTfBYeboGII",
    "title": "정신차리고 싶을땐 김연경이 특효약",
    "url": "https://youtube.com/shorts/cTfBYeboGII",
    "categories": [
      "인생조언"
    ],
    "views": 836391,
    "date": "2025. 4. 8.",
    "channel": "지혜의 등대",
    "tags": [
      "인생조언"
    ],
    "thumbnail": "https://img.youtube.com/vi/cTfBYeboGII/mqdefault.jpg"
  },
  {
    "id": "170",
    "youtubeId": "xKMo5Curc28",
    "title": "비서랑 한 약속 지키러 온 이보영",
    "url": "https://youtube.com/shorts/xKMo5Curc28",
    "categories": [
      "인생조언"
    ],
    "views": 840630,
    "date": "2025. 7. 15.",
    "channel": "철학의 숲",
    "tags": [
      "인생조언"
    ],
    "thumbnail": "https://img.youtube.com/vi/xKMo5Curc28/mqdefault.jpg"
  },
  {
    "id": "171",
    "youtubeId": "BQ87o42a8vU",
    "title": "지금까지 본 명언 중 이게 진짜 최고다",
    "url": "https://youtube.com/shorts/BQ87o42a8vU",
    "categories": [
      "마인드셋",
      "인생조언"
    ],
    "views": 844869,
    "date": "2025. 10. 22.",
    "channel": "동기부여 연구소",
    "tags": [
      "마인드셋",
      "인생조언"
    ],
    "thumbnail": "https://img.youtube.com/vi/BQ87o42a8vU/mqdefault.jpg"
  },
  {
    "id": "172",
    "youtubeId": "45jdYmX8Pgc",
    "title": "가장 힘들었던 순간이 행복한 순간이 될 때",
    "url": "https://youtube.com/shorts/45jdYmX8Pgc",
    "categories": [
      "마인드셋"
    ],
    "views": 849108,
    "date": "2025. 1. 1.",
    "channel": "성공 마인드",
    "tags": [
      "마인드셋"
    ],
    "thumbnail": "https://img.youtube.com/vi/45jdYmX8Pgc/mqdefault.jpg"
  },
  {
    "id": "173",
    "youtubeId": "mg_NvedwyZc",
    "title": "네가 먼저 변해야. 주변의 수준도 바뀐다.",
    "url": "https://youtube.com/shorts/mg_NvedwyZc",
    "categories": [
      "인생조언"
    ],
    "views": 853347,
    "date": "2025. 4. 8.",
    "channel": "처세술 가이드",
    "tags": [
      "인생조언"
    ],
    "thumbnail": "https://img.youtube.com/vi/mg_NvedwyZc/mqdefault.jpg"
  },
  {
    "id": "174",
    "youtubeId": "HFTs3i8KTOI",
    "title": "김연경이 감독을 하면 벌어지는 일 ㄷㄷㄷ",
    "url": "https://youtu.be/HFTs3i8KTOI",
    "categories": [
      "인생조언"
    ],
    "views": 857586,
    "date": "2025. 7. 15.",
    "channel": "위로의 멜로디",
    "tags": [
      "인생조언"
    ],
    "thumbnail": "https://img.youtube.com/vi/HFTs3i8KTOI/mqdefault.jpg"
  }
];
