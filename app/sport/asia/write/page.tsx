import Write from "@/app/components/boards/Write";

function Page() {
  return (
    <div className="flex flex-col max-w-[1200px] gap-1">
      <Write postType={3} title={"아시아축구분석"}></Write>
    </div>
  );
}

export default Page;
