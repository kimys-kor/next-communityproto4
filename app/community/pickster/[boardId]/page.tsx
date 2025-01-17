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
        url: `https://toiso777.com/community/pickster/${boardId}`,
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
        title: "게시글을 찾을 수 없습니다",
        description: "유효하지 않은 게시글 ID입니다.",
        openGraph: {
          title: "게시글을 찾을 수 없습니다",
          description: "유효하지 않은 게시글 ID입니다.",
          url: `https://toiso777.com/community/pickster/${boardId}`,
        },
        twitter: {
          card: "summary_large_image",
          title: "게시글을 찾을 수 없습니다",
          description: "유효하지 않은 게시글 ID입니다.",
        },
      };
    }

    // boardContent.content에서 HTML 태그를 제거하고 첫 500글자만 추출
    const contentText = stripHtmlTags(boardContent.content);
    const description = contentText.slice(0, 500);

    return {
      title: boardContent.title || "토이소: 나도분석왕",
      description:
        description.length > 0
          ? `${description}...`
          : "토이소에서 다양한 유저들의 스포츠분석 정보를 확인해보세요.",
      openGraph: {
        type: "article",
        locale: "ko_KR",
        siteName: "토이소",
        title: boardContent.title || "토이소: 나도분석왕",
        description:
          description.length > 0
            ? `${description}...`
            : "토이소에서 다양한 유저들의 스포츠분석 정보를 확인해보세요.",
        url: `https://toiso777.com/community/pickster/${boardId}`,
        images: [
          {
            url: "/icon.ico",
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: boardContent.title || "토이소: 나도분석왕",
        description:
          description.length > 0
            ? `${description}...`
            : "토이소에서 다양한 유저들의 스포츠분석 정보를 확인해보세요.",
        creator: "토이소",
        images: [
          {
            url: "/icon.ico",
          },
        ],
      },
    };
  } catch (error) {
    return {
      title: "에러가 발생했습니다",
      description: "메타데이터를 생성하는 중 오류가 발생했습니다.",
      openGraph: {
        title: "에러가 발생했습니다",
        description: "메타데이터를 생성하는 중 오류가 발생했습니다.",
        url: `https://toiso777.com/community/pickster/${boardId}`,
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
