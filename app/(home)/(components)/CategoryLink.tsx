import React from "react";

// CategoryLink Props 타입 정의
interface CategoryLinkProps {
  category: string;
  links: { name: string; url: string }[];
}

const CategoryLink: React.FC<CategoryLinkProps> = ({ category, links }) => {
  return (
    <div className="my-8 p-6 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl shadow-lg border border-indigo-300">
      <h2 className="text-4xl font-bold text-white mb-6">
        {category} 카테고리 링크
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {links.map((link, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 bg-white rounded-lg shadow-lg border border-gray-200 hover:bg-indigo-100 hover:shadow-xl transition-all duration-300 ease-in-out"
          >
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-semibold text-indigo-600 hover:text-indigo-800 transition-colors duration-200"
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
