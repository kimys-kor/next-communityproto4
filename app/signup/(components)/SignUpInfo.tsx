import React from "react";

const SignUpInfo: React.FC = () => {
  return (
    <div className="w-full px-4 py-6 bg-gray-100 rounded-lg mt-6">
      <h2 className="text-2xl font-semibold text-center text-blue-600 mb-4">
        꽁머니팡 회원가입
      </h2>
      <p className="mt-4 text-gray-600 text-sm md:text-base leading-relaxed">
        꽁팡은 모든 사용자의 데이터를 암호화처리 하고 있습니다.
      </p>

      <div className="space-y-4">
        <h3 className="text-lg font-medium text-blue-600">1. 회원가입 혜택</h3>
        <ul className="list-disc list-inside pl-4 text-gray-700">
          <li>사용자 맞춤형 추천 서비스</li>
          <li>특별 이벤트 참여 기회</li>
          <li>다양한 할인 혜택 제공</li>
        </ul>

        <h3 className="text-lg font-medium text-blue-600 mt-6">
          2. 간편한 회원가입 절차
        </h3>
        <p className="text-gray-700">
          꽁머니팡 웹사이트에 접속하여 상단 메뉴에서 ‘회원가입’ 버튼을
          클릭합니다. 필요한 정보를 입력하고 약관에 동의한 후, '가입하기' 버튼을
          클릭하면 회원가입이 완료됩니다.
        </p>

        <h3 className="text-lg font-medium text-blue-600 mt-6">
          3. 이메일 인증
        </h3>
        <p className="text-gray-700">
          가입 후 보안을 위해 이메일 인증이 필요할 수 있습니다. 이메일에 전송된
          인증 링크를 클릭하여 계정을 활성화하세요.
        </p>

        <h3 className="text-lg font-medium text-blue-600 mt-6">
          4. 모바일 회원가입 지원
        </h3>
        <p className="text-gray-700">
          꽁머니팡는 모바일에서도 간편하게 가입 절차를 진행할 수 있습니다. 언제
          어디서나 가입이 가능합니다.
        </p>
      </div>
    </div>
  );
};

export default SignUpInfo;
