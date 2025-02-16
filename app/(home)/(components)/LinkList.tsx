type Link = {
  name: string;
  url: string;
};

const linkData: Map<string, Link[]> = new Map([
  [
    "토이소 공식 텔레 채널 : toiso777",
    [
      { name: "Google", url: "https://google.com" },
      { name: "Youtube", url: "https://youtube.com" },
      { name: "Naver", url: "https://naver.com" },
      { name: "Band", url: "https://band.us" },
      { name: "Daum", url: "https://daum.net" },
      { name: "Kakao", url: "https://kakao.com" },
      { name: "Instagram", url: "https://instagram.com" },
      { name: "Facebook", url: "https://facebook.com" },
    ],
  ],
  [
    "웹툰",
    [
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
  ],
  // 다른 카테고리들도 동일한 방식으로 추가
]);

const LinkList: React.FC = () => {
  return (
    <div>
      {Array.from(linkData.keys()).map((category) => {
        const links = linkData.get(category); // Map에서 데이터 가져오기
        if (links) {
          return (
            <div key={category}>
              <h3>{category}</h3>
              <ul>
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};
