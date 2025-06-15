import { cn } from "../utils/helpers";

const ButtonGroup = ({ children, className = "", ...props }) => {
  return (
    <div className={cn("flex flex-wrap gap-2 justify-end", className)} {...props}>
      {children}
    </div>
  );
};

export default ButtonGroup;