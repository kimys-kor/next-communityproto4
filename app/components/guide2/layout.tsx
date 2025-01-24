import Proto2layout2guide from "@/app/components/layouts/proto2layout2guide";

export const metadata = {
  title: "토이소 - 먹튀검증 설명",
  description:
    "먹튀를 당하지 않기 위한, 먹튀 피해 방지를 위한 글, 토토 프로토 꽁머니 안전놀이터 메이저놀이터 등 토토를 이용하는데 중요한 개념및 용어를 설명해주는 페이지 입니다.",
  openGraph: {
    title: "토이소 - 먹튀검증 설명",
    description:
      "먹튀를 당하지 않기 위한, 먹튀 피해 방지를 위한 글, 토토 프로토 꽁머니 안전놀이터 메이저놀이터 등 토토를 이용하는데 중요한 개념및 용어를 설명해주는 페이지 입니다.",
  },
  twitter: {
    title: "토이소 - 먹튀검증 설명",
    description:
      "먹튀를 당하지 않기 위한, 먹튀 피해 방지를 위한 글, 토토 프로토 꽁머니 안전놀이터 메이저놀이터 등 토토를 이용하는데 중요한 개념및 용어를 설명해주는 페이지 입니다.",
  },
  itemprop: {
    name: "가이드 페이지 토토커뮤니티 페이지 토이소: 토토사이트 꽁머니 파워볼 먹튀검증 커뮤니티 안전놀이터",
    description:
      "먹튀를 당하지 않기 위한, 먹튀 피해 방지를 위한 글, 토토 프로토 꽁머니 안전놀이터 메이저놀이터 등 토토를 이용하는데 중요한 개념및 용어를 설명해주는 페이지 입니다.",
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <Proto2layout2guide children={children} />;
}
