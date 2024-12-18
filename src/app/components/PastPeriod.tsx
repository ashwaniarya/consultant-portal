"use client";

import Chart from "@/components/Chart";

interface PastPeriodProps {
  title?: string;
}

const PastPeriod: React.FC<PastPeriodProps> = ({ title = "" }) => {
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
        },
        opposite: false, // This axis will be on the left
      },
      {
        min: 0,
        title: {
          text: "EXPERTS ONLINE",
        },
        opposite: true, // This axis will be on the right
      },
    ],
    series: [
      {
        name: "Consultations",
        type: "column",
        data: [20, 30],
        color: "beige",
        legendSymbol: "lineMarker",
      },
      {
        name: "Orders closed",
        type: "column",
        data: [22, 33],
        color: "green",
        legendSymbol: "lineMarker",
      },
    ],
  };

  return <Chart options={options} />;
};

export default PastPeriod;
