import { cn } from "../utils/helpers";

const Tag = ({ type = "blue", children, className = "", ...props }) => {
  const typeStyles = {
    blue: "text-blue-700 bg-blue-100",
    green: "text-green-700 bg-green-100", 
    yellow: "text-yellow-700 bg-yellow-100",
    silver: "text-silver-700 bg-silver-100",
    indigo: "text-indigo-700 bg-indigo-100",
    red: "text-red-700 bg-red-100",
  };

  return (
    <span
      className={cn(
        "w-fit uppercase text-xs font-semibold px-1.2 py-1.5 rounded-full",
        typeStyles[type] || typeStyles.blue,
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};

export default Tag;