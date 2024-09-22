import { paymentActivities } from "@/lib/fakedata";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DeviceMobile } from "@phosphor-icons/react";
import { MouseEventHandler, useState } from "react";

interface ProfileProps {
  handleEditPage: MouseEventHandler<HTMLButtonElement>;
}

const Profile = ({ handleEditPage }: ProfileProps) => {
  const [logs, setLogs] = useState(false);
  return (
    <div>
      <div className="bg-white rounded-md p-4">
        <div className="scale-90">
          <div className="flex items-center gap-1 ml-3">
            <img
              src="/images/profile-image.jpeg"
              alt="profile-image"
              className="rounded-full aspect-square object-cover h-[40px] w-[40px] md:h-[55px] md:w-[55px]"
            />
            <h3 className="text-[rgba(0,0,0,0.6)] font-[600] ml-2 text-[24px]">
              uthermartin@gmail.com
            </h3>
          </div>
          <div className="flex flex-col gap-7 m-5">
            <div className="flex flex-col gap-3">
              <h3 className="text-[rgba(0,0,0,0.7)] font-[600] text-[15px]">
                Name
              </h3>
              <p className="text-black font-[600] text-[20px]">Uther Martin</p>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-[rgba(0,0,0,0.7)] font-[600] text-[15px]">
                Emails
              </h3>
              <p className="text-black font-[600] text-[20px]">
                uthermartin@gmail.com
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-[rgba(0,0,0,0.7)] font-[600] text-[15px]">
                Password
              </h3>
              <div className="flex flex-col md:flex-row gap-3 items-start md:items-center">
                <p className="text-black font-[600] text-[20px]">
                  *************
                </p>
                <button className="p-2 lg:ml-5 bg-[rgba(217,217,217,0.87)] font-[500] text-black">
                  Change Password
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-[rgba(0,0,0,0.7)] font-[600] text-[15px]">
                Account Type
              </h3>
              <p className="text-black font-[600] text-[20px]">
                Professional Account
              </p>
            </div>
            <div className="flex flex-col gap-5 items-start">
              <button
                className="p-2 bg-[rgba(217,217,217,0.87)] font-[500] text-black"
                onClick={handleEditPage}
              >
                Edit Personal Information
              </button>

              <button
                name=""
                id=""
                onClick={() => setLogs((x) => !x)}
                className="border-[2px]  w-72 text-start flex justify-between flex-row lg:w-96 my-2 border-[#0000805a] outline-none py-3 px-5 rounded-md"
              >
                Activity-log{" "}
                <FontAwesomeIcon
                  icon={faAngleDown}
                  className={
                    logs
                      ? "rotate-180 duration-300 ease-in-out"
                      : "-rotate-0 duration-300 ease-in-out"
                  }
                />
              </button>
              {logs && (
                <div className="overflow-auto w-full">
                  <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-x-auto">
                    <thead className="bg-gray-200 text-gray-700">
                      <tr>
                        <th className="p-3 text-left text-sm font-[600] text-black capitalize min-w-[100px] border-r border-[rgba(0,0,0,0.3)]">
                          Date Purchased
                        </th>
                        <th className="p-3 text-center text-sm capitalize min-w-[250px] max-w-[600px] border-r border-[rgba(0,0,0,0.3)]  font-[600] text-black">
                          Activity
                        </th>

                        <th className="p-3 text-center text-sm font-[600] text-black capitalize min-w-[150px] border-r border-[rgba(0,0,0,0.3)]">
                          Device
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
                            Changed private T&O Group name from "Group#626262" to "Group#333333"
                          </td>
                          <td className="p-3 text-sm border-r flex flex-row items-center justify-center gap-2 border-[rgba(0,0,0,0.3)]">
                            IPhone 15' <DeviceMobile />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
