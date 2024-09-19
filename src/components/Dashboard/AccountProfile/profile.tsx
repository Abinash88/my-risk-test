import { MouseEventHandler } from "react";

interface ProfileProps {
  handleEditPage: MouseEventHandler<HTMLButtonElement>;
}

const Profile = ({ handleEditPage }: ProfileProps) => {
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

              <select
                name=""
                id=""
                className="border-[2px] w-72 lg:w-96 my-2 border-[#0000805a] outline-none py-3 px-5 rounded-md"
              >
                <option value="Activity-log">Activity-log</option>
                <option value="Activity-log2">Activity-log2</option>
                <option value="Activity-log3">Activity-log3</option>
                <option value="Activity-log4">Activity-log4</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
