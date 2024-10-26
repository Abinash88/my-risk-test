import { Outlet } from "react-router-dom";
import Authheader from "./header";
import Footer from "../HomeLayout/footer";
import { ToastContainer } from "react-toastify";

const AuthLayout = () => {
  return (
    <>
      <Authheader>{<Outlet />}</Authheader>
      <Footer />
      <ToastContainer />
    </>
  );
};

export default AuthLayout;
