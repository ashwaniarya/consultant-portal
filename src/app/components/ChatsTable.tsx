"use client";

import React from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import Image from "@/components/Image";
import BaseButton from "@/components/Button";

type Product = {
  name: string;
  image: string;
};

type TableDataProps = {
  product: Product;
  date: string;
  timeSpent: number;
  orderValue: number;
  commission: number;
  id: number;
  action: string;
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
  columnHelper.accessor("action", {
    header: "Action",
    footer: (info) => info.column.id,
  }),
];

const defaultData: TableDataProps[] = [
  {
    product: {
      name: "Product 1",
      image: "https://via.placeholder.com/150",
    },
    date: "2024-01-15T09:30:00",
    timeSpent: 23425,
    orderValue: 100,
    commission: 10,
    id: 1,
    action: "View Chat",
  },
  {
    product: {
      name: "Product 2",
      image: "https://via.placeholder.com/150",
    },
    date: "2024-01-16T09:30:00",
    timeSpent: 12342,
    orderValue: 200,
    commission: 20,
    id: 2,
    action: "View Chat",
  },
  {
    product: {
      name: "Product 3",
      image: "https://via.placeholder.com/150",
    },
    date: "2024-01-17T09:30:00",
    timeSpent: 2342,
    orderValue: 1500,
    commission: 15,
    id: 3,
    action: "View Chat",
  },
];

interface ChatsTableProps {
  maxRows?: number;
  data?: TableDataProps[];
}

const ChatsTable: React.FC<ChatsTableProps> = ({ maxRows = 2 }) => {
  const [data, setData] = React.useState<TableDataProps[]>(() => [
    ...defaultData,
  ]);

  const table = useReactTable({
    data: data.slice(0, maxRows),
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const renderCellComponent = (cell: any) => {
    switch (cell.column.id) {
      case "action":
        return (
          <BaseButton
            href={`/chats/${cell.row.original.id}`}
            as="a"
            variant="text"
          >
            {cell.getValue()}
          </BaseButton>
        );
      case "commission":
        return (
          <span className="font-bold">{cell.getValue().toLocaleString()}</span>
        );
      case "orderValue":
        return <span>${cell.getValue().toLocaleString()}</span>;
      case "timeSpent":
        const timeSpent = cell.getValue();
        const hours = Math.floor(timeSpent / 3600);
        const minutes = Math.floor((timeSpent % 3600) / 60);
        return `${hours}h ${minutes}m`;
      case "date":
        const timestamp = cell.getValue();
        const date = new Date(timestamp);
        const formattedDate = {
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
        return (
          <div className="flex flex-col">
            <span>{formattedDate.date}</span>
            <span className="text-gray-500 text-sm">{formattedDate.time}</span>
          </div>
        );
      case "product":
        return (
          <div className="flex items-center gap-2">
            {/* <Image
              src={cell.getValue().image}
              alt={cell.getValue().name}
              width={32}
              height={32}
              className="w-8 h-8 rounded-full"
            /> */}
            <img
              src={cell.getValue().image}
              alt={cell.getValue().name}
              className="w-8 h-8 rounded-full"
            />
            <span>{cell.getValue().name}</span>
          </div>
        );
      default:
        return flexRender(cell.column.columnDef.cell, cell.getContext());
    }
  };
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
                  {renderCellComponent(cell)}
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
