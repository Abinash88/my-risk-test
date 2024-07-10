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
import MakePayment from "./components/LandingPage/Payment/MakePayment";
import PaymentMode from "./components/LandingPage/Payment";

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<HomeLayout />}>
					<Route index={true} element={<LandingPage />} />
					<Route path="/blog" element={<Blog />} />
					<Route path="/make-payment" element={<PaymentMode />} />
					<Route path="/payment-mode" element={<MakePayment />} />
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
				</Route>
				<Route path="*" element={<ErrorPage />} />
			</Routes>
		</Router>
	);
};

export default App;
