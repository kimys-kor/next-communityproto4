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

// 홈페이지 메타데이터 정의
export const metadata: Metadata = {
  title: "꽁머니팡 홈 | 먹튀검증, 토토사이트추천, 꽁머니 No.1 스포츠커뮤니티",
  description:
    "꽁머니팡에서 가장 안전한 토토사이트 추천을 받고 먹튀검증 정보를 확인하세요. 꽁머니 이벤트와 전문가 스포츠분석, 다양한 스포츠커뮤니티 활동을 즐겨보세요.",
  keywords: [
    "홈페이지",
    "꽁머니",
    "먹튀검증",
    "토토사이트",
    "토토사이트추천",
    "스포츠분석",
    "스포츠커뮤니티",
    "안전놀이터",
    "꽁머니팡",
  ],
  openGraph: {
    title: "꽁머니팡 홈 | 먹튀검증, 토토사이트추천 No.1 스포츠커뮤니티",
    description:
      "가장 안전한 토토사이트 추천과 먹튀검증은 꽁머니팡에서! 꽁머니, 스포츠분석 정보를 지금 확인하세요.",
    url: "https://ggongpang.com.com/",
    images: [
      {
        url: "https://ggongpang.com.com/og-home.png",
        width: 1200,
        height: 630,
        alt: "꽁머니팡 홈페이지",
      },
    ],
  },
};

export default function Home() {
  return (
    <div>
      <article className="w-full h-full flex flex-col gap-5 lg:gap-10">
        <h1 className="sr-only">
          꽁머니팡 - 먹튀검증 및 토토사이트 추천 스포츠커뮤니티
        </h1>

        <HomeBanner></HomeBanner>

        <ProgressSliderPage></ProgressSliderPage>

        <section className="text-center mt-8">
          <h2 className="text-xl font-bold mb-4">
            꽁머니팡의 최신 꽁머니 지급 사이트 목록
          </h2>
          <Link href="/partner">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded transition duration-300 ease-in-out">
              최신 꽁머니 사이트 확인하기
            </button>
          </Link>
        </section>

        <h2 className="text-xl font-bold text-center mt-4">
          꽁머니팡 추천 토토사이트 및 최신 정보
        </h2>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div>
            <h3 className="text-lg font-semibold mb-2">전문가 스포츠분석</h3>
            <p className="text-sm text-gray-600 mb-2">
              매일 업데이트되는 전문가들의 심층 스포츠분석 정보를 확인하고
              적중률을 높여보세요.
            </p>
            <TabAnalyzePage />
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">
              인기 스포츠커뮤니티 게시글
            </h3>
            <p className="text-sm text-gray-600 mb-2">
              유머, 이슈, 꽁머니 정보 등 다양한 주제의 커뮤니티 인기글들을
              만나보세요.
            </p>
            <TabACommunityPage></TabACommunityPage>
          </div>
        </section>

        {/* <section className="mt-8">
          <h2 className="text-xl font-bold text-center mb-4">
            실시간 스포츠 정보
          </h2>
          <SportsDataTable />
        </section> */}

        <h2 className="text-xl font-bold text-center mt-8">
          주간/월간 베스트 게시글
        </h2>
        <HomeBoard></HomeBoard>
        {/* <MultiResponsiveSlider></MultiResponsiveSlider> */}
      </article>
    </div>
  );
}
