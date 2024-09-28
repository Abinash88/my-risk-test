import Modal from "@/components/shared/ReuseAble/modal";
import { GroupImages } from "@/lib/fakedata";
import React from "react";
import RemoveMemeber from "./RemoveMemeber";

interface GroupMemberProps {
	isModalOpen: boolean;
	closeModal: () => void;
}

const GroupMember: React.FC<GroupMemberProps> = ({
	isModalOpen,
	closeModal,
}) => {
	return (
		<div className="p-6">
			<Modal
				isOpen={isModalOpen}
				onClose={closeModal}
				contentClassName="bg-white rounded-lg shadow-lg w-[95%] md:[60%] lg:w-[40%] overflow-y-auto scrollBar h-auto max-h-[460px]"
			>
				<div className="">
					<div className="mb-9 bg-[#FF7C7C] rounded-t py-6 text-center flex items-center justify-center">
						<p className="font-[600] text-white text-[20px]">Remove Members</p>
					</div>
					<div className="flex flex-col p-3 gap-y-2">
						<div className="w-full bg-white shadow-custom-all-sides px-3 py-4 rounded-lg flex justify-between gap-3 items-center flex-wrap">
							<div className="flex items-center w-[70%] gap-2">
								
								<div className="relative flex items-center">
								     <div
					                className="relative w-[40px] h-[40px] rounded-full overflow-hidden border-2 border-white -ml-[0.1rem] cursor-pointer"
											
										>
											<img
												src="https://randomuser.me/api/portraits/women/2.jpg"
												alt="Profile"
												className="w-full h-full object-cover"
											/>
										</div>
										<p className="ml-5">Mashood User</p>
								</div>
							</div>
							<div className="flex gap-4">
								<RemoveMemeber/>
							</div>
						</div>
						
					</div>
					<div className="p-3 text-center">
						{" "}
						<button
							onClick={closeModal}
							className="mt-4 mx-4 py-2 bg-red-500 w-1/2 text-white rounded"
						>
							Close Modal
						</button>
					</div>
				</div>
			</Modal>
		</div>
	);
};

export default GroupMember;
