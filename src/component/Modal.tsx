import React, { FC } from "react";

interface Modalprops {
  isOpen: Boolean;
  onClose?: React.MouseEventHandler;
  children?: React.ReactNode;
}

const Modal: FC<Modalprops> = ({ isOpen, onClose, children }) => {
  const preference = {
    modalOverlay: isOpen
      ? "fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
      : "hidden",
    modalContent: isOpen
      ? "bg-white p-4 rounded-md shadow-md grid justify-items-center z-51"
      : "hidden",
  };
  return (
    <div className={preference.modalOverlay}>
      <div className={preference.modalContent}>
        <div onClick={onClose} className="flex justify-end text-end w-full">
          <i className="fa-solid fa-xmark text-red-300 hover:text-red-600"></i>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
