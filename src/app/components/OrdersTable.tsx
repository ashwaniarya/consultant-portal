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

type TableDataProps = {
  product: {
    name: string;
    image: string;
  };
  date: string;
  timeSpent: number;
  orderValue: number;
  commission: number;
  action: string;
  id: number;
};

const columnHelper = createColumnHelper<TableDataProps>();

const formatTimeSpent = (seconds: number) => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  return `${hours}h ${minutes}m`;
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
        <Typography variant="body">{info.getValue().name}</Typography>
      </div>
    ),
  }),
  columnHelper.accessor("date", {
    header: "Date",
    cell: (info) => {
      const formattedDate = formatDateTime(info.getValue());
      return (
        <div className="flex flex-col">
          <span>{formattedDate.date}</span>
          <span className="text-gray-500 text-sm">{formattedDate.time}</span>
        </div>
      );
    },
  }),
  columnHelper.accessor("timeSpent", {
    header: "Time Spent",
    cell: (info) => formatTimeSpent(info.getValue()),
  }),
  columnHelper.accessor("orderValue", {
    header: "Order Value",
    cell: (info) => <span>${info.getValue().toLocaleString()}</span>,
  }),
  columnHelper.accessor("commission", {
    header: "Commission",
    cell: (info) => (
      <span className="font-bold">{info.getValue().toLocaleString()}</span>
    ),
  }),
  columnHelper.accessor("action", {
    header: "",
    cell: (info) => (
      <BaseButton href={`/chats/${info.row.original.id}`} as="a" variant="text">
        <Typography variant="caption" className="text-textCaptionLight">
          {info.getValue()}
        </Typography>
        <Icon type="arrow-up-right" color="#8A94A6" size={18} />
      </BaseButton>
    ),
  }),
];

const OrdersTable = () => {
  const [page, setPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(1);
  const [data, setData] = React.useState<TableDataProps[]>([]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  useEffect(() => {
    const fetchData = async () => {
      const { data: ordersData } = await getOrders(page);
      if (ordersData) {
        setData(ordersData.orders);
        setTotalPages(ordersData.totalPages);
      }
    };
    fetchData();
  }, [page]);

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
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
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
          onClick={() => page > 1 && setPage(page - 1)}
          disabled={page === 1}
          className="text-sm"
        >
          Previous
        </BaseButton>

        {Array.from({ length: Math.min(totalPages, 10) }, (_, i) => i + 1).map(
          (pageNum) => (
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
          )
        )}

        <BaseButton
          variant="text"
          onClick={() => page < totalPages && setPage(page + 1)}
          disabled={page === totalPages}
          className="text-sm"
        >
          Next
        </BaseButton>
      </div>
    </div>
  );
};

export default OrdersTable;
