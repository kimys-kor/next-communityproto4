import React from "react";

// 각 랭킹 항목 타입 정의 (score를 제거)
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
    <div className="my-8 p-8 bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-500 rounded-lg shadow-xl border border-transparent">
      <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 mb-6 text-center animate-pulse">
        {category} 랭킹
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {/* 모바일에서는 2열, 중간 화면 이상에서는 4열로 배치 */}
        {rankings.slice(0, 10).map((item, index) => {
          let rankIcon;
          let score = 100 - index * 10;

          switch (index) {
            case 0:
              rankIcon = "🌟"; // 1등: 금별
              break;
            case 1:
              rankIcon = "🌙"; // 2등: 은별
              break;
            case 2:
              rankIcon = "🏅"; // 3등: 동메달
              break;
            case 3:
              rankIcon = "🎖️"; // 4등: 훈장
              break;
            case 4:
              rankIcon = "🥇"; // 5등: 1등 메달
              break;
            case 5:
              rankIcon = "🥈"; // 6등: 2등 메달
              break;
            case 6:
              rankIcon = "🥉"; // 7등: 3등 메달
              break;
            case 7:
              rankIcon = "🎯"; // 8등: 과녁
              break;
            case 8:
              rankIcon = "🏆"; // 9등: 트로피
              break;
            case 9:
              rankIcon = "🚀"; // 10등: 로켓
              break;
            default:
              rankIcon = `#${index + 1}`;
              break;
          }

          // 3위일 경우 색상을 지정하는 로직
          const isThirdPlace = index === 2;

          return (
            <div
              key={index}
              className="flex justify-between items-center p-4 bg-white rounded-lg shadow-md border border-transparent hover:border-indigo-400 hover:bg-indigo-50 transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              <div className="flex items-center space-x-2">
                <span
                  className={`text-lg font-semibold ${
                    score >= 80
                      ? "text-green-500"
                      : score >= 50
                        ? "text-yellow-500"
                        : "text-red-500"
                  }`}
                >
                  {index + 1}
                </span>
              </div>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-sm font-medium ${
                  isThirdPlace
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600"
                    : "text-indigo-600 hover:text-indigo-800"
                } hover:underline transition-all duration-200`}
              >
                {item.name}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Ranking;
