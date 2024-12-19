"use client";

import DataCard from "@/components/Card";
import Typography from "@/components/Typography";
import { BaseCard } from "@/components/Card";
import Icon from "@/components/Icon";
import Table from "@/components/Table";
import BaseButton from "@/components/Button";
import { usePathname } from "next/navigation";
import ModuleNav from "@/app/components/ModuleNav";
import SalesTable from "../components/SalesTable";
import TitleBody from "@/components/TitleBody";

export default function Sales() {
  const pathname = usePathname();
  return (
    <div>
      <ModuleNav />
      <section>
        <TitleBody title="Sales">
          <SalesTable />
        </TitleBody>
      </section>
    </div>
  );
}
