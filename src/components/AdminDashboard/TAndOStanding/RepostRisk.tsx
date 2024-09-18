import { CloseOutlined } from "@ant-design/icons";
import { Warning } from "@phosphor-icons/react";
import { Button, Modal, Popover } from "antd";
import { Recycle } from "lucide-react";
import React, { useState } from "react";

export default function RepostRisk() {
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
        className="bg-[#3838F0] text-white rounded-md py-2 px-4"
        onClick={showModal}
      >
        Repost
      </button>
      <Modal
        title={
          <div className="flex items-center">
            <Recycle className="mr-3 text-[#E5E6FF] bg-[#545454] w-7 h-7 p-1 rounded-full" />
            <p>Repost Risk</p>
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
                  <div className="flex flex-col items-center">
                    <a
                      onClick={() => handleReasonChange("72 hrs")}
                      className="text-lg py-2"
                    >
                      72 hrs
                    </a>
                    <a
                      onClick={() => handleReasonChange("7 days")}
                      className="text-lg py-2"
                    >
                      7 Days
                    </a>
                    <a
                      onClick={() => handleReasonChange("4 weeks")}
                      className="text-lg py-2"
                    >
                      4 Weeks
                    </a>
                    <a
                      onClick={() => handleReasonChange("8 weeks")}
                      className="text-lg py-2"
                    >
                      8 Weeks
                    </a>
                  </div>
                }
                title={
                  <div className="flex items-center justify-between">
                    <p className="text-[#000080] text-lg font-semibold">
                      Re-Post Duration
                    </p>
                    <CloseOutlined onClick={hide} />
                  </div>
                }
                trigger="click"
                placement="bottom"
                open={openPopup}
                onOpenChange={handleOpenPopupChange}
              >
                <button
                  
                  className="text-white bg-[#000080] px-4 py-1 ml-2 rounded-md"
                  //   onClick={handleOk}
                >
                  Select Duration
                </button>
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
            ? "Are you sure you want to repost this risk? Risk will be posted as Admin."
            : "Are you sure you want to repost this risk?  This action can be reversed by Super Admin user only at any time."}
        </p>
      </Modal>
    </>
  );
}
