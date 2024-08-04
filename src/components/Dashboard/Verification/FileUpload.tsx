import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";

interface FileUploadProps {
	onFileUpload: (file: File) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onFileUpload }) => {
	const onDrop = useCallback(
		(acceptedFiles: File[]) => {
			if (acceptedFiles.length > 0) {
				onFileUpload(acceptedFiles[0]);
			}
		},
		[onFileUpload]
	);

	const { getRootProps, getInputProps } = useDropzone({
		onDrop,
		accept: {
			"application/vnd.ms-excel": [".xls"],
		},
		maxSize: 10485760, // 10MB in bytes
	});

	return (
		<div
			{...getRootProps()}
			className="border-2 border-dashed border-gray-300 p-4 rounded-lg text-center cursor-pointer"
		>
			<input {...getInputProps()} />
			<FontAwesomeIcon
				icon={faCloudArrowUp}
				className="text-blue-500 mb-2"
				size="2x"
			/>
			<p className="text-gray-600">Drag a file here</p>
			<p className="text-gray-600">Or</p>
			<p className="text-blue-500 underline">Click to upload</p>
			<p className="text-gray-500 text-sm">XLS format, Max size of 10MB</p>
		</div>
	);
};

export default FileUpload;
