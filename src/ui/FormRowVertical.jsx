import { cn } from "../utils/helpers";

function FormRowVertical({ label, error, children, className = "" }) {
  return (
    <div className={cn("flex flex-col gap-2 py-3", className)}>
      {label && (
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

export default FormRowVertical;