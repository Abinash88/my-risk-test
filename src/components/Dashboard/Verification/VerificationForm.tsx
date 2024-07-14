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
import { useRef } from "react";
interface verifyProps {
	open?: boolean;
	close?: () => void;
}

export function VerificationForm({ open, close }: verifyProps) {
	const nameInputRef = useRef<HTMLInputElement>(null);
	return (
		<AlertDialog open={open}>
			{/* <AlertDialogTrigger asChild>
				<Button variant="outline">Show Dialog</Button>
			</AlertDialogTrigger> */}
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle className="flex items-center justify-between">
						<p className="font-[600] text-[24px] text-black"> Verification</p>

						<AlertDialogAction className="bg-transparent hover:bg-transparent">
							<X
								size={20}
								color="#fff"
								className=" bg-[#6666B3] rounded-full h-8 w-8 p-1 "
								onClick={() => close}
							/>
						</AlertDialogAction>
					</AlertDialogTitle>
					<AlertDialogDescription>
						<div className="space-y-4 p-0">
							<h3 className="text-[13px] font-medium text-gray-900 dark:text-white">
								Please provide the information below to initiate your
								verification request
							</h3>
							<div className="flex flex-col">
								<label htmlFor="first-name" className="text-[15px]">
									First Name
								</label>
								<input
									type="text"
									id="first-name"
									name="first-name"
									ref={nameInputRef}
									className="outline-none rounded-lg border border-[#999999] focus:border-[#999999] p-2"
								/>
							</div>
							<div className="flex flex-col">
								<label htmlFor="last-name" className="text-[15px]">
									Last Name
								</label>
								<input
									type="text"
									id="last-name"
									name="last-name"
									className="outline-none rounded-lg border border-[#999999] focus:border-[#999999] p-2"
								/>
							</div>
							<div className="flex flex-col">
								<label htmlFor="job" className="text-[15px]">
									Job Title
								</label>
								<input
									type="text"
									id="job"
									name="job"
									className="outline-none rounded-lg border border-[#999999] focus:border-[#999999] p-2"
								/>
							</div>
							<div className="flex flex-col">
								<label htmlFor="company" className="text-[15px]">
									Employer/Company Name
								</label>
								<input
									type="text"
									id="company"
									name="company"
									className="outline-none rounded-lg border border-[#999999] focus:border-[#999999] p-2"
								/>
							</div>
							<div className="flex flex-col">
								<label htmlFor="proof" className="text-[15px]">
									Proof of Employment
								</label>
								<input
									type="text"
									id="proof"
									name="proof"
									className="outline-none rounded-lg border border-[#999999] focus:border-[#999999] p-2"
								/>
							</div>
						</div>
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<button className="bg-[#000080] text-white py-3 px-4 rounded-lg w-full">
						Submit
					</button>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
}
