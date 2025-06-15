import { BiLoaderAlt } from "react-icons/bi";
import { cn } from "../utils/helpers";

const SpinnerMini = ({ className = "", ...props }) => {
  return (
    <BiLoaderAlt
      className={cn("w-2.4 h-2.4 animate-spin", className)}
      {...props}
    />
  );
};

export default SpinnerMini;