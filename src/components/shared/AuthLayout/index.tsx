import { Link, Outlet, useLocation } from "react-router-dom";
import Authheader from "./header";
import Footer from "../HomeLayout/footer";

import AuthImage from "../../../assets/images/auth-image.png";

const AuthLayout = () => {
  const location = useLocation();

  return (
    <>
      <div
        className="relative w-full min-h-screen bg-cover  bg-center"
        style={{ backgroundImage: `url(${AuthImage})` }}
      >
        <div className="relative z-50 py-10 inset-0 bg-black bg-opacity-70 flex flex-col justify-center   gap-4 text-white  text-center md:p-6 min-h-screen">
          <Authheader />
          {<Outlet />}
          <div className="flex w-full justify-center mt-10 items-center gap-3 scale-90">
            <p className="font-semibold text-[16px] hidden md:block">
              {location.pathname.includes("login")
                ? "Don't have a Account?"
                : " Have an Account?"}
            </p>
            {location.pathname.includes("login") ? (
              <Link
                to="/auth"
                className="bg-[#000080] hover:bg-[#000080]/80 lg:mt-0 md:mt-0 mt-4 py-3 px-12 rounded-lg text-white"
              >
                SignUp
              </Link>
            ) : (
              <Link
                to="/auth/login"
                className="bg-[#000080] hover:bg-[#000080]/80 lg:mt-0 md:mt-0 mt-4 py-3 px-12 rounded-lg text-white"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AuthLayout;
