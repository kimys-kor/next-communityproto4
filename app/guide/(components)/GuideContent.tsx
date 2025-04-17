import React from "react";
import {
  FaCheckCircle,
  FaExclamationTriangle,
  FaInfoCircle,
  FaUsers,
  FaShieldAlt,
} from "react-icons/fa";

function GuideContent() {
  return (
    <div className="space-y-12 mt-8">
      {/* Section 1: 안전한 토토사이트 선택 */}
      <section>
        <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
          <FaShieldAlt className="text-blue-600 mr-3" />
          안전한 토토사이트 선택 방법
        </h2>
        <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
          <p>
            안전한 <strong className="text-blue-600">토토사이트</strong> 이용은{" "}
            <strong className="text-red-500">먹튀검증</strong>에서 시작됩니다.
            꽁머니팡은 회원님들의 안전한 베팅 환경을 위해 다음과 같은 기준을
            고려하여 사이트를 선택하시길 권장합니다.
          </p>
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
            <h3 className="text-xl font-semibold text-blue-800 mb-3 flex items-center">
              <FaCheckCircle className="text-green-500 mr-2" />
              꽁머니팡 추천 및 검증 활용
            </h3>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong className="font-semibold">꽁머니팡 보증 업체:</strong>{" "}
                가장 확실한 방법은 꽁머니팡이 직접 검증하고 보증하는 업체를
                이용하는 것입니다.
              </li>
              <li>
                <strong className="font-semibold">먹튀검증 게시판 확인:</strong>{" "}
                커뮤니티의 먹튀검증 게시판에서 다른 사용자들의 피해 사례나 검증
                요청 글을 확인하세요.
              </li>
            </ul>
          </div>
          <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
            <h3 className="text-xl font-semibold text-yellow-800 mb-3 flex items-center">
              <FaExclamationTriangle className="text-orange-500 mr-2" />
              사이트 자체 확인 사항
            </h3>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong className="font-semibold">보안 (SSL):</strong> 사이트
                주소가 'https://'로 시작하는지 확인하여 데이터 전송 보안을
                점검하세요.
              </li>
              <li>
                <strong className="font-semibold">운영 기간 및 평판:</strong>{" "}
                너무 신생이거나 평판이 좋지 않은 사이트는 피하는 것이 좋습니다.
              </li>
              <li>
                <strong className="font-semibold">고객센터 응답 속도:</strong>{" "}
                고객 지원이 원활한지 간단한 문의를 통해 확인해볼 수 있습니다.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 2: 꽁머니 활용 팁 */}
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

      {/* Section 3: 커뮤니티 활용법 */}
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

      {/* Section 4: 꽁머니팡의 약속 */}
      <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-8 rounded-lg shadow-xl text-center">
        <h2 className="text-3xl font-bold mb-4">꽁머니팡의 약속</h2>
        <p className="text-xl leading-relaxed max-w-3xl mx-auto">
          꽁머니팡은 항상 회원님들의 안전을 최우선으로 생각하며, 지속적인{" "}
          <strong className="text-yellow-300">먹튀검증</strong>과{" "}
          <strong className="text-yellow-300">안전놀이터</strong> 정보
          업데이트를 통해 신뢰할 수 있는{" "}
          <strong className="text-yellow-300">스포츠커뮤니티</strong> 환경을
          제공하기 위해 노력하겠습니다.
        </p>
      </section>
    </div>
  );
}

export default GuideContent;
