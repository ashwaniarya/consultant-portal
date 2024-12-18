"use client";

import Chart from "@/components/Chart";
import { useEffect } from "react";

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
        },
        opposite: false,
      },
      {
        min: 0,
        title: {
          text: "EXPERTS ONLINE",
        },
        opposite: true,
      },
    ],
    series: [
      {
        type: "spline",
        data: consultations.answered,
        color: "#0f0",
        marker: "",
        yAxis: 0,
        name: "Answered",
      },
      {
        name: "Incoming",
        type: "spline",
        data: consultations.incoming,
        color: "#eee",
        marker: "",
        legendSymbol: "lineMarker",
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
        color: "yellow",
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

export default Consulations;
