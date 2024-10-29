import { Outlet } from "react-router-dom";
import Footer from "./footer";
import Header from "./header";
import LoggedHeader from "../LoggedLayout/loggedHeader";

const HomeLayout = () => {
  return (
    <>
      <LoggedHeader />
      <Outlet />
      <Footer />
    </>
  );
};

export default HomeLayout;
