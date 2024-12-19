"use client";

import ModuleNav from "@/app/components/ModuleNav";
import TitleBody from "@/components/TitleBody";
import ChatsTable from "../components/ChatsTable";

export default function Chats() {
  return (
    <div>
      <ModuleNav />
      <section>
        <TitleBody title="Chats">
          <ChatsTable />
        </TitleBody>
      </section>
    </div>
  );
}
