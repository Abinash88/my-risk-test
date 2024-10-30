import { GetContext } from "@/components/context";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

export type PopupMessageType = {
  direction?: "top left" | "top right" | "bottom left" | "bottom right";
  onCancel: () => void;
};

const PopUpMessage = ({
  direction = "top right",
  onCancel,
}: PopupMessageType) => {
  const { popup } = GetContext();
  return (
    <div
      className={cn(
        `max-w-[400px] bg-gradient-to-r transition-all scale-90 m-3 from-[#4FB102] to-[#068B03] z-50 fixed  space-y-2 w-full p-3 `,
        direction === "top right"
          ? popup ? "top-0 right-0" : "-right-[500px]"
          : direction === "top left"
          ? "top-0 left-0"
          : direction === "bottom left"
          ? "bottom-0 left-0"
          : "bottom-0 right-0"
          
      )}
    >
      <div className="flex justify-between gap-4">
        <h3 className="text-white md:text-base text-sm">Success!</h3>
        <X onClick={onCancel} className="size-5 cursor-pointer text-white " />
      </div>
      <p className="text-white md:text-sm text-xs">
        You have successfully suspended the account.
      </p>
    </div>
  );
};

export default PopUpMessage;
