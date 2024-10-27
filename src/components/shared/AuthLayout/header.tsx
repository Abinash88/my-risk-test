import { Link } from "react-router-dom";

const Authheader = () => {
  return (
    <div className="flex items-center w-full  justify-center ">
      <Link to="/">
        <img
          src="/images/auth-logo.png"
          alt="logo"
          className="w-[9rem] lg:w-[250px]"
        />
      </Link>
    </div>
  );
};

export default Authheader;
