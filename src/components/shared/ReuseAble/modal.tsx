import React, { useState, useEffect } from "react";

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	children: React.ReactNode;
	contentClassName?: string;
}

const Modal: React.FC<ModalProps> = ({
	isOpen,
	onClose,
	children,
	contentClassName = "bg-white p-4",
}) => {
	const [showModal, setShowModal] = useState(false);

	useEffect(() => {
		if (isOpen) {
			setShowModal(true);
		} else {
			setTimeout(() => setShowModal(false), 300);
		}
	}, [isOpen]);
	console.log(onClose);
	return (
		<>
			{showModal && (
				<div
					className={`fixed inset-0 z-50 flex items-center justify-center bg-black/80 transition-opacity duration-300 ${
						isOpen ? "opacity-100" : "opacity-0"
					}`}
				>
					<div
						className={`relative ${contentClassName} transition-transform duration-300 ${
							isOpen ? "scale-100" : "scale-95"
						}`}
					>
						{children}
					</div>
				</div>
			)}
		</>
	);
};

export default Modal;
