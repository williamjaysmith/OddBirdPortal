import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";
import { useOutsideClick } from "../hooks/useOutsideClick";
import { cn } from "../utils/helpers";

const ModalContext = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState("");

  const close = () => setOpenName("");
  const open = setOpenName;

  return (
    <ModalContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens: opensWindowName }) {
  const { open } = useContext(ModalContext);

  return cloneElement(children, { onClick: () => open(opensWindowName) });
}

function Window({ children, name, className = "" }) {
  const { openName, close } = useContext(ModalContext);
  const ref = useOutsideClick(close);

  if (name !== openName) return null;

  return createPortal(
    <div className="fixed inset-0 w-full h-screen bg-[var(--backdrop-color)] backdrop-blur-sm z-[1000] transition-all duration-500">
      <div 
        ref={ref}
        className={cn(
          "fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-grey-0 rounded-large shadow-lg px-16 py-12.8 transition-all duration-500 max-w-[90vw] max-h-[90vh] overflow-auto",
          className
        )}
      >
        <button
          onClick={close}
          className="absolute top-1.2 right-7.5 bg-transparent border-none p-1.5 rounded-small transition-all duration-200 hover:bg-grey-100 [&>svg]:w-2.4 [&>svg]:h-2.4 [&>svg]:text-grey-500"
        >
          <HiXMark />
        </button>

        <div>{cloneElement(children, { onCloseModal: close })}</div>
      </div>
    </div>,
    document.body
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;