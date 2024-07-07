import {
	faArrowsRotate,
	faBell,
	faCheckDouble,
	faCircleQuestion,
	faGear,
	faPenToSquare,
	faSackDollar,
	faUser,
	faUserGroup,
	faWandMagicSparkles,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: "Account Profile",
		label: "Account Profile",
		path: "/dashboard/account-profile",
		icon: <FontAwesomeIcon icon={faUser} />,
	},
	{
		key: "Notification",
		label: "Notification",
		path: "/dashboard/notification",
		icon: <FontAwesomeIcon icon={faBell} />,
	},
	{
		key: "Manage Risk",
		label: "Manage Risk",
		path: "/dashboard/manage-risk",
		icon: <FontAwesomeIcon icon={faPenToSquare} />,
	},
	{
		key: "AI Risk",
		label: "AI Risk",
		path: "/dashboard/ai-risk",
		icon: <FontAwesomeIcon icon={faWandMagicSparkles} />,
	},
	{
		key: "Private T & O Groups",
		label: "Private T & O Groups",
		path: "/dashboard/private-group",
		icon: <FontAwesomeIcon icon={faUserGroup} />,
	},
	{
		key: "Subscription",
		label: "Subscription",
		path: "/dashboard/subscription",
		icon: <FontAwesomeIcon icon={faSackDollar} />,
	},
	{
		key: "Referal Page",
		label: "Referal Page",
		path: "/dashboard/referral",
		icon: <FontAwesomeIcon icon={faArrowsRotate} />,
	},
	{
		key: "General Settings",
		label: "General Settings",
		path: "/dashboard/general-setting",
		icon: <FontAwesomeIcon icon={faGear} />,
	},
	{
		key: "Help Center",
		label: "Help Center",
		path: "/dashboard/help-center",
		icon: <FontAwesomeIcon icon={faCircleQuestion} />,
	},
	{
		key: "Verification",
		label: "Verification",
		path: "/dashboard/verification",
		icon: <FontAwesomeIcon icon={faCheckDouble} />,
	},
];
