import React from "react";

type TitleProps = {
  title: string;
};

const Title: React.FC<TitleProps> = ({ title }) => {
  return <p className="text-2xl font-semibold text-gray-800 mb-4">{title}</p>;
};

export default Title;
