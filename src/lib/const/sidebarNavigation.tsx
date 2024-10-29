import {
  faArrowsRotate,
  faBell,
  faCheckDouble,
  faCircleQuestion,
  faGear,
  faHistory,
  faPenToSquare,
  faSackDollar,
  faUser,
  faUserGroup,
  faWandMagicSparkles,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Question } from "@phosphor-icons/react";
import {
  Bell,
  CircleDollarSignIcon,
  FolderEdit,
  History,
  RefreshCcw,
  Settings,
  UserCircle,
  Verified,
} from "lucide-react";

export const DASHBOARD_SIDEBAR_LINKS = [
  {
    key: "Account Profile",
    label: "Account Profile",
    path: "/dashboard/account-profile",
    icon: <FontAwesomeIcon icon={faUser} />,
    description: (
      <div className="w-[250px] flex flex-col gap-y-4">
        <p>
          Your risk management journey starts here! Manage your profile with
          precision.
        </p>
        <UserCircle className="h-[70px] w-[100px]" />
      </div>
    ),
  },
  {
    key: "Notification",
    label: "Notification",
    path: "/dashboard/notification",
    icon: <FontAwesomeIcon icon={faBell} />,
    description: (
      <div className="w-[250px] flex gap-x-4">
        <Bell className="h-[100px] w-[100px]" />
        <p>
          Get notified about all recent activities you have performed on your
          profile. Notifications are also customizable to your preference.
        </p>
      </div>
    ),
  },
  {
    key: "Manage Risk",
    label: "Manage Risk",
    path: "/dashboard/manage-risk",
    icon: <FontAwesomeIcon icon={faPenToSquare} />,
    description: (
      <div className="w-[250px] flex gap-x-4">
        <FolderEdit className="h-[70px] w-[100px]" />
        <p>
          Here you can manage all risks, opened risks, closed risks and delete
          them.
        </p>
      </div>
    ),
  },
  {
    key: "AI Risk",
    label: "AI Risk",
    path: "/dashboard/ai-risk",
    icon: <FontAwesomeIcon icon={faWandMagicSparkles} />,
    description: (
      <div className="w-[250px] flex items-center gap-x-4">
        <FontAwesomeIcon
          icon={faWandMagicSparkles}
          className="h-[30px] w-[40px]"
        />
        {/* <Sparkle className="h-[70px] w-[100px]"/> */}
        <p>
          This section shows you all AI generated risks on your profile and an
          option to download them. Threats and Opportunities can also will be
          uploaded here.
        </p>
      </div>
    ),
  },
  {
    key: "Private T & O Groups",
    label: "Private T & O Groups",
    path: "/dashboard/private-group",
    icon: <FontAwesomeIcon icon={faUserGroup} />,
    description: (
      <div className="w-[250px] flex gap-x-4">
        <p>
          View risks with titles and descriptions, check ratings, and upvote the
          ones you care about.
        </p>
      </div>
    ),
  },
  {
    key: "Finance",
    label: "Finance",
    path: "/dashboard/subscription",
    icon: <FontAwesomeIcon icon={faSackDollar} />,
    description: (
      <div className="w-[350px] flex items-center gap-x-4">
        <CircleDollarSignIcon className="h-[100px] w-[100px]" />
        <p>
          Purchase and management of subscriptions or packages made easy! Here
          you can see all details of purchase history and buy new packages or
          subscriptions.
        </p>
      </div>
    ),
  },
  {
    key: "Referal Page",
    label: "Referal Page",
    path: "/dashboard/referral",
    icon: <FontAwesomeIcon icon={faArrowsRotate} />,
    description: (
      <div className="w-[350px] flex items-center gap-x-4">
        <RefreshCcw className="h-[100px] w-[100px]" />
        <p>
          Grow your network, grow your rewards! Refer and earn with every
          invite.
        </p>
      </div>
    ),
  },
  {
    key: "General Settings",
    label: "General Settings",
    path: "/dashboard/general-setting",
    icon: <FontAwesomeIcon icon={faGear} />,
    description: (
      <div className="w-[350px] flex items-center gap-x-4">
        <Settings className="h-[100px] w-[100px]" />
        <p>
          Grow your network, grow your rewards! Refer and earn with every
          invite.
        </p>
      </div>
    ),
  },
  {
    key: "Engagement Log",
    label: "Engagement Log",
    path: "/dashboard/engagement-log",
    icon: <FontAwesomeIcon icon={faHistory} />,
    description: (
      <div className="w-[350px] flex items-center gap-x-4">
        <History className="h-[100px] w-[100px]" />
        <p>
          See details for all activities and actions performed on your profile
          such as: likes, dislikes, comments e.t.c
        </p>
      </div>
    ),
  },
  {
    key: "Help Center",
    label: "Help Center",
    path: "/dashboard/help-center",
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    description: (
      <div className="w-[350px] flex items-center gap-x-4">
        <Question className="h-[100px] w-[100px]" />
        <p>
          Got stuck anywhere? The help centre is here to help! Track solutions
          and popular topics that solves your problem.
        </p>
      </div>
    ),
  },
  {
    key: "Verification",
    label: "Verification",
    path: "/dashboard/verification",
    icon: <FontAwesomeIcon icon={faCheckDouble} />,
    description: (
      <div className="w-[350px] flex items-center gap-x-4">
        <Verified className="h-[100px] w-[100px]" />
        <p>
          Upload necessary files required for your verification so you can
          become a verified with us.
        </p>
      </div>
    ),
  },
];
