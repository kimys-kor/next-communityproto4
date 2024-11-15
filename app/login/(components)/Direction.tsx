import Image from "next/image";
import React from "react";
import talkball from "/public/images/talkball.png";
import search from "/public/images/search.png";
import money from "/public/images/money.png";

function Direction() {
  return (
    <article>
      <section className="flex flex-col justify-center items-center py-8 md:py-10">
        <Image
          alt="ggongpang 로그인 페이지 이미지"
          width={248}
          height={255}
          src={money}
        />
        <div className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mt-4">
          <span className="text-blue">
            **ggongpang 로그인: 간편하게 시작하는 방법**
          </span>
        </div>
        <p className="w-full max-w-[900px] px-4 sm:px-5 pt-4 text-xs sm:text-sm md:text-base text-description leading-6 text-center">
          ggongpang은 사용자에게 다양한 서비스를 제공하는 플랫폼으로, 로그인
          절차는 매우 간단합니다. 이 글에서는 ggongpang 로그인 방법과 그 이점에
          대해 알아보겠습니다.
        </p>

        <div className="w-full max-w-[1000px] pt-16 md:pt-20 px-4 sm:px-5 flex flex-col lg:flex-row items-center justify-between">
          <section className="hidden lg:flex w-1/2 h-full flex-col justify-center items-center">
            <div className="font-bold text-center">
              <p className="text-lg md:text-2xl">ggongpang 로그인</p>
              <p className="text-lg md:text-2xl">사용 시 주의사항</p>
            </div>
            <Image
              alt="ggongpang 로그인 페이지 설명 이미지"
              width={248}
              height={255}
              src={search}
            />
          </section>

          <section className="w-full flex flex-col items-center gap-4 sm:gap-5">
            {[
              "먼저, ggongpang 로그인 페이지에 접속합니다. URL은 https://ggongpang.com/login입니다. 이 페이지에서는 사용자 이름과 비밀번호를 입력할 수 있는 필드가 있습니다. 만약 계정이 없다면, 회원 가입을 통해 쉽게 계정을 생성할 수 있습니다. 회원 가입 과정은 간단하며, 필요한 정보만 입력하면 됩니다.",
              "로그인 후에는 ggongpang의 다양한 기능을 이용할 수 있습니다. 예를 들어, 사용자 맞춤형 콘텐츠를 제공받거나, 친구와 소통할 수 있는 기능이 있습니다. 또한, ggongpang은 사용자 경험을 최적화하기 위해 지속적으로 업데이트되고 있으며, 새로운 기능이 추가되고 있습니다.",
              "ggongpang 로그인 과정에서 비밀번호를 잊어버린 경우, '비밀번호 찾기' 기능을 통해 쉽게 재설정할 수 있습니다. 이 기능은 사용자의 안전을 고려하여 설계되었으며, 이메일 인증을 통해 비밀번호를 재설정할 수 있습니다.",
              "또한, ggongpang은 모바일에서도 쉽게 접근할 수 있습니다. 스마트폰이나 태블릿을 통해 언제 어디서나 로그인하여 서비스를 이용할 수 있습니다. 이는 사용자에게 큰 편리함을 제공합니다.",
              "마지막으로, ggongpang 로그인은 보안이 철저하게 관리되고 있습니다. 사용자 정보는 안전하게 보호되며, 개인정보 유출의 위험이 최소화됩니다. 따라서 안심하고 서비스를 이용할 수 있습니다.",
              "결론적으로, ggongpang 로그인은 간편하고 안전한 방법으로, 다양한 서비스를 제공받을 수 있는 기회를 제공합니다. 지금 바로 ggongpang에 로그인하여 새로운 경험을 시작해 보세요!",
            ].map((text, index) => (
              <article
                key={index}
                className="w-full max-w-80 h-36 relative px-4 sm:px-5 py-4 sm:py-5 text-xs sm:text-sm rounded-lg border border-solid border-[#EEEEEE] flex items-center justify-center"
              >
                <p className="text-center">{text}</p>
              </article>
            ))}
          </section>
        </div>

        <article className="w-full flex flex-col sm:flex-row justify-center items-center pt-8 sm:pt-10 gap-3 px-4 sm:px-5 text-xs sm:text-sm">
          <Image src={talkball} width={100} height={100} alt="부가 설명" />
          <div className="w-full max-w-[900px] text-description leading-6 text-center">
            <p>
              ggongpang 로그인 페이지는 사용자들이 간단하고 안전하게 다양한
              혜택을 누릴 수 있도록 설계되었습니다. 안심하고 서비스를
              이용해보세요!
            </p>
          </div>
        </article>
      </section>
    </article>
  );
}

export default Direction;
