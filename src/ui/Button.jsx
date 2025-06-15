import { cn } from "../utils/helpers";

const Button = ({ 
  children, 
  variation = "primary", 
  size = "medium", 
  className = "", 
  disabled = false,
  ...props 
}) => {
  const baseStyles = "border-none rounded transition-colors duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-brand-600 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50";
  
  const sizeStyles = {
    small: "text-xs px-2 py-1 uppercase font-semibold text-center tracking-wide",
    medium: "text-sm px-4 py-3 font-medium",
    large: "text-base px-6 py-3 font-medium",
  };

  const variationStyles = {
    primary: "text-brand-50 bg-brand-600 hover:bg-brand-700 shadow-sm",
    secondary: "text-grey-600 bg-grey-0 border border-grey-200 hover:bg-grey-50 shadow-sm",
    danger: "text-red-100 bg-red-700 hover:bg-red-800 shadow-sm",
  };

  const styles = cn(
    baseStyles,
    sizeStyles[size],
    variationStyles[variation],
    className
  );

  return (
    <button 
      className={styles} 
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;