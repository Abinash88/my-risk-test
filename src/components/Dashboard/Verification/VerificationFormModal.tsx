import Modal from "@/components/shared/ReuseAble/modal";
import { X } from "@phosphor-icons/react";
import UnderVerification from "./VerificationForm";
import { useRef, useState } from "react";
import FileUpload from "./FileUpload";

interface VerifyModalProps {
	isModalOpen: boolean;
	closeModal: () => void;
}
const VerificationFormModal: React.FC<VerifyModalProps> = ({
	isModalOpen,
	closeModal,
}) => {
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
		<div>
			<Modal
				isOpen={isModalOpen}
				onClose={closeModal}
				contentClassName="bg-white rounded-lg w-[90%] md:w-[35%] max-h-[95vh] overflow-y-auto scrollBar"
			>
				<img
					src="/images/logo.png"
					alt="logo"
					className="w-[10rem] mx-auto my-4"
				/>
				<div className="flex items-center justify-between gap-3 border-b border-[#D4D9E0] p-5 pt-3">
					<p className="font-[600] text-[24px] text-black"> Verification</p>
					<X
						size={20}
						color="#fff"
						className=" bg-[#6666B3] rounded-full h-8 w-8 p-1 "
						onClick={closeModal}
					/>
				</div>
				<div className="space-y-4 p-5 text-left">
					<h3 className="text-[13px] font-medium text-gray-900 dark:text-white">
						{" "}
						Please provide the information below to initiate your verification
						request
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
						<label className="text-[15px]">Proof of Employment</label>
						<FileUpload onFileUpload={handleFileUpload} />
						{uploadedFile && (
							<p className="text-green-600 mt-2">
								Uploaded file: {uploadedFile.name}
							</p>
						)}
					</div>
				</div>
				<button
					className="bg-[#000080] text-white py-3 px-4 rounded-lg mx-auto w-[95%] my-5"
					onClick={() => setOpenSuccess(true)}
				>
					Submit
				</button>
				<p className="text-black text-[16px] mb-3">T&C Applies</p>
			</Modal>
			<UnderVerification open={openSuccess} close={handleClose} />
		</div>
	);
};

export default VerificationFormModal;
