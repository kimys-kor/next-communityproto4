import type { NextPage } from "next";
import Link from "next/link";

const Custom404: NextPage = () => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center">
      <Link href={"/"}>
        <img alt="logo" width={260} height={100} src="/images/logo.png"></img>
      </Link>
      <div className="w-80 pt-5 text-lg font-medium text-blue flex justify-center items-center">
        <p className="text-3xl">페이지를 찾을수 없습니다</p>
      </div>
    </div>
  );
};

export default Custom404;
