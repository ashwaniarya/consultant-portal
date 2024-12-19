"use client";

import Chart from "@/components/Chart";
import GraphLoading from "@/components/GraphLoading";
import { ConsultationsData } from "@/network/apiService";
import { getConsultationsData } from "@/network/apiService";
import { useEffect, useState } from "react";

interface ConsulationsProps {
  title?: string;
  categories?: string[];
  consultations?: {
    answered: number[];
    incoming: number[];
  };
  expertsOnline?: number[];
}

const Consulations: React.FC<ConsulationsProps> = ({
  title = "",
  categories = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  consultations = {
    answered: [10, 20, 10, 40, 30, 60, 70],
    incoming: [],
  },
  expertsOnline = [22, 33, 22, 55, 44, 7, 89],
}) => {
  const options = {
    title: {
      text: title,
    },
    credits: {
      enabled: false,
    },
    xAxis: {
      categories,
      gridLineDashStyle: "Dash",
    },
    yAxis: [
      {
        title: {
          text: "CONSULTATIONS",
          style: {
            fontSize: "10px", // adjust the font size as needed
          },
        },
        opposite: false,
      },
      {
        min: 0,
        title: {
          text: "EXPERTS ONLINE",
          style: {
            fontSize: "10px", // adjust the font size as needed
          },
        },
        opposite: true,
      },
    ],
    series: [
      {
        name: "Incoming",
        type: "spline",
        data: consultations.incoming,
        color: "#8A94A6",
        marker: "",
        legendSymbol: "lineMarker",
      },
      {
        type: "spline",
        data: consultations.answered,
        color: "#15B79F",
        marker: "",
        yAxis: 0,
        name: "Answered",
      },
      {
        name: "",
        type: "spline",
        data: [4, 4, 20, 1, 0, 7, 6],
        color: "#eee",
        marker: "",
        dashStyle: "Dash",
        yAxis: 1,
        legendSymbol: "lineMarker",
        showInLegend: false,
      },
      {
        name: "Experts online",
        type: "column",
        data: expertsOnline,
        color: "#FFF3C6",
        legendSymbol: "lineMarker",
      },
    ],
  };

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
        .highcharts-grid-line {
            stroke-dasharray: 5, 5;
            stroke: #000;
            stroke: #eee;
        }

        .highcharts-axis-line {
            stroke-dasharray: 5, 5;
            stroke: #000;
            stroke: #eee;
        }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return <Chart options={options} />;
};

const ConsulationsContainer = ({ filter }: { filter: string }) => {
  const [isDataLoading, setIsDataLoading] = useState(true);
  const [data, setData] = useState<ConsultationsData | null>(null);

  useEffect(() => {
    setIsDataLoading(true);
    getConsultationsData(filter).then((response) => {
      setData(response.data);
      setIsDataLoading(false);
    });
  }, [filter]);

  return (
    <div className="mt-6 min-h-[200px]">
      {isDataLoading ? (
        <GraphLoading />
      ) : (
        <Consulations
          categories={data?.categories}
          consultations={data?.consultations}
          expertsOnline={data?.expertsOnline}
        />
      )}
    </div>
  );
};

export default ConsulationsContainer;
