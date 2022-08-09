import React, { useState } from "react";

const Modal = ({ children, open, onClose }) => {
  if (!open) {
    return null;
  }

  return (
    <div className="top-0 left-0 right-0 bottom-0 bg-black bg-opacity-90 fixed z-10">
      <button
        type="button"
        className="my-5 mx-10  bg-red-500 text-white rounded-lg w-20 font-bold font-mono"
        onClick={onClose}
      >
        X
      </button>

      <div>{children}</div>
    </div>
  );
};

export default Modal;
