import { LayoutProps } from "@/interface";
import { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";


const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      {/* <main>{children}</main> */}
      <main className="pt-28">{children}</main> {/* add padding top */}
      <Footer />
    </>
  );
};

export default Layout;