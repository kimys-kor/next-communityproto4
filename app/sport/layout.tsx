import Proto2layout1 from "../components/layouts/proto2layout1";

export const metadata = {
  title: "꽁머니팡: 해외축구분석",
  description: "해외축구분석",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <Proto2layout1 children={children} />;
}
