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
			<h3 className="font-[600] text-[28px] mb-5">Edit Personal Information</h3>
			<div className="bg-white rounded-md p-4">
				<div className="flex flex-col gap-6">
					<div>
						<label
							htmlFor="first-name"
							className="block text-[rgba(0,0,0,0.7)] font-[600] text-[18px] mb-3"
						>
							First Name
						</label>
						<div className="flex gap-4 items-center">
							<input
								type="text"
								id="first-name"
								value={firstName} // Set value to state
								onChange={handleFirstNameChange} // Handle changes
								className="w-[80%] outline-none text-black border-4 p-3 rounded-md border-[#D9D9D9FF]"
							/>
							<div className="flex gap-1 items-center cursor-pointer">
								<FontAwesomeIcon
									icon={faPenToSquare}
									className="text-[30px]  text-[#6666B3]"
								/>
								<p className="font-[600] text-[18px]">Edit</p>
							</div>
						</div>
					</div>
					<div>
						<label
							htmlFor="surname"
							className="block text-[rgba(0,0,0,0.7)] font-[600] text-[18px] mb-3"
						>
							Surname
						</label>
						<div className="flex gap-4 items-center">
							<input
								type="text"
								id="surname"
								className="w-[80%] outline-none text-black border-4 p-3 rounded-md border-[#D9D9D9FF]"
							/>
							<div className="flex gap-1 items-center cursor-pointer">
								<FontAwesomeIcon
									icon={faPenToSquare}
									className="text-[30px]  text-[#6666B3]"
								/>
								<p className="font-[600] text-[18px]">Edit</p>
							</div>
						</div>
					</div>
					<div>
						<label
							htmlFor="job-title"
							className="block text-[rgba(0,0,0,0.7)] font-[600] text-[18px] mb-3"
						>
							Job Title
						</label>
						<div className="flex gap-4 items-center">
							<input
								type="text"
								id="job-title"
								className="w-[80%] outline-none text-black border-4 p-3 rounded-md border-[#D9D9D9FF]"
							/>
							<div className="flex gap-1 items-center cursor-pointer">
								<FontAwesomeIcon
									icon={faPenToSquare}
									className="text-[30px]  text-[#6666B3]"
								/>
								<p className="font-[600] text-[18px]">Edit</p>
							</div>
						</div>
					</div>
					<div>
						<label
							htmlFor="company"
							className="block text-[rgba(0,0,0,0.7)] font-[600] text-[18px] mb-3"
						>
							Company
						</label>
						<div className="flex gap-4 items-center">
							<input
								type="text"
								id="company"
								className="w-[80%] outline-none text-black border-4 p-3 rounded-md border-[#D9D9D9FF]"
							/>
							<div className="flex gap-1 items-center cursor-pointer">
								<FontAwesomeIcon
									icon={faPenToSquare}
									className="text-[30px]  text-[#6666B3]"
								/>
								<p className="font-[600] text-[18px]">Edit</p>
							</div>
						</div>
					</div>
					<div className="flex flex-col md:flex-row items-start md:items-center gap-6">
						<h3 className="text-[17px] font-[500]">Account Type</h3>
						<select
							name="account-type"
							id="account-type"
							className="bg-[#1D98F0] text-white p-2 md:p-4 text-[17px] lg:text-[25px] outline-none"
						>
							<option value="professional">Professional Account</option>
							<option value="Personal Account">Personal Account</option>
						</select>
					</div>
				</div>
				<div className="flex items-center justify-end mt-8">
					<button
						className="bg-[#6666B3] text-white text-[17px] py-5 rounded-md w-full sm:w-[60%] md:w-[50%] lg:w-[30%]"
						onClick={handleExitEdit}
					>
						Save and Exit
					</button>
				</div>
			</div>
		</div>
	);
};

export default EditProfile;
