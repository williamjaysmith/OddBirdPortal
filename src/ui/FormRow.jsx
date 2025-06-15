import { cn } from "../utils/helpers";

function FormRow({ label, error, children, className = "" }) {
  const hasButton = children?.props?.type === 'submit' || children?.type?.name === 'Button';
  
  const baseStyles = "py-3 first:pt-0 last:pb-0";
  const gridStyles = hasButton 
    ? "flex justify-end gap-3" 
    : "grid items-center grid-cols-[24rem_1fr_1.2fr] gap-6 border-b border-grey-100 last:border-b-0";

  return (
    <div className={cn(baseStyles, gridStyles, className)}>
      {label && !hasButton && (
        <label htmlFor={children.props?.id} className="font-medium text-grey-700">
          {label}
        </label>
      )}
      {children}
      {error && (
        <span className="text-sm text-red-700">
          {error}
        </span>
      )}
    </div>
  );
}

export default FormRow;