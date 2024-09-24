import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeLayout from "./components/shared/HomeLayout";
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
import UserNewsRoom from "./components/Dashboard/NewsRoom";
import UserNewsRoomContent from "./components/Dashboard/NewsRoom/BlogContent";

import MakePayment from "./components/LandingPage/Payment/MakePayment";
import PaymentMode from "./components/LandingPage/Payment";
import GeneralRisk from "./components/LandingPage/GeneralRisk";
import RiskProfile from "./components/LandingPage/RiskProfile";
import HomePage, {
  AIModel,
  GenerateDownload,
} from "./components/LandingPage/mainPage/HomePage";
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
import DownloadedRisk from "./components/LandingPage/GeneralRisk/GeneralRiskPages/DownloadedRisk";
import AdminDashboardLayout from "./components/shared/AdminDashboardLayout/AdminDashboardLayout";
import IndexAdminDashboard from "./components/AdminDashboard";
import VerificationRequest from "./components/AdminDashboard/Verification/index";
import AdminUserComponent from "./components/AdminDashboard/User/index";
import UserDetail from "./components/AdminDashboard/User/UserDetail/UserDetail";
import LandingPageContentSettings from "./components/AdminDashboard/ContentSetting/LandingPage";
import EditSection from "./components/AdminDashboard/ContentSetting/LandingPage/Links/Edit";
import MenuContentSettings from "./components/AdminDashboard/ContentSetting/Menus";
import FooterContentSettings from "./components/AdminDashboard/ContentSetting/Footer";
import DuplicatePage from "./components/AdminDashboard/ContentSetting/Footer/Active/DuplicatePage";
import AIProviders from "./components/AdminDashboard/AIProviders";
import Standings from "./components/AdminDashboard/TAndOStanding";
import Groups from "./components/AdminDashboard/Groups";
import Communications from "./components/AdminDashboard/Communications";
import Locations from "./components/AdminDashboard/Locations";
import Reports from "./components/AdminDashboard/Reports";
import AdminUsers from "./components/AdminDashboard/AdminUsers";
import SiteSettings from "./components/AdminDashboard/SiteSettings";
import ViewPaymentProcessor from "./components/AdminDashboard/SiteSettings/PaymentProcessors/ViewPaymentProcessor";
import Finance from "./components/AdminDashboard/Finance";
import AdminHelpCenter from "./components/AdminDashboard/HelpCenter";
import AdminNewsRoom from "./components/AdminDashboard/NewsRoom";
import CreateNews from "./components/AdminDashboard/NewsRoom/CreateNews";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/risk-downloaded" element={<DownloadedRisk />} />

        {/* <Route path="/" element={<HomeLayout />}>
          <Route index={true} element={<LandingPage />} />
          <Route path="/service" element={<OurService />} />
          <Route path="/premium" element={<OurPremium />} />
          <Route path="/our-work" element={<OurWorks />} />
          <Route path="/testing" element={<CommentsSection />} />
          <Route path="/testing2" element={<StepsSection />} />
          <Route
            path="/product-subscription"
            element={<ProductSubscription />}
          />
          <Route path="/risk-management" element={<RiskManagement />} />
          <Route path="/integrated-service" element={<IntegratedService />} />
          <Route path="/home-page" element={<HomePage />} />
          <Route path="/ai-model" element={<AIModel />} />
          <Route path="/generate-download" element={<GenerateDownload />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:blogcontent" element={<BlogContent />} />
          <Route path="/make-payment" element={<PaymentMode />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/payment-mode" element={<MakePayment />} />
          <Route path="/general-risk" element={<GeneralRisk />} />
          <Route path="/risk-profile" element={<RiskProfile />} />
          <Route path="/map" element={<Map />} />
        </Route> */}
        <Route path="/auth" element={<AuthLayout />}>
          <Route index={true} element={<Auth />} />
          <Route path="login" element={<Login />} />
          <Route path="forgot-password" element={<PasswordResetPage />} />
        </Route>
        <Route path="/dashboard" element={<LoggedLayout />}>
          <Route path="account-profile" element={<AccountProfile />} />
          <Route path="manage-risk" element={<ManageRisk />} />
          <Route path="subscription" element={<Subscription />} />
          <Route path="subscription/change-plan" element={<ChangePlan />} />
          <Route path="private-group" element={<PrivateGroup />} />
          <Route path="ai-risk" element={<AiRisk />} />
          <Route path="notification" element={<Notification />} />
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

          {/* <Route path="news-room" element={<UserNewsRoom />} />
          <Route path="news-room/:blogcontent" element={<UserNewsRoomContent />} /> */}
        </Route>
        <Route path="/" element={<AdminDashboardLayout />}>
          {/* <Route path="/admin/dashboard/" element={<AdminDashboardLayout />}> */}
          <Route path="" element={<IndexAdminDashboard />} />
          <Route
            path="/admin/dashboard/verification-request"
            element={<VerificationRequest />}
          />
          <Route
            path="/admin/dashboard/user"
            element={<AdminUserComponent />}
          />
          <Route path="/admin/dashboard/user/:id" element={<UserDetail />} />

          <Route
            path="/admin/dashboard/content-setting/landing-page"
            element={<LandingPageContentSettings />}
          />
          <Route
            path="/admin/dashboard/content-setting/landing-page/image-edit/:id"
            element={<EditSection />}
          />

          <Route
            path="/admin/dashboard/content-setting/menu"
            element={<MenuContentSettings />}
          />
          <Route
            path="/admin/dashboard/content-setting/footer"
            element={<FooterContentSettings />}
          />
          <Route
            path="/admin/dashboard/content-setting/footer/duplicate"
            element={<DuplicatePage />}
          />
          <Route
            path="/admin/dashboard/ai-providers"
            element={<AIProviders />}
          />
          <Route path="/admin/dashboard/standings" element={<Standings />} />
          <Route path="/admin/dashboard/groups" element={<Groups />} />
          <Route
            path="/admin/dashboard/communications"
            element={<Communications />}
          />
          <Route path="/admin/dashboard/locations" element={<Locations />} />
          <Route path="/admin/dashboard/reports" element={<Reports />} />
          <Route path="/admin/dashboard/admin-users" element={<AdminUsers />} />
          <Route
            path="/admin/dashboard/site-settings"
            element={<SiteSettings />}
          />
          <Route
            path="/admin/dashboard/site-settings/view"
            element={<ViewPaymentProcessor />}
          />
          <Route
            path="/admin/dashboard/finance"
            element={<Finance />}
          />

        <Route
            path="/admin/dashboard/help-center"
            element={<AdminHelpCenter />}
          />
          <Route
            path="/admin/dashboard/news-room"
            element={<AdminNewsRoom />}
          />
          <Route
            path="/admin/dashboard/news-room/create"
            element={<CreateNews />}
          />
          {/* </Route> */}
        </Route>

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default App;
