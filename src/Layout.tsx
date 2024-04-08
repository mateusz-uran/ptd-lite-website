import { ReactNode } from "react";
import Footer from "./components/footer/Footer";
import Topbar from "./components/nav/Topbar";

type ChildrenProps = {
  children: ReactNode | ReactNode[];
};

const Layout = ({ children }: ChildrenProps) => {
  return (
    <>
      <Topbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
