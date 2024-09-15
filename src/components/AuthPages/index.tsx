import { useState, useEffect } from "react";
import BusinessRegister from "./Business/Register";
import ProfessionalRegister from "./Professional/Register";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [registrationType, setRegistrationType] = useState<
    "business" | "professional" | null
  >(null);

  const handleBusinessClick = () => {
    setRegistrationType("business");
  };

  const handleProfessionalClick = () => {
    setRegistrationType("professional");
  };
  const navigate = useNavigate();

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    goToTop();
  }, []);

  return (
    <>
      {registrationType === null && (
        <div className="mt-[25vh] scale-90 md:mt-[15%] w-[85%] md:w-[30%] mr-auto ml-auto text-black flex flex-col gap-4">
          <div
            className="bg-white rounded-lg p-4 w-full font-[600] text-[20px] cursor-pointer"
            onClick={() => navigate("business")}
          >
            Register as Business
          </div>
          <div
            className="bg-white rounded-lg p-4 w-full font-[600] text-[20px] cursor-pointer"
            onClick={() => navigate("professional")}
          >
            Register as Professional
          </div>
        </div>
      )}
      {registrationType === "business" && <BusinessRegister />}
      {registrationType === "professional" && <ProfessionalRegister />}
    </>
  );
};

export default Auth;
