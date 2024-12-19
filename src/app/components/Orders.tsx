import React from "react";
import TitleBody from "@/components/TitleBody";
import OrdersTable from "./OrdersTable";

const Orders: React.FC = () => {
  return (
    <TitleBody title="Orders" className="mt-2 md:mt-4">
      <div className="overflow-x-auto mt-2 md:mt-4">
        <OrdersTable />
      </div>
    </TitleBody>
  );
};

export default Orders;
