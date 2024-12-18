"use client";

import DataCard from "@/components/Card";
import Typography from "@/components/Typography";
import { BaseCard } from "@/components/Card";
import Icon from "@/components/Icon";
import Table from "@/components/Table";
import ModuleNav from "@/app/components/ModuleNav";
interface TitleBodyProps {
  title?: string;
  children?: React.ReactNode;
  RightComponent?: React.ReactNode;
}

const TitleBody: React.FC<TitleBodyProps> = ({
  title = "Title",
  children,
  RightComponent,
}) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <Typography variant="h4">{title}</Typography>
        {RightComponent}
      </div>
      {children}
    </div>
  );
};

export default function Home() {
  return (
    <div>
      <ModuleNav />
      <section className="flex flex-col gap-4 p-4">
        <div className="flex flex-col gap-4 rounded-lg p-4 border border-gray-200 shadow-sm">
          <TitleBody title="At a glance" RightComponent={<div>Button</div>}>
            <div className="flex flex-col gap-4">
              <div className="flex gap-4">
                <DataCard
                  title="CONSULTINGS"
                  value="24"
                  type="increase"
                  percent={"100 %"}
                />
                <DataCard
                  title="CONSULTINGS"
                  value="24"
                  type="increase"
                  percent={"100 %"}
                />
                <DataCard
                  title="CONSULTINGS"
                  value="24"
                  type="increase"
                  percent={"100 %"}
                />
              </div>
              <div className="flex gap-4">
                <DataCard
                  title="CONSULTINGS"
                  value="24"
                  type="increase"
                  percent={"100 %"}
                />
                <DataCard
                  title="CONSULTINGS"
                  value="24"
                  type="increase"
                  percent={"100 %"}
                />
                <DataCard
                  title="CONSULTINGS"
                  value="24"
                  type="increase"
                  percent={"100 %"}
                />
              </div>
            </div>
          </TitleBody>
          <TitleBody title="Insights">
            <div className="flex flex-col gap-4">
              <div className="flex gap-4">
                <BaseCard
                  title="FORCASTING"
                  titleClassName="text-white"
                  className="bg-red-500"
                >
                  <div>
                    <div className="flex gap-2 ">
                      <Typography variant="h1">+15%</Typography>
                      <Icon type="trending-up" />
                    </div>
                    <Typography variant="body" className="text-white">
                      forecasted increase in your sales closed by the end of the
                      current month
                    </Typography>
                  </div>
                  <div>
                    <div className="flex gap-2 ">
                      <Typography variant="h1">+20%</Typography>
                      <Icon type="trending-up" />
                    </div>
                    <Typography variant="body" className="text-white">
                      forecasted increase in your sales closed by the end of the
                      current month
                    </Typography>
                  </div>
                </BaseCard>
              </div>
            </div>
          </TitleBody>
          <TitleBody title="Orders">
            <Table />
          </TitleBody>
        </div>
      </section>
    </div>
  );
}
