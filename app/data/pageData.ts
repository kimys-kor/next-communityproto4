// 모든 페이지의 제목 및 설명 데이터를 중앙에서 관리합니다.

interface PageContent {
  title: string;
  description: string;
}

interface PageData {
  [key: string]: PageContent;
}

export const pageData: PageData = {
  sport: {
    title: "전문가 스포츠분석",
    description:
      "꽁머니팡의 전문가들이 제공하는 다양한 종목의 심층 스포츠분석 정보를 통해 경기 예측의 정확도를 높여보세요. 안전한 토토사이트 추천 정보도 함께 확인하실 수 있습니다.",
  },
  sportAsia: {
    title: "아시아 축구 분석",
    description:
      "아시아 축구 리그의 최신 경기 분석과 전문가 예측 정보를 확인하세요. 꽁머니팡에서 제공하는 심층 분석으로 더 나은 베팅 전략을 세워보세요.",
  },
  sportMlb: {
    title: "MLB 야구 분석",
    description:
      "메이저리그(MLB)의 상세한 경기 분석, 선수 정보, 팀 전략 예측을 제공합니다. 꽁머니팡 전문가 분석과 함께 MLB 시즌을 즐겨보세요.",
  },
  sportBaseball: {
    title: "국내/NPB 야구 분석",
    description:
      "KBO와 NPB 리그의 경기 분석과 전문가 예측을 확인하세요. 꽁머니팡의 데이터 기반 분석으로 야구 베팅의 승률을 높여보세요.",
  },
  sportNba: {
    title: "NBA 농구 분석",
    description:
      "NBA 경기의 심층 분석, 팀 전술, 선수 스탯 예측 정보를 제공합니다. 꽁머니팡 전문가와 함께 NBA의 열기를 느껴보세요.",
  },
  sportBasket: {
    title: "국내/해외 농구 분석",
    description:
      "KBL 및 기타 해외 농구 리그의 경기 분석과 전문가 예측 정보를 제공합니다. 꽁머니팡에서 정확한 농구 분석 정보를 만나보세요.",
  },
  sportVolley: {
    title: "배구 분석",
    description:
      "국내외 배구 리그의 경기 분석, 팀 정보, 주요 선수 예측을 확인하세요. 꽁머니팡 전문가 분석으로 배구 경기의 재미를 더해보세요.",
  },
  community: {
    title: "꽁머니팡 커뮤니티 - 안구정화",
    description:
      "지친 눈을 즐겁게 해줄 다양한 이미지들을 만나보세요! 꽁머니팡 안구정화 게시판에서 재미와 휴식을 찾으실 수 있습니다.",
  },
  communityHumor: {
    title: "유머 & 이슈",
    description:
      "스포츠 관련 재미있는 유머와 최신 이슈들을 공유하는 공간입니다. 꽁머니팡 커뮤니티에서 즐거운 시간을 보내세요!",
  },
  communityPickster: {
    title: "나는 분석왕 (픽스터)",
    description:
      "자신만의 스포츠 분석과 예측을 공유하고 다른 회원들과 토론하는 공간입니다. 꽁머니팡 분석왕에 도전해보세요!",
  },
  communityFree: {
    title: "자유게시판",
    description:
      "스포츠, 토토사이트, 일상 등 다양한 주제에 대해 자유롭게 이야기 나누는 공간입니다. 꽁머니팡 커뮤니티에서 소통하세요.",
  },
  communityCase: {
    title: "피해사례 공유",
    description:
      "토토사이트 이용 중 겪었던 피해 사례를 공유하고 예방하는 공간입니다. 안전한 베팅 문화를 함께 만들어가요.",
  },
  partner: {
    title: "꽁머니팡 파트너",
    description:
      "꽁머니팡이 보증하는 안전한 파트너사들을 확인하세요. 각 파트너사의 상세 정보와 혜택을 제공합니다.",
  },
  event: {
    title: "진행중인 이벤트",
    description:
      "꽁머니팡과 파트너사들이 제공하는 다양한 이벤트 정보를 확인하고 풍성한 혜택을 받아가세요.",
  },
  promotion: {
    title: "토토사이트 홍보",
    description:
      "꽁머니팡에서 추천하는 최고의 토토사이트 홍보 정보를 확인하세요.",
  },
  guide: {
    title: "토토사이트 이용가이드",
    description: "안전한 토토사이트 이용을 위한 꽁머니팡 필수 가이드라인.",
  },
  // customer 경로는 페이지 구조상 Title 적용이 어려워 제외
};
