"use client";

import React, { useEffect } from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import BaseButton from "@/components/Button";
import { getOrders } from "@/network/apiService";
import { formatDateTime } from "@/helper";
import Typography from "@/components/Typography";
import Icon from "@/components/Icon";

type Product = {
  name: string;
  image: string;
};

type TableDataProps = {
  id: number;
  product: Product;
  date: string;
  timeSpent: number;
  orderValue: number;
  commission: number;
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
    header: () => "Action",
    footer: (info) => info.column.id,
  }),
];

interface SalesTableProps {
  maxRows?: number;
  data?: TableDataProps[];
}

const SalesTable: React.FC<SalesTableProps> = ({ maxRows }) => {
  const [page, setPage] = React.useState<number>(1);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [totalPages, setTotalPages] = React.useState<number>(1);
  const [data, setData] = React.useState<TableDataProps[]>(() => []);

  const table = useReactTable({
    data: maxRows ? data.slice(0, maxRows) : data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  useEffect(() => {
    const fetchData = async () => {
      const { data: ordersData, error } = await getOrders(page);
      setLoading(false);
      if (ordersData) {
        setData(ordersData.orders);
        setTotalPages(ordersData.totalPages);
      }
    };
    fetchData();
  }, [page]);

  const renderCellComponent = (cell: any) => {
    switch (cell.column.id) {
      case "action":
        return (
          <BaseButton
            href={`/chats/${cell.row.original.id}`}
            as="a"
            variant="text"
          >
            <Typography variant="caption" className="text-textCaptionLight">
              {cell.getValue()}
            </Typography>
            <Icon type="arrow-up-right" color="#8A94A6" size={18} />
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
        const formattedDate = formatDateTime(timestamp);
        return (
          <div className="flex flex-col">
            <span>{formattedDate.date}</span>
            <span className="text-gray-500 text-sm">{formattedDate.time}</span>
          </div>
        );
      case "product":
        return (
          <div className="flex items-center gap-2">
            <img
              src={cell.getValue().image}
              alt={cell.getValue().name}
              className="w-8 h-8 rounded-full"
            />
            <Typography variant="body">{cell.getValue().name}</Typography>
          </div>
        );
      default:
        return flexRender(cell.column.columnDef.cell, cell.getContext());
    }
  };

  const incrementPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  const decrementPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const pages = Array.from(
    { length: Math.min(totalPages, 10) },
    (_, i) => i + 1
  );

  return (
    <div className="border border-medium rounded-xl overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="p-2 sm:p-4">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className="rounded-t-xl">
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="p-2 sm:p-4 text-left min-w-[150px]"
                  >
                    {header.isPlaceholder ? null : (
                      <Typography
                        variant="body-2"
                        className="text-tableHeader font-normal"
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                      </Typography>
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
                  <td key={cell.id} className="p-2 sm:p-4">
                    {renderCellComponent(cell)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex flex-wrap justify-center gap-1 mt-4 mb-4">
        <BaseButton
          variant="text"
          onClick={decrementPage}
          disabled={page === 1}
          className="text-sm"
        >
          Previous
        </BaseButton>
        {pages.map((pageNum) => (
          <BaseButton
            key={pageNum}
            variant="text"
            onClick={() => setPage(pageNum)}
            className={`rounded-full w-6 h-6 sm:w-8 sm:h-8 text-sm flex items-center justify-center ${
              page === pageNum ? "bg-gray-200" : ""
            }`}
          >
            {pageNum}
          </BaseButton>
        ))}
        <BaseButton
          variant="text"
          onClick={incrementPage}
          disabled={page === totalPages}
          className="text-sm"
        >
          Next
        </BaseButton>
      </div>
    </div>
  );
};

export default SalesTable;
