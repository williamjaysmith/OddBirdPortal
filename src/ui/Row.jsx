import { cn } from "../utils/helpers";

const Row = ({ type = "vertical", children, className = "", ...props }) => {
  const baseStyles = "flex";
  
  const typeStyles = {
    horizontal: "flex-col items-start gap-4",
    vertical: "flex-col gap-1.6",
  };

  const styles = cn(
    baseStyles,
    typeStyles[type],
    className
  );

  return (
    <div className={styles} {...props}>
      {children}
    </div>
  );
};

export default Row;