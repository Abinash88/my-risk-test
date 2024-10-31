import CommentsSection from "@/components/Dashboard/ManageRIsk/CommentModal/comments";
import StepsSection from "@/components/Dashboard/ManageRIsk/CommentModal/steps";
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
        <div className="flex gap-4 bg-white  flex-col-reverse  lg:flex-row">
          <div className="w-full flex-1 ">
            <StepsSection />
          </div>
          <div className="w-full flex-1">
            <CommentsSection />
          </div>
        </div>
      </CustomModal>
    </div>
  );
};

export default CommentModal;
