import Container from "@/app/components/Container";
import RightSideBanner from "@/app/components/layouts/RightSideBanner";
import Login from "@/app/components/login/Login";
import Headers from "@/app/components/layouts/headers/Headers";
import Footer from "@/app/components/layouts/Footer";
import NoticeCard from "@/app/components/cards/NoticeCard";
import NewPostCard from "@/app/components/cards/NewPostCard";
import NewPartnerCard from "@/app/components/cards/NewPartnerCard";
import MobBottomNav from "@/app/components/MobBottomNav";import TabAnalyzePage from "@/app/(home)/(components)/TabAnalyzePage";
import TabACommunityPage from "@/app/(home)/(components)/TabACommunityPage";



export default function Proto2layout1({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Headers></Headers>
      <Container>
        <aside className="md:w-1/4 mt-40 hidden md:flex flex-col gap-8 max-w-[300px] h-full">
          <Login></Login>
          <NoticeCard />
          <NewPostCard />
          <NewPartnerCard />
          {/* <IconTabs></IconTabs> */}
        </aside>
        <section className="w-full mt-[153px] mmd:mt-28 md:mt-36 md:w-3/4">
          {children}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <TabAnalyzePage />
          <TabACommunityPage></TabACommunityPage>
        </section>
        </section>
        <RightSideBanner></RightSideBanner>
      </Container>
      <Footer />
      <MobBottomNav />
    </>
  );
}
