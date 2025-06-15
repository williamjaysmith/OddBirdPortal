import { cn } from "../utils/helpers";

const ButtonText = ({ children, className = "", ...props }) => {
  return (
    <button
      className={cn(
        "text-brand-600 font-medium text-center transition-all duration-300 bg-transparent border-none rounded-small hover:text-brand-700 active:text-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-600 focus:ring-opacity-50",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default ButtonText;