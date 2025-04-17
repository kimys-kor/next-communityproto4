import ThreeBanner from "@/app/components/ThreeBanner";
// sportMain import는 현재 사용되지 않으므로 제거하거나, 필요시 다시 추가하세요.
// import sportMain from "/public/images/sportMain.png";
import Breadcrumb from "@/app/components/BreadCrumb";
import SubMenu from "./(component)/SubMenu";
import { Metadata } from "next";
import PhotoBoard from "../components/boards/PhotoBoard";

// 커뮤니티 페이지 메타데이터 정의 (SEO 최적화)
export const metadata: Metadata = {
  title: "안구정화 | 토이소 커뮤니티 - 즐거운 이미지 공유",
  description:
    "토이소 커뮤니티의 안구정화 게시판입니다. 재미있고 시선을 사로잡는 다양한 이미지를 확인하고 공유하세요. 안전 토토사이트 정보도 함께 제공합니다.",
  keywords: [
    "안구정화",
    "커뮤니티",
    "이미지공유",
    "유머이미지",
    "스포츠커뮤니티",
    "토토사이트추천",
    "토이소",
  ],
  // OpenGraph, Twitter 메타데이터도 필요시 추가
};

export default function Page() {
  const breadcrumbItems = {
    title: "커뮤니티",
    subMenu: "안구정화",
  };

  return (
    <div className="flex flex-col gap-3 max-w-[1300px]">
      {/* SEO: 페이지 제목(h1)과 설명(p) 추가 */}
      <h1 className="text-2xl font-bold my-4">토이소 커뮤니티 - 안구정화</h1>
      <p className="text-gray-600 mb-4">
        지친 눈을 즐겁게 해줄 다양한 이미지들을 만나보세요! 토이소 안구정화
        게시판에서 재미와 휴식을 찾으실 수 있습니다.
      </p>

      <SubMenu />
      <ThreeBanner />
      {/* SEO: Image 컴포넌트 사용 및 alt 텍스트 개선 -> img 태그로 변경 */}
      <img
        className=""
        src="/images/sportMain.png" // 이미지 경로는 실제 이미지에 맞게 확인 필요
        width={1024}
        height={177}
        alt={"토이소 커뮤니티 안구정화 섹션 대표 이미지"} // 구체적인 alt 텍스트
      />

      <Breadcrumb breadcrumbData={breadcrumbItems} />
      {/* SEO: 콘텐츠 섹션 제목(h2) 추가 */}
      <h2 className="text-xl font-semibold mt-6 mb-3">안구정화 게시물</h2>
      <PhotoBoard postType={9} />
    </div>
  );
}
