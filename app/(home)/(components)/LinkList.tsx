// components/LinkList.tsx
import React from "react";
import CategoryLink from "./CategoryLink";

type Category =
  | "주소월드 텔레 공식 채널"
  | "웹툰"
  | "무료드라마"
  | "성인사이트"
  | "오피/유흥"
  | "스포츠중계"
  | "먹튀검증"
  | "토렌트"
  | "커뮤니티"
  | "성인용품"
  | "한인교민";

const linkData: Record<Category, { name: string; url: string }[]> = {
  "토이소 공식 텔레 채널 : toiso777": [
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
    { name: "툰코", url: "https://toonkor.com" },
    { name: "블랙툰", url: "https://blacktoon.com" },
    { name: "뉴토끼", url: "https://newtokki.com" },
    { name: "펀비", url: "https://funbi.com" },
    { name: "북토끼", url: "https://booktokki.com" },
    { name: "섹툰", url: "https://sextoon.com" },
    { name: "야툰", url: "https://yatun.com" },
    { name: "나미툰", url: "https://namitoon.com" },
    { name: "조아툰", url: "https://joatoon.com" },
    { name: "뉴툰", url: "https://newtoon.com" },
  ],
  무료드라마: [
    { name: "티비몬", url: "https://tvmon.com" },
    { name: "티비위키", url: "https://tvwiki.com" },
    { name: "HOOHOOTV", url: "https://hoohootv.com" },
    { name: "방방바TV", url: "https://bangbangba.com" },
    { name: "티비착", url: "https://tvchak.com" },
    { name: "코티비씨", url: "https://kotvbc.com" },
    { name: "코리아맥스티비", url: "https://koreamax.tv" },
    { name: "쏭티비", url: "https://songtv.com" },
    { name: "차차티비", url: "https://chachattv.com" },
    { name: "별별티비", url: "https://byeolbyeoltv.com" },
  ],
  성인사이트: [
    { name: "AVseeTV", url: "https://avseetv.com" },
    { name: "MissAV", url: "https://missav.com" },
    { name: "AV19", url: "https://av19.com" },
    { name: "AV쏘걸", url: "https://avsoell.com" },
    { name: "야동코리아", url: "https://yadongkorea.com" },
    { name: "AV탑걸", url: "https://avtopgirl.com" },
    { name: "다크걸", url: "https://darkgirl.com" },
    { name: "야동공장", url: "https://yadonggongjang.com" },
    { name: "야동판", url: "https://yadongpan.com" },
    { name: "조개파티", url: "https://jogaeparty.com" },
  ],
  "오피/유흥": [
    { name: "오피가이드", url: "https://opiguide.com" },
    { name: "부산달리기", url: "https://busan-daligi.com" },
    { name: "오피스타", url: "https://opista.com" },
    { name: "오피아트", url: "https://opart.com" },
    { name: "아이러브밤", url: "https://ilovebam.com" },
    { name: "대밤", url: "https://daebam.com" },
    { name: "건마바다", url: "https://geonmabada.com" },
    { name: "펀초이스", url: "https://funchoice.com" },
    { name: "건마시티", url: "https://geonmacity.com" },
    { name: "즐거운달리기", url: "https://jeulgeoun-daligi.com" },
  ],
  스포츠중계: [
    { name: "블랙TV", url: "https://blacktv.com" },
    { name: "킹콩TV", url: "https://kingkongtv.com" },
    { name: "쿨TV", url: "https://cooltv.com" },
    { name: "굿라이브TV", url: "https://goodlivetv.com" },
    { name: "로얄티비", url: "https://royaltv.com" },
    { name: "배트맨TV", url: "https://batmantv.com" },
    { name: "놀고가닷컴", url: "https://nolgo.com" },
    { name: "각TV", url: "https://gactv.com" },
    { name: "코난TV", url: "https://conantv.com" },
    { name: "올림픽TV", url: "https://olympictv.com" },
  ],
  먹튀검증: [
    { name: "슈어맨", url: "https://sureman.com" },
    { name: "먹튀중개소", url: "https://meoktijunggaeso.com" },
    { name: "먹튀검증소", url: "https://meoktigeomjeongso.com" },
    { name: "베팅노리", url: "https://bettingnori.com" },
    { name: "먹튀안내소", url: "https://meoktianneso.com" },
    { name: "토진사", url: "https://tojin-sa.com" },
    { name: "먹튀클럽", url: "https://meokticlub.com" },
    { name: "토프세이", url: "https://topse.com" },
    { name: "토토군", url: "https://totogun.com" },
    { name: "파워볼오토", url: "https://powerballauto.com" },
  ],
  토렌트: [
    { name: "토렌트큐큐", url: "https://torrentqq.com" },
    { name: "토렌트씨", url: "https://torrentcc.com" },
    { name: "토렌트썸", url: "https://torrentsum.com" },
    { name: "토렌트알지", url: "https://torrentalji.com" },
    { name: "토다와", url: "https://todawa.com" },
    { name: "토렌트릴", url: "https://torrentril.com" },
    { name: "토렌트탑", url: "https://torrenttop.com" },
    { name: "섹토렌트", url: "https://sextorrent.com" },
    { name: "토렌트제이", url: "https://torrentj.com" },
    { name: "ktx토렌트", url: "https://ktxtorrent.com" },
  ],
  커뮤니티: [
    { name: "디시인사이드", url: "https://dcinside.com" },
    { name: "보배드림", url: "https://bobae.com" },
    { name: "일간베스트", url: "https://ilganbest.com" },
    { name: "뽐뿌", url: "https://ppomppu.com" },
    { name: "개드립", url: "https://gadeulip.com" },
    { name: "인벤", url: "https://inven.com" },
    { name: "루리웹", url: "https://ruliweb.com" },
    { name: "에펨코리아", url: "https://efemkorea.com" },
    { name: "클리앙", url: "https://clien.net" },
    { name: "MLB파크", url: "https://mlbpark.com" },
  ],
  성인용품: [
    { name: "바나나몰", url: "https://bananamall.com" },
    { name: "조이앤조이", url: "https://joyandjoy.com" },
    { name: "좋은느낌", url: "https://joheunneung.com" },
    { name: "로맨스몰", url: "https://romancemall.com" },
    { name: "나이트몰", url: "https://nightmall.com" },
    { name: "응큼샵", url: "https://eungkeumshop.com" },
    { name: "핑크박스샵", url: "https://pinkboxshop.com" },
    { name: "찐바나나몰", url: "https://jjinnanamall.com" },
    { name: "싸이소", url: "https://cyso.com" },
    { name: "19모아", url: "https://19moa.com" },
  ],
  한인교민: [
    { name: "[미국]뉴욕코리아", url: "https://newyorkkorea.com" },
    { name: "[호주]코리안타운", url: "https://koreantown.com.au" },
    { name: "[일본]제펜인포", url: "https://japaninfo.com" },
    { name: "[태국]타이홀릭", url: "https://thaiholic.com" },
    { name: "[영국]영국사랑", url: "https://uklove.com" },
    { name: "[러시아]코리언스", url: "https://koreans.com" },
    { name: "[캐나다] 한인장터", url: "https://koreanmarket.com" },
    { name: "[베트남]베한타임즈", url: "https://vietnamtimes.com" },
    { name: "[네덜란드]데일리NL", url: "https://dailynl.com" },
    { name: "[일본]도쿄사람", url: "https://tokyopeople.com" },
  ],
};

const LinkList: React.FC = () => {
  return (
    <div>
      {Object.keys(linkData).map((category) => {
        const typedCategory = category as Category; // type assertion
        return (
          <CategoryLink
            key={typedCategory}
            category={typedCategory}
            links={linkData[typedCategory]}
          />
        );
      })}
    </div>
  );
};

export default LinkList;
