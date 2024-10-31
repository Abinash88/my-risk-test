import { Outlet } from "react-router-dom";
import LoggedHeader from "../LoggedLayout/loggedHeader";
import Footer from "./footer";

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
