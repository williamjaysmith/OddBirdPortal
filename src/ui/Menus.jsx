import { createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { HiEllipsisVertical } from "react-icons/hi2";
import { useOutsideClick } from "../hooks/useOutsideClick";

const MenusContext = createContext();

function Menus({ children }) {
  const [openId, setOpenId] = useState("");
  const [position, setPosition] = useState(null);

  const close = () => setOpenId("");
  const open = setOpenId;

  return (
    <MenusContext.Provider
      value={{ openId, close, open, position, setPosition }}
    >
      {children}
    </MenusContext.Provider>
  );
}

function Menu({ children }) {
  return (
    <div className="flex items-center justify-end">
      {children}
    </div>
  );
}

function Toggle({ id }) {
  const { openId, close, open, setPosition } = useContext(MenusContext);

  function handleClick(e) {
    e.stopPropagation();

    const rect = e.target.closest("button").getBoundingClientRect();
    setPosition({
      x: window.innerWidth - rect.width - rect.x,
      y: rect.y + rect.height + 8,
    });

    openId === "" || openId !== id ? open(id) : close();
  }

  return (
    <button 
      onClick={handleClick}
      className="bg-transparent border-none p-1.5 rounded translate-x-2 transition-all duration-200 hover:bg-grey-100 [&>svg]:w-6 [&>svg]:h-6 [&>svg]:text-grey-700"
    >
      <HiEllipsisVertical />
    </button>
  );
}

function List({ id, children }) {
  const { openId, position, close } = useContext(MenusContext);
  const ref = useOutsideClick(close, false);

  if (openId !== id) return null;

  return createPortal(
    <ul 
      ref={ref}
      className="fixed bg-grey-0 shadow-md rounded-lg z-50"
      style={{
        right: `${position?.x}px`,
        top: `${position?.y}px`,
      }}
    >
      {children}
    </ul>,
    document.body
  );
}

function Button({ children, icon, onClick }) {
  const { close } = useContext(MenusContext);

  function handleClick() {
    onClick?.();
    close();
  }

  return (
    <li>
      <button 
        onClick={handleClick}
        className="w-full text-left bg-transparent border-none px-6 py-3 text-sm transition-all duration-200 flex items-center gap-4 hover:bg-grey-50 [&>svg]:w-4 [&>svg]:h-4 [&>svg]:text-grey-400 [&>svg]:transition-all [&>svg]:duration-300"
      >
        {icon}
        <span>{children}</span>
      </button>
    </li>
  );
}

Menus.Menu = Menu;
Menus.Toggle = Toggle;
Menus.List = List;
Menus.Button = Button;

export default Menus;