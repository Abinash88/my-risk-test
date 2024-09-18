import { CloseOutlined } from "@ant-design/icons";
import { Warning } from "@phosphor-icons/react";
import { Button, Modal, Popover } from "antd";
import React, { useState } from "react";

export default function RemoveRisk() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(2);
  };
  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const [openPopup, setOpenPopup] = useState(false);

  const hide = () => {
    setOpenPopup(false);
  };

  const handleOpenPopupChange = (newOpen: boolean) => {
    setOpenPopup(newOpen);
  };

  const handleReasonChange = (val: string) => {
    setStep(2);
  };

  return (
    <>
      <button
        className="bg-[#FF4949] text-white rounded-md p-2"
        onClick={showModal}
      >
        Remove Risk
      </button>
      <Modal
        title={
          <div className="flex items-center">
            <Warning className="mr-3 text-[#FF4949] bg-[#FFE5E5] w-7 h-7 p-1 rounded-full" />
            <p>Remove Risk</p>
          </div>
        }
        open={open}
        onOk={handleOk}
        // confirmLoading={confirmLoading}
        onCancel={handleCancel}
        // okButtonProps={{ title: "Suspend" }}
        // cancelButtonProps={{ disabled: true }}
        footer={[
          <>
            <Button onClick={handleCancel}>Cancel</Button>
            {step == 1 ? (
              <Popover
                content={
                  <div className="flex flex-col">
                    <a
                      onClick={() => handleReasonChange("Unprofessional")}
                      className="text-lg py-2"
                    >
                      Unprofessional
                    </a>
                    <a
                      onClick={() => handleReasonChange("Spam Content")}
                      className="text-lg py-2"
                    >
                      Spam Content
                    </a>
                    <a
                      onClick={() => handleReasonChange("Other")}
                      className="text-lg py-2"
                    >
                      Other
                    </a>
                  </div>
                }
                title={
                  <div className="flex items-center justify-between">
                    <p className="text-[#000080] text-lg font-semibold">
                      Select Reason
                    </p>
                    <CloseOutlined onClick={hide} />
                  </div>
                }
                trigger="click"
                placement="bottom"
                open={openPopup}
                onOpenChange={handleOpenPopupChange}
              >
                <Button
                  type="primary"
                  danger
                  className="text-white"
                  //   onClick={handleOk}
                >
                  Select Reason
                </Button>
              </Popover>
            ) : (
              <Button
                type="primary"
                danger
                className="text-white"
                onClick={handleOk}
              >
                Confirm
              </Button>
            )}
          </>,
        ]}
      >
        <p className="py-3">
          {step == 1
            ? "Are you sure you want to remove this risk?  This action can be reversed by Super Admin user only at any time."
            : "Are you sure you want to remove this risk?  This action can be reversed by Super Admin user only at any time."}
        </p>
      </Modal>
    </>
  );
}
