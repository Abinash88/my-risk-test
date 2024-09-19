import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { allrisk } from "../../../lib/fakedata";
import { TruncatedText } from "../../shared/ReuseAble";
import {
  faClockRotateLeft,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import CommentModal from "./CommentModal/CommentModal";
import { useState } from "react";
import DeleteModal from "./CommentModal/DeleteModal";
import RestoreModal from "./CommentModal/restoreModal";

const DeletedRisk = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [openCloseModal, setOpenCloseModal] = useState(false);

  const handleClose = () => {
    setOpenModal(false);
  };
  const handleCloseDelete = () => {
    setOpenDelete(false);
  };
  const handleCloseModal = () => {
    setOpenCloseModal(false);
  };
  return (
    <>
      <div className="flex flex-col gap-8">
        {allrisk.map((risk, i) => (
          <div
            key={i + 3}
            className="flex items-start justify-between gap-3 flex-wrap md:flex-nowrap"
          >
            <div className="w-full md:w-[70%]">
              <div className="flex items-start gap-3 flex-wrap">
                <p className="text-[#000080] font-[600]">ID: R01</p>
                <TruncatedText
                  text={risk.text}
                  maxLength={50}
                  title={risk.title}
                />
              </div>
              <button
                className="mt-2 text-[rgba(0,0,0,0.4)] font-[600]"
                onClick={() => setOpenModal(true)}
              >
                View All Comments
              </button>
            </div>
            <div className="flex scale-90 gap-4">
              <div
                className="text-white bg-[#4B4BFF] shadow-custom-all-sides py-2 px-3 flex flex-col gap-1 items-center justify-center rounded-md cursor-pointer"
                onClick={() => setOpenCloseModal(true)}
              >
                <FontAwesomeIcon
                  icon={faClockRotateLeft}
                  className="font-light "
                />
                <p className="text-[11px] font-[600]">Restore</p>
              </div>
              <div
                className="text-white bg-[rgba(160,11,11,0.8)] shadow-custom-all-sides py-2 px-3 flex flex-col gap-1 items-center justify-center rounded-md cursor-pointer"
                onClick={() => setOpenDelete(true)}
              >
                <FontAwesomeIcon icon={faTrashCan} className="font-light " />
                <p className="text-[11px] font-[600]">Delete</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {<CommentModal isModalOpen={openModal} closeModal={handleClose} />}
      {<DeleteModal isModalOpen={openDelete} closeModal={handleCloseDelete} />}
      {
        <RestoreModal
          isModalOpen={openCloseModal}
          closeModal={handleCloseModal}
        />
      }
    </>
  );
};

export default DeletedRisk;
