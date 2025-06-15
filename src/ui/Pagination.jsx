import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../utils/constants";

function Pagination({ count }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  const pageCount = Math.ceil(count / PAGE_SIZE);

  function nextPage() {
    const next = currentPage === pageCount ? currentPage : currentPage + 1;

    searchParams.set("page", next);
    setSearchParams(searchParams);
  }

  function prevPage() {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;

    searchParams.set("page", prev);
    setSearchParams(searchParams);
  }

  if (pageCount <= 1) return null;

  return (
    <div className="w-full flex flex-col gap-4">
      <p className="text-sm order-2">
        Showing <span className="font-semibold">{(currentPage - 1) * PAGE_SIZE + 1}</span> to{" "}
        <span className="font-semibold">
          {currentPage === pageCount ? count : currentPage * PAGE_SIZE}
        </span>{" "}
        of <span className="font-semibold">{count}</span> results
      </p>

      <div className="flex gap-2 order-1">
        <button 
          onClick={prevPage} 
          disabled={currentPage === 1}
          className="bg-grey-50 text-inherit border-none rounded font-medium text-sm flex items-center justify-center gap-1 px-3 py-2 transition-all duration-300 hover:bg-brand-600 hover:text-brand-50 disabled:hover:bg-grey-50 disabled:hover:text-inherit [&>svg]:h-5 [&>svg]:w-5 has-[span:last-child]:pl-1.5 has-[span:first-child]:pr-1.5"
        >
          <HiChevronLeft /> <span>Previous</span>
        </button>

        <button
          onClick={nextPage}
          disabled={currentPage === pageCount}
          className="bg-grey-50 text-inherit border-none rounded font-medium text-sm flex items-center justify-center gap-1 px-3 py-2 transition-all duration-300 hover:bg-brand-600 hover:text-brand-50 disabled:hover:bg-grey-50 disabled:hover:text-inherit [&>svg]:h-5 [&>svg]:w-5 has-[span:last-child]:pl-1.5 has-[span:first-child]:pr-1.5"
        >
          <span>Next</span>
          <HiChevronRight />
        </button>
      </div>
    </div>
  );
}

export default Pagination;