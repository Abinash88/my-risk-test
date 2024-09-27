import { Outlet } from "react-router-dom";
import Authheader from "./header";

const AuthLayout = () => {
	return (
		<>
			<Authheader>{<Outlet />}</Authheader>
		</>
	);
};

export default AuthLayout;
