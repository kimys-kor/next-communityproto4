import { Metadata } from "next";
import { notFound } from "next/navigation";
import BoardDetail from "@/app/components/boards/BoardDetail";
import ProgressSliderPage from "@/app/components/ProgressSliderPage";
import ThreeBanner from "@/app/components/ThreeBanner";
import SubMenu from "../(component)/SubMenu";
import { fetchInitialBoardContent } from "@/app/utils";

interface boardDetailPageProps {
  params: { boardId: string };
}

// generateMetadata는 페이지에서만 작성 가능
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
    };
  }

  try {
    const boardContent = await fetchInitialBoardContent(boardId);

    if (!boardContent) {
      return {
        title: "게시글을 찾을 수 없습니다",
        description: "유효하지 않은 게시글 ID입니다.",
      };
    }

    return {
      title: boardContent.title || "꽁머니팡: 스포츠 분석",
      description:
        "꽁머니팡에서 스포츠 분석과 관련된 다양한 정보를 확인해보세요.",
    };
  } catch (error) {
    console.error("Failed to generate metadata:", error);
    return {
      title: "에러가 발생했습니다",
      description: "메타데이터를 생성하는 중 오류가 발생했습니다.",
    };
  }
}

// 페이지 컴포넌트
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
