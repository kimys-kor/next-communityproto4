import React from "react";

// 각 랭킹 항목 타입 정의
interface RankingItem {
  name: string;
  url: string; // URL 추가
}

// Ranking 컴포넌트 Props 타입 정의
interface RankingProps {
  category: string;
  rankings: RankingItem[]; // URL을 포함하는 RankingItem 타입
}

const Ranking: React.FC<RankingProps> = ({ category, rankings }) => {
  return (
    <div className="my-8 p-8 bg-gradient-to-r from-indigo-50  rounded-lg shadow-xl border border-purple-100">
      <h2 className="text-3xl font-bold text-purple-500 mb-6 text-center">
        {category} 랭킹
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {rankings.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center p-4 bg-white rounded-lg shadow-md border border-transparent hover:border-indigo-400 hover:bg-indigo-50 transition-all duration-300 ease-in-out"
          >
            <a
              href={item.url} // 링크 클릭 시 URL로 이동
              target="_blank" // 새 탭에서 열기
              rel="noopener noreferrer"
              className="text-sm font-medium text-indigo-600 hover:text-indigo-800 hover:underline transition-all duration-200"
            >
              {item.name}
            </a>
            <span className="text-lg font-semibold text-indigo-600">
              {index + 1}
            </span>
            {/* 순위 표시 */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ranking;
