import { cn, handleChangeToMB } from "@/lib/utils";
import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FileText, X } from "lucide-react";
import React from "react";
import Dropzone, {
  type DropzoneProps,
  type FileRejection,
} from "react-dropzone";
import { toast } from "react-toastify";

export type FileTypes = File | ServerFiles;

interface FileUploadProps {
  onFileUpload: (file: FileTypes[] | null) => void;
  value: FileTypes[] | null;
  maxSize?: number;
  accept?: DropzoneProps["accept"];
  type: "image" | "file";
}

type ServerFiles = {
  id: string;
  name: string;
  url: string;
  size: number;
};

const isFileWithPreview = (
  file: File | ServerFiles
): file is File & { preview: string } => {
  if (file instanceof File) {
    return "preview" in file && typeof file.preview === "string";
  } else return false;
};

const FileUpload: React.FC<FileUploadProps> = ({
  onFileUpload,
  value,
  type,
  maxSize,
  accept,
}) => {
  const onDropFile = (acceptedFile: File[], rejectedFile: FileRejection[]) => {
    const acceptFile = acceptedFile.map((file) => {
      if (file instanceof File) {
        return Object.assign(file, {
          preview: URL.createObjectURL(file),
        });
      }

      return file;
    });

    onFileUpload(acceptFile);

    if (rejectedFile.length > 0) {
      rejectedFile.forEach((reject: FileRejection) => {
        toast.error(` ${reject.errors[0].message} `);
        return;
      });
    }
  };

  return (
    <div className="w-full">
      {!value?.length && (
        <Dropzone accept={accept} onDrop={onDropFile} maxSize={maxSize}>
          {({ getRootProps, getInputProps }) => {
            return (
              <div
                className={cn(
                  `border border-gray-300 p-4 rounded-lg text-center cursor-pointer`,
                  type === "image" && "bg-[#F9F9F9]"
                )}
                {...getRootProps()}
              >
                <input {...getInputProps()} />
                {type === "image" && (
                  <div className="flex items-center bg-[] justify-center gap-4">
                    <FontAwesomeIcon
                      icon={faCloudArrowUp}
                      className="text-[#000080] text-xl "
                    />
                    <p className="text-[#000080] ">Click to Add image</p>
                  </div>
                )}
                {type === "file" && (
                  <div className="">
                    <div className="flex items-center gap-2 justify-center ">
                      <FontAwesomeIcon
                        icon={faCloudArrowUp}
                        className="text-blue-500 mb-2"
                        size="2x"
                      />
                      <p className="text-gray-600">Drag a file here</p>
                    </div>
                    <p className="text-gray-600">Or</p>
                    <p className="text-blue-500">Click to upload</p>
                    <p className="text-gray-500  md:text-sm text-xs">
                      XLS format, Max size of 10MB
                    </p>
                  </div>
                )}
              </div>
            );
          }}
        </Dropzone>
      )}

      {value?.length ||
        (0 > 0 && (
          <div className="border-2  border-gray-300 p-4 rounded-lg text-center cursor-pointer">
            <div className="flex justify-between  px-3 items-center">
              <div className="flex items-center gap-3">
                {type === "image" && isFileWithPreview(value[0]) && (
                  <img
                    src={value[0]?.preview}
                    className="size-10"
                    alt={value[0]?.name}
                  />
                )}
                {type === "file" && (
                  <FileText className="size-10 text-[#000080]" />
                )}
                <div className="space-y-1 text-left">
                  <p className="text-[#000080] md:text-sm text-xs font-medium">
                    {value?.[0]?.name}
                  </p>
                  <p className="md:text-sm text-sm">
                    {handleChangeToMB(value?.[0]?.size)}
                  </p>
                </div>
              </div>
              <X
                onClick={() => {
                  onFileUpload(null);
                }}
                className="p-1 bg-[#000080]/80 text-white  rounded-full"
              />
            </div>
          </div>
        ))}
    </div>
  );
};

export default FileUpload;
