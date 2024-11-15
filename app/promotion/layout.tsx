import Proto2layout1 from "../components/layouts/proto2layout1";

export const metadata = {
  title: "꽁머니팡: 홍보 게시판",
  description: "홍보 게시판",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <Proto2layout1 children={children} />;
}
