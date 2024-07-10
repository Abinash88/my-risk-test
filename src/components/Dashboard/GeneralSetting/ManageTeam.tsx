import { useState } from "react";
import { GroupImages } from "../../../lib/fakedata";
import { Link } from "react-router-dom";

const ManageTeam = () => {
	const [showAll, setShowAll] = useState(false);

	const handleToggleView = () => {
		setShowAll((prevShowAll) => !prevShowAll);
	};
	return (
		<div className="mt-5">
			<div className="mb-5">
				<h4 className="font-[600] text-[20px]">Manage Team Member</h4>
				<p className="font-[400] text-[19px]">Owned Group</p>
			</div>

			<Link
				to="edit-team"
				className="w-full bg-white shadow-custom-all-sides px-3 py-4 rounded-lg flex justify-between gap-3 items-center"
			>
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
			</Link>
		</div>
	);
};

export default ManageTeam;
