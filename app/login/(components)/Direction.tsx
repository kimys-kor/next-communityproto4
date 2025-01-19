import Image from "next/image";
import React from "react";
import talkball from "/public/images/talkball.png";
import search from "/public/images/search.png";
import money from "/public/images/money.png";

function Direction() {
  return (
    <article className="w-full max-w-[900px] mx-auto p-6 bg-white rounded-lg shadow-md">
      <section className="text-center py-6">
        <Image
          alt="로그인 페이지 이미지"
          width={150}
          height={150}
          src={money}
          className="mx-auto"
        />
        <h1 className="text-3xl md:text-4xl font-extrabold text-blue-600 mt-6">
          토이소 로그인
        </h1>
        <p className="mt-4 text-gray-600 text-sm md:text-base leading-relaxed">
          토이소는 사용자에게 다양한 서비스를 제공하는 플랫폼으로, 로그인 절차는
          매우 간단합니다.
        </p>
        <p className="mt-4 text-gray-600 text-sm md:text-base leading-relaxed">
          꽁팡은 모든 사용자의 데이터를 암호화처리 하고 있습니다.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-gray-200 pb-2">
          토이소 로그인 방법
        </h2>
        <div className="space-y-6">
          {[
            "먼저, 토이소 로그인 페이지에 접속합니다. URL은 https://toiso777.com/login입니다. 이 페이지에서는 사용자 이름과 비밀번호를 입력할 수 있는 필드가 있습니다. 만약 계정이 없다면, 회원 가입을 통해 쉽게 계정을 생성할 수 있습니다. 회원 가입 과정은 간단하며, 필요한 정보만 입력하면 됩니다.",
            "로그인 후에는 토이소의 다양한 기능을 이용할 수 있습니다. 예를 들어, 사용자 맞춤형 콘텐츠를 제공받거나, 친구와 소통할 수 있는 기능이 있습니다. 또한, 토이소는 사용자 경험을 최적화하기 위해 지속적으로 업데이트되고 있으며, 새로운 기능이 추가되고 있습니다.",
            "로그인 과정에서 비밀번호를 잊어버린 경우, '비밀번호 찾기' 기능을 통해 쉽게 재설정할 수 있습니다. 이 기능은 사용자의 안전을 고려하여 설계되었으며, 이메일 인증을 통해 비밀번호를 재설정할 수 있습니다.",
            "또한, 모바일에서도 쉽게 접근할 수 있습니다. 스마트폰이나 태블릿을 통해 언제 어디서나 로그인하여 서비스를 이용할 수 있습니다. 이는 사용자에게 큰 편리함을 제공합니다.",
            "마지막으로, 로그인은 보안이 철저하게 관리되고 있습니다. 사용자 정보는 안전하게 보호되며, 개인정보 유출의 위험이 최소화됩니다. 따라서 안심하고 서비스를 이용할 수 있습니다.",
            "결론적으로, 로그인은 간편하고 안전한 방법으로, 다양한 서비스를 제공받을 수 있는 기회를 제공합니다. 지금 바로 토이소에 로그인하여 새로운 경험을 시작해 보세요!",
          ].map((text, index) => (
            <div
              key={index}
              className="p-4 bg-gray-50 border border-gray-200 rounded-md"
            >
              <p className="text-gray-700 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 flex flex-col items-center gap-6 text-center">
        <Image
          src={search}
          alt="부가 설명 이미지"
          width={120}
          height={120}
          className="rounded-full"
        />
        <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-[700px]">
          토이소 로그인 페이지는 사용자들이 간단하고 안전하게 다양한 혜택을 누릴
          수 있도록 설계되었습니다. 안심하고 서비스를 이용해보세요!
        </p>
        <Image
          src={talkball}
          alt="추가 설명 이미지"
          width={120}
          height={120}
          className="rounded-full"
        />
      </section>
    </article>
  );
}

export default Direction;
