import { useState } from "react";
import { Link } from "react-router-dom";
import AddTeamModal from "./addTeamModal";

const EditTeam = () => {
	const [openModal, setOpenModal] = useState(false);

	const handleClose = () => {
		setOpenModal(false);
	};
	return (
		<div>
			<h4 className="font-[600] text-[20px] mb-5">General Settings</h4>
			<div className=" bg-white rounded-md px-9 py-9 h-auto overflow-y-auto scrollBar">
				<h3 className="font-[600] text-[22px]">Group #827282 Team Members</h3>
				<div className="flex flex-col gap-6">
					<div className="flex items-center justify-between flex-wrap gap-2 mt-5">
						<div className="flex items-center gap-3">
							<img
								src="/images/profile-image.jpeg"
								alt="profile-image"
								className="rounded-full aspect-square object-cover h-[40px] w-[40px] md:h-[53px] md:w-[53px]"
							/>
							<h4 className="font-[500] text-[20px]">
								Ashley Wells{" "}
								<span className="text-[#1D98F0] text-[13px]">Full Access</span>
							</h4>
						</div>
						<div className="flex gap-3 items-center flex-wrap">
							<button className="bg-[#218A3E] text-white py-3 px-4">
								Switch to Basic
							</button>
							<button className="bg-[#950B24] text-white py-3 px-4">
								Remove
							</button>
						</div>
					</div>
					<div className="flex items-center justify-between flex-wrap gap-2 mt-5">
						<div className="flex items-center gap-3">
							<img
								src="/images/profile-image.jpeg"
								alt="profile-image"
								className="rounded-full aspect-square object-cover h-[40px] w-[40px] md:h-[53px] md:w-[53px]"
							/>
							<h4 className="font-[500] text-[20px]">
								Ashley Wells{" "}
								<span className="text-[#218A3E] text-[13px]">Basic Access</span>
							</h4>
						</div>
						<div className="flex gap-3 items-center flex-wrap">
							<button className="bg-[#1D98F0] text-white py-3 px-5">
								Switch to Full
							</button>
							<button className="bg-[#950B24] text-white py-3 px-4">
								Remove
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className="flex items-center justify-end gap-3 mt-3">
				<Link
					to="/dashboard/general-setting"
					className="bg-[#6666B3] text-white py-3 px-8 rounded-lg"
				>
					Go Back
				</Link>
				<button
					className="bg-[#6666B3] text-white py-3 px-4 rounded-lg"
					onClick={() => setOpenModal(true)}
				>
					Add Team Member
				</button>
			</div>
			<AddTeamModal open={openModal} close={handleClose} />
		</div>
	);
};

export default EditTeam;
