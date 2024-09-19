import Modal from "@/components/shared/ReuseAble/modal";
import { GroupImages } from "@/lib/fakedata";
import React from "react";

interface JoinGroupModal2Props {
  isModalOpen: boolean;
  closeModal: () => void;
}

const JoinGroupModal2: React.FC<JoinGroupModal2Props> = ({
  isModalOpen,
  closeModal,
}) => {
  return (
    <div className="p-6">
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        contentClassName="bg-white scrollBar scale-[80%] rounded-lg shadow-lg w-[95%] md:[60%] lg:w-[40%] overflow-y-auto h-auto max-h-[460px]"
      >
        <div className="">
          <div className="mb-9 bg-red-400 rounded-t py-6 text-center flex items-center justify-center">
            <p className="font-[600] text-white text-[20px]">Remove Members</p>
          </div>
          <div className="p-2">
            {" "}
            {GroupImages.slice(0, 4).map((item, index) => (
              <div className="w-full mb-2 bg-white shadow-custom-all-sides px-3 py-2 rounded-lg flex justify-between gap-3 items-center flex-wrap">
                <div className="flex items-center w-[70%] gap-2">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-10 rounded-full object-cover"
                  />
                  <p className="font-[500] text-md text-[rgba(0,0,0,0.7)]">
                    {item.name}
                  </p>
                  <div className="relative flex items-center">
                    <div
                      key={item.name}
                      className="relative w-[30px] h-[30px] rounded-full overflow-hidden border-2 border-white -ml-[0.1rem] cursor-pointer"
                      style={{
                        zIndex: 5 - index,
                        transform: `translateX(-${index * 10}px)`,
                      }}
                      title={item.name} // Tooltip for name
                    ></div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <p
                    onClick={close}
                    className="text-[13px] font-[600] text-red-400 cursor-pointer"
                  >
                    Remove
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="p-3 text-center">
            {" "}
            <button
              onClick={closeModal}
              className="mt-4 mx-4 mb-2 py-2 bg-red-500 w-1/2 text-white rounded"
            >
              Cancel
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default JoinGroupModal2;
