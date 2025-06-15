import { cn } from "../../utils/helpers";

function Stat({ icon, title, value, color = "blue" }) {
  const colorStyles = {
    blue: "bg-blue-100 [&>svg]:text-blue-700",
    green: "bg-green-100 [&>svg]:text-green-700", 
    yellow: "bg-yellow-100 [&>svg]:text-yellow-700",
    indigo: "bg-indigo-100 [&>svg]:text-indigo-700",
    red: "bg-red-100 [&>svg]:text-red-700",
  };

  return (
    <div className="bg-grey-0 border border-grey-100 rounded-lg p-3 grid grid-cols-[6.4rem_1fr] grid-rows-[auto_auto] gap-x-4 gap-y-1">
      <div className={cn(
        "row-span-2 aspect-square rounded-full flex items-center justify-center [&>svg]:w-8 [&>svg]:h-8",
        colorStyles[color] || colorStyles.blue
      )}>
        {icon}
      </div>
      <h5 className="self-end text-xs uppercase tracking-wide font-semibold text-grey-500">
        {title}
      </h5>
      <p className="text-2xl leading-none font-medium">
        {value}
      </p>
    </div>
  );
}

export default Stat;