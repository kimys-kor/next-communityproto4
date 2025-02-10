"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { tabsAnalyze } from "@/app/utils";
import { BoardItem } from "@/app/types";
import toast from "react-hot-toast";
import NewIcon from "@/app/components/NewIcon";
import { getPostUrl } from "@/app/utils";

interface TabAnalyzeClientProps {
  initialTab: number;
  initialData: BoardItem[];
}

export const TabAnalyzeClient: React.FC<TabAnalyzeClientProps> = ({
  initialTab,
  initialData,
}) => {
  const [activeTab, setActiveTab] = useState(initialTab);
  const [boardList, setBoardList] = useState<BoardItem[]>(initialData);
  const [cachedData, setCachedData] = useState<Record<number, BoardItem[]>>({});

  useEffect(() => {
    const fetchBoardList = async (typ: number) => {
      if (cachedData[typ]) {
        setBoardList(cachedData[typ]);
        return;
      }

      try {
        const response = await fetch(
          `/api/board/list?typ=${typ}&keyword=&page=0&size=10`,
          {
            method: "GET",
            headers: { "Content-Type": "application/json" },
            cache: "no-store",
          }
        );

        if (!response.ok) {
          throw new Error("Error fetching board list");
        }

        const data = await response.json();
        setBoardList(data.data.content);
        setCachedData((prev) => ({ ...prev, [typ]: data.data.content }));
      } catch (error) {
        toast.error("게시글리스트 데이터 문제가 발생했습니다");
      }
    };

    const typMap = [2, 3, 4, 5, 6, 7, 8];
    const typ = typMap[activeTab];

    // Fetch data only if not already cached
    fetchBoardList(typ);
  }, [activeTab, cachedData]);

  return (
    <article className="h-[450px] sm:h-[450px] w-full truncate bg-white rounded-2xl flex flex-col gap-5 border border-solid border-gray-200">
      <div className="w-full flex flex-col">
        {/* Tab buttons using flex layout */}
        <div className="flex flex-wrap gap-1 p-2 bg-[#FAFAFA] rounded-t">
          {tabsAnalyze.map((tab, index) => (
            <div
              key={index}
              className={`border-solid border rounded-md cursor-pointer font-medium text-sm px-2 py-1 text-center transition-all hover:bg-blue-100 hover:border-blue-400 hover:text-blue-600 whitespace-nowrap ${
                activeTab === index
                  ? "text-sky-700 border-sky-500 bg-sky-50"
                  : "text-gray-700 border-gray-300 bg-white"
              }`}
              onClick={() => setActiveTab(index)}
            >
              <div className="flex justify-center items-center gap-1">
                {tab.icon}
                <span className="whitespace-nowrap">{tab.label}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Tab content with a fixed minimum height */}
        <div className="text-sm w-full flex flex-col">
          {boardList.length === 0 ? (
            <div className="flex justify-center items-center h-full text-gray-500">
              No content available
            </div>
          ) : (
            boardList.map((item) => (
              <Link key={item.id} href={getPostUrl(item.postType, item.id)}>
                <div
                  className={`px-3 flex justify-between items-center hover:bg-slate-200 hover:cursor-pointer ${
                    item.id !== boardList[boardList.length - 1]?.id
                      ? "border-b border-dashed border-slate-200"
                      : ""
                  }`}
                >
                  <div className="flex gap-2 items-center py-2 w-full">
                    <div className="flex items-center gap-1 text-sm font-medium w-[80%] truncate">
                      <NewIcon />
                      <span className="truncate">{item.title}</span>
                    </div>
                    <span className="text-[10px] flex items-center gap-1">
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 100 100"
                        xmlns="http://www.w3.org/2000/svg"
                        className="fill-current text-blue"
                      >
                        <rect x="45" y="10" width="10" height="80" />
                        <rect x="10" y="45" width="80" height="10" />
                      </svg>
                      <span className="text-blue font-bold text-xs">
                        {item.replyNum}
                      </span>
                    </span>
                    <div className="w-[20%] truncate text-sm text-gray-600 flex justify-end">
                      <p>{item.nickname}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
    </article>
  );
};
