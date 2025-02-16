import React from "react";

// CategoryLink Props 타입 정의
interface CategoryLinkProps {
  category: string;
  links: { name: string; url: string }[]; // 링크 항목을 받아옴
}

const CategoryLink: React.FC<CategoryLinkProps> = ({ category, links }) => {
  return (
    <div className="my-6 p-6 bg-white rounded-lg shadow-lg border border-gray-300">
      <h2 className="text-2xl font-semibold text-indigo-600 mb-4">
        {category} 카테고리 링크
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {links.map((link, index) => (
          <div
            key={index}
            className="flex justify-between items-center p-2 border-b border-gray-200"
          >
            <a
              href={link.url} // 링크 클릭 시 URL로 이동
              target="_blank" // 새 탭에서 열기
              rel="noopener noreferrer"
              className="text-sm font-medium text-blue-500 hover:underline"
            >
              {link.name}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryLink;
