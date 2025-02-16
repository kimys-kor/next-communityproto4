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
    <div className="my-6 p-6 bg-white rounded-lg shadow-lg border border-gray-300">
      <h2 className="text-2xl font-semibold text-indigo-600 mb-4">
        {category} 랭킹
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {rankings.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center p-2 border-b border-gray-200"
          >
            <a
              href={item.url} // 링크 클릭 시 URL로 이동
              target="_blank" // 새 탭에서 열기
              rel="noopener noreferrer"
              className="text-sm font-medium text-blue-500 hover:underline"
            >
              {item.name}
            </a>
            <span className="text-lg font-bold text-gray-600">{index + 1}</span>
            {/* 순위 표시 */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ranking;
