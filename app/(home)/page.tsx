import TabAnalyzePage from "@/app/(home)/(components)/TabAnalyzePage";
import TabACommunityPage from "@/app/(home)/(components)/TabACommunityPage";
import ProgressSliderPage from "../components/ProgressSliderPage";
import HomeBoard from "./(components)/HomeBoard";

export default function Home() {
  return (
    <div>
      <article className="w-full h-full flex flex-col gap-5 lg:gap-10">
        {/* <HomeBanner></HomeBanner> */}

        <ProgressSliderPage></ProgressSliderPage>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <TabAnalyzePage />
          <TabACommunityPage></TabACommunityPage>
        </section>

        <HomeBoard></HomeBoard>
        {/* <MultiResponsiveSlider></MultiResponsiveSlider> */}
      </article>
    </div>
  );
}
