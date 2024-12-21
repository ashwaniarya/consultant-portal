"use client";

import React, { useEffect, useRef } from "react";
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
import { BaseCard } from "@/components/Card";
import VirtualScroll from "@/components/VirtualScroll";

type TableDataProps = {
  id: number;
  product: {
    name: string;
    image: string;
  };
  date: string;
  timeSpent: number;
  orderValue: number;
  commission: number;
  action: string;
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

interface SalesTableProps {
  maxRows?: number;
  allowPagination?: boolean;
  data: TableDataProps[];
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  onEndReached: (page: number, totalPages: number) => void;
}

const SalesCard = ({ data }: { data: TableDataProps }) => {
  return (
    <BaseCard className="flex flex-col gap-4" title={data.product.name}>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <Typography variant="caption" className="text-tableHeader">
              Order Value
            </Typography>
            <Typography variant="body-2">${data.orderValue}</Typography>
          </div>
        </div>
        <Typography variant="caption">
          {formatDateTime(data.date).date}
        </Typography>
      </div>
    </BaseCard>
  );
};

const SalesCardWithVirtualScroll = ({
  data,
  onEndReached,
  page,
  totalPages,
}: {
  data: TableDataProps[];
  onEndReached: (page: number, totalPages: number) => void;
  page: number;
  totalPages: number;
}) => {
  return (
    <VirtualScroll<TableDataProps>
      items={data}
      height={500}
      ScrollContainerComponent={"div"}
      itemHeight={120}
      renderItem={(item) => <SalesCard data={item} key={item.id} />}
      onEndReached={onEndReached}
      page={page}
      totalPages={totalPages}
    />
  );
};

const SalesTable: React.FC<SalesTableProps> = ({
  maxRows,
  allowPagination = false,
  data,
  page,
  totalPages,
  onPageChange,
  onEndReached,
}) => {
  const table = useReactTable({
    data: maxRows ? data.slice(0, maxRows) : data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="border border-medium rounded-xl overflow-hidden">
      <div className=" sales-table-container">
        <thead className="p-2 sm:p-4">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="p-2 sm:p-4 text-left min-w-[150px]"
                >
                  {!header.isPlaceholder && (
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
        <VirtualScroll
          className="sales-table-container flex"
          items={table.getRowModel().rows}
          height={500}
          itemHeight={56}
          renderItem={(row) => {
            console.log("row", row);
            return (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="p-2 sm:p-4">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            );
          }}
          page={page}
          totalPages={totalPages}
          onEndReached={onEndReached}
        />
      </div>
      {allowPagination && (
        <div className="flex flex-wrap justify-center gap-1 mt-4 mb-4">
          <BaseButton
            variant="text"
            onClick={() => page > 1 && onPageChange(page - 1)}
            disabled={page === 1}
            className="text-sm"
          >
            Previous
          </BaseButton>

          {Array.from(
            { length: Math.min(totalPages, 10) },
            (_, i) => i + 1
          ).map((pageNum) => (
            <BaseButton
              key={pageNum}
              variant="text"
              onClick={() => onPageChange(pageNum)}
              className={`rounded-full w-6 h-6 sm:w-8 sm:h-8 text-sm flex items-center justify-center ${
                page === pageNum ? "bg-gray-200" : ""
              }`}
            >
              {pageNum}
            </BaseButton>
          ))}

          <BaseButton
            variant="text"
            onClick={() => page < totalPages && onPageChange(page + 1)}
            disabled={page === totalPages}
            className="text-sm"
          >
            Next
          </BaseButton>
        </div>
      )}
    </div>
  );
};

const SalesTableWrapper = ({
  maxRows,
  allowPagination = false,
}: {
  children?: React.ReactNode;
  maxRows?: number;
  allowPagination?: boolean;
}) => {
  const [page, setPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(0);
  const [data, setData] = React.useState<TableDataProps[]>([]);
  const [loading, setLoading] = React.useState(false);
  const scrollPositionRef = useRef<number>(0);

  // const handleScroll = (
  //   e: React.UIEvent<HTMLDivElement>,
  //   totalPages: number
  // ) => {
  //   const target = e.target as HTMLDivElement;
  //   scrollPositionRef.current = target.scrollTop;

  //   if (
  //     target.scrollTop + target.clientHeight >=
  //     target.scrollHeight - FROM_BOTTOM_THRESHOLD
  //   ) {
  //     loadMore(totalPages);
  //   }
  // };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const { data: ordersData } = await getOrders(page);
      if (ordersData) {
        setData((prevData) => [...prevData, ...ordersData.orders]);
        setTotalPages(ordersData.totalPages);
      }
      setLoading(false);
      if (scrollPositionRef.current) {
        const container = document.querySelector(".sales-table-container");
        if (container) {
          container.scrollTop = scrollPositionRef.current;
        }
      }
    };
    fetchData();
  }, [page]);

  const loadMore = (totalPages: number) => {
    setPage((prev) => {
      if (prev < totalPages) {
        return prev + 1;
      }
      return prev;
    });
  };

  return (
    <>
      <div className="hidden sm:block">
        {/* <SalesTable
          onScroll={(e) => throttleHandler.current(e, totalPages)}
          data={data}
          page={page}
          totalPages={totalPages}
          onPageChange={setPage}
          maxRows={maxRows}
          allowPagination={allowPagination}
        /> */}
        <SalesTable
          data={data}
          page={page}
          totalPages={totalPages}
          onPageChange={setPage}
          maxRows={maxRows}
          allowPagination={allowPagination}
          onEndReached={(page, totalPages) => {
            loadMore(totalPages);
          }}
        />
      </div>
      <div className="block sm:hidden">
        {/* <SalesCardList
          data={data}
          onScroll={(e) => throttleHandler.current(e, totalPages)}
        /> */}
        {totalPages > 0 && (
          <SalesCardWithVirtualScroll
            data={data}
            page={page}
            totalPages={totalPages}
            onEndReached={(page, totalPages) => {
              loadMore(totalPages);
            }}
          />
        )}
      </div>
      <div className="flex justify-center py-4">
        {loading && (
          <Typography variant="caption" className="text-textCaptionLight">
            Loading {page === 1 ? "" : "more"}
          </Typography>
        )}
      </div>
    </>
  );
};

export default SalesTableWrapper;
