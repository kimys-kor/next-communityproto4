import TabAnalyzePage from "@/app/(home)/(components)/TabAnalyzePage";
import TabACommunityPage from "@/app/(home)/(components)/TabACommunityPage";
import ProgressSliderPage from "../components/ProgressSliderPage";
import HomeBanner from "./(components)/HomeBanner";
import { Suspense } from "react";
import HomeBannerSk from "../components/skeleton/HomeBannerSk";
import HomeBoard from "./(components)/HomeBoard";
import SportsDataTable from "./(components)/SportsDataTable";
import Page from "../guide/page";
import { Metadata } from "next";
import Link from "next/link";

// 홈페이지 메타데이터 SEO 강화
export const metadata: Metadata = {
  title:
    "꽁머니팡 | 토토사이트 추천, 먹튀검증, 꽁머니 정보 No.1 스포츠커뮤니티",
  description:
    "꽁머니팡에서 안전한 토토사이트 추천 받고 먹튀검증 정보를 확인하세요! 최신 꽁머니 이벤트와 전문가 스포츠분석, 활발한 스포츠커뮤니티를 만나보세요.",
  keywords: [
    "꽁머니",
    "먹튀검증",
    "토토사이트",
    "토토사이트추천",
    "스포츠분석",
    "스포츠커뮤니티",
    "안전놀이터",
    "꽁머니팡",
    "메이저사이트",
    "안전토토사이트",
    "꽁머니 이벤트",
  ],
  openGraph: {
    title:
      "꽁머니팡: 토토사이트 추천과 먹튀검증의 모든 것 | 꽁머니 & 스포츠분석",
    description:
      "안전 토토사이트 추천, 확실한 먹튀검증은 꽁머니팡! 실시간 꽁머니 정보와 전문가 스포츠분석, 스포츠커뮤니티 소식을 확인하세요.",
    url: "https://ggongpang.com/",
    images: [
      {
        url: "https://ggongpang.com/og-home.png",
        width: 1200,
        height: 630,
        alt: "꽁머니팡 | 토토사이트 추천 및 먹튀검증",
      },
    ],
  },
};

export default function Home() {
  return (
    <div>
      <article className="w-full h-full flex flex-col gap-5 lg:gap-10">
        <h1 className="sr-only">
          꽁머니팡: 안전 토토사이트 추천, 먹튀검증, 꽁머니 정보, 스포츠분석 및
          스포츠커뮤니티
        </h1>

        {/* <HomeBanner></HomeBanner> */}

        <ProgressSliderPage></ProgressSliderPage>

        <h2 className="text-xl font-bold text-center mt-4">
          꽁머니팡 추천 토토사이트 및 최신 꽁머니 소식
        </h2>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div>
            <h3 className="text-lg font-semibold mb-2">
              전문가 스포츠분석 정보
            </h3>
            <p className="text-sm text-gray-600 mb-2">
              매일 업데이트되는 전문가들의 심층 스포츠분석 정보를 확인하고
              토토사이트 이용 시 적중률을 높여보세요.
            </p>
            <TabAnalyzePage />
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">
              인기 스포츠커뮤니티 게시글 (꽁머니, 먹튀검증 후기)
            </h3>
            <p className="text-sm text-gray-600 mb-2">
              다양한 꽁머니 정보, 먹튀검증 후기, 유머 등 활발한 스포츠커뮤니티의
              인기글들을 만나보세요.
            </p>
            <TabACommunityPage></TabACommunityPage>
          </div>
        </section>

        {/* <section className="mt-8">
          <h2 className="text-xl font-bold text-center mb-4">
            실시간 스포츠 데이터 및 토토사이트 배당 정보 (준비중)
          </h2>
          <SportsDataTable />
        </section> */}

        <h2 className="text-xl font-bold text-center mt-8">
          꽁머니팡 주간/월간 베스트: 스포츠분석 및 커뮤니티 활동
        </h2>
        <HomeBoard></HomeBoard>
        {/* <MultiResponsiveSlider></MultiResponsiveSlider> */}
      </article>
    </div>
  );
}
