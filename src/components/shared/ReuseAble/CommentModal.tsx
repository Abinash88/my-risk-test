import CommentsSection from "@/components/Dashboard/ManageRIsk/CommentModal/comments";
import StepsSection from "@/components/Dashboard/ManageRIsk/CommentModal/steps";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CustomModal } from "./resuse-modal";

const CommentModal = () => {
  return (
    <div>
      <CustomModal
        name="View All Comments"
        btnComponent={
          <button className="mt-2 text-[rgba(0,0,0,0.4)] font-[600]">
            View All Comments
          </button>
        }
      >
        <div className="bg-[#000080] mt-1 flex items-center text-center justify-center absolute rounded-full h-4 w-4 p-4 text-white right-2 top-1 cursor-pointer">
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
      </CustomModal>
    </div>
  );
};

export default CommentModal;
