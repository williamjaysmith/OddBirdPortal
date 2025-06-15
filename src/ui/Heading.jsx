import { cn } from "../utils/helpers";

const Heading = ({ as: Component = "h1", children, className = "", ...props }) => {
  const baseStyles = "leading-tight";
  
  const headingStyles = {
    h1: "text-2xl font-semibold",
    h2: "text-xl font-semibold", 
    h3: "text-xl font-medium",
    h4: "text-2xl font-semibold text-center",
  };

  const styles = cn(
    baseStyles,
    headingStyles[Component],
    className
  );

  return (
    <Component className={styles} {...props}>
      {children}
    </Component>
  );
};

export default Heading;