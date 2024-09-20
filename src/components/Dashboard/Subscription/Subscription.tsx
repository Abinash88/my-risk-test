import { Link } from "react-router-dom";
import { paymentActivities } from "../../../lib/fakedata";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faCog,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Subscription = () => {
  const [history, setHistory] = useState(false);
  return (
    <div>
      <div className="mt-1 bg-white rounded-md px-9 py-9 pt-5">
        <div className="flex flex-col gap-4 mt-2 w-full md:w-[60%]">
          <div className="flex items-center gap-2 justify-between flex-wrap md:flex-nowrap">
            <h5 className="font-[600] text-sm">Standard Premium Package</h5>
            <Link
              to={"/dashboard/subscription/change-plan"}
              className="text-[#1D98F0] text-sm font-[500]"
            >
              Change Plan
            </Link>
          </div>
          <div className="flex items-center gap-2 justify-between flex-wrap md:flex-nowrap">
            <h5 className="font-[600] text-sm">Start Date</h5>
            <p className=" text-black text-sm">2nd, March, 2022</p>
          </div>
          <div className="flex items-center gap-2 justify-between flex-wrap md:flex-nowrap">
            <h5 className="font-[600] text-sm">Next Payment Date</h5>
            <p className=" text-black text-sm">2nd, March, 2023</p>
          </div>
        </div>
        <div className="flex flex-row w-full py-4 mt-9 justify-center">
          <button
            onClick={() => setHistory(false)}
            className={
              history
                ? "font-[600] rounded-full scale-75 text-blue-900 bg-white w-[50%] text-center text-lg mb-5 border shadow-lg py-2"
                : "font-[600] rounded-full scale-75 bg-blue-900 text-white w-[50%] text-center text-lg mb-5 shadow-lg border py-2"
            }
          >
            Current Subscription
          </button>
          <button
            onClick={() => setHistory(true)}
            className={
              !history
                ? "font-[600] rounded-full scale-75 text-blue-900 bg-white w-[50%] text-center text-lg mb-5 border shadow-lg py-2"
                : "font-[600] rounded-full scale-75 bg-blue-900 text-white w-[50%] text-center text-lg mb-5 shadow-lg border py-2"
            }
          >
            Subscription History
          </button>
        </div>
        <div className="mt-6">
          <div className="overflow-x-auto w-full rounded-lg">
            <div className={`transition-all duration-800 items-start `}>
              {history ? (
                <table className="min-w-full overflow-hidden  bg-white border border-gray-200 rounded-lg overflow-x-auto">
                  <thead className="bg-purple-50 text-gray-700">
                    <tr>
                      <th className="p-3 text-left text-sm font-[600] text-black capitalize min-w-[100px] border-r border-[rgba(0,0,0,0.3)]">
                        Date Purchased
                      </th>
                      <th className="p-3 text-center text-sm capitalize min-w-[300px] max-w-[600px] border-r border-[rgba(0,0,0,0.3)]  font-[600] text-black">
                        Package
                      </th>

                      <th className="p-3 text-left text-sm font-[600] text-black capitalize min-w-[100px] border-r border-[rgba(0,0,0,0.3)]">
                        Cancellation Date
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
                          {activity.date}
                        </td>
                        <td className="p-3 text-sm border-r border-[rgba(0,0,0,0.3)]">
                          {activity.activity}
                        </td>
                        <td className="p-3 text-sm border-r border-[rgba(0,0,0,0.3)]">
                          - - - -
                        </td>
                      </tr>
                    ))}
                    {paymentActivities.map((activity, index) => (
                      <tr
                        key={index}
                        className={`border-t border-gray-200 hover:bg-gray-100 ${
                          index % 2 !== 0 && "bg-purple-50"
                        }`}
                      >
                        <td className="p-3 text-sm border-r border-[rgba(0,0,0,0.3)]">
                          {activity.date}
                        </td>
                        <td className="p-3 text-sm border-r border-[rgba(0,0,0,0.3)]">
                          {activity.activity}
                        </td>
                        <td className="p-3 text-sm border-r border-[rgba(0,0,0,0.3)]">
                          - - - -
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-x-auto">
                  <thead className="bg-gray-200 text-gray-700">
                    <tr>
                      <th className="p-3 text-left text-sm font-[600] text-black capitalize min-w-[100px] border-r border-[rgba(0,0,0,0.3)]">
                        Date Purchased
                      </th>
                      <th className="p-3 text-center text-sm capitalize min-w-[300px] max-w-[600px] border-r border-[rgba(0,0,0,0.3)]  font-[600] text-black">
                        Package
                      </th>

                      <th className="p-3 text-left text-sm font-[600] text-black capitalize min-w-[100px] border-r border-[rgba(0,0,0,0.3)]">
                        Renewal Date
                      </th>
                      <th className="p-3 text-center text-sm  font-[600] text-black capitalize min-w-[50px]">
                        Options
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {paymentActivities.map((activity, index) => (
                      <tr
                        key={index}
                        className="border-t border-gray-200 hover:bg-gray-100"
                      >
                        <td className="p-3 text-sm border-r border-[rgba(0,0,0,0.3)]">
                          {activity.date}
                        </td>
                        <td className="p-3 text-sm border-r border-[rgba(0,0,0,0.3)]">
                          {activity.activity}
                        </td>
                        <td className="p-3 text-sm border-r border-[rgba(0,0,0,0.3)]">
                          {activity.date}
                        </td>
                        <td className="p-3 text-sm flex items-center justify-center">
                          <Popover>
                            <PopoverButton>
                              <FontAwesomeIcon
                                icon={faCog}
                                className="font-light mt-1 text-xl "
                              />
                            </PopoverButton>
                            <PopoverPanel
                              anchor="top start"
                              className="flex flex-col bg-white px-4 py-2  rounded-lg border border-gray-200"
                            >
                              <p
                                // to={"/dashboard/group-settings"}
                                className="text-xs"
                              >
                                Cancel Renewal
                              </p>
                            </PopoverPanel>
                          </Popover>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
              <div className="flex flex-row gap-10 text-gray-600 items-center justify-center mt-6 cursor-pointer">
                <FontAwesomeIcon icon={faAngleLeft} />
                <FontAwesomeIcon icon={faAngleRight} />
              </div>
              <p className="text-center text-gray-600 text-xs mt-4"> Page 1 of 1 </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
