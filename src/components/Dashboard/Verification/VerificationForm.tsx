import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { X } from "@phosphor-icons/react";
import { AlertDialogCancel } from "@radix-ui/react-alert-dialog";
import { useRef, useState } from "react";
import FileUpload from "./FileUpload"; // Adjust the import path as needed

interface verifyProps {
	open?: boolean;
	close?: () => void;
}

export function VerificationForm({ open, close }: verifyProps) {
	const nameInputRef = useRef<HTMLInputElement>(null);
	const [openSuccess, setOpenSuccess] = useState(false);
	const [uploadedFile, setUploadedFile] = useState<File | null>(null);

	const handleClose = () => {
		setOpenSuccess(false);
	};

	const handleFileUpload = (file: File) => {
		setUploadedFile(file);
	};

	return (
		<>
			<AlertDialog open={open}>
				<AlertDialogContent>
					<AlertDialogHeader>
						<AlertDialogTitle className="flex items-center justify-between">
							<p className="font-[600] text-[24px] text-black"> Verification</p>
							<AlertDialogAction className="bg-transparent hover:bg-transparent">
								<X
									size={20}
									color="#fff"
									className=" bg-[#6666B3] rounded-full h-8 w-8 p-1 "
									onClick={close}
								/>
							</AlertDialogAction>
						</AlertDialogTitle>
						<AlertDialogDescription>
							<div className="space-y-4 p-0" id="shakur">
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
									<FileUpload onFileUpload={handleFileUpload} />
									{uploadedFile && (
										<p className="text-green-600 mt-2">
											Uploaded file: {uploadedFile.name}
										</p>
									)}
								</div>
							</div>
						</AlertDialogDescription>
					</AlertDialogHeader>
					<AlertDialogFooter>
						<button
							className="bg-[#000080] text-white py-3 px-4 rounded-lg w-full"
							onClick={() => setOpenSuccess(true)}
						>
							Submit
						</button>
					</AlertDialogFooter>
				</AlertDialogContent>
				<UnderVerification open={openSuccess} close={handleClose} />
			</AlertDialog>
		</>
	);
}

interface SuccessProps {
	open?: boolean;
	close?: () => void;
}

const UnderVerification = ({ open, close }: SuccessProps) => {
	return (
		<AlertDialog open={open}>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle className="w-[60%] mr-auto ml-auto text-center font-[600] mb-5">
						<FontAwesomeIcon
							icon={faCircleCheck}
							className="text-[100px] text-[#6666B3]"
						/>
					</AlertDialogTitle>
					<AlertDialogDescription className="text-center">
						<span className="font-[600] text-[22px] text-black">
							Verification Request Submitted
						</span>
						<span className="block mt-5 text-[rgba(0,0,0,0.7)] text-[18px] leading-6">
							Your verification request has been submitted and is currently
							under review.
						</span>
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel
						onClick={close}
						className="bg-[#000080] p-3 w-full text-center text-white rounded-lg"
					>
						Okay
					</AlertDialogCancel>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
};

export default UnderVerification;
