"use client";

import React from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import BaseButton from "@/components/Button";

type TableDataProps = {
  product: {
    name: string;
    image: string;
  };
  date: string;
  timeSpent: number;
  orderValue: number;
  commission: number;
  id: number;
  action: string;
};

const columnHelper = createColumnHelper<TableDataProps>();

const formatTimeSpent = (seconds: number) => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  return `${hours}h ${minutes}m`;
};

const formatDate = (timestamp: string) => {
  const date = new Date(timestamp);
  return {
    date: date.toLocaleDateString("en-US", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }),
    time: date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    }),
  };
};

const columns = [
  columnHelper.accessor("product", {
    header: "Product",
    cell: (info) => (
      <div className="flex items-center gap-2">
        <img
          src={info.getValue().image}
          alt={info.getValue().name}
          className="w-8 h-8 rounded-full"
        />
        <span>{info.getValue().name}</span>
      </div>
    ),
  }),
  columnHelper.accessor("date", {
    header: "Date",
    cell: (info) => {
      const formatted = formatDate(info.getValue());
      return (
        <div className="flex flex-col">
          <span>{formatted.date}</span>
          <span className="text-gray-500 text-sm">{formatted.time}</span>
        </div>
      );
    },
  }),
  columnHelper.accessor("timeSpent", {
    header: "Time Spent (hrs)",
    cell: (info) => formatTimeSpent(info.getValue()),
  }),
  columnHelper.accessor("orderValue", {
    header: "Order Value ($)",
    cell: (info) => <span>${info.getValue().toLocaleString()}</span>,
  }),
  columnHelper.accessor("commission", {
    header: "Commission",
    cell: (info) => (
      <span className="font-bold">{info.getValue().toLocaleString()}</span>
    ),
  }),
  columnHelper.accessor("action", {
    header: "Action",
    cell: (info) => (
      <BaseButton href={`/chats/${info.row.original.id}`} as="a" variant="text">
        {info.getValue()}
      </BaseButton>
    ),
  }),
];

interface ChatsTableProps {
  maxRows?: number;
  data?: TableDataProps[];
}

const ChatsTable: React.FC<ChatsTableProps> = ({ maxRows = 2, data = [] }) => {
  const table = useReactTable({
    data: data.slice(0, maxRows),
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div>
      <table className="w-full">
        <thead className="p-4">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="p-4 text-left">
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
                <td key={cell.id} className="p-4">
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

export default ChatsTable;
