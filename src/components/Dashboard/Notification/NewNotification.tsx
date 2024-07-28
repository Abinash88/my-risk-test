import { notify } from "../../../lib/fakedata";

const NewNotification = () => {
	return (
		<>
			<div className="mt-5 bg-white rounded-md px-9 py-9 h-[70vh] overflow-y-auto scrollBar">
				<h3 className="font-[600] text-[25px] mb-5">New</h3>
				<div className="flex flex-col gap-9">
					{notify.map((notice, i) => (
						<div
							className="flex items-start md:items-center gap-3 justify-between"
							key={i + notice.image}
						>
							<div className="flex gap-2 items-center w-[70%]">
								<img
									src={notice.image}
									alt="profile-image"
									className="rounded-full aspect-square object-cover h-[40px] w-[40px] md:h-[53px] md:w-[53px]"
								/>
								<p className="font-[500] text-black text-[17px]">
									{notice.name}
								</p>
							</div>
							<p className="">{notice.time}</p>
						</div>
					))}
				</div>
			</div>
			<div className="flex items-center justify-end mt-9">
				<button className="bg-[#6666B3] text-white px-9 py-3 rounded-lg text-[18px]">
					Clear Notification
				</button>
			</div>
		</>
	);
};

export default NewNotification;
