import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Auth from "./components/AuthPages";
import BusinessRegister from "./components/AuthPages/Business/Register";
import PasswordResetPage from "./components/AuthPages/Login";
import Login from "./components/AuthPages/Login/Login";
import ProfessionalRegister from "./components/AuthPages/Professional/Register";
import AccountProfile from "./components/Dashboard/AccountProfile";
import AiRisk from "./components/Dashboard/AiRisk";
import EngagementLog from "./components/Dashboard/EngagementLog";
import GeneralSetting from "./components/Dashboard/GeneralSetting";
import EditTeam from "./components/Dashboard/GeneralSetting/EditTeam";
import HelpCenter from "./components/Dashboard/HelpCenter";
import CenterDetails from "./components/Dashboard/HelpCenter/CenterDetails";
import ManageRisk from "./components/Dashboard/ManageRIsk";
import Notification from "./components/Dashboard/Notification";
import NotificationSetting from "./components/Dashboard/Notification/NotificationSetting";
import PrivateGroup from "./components/Dashboard/PrivateGroup";
import GroupSettings from "./components/Dashboard/PrivateGroup/GroupSettings";
import Referral from "./components/Dashboard/Referral";
import Subscription from "./components/Dashboard/Subscription";
import ChangePlan from "./components/Dashboard/Subscription/ChangePlan";
import Verification from "./components/Dashboard/Verification";
import Blog from "./components/LandingPage/Blog";
import BlogContent from "./components/LandingPage/Blog/BlogContent";
import GeneralRisk from "./components/LandingPage/GeneralRisk";
import DownloadReport from "./components/LandingPage/GeneralRisk/GeneralRiskPages/GeneratedRiskProfile/download-report";
import LandingPage from "./components/LandingPage/mainPage";
import CookiePolicy from "./components/LandingPage/mainPage/cookie-policy";
import HomePage from "./components/LandingPage/mainPage/home-page-component/HomePage";
import IntegratedService from "./components/LandingPage/mainPage/IntegratedService";
import OurPremium from "./components/LandingPage/mainPage/OurPremium";
import OurService from "./components/LandingPage/mainPage/OurService";
import OurWorks from "./components/LandingPage/mainPage/OurWorks";
import PrivacyPolicy from "./components/LandingPage/mainPage/privacy-policy";
import ProductSubscription from "./components/LandingPage/mainPage/ProductSubscription";
import RiskManagement from "./components/LandingPage/mainPage/RiskManagement";
import TermsAndConditions from "./components/LandingPage/mainPage/terms-and-conditions";
import Map from "./components/LandingPage/Map";
import AuthLayout from "./components/shared/AuthLayout";
import ErrorPage from "./components/shared/ErrorPage";
import HomeLayout from "./components/shared/HomeLayout";
import HomeLayout2 from "./components/shared/HomeLayout2";
import LoggedLayout from "./components/shared/LoggedLayout/loggedLayout";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index={true} element={<LandingPage />} />
          <Route path="/service" element={<OurService />} />
          <Route path="/premium" element={<OurPremium />} />
          <Route path="/our-work" element={<OurWorks />} />
          <Route path="/integrated-service" element={<IntegratedService />} />
          <Route path="/risk-management" element={<RiskManagement />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route
            path="/terms-and-conditions"
            element={<TermsAndConditions />}
          />
          <Route
            path="/product-subscription"
            element={<ProductSubscription />}
          />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:blogcontent" element={<BlogContent />} />
        </Route>

        <Route path="/" element={<HomeLayout2 />}>
          <Route path="/home-page" element={<HomePage />} />
          <Route path="/testing" element={<DownloadReport />} />
          {/* <Route path="/testing2" element={<StepsSection />} /> */}

          {/* <Route path="/ai-model" element={<AIModel />} /> */}
          {/* <Route path="/generate-download" element={<GenerateDownload />} /> */}
          {/* <Route path="/make-payment" element={<MakePayment />} />  */}
          {/* <Route path="/payment-mode" element={<PaymentMode />} /> */}
          {/* <Route path="/upload" element={<Upload />} /> */}
          {/* <Route path="/general-risk" element={<GeneralRisk />} /> */}
          {/* <Route path="/risk-profile" element={<RiskProfile />} /> */}
          <Route path="/map" element={<Map />} />
        </Route>

        <Route path="/auth" element={<AuthLayout />}>
          <Route index={true} element={<Auth />} />
          <Route path="business" element={<BusinessRegister />} />
          <Route path="professional" element={<ProfessionalRegister />} />
          <Route path="login" element={<Login />} />
          <Route path="forgot-password" element={<PasswordResetPage />} />
        </Route>

        <Route path="/dashboard" element={<LoggedLayout />}>
          <Route path="account-profile" element={<AccountProfile />} />
          <Route path="manage-risk" element={<ManageRisk />} />
          <Route path="subscription" element={<Subscription />} />
          <Route path="subscription/change-plan" element={<ChangePlan />} />
          <Route path="private-group" element={<PrivateGroup />} />
          <Route path="group-settings" element={<GroupSettings />} />
          <Route path="ai-risk" element={<AiRisk />} />
          <Route path="notification" element={<Notification />} />
          <Route path="engagement-log" element={<EngagementLog />} />
          <Route
            path="notification/notification-setting"
            element={<NotificationSetting />}
          />
          <Route path="help-center" element={<HelpCenter />} />
          <Route
            path="help-center/:centerdetails"
            element={<CenterDetails />}
          />
          <Route path="referral" element={<Referral />} />
          <Route path="general-setting" element={<GeneralSetting />} />
          <Route path="general-setting/:edit-team" element={<EditTeam />} />
          <Route path="verification" element={<Verification />} />
        </Route>

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default App;
