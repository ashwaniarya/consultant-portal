import React, { useRef, useState } from "react";
import { throttle } from "@/helper";

interface VirtualScrollProps<T> {
  items: T[];
  height: number;
  itemHeight: number;
  renderItem: (item: T, index: number) => React.ReactNode;
  onEndReached?: (page: number, totalPages: number) => void;
  endReachedThreshold?: number;
  page: number;
  totalPages: number;
  className?: string;
  ScrollContainerComponent?: string;
}

const THROTTLE_TIME = 200;

const TableBody = ({
  children,
  height,
  startIndex,
  itemHeight,
}: {
  children: React.ReactNode;
  height: number;
  startIndex: number;
  itemHeight: number;
}) => {
  return (
    <div
      className="sales-table-container"
      style={{
        height: height,
        position: "relative",
        width: "100%",
        display: "flex",
      }}
    >
      <tbody
        className="sales-table-container"
        style={{
          top: startIndex * itemHeight,
          position: "absolute",
          width: "100%",
        }}
      >
        {children}
      </tbody>
    </div>
  );
};
const Div = ({
  children,
  height,
  startIndex,
  itemHeight,
}: {
  children: React.ReactNode;
  height: number;
  startIndex: number;
  itemHeight: number;
}) => {
  return (
    <div
      className="sales-table-container"
      style={{
        height: height,
        position: "relative",
        width: "100%",
        display: "flex",
      }}
    >
      <div
        style={{
          top: startIndex * itemHeight,
          position: "absolute",
          width: "100%",
        }}
      >
        {children}
      </div>
    </div>
  );
};

function VirtualScroll<T>({
  page,
  totalPages,
  items,
  height,
  itemHeight,
  renderItem,
  onEndReached,
  endReachedThreshold = 200,
  className,
  ScrollContainerComponent,
}: VirtualScrollProps<T>) {
  const [scrollTop, setScrollTop] = useState(0);

  const onScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
    setScrollTop(scrollTop);

    if (
      onEndReached &&
      scrollHeight - scrollTop - clientHeight < endReachedThreshold
    ) {
      onEndReached(page, totalPages);
    }
  };

  const throttleHandler = useRef(throttle(onScroll, THROTTLE_TIME));

  const containerRef = useRef<HTMLDivElement>(null);

  const totalHeight = items.length * itemHeight;
  const viewportItems = Math.ceil(height / itemHeight);

  // Calculate range of visible items
  const startIndex = Math.floor(scrollTop / itemHeight);
  const endIndex = Math.min(startIndex + viewportItems + 1, items.length);

  // Get visible items
  const visibleItems = items.slice(startIndex, endIndex);

  const ScrollWrapper = ScrollContainerComponent === "div" ? Div : TableBody;

  if (typeof window === "undefined") {
    return null;
  }

  if (ScrollContainerComponent !== "div") {
    return (
      <tbody
        ref={containerRef as React.RefObject<HTMLTableSectionElement>}
        onScroll={throttleHandler.current}
        style={{
          height,
          overflow: "auto",
          position: "relative",
          display: "flex",
          width: "100%",
        }}
        className={className}
      >
        <div
          className="sales-table-container"
          style={{
            height: height,
            position: "relative",
            width: "100%",
            display: "flex",
          }}
        >
          <div
            style={{
              top: startIndex * itemHeight,
              position: "absolute",
              width: "100%",
            }}
          >
            {visibleItems.map((item, index) =>
              renderItem(item, startIndex + index)
            )}
          </div>
        </div>
      </tbody>
    );
  }

  return (
    <div
      ref={containerRef as React.RefObject<HTMLDivElement>}
      onScroll={throttleHandler.current}
      style={{
        height,
        overflow: "auto",
        position: "relative",
        display: "flex",
        width: "100%",
      }}
      className={className}
    >
      <ScrollWrapper
        height={totalHeight}
        startIndex={startIndex}
        itemHeight={itemHeight}
      >
        {visibleItems.map((item, index) =>
          renderItem(item, startIndex + index)
        )}
      </ScrollWrapper>
    </div>
  );
}

export default VirtualScroll;
