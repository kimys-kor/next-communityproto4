import Image from "next/image";
import money from "/public/images/money.png";
import search from "/public/images/search.png";
import talkball from "/public/images/talkball.png";
import RankingList from "./RankingList";

function HomeDescription1() {
  return (
    <div className="w-full pt-4">
      <RankingList />
      <main>
        <section className="block lg:flex bg-bgblue py-28 px-10 gap-5">
          <div className="container mx-auto px-6 py-16">
            <div className="text-base md:text-lg text-gray-700 font-normal leading-relaxed space-y-6 max-w-3xl mx-auto">
              <p>
                꽁머니는 꽁머니사이트와 다양한 온라인 플랫폼에서 제공하는 무료
                자금으로, 주로 신규 가입자나 기존 회원들의 활발한 참여를
                유도하기 위해 지급됩니다. 이러한 보상은 디지털 시대의 재테크
                트렌드 중 하나로 자리 잡았으며, 가입 보너스, 앱테크, 가입 쿠폰
                등 다양한 프로그램을 통해 사용자들에게 추가 혜택을 제공합니다.
              </p>
              <p>
                평범한 사용자들도 이를 활용하면 금전적 부담 없이 스포츠 베팅 및
                다양한 활동에서 수익을 창출할 수 있는 기회를 갖게 됩니다.
              </p>
              <p>
                꽁머니는 디지털 시대의 재테크 트렌드로 자리잡았으며,
                스포츠토토를 포함한 다양한 활동에서 수익을 창출하는 데 도움을
                줍니다. 안전한 사이트에서 이를 활용하면 금전적 부담 없이
                재미있는 베팅을 즐길 수 있습니다.
              </p>
            </div>
          </div>
        </section>

        {/* 첫 번째 섹션: 안전한 꽁머니 사이트 선택 */}
        <section className="flex flex-col justify-center items-center py-20">
          <Image
            alt="안전한 꽁머니 사이트 선택"
            width={248}
            height={255}
            src={money}
          />
          <h2 className="text-4xl font-semibold text-blue pt-10">
            안전한 꽁머니사이트 선택하기
          </h2>
          <p className="w-full max-w-[900px] px-5 pt-5 text-description leading-6 flex flex-col justify-center items-center text-sm">
            꽁머니를 제공하는 사이트는 안전성이 가장 중요합니다. 먹튀와 같은
            불법적인 행위를 예방하기 위해, 사용자들은 믿을 수 있는 사이트를
            선택해야 합니다. 토이소는 SSL 보안 인증과 철저한 먹튀 검증을 거친
            안전한 사이트들을 소개하며, 이용자가 안심하고 참여할 수 있는 환경을
            제공합니다. 또한, 최신 이벤트와 보너스 혜택을 비교하고, 조건에 맞는
            최적의 꽁머니 사이트를 선택할 수 있도록 안내합니다.
          </p>
        </section>

        {/* 두 번째 섹션: 꽁머니란 무엇인가 */}
        <section className="flex flex-col justify-center items-center py-20">
          <h2 className="text-4xl font-semibold text-blue">
            꽁머니란 무엇인가?
          </h2>
          <p className="w-full max-w-[900px] px-5 pt-5 text-description leading-6 flex flex-col justify-center items-center text-sm">
            꽁머니는 웹사이트에서 제공하는 무료 자금으로, 신규 가입자에게
            주어지는 경우가 많습니다. 또한, 기존 회원들에게도 참여를 유도하기
            위한 이벤트로 제공되며, 이 보상을 활용하여 초기 베팅을 시작하거나
            다양한 게임을 즐길 수 있습니다. 최근에는 앱테크를 통한 수익 창출과
            재테크 수단으로 인기를 끌고 있으며, 이를 통해 사용자들은 적은
            비용으로 더 많은 혜택을 누릴 수 있습니다. 이 과정에서 중요한 점은,
            먹튀 피해를 방지하기 위한 검증 절차를 철저히 확인하는 것입니다.
          </p>
        </section>

        {/* 섹션 3: 꽁머니 활용법과 팁 */}
        <section className="w-full px-4 py-10">
          <div className="flex flex-wrap gap-8 justify-center">
            <div className="w-full sm:w-80 bg-white p-6 rounded-lg shadow-lg space-y-4">
              <h3 className="text-xl font-semibold text-blue-600">
                꽁머니 안전하게 사용하기 위한 팁
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                먹튀를 예방하기 위한 필수 조건은 먹튀 검증입니다.
                메이저사이트에서 제공하는 꽁머니를 사용하려면, 먼저 해당
                사이트의 안전성을 체크해야 합니다. SSL 보안 인증이 완료된
                사이트에서만 사용하고, 고객 서비스나 출금 정책을 꼼꼼히 확인하는
                것이 중요합니다. 또한, 다른 이용자들의 후기나 리뷰를 참고하여
                사이트의 신뢰성을 판단하는 것도 좋은 방법입니다.
              </p>
            </div>
            <div className="w-full sm:w-80 bg-white p-6 rounded-lg shadow-lg space-y-4">
              <h3 className="text-xl font-semibold text-blue-600">
                먹튀 예방 및 안전한 사이트 사용
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                먹튀 검증은 꽁머니 사용의 핵심입니다. 검증되지 않은 사이트에서
                베팅을 시도하면 금전적 손실을 입을 수 있기 때문에, 철저한 검증이
                필수입니다. 신뢰할 수 있는 먹튀검증업체의 추천을 참고하고,
                사용자들의 후기도 중요한 정보가 될 수 있습니다. 또한, 사이트의
                보안 인증과 출금 규정을 꼼꼼히 확인하여 안전하게 사용하세요.
              </p>
            </div>
          </div>
        </section>

        {/* 자주 묻는 질문 (FAQ) 섹션 */}
        <section className="py-10">
          <h2 className="text-4xl font-semibold text-blue text-center">
            자주 묻는 질문 (FAQ)
          </h2>
          <div className="w-full max-w-[900px] mx-auto px-5 pt-5 text-description leading-6 flex flex-col justify-center items-center text-sm">
            <p>
              <strong>꽁머니는 무엇인가요?</strong> 꽁머니는 신규 가입자나 특정
              이벤트 참여를 통해 제공되는 무료 자금으로, 이를 통해 베팅을 시작할
              수 있습니다.
            </p>
            <p>
              <strong>어떻게 꽁머니를 안전하게 사용할 수 있나요?</strong> 먹튀
              검증이 완료된 사이트에서만 사용하고, 보안 인증을 받은 사이트를
              선택하는 것이 중요합니다.
            </p>
            <p>
              <strong>꽁머니는 어떻게 받나요?</strong> 꽁머니는 가입 보너스,
              입금 플러스 이벤트, 친구 추천 등을 통해 받을 수 있습니다.
            </p>
            <p>
              <strong>꽁머니는 현금으로 출금 가능한가요?</strong> 출금은
              사이트의 규정에 따라 달라질 수 있으며, 특정 조건을 충족해야
              현금화할 수 있는 경우가 많습니다.
            </p>
            <p>
              <strong>꽁머니 참여 시 수수료가 발생하나요?</strong> 일부 사이트는
              조건을 충족하지 못하면 수수료를 요구할 수 있습니다. 안전한
              사이트를 통해 참여하는 것이 중요합니다.
            </p>
          </div>
        </section>

        {/* 결론 섹션 */}
        <section className="py-10">
          <h2 className="text-4xl font-semibold text-blue text-center">결론</h2>
          <p className="w-full max-w-[900px] mx-auto px-5 pt-5 text-description leading-6 flex flex-col justify-center items-center text-sm">
            꽁머니는 안전한 사이트에서 제공되는 보너스를 활용해 스포츠토토와
            다른 베팅 게임에서 수익을 창출하는 유용한 도구입니다. 이를 통해
            사용자들은 금전적 부담 없이 다양한 스포츠와 게임을 즐기며 혜택을
            누릴 수 있습니다. 그러나 가장 중요한 것은, 항상 신뢰할 수 있는
            사이트를 선택하고, 먹튀 피해를 예방하는 것입니다. 안전하고 효율적인
            꽁머니 사용을 통해, 즐거운 베팅 경험을 누리세요!
          </p>
        </section>
      </main>
    </div>
  );
}

export default HomeDescription1;
