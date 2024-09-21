import { useState } from "react";

const NotifySetting = () => {
  const [isChecked, setIsChecked] = useState({
    receivePromotions: true,
    allowLikes: false,
    personalized: true,
  });

  const handleToggle = (
    key: "receivePromotions" | "allowLikes" | "personalized"
  ) => {
    setIsChecked((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  return (
    <>
      <div className="flex flex-col gap-7 mt-10">
        <div>
          <div className="flex flex-col gap-5">
            <div className="flex gap-2 items-center">
              <input
                type="radio"
                className="p-8 w-6 h-6  specifyColor"
                id="receive"
                checked={isChecked.receivePromotions}
                onClick={() => handleToggle("receivePromotions")}
                readOnly
              />
              <label htmlFor="receive" className="text-[18px]">
                Receive Promotional Emails,Newsletter updates, Special Offers
              </label>
            </div>
            <div className="flex gap-2 items-center">
              <input
                type="radio"
                className="p-8 w-6 h-6 specifyColor"
                id="allowLikes"
                checked={isChecked.allowLikes}
                onClick={() => handleToggle("allowLikes")}
                readOnly
              />
              <label htmlFor="allowLikes" className="text-[18px]">
                Allow all Marketing Notifications
              </label>
            </div>
            <div className="flex gap-2 items-center">
              <input
                type="radio"
                className="p-8 w-6 h-6 specifyColor"
                id="personalized"
                checked={isChecked.personalized}
                onClick={() => handleToggle("personalized")}
                readOnly
              />
              <label htmlFor="personalized" className="text-[18px]">
                Allow all Marketing Notifications
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotifySetting;
