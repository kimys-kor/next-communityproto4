import React from "react";

interface TitleProps {
  title: string;
  description: string;
}

const Title: React.FC<TitleProps> = ({ title, description }) => {
  return (
    <div className="mb-6">
      <h1 className="text-2xl font-bold my-4">{title}</h1>
      <p className="text-gray-600 mb-4">{description}</p>
    </div>
  );
};

export default Title;
