import { FC } from "react";
import Footer from "../Footer";
import Header from "../Header";
import { LayoutProps } from "./types";

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
