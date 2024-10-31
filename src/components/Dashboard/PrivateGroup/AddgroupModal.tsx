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
import { useState } from "react";
import Logo from "../../../assets/images/logo.png";
import FileUpload, { type FileTypes } from "../Verification/FileUpload";

interface teamProps {
  open?: boolean;
  close?: () => void;
}

const AddGroupModal = ({ open, close }: teamProps) => {
  const [uploadedFile, setUploadedFile] = useState<FileTypes[] | null>(null);

  const handleFileUpload = (file: FileTypes[] | null) => {
    setUploadedFile(file);
  };
  return (
    <AlertDialog open={open}>
      <AlertDialogContent className="scale-75">
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
              <label htmlFor="name">Name Group</label>
              <input
                id="name"
                placeholder="Enter here"
                type="text"
                className="p-3 border text-md border-[rgba(0,0,0,0.59)] block w-full rounded-lg mt-3 outline-none"
              />
            </>
            <>
              <label htmlFor="invite" className="mt-4 block">
                Visibility
              </label>
              <select
                name="days"
                id="days"
                className="py-3 w-full text-sm px-2 border border-[rgba(0,0,0,0.59)] rounded-lg bg-transparent outline-none"
                onChange={() => {}}
              >
                <option value="all">Select Option</option>
                <option value="Private">Private</option>
                <option value="Public">Public</option>
              </select>
            </>
            <>
              <label htmlFor="invite" className="mt-4 block">
                Invite Participant via Email
              </label>
              <input
                id="invite"
                type="email"
                placeholder="Add user email"
                className="p-3 border border-[rgba(0,0,0,0.59)] block w-full rounded-lg mt-3 outline-none"
              />
            </>
            <>
              <label htmlFor="invite" className="mt-4 mb-2 block">
                Upload Group Picture
              </label>
              <FileUpload
                value={uploadedFile}
                maxSize={2 * 1204 * 1204}
                onFileUpload={handleFileUpload}
                accept={{ "image/*": [".jpg", ".jpeg", ".png", ".gif"] }}
                type="image"
              />
            </>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="space-x-2">
          <AlertDialogAction
            onClick={close}
            className="py-3 px-4 w-[40%] bg-transparent border  text-gray-600 rounded-lg hover:bg-transparent hover:text-gray-600"
          >
            Cancel
          </AlertDialogAction>
          <AlertDialogAction className="py-3 px-4 w-[40%] bg-[#000080] text-white rounded-lg hover:bg-[#000080]">
            Create Group
          </AlertDialogAction>
        </AlertDialogFooter>
        <p className="text-[#000080] font-medium text-center mt-2">
          T&C Applies
        </p>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AddGroupModal;
