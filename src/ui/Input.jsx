import { cn } from "../utils/helpers";

const Input = ({ className = "", ...props }) => {
  return (
    <input
      className={cn(
        "border border-grey-300 bg-grey-0 rounded px-3 py-2 shadow-sm focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-600 focus:ring-opacity-50 disabled:bg-grey-200 disabled:text-grey-500",
        className
      )}
      {...props}
    />
  );
};

export default Input;