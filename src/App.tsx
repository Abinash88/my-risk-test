import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeLayout from "./components/shared/HomeLayout";
import HomeLayout2 from "./components/shared/HomeLayout2";
import Blog from "./components/LandingPage/Blog";
import LandingPage from "./components/LandingPage/mainPage";
import LoggedLayout from "./components/shared/LoggedLayout/loggedLayout";
import AccountProfile from "./components/Dashboard/AccountProfile";
import ManageRisk from "./components/Dashboard/ManageRIsk";
import Subscription from "./components/Dashboard/Subscription";
import ChangePlan from "./components/Dashboard/Subscription/ChangePlan";
import PrivateGroup from "./components/Dashboard/PrivateGroup";
import AiRisk from "./components/Dashboard/AiRisk";
import Notification from "./components/Dashboard/Notification";
import NotificationSetting from "./components/Dashboard/Notification/NotificationSetting";
import HelpCenter from "./components/Dashboard/HelpCenter";
import CenterDetails from "./components/Dashboard/HelpCenter/CenterDetails";
import Referral from "./components/Dashboard/Referral";
import GeneralSetting from "./components/Dashboard/GeneralSetting";
import Verification from "./components/Dashboard/Verification";
import ErrorPage from "./components/shared/ErrorPage";
import EditTeam from "./components/Dashboard/GeneralSetting/EditTeam";
import MakePayment from "./components/LandingPage/Payment/MakePayment";
import PaymentMode from "./components/LandingPage/Payment";
import GeneralRisk from "./components/LandingPage/GeneralRisk";
import RiskProfile from "./components/LandingPage/RiskProfile";
import HomePage, {
  GenerateDownload,
} from "./components/LandingPage/mainPage/home-page-component/HomePage";
import OurService from "./components/LandingPage/mainPage/OurService";
import OurPremium from "./components/LandingPage/mainPage/OurPremium";
import RiskManagement from "./components/LandingPage/mainPage/RiskManagement";
import AuthLayout from "./components/shared/AuthLayout";
import Auth from "./components/AuthPages";
import Login from "./components/AuthPages/Login/Login";
import PasswordResetPage from "./components/AuthPages/Login";
import BlogContent from "./components/LandingPage/Blog/BlogContent";
import ProductSubscription from "./components/LandingPage/mainPage/ProductSubscription";
import IntegratedService from "./components/LandingPage/mainPage/IntegratedService";
import CommentsSection from "./components/Dashboard/ManageRIsk/CommentModal/comments";
import StepsSection from "./components/Dashboard/ManageRIsk/CommentModal/steps";
import OurWorks from "./components/LandingPage/mainPage/OurWorks";
import { Upload } from "./components/LandingPage/mainPage/Upload";
import Map from "./components/LandingPage/Map";
import BusinessRegister from "./components/AuthPages/Business/Register";
import ProfessionalRegister from "./components/AuthPages/Professional/Register";
import EngagementLog from "./components/Dashboard/EngagementLog";
import GroupSettings from "./components/Dashboard/PrivateGroup/GroupSettings";
import { AIModel } from "./components/LandingPage/mainPage/home-page-component/select-api-modal";
import PrivacyPolicy from "./components/LandingPage/mainPage/privacy-policy";

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
          <Route path="/home-page" element={<HomePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Route>

        <Route path="/" element={<HomeLayout2 />}>
          <Route path="/testing" element={<CommentsSection />} />
          <Route path="/testing2" element={<StepsSection />} />
          <Route
            path="/product-subscription"
            element={<ProductSubscription />}
          />
          <Route path="/ai-model" element={<AIModel />} />
          <Route path="/generate-download" element={<GenerateDownload />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:blogcontent" element={<BlogContent />} />
          <Route path="/make-payment" element={<MakePayment />} /> {/* done */}
          <Route path="/payment-mode" element={<PaymentMode />} />
          {/* done */}
          <Route path="/upload" element={<Upload />} />
          <Route path="/general-risk" element={<GeneralRisk />} />
          <Route path="/risk-profile" element={<RiskProfile />} />
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
