import { RegContainer } from "@/components/shared/ReuseAble";
import { useState } from "react";
import { Form, Input } from "antd";
import { useNavigate } from "react-router-dom";

const Otp = () => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  return (
    <div className="md:scale-[86%] md:mt-[-2rem]">
      <RegContainer>
        <>
          <div className="flex flex-col items-center">
            <img
              src="/images/logo.png"
              alt="logo"
              className="w-[9rem] lg:w-[250px]"
            />
            <h4 className="text-[22px] font-[600] text-black text-center mt-4">
              Enter OTP Code
            </h4>
            <p className="mb-6 text-black opacity-70">
              Enter the 4-digit code sent to your email
            </p>
          </div>

          <Form
            layout="vertical"
            className="w-full flex flex-col gap-4"
            initialValues={{}}
          >
            <Form.Item hasFeedback validateStatus="success" className="">
              <Input.OTP size="large" length={4} style={{ width: "100%" }} />
            </Form.Item>
            <button
              type="submit"
              onClick={() => navigate("/admin/admin/dashboard")}
              className="bg-[#3838F0] text-center text-white rounded-lg py-5 mt-4"
            >
              Login
            </button>
          </Form>
        </>
      </RegContainer>
    </div>
  );
};

export default Otp;
