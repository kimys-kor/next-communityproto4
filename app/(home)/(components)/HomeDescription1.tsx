import Image from "next/image";
import money from "/public/images/money.png";
import search from "/public/images/search.png";
import talkball from "/public/images/talkball.png";
import {
  FaCheckCircle,
  FaQuestionCircle,
  FaExclamationTriangle,
  FaGift,
  FaShieldAlt,
} from "react-icons/fa";

function HomeDescription1() {
  return (
    <div className="w-full bg-gradient-to-b from-blue-50 to-white pt-20 pb-20">
      <main className="container mx-auto px-6">
        <section className="text-center mb-16">
          <FaGift className="text-6xl text-blue-500 mx-auto mb-4" />
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            꽁머니와 안전한 스포츠토토 즐기기
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            꽁머니팡에서 추천하는 안전한 꽁머니사이트 정보를 확인하고, 금전적
            부담 없이 스포츠토토와 다양한 혜택을 즐겨보세요. 확실한 먹튀검증은
            필수입니다!
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <Image
              alt="안전한 꽁머니 활용"
              width={500}
              height={400}
              src={money}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl font-semibold text-gray-800 flex items-center">
              <FaCheckCircle className="text-green-500 mr-3" />
              꽁머니란? 안전한 꽁머니사이트 선택 가이드
            </h3>
            <p className="text-gray-700 leading-relaxed">
              꽁머니는 신규 가입이나 이벤트를 통해 제공되는 무료 포인트입니다.
              이를 활용해 부담 없이{" "}
              <strong className="text-blue-600">토토사이트</strong>의 스포츠
              베팅을 시작할 수 있습니다. 하지만 가장 중요한 것은
              <strong className="text-red-500">먹튀검증</strong>!{" "}
              <strong className="text-gray-900 font-semibold">꽁머니팡</strong>
              는 철저한 검증을 통과한 안전놀이터만을 추천하여 회원님의 소중한
              자산을 보호합니다. SSL 보안, 출금 정책, 사용자 후기를 꼼꼼히
              확인하세요.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>신뢰할 수 있는 먹튀검증 커뮤니티(꽁머니팡!) 확인</li>
              <li>사이트 보안(SSL) 및 개인정보 처리 방침 확인</li>
              <li>출금 조건 및 규정 명확히 인지</li>
              <li>다른 사용자들의 솔직한 후기 참고</li>
            </ul>
          </div>
        </section>

        <section className="mb-20">
          <h3 className="text-3xl font-semibold text-center text-gray-800 mb-10">
            <FaShieldAlt className="inline-block text-blue-500 mr-2" />
            꽁머니 안전하게 사용하기 위한 핵심 팁
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-blue-500 hover:shadow-xl transition-shadow duration-300">
              <h4 className="text-xl font-semibold text-gray-800 mb-3">
                <FaExclamationTriangle className="inline-block text-yellow-500 mr-2" />
                먹튀 예방: 검증된 토토사이트 추천 활용
              </h4>
              <p className="text-gray-600 leading-relaxed">
                꽁머니 사용 전, 반드시{" "}
                <strong className="text-red-500">먹튀검증</strong>을 거친
                사이트인지 확인하세요. 꽁머니팡과 같은 신뢰도 높은
                <strong className="text-blue-600">스포츠커뮤니티</strong>의{" "}
                <strong className="text-green-500">토토사이트추천</strong>{" "}
                목록을 참고하는 것이 안전합니다. 검증되지 않은 곳에서의 사용은
                금전적 손실로 이어질 수 있습니다.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-green-500 hover:shadow-xl transition-shadow duration-300">
              <h4 className="text-xl font-semibold text-gray-800 mb-3">
                <FaCheckCircle className="inline-block text-green-500 mr-2" />
                사이트 이용 조건 꼼꼼히 확인하기
              </h4>
              <p className="text-gray-600 leading-relaxed">
                꽁머니 지급 조건, 사용 방법, 출금 규정 등을 명확히 이해해야
                합니다. 일부 사이트는 까다로운 롤링 조건이나 추가 입금을 요구할
                수 있습니다. 이용 약관을 꼼꼼히 읽어보고 예상치 못한 불이익이
                없도록 대비하세요.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 p-10 rounded-lg shadow-md">
          <h3 className="text-3xl font-semibold text-center text-gray-800 mb-8">
            <FaQuestionCircle className="inline-block text-blue-500 mr-2" />
            꽁머니 관련 자주 묻는 질문 (FAQ)
          </h3>
          <div className="space-y-6 max-w-3xl mx-auto">
            <div>
              <h4 className="font-semibold text-gray-800">
                Q. 꽁머니는 무엇인가요?
              </h4>
              <p className="text-gray-600 mt-1">
                A. 신규 가입이나 이벤트 참여 시{" "}
                <strong className="text-blue-600">토토사이트</strong>에서
                제공하는 무료 베팅 자금 또는 포인트입니다.{" "}
                <strong className="text-gray-900 font-semibold">
                  꽁머니팡
                </strong>
                가 추천하는 안전놀이터에서 받아보세요.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">
                Q. 어떻게 꽁머니를 안전하게 사용할 수 있나요?
              </h4>
              <p className="text-gray-600 mt-1">
                A. <strong className="text-red-500">먹튀검증</strong>이 완료된
                사이트, 특히 꽁머니팡의{" "}
                <strong className="text-green-500">토토사이트추천</strong>
                목록에 있는 곳을 이용하는 것이 가장 중요합니다. 보안(SSL)과 출금
                규정도 확인하세요.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">
                Q. 꽁머니는 현금으로 바로 출금 가능한가요?
              </h4>
              <p className="text-gray-600 mt-1">
                A. 대부분의 경우, 바로 출금은 어렵습니다. 사이트별 롤링 조건이나
                추가 입금 등의 규정을 충족해야 출금 가능하며, 이는{" "}
                <strong className="text-blue-600">토토사이트</strong>마다
                다릅니다.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default HomeDescription1;
