import React, { PropsWithChildren } from "react";

interface ModalDefaultType {
  onClickToggleModal: () => void;
}

function Modal({
  onClickToggleModal,
  children,
}: PropsWithChildren<ModalDefaultType>) {
  return (
    <div
      className="w-full flex items-center justify-center fixed"
      onClick={(e: React.MouseEvent) => {
        e.preventDefault();

        if (onClickToggleModal) {
          onClickToggleModal();
        }
      }}
    >
      <dialog className="w-96 h-96 flex items-center z-50 border-none shadow-sm box-border">
        {children}
      </dialog>
      <div className="w-96 h-96 z-50 fixed top-0" style={{ top: 0 }} />
    </div>
  );
}

export default Modal;
