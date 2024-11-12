import Link from "next/link";
import NewIcon from "../NewIcon";
import { BoardItem } from "@/app/types";

const fetchBoardList = async () => {
  const page = 0;
  const size = 15;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/guest/newList?page=${page}&size=${size}`,
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
  return data.data.content as BoardItem[];
};

const getPostLink = (postType: number, id: number) => {
  switch (postType) {
    case 6:
      return `/sport/nba/${id}`;
    case 7:
      return `/sport/basket/${id}`;
    case 8:
      return `/sport/volley/${id}`;
    case 9:
      return `/community/${id}`;
    case 10:
      return `/community/humor/${id}`;
    default:
      return `/`;
  }
};

const NewPostCard = async () => {
  const boardList = await fetchBoardList();

  return (
    <div className="w-full rounded-md bg-white font-semibold border-solid border-slate-200 border">
      <div className="h-11 px-3 leading-8 flex justify-between items-center border-solid border-b border-gray-200">
        <div className="flex gap-2 justify-center items-center">
          <h1 className="text-lg font-bold">최근글</h1>
        </div>
      </div>
      {boardList.map((item, index) => (
        <div
          key={item.id}
          className={`w-full h-10 px-3 gap-3 flex justify-between items-center transition-all ${
            index !== boardList.length - 1 ? "border-b border-dashed border-slate-200" : ""
          } hover:bg-semiblue`}
        >
          <div className="flex gap-1 items-center flex-1 overflow-hidden">
            <NewIcon />
            <div className="flex-1 min-w-0 flex items-center overflow-hidden">
            <Link href={getPostLink(item.postType, item.id)} className="flex-1 min-w-0">
                <p className="truncate text-sm cursor-pointer hover:underline">
                  {item.title}
                </p>
              </Link>
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
            </div>
          </div>
          <p className="text-sm truncate w-12 text-right">{item.nickname}</p>
        </div>
      ))}
    </div>
  );
};

export default NewPostCard;