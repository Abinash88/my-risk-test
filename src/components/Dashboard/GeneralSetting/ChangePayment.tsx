import { Hammer } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";
import { paymentActivities } from "../../../lib/fakedata";

const ChangePayment = () => {
  const navigate = useNavigate();
  return (
    <div className="flex gap-4 flex-col md:gap-2">
      <h4 className="font-[600] text-lg">Select Payment Method</h4>
      <div className="flex flex-col gap-2 items-start justify-center mt-4">
        <p className=" text-md">
          Your default payment method is highlighted below, you can also change
          your payment method
        </p>
      </div>
      <div className="flex flex-row items-center gap-4">
        <input
          type="radio"
          className="p-8 w-6 h-6 specifyColor mt-4"
          id="allowLikes"
          defaultChecked
          readOnly
        />
        <div className="border border-[#000080] p-1 md:p-4 flex items-center rounded-xl justify-between gap-3 w-[90vw] md:w-[50%] mt-6">
          <div className="flex items-center justify-center gap-3 flex-nowrap">
            <img
              src="/images/master-card.png"
              className="w-10"
              alt="master-card"
            />
            <h4 className="font-[600] text-sm">
              Master Card
              <span className="font-[400] text-sm ml-3">Ends with 7389</span>
            </h4>
          </div>
        </div>
        <div>
          <button className="border mt-4 scale-75 border-purple-400 w-24 px-3 text-purple-400 shadow-lg  p-2 rounded-full">
            <div className="flex font-bold justify-between ">
              <div>Default </div>
            </div>
          </button>
        </div>
      </div>

      <div className="flex items-start justify-start">
        <p className="text-[#6666B3] py-3 ml-2 text-lg font-bold rounded-lg mt-6 text-center">
          +&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Add Payment Method
        </p>
      </div>
      <div className="flex items-center my-6">
        <button
          className="text-white p-3 bg-[#6666B3] rounded-lg flex flex-nowrap"
          onClick={() => navigate("./edit-team")}
        >
          Manage Team Members <Hammer className="mx-4" />
        </button>
      </div>
      <div className="w-full items-center flex justify-center mt-10">
        <table className="w-[full] overflow-hidden  bg-white border border-gray-200 rounded-lg overflow-x-auto">
          <thead className="bg-purple-50 text-gray-700">
            <tr>
              <th className="p-3 text-left text-sm font-[600] text-black capitalize md:min-w-[200px] border-r border-[rgba(0,0,0,0.3)]">
                Date
              </th>
              <th className="p-3 text-center text-sm capitalize md:min-w-[26rem] max-w-[600px] border-r border-[rgba(0,0,0,0.3)]  font-[600] text-black">
                Activity
              </th>
              <th className="p-3 text-left text-sm capitalize md:min-w-[200px] max-w-[600px] border-r border-[rgba(0,0,0,0.3)]  font-[600] text-black">
                Last 4 Digit
              </th>
            </tr>
          </thead>
          <tbody>
            {paymentActivities.map((activity, index) => (
              <tr
                key={index}
                className={`border-t border-gray-200 hover:bg-gray-100 ${
                  index % 2 !== 0 && "bg-purple-50"
                }`}
              >
                <td className="p-3 text-sm border-r border-[rgba(0,0,0,0.3)]">
                  29/10/2024
                </td>
                <td className="p-3 text-sm border-r border-[rgba(0,0,0,0.3)]">
                  Payment method updated to credit card ending in XXXX
                </td>
                <td className="p-3 text-sm border-r border-[rgba(0,0,0,0.3)]">
                  ***7389
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ChangePayment;
