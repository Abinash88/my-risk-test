import {
  faHackerNews,
  faReacteurope,
} from "@fortawesome/free-brands-svg-icons";
import {
  faArrowsRotate,
  faBell,
  faCheckCircle,
  faCheckDouble,
  faCircleQuestion,
  faDashboard,
  faDollar,
  faGear,
  faLocation,
  faMessage,
  faPaperPlane,
  faPenToSquare,
  faQuestion,
  faQuestionCircle,
  faSackDollar,
  faUser,
  faUserCircle,
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

export const ADMIN_DASHBOARD_SIDEBAR_LINKS = [
  {
    key: "Dashboard",
    label: "Dashboard",
    path: "/admin/dashboard/",
    icon: <FontAwesomeIcon icon={faDashboard} />,
  },
  {
    key: "Users",
    label: "Users",
    path: "/admin/dashboard/user",
    icon: <FontAwesomeIcon icon={faUser} />,
  },
  {
    key: "Verification",
    label: "Verification",
    path: "/admin/dashboard/verification-request",
    icon: <FontAwesomeIcon icon={faCheckCircle} />,
  },
  {
    key: "Content Settings",
    label: "Content Settings",
    path: "/admin/dashboard/content-setting",
    icon: <FontAwesomeIcon icon={faPaperPlane} />,
    child: [
      {
        key: "Landing Pages",
        label: "Landing Pages",
        path: "/admin/dashboard/content-setting/landing-page",
      },
      {
        key: "Menus",
        label: "Menus",
        path: "/admin/dashboard/content-setting/menu",
      },
      {
        key: "Footers",
        label: "Footers",
        path: "/admin/dashboard/content-setting/footer",
      },
    ],
  },
  {
    key: "AI Providers",
    label: "AI Providers",
    path: "/admin/dashboard/ai-providers",
    icon: <FontAwesomeIcon icon={faPaperPlane} />,
  },
  {
    key: "T&O Standings",
    label: "T&O Standings",
    path: "/admin/dashboard/to-standings",
    icon: <FontAwesomeIcon icon={faPaperPlane} />,
  },
  {
    key: "T&O Groups",
    label: "T&O Groups",
    path: "/admin/dashboard/to-groups",
    icon: <FontAwesomeIcon icon={faUserGroup} />,
  },
  {
    key: "Help Center",
    label: "Help Center",
    path: "/admin/dashboard/help-center",
    icon: <FontAwesomeIcon icon={faQuestionCircle} />,
  },
  {
    key: "Newsroom",
    label: "Newsroom",
    path: "/admin/dashboard/news-room",
    icon: <FontAwesomeIcon icon={faHackerNews} />,
  },
  {
    key: "Communications",
    label: "Communications",
    path: "/admin/dashboard/communications",
    icon: <FontAwesomeIcon icon={faMessage} />,
  },
  {
    key: "Fiinance",
    label: "Finance",
    path: "/admin/dashboard/finance",
    icon: <FontAwesomeIcon icon={faDollar} />,
  },
  {
    key: "Locations",
    label: "Locations",
    path: "/admin/dashboard/locations",
    icon: <FontAwesomeIcon icon={faLocation} />,
  },
  {
    key: "Reports",
    label: "Reports",
    path: "/admin/dashboard/reports",
    icon: <FontAwesomeIcon icon={faReacteurope} />,
  },
  {
    key: "Site Settings",
    label: "Site Settings",
    path: "/admin/dashboard/site-settings",
    icon: <FontAwesomeIcon icon={faGear} />,
  },
  {
    key: "Admin Users",
    label: "Admin Users",
    path: "/admin/dashboard/admin-users",
    icon: <FontAwesomeIcon icon={faUserCircle} />,
  },
];
