import { useState } from "react";

type NotificationGroups = "system" | "marketing" | "finance"|"engagement"|"email";
type NotificationSettingKeys =
  | "receivePromotions"
  | "allowLikes"
  | "ads"
  | "market"
  | "text"
  | "finance"
  |"engagement"
  |"email";

interface NotificationSettingState {
  receivePromotions: boolean;
  allowLikes: boolean;
  ads: boolean;
  market: boolean;
  text: boolean;
  finance: boolean;
  engagement:boolean;
  email:boolean;
}
interface OpenSectionsState {
  system: boolean;
  marketing: boolean;
  finance: boolean;
  engagement:boolean;
  email:boolean;
}

const NotificationSetting = () => {
  const [isChecked, setIsChecked] = useState<NotificationSettingState>({
    receivePromotions: true,
    allowLikes: true,
    ads: true,
    market: true,
    text: true,
    finance: true,
    engagement:true,
    email:true,
  });
  const [openSections, setOpenSections] = useState<OpenSectionsState>({
    system: true,
    marketing: false,
    finance: false,
    engagement:false,
    email:false
  });
  const toggleSection = (section: NotificationGroups) => {
    setOpenSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  const handleToggle = (key: NotificationSettingKeys) => {
    setIsChecked((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  return (
    <>
      <h3 className="font-[600] text-[25px] mb-5">Notification</h3>
      <div className="mt-5 bg-white rounded-md px-4 md:px-9 py-6 h-auto">
        <h3 className="font-[600] text-md mb-5">Notification Settings</h3>
        <div className="flex flex-col gap-7">
          <div className="bg-[#F9F9F9] rounded-lg p-4 w-11/12">
            <h4
              className="font-[600] text-md mb-5 cursor-pointer"
              onClick={() => toggleSection("system")}
            >
              <div className="flex items-center justify-between">
                <h3> System</h3>
                <p className="text-[15px]">{openSections.system ? "▼" : "▶"}</p>
              </div>
            </h4>

            {openSections.system && (
              <div className="flex flex-col gap-4">
                <div className="flex gap-2">
                  <input
                    type="radio"
                    className="p-8 w-6 h-6  specifyColor"
                    id="receive"
                    checked={isChecked.receivePromotions}
                    onClick={() => handleToggle("receivePromotions")}
                    readOnly
                  />
                  <label htmlFor="receive" className="text-sm">
                    Receive Promotional Emails, Newsletter updates, Special
                    Offers
                  </label>
                </div>
                <div className="flex gap-2">
                  <input
                    type="radio"
                    className="p-8 w-6 h-6 specifyColor"
                    id="allowLikes"
                    checked={isChecked.allowLikes}
                    onClick={() => handleToggle("allowLikes")}
                    readOnly
                  />
                  <label htmlFor="allowLikes" className="text-sm">
                    Allow Likes and Dislike Notification
                  </label>
                </div>
                <div className="flex gap-2">
                  <input
                    type="radio"
                    className="p-8 w-6 h-6 specifyColor"
                    id="ads"
                    checked={isChecked.ads}
                    onClick={() => handleToggle("ads")}
                    readOnly
                  />
                  <label htmlFor="ads" className="text-sm">
                    Allow Personalized ads
                  </label>
                </div>
              </div>
            )}
          </div>
          <div className="bg-[#F9F9F9] rounded-lg p-4 w-11/12">
            <h4
              className="font-[600] text-md mb-5 cursor-pointer"
              onClick={() => toggleSection("marketing")}
            >
              <div className="flex items-center justify-between">
                <h3>Marketing</h3>
                <p className="text-[15px]">
                  {openSections.marketing ? "▼" : "▶"}
                </p>
              </div>
            </h4>
            {openSections.marketing && (
              <div className="flex flex-col gap-5">
                <div className="flex gap-2">
                  <input
                    type="radio"
                    className="p-8 w-6 h-6 specifyColor"
                    id="market"
                    checked={isChecked.market}
                    onClick={() => handleToggle("market")}
                    readOnly
                  />
                  <label htmlFor="market" className="text-sm">
                    Allow all Marketing Notifications
                  </label>
                </div>
                <div className="flex gap-2">
                  <input
                    type="radio"
                    className="p-8 w-6 h-6 specifyColor"
                    id="text"
                    checked={isChecked.text}
                    onClick={() => handleToggle("market")}
                    readOnly
                  />
                  <label htmlFor="text" className="text-sm">
                    Allow Text Message Notification
                  </label>
                </div>
              </div>
            )}
          </div>
          <div className="bg-[#F9F9F9] rounded-lg p-4 w-11/12">
            <h4
              className="font-[600] text-md mb-5 cursor-pointer"
              onClick={() => toggleSection("finance")}
            >
              <div className="flex items-center justify-between">
                <h3>Finance</h3>
                <p className="text-[15px]">
                  {openSections.finance ? "▼" : "▶"}
                </p>
              </div>
            </h4>
            {openSections.finance && (
              <div className="flex flex-col gap-5">
                <div className="flex gap-2">
                  <input
                    type="radio"
                    className="p-8 w-6 h-6 specifyColor"
                    id="finance"
                    checked={isChecked.finance}
                    onClick={() => handleToggle("finance")}
                    readOnly
                  />
                  <label htmlFor="finance" className="text-sm">
                    Allow all Finance Notifications
                  </label>
                </div>
              </div>
            )}
          </div>
          <div className="bg-[#F9F9F9] rounded-lg p-4 w-11/12">
            <h4
              className="font-[600] text-md mb-5 cursor-pointer"
              onClick={() => toggleSection("engagement")}
            >
              <div className="flex items-center justify-between">
                <h3>Engagement</h3>
                <p className="text-[15px]">
                  {openSections.engagement ? "▼" : "▶"}
                </p>
              </div>
            </h4>
            {openSections.engagement && (
              <div className="flex flex-col gap-5">
                <div className="flex gap-2">
                  <input
                    type="radio"
                    className="p-8 w-6 h-6 specifyColor"
                    id="engagement"
                    checked={isChecked.engagement}
                    onClick={() => handleToggle("engagement")}
                    readOnly
                  />
                  <label htmlFor="engagement" className="text-sm">
                    Allow all Engagement Notifications
                  </label>
                </div>
              </div>
            )}
          </div>
          <div className="bg-[#F9F9F9] rounded-lg p-4 w-11/12">
            <h4
              className="font-[600] text-md mb-5 cursor-pointer"
              onClick={() => toggleSection("email")}
            >
              <div className="flex items-center justify-between">
                <h3>Email</h3>
                <p className="text-[15px]">
                  {openSections.email ? "▼" : "▶"}
                </p>
              </div>
            </h4>
            {openSections.email && (
              <div className="flex flex-col gap-5">
                <div className="flex gap-2">
                  <input
                    type="radio"
                    className="p-8 w-6 h-6 specifyColor"
                    id="finance"
                    checked={isChecked.email}
                    onClick={() => handleToggle("email")}
                    readOnly
                  />
                  <label htmlFor="email" className="text-sm">
                    Allow all email Notifications
                  </label>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="flex scale-90 items-center justify-end mt-9">
        <button className="bg-[#6666B3] text-white px-9 py-3 rounded-lg text-[18px]">
          Save and Exit
        </button>
      </div>
    </>
  );
};

export default NotificationSetting;
