import { createContext, useContext } from "react";
import { cn } from "../utils/helpers";

const TableContext = createContext();

function Table({ columns, children, className = "" }) {
  return (
    <TableContext.Provider value={{ columns }}>
      <div 
        role="table" 
        className={cn(
          "border border-grey-200 text-small bg-grey-0 rounded-medium overflow-hidden",
          className
        )}
      >
        {children}
      </div>
    </TableContext.Provider>
  );
}

function Header({ children, className = "" }) {
  const { columns } = useContext(TableContext);
  return (
    <header 
      role="row" 
      className={cn(
        "grid gap-2.4 items-center px-2.4 py-1.6 bg-grey-50 border-b border-grey-100 uppercase tracking-wide font-semibold text-grey-600 transition-none",
        className
      )}
      style={{ gridTemplateColumns: columns }}
    >
      {children}
    </header>
  );
}

function Row({ children, className = "" }) {
  const { columns } = useContext(TableContext);
  return (
    <div 
      role="row" 
      className={cn(
        "grid gap-2.4 items-center px-2.4 py-1.2 border-b border-grey-100 last:border-b-0 transition-none",
        className
      )}
      style={{ gridTemplateColumns: columns }}
    >
      {children}
    </div>
  );
}

function Body({ data, render, className = "" }) {
  if (!data.length) {
    return (
      <p className="text-large font-medium text-center my-2.4">
        No data to show at the moment
      </p>
    );
  }

  return (
    <section className={cn("my-1.5", className)}>
      {data.map(render)}
    </section>
  );
}

function Footer({ children, className = "" }) {
  return (
    <footer className={cn(
      "bg-grey-50 flex justify-center px-1.2 py-1.2 empty:hidden",
      className
    )}>
      {children}
    </footer>
  );
}

Table.Header = Header;
Table.Body = Body;
Table.Row = Row;
Table.Footer = Footer;

export default Table;