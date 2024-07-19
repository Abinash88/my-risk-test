import { FormEvent, useState } from "react";
import { RegContainer } from "@/components/shared/ReuseAble";
import ForgotPassword from "./ForgotPassword";
import ResetPassword from "./ResetPassword";

const PasswordResetPage = () => {
	const [isResetPassword, setIsResetPassword] = useState(false);

	const handleForgotPasswordSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsResetPassword(true);
	};

	return (
		<RegContainer>
			<>
				{!isResetPassword ? (
					<ForgotPassword onSubmit={handleForgotPasswordSubmit} />
				) : (
					<ResetPassword />
				)}
			</>
		</RegContainer>
	);
};

export default PasswordResetPage;
