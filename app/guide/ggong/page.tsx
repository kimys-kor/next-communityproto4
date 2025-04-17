import Image from "next/image";

import question from "/public/images/question.png";
import talkball from "/public/images/talkball.png";
import advantage from "/public/images/advantage.png";
import logo from "/public/images/logo.png";
import SubMenu from "../(components)/SubMenu";
import { Metadata } from "next";
import Breadcrumb from "@/app/components/BreadCrumb";
import GuideContent from "../(components)/GuideContent";
import Title from "@/app/components/Title";
import { pageData } from "../../data/pageData";

export const metadata: Metadata = {
  title: "토토사이트 이용가이드 | 꽁머니팡",
  description:
    "꽁머니팡에서 안전하고 즐거운 토토사이트 이용을 위한 필수 가이드라인을 확인하세요. 먹튀 예방, 안전놀이터 선택 기준, 꽁머니 활용법 등 유용한 정보를 제공합니다.",
  keywords: [
    "토토사이트",
    "안전놀이터",
    "먹튀검증",
    "꽁머니",
    "꽁머니팡",
    "이용가이드",
    "베팅팁",
    "스포츠토토",
    "파워볼",
  ],
  openGraph: {
    title: "토토사이트 이용가이드 | 꽁머니팡",
    description:
      "꽁머니팡과 함께 안전한 토토사이트 이용 시작하기. 먹튀 걱정 없는 안전놀이터 선택부터 꽁머니 100% 활용법까지, 당신의 성공적인 베팅을 위한 가이드.",
    url: "https://ggongpang.com.com/guide",
    siteName: "꽁머니팡: 토토사이트 이용가이드",
    type: "website",
    images: [
      {
        url: "/images/opengraph-guide.jpg",
        width: 1200,
        height: 630,
        alt: "꽁머니팡 토토사이트 이용가이드",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "토토사이트 이용가이드 | 꽁머니팡",
    description:
      "안전 베팅의 시작, 꽁머니팡 토토사이트 이용가이드! 먹튀 예방부터 안전놀이터 고르는 법, 꽁머니 활용 꿀팁까지 모두 담았습니다.",
    images: ["/images/twitter-guide.jpg"],
  },
};

const breadcrumbData = {
  title: "이용가이드",
  subMenu: "이용가이드",
};

function GuidePage() {
  return (
    <div className="w-full pt-36">
      <SubMenu />

      <main className="min-h-screen flex flex-col items-center">
        <Title
          title={pageData.guide.title}
          description={pageData.guide.description}
        />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex-grow py-12">
          <GuideContent />
        </div>
      </main>
    </div>
  );
}

export default GuidePage;
