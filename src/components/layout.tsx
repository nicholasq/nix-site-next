import {ReactNode} from "react";
import Menubar from "@/components/menubar";
import Footer from "@/components/footer";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Menubar />
      {children}
      <Footer />
    </>
  );
}
