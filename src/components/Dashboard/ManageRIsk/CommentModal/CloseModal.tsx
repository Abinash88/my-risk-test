import Modal from "@/components/shared/ReuseAble/modal";
import {
  faTriangleExclamation,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface CloseModalProps {
  isModalOpen: boolean;
  closeModal: () => void;
}
const CloseModal: React.FC<CloseModalProps> = ({ isModalOpen, closeModal }) => {
  return (
    <div>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        contentClassName="bg-white rounded-lg w-[90%] md:w-[60%] lg:w-[35%]"
      >
        <div className="flex items-center justify-between gap-3 border-b border-[#D4D9E0] pt-3 pb-3">
          <div className="flex items-center gap-3 ml-3">
            <FontAwesomeIcon
              icon={faTriangleExclamation}
              className="text-[#000080] bg-[#E5E6FF] p-3 text-[20px] rounded-full object-contain"
            />
            <p className="text-[#1A1A1A] font-[600]"> Close Risk</p>
          </div>
          <FontAwesomeIcon
            icon={faXmark}
            onClick={closeModal}
            className="mr-3 text-[25px] cursor-pointer"
          />
        </div>
        <p className="py-4 px-5 text-[#666666] leading-[23.2px] text-sm">
          Are you certain you wish to close this risk? Closing this risk will
          make it invisible to the public.
        </p>
        <div className="flex items-center justify-end px-4 gap-3 py-3">
          <button
            className="px-4 py-2  scale-90 rounded-lg border border-[#D9D9D9] text-[#1A1A1A]"
            onClick={closeModal}
          >
            Cancel
          </button>
          <button className="px-4  scale-90 py-2 rounded-lg bg-[#FF4949] text-white">
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default CloseModal;
