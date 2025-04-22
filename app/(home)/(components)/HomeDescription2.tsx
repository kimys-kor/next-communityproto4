import Image from "next/image";
import search from "/public/images/search.png";
import talkball from "/public/images/talkball.png";
import major from "/public/images/major.png";
import {
  FaBalanceScale,
  FaBullhorn,
  FaClipboardCheck,
  FaUserShield,
  FaExclamationTriangle,
  FaSyncAlt,
  FaTable,
  FaQuestionCircle,
} from "react-icons/fa";

function HomeDescription2() {
  return (
    <div className="w-full bg-gray-100 pt-20 pb-20">
      <main className="container mx-auto px-6">
        <section className="text-center mb-16">
          <FaUserShield className="text-6xl text-blue-600 mx-auto mb-4" />
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            꽁머니팡만의 철저한 먹튀검증 시스템
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            안전한 <strong className="text-blue-600">토토사이트</strong> 이용을
            위한 첫걸음, 바로
            <strong className="text-red-500">먹튀검증</strong>입니다.{" "}
            <strong className="text-gray-900 font-semibold">꽁머니팡</strong>는
            실 보증금 제도와 다각적인 검증 시스템을 통해 회원님들이 안심하고
            베팅을 즐길 수 있는{" "}
            <strong className="text-green-500">안전놀이터</strong> 환경을
            제공합니다.
          </p>
        </section>

        <section className="mb-20">
          <h3 className="text-3xl font-semibold text-center text-gray-800 mb-10">
            꽁머니팡 먹튀검증 주요 활동
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
              <FaBullhorn className="text-4xl text-red-500 mb-4" />
              <h4 className="text-xl font-semibold text-gray-800 mb-3">
                먹튀사이트 피해 접수 및 중재
              </h4>
              <p className="text-gray-600 leading-relaxed">
                억울한 <strong className="text-red-500">먹튀</strong> 피해 발생
                시, 꽁머니팡에 신고하세요. 증거 자료를 바탕으로 먹튀 업장과의
                대화를 재개하고 피해 금액 반환 협의를 지원합니다.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
              <FaClipboardCheck className="text-4xl text-blue-500 mb-4" />
              <h4 className="text-xl font-semibold text-gray-800 mb-3">
                먹튀신고 정보 상세 분석 및 공유
              </h4>
              <p className="text-gray-600 leading-relaxed">
                단순 정보 나열이 아닌, 주요 증거 자료 분석과 함께 먹튀 수법,
                예방 FAQ 등을 상세히 편집하여{" "}
                <strong className="text-blue-600">스포츠커뮤니티</strong>에
                공유함으로써 추가 피해를 막습니다.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
              <FaBalanceScale className="text-4xl text-yellow-600 mb-4" />
              <h4 className="text-xl font-semibold text-gray-800 mb-3">
                이용 예정 토토사이트 안전성 검증
              </h4>
              <p className="text-gray-600 leading-relaxed">
                새로운 <strong className="text-blue-600">토토사이트</strong>{" "}
                이용 전, 꽁머니팡에
                <strong className="text-red-500">먹튀</strong> 위험성 검증을
                요청하세요. 객관적인 데이터를 기반으로 해당 사이트의 안전 점수를
                평가해 드립니다.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
              <FaUserShield className="text-4xl text-green-500 mb-4" />
              <h4 className="text-xl font-semibold text-gray-800 mb-3">
                안전놀이터 이용 가이드 제공
              </h4>
              <p className="text-gray-600 leading-relaxed">
                사설 <strong className="text-blue-600">토토사이트</strong>{" "}
                시장의 위험 요소와{" "}
                <strong className="text-green-500">안전놀이터</strong> 이용 시
                주의사항, 유용한 팁 등을 정리하여 초보자부터 숙련자까지 모두에게
                필요한 정보를 제공합니다.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
              <FaExclamationTriangle className="text-4xl text-orange-500 mb-4" />
              <h4 className="text-xl font-semibold text-gray-800 mb-3">
                최신 먹튀 수법 공개 및 예방 안내
              </h4>
              <p className="text-gray-600 leading-relaxed">
                끊임없이 진화하는 <strong className="text-red-500">먹튀</strong>{" "}
                수법을
                <strong className="text-gray-900 font-semibold">
                  꽁머니팡
                </strong>
                가 발 빠르게 파악하고 상세히 공개합니다. 이를 통해 유사 피해를
                사전에 예방할 수 있도록 돕습니다.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
              <FaSyncAlt className="text-4xl text-purple-500 mb-4" />
              <h4 className="text-xl font-semibold text-gray-800 mb-3">
                보증 업체 안전성 상시 재검증
              </h4>
              <p className="text-gray-600 leading-relaxed">
                한번 <strong className="text-green-500">안전놀이터</strong>로
                검증된 곳이라도 안심은 금물! 꽁머니팡은 제휴{" "}
                <strong className="text-blue-600">토토사이트</strong>의 안정성을
                주기적으로 재검증하여 최상의 보안 상태를 유지합니다.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white p-10 rounded-lg shadow-md mb-20">
          <h3 className="text-3xl font-semibold text-center text-gray-800 mb-8">
            <FaTable className="inline-block text-blue-500 mr-2" />
            먹튀 제보 처리, 왜 꽁머니팡인가?
          </h3>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src={search}
                width={120}
                height={120}
                alt="먹튀 제보 및 신고 처리"
                className="mx-auto md:mx-0 mb-4 md:mb-0"
              />
            </div>
            <div className="space-y-4">
              <h4 className="text-2xl font-semibold text-gray-800">
                독보적인 신뢰도, 상세한 사건 분석
              </h4>
              <p className="text-gray-700 leading-relaxed">
                <strong className="text-gray-900 font-semibold">
                  꽁머니팡
                </strong>
                는 단순 제보 나열을 넘어, 각{" "}
                <strong className="text-red-500">먹튀</strong> 사건을 심층
                분석하여 수법과 세부 정보를 체계적으로 제공합니다. 이는 타
                <strong className="text-blue-600">먹튀검증</strong> 사이트와
                차별화되는 꽁머니팡만의 강점입니다.
              </p>
              <div className="overflow-x-auto">
                <table className="min-w-full table-auto border-collapse border border-gray-300 shadow-sm">
                  <thead className="bg-gray-200">
                    <tr>
                      <th className="px-4 py-3 border border-gray-300 text-center font-semibold text-gray-700">
                        항목
                      </th>
                      <th className="px-4 py-3 border border-gray-300 text-center font-semibold text-gray-700">
                        타 검증사이트
                      </th>
                      <th className="px-4 py-3 border border-gray-300 text-center font-semibold text-blue-600">
                        꽁머니팡
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 border border-gray-300 text-center">
                        먹튀 제보
                      </td>
                      <td className="px-4 py-3 border border-gray-300 text-center">
                        가능
                      </td>
                      <td className="px-4 py-3 border border-gray-300 text-center font-medium text-green-600">
                        가능
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 border border-gray-300 text-center">
                        세부 정보 제공
                      </td>
                      <td className="px-4 py-3 border border-gray-300 text-center">
                        단순/없음
                      </td>
                      <td className="px-4 py-3 border border-gray-300 text-center font-medium text-green-600">
                        상세 제공
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 border border-gray-300 text-center">
                        사건 분석/수법 공유
                      </td>
                      <td className="px-4 py-3 border border-gray-300 text-center">
                        미흡
                      </td>
                      <td className="px-4 py-3 border border-gray-300 text-center font-medium text-green-600">
                        체계적 분석 및 공유
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-3xl font-semibold text-center text-gray-800 mb-10">
            믿을 수 있는 정보, 안전한 베팅 환경
          </h3>
          <div className="grid md:grid-cols-2 gap-12">
            <article className="flex items-start gap-6 bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <FaSyncAlt className="text-5xl text-purple-500 mt-1 flex-shrink-0" />
              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-3">
                  메이저놀이터도 방심은 금물! 상시 안전 점검
                </h4>
                <p className="text-gray-600 leading-relaxed mb-3">
                  <strong className="text-green-500">메이저놀이터</strong>라고
                  해서 영원히 안전한 것은 아닙니다. 꽁머니팡는 기존 보증
                  업체라도 정기적인 재검증을 통해{" "}
                  <strong className="text-blue-600">토토사이트</strong>의
                  안정성을 지속적으로 관리하여{" "}
                  <strong className="text-red-500">먹튀</strong> 위험을
                  최소화합니다.
                </p>
                <div className="bg-gray-50 p-4 rounded">
                  <h5 className="font-semibold text-gray-700 flex items-center mb-2">
                    <FaQuestionCircle className="text-gray-500 mr-2" />
                    자주 묻는 질문
                  </h5>
                  <p className="text-sm text-gray-600">
                    <strong>Q. 메이저놀이터 안전성 100% 보장?</strong> A. 완벽
                    보장은 어렵지만, 꽁머니팡는 먹튀 보증금 제도를 통해 피해
                    발생 시 책임지고 보상합니다.
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    <strong>Q. 메이저가 먹튀로 변질?</strong> A. 가능성은 늘
                    존재합니다. 그래서 주기적인{" "}
                    <strong className="text-red-500">먹튀검증</strong>이
                    필수입니다.
                  </p>
                </div>
              </div>
            </article>
            <article className="flex items-start gap-6 bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Image
                src={talkball}
                width={60}
                height={60}
                alt="먹튀검증 트렌드 변화"
                className="mt-1 flex-shrink-0"
              />
              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-3">
                  최신 먹튀검증 트렌드, 꽁머니팡가 알려드립니다
                </h4>
                <p className="text-gray-600 leading-relaxed mb-3">
                  변화하는 <strong className="text-red-500">먹튀</strong> 수법에
                  발맞춰
                  <strong className="text-gray-900 font-semibold">
                    꽁머니팡
                  </strong>
                  는 최신
                  <strong className="text-blue-600">먹튀검증</strong> 트렌드를
                  놓치지 않습니다. 업데이트된 정보를 바탕으로 가장 안전한
                  <strong className="text-green-500">
                    토토사이트추천
                  </strong>{" "}
                  목록을 제공하고, 유용한 검증 자료를{" "}
                  <strong className="text-blue-600">스포츠커뮤니티</strong>를
                  통해 공유합니다.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                  <li>지속적인 트렌드 분석 및 최신 정보 업데이트</li>
                  <li>카테고리별 먹튀 검증 자료 체계적 제공</li>
                  <li>안전놀이터 이용을 위한 실질적인 가이드 제시</li>
                </ul>
              </div>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
}

export default HomeDescription2;
