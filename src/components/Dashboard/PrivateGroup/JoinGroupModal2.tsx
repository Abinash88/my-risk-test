import Modal from "@/components/shared/ReuseAble/modal";
import { GroupImages } from "@/lib/fakedata";
import React from "react";

interface JoinGroupModal2Props {
	isModalOpen: boolean;
	closeModal: () => void;
}

const JoinGroupModal2: React.FC<JoinGroupModal2Props> = ({
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
					<div className="mb-9 bg-[#1D98F0] rounded-t py-6 text-center flex items-center justify-center">
						<p className="font-[600] text-white text-[20px]">Join Group</p>
					</div>
					<div className="p-3">
						{" "}
						<div className="w-full bg-white shadow-custom-all-sides px-3 py-4 rounded-lg flex justify-between gap-3 items-center flex-wrap">
							<div className="flex items-center w-[70%] gap-2">
								<p className="font-[500] text-[18px] text-[rgba(0,0,0,0.7)]">
									Group #627282
								</p>
								<div className="relative flex items-center">
									{GroupImages.slice(0, 4).map((item, index) => (
										<div
											key={item.name}
											className="relative w-[30px] h-[30px] rounded-full overflow-hidden border-2 border-white -ml-[0.1rem] cursor-pointer"
											style={{
												zIndex: 5 - index,
												transform: `translateX(-${index * 10}px)`,
											}}
											title={item.name} // Tooltip for name
										>
											<img
												src={item.image}
												alt={item.name}
												className="w-full h-full object-cover"
											/>
										</div>
									))}
									{GroupImages.length > 4 && (
										<div
											className="relative w-[30px] h-[30px] rounded-full flex items-center justify-center text-white text-[14px] font-bold cursor-pointer bg-[#000080]"
											style={{
												zIndex: 0,
												transform: `translateX(-${4 * 10}px)`,
											}}
											title={`Show ${GroupImages.length - 4} more`}
										>
											+{GroupImages.length - 4}
										</div>
									)}
								</div>
							</div>
							<div className="flex gap-4">
								<p
									onClick={close}
									className="text-[13px] font-[600] text-[#1D98F0] cursor-pointer"
								>
									Register to Join
								</p>
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

export default JoinGroupModal2;
