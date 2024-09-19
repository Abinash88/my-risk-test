import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { X } from "@phosphor-icons/react";
import Logo from "../../../assets/images/logo-sm.jpg";

interface teamProps {
  open?: boolean;
  close?: () => void;
}

const InviteMembers = ({ open, close }: teamProps) => {
  return (
    <AlertDialog open={open}>
      <AlertDialogContent className="scale-[80%]">
        <AlertDialogHeader>
          <AlertDialogTitle className="flex  items-center justify-between pb-2 mb-2">
            <div className="w-2" />
            <img alt="logosm" src={Logo} className="w-20 ml-12" />
            <AlertDialogAction className="bg-transparent hover:bg-transparent ">
              <X
                size={20}
                color="#fff"
                className=" bg-[#6666B3] rounded-full h-8 w-8 p-1 "
                onClick={close}
              />
            </AlertDialogAction>
          </AlertDialogTitle>
          <p className="font-[600] pb-6 border-b border-b-[rgba(0,0,0,0.59)] text-[#000080] text-center">
            Invite Participants
          </p>
          <AlertDialogDescription className="text-md mt-2 flex-col">
            <div className="flex flex-row ml-[-20px] justify-evenly mb-8">
              <div>
                <label htmlFor="invite" className="mt-4 block">
                  First Name
                </label>
                <input
                  id="invite"
                  type="email"
                  className="p-3 border border-[rgba(0,0,0,0.59)] block w-52 rounded-lg mt-3 outline-none"
                />
              </div>
              <div>
                <label htmlFor="invite" className="mt-4 block">
                  Last name
                </label>
                <input
                  id="invite"
                  type="email"
                  className="p-3 border border-[rgba(0,0,0,0.59)] block w-52 rounded-lg mt-3 outline-none"
                />
              </div>
            </div>
            <>
              <label htmlFor="name">Email</label>
              <input
                id="name"
                type="text"
                className="p-3 border border-[rgba(0,0,0,0.59)] block w-full rounded-lg mt-3 outline-none"
              />
            </>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="flex justify-center mt-2">
          <AlertDialogAction
            onClick={close}
            className="py-3 mt-8 px-4 w-[40%] bg-[#000080] text-white rounded-lg hover:bg-[#000080]"
          >
            Invite Participant
          </AlertDialogAction>
        </AlertDialogFooter>
        <p
          className="font-[600] text-[#000080] text-center"
          style={{ textShadow: "2px 2px lightblue" }}
        >
          T&C Applies
        </p>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default InviteMembers;
