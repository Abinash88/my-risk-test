import { cn } from "@/lib/utils";
import { X } from "lucide-react";

export type PopupMessageType = {
  onCancel: () => void;
  message: string;
  popup: boolean;
};

const PopUpMessage = ({ onCancel, popup, message }: PopupMessageType) => {
  return (
    <div
      className={cn(
        `max-w-[400px] bg-gradient-to-r transition-all scale-90 m-3 from-[#4FB102] to-[#068B03] z-50 fixed space-y-2 w-full p-3 `,
        popup ? "top-0 right-0" : "opacity-0 hidden"
      )}
    >
      <div className="flex justify-between gap-4">
        <h3 className="text-white md:text-base text-sm">Success!</h3>
        <X onClick={onCancel} className="size-5 cursor-pointer text-white " />
      </div>
      <p className="text-white md:text-sm text-xs">
        {message ? ` Successfully ${message}` : "successfully Completed!"}
      </p>
    </div>
  );
};

export default PopUpMessage;
