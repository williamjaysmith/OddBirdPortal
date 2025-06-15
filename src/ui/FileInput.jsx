import { cn } from "../utils/helpers";

const FileInput = ({ className = "", ...props }) => {
  return (
    <input
      type="file"
      className={cn(
        "text-small rounded-small file:font-inherit file:font-medium file:px-1.2 file:py-3 file:mr-1.2 file:rounded-small file:border-none file:text-brand-50 file:bg-brand-600 file:cursor-pointer file:transition-colors file:duration-200 hover:file:bg-brand-700",
        className
      )}
      {...props}
    />
  );
};

export default FileInput;