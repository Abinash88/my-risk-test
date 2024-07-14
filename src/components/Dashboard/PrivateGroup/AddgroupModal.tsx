import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { X } from "@phosphor-icons/react";

interface teamProps {
	open?: boolean;
	close?: () => void;
}

const AddGroupModal = ({ open, close }: teamProps) => {
	return (
		<AlertDialog open={open}>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle className="flex items-center justify-between border-b border-b-[rgba(0,0,0,0.59)] pb-2 mb-9">
						<p className="font-[600] text-[#000080]">Create Private Group</p>

						<AlertDialogAction className="bg-transparent hover:bg-transparent">
							<X
								size={20}
								color="#fff"
								className=" bg-[#6666B3] rounded-full h-8 w-8 p-1 "
								onClick={close}
							/>
						</AlertDialogAction>
					</AlertDialogTitle>
					<AlertDialogDescription className="text-[18px] flex-col">
						<>
							<label htmlFor="name">Name Group</label>
							<input
								id="name"
								type="text"
								className="p-3 border border-[rgba(0,0,0,0.59)] block w-full rounded-lg mt-3 outline-none"
							/>
						</>
						<>
							<label htmlFor="invite" className="mt-4 block">
								Invite Participant via Email
							</label>
							<input
								id="invite"
								type="email"
								className="p-3 border border-[rgba(0,0,0,0.59)] block w-full rounded-lg mt-3 outline-none"
							/>
						</>
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogAction
						onClick={close}
						className="py-3 px-4 w-[40%] bg-[#000080] text-white rounded-lg hover:bg-[#000080]"
					>
						Invite Participant
					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
};

export default AddGroupModal;
