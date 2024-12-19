"use client";

import ModuleNav from "@/app/components/ModuleNav";
import TitleBody from "@/components/TitleBody";
// import ChatsTable from "../components/ChatsTable";
import OrderTable from "../components/OrdersTable";
import Section from "@/components/Section";

export default function Chats() {
  return (
    <div>
      <ModuleNav />
      <Section className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 rounded-lg p-4 border border-gray-200 shadow-sm">
          <TitleBody title="All Chats">
            <OrderTable />
          </TitleBody>
        </div>
      </Section>
    </div>
  );
}
