import { useSearchParams } from "react-router-dom";
import { cn } from "../utils/helpers";

function Filter({ filterField, options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get(filterField) || options.at(0).value;

  function handleClick(value) {
    searchParams.set(filterField, value);
    if (searchParams.get("page")) searchParams.set("page", 1);

    setSearchParams(searchParams);
  }

  return (
    <div className="border border-grey-100 bg-grey-0 shadow-sm rounded-small p-1.5 flex flex-wrap gap-1.5">
      {options.map((option) => {
        const isActive = option.value === currentFilter;
        return (
          <button
            key={option.value}
            onClick={() => handleClick(option.value)}
            disabled={isActive}
            className={cn(
              "bg-grey-0 border-none rounded-small font-medium text-xs px-2 py-1 transition-all duration-300 hover:bg-brand-600 hover:text-brand-50 disabled:cursor-not-allowed",
              isActive ? "bg-brand-600 text-brand-50" : ""
            )}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}

export default Filter;