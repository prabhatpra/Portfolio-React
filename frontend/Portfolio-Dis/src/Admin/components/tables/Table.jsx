import React from "react";
import clsx from "clsx";

const Table = ({
  columns = [],
  children,
  className = "",
  empty = false,
  emptyComponent = null,
}) => {
  if (empty && emptyComponent) {
    return emptyComponent;
  }

  return (
    <div
      className={clsx(
        "overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm",
        className
      )}
    >
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              {columns.map((column) => (
                <th
                  key={column.key}
                  className={clsx(
                    "px-6 py-4 text-left text-sm font-semibold text-gray-700",
                    column.className
                  )}
                >
                  {column.title}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">
            {children}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;