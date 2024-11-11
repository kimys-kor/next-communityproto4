import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import logo from "/public/images/logo.png";

const Custom404: NextPage = () => {
    return (
      <div className="w-full min-h-screen flex flex-col justify-center items-center">
          <Link href={"/"}>
            <Image alt="logo" width={260} height={100} src={logo}></Image>
          </Link>
          <div className="w-80 pt-5 text-lg font-medium text-blue flex justify-center items-center">
            <p className="text-3xl">페이지를 찾을수 없습니다</p>
          </div>
      </div>
    );
  };
  
  export default Custom404;