"use client";
import React, { useState, useEffect } from "react";
import Paging from "@/app/components/Paging";
import Link from "next/link";
import Image from "next/image";
import { PhotoItem } from "@/app/types";
import { useUserStore } from "@/app/globalStatus/useUserStore";
import { FaTrash, FaArrowRight } from "react-icons/fa";
import TransferPopup from "@/app/components/boards/TransferPopup";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";

interface PhotoBoardClientProps {
  initialData: {
    boardList: PhotoItem[];
    totalElements: number;
    totalPages: number;
  };
}

const PhotoBoardClient: React.FC<PhotoBoardClientProps> = ({ initialData }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { userInfo } = useUserStore();

  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [selectAll, setSelectAll] = useState(false);
  const [boardList, setBoardList] = useState<PhotoItem[]>(
    initialData.boardList
  );
  const [totalElements, setTotalElements] = useState(initialData.totalElements);
  const [totalPages, setTotalPages] = useState(initialData.totalPages);
  const [currentPage, setCurrentPage] = useState(1);
  const [showTransferPopup, setShowTransferPopup] = useState(false);

  const size = 12;
  const typ = searchParams.get("typ") || "9";
  const keyword = searchParams.get("keyword") || "";

  useEffect(() => {
    const pageFromUrl = Number(searchParams.get("page")) || 1;
    if (pageFromUrl !== currentPage) {
      setCurrentPage(pageFromUrl);
    }
  }, [searchParams]);

  const fetchData = async (page: number) => {
    const fetchPage = page > 0 ? page - 1 : 0;
    try {
      const response = await fetch(
        `/api/board/photoList?typ=${typ}&keyword=${keyword}&page=${fetchPage}&size=${size}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          cache: "no-store",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch photo board data");
      }

      const data = await response.json();
      setBoardList(data.data.content);
      setTotalElements(data.data.totalElements);
      setTotalPages(data.data.totalPages);
    } catch (error) {
      toast.error("포토 게시글 리스트에 문제가 발생했습니다");
    }
  };

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  const handlePageChange = (newPage: number) => {
    router.push(`${pathname}?page=${newPage}`);
    setCurrentPage(newPage);
  };

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedItems([]);
    } else {
      setSelectedItems(boardList.map((item) => item.id));
    }
    setSelectAll(!selectAll);
  };

  const handleSelectItem = (id: number) => {
    setSelectedItems((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((itemId) => itemId !== id)
        : [...prevSelected, id]
    );
  };

  const handleMoveSelected = () => {
    if (selectedItems.length === 0) {
      alert("이동하실 게시물을 선택하세요");
      return;
    }
    setShowTransferPopup(true);
  };

  const handleTransferConfirm = async (postType: number) => {
    try {
      const response = await fetch("/api/board/transferPost", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ idList: selectedItems, postType }),
      });

      if (!response.ok) {
        throw new Error("Failed to transfer selected posts");
      }

      setBoardList((prevBoardList) =>
        prevBoardList.filter((item) => !selectedItems.includes(item.id))
      );
      setSelectedItems([]);
      setSelectAll(false);
      setShowTransferPopup(false);
    } catch (error) {
      toast.error("게시글 이동에 문제가 발생했습니다");
    }
  };

  const handleDeleteSelected = async () => {
    if (selectedItems.length === 0) {
      toast.error("게시글을 선택 해주세요.");
      return;
    }

    const confirmed = window.confirm("정말 삭제 하시겠습니까?");
    if (!confirmed) {
      return;
    }

    try {
      const response = await fetch("/api/board/deletePost", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ idList: selectedItems }),
      });

      if (!response.ok) {
        throw new Error("게시글삭제 실패");
      }

      await fetchData(1);

      setSelectedItems([]);
      setSelectAll(false);
      toast.success("선택한 게시물이 성공적으로 삭제되었습니다.");
    } catch (error) {
      toast.error("게시글 리스트 삭제에 문제가 발생했습니다");
    }
  };

  return (
    <section className="flex flex-col gap-1 mt-3">
      <div className="w-full">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-1 w-full">
          <div className="flex items-center gap-2">
            <div className="text-[#555555] text-sm">
              총{" "}
              <span className="text-[#2C4AB6] font-semibold">
                {totalElements}
              </span>{" "}
              건
            </div>
            <div className="text-[#555555] text-sm">
              ({currentPage} / <span>{totalPages}</span> 페이지)
            </div>
          </div>
        </div>
        {userInfo?.sck && (
          <div className="mt-5 flex justify-end items-center gap-5">
            <label className="flex items-center cursor-pointer text-purple-600 text-sm gap-1 hover:text-purple-800">
              <input
                type="checkbox"
                checked={selectAll}
                onChange={handleSelectAll}
                className="hidden"
              />
              <span>전체선택</span>
            </label>
            <button
              onClick={handleMoveSelected}
              className="flex items-center gap-1 text-teal-600 text-sm hover:text-teal-800"
            >
              <FaArrowRight />
              <span>이동</span>
            </button>
            <button
              onClick={handleDeleteSelected}
              className="flex items-center gap-1 text-red-600 text-sm hover:text-red-800"
            >
              <FaTrash />
              <span>삭제</span>
            </button>
          </div>
        )}
      </div>

      <ul className="mt-5 min-w-full bg-white overflow-hidden overflow-x-auto text-[14px] grid grid-cols-2 md:grid-cols-3 gap-5">
        {boardList.map((item) => (
          <li key={item.id} className="bg-white rounded-lg cursor-pointer">
            <div className="relative w-full h-[230px] overflow-hidden rounded-lg">
              {userInfo?.sck && (
                <input
                  type="checkbox"
                  className="absolute top-2 left-2 z-10 h-4 w-4"
                  checked={selectedItems.includes(item.id)}
                  onChange={() => handleSelectItem(item.id)}
                />
              )}
              <Link href={`${pathname}/${item.id}`}>
                <Image
                  width={326}
                  height={230}
                  className="w-full h-full object-cover rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-110"
                  src={item.thumbNail || "/images/default-thumbnail.jpg"}
                  alt={item.title}
                />
              </Link>
            </div>
            <section className="w-full flex flex-col justify-center px-2 py-4">
              <p className="w-full text-center font-semibold text-purple-500 text-base truncate">
                {item.title}
              </p>
              <p className="w-full text-center truncate text-base font-medium text-semiblack">
                {item.changedcreatedDt}
              </p>
              <p className="w-full text-center truncate text-base text-subtext">
                {item.nickname}
              </p>
            </section>
          </li>
        ))}
      </ul>

      {userInfo?.sck && (
        <span className="w-full flex justify-end mt-3">
          <Link href={`${pathname}/write`}>
            <button className="bg-blue text-white hover:bg-mediumblue rounded-sm text-[13px] px-3 py-3">
              글작성하기
            </button>
          </Link>
        </span>
      )}

      <Paging
        page={currentPage}
        totalElements={totalElements}
        size={size}
        setPage={handlePageChange}
        scroll="top"
      />

      {showTransferPopup && (
        <TransferPopup
          onClose={() => setShowTransferPopup(false)}
          onConfirm={handleTransferConfirm}
        />
      )}
    </section>
  );
};

export default PhotoBoardClient;
