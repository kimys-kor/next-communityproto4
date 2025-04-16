import Link from "next/link";
import Image from "next/image";

const Custom404 = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Image alt="logo" width={260} height={100} src="/images/logo.png" />
      <h2 className="text-2xl font-semibold text-gray-700 mt-4">
        페이지를 찾을 수 없습니다.
      </h2>
      <p className="text-gray-500 mt-2">
        요청하신 페이지가 존재하지 않거나, 이동되었을 수 있습니다.
      </p>
      <Link href="/">
        <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
          홈으로 돌아가기
        </button>
      </Link>
    </div>
  );
};

export default Custom404;
