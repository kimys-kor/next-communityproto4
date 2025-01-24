import Container from "@/app/components/Container";
import Footer from "@/app/components/layouts/Footer";
import RightSideBanner from "@/app/components/layouts/RightSideBanner";
import Login from "@/app/components/login/Login";

import Headers from "@/app/components/layouts/headers/Headers";
import NoticeCard from "@/app/components/cards/NoticeCard";
import NewPostCard from "@/app/components/cards/NewPostCard";
import NewPartnerCard from "@/app/components/cards/NewPartnerCard";
import MobBottomNav from "@/app/components/MobBottomNav";
import GuidePage from "@/app/components/guide2/page";
import GGongPage from "@/app/components/guide2/ggong/page";
import MajorPage from "@/app/components/guide2/major/page";
import SafePage from "@/app/components/guide2/safe/page";
import MtverifyPage from "@/app/components/guide2/mtverify/page";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Headers></Headers>
      <div className="min-h-[100vh]">
        <Container>
          <aside className="md:w-1/4 mt-40 hidden md:flex flex-col gap-10 max-w-[300px] h-full">
            <Login></Login>

            <NoticeCard />
            <NewPostCard />
            <NewPartnerCard />
            {/* <IconTabs></IconTabs> */}
          </aside>
          <section className="w-full mt-40 mmd:mt-28 md:mt-36 md:w-3/4">
            {children}
          </section>
          <RightSideBanner></RightSideBanner>
        </Container>
        <GuidePage></GuidePage>
        <MtverifyPage></MtverifyPage>
        <GGongPage></GGongPage>
        <MajorPage></MajorPage>
        <SafePage></SafePage>
      </div>
      <Footer />
      <MobBottomNav />
    </>
  );
}
