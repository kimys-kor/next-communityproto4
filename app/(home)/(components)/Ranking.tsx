import React from "react";

// 각 랭킹 항목 타입 정의
interface RankingItem {
  name: string;
  url: string; // URL 추가
  score: number; // 점수 추가
}

// Ranking 컴포넌트 Props 타입 정의
interface RankingProps {
  category: string;
  rankings: RankingItem[]; // URL을 포함하는 RankingItem 타입
}

const Ranking: React.FC<RankingProps> = ({ category, rankings }) => {
  return (
    <div className="my-8 p-8 bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-500 rounded-lg shadow-xl border border-transparent">
      <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 mb-6 text-center animate-pulse">
        {category} 랭킹
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {rankings.map((item, index) => {
          let rankIcon;
          // 랭킹에 맞는 아이콘 처리
          if (index === 0) {
            rankIcon = "🌟"; // 1등: 금별
          } else if (index === 1) {
            rankIcon = "🌙"; // 2등: 은별
          } else if (index === 2) {
            rankIcon = "🏅"; // 3등: 동메달
          } else {
            rankIcon = `#${index + 1}`; // 그 외 랭킹은 #순위 표시
          }

          return (
            <div
              key={index}
              className="flex justify-between items-center p-4 bg-white rounded-lg shadow-md border border-transparent hover:border-indigo-400 hover:bg-indigo-50 transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              <a
                href={item.url} // 링크 클릭 시 URL로 이동
                target="_blank" // 새 탭에서 열기
                rel="noopener noreferrer"
                className="text-sm font-medium text-indigo-600 hover:text-indigo-800 hover:underline transition-all duration-200"
              >
                <span className="mr-2">{rankIcon}</span>
                {item.name}
              </a>
              <div className="flex items-center space-x-2">
                <span className="text-lg font-semibold text-indigo-600">
                  {index + 1}
                </span>
                {/* 랭킹 점수 아이콘 표현 */}
                <span
                  className={`text-lg font-semibold ${
                    item.score >= 80
                      ? "text-green-500"
                      : item.score >= 50
                        ? "text-yellow-500"
                        : "text-red-500"
                  }`}
                >
                  {item.score} 점
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Ranking;
