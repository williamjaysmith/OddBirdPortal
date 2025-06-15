import { cn } from "../utils/helpers";

const Form = ({ type = "regular", children, className = "", ...props }) => {
  const baseStyles = "overflow-hidden text-sm";
  
  const typeStyles = {
    regular: "p-6 bg-grey-0 border border-grey-100 rounded-lg",
    modal: "w-full",
  };

  const styles = cn(
    baseStyles,
    typeStyles[type],
    className
  );

  return (
    <form className={styles} {...props}>
      {children}
    </form>
  );
};

export default Form;