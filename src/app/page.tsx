"use client";

import DataCard from "@/components/Card";
import Typography from "@/components/Typography";
import { BaseCard } from "@/components/Card";
import Icon from "@/components/Icon";
import Table from "@/components/Table";
import ModuleNav from "@/app/components/ModuleNav";
import Consulations from "@/app/components/Consulations";
import PastPeriod from "@/app/components/PastPeriod";

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
                  title={
                    <div className="flex flex-row gap-2 items-center">
                      <Icon type="plan-chat" size={12} />
                      <Typography variant="caption">CONSULTATIONS</Typography>
                    </div>
                  }
                  value="24"
                  type="increase"
                  percent={"100 %"}
                  className="flex-1"
                />
                <DataCard
                  title={
                    <div className="flex flex-row gap-2 items-center">
                      <Icon type="price-tag" size={12} />
                      <Typography variant="caption">ORDERS PLACED</Typography>
                    </div>
                  }
                  value="24"
                  type="decrease"
                  percent={"100 %"}
                  className="flex-1"
                />
                <DataCard
                  title={
                    <div className="flex flex-row gap-2 items-center">
                      <Icon type="check-fat" size={12} />
                      <Typography variant="caption">CONVERSION</Typography>
                    </div>
                  }
                  value="24"
                  type="decrease"
                  percent={"100 %"}
                  className="flex-1"
                />
              </div>
              <div className="flex gap-4">
                <DataCard
                  title={
                    <div className="flex flex-row gap-2 items-center">
                      <Icon type="coin-stack" size={12} />
                      <Typography variant="caption">
                        TOTAL SALES VALUE
                      </Typography>
                    </div>
                  }
                  value="$ 24,000"
                  type="increase"
                  percent={"100 %"}
                  className="flex-1"
                />
                <DataCard
                  title={
                    <div className="flex flex-row gap-2 items-center">
                      <Icon type="coins" size={12} />
                      <Typography variant="caption">AVG ORDER VALUE</Typography>
                    </div>
                  }
                  value="24"
                  type="increase"
                  percent={"100 %"}
                  className="flex-1"
                />
                <DataCard
                  title={
                    <div className="flex flex-row gap-2 items-center">
                      <Icon type="piggy-bank" size={12} />
                      <Typography variant="caption">COMMISSION PAID</Typography>
                    </div>
                  }
                  value="$ 240"
                  type="increase"
                  percent={"100 %"}
                  className="flex-1"
                />
              </div>
            </div>
          </TitleBody>
          <TitleBody title="Insights">
            <div className="flex flex-col gap-4">
              <div className="flex gap-4">
                <BaseCard
                  title={
                    <div className="flex flex-row gap-2 items-center">
                      <Icon type="plan-chat" size={12} />
                      <Typography variant="caption">CONSULTATIONS</Typography>
                    </div>
                  }
                  className="flex-[2] "
                >
                  <Consulations />
                </BaseCard>
                <BaseCard
                  title={
                    <div className="flex flex-row gap-2 items-center">
                      <Icon type="plan-chat" size={12} />
                      <Typography variant="caption">VS PAST PERIOD</Typography>
                    </div>
                  }
                  className="flex-[1] "
                >
                  <PastPeriod />
                </BaseCard>
                <BaseCard
                  title={
                    <div className="flex flex-row gap-2 items-center">
                      <Icon type="plan-chat" size={12} />
                      <Typography variant="caption">FORCASTING</Typography>
                    </div>
                  }
                  titleClassName="text-white"
                  className="bg-red-500 flex-[1]"
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
