"use client";

import ModuleNav from "@/app/components/ModuleNav";
import AtGalance from "@/app/components/AtGalance";
import Section from "@/components/Section";
import { useState } from "react";
import Insights from "./components/Insights";
import Orders from "./components/Orders";

const filterOptions = [
  { value: "today", label: "Today" },
  { value: "7 days", label: "7 days" },
  { value: "1 month", label: "1 month" },
];

export default function Home() {
  const [filter, setFilter] = useState("7 days");
  const [isConsultationsLoading, setIsConsultationsLoading] = useState(false);
  const handleFilterChange = (filter: string) => {
    setFilter(filter);
  };

  return (
    <div>
      <ModuleNav />
      <Section className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 rounded-lg p-2 sm:p-4 border border-gray-200 shadow-sm">
          <AtGalance
            onFilterChange={handleFilterChange}
            filterOptions={filterOptions}
          />
          <Insights filter={filter} />
          <Orders />
        </div>
      </Section>
    </div>
  );
}
