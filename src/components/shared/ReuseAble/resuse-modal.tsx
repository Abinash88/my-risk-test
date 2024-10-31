import { cn } from "@/lib/utils";
import { Modal as MyModel } from "antd";
import { useState } from "react";

interface ModalProps {
  children: React.ReactNode;
  name?: string;
  className?: string;
  btnComponent?: React.ReactElement;
  containerClass?: string;
  title?: string;
}

export const CustomModal: React.FC<ModalProps> = ({
  children,
  name,
  title,
  className,
  containerClass,
  btnComponent,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="w-full ">
      <button className="focus:outline-none" onClick={showModal}>
        {btnComponent || (
          <span className={cn("", className)}>{name || "Open"}</span>
        )}
      </button>
      <MyModel
        title={title}
        onOk={handleOk}
        open={isModalOpen}
        onCancel={handleCancel}
        footer={<div className="hidden"></div>}
        className={cn(`!w-full !max-w-[1000px] mx-auto`, containerClass)}
      >
        {children}
      </MyModel>
    </div>
  );
};
