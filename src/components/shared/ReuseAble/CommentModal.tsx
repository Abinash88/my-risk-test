import StepsSection from "@/components/Dashboard/ManageRIsk/CommentModal/steps";
import CommentsSection from "@/components/Dashboard/ManageRIsk/CommentModal/comments";
import Modal from "@/components/shared/ReuseAble/modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
interface CommentModalProps {
  isModalOpen: boolean;
  closeModal: () => void;
}
const CommentModal = () => {
    const [openModal, setOpenModal] = useState(false);

    const handleClose = () => {
    setOpenModal(false);
    };
  return (
    <div>
              <button
                className="mt-2 text-[rgba(0,0,0,0.4)] font-[600]"
                onClick={() => setOpenModal(true)}
              >
                View All Comments
              </button>
      <Modal
        isOpen={openModal}
        onClose={handleClose}
        contentClassName="scale-[80%] bg-white rounded-lg shadow-lg w-[95%] md:[90%] lg:w-[80%] overflow-y-auto scrollBar h-auto max-h-[90vh]"
      >
        <div
          className="bg-[#000080] mt-1 flex items-center text-center justify-center absolute rounded-full h-4 w-4 p-4 text-white right-2 top-1 cursor-pointer"
          onClick={handleClose}
        >
          <FontAwesomeIcon
            icon={faXmark}
            className="text-[25px] text-center cursor-pointer"
          />
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
