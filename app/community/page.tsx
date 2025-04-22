import Breadcrumb from "@/app/components/BreadCrumb";
import SubMenu from "./(component)/SubMenu";
import { Metadata } from "next";
import PhotoBoard from "../components/boards/PhotoBoard";
import Title from "@/app/components/Title";
import { pageData } from "@/app/data/pageData";
import ThreeBanner from "../components/ThreeBanner";

// 커뮤니티 페이지 메타데이터 정의
export const metadata: Metadata = {
  title: "꽁머니팡 커뮤니티 | 토토커뮤니티, 유머, 자유게시판",
  description:
    "꽁머니팡 커뮤니티에서 다양한 주제로 소통하세요. 스포츠 이야기, 유머, 토토사이트 정보, 자유로운 대화까지 모두 가능합니다. 안전놀이터 정보도 확인하세요.",
  keywords: [
    "스포츠커뮤니티",
    "토토커뮤니티",
    "꽁머니팡",
    "유머게시판",
    "자유게시판",
    "먹튀검증",
    "안전놀이터",
    "꽁머니",
  ],
  openGraph: {
    title: "꽁머니팡 커뮤니티 - 함께 나누는 즐거움",
    description:
      "꽁머니팡 커뮤니티: 유머, 스포츠 분석, 자유로운 소통이 있는 공간. 지금 바로 참여하여 다양한 정보와 재미를 공유하세요!",
    url: "https://ggongpang.com.com/community",
    siteName: "꽁머니팡 커뮤니티",
    type: "website",
    images: [
      {
        url: "/images/opengraph-community.jpg",
        width: 1200,
        height: 630,
        alt: "꽁머니팡 커뮤니티",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "꽁머니팡 커뮤니티 | 유머부터 정보 공유까지",
    description:
      "지금 꽁머니팡 커뮤니티에 참여하여 최신 유머, 스포츠 정보, 다양한 이야기를 나누세요!",
    images: ["/images/twitter-community.jpg"],
  },
};

export default function Page() {
  const breadcrumbItems = {
    title: "커뮤니티",
    subMenu: "안구정화",
  };

  return (
    <div className="flex flex-col gap-3 max-w-[1300px]">
      <Title
        title={pageData.community.title}
        description={pageData.community.description}
      />
      <SubMenu />
      <ThreeBanner />
      <img
        className=""
        src="/images/main_top.jpg"
        alt={"메인 배너 이미지"}
        width={1024}
        height={177}
      />
      <Breadcrumb breadcrumbData={breadcrumbItems} />
      <h2 className="text-xl font-semibold mt-6 mb-3">안구정화 게시물</h2>
      <PhotoBoard postType={9} />
    </div>
  );
}
