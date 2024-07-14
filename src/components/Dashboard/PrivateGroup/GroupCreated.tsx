import { useState } from "react";
import { GroupImages } from "../../../lib/fakedata";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import AddGroupModal from "./AddgroupModal";

const GroupCreated = () => {
	const [showAll, setShowAll] = useState(false);
	const [openModal, setOpenModal] = useState(false);

	const handleClose = () => {
		setOpenModal(false);
	};

	const handleToggleView = () => {
		setShowAll((prevShowAll) => !prevShowAll);
	};

	return (
		<>
			<div className=" flex flex-col gap-7 mt-5 bg-white rounded-md px-9 py-9 h-[70vh] overflow-y-auto scrollBar">
				<div className="w-full bg-white shadow-custom-all-sides px-3 py-4 rounded-lg flex justify-between gap-3 items-center">
					<div className="flex gap-2 items-center w-[70%] flex-wrap">
						<p className="font-[500] text-[23px] text-[rgba(0,0,0,0.7)]">
							Group #827282
						</p>
						<div className="relative flex items-center">
							{GroupImages.slice(0, showAll ? GroupImages.length : 5).map(
								(item, index) => (
									<div
										key={item.name}
										className={`relative w-[40px] h-[40px] rounded-full overflow-hidden border-2 border-white transition-transform ${
											showAll ? "mr-1" : "-ml-[0.1rem]"
										} cursor-pointer`}
										style={{
											zIndex: showAll ? GroupImages.length - index : 5 - index,
											transform: showAll
												? "translateX(0)"
												: `translateX(-${index * 15}px)`,
										}}
										title={item.name} // Tooltip for name
									>
										<img
											src={item.image}
											alt={item.name}
											className="w-full h-full object-cover"
										/>
									</div>
								)
							)}
							<div
								className={`relative w-[40px] h-[40px] rounded-full flex items-center justify-center text-white text-[14px] font-bold cursor-pointer ${
									showAll ? "bg-red-400" : "bg-[#000080] ml-[9px]"
								}`}
								onClick={handleToggleView}
								style={{
									zIndex: 0,
									transform: showAll
										? "translateX(0)"
										: `translateX(-${5 * 15}px)`,
								}}
								title={showAll ? "C" : `Show ${GroupImages.length - 5} more`}
							>
								{showAll ? "C" : `+${GroupImages.length - 5}`}
							</div>
						</div>
					</div>
					<div className="flex gap-4">
						<div className="text-white bg-[rgba(160,11,11,0.8)] shadow-custom-all-sides py-2 px-3 flex flex-col gap-1 items-center justify-center rounded-md cursor-pointer">
							<FontAwesomeIcon icon={faTrashCan} className="font-light " />
							<p className="text-[11px] font-[600]">Delete</p>
						</div>
					</div>
				</div>
			</div>
			<div className="flex items-center justify-end mt-9">
				<button
					className="bg-[#6666B3] text-white px-9 py-3 rounded-lg text-[18px]"
					onClick={() => setOpenModal(true)}
				>
					Add New Group
				</button>
			</div>
			<AddGroupModal open={openModal} close={handleClose} />
		</>
	);
};

export default GroupCreated;
