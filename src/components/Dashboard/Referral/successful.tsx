import { paymentActivities } from "../../../lib/fakedata";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faCog,
} from "@fortawesome/free-solid-svg-icons";

const SuccessfulRefer = () => {
  return (
    <div>
      <div className="mt-1 bg-white rounded-md md:px-9 py-9 md:py-0 pt-5">
        <div className="mt-6">
          <div className="overflow-x-auto w-full rounded-lg">
            <div className={`transition-all duration-800 items-start `}>
              <table className="w-[full] overflow-hidden  bg-white border border-gray-200 rounded-lg overflow-x-auto">
                <thead className="bg-purple-50 text-gray-700">
                  <tr>
                    <th className="p-3 text-left text-sm font-[600] text-black capitalize md:min-w-[200px] border-r border-[rgba(0,0,0,0.3)]">
                      No
                    </th>
                    <th className="p-3 text-left text-sm font-[600] text-black capitalize md:min-w-[200px] border-r border-[rgba(0,0,0,0.3)]">
                      Surname
                    </th>
                    <th className="p-3 text-left text-sm capitalize md:min-w-[200px] max-w-[600px] border-r border-[rgba(0,0,0,0.3)]  font-[600] text-black">
                      First name
                    </th>
                    <th className="p-3 text-left text-sm capitalize md:min-w-[200px] max-w-[600px] border-r border-[rgba(0,0,0,0.3)]  font-[600] text-black">
                      Email
                    </th>
                    <th className="p-3 text-left text-sm font-[600] text-black capitalize md:min-w-[110px] border-r border-[rgba(0,0,0,0.3)]">
                      Referral Date
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
                        {index + 1}
                      </td>
                      <td className="p-3 text-sm border-r border-[rgba(0,0,0,0.3)]">
                        John
                      </td>
                      <td className="p-3 text-sm border-r border-[rgba(0,0,0,0.3)]">
                        Doe
                      </td>
                      <td className="p-3 text-sm border-r border-[rgba(0,0,0,0.3)]">
                        Email
                      </td>
                      <td className="p-3 text-sm border-r border-[rgba(0,0,0,0.3)]">
                        29/10/2024
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="flex flex-row gap-10 text-gray-600 items-center justify-center mt-6 cursor-pointer">
                <FontAwesomeIcon icon={faAngleLeft} />
                <FontAwesomeIcon icon={faAngleRight} />
              </div>
              <p className="text-center text-gray-600 text-xs mt-4">
                {" "}
                Page 1 of 1{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessfulRefer;
