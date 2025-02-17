import React from "react";
import Ranking from "./Ranking";

type Category =
  | "먹튀검증은 토이소"
  | "웹툰"
  | "무료드라마"
  | "성인사이트"
  | "오피/유흥"
  | "스포츠중계"
  | "먹튀검증"
  | "토렌트"
  | "커뮤니티"
  | "성인용품"
  | "한인교민"
  | "토이소 공식 텔레 채널 : toiso777"; // 여기 추가

const linkData: Record<string, { name: string; url: string }[]> = {
  "SNS 주소": [
    { name: "Google", url: "https://google.com" },
    { name: "Youtube", url: "https://youtube.com" },
    { name: "Naver", url: "https://naver.com" },
    { name: "Band", url: "https://band.us" },
    { name: "Daum", url: "https://daum.net" },
    { name: "Kakao", url: "https://kakao.com" },
    { name: "Instagram", url: "https://instagram.com" },
    { name: "Facebook", url: "https://facebook.com" },
  ],
  웹툰: [
    { name: "툰코", url: "https://toonkor486.com/%EC%9B%B9%ED%88%B0" },
    { name: "블랙툰", url: "https://blacktoon348.com/" },
    { name: "뉴토끼", url: "https://newtoki468.com/" },
    { name: "펀비", url: "https://funbe510.com/%EC%9B%B9%ED%88%B0" },
    { name: "북토끼", url: "https://booktoki468.com/" },
    { name: "섹툰", url: "https://sektoon72.org/" },
    { name: "야툰", url: "https://yatoon193.com/" },
    { name: "나미툰", url: "https://namitoon.com" },
    { name: "조아툰", url: "https://joatoon59.com/" },
    { name: "뉴툰", url: "https://newtoon264.com/" },
  ],
  무료드라마: [
    { name: "티비몬", url: "https://tvmon15.org/" },
    { name: "티비위키", url: "https://tvwiki14.com/" },
    { name: "HOOHOOTV", url: "https://hoohootv146.xyz/" },
    { name: "방방바TV", url: "https://mzgvod01.com/" },
    { name: "티비착", url: "https://tvchak135.com/" },
    { name: "코티비씨", url: "https://m31.kotbc2.com/" },
    { name: "코리아맥스티비", url: "https://krmaxtv96.com/" },
    { name: "쏭티비", url: "https://songtv1.net/f/index" },
    { name: "차차티비", url: "https://chachatv95.pro/" },
    { name: "별별티비", url: "https://bbtv65.com/" },
  ],
  성인사이트: [
    { name: "AVseeTV", url: "https://02.avsee.ru/" },
    { name: "MissAV", url: "https://missvod1.com/" },
    { name: "AV19", url: "https://avav19.com/" },
    { name: "AV쏘걸", url: "https://kr74.sogirl.so/" },
    { name: "야동코리아", url: "https://yako4.net/" },
    { name: "AV탑걸", url: "https://kr37.topgirl.co/" },
    { name: "다크걸", url: "https://darkg4.com/" },
    { name: "야동공장", url: "https://yagong84.com/" },
    { name: "야동판", url: "https://yadongpan80.org/" },
    { name: "조개파티", url: "https://jogaeparty137.com/" },
  ],
  "오피/유흥": [
    {
      name: "오피가이드",
      url: "https://opga032.com/bbs/board.php?bo_table=op_partner_posting",
    },
    { name: "부산달리기", url: "https://www.budal7.net/" },
    { name: "오피스타", url: "https://ost01.com/" },
    { name: "오피아트", url: "https://dkxm7.com/" },
    { name: "아이러브밤", url: "https://albam8.com/" },
    { name: "대밤", url: "https://eoqka29.com/" },
    { name: "건마바다", url: "https://www.gunmabada.com/" },
    { name: "펀초이스", url: "https://funchoice96.net/" },
    { name: "건마시티", url: "https://gunmacity.com/" },
    { name: "즐거운달리기", url: "https://ubub-5.com/" },
  ],
  스포츠중계: [
    { name: "블랙TV", url: "https://blacktv88.com/" },
    { name: "킹콩TV", url: "https://kktv12.com/" },
    { name: "쿨TV", url: "https://www.cool114.com/" },
    { name: "굿라이브TV", url: "https://gltv88.com/" },
    { name: "로얄티비", url: "https://royaltv01.com/" },
    { name: "배트맨TV", url: "https://bmtv24.com/" },
    { name: "놀고가닷컴", url: "https://nolgoga365.com/" },
    { name: "각TV", url: "https://gaktv66.com/" },
    { name: "코난TV", url: "https://conan-tv.com/" },
    { name: "올림픽TV", url: "https://ioctv24.com/bbs/login.php" },
  ],
  먹튀검증: [
    { name: "슈어맨", url: "https://www.sureman.com/" },
    { name: "먹튀중개소", url: "https://www.mukjungso.com/" },
    { name: "먹튀검증소", url: "https://totosave.com/" },
    { name: "베팅노리", url: "https://bettingnori.net/" },
    { name: "먹튀안내소", url: "https://mttotoinfo.com/" },
    { name: "토진사", url: "https://tozinsa.com/" },
    { name: "먹튀클럽", url: "https://xn--dm2bx4b269a41b.com/" },
    { name: "토프세이", url: "https://topsei.com/" },
    { name: "토토군", url: "https://totogun.com/" },
    { name: "파워볼오토", url: "https://www.pato114.net/" },
  ],
  토렌트: [
    { name: "토렌트큐큐", url: "https://torrentqq355.com/" },
    { name: "토렌트씨", url: "https://torrentsee273.com/" },
    { name: "토렌트썸", url: "https://torrentsome182.com/" },
    { name: "토렌트알지", url: "https://torrentrj188.com/" },
    { name: "토다와", url: "https://www.todawa123.site/home.php" },
    {
      name: "토렌트릴",
      url: "https://www.torrentreel119.site/home.php?key=dcc1c379bdb5cb214c06d7aece7265ea",
    },
    { name: "토렌트탑", url: "https://torrenttop141.com/" },
    { name: "섹토렌트", url: "https://s13.sekto.org/" },
    { name: "토렌트제이", url: "https://torrentj161.com/" },
    { name: "ktx토렌트", url: "https://ktxtorrent140.com/" },
  ],
  커뮤니티: [
    { name: "디시인사이드", url: "https://dcinside.com" },
    { name: "보배드림", url: "https://m.bobaedream.co.kr/" },
    { name: "일간베스트", url: "https://www.ilbe.com/" },
    { name: "뽐뿌", url: "https://www.ppomppu.co.kr/" },
    { name: "개드립", url: "https://www.dogdrip.net/" },
    { name: "인벤", url: "https://www.inven.co.kr/" },
    { name: "루리웹", url: "https://bbs.ruliweb.com/" },
    { name: "에펨코리아", url: "https://www.fmkorea.com/" },
    { name: "클리앙", url: "https://www.clien.net/service/" },
    { name: "MLB파크", url: "https://mlbpark.donga.com/mp/" },
  ],
  성인용품: [
    { name: "바나나몰", url: "https://www.bananamall.co.kr/" },
    { name: "조이앤조이", url: "https://www.joynjoy.com/" },
    { name: "좋은느낌", url: "https://www.nicefeels.kr/" },
    { name: "로맨스몰", url: "https://www.romancemall.co.kr/" },
    { name: "나이트몰", url: "https://www.nightmall.co.kr/" },
    { name: "응큼샵", url: "https://sensualshop.co.kr/" },
    { name: "핑크박스샵", url: "https://pinkboxshop.com/intro/adult_im.html" },
    { name: "찐바나나몰", url: "https://www.jjbananamall.co.kr/" },
    { name: "싸이소", url: "https://www.ssaiso.com/" },
    { name: "19모아", url: "https://www.19moa.co.kr/" },
  ],
  한인교민: [
    {
      name: "[미국]뉴욕코리아",
      url: "https://www.newyorkkorea.net/main/index.html",
    },
    { name: "[호주]코리안타운", url: "https://www.ikoreatown.com.au/wp2/" },
    { name: "[일본]제펜인포", url: "http://japaninfo.jp/" },
    { name: "[태국]타이홀릭", url: "https://thaiholic.com/" },
    { name: "[영국]영국사랑", url: "http://www.04uk.com/" },
    { name: "[러시아]코리언스", url: "http://koreans.ru/rb/?r=home" },
    {
      name: "[캐나다] 한인장터",
      url: "https://www.canadakoreanmall.com/main/frame.php",
    },
    { name: "[베트남]베한타임즈", url: "http://www.viethantimes.com/" },
    { name: "[네덜란드]데일리NL", url: "https://dailynl.net/" },
    { name: "[일본]도쿄사람", url: "https://www.tokyosaram.jp/" },
  ],
};

const RankingList: React.FC = () => {
  return (
    <div className="container mx-auto min-h-screen px-4">
      <h2 className="font-bold text-center text-white mb-0">
        토이소:링크모음 주소모음 주소모아 주소월드 링크공유 주소공유 컨텐츠 인기
        웹사이트 순위
      </h2>
      {/* 각 카테고리별로 Ranking 컴포넌트를 렌더링 */}
      {Object.entries(linkData).map(([category, rankings]) => (
        <Ranking
          key={category}
          category={category} // 카테고리 이름 그대로 전달
          rankings={rankings as { name: string; url: string }[]} // URL을 포함한 데이터를 전달
        />
      ))}
    </div>
  );
};

export default RankingList;
