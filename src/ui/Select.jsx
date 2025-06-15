import { cn } from "../utils/helpers";

function Select({ options, value, onChange, type = "default", className = "", ...props }) {
  const borderStyle = type === "white" ? "border-grey-100" : "border-grey-300";
  
  return (
    <select
      value={value}
      onChange={onChange}
      className={cn(
        "text-small px-1.2 py-3 bg-grey-0 font-medium shadow-sm rounded-small focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-600 focus:ring-opacity-50 disabled:bg-grey-200 disabled:text-grey-500",
        borderStyle,
        "border",
        className
      )}
      {...props}
    >
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default Select;