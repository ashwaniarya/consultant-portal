"use client";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useEffect } from "react";

interface ChartProps {
  options: unknown;
}

const Chart: React.FC<ChartProps> = ({ options }) => {
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

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default Chart;
