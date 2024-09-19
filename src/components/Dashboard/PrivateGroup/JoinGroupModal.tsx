import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { GroupImages } from "@/lib/fakedata";
interface GroupsProps {
  open?: boolean;
  close?: () => void;
}
const JoinGroupModal = ({ open, close }: GroupsProps) => {
  return (
    <AlertDialog open={open}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="w-20 mb-9 bg-[#1D98F0] -ml-6 -mr-6 -mt-6 rounded-lg py-6 text-center flex items-center justify-center">
            <p className="font-[600] text-white">Join Group</p>
          </AlertDialogTitle>
          <AlertDialogDescription className="text-[18px] flex-col">
            <div className="w-full bg-white shadow-custom-all-sides px-3 py-4 rounded-lg flex justify-between gap-3 items-center">
              <div className="flex items-center w-[70%] gap-2">
                <p className="font-[500] text-[18px] text-[rgba(0,0,0,0.7)]">
                  Group #627282
                </p>
                <div className="relative flex items-center">
                  {GroupImages.slice(0, 4).map((item, index) => (
                    <div
                      key={item.name}
                      className="relative w-[30px] h-[30px] rounded-full overflow-hidden border-2 border-white -ml-[0.1rem] cursor-pointer"
                      style={{
                        zIndex: 5 - index,
                        transform: `translateX(-${index * 10}px)`,
                      }}
                      title={item.name} // Tooltip for name
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                  {GroupImages.length > 4 && (
                    <div
                      className="relative w-[30px] h-[30px] rounded-full flex items-center justify-center text-white text-[14px] font-bold cursor-pointer bg-[#000080]"
                      style={{
                        zIndex: 0,
                        transform: `translateX(-${4 * 10}px)`,
                      }}
                      title={`Show ${GroupImages.length - 4} more`}
                    >
                      +{GroupImages.length - 4}
                    </div>
                  )}
                </div>
              </div>
              <div className="flex gap-4">
                <p
                  onClick={close}
                  className="text-[13px] font-[600] text-[#1D98F0] cursor-pointer"
                >
                  Register to Join
                </p>
              </div>
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default JoinGroupModal;
