import { cn } from "../utils/helpers";

function DataItem({ icon, label, children, className = "" }) {
  return (
    <div className={cn("flex items-center gap-1.6 py-3", className)}>
      <span className="flex items-center gap-3 font-medium [&>svg]:w-8 [&>svg]:h-8 [&>svg]:text-brand-600">
        {icon}
        <span>{label}</span>
      </span>
      {children}
    </div>
  );
}

export default DataItem;