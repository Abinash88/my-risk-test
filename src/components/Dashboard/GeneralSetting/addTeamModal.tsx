import Logo from "@/assets/images/logo.png";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { cn } from "@/lib/utils";
import { X } from "@phosphor-icons/react";
import { useState } from "react";

interface teamProps {
  open?: boolean;
  close?: () => void;
}

const AddTeamModal = ({ open, close }: teamProps) => {
  const [access, setAccess] = useState("");
  return (
    <AlertDialog open={open}>
      <AlertDialogContent className="scale-75 max-h-[1400px]  h-full overflow-y-auto">
        <AlertDialogHeader>
          <AlertDialogTitle className="flex items-center justify-center pb-2 mb-2">
            <img alt="" src={Logo} className="w-full max-w-48 mx-auto" />
          </AlertDialogTitle>
          <AlertDialogTitle className="flex items-center justify-between border-b border-b-[rgba(0,0,0,0.59)] pb-2 mb-9">
            <p className="font-f[600] text-[#000080]">Create Private Group</p>

            <AlertDialogAction className="bg-transparent hover:bg-transparent">
              <X
                size={20}
                color="#fff"
                className=" bg-[#6666B3] rounded-full h-8 w-8 p-1 "
                onClick={close}
              />
            </AlertDialogAction>
          </AlertDialogTitle>
          <div className="h-8" />
          <AlertDialogDescription className="text-md mt-8 flex-col">
            <>
              <label htmlFor="Surname">Surname</label>
              <input
                id="Surname"
                placeholder="Enter here"
                type="text"
                className="p-3 border border-[#9A1F4F] text-md  block w-full rounded-lg mt-3 outline-none"
              />
            </>

            <>
              <label htmlFor="firstName" className="mt-4 block">
                First Name
              </label>
              <input
                id="firstName"
                type="email"
                placeholder="Add user email"
                className="p-3 border border-[#9A1F4F]  block w-full rounded-lg mt-3 outline-none"
              />
            </>
            <>
              <label htmlFor="Email" className="mt-4 block">
                Email
              </label>
              <input
                id="Email"
                type="email"
                placeholder="Add user email"
                className="p-3 border border-[#9A1F4F]  block w-full rounded-lg mt-3 outline-none"
              />
            </>
            <>
              <label htmlFor="giving access" className="mt-4 block">
                Give Access
              </label>
              <div className="flex max-h-52 justify-between gap-5  w-full mt-2 ">
                <label
                  className={cn(
                    `flex space-y-3 flex-col p-4  flex-1 border rounded-lg`,
                    access === "basis" && "border-[#34C759]"
                  )}
                  htmlFor="basic_access"
                >
                  <div className="flex gap-3 justify-start  items-center">
                    <input
                      id="basic_access"
                      type="radio"
                      value={"basis"}
                      checked={access === "basis"}
                      onChange={(e) => {
                        setAccess(e.target.value);
                      }}
                      name="access"
                      placeholder="Add user email"
                      className=" size-6 border border-[#9A1F4F]   rounded-lg  outline-none"
                    />
                    <p className="text-gray-700 font-medium">Basic Access</p>
                  </div>
                  <div className="flex items-center justify-start gap-2">
                    <input className="size-4" type="checkbox" />
                    <label
                      className="md:text-sm text-xs text-gray-600"
                      htmlFor="aiGenerated"
                    >
                      AI Generated risk profile
                    </label>
                  </div>
                  <div className="flex items-center justify-start gap-2">
                    <input className="size-4" type="checkbox" />
                    <label
                      className="md:text-sm  text-xs text-gray-600"
                      htmlFor="aiGenerated"
                    >
                      Upload to T&O Standings (Main or Private){" "}
                    </label>
                  </div>
                  <div className="flex items-center justify-start gap-2">
                    <input className="size-4" type="checkbox" />
                    <label
                      className="md:text-sm text-xs text-gray-600"
                      htmlFor="aiGenerated"
                    >
                      Hold Private T&O groups{" "}
                    </label>
                  </div>
                </label>
                <label
                  className={cn(
                    `flex p-4 flex-1 border rounded-lg   space-y-3 flex-col `,
                    access === "full" && "border-[#34C759]"
                  )}
                  htmlFor="full_access"
                >
                  <div className="flex gap-3 justify-start  items-center">
                    <input
                      id="full_access"
                      type="radio"
                      value={"full"}
                      name="access"
                      onChange={(e) => {
                        setAccess(e.target.value);
                      }}
                      checked={access === "full"}
                      placeholder="Add user email"
                      className=" size-6 border border-[#9A1F4F]   rounded-lg  outline-none"
                    />
                    <p className="text-gray-700 font-medium">Full Access</p>
                  </div>
                  <p className="text-gray-medium md:text-sm text-xs font-medium">
                    Invited participant will have full subscription benefits.
                  </p>
                </label>
              </div>
            </>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="space-x-2">
          <AlertDialogAction className="py-3 px-4 w-[40%] bg-[#000080] text-white rounded-lg hover:bg-[#000080]">
            Invite Participant
          </AlertDialogAction>
        </AlertDialogFooter>
        <p className="text-[#000080] font-medium text-center mt-2">
          T&C Applies
        </p>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AddTeamModal;
