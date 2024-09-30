import { useState } from "react";
import { RegContainer } from "../../../shared/ReuseAble";
import { Eye, EyeSlash } from "@phosphor-icons/react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Input } from "antd";

const Login = () => {
	const [viewPassword, setViewPassword] = useState(false);
	const navigate = useNavigate();
	return (
		<RegContainer>
			<>
				<div className="flex flex-col items-center">
				<img
						src="/images/logo.png"
						alt="logo"
						className="w-[9rem] lg:w-[250px]"
					/>
					<h4 className="text-[22px] font-[600] text-black text-center mt-2 mb-6">Hey, Welcome!</h4>
				</div>
				<Form 
					layout="vertical"
					className="w-full flex flex-col gap-4"
					initialValues={{
						email: 'moshood@gmail.com',
						password: '******'
					}}
				>
					<Form.Item
						label="Email"
						name="email"
						rules={[{ required: true, message: 'Please enter your email' }]}
					>
						<Input type="email" className="p-3"/>
					</Form.Item>
					<Form.Item
						label="Password"
						name="password"
						rules={[{ required: true, message: 'Please enter your password' }]}
					>
						<Input.Password className="p-3"/>
					</Form.Item>
					<button
						type="submit"
						onClick={()=>navigate('/otp')}
						className="bg-[#3838F0] text-center text-white rounded-lg py-5 mt-4"
					>
						Login
					</button>
				</Form>
				
				
			</>
		</RegContainer>
	);
};

export default Login;
