// components/CategoryLink.tsx
import React from "react";

interface LinkItem {
  name: string;
  url: string;
}

interface CategoryLinkProps {
  category: string;
  links: LinkItem[];
}

const CategoryLink: React.FC<CategoryLinkProps> = ({ category, links }) => {
  return (
    <div className="my-6 p-6 bg-white rounded-lg shadow-lg border border-gray-300">
      <h2 className="text-2xl font-semibold text-indigo-600 mb-4">
        {category}
      </h2>
      <ul className="space-y-3">
        {links.map((link, index) => (
          <li key={index} className="flex justify-between items-center">
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryLink;
