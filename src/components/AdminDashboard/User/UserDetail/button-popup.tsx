import { GetContext } from "@/components/context";
import { Button } from "@/components/shared/ReuseAble/button";
import { cn } from "@/lib/utils";
import { Warning } from "@phosphor-icons/react";
import { Modal } from "antd";
import { BadgeCheck, type LucideIcon } from "lucide-react";
import { useState } from "react";

type ButtonPopupType = {
  name: string;
  icon?: LucideIcon;
  title?: string;
  description?: string;
  type?: "warn" | "success";
  variant?:
    | "default"
    | "link"
    | "outline"
    | "destructive"
    | "secondary"
    | "ghost"
    | null
    | undefined;
  className?: string;
  action?: string;
  onOk?: () => void;
};

export default function PopupButton({
  name,
  icon,
  title,
  description,
  variant = "default",
  type = "warn",
  className,
  action,
  onOk,
}: ButtonPopupType) {
  const [open, setOpen] = useState(false);
  const { setPopup } = GetContext();

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setOpen(false);
    if (onOk) onOk();
    setPopup({ message: title || "", popup: true });
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const Icon = icon;

  return (
    <div className="flex gap-6">
      <Button
        variant={variant}
        onClick={showModal}
        className={cn("flex gap-3", className)}
      >
        {Icon && <Icon className="size-5" />}
        <span>{name}</span>
      </Button>

      <Modal
        title={
          <div className="flex w-full border-b pb-2 items-center">
            {type === "warn" ? (
              <Warning className="mr-3 text-[#FF4949] bg-[#FFE5E5] w-7 h-7 p-1 rounded-full" />
            ) : (
              <BadgeCheck className="mr-3 text-white  bg-[#3838f0]  p-1 size-11 rounded-full" />
            )}
            <p>{title}</p>
          </div>
        }
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <div className="flex gap-2 justify-end">
            <Button onClick={handleCancel}>Cancel</Button>
            <Button
              variant={"destructive"}
              className="text-white"
              onClick={handleOk}
            >
              {action || "Reject"}
            </Button>
          </div>,
        ]}
      >
        <p className="py-3">{description}</p>
      </Modal>
    </div>
  );
}
