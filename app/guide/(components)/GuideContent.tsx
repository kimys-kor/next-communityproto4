import React from "react";
import {
  FaGift,
  FaQuestionCircle,
  FaCheckCircle,
  FaExclamationTriangle,
  FaSearchDollar,
  FaUserShield,
  FaInfoCircle,
  FaUsers,
  FaShieldAlt,
} from "react-icons/fa";

function GuideContent() {
  return (
    <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Section 1: 꽁머니 정의 */}
      <section className="p-8 border border-blue-200 rounded-xl shadow-md bg-gradient-to-br from-blue-50 to-white">
        <div className="flex flex-col items-center text-center">
          <FaGift className="text-6xl text-blue-500 mb-5" />
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
            꽁머니, 그것이 궁금하다!
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
            꽁머니는 <strong className="text-blue-600">토토사이트</strong>에서
            새 친구들을 환영하거나 특별한 날을 기념하며 선물하는{" "}
            <strong className="font-semibold text-indigo-700">
              무료 포인트
            </strong>
            예요. 이걸로 내 돈을 쓰지 않고도 사이트의 재미난 게임들을 미리 맛볼
            수 있답니다!
          </p>
        </div>
      </section>

      {/* Section 2: 꽁머니 얻는 법 & 사용법 (카드 UI) */}
      <section>
        <h2 className="text-center text-3xl font-extrabold text-gray-900 mb-10">
          <FaSearchDollar className="inline-block text-green-500 mr-3 text-4xl align-middle" />
          꽁머니, 어떻게 받고 어떻게 쓸까?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* 얻는 법 카드 */}
          <div className="bg-green-50 p-8 rounded-lg shadow-lg border border-green-200">
            <div className="flex items-center mb-4">
              <FaCheckCircle className="text-3xl text-green-500 mr-3" />
              <h3 className="text-2xl font-bold text-green-800">
                꽁머니 받는 방법
              </h3>
            </div>
            <ul className="list-disc list-inside space-y-3 text-lg text-gray-700 pl-2">
              <li>
                <strong className="font-semibold">
                  새싹 회원 환영 선물 🌱:
                </strong>{" "}
                사이트에 처음 가입하면 받아요.
              </li>
              <li>
                <strong className="font-semibold">반짝 이벤트 참여 ✨:</strong>{" "}
                출석체크, 친구 소개 등 깜짝 이벤트로 얻어요.
              </li>
              <li>
                <strong className="font-semibold">레벨업 축하 보상 🏆:</strong>{" "}
                사이트 활동으로 레벨이 오르면 받기도 해요.
              </li>
            </ul>
          </div>

          {/* 사용법 & 주의점 카드 */}
          <div className="bg-red-50 p-8 rounded-lg shadow-lg border border-red-200">
            <div className="flex items-center mb-4">
              <FaExclamationTriangle className="text-3xl text-red-500 mr-3" />
              <h3 className="text-2xl font-bold text-red-800">
                꽁머니 사용, 이것만은 꼭!
              </h3>
            </div>
            <ul className="list-disc list-inside space-y-3 text-lg text-gray-700 pl-2">
              <li>
                <strong className="font-semibold">미션! 롤링 조건 🎯:</strong>{" "}
                받은 꽁머니의 몇 배를 베팅해야 출금 가능해요. (꼭 확인!)
              </li>
              <li>
                <strong className="font-semibold">게임 선택권 제한 🎮:</strong>{" "}
                특정 게임에만 쓸 수 있는지 확인해요.
              </li>
              <li>
                <strong className="font-semibold">출금 상한선 확인 💰:</strong>{" "}
                꽁머니 수익 중 얼마까지 뺄 수 있는지 알아봐요.
              </li>
              <li>
                <strong className="font-semibold">사용 기한 체크 ⏳:</strong>{" "}
                꽁머니를 언제까지 써야 하는지 놓치지 마세요.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 3: 안전하게 꽁머니 쓰기 (먹튀검증 강조) */}
      <section className="p-10 rounded-xl shadow-lg bg-gray-100 border border-gray-200">
        <div className="text-center mb-8">
          <FaUserShield className="text-6xl text-blue-600 mb-4 mx-auto" />
          <h2 className="text-3xl font-extrabold text-gray-900">
            꽁머니보다 중요한 건? <span className="text-red-600">안전!</span> (
            <span className="text-red-500">먹튀검증</span> 필수!)
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            달콤한 꽁머니 제안도 좋지만,{" "}
            <strong className="text-red-600">먹튀사이트</strong>라면 아무 소용
            없어요. 꽁머니를 받기 전에, 그 사이트가 믿을 만한 곳인지{" "}
            <strong className="font-semibold">꽁머니팡</strong>에서 꼭
            확인하세요!
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow border border-blue-200">
          <h4 className="text-xl font-bold text-blue-800 mb-4 flex items-center">
            <FaQuestionCircle className="text-blue-500 mr-3" />
            꽁머니팡 안전 체크리스트
          </h4>
          <ul className="list-disc list-inside space-y-3 text-lg text-gray-700">
            <li>
              <strong className="font-semibold text-green-600">
                꽁머니팡 보증 마크 ✅:
              </strong>{" "}
              꽁머니팡이 "안전해요!" 도장을 찍은 곳인지 확인하세요.
            </li>
            <li>
              <strong className="font-semibold text-purple-600">
                커뮤니티 소식통 📢:
              </strong>{" "}
              먹튀검증, 피해사례 게시판에서 다른 분들의 생생한 후기를
              들어보세요.
            </li>
            <li>
              <strong className="font-semibold text-blue-600">
                사이트 정보 꼼꼼히 🔍:
              </strong>{" "}
              꽁머니팡이 제공하는 사이트 정보를 미리 읽어보세요.
            </li>
          </ul>
        </div>
        <p className="text-center font-semibold text-red-700 mt-8 text-lg">
          <FaExclamationTriangle className="inline-block mr-2" />
          너~무 좋은 조건의 꽁머니, 혹은 듣도 보도 못한 새 사이트는 일단 의심!
          또 의심!
        </p>
      </section>

      {/* Section 4: 꽁머니 활용 팁 */}
      <section>
        <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
          <FaInfoCircle className="text-teal-500 mr-3" />
          꽁머니 현명하게 활용하기
        </h2>
        <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
          <p>
            <strong className="text-blue-600">꽁머니</strong>는 초기 자본 부담
            없이 베팅을 시작할 좋은 기회이지만, 주의사항을 숙지하고 활용해야
            합니다.
          </p>
          <ul className="list-disc list-inside space-y-3 bg-gray-50 p-6 rounded-lg border">
            <li>
              <strong className="font-semibold">지급 조건 확인:</strong>{" "}
              꽁머니를 받기 위한 조건(가입 방식, 추천인 등)을 명확히 확인하세요.
            </li>
            <li>
              <strong className="font-semibold">사용 및 롤링 규정:</strong>{" "}
              꽁머니 사용 가능 게임, 베팅 제한, 롤링(베팅 총액 조건) 규정을
              반드시 확인해야 합니다.
            </li>
            <li>
              <strong className="font-semibold">출금 조건:</strong> 꽁머니로
              얻은 수익의 출금 조건을 꼼꼼히 확인하세요. 추가 입금을 요구하는
              경우도 있습니다.
            </li>
            <li>
              <strong className="font-semibold">과도한 꽁머니 경계:</strong>{" "}
              현실과 동떨어진 금액의 꽁머니를 약속하는 곳은 의심해봐야 합니다.
            </li>
          </ul>
        </div>
      </section>

      {/* Section 5: 커뮤니티 활용법 */}
      <section>
        <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
          <FaUsers className="text-purple-500 mr-3" />
          꽁머니팡 커뮤니티 100% 활용하기
        </h2>
        <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
          <p>
            꽁머니팡 <strong className="text-blue-600">커뮤니티</strong>는
            단순한 정보 공유를 넘어, 집단 지성을 통해 더 안전하고 즐거운 베팅
            문화를 만들어가는 공간입니다.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow border-l-4 border-purple-500">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                정보 교류의 장
              </h3>
              <p>
                최신 스포츠 분석,{" "}
                <strong className="text-green-500">안전놀이터</strong> 정보,
                베팅 노하우 등 다양한 정보를 다른 회원들과 공유하고 얻어가세요.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow border-l-4 border-red-500">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                피해 사례 공유 및 예방
              </h3>
              <p>
                <strong className="text-red-500">먹튀</strong> 피해 사례를
                공유하여 다른 회원들의 피해를 예방하고, 의심스러운 사이트에 대한
                정보를 나눠보세요.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default GuideContent;
