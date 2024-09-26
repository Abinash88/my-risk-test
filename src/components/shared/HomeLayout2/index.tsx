import { Outlet } from "react-router-dom";
import Footer from "./footer";
import Header from "./header";

const HomeLayout = () => {
  return (
    <>
      <Header />
      {/* <Testnav /> */}
      <Outlet />
      <Footer />
    </>
  );
};

export default HomeLayout;
