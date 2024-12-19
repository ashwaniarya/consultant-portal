"use client";

import { usePathname } from "next/navigation";
import ModuleNav from "@/app/components/ModuleNav";
import SalesTable from "../components/SalesTable";
import TitleBody from "@/components/TitleBody";
import Section from "@/components/Section";

export default function Sales() {
  const pathname = usePathname();
  return (
    <div>
      <ModuleNav />
      <Section className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 rounded-lg p-4 border border-gray-200 shadow-sm">
          <TitleBody title="Sales">
            <div className=" overflow-x-auto">
              <SalesTable />
            </div>
          </TitleBody>
        </div>
      </Section>
    </div>
  );
}
