import { Metadata } from "next";
import BoardDetail from "@/app/components/boards/BoardDetail";
import ProgressSliderPage from "@/app/components/ProgressSliderPage";
import ThreeBanner from "@/app/components/ThreeBanner";
import SubMenu from "@/app/community/(component)/SubMenu";
import { fetchInitialBoardContent } from "@/app/utils";

interface boardDetailPageProps {
  params: { boardId: string };
}

// HTML 태그를 제거하고 텍스트만 추출하는 유틸리티 함수
const stripHtmlTags = (html: string) => {
  const text = html.replace(/<[^>]*>/g, "").trim();
  return text;
};

export async function generateMetadata({
  params,
}: {
  params: { boardId: string };
}): Promise<Metadata> {
  const { boardId } = params;

  if (!boardId) {
    return {
      title: "게시글을 찾을 수 없습니다",
      description: "유효하지 않은 게시글 ID입니다.",
      openGraph: {
        title: "게시글을 찾을 수 없습니다",
        description: "유효하지 않은 게시글 ID입니다.",
        url: `https://ggongpang.com.com/community/${boardId}`,
      },
      twitter: {
        card: "summary_large_image",
        title: "게시글을 찾을 수 없습니다",
        description: "유효하지 않은 게시글 ID입니다.",
      },
    };
  }

  try {
    const boardContent = await fetchInitialBoardContent(boardId);

    if (!boardContent) {
      return {
        title: "꽁머니팡 커뮤니티 게시글",
        description: "꽁머니팡 커뮤니티에서 다양한 주제의 글들을 확인해보세요.",
      };
    }

    const contentText = stripHtmlTags(boardContent.content);
    const description = contentText.slice(0, 500);

    return {
      title: `꽁머니팡 커뮤니티: ${boardContent.title || "게시글"}`,
      description:
        boardContent.summary ||
        "꽁머니팡 커뮤니티에서 유용한 정보와 재미있는 이야기를 나눠보세요.",
      keywords: boardContent.keywords || [
        "스포츠커뮤니티",
        "토토커뮤니티",
        "꽁머니팡",
        "자유게시판",
        "유머",
      ],
      openGraph: {
        title: `꽁머니팡 커뮤니티: ${boardContent.title || "게시글"}`,
        description:
          boardContent.summary ||
          "꽁머니팡 커뮤니티에서 유용한 정보와 재미있는 이야기를 나눠보세요.",
        url: `https://ggongpang.com.com/community/${boardId}`,
        siteName: "꽁머니팡: 스포츠 분석 및 커뮤니티",
        images: [
          {
            url: boardContent.thumbnail || "/og-image.png",
            width: 800,
            height: 600,
            alt: boardContent.title || "커뮤니티 게시글 이미지",
          },
        ],
        locale: "ko_KR",
        type: "article",
      },
      twitter: {
        card: "summary_large_image",
        title: `꽁머니팡 커뮤니티: ${boardContent.title || "게시글"}`,
        description:
          boardContent.summary ||
          "꽁머니팡 커뮤니티에서 유용한 정보와 재미있는 이야기를 나눠보세요.",
        images: [boardContent.thumbnail || "/twitter-image.png"],
        creator: "꽁머니팡",
      },
    };
  } catch (error) {
    return {
      title: "에러가 발생했습니다",
      description: "메타데이터를 생성하는 중 오류가 발생했습니다.",
      openGraph: {
        title: "에러가 발생했습니다",
        description: "메타데이터를 생성하는 중 오류가 발생했습니다.",
        url: `https://ggongpang.com.com/community/${boardId}`,
      },
      twitter: {
        card: "summary_large_image",
        title: "에러가 발생했습니다",
        description: "메타데이터를 생성하는 중 오류가 발생했습니다.",
      },
    };
  }
}

const page: React.FC<boardDetailPageProps> = ({ params }) => {
  const { boardId } = params;

  return (
    <div className="flex flex-col max-w-[1300px]">
      <SubMenu />
      <ThreeBanner />
      <ProgressSliderPage />
      <BoardDetail boardId={boardId} />
    </div>
  );
};

export default page;
