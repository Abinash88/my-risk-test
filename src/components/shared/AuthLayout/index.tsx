import { Outlet } from "react-router-dom";
import Authheader from "./header";
import Footer from "../HomeLayout/footer";

const AuthLayout = () => {
	return (
		<>
			<Authheader>{<Outlet />}</Authheader>
			<Footer />
		</>
	);
};

export default AuthLayout;
