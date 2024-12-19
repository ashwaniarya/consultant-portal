"use client";

import React from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

type TableDataProps = {
  product: string;
  date: string;
  timeSpent: number;
  orderValue: number;
  commission: string;
};

const columnHelper = createColumnHelper<TableDataProps>();

const columns = [
  columnHelper.accessor("product", {
    header: () => "Product",
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("date", {
    header: () => "Date",
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("timeSpent", {
    header: () => "Time Spent (hrs)",
    cell: (info) => info.renderValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("orderValue", {
    header: () => "Order Value ($)",
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("commission", {
    header: "Commission",
    footer: (info) => info.column.id,
  }),
];

const data = [
  {
    product: "Product 1",
    date: "2024-01-01",
    timeSpent: 1,
    orderValue: 100,
    commission: "10%",
  },
];
const Table: React.FC = () => {
  const table = useReactTable({
    data: data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="p-2">
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
