import { TabACommunityClient } from "./TabCommunityClient";
import { fetchInitialCommunityTabData } from "@/app/utils";

const TabACommunityPage = async () => {
  const initialData = await fetchInitialCommunityTabData();
  return <TabACommunityClient initialTab={0} initialData={initialData} />;
};

export default TabACommunityPage;
