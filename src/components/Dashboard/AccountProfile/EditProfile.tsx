import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MouseEventHandler, useState } from "react";
interface EditProfileProps {
  handleExitEdit: MouseEventHandler<HTMLButtonElement>;
}

const EditProfile = ({ handleExitEdit }: EditProfileProps) => {
  const [firstName, setFirstName] = useState(""); // Initial state for first name

  const handleFirstNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFirstName(event.target.value);
  };

  return (
    <div>
      <h3 className="font-[600] text-[26px] mb-5">Edit Personal Information</h3>
      <div className="bg-white rounded-md p-4">
        <div className="scale-90">
          <div className="flex flex-col ml-4 mt-2 gap-6">
            <div>
              <label
                htmlFor="first-name"
                className="block text-[rgba(0,0,0,0.7)] font-[600] text-sm mb-3"
              >
                First Name
              </label>
              <div className="flex gap-1 items-center">
                <input
                  type="text"
                  id="first-name"
                  value={firstName} // Set value to state
                  onChange={handleFirstNameChange} // Handle changes
                  className="w-[70%] outline-none text-black border-2 p-2 text-md rounded-md border-[#D9D9D9FF]"
                />
                <div className="flex gap-3 items-center cursor-pointer scale-75">
                  <FontAwesomeIcon
                    icon={faPenToSquare}
                    className="text-[25px]  text-[#6666B3]"
                  />
                  <p className="font-[400]  text-md">Edit</p>
                </div>
              </div>
            </div>

            <div>
              <label
                htmlFor="surname"
                className="block text-[rgba(0,0,0,0.7)] font-[600] text-sm mb-3"
              >
                Surname
              </label>
              <div className="flex gap-1 items-center">
                <input
                  type="text"
                  id="surname"
                  className="w-[70%] outline-none text-black border-2 p-2 text-md rounded-md border-[#D9D9D9FF]"
                />
                <div className="flex gap-3 items-center cursor-pointer scale-75">
                  <FontAwesomeIcon
                    icon={faPenToSquare}
                    className="text-[25px]  text-[#6666B3]"
                  />
                  <p className="font-[400] text-md">Edit</p>
                </div>
              </div>
            </div>
            <div>
              <label
                htmlFor="surname"
                className="block text-[rgba(0,0,0,0.7)] font-[600] text-sm mb-3"
              >
                Job Title
              </label>
              <div className="flex gap-1 items-center">
                <input
                  type="text"
                  id="surname"
                  className="w-[70%] outline-none text-black border-2 p-2 text-md rounded-md border-[#D9D9D9FF]"
                />
                <div className="flex gap-3 items-center cursor-pointer scale-75">
                  <FontAwesomeIcon
                    icon={faPenToSquare}
                    className="text-[25px]  text-[#6666B3]"
                  />
                  <p className="font-[400] text-md">Edit</p>
                </div>
              </div>
            </div>
            <div>
              <label
                htmlFor="surname"
                className="block text-[rgba(0,0,0,0.7)] font-[600] text-sm mb-3"
              >
                Company
              </label>
              <div className="flex gap-1 items-center">
                <input
                  type="text"
                  id="surname"
                  className="w-[70%] outline-none text-black border-2 p-2 text-md rounded-md border-[#D9D9D9FF]"
                />
                <div className="flex gap-3 items-center cursor-pointer scale-75">
                  <FontAwesomeIcon
                    icon={faPenToSquare}
                    className="text-[25px]  text-[#6666B3]"
                  />
                  <p className="font-[400] text-md">Edit</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-8 mt-4">
              <h3 className="text-sm font-semibold">Account Type</h3>
              <select
                name="account-type"
                id="account-type"
                className=" bg-[#1D98F0] text-white p-2 text-md px-6 drop-shadow-md  outline-none"
              >
                <option className="bg-white text-black" value="professional">
                  Professional Account
                </option>
                <option
                  className="bg-white text-black"
                  value="Personal Account"
                >
                  Personal Account
                </option>
              </select>
            </div>
          </div>
          <div className="flex items-center justify-end mt-8">
            <button
              className="bg-[#6666B3] scale-90 text-white text-[17px] py-3 mr-16 mb-5 rounded-md w-full sm:w-[60%] md:w-[50%] lg:w-[30%]"
              onClick={handleExitEdit}
            >
              Save and Exit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
