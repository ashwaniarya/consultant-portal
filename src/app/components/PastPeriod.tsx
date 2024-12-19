"use client";

import Chart from "@/components/Chart";
import { useState } from "react";
import { getPastPeriodData, PastPeriodData } from "@/network/apiService";
import { useEffect } from "react";
import GraphLoading from "@/components/GraphLoading";

interface PastPeriodProps {
  title?: string;
  orderClosed?: number[];
  consultations?: number[];
}

const PastPeriod: React.FC<PastPeriodProps> = ({
  title = "",
  orderClosed = [120, 30],
  consultations = [100, 200],
}) => {
  const options = {
    title: {
      text: title,
    },
    credits: {
      enabled: false, // Disable the Highcharts watermark
    },
    xAxis: {
      categories: ["This week", "Last week"],
      gridLineDashStyle: "Dash",
    },
    yAxis: [
      {
        title: {
          text: "CONSULTATIONS",
          enabled: false,
        },
        opposite: false, // This axis will be on the left
      },
    ],
    series: [
      {
        name: "Consultations",
        type: "column",
        data: consultations,
        color: "#CCFBEF",
        legendSymbol: "lineMarker",
      },
      {
        name: "Orders closed",
        type: "column",
        data: orderClosed,
        color: "#134E48",
        legendSymbol: "lineMarker",
      },
    ],
  };

  return <Chart options={options} />;
};

interface PastPeriodContainerProps {
  filter?: string;
}

const PastPeriodContainer = ({
  filter = "7 days",
}: PastPeriodContainerProps) => {
  const [isDataLoading, setIsDataLoading] = useState(true);
  const [data, setData] = useState<PastPeriodData | null>(null);

  useEffect(() => {
    setIsDataLoading(true);
    getPastPeriodData(filter).then((response) => {
      setData(response.data);
      setIsDataLoading(false);
    });
  }, []);

  return (
    <div className="mt-6">
      {isDataLoading ? (
        <GraphLoading />
      ) : (
        <PastPeriod
          title={filter}
          orderClosed={data?.orderClosed}
          consultations={data?.consultations}
        />
      )}
    </div>
  );
};

export default PastPeriodContainer;
