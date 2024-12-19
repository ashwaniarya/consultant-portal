"use client";

import DataCard from "@/components/Card";
import Typography from "@/components/Typography";
import { BaseCard } from "@/components/Card";
import Icon from "@/components/Icon";
import Table from "@/components/Table";
import ModuleNav from "@/app/components/ModuleNav";
import Consulations from "@/app/components/Consulations";
import PastPeriod from "@/app/components/PastPeriod";
import OrdersTable from "./components/OrdersTable";
import TitleBody from "@/components/TitleBody";
import AtGalance from "@/app/components/AtGalance";
export default function Home() {
  return (
    <div>
      <ModuleNav />
      <section className="flex flex-col gap-4 p-4">
        <div className="flex flex-col gap-4 rounded-lg p-4 border border-gray-200 shadow-sm">
          <AtGalance />
          <TitleBody title="Insights">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-4 sm:flex-row">
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
            <div className="overflow-x-auto">
              <OrdersTable />
            </div>
          </TitleBody>
        </div>
      </section>
    </div>
  );
}
