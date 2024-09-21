import ChangePayment from "./ChangePayment";
// import ManageTeam from "./ManageTeam";
// import NotifySetting from "./notifySetting";

const GeneralSetting = () => {
  return (
    <div>
      <div className="flex item-center justify-between gap-4 flex-wrap">
        <h4 className="font-[600] text-[20px]">General Settings</h4>
        <button className="bg-[#950B24] text-white py-3 px-4 rounded-lg">
          Delete account
        </button>
      </div>
      <div className="mt-5 bg-white rounded-md px-4 md:px-9 py-9 h-auto overflow-y-auto scrollBar">
        <ChangePayment />
        {/* <ManageTeam /> */}
        {/* <NotifySetting /> */}
      </div>
    </div>
  );
};

export default GeneralSetting;
