import StepsSection from "@/components/Dashboard/ManageRIsk/CommentModal/steps";
import CommentsSection from "@/components/Dashboard/ManageRIsk/CommentModal/comments";
import Modal from "@/components/shared/ReuseAble/modal";
interface CommentModalProps {
	isModalOpen: boolean;
	closeModal: () => void;
}
const CommentModal: React.FC<CommentModalProps> = ({
	isModalOpen,
	closeModal,
}) => {
	return (
		<div>
			<Modal
				isOpen={isModalOpen}
				onClose={closeModal}
				contentClassName="bg-white rounded-lg shadow-lg w-[95%] md:[90%] lg:w-[80%] overflow-y-auto scrollBar h-auto max-h-[90vh]"
			>
				<div
					className="bg-[#000080] flex items-center justify-center absolute rounded-full h-4 w-4 p-4 text-white right-2 top-1 cursor-pointer"
					onClick={closeModal}
				>
					X
				</div>
				<div className="flex gap-4 flex-col-reverse lg:flex-row">
					<div className="w-full lg:w-[45%] ">
						<StepsSection />
					</div>
					<div className="w-full lg:w-[55%]">
						<CommentsSection />
					</div>
				</div>
			</Modal>
		</div>
	);
};

export default CommentModal;
