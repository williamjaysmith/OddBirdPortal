import { cn } from "../../utils/helpers";

const DashboardBox = ({ children, className = "", ...props }) => {
  return (
    <div 
      className={cn(
        "bg-grey-0 border border-grey-100 rounded-lg p-6 flex flex-col gap-4",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default DashboardBox;