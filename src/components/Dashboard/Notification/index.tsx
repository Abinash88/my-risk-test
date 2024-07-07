import { Link } from "react-router-dom";
import NewNotification from "./NewNotification";

const Notification = () => {
	return (
		<div>
			<div className="flex items-center justify-between">
				<h3 className="font-[600] text-[25px] mb-5">Notification</h3>
				<div className="flex items-center gap-4">
					<Link
						to={"/dashboard/notification/notification-setting"}
						className="text-[16px] bg-[#6666B3] text-white rounded-lg py-3 px-6"
					>
						Go to Settings
					</Link>
					<select
						name="days"
						id="days"
						className="p-3 border-2 border-[#000080] rounded-lg bg-transparent outline-none"
					>
						<option value="most-recent">Most Recent</option>
						<option value="last-recent">Last Recent</option>
						<option value="Least-recent">Least Month</option>
					</select>
				</div>
			</div>
			<NewNotification />
		</div>
	);
};

export default Notification;
