import { cn } from "../utils/helpers";

const ButtonIcon = ({ children, className = "", ...props }) => {
  return (
    <button
      className={cn(
        "bg-transparent border-none p-2.5 rounded-small transition-all duration-200 hover:bg-grey-100 focus:outline-none focus:ring-2 focus:ring-brand-600 focus:ring-opacity-50 [&>svg]:w-2.4 [&>svg]:h-2.4 [&>svg]:text-brand-600",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default ButtonIcon;