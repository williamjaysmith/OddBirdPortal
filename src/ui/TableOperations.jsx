import { cn } from "../utils/helpers";

const TableOperations = ({ children, className = "", ...props }) => {
  return (
    <div className={cn("flex flex-wrap items-center gap-2", className)} {...props}>
      {children}
    </div>
  );
};

export default TableOperations;