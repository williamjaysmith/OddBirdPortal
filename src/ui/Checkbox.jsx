import { cn } from "../utils/helpers";

function Checkbox({ checked, onChange, disabled = false, id, children, className = "" }) {
  return (
    <div className={cn("flex gap-1.6", className)}>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className="h-2.4 w-2.4 outline-offset-2 origin-left accent-brand-600 disabled:accent-brand-600"
      />
      <label htmlFor={!disabled ? id : ""} className="flex-1 flex items-center gap-3">
        {children}
      </label>
    </div>
  );
}

export default Checkbox;