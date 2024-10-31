const TermsAndConditions = () => {
    return (
      <div className="w-full bg-[#F3F3F3] px-5 md:px-12 pb-20 pt-28 md:pt-32  min-h-[100vh]">
        {/* fixed side button */}
        <button className="fixed z-50 -left-14 md:-left-16 top-1/3 -rotate-90 bg-[#000080] text-white p-3 md:p-4 rounded-lg md:text-[22px] text-lg  ">
          Show Contents
        </button>
        {/* fixed side button */}
        <div className="bg-white rounded-xl  md:p-10  p-7">
          <div className="space-y-3">
            <h2 className="md:text-4xl text-2xl font-semibold text-[#000080]">
              Terms & Conditions
            </h2>
            <p
              style={{ lineHeight: "140%" }}
              className="md:text-[22px] text-[#000080] font-light text-lg"
            >
              Welcome to Hermandai! Your privacy matters, and we’re here to
              safeguard it while providing exceptional AI-driven risk management
              solutions. This Privacy Policy outlines how we collect, use, and
              protect your personal information. By using our website, you agree
              to the practices described{" "}
            </p>
          </div>
          <div className="h-10"></div>
          <div className="">
            <h3 className="md:text-2xl text-lg mb-6 font-semibold text-[#000080]">
              1. What we collect?
            </h3>
            <p className="md:text-[22px] text-[#000080] font-light text-lg mb-2">
              We collect only the data we need to deliver an awesome experience:
            </p>
            <ul className="md:text-[22px] text-[#000080] font-light text-lg list-disc pl-6">
              <li>
                Personal Information: When you sign up, we may collect your name,
                email, and contact details.
              </li>
              <li>
                Usage Data: We gather non-personal data about how you interact
                with Hermandai, like pages visited and clicks (because who doesn’t
                love a good click?).
              </li>
              <li>
                Cookies: To make your experience seamless, we use cookies to
                remember your preferences and improve our AI.{" "}
              </li>
            </ul>
          </div>
  
          <div className="h-10"></div>
          <div className="">
            <h3 className="md:text-2xl text-lg mb-6 font-semibold text-[#000080]">
              2. How We Use It
            </h3>
            <p className="md:text-[22px] text-[#000080] font-light text-lg mb-2">
              We use your data to:
            </p>
            <ul className="md:text-[22px] text-[#000080] font-light text-lg list-disc pl-6">
              <li>Provide and improve Hermandai’s services.</li>
              <li>
                Communicate updates, insights, and AI-driven recommendations.
              </li>
              <li>
                Personalize your experience, making risk management easier and
                smarter.
              </li>
            </ul>
          </div>
  
          <div className="h-10"></div>
          <div className="">
            <h3 className="md:text-2xl text-lg mb-6 font-semibold text-[#000080]">
              Data Sharing
            </h3>
            <p className="md:text-[22px] text-[#000080] font-light text-lg mb-2">
              We use your data to:
            </p>
            <ul className="md:text-[22px] text-[#000080] font-light text-lg list-disc pl-6">
              <li>Provide and improve Hermandai’s services.</li>
              <li>
                Communicate updates, insights, and AI-driven recommendations.
              </li>
              <li>
                Personalize your experience, making risk management easier and
                smarter.
              </li>
            </ul>
          </div>
  
          <div className="h-10"></div>
          <p className="md:text-[22px] text-[#000080] md:w-[60%] font-light text-lg mb-2">
            We take your privacy seriously and implement strict security measures.
            Your data is encrypted and stored securely, ensuring that unauthorized
            access stays far away.
          </p>
        </div>
      </div>
    );
  };
  
  export default TermsAndConditions;
  