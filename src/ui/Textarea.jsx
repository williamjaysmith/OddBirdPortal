import { cn } from "../utils/helpers";

const Textarea = ({ className = "", ...props }) => {
  return (
    <textarea
      className={cn(
        "px-1.2 py-3 border border-grey-300 rounded-small bg-grey-0 shadow-sm w-full h-32 resize-y focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-600 focus:ring-opacity-50 disabled:bg-grey-200 disabled:text-grey-500",
        className
      )}
      {...props}
    />
  );
};

export default Textarea;