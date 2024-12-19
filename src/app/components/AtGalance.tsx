import React from "react";
import TitleBody from "@/components/TitleBody";
import DataCard from "@/components/Card";
import Icon, { IconType } from "@/components/Icon";
import Typography from "@/components/Typography";
import { AtGlanceData, getAtGlance } from "@/network/apiService";

interface AtGlanceProps {
  onFilterChange: (filter: string) => void;
  filterOptions: { value: string; label: string }[];
}

type MetricData = {
  value: string;
  change?: {
    type: string;
    value: string;
  };
};

const AtGlance: React.FC<AtGlanceProps> = ({
  onFilterChange,
  filterOptions,
}) => {
  const [filter, setFilter] = React.useState<string>("today");
  const [data, setData] = React.useState<AtGlanceData | null>(null);
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const { data: glanceData } = await getAtGlance(filter);
      setData(glanceData || null);
      setLoading(false);
    };
    fetchData();
  }, [filter]);

  const handleFilterChange = (value: string) => {
    setFilter(value);
    onFilterChange(value);
  };

  const renderMetricCard = (
    title: string,
    iconType: string,
    metric: MetricData,
    className: string
  ) => (
    <DataCard
      title={
        <div className="flex flex-row gap-2 items-center">
          <Icon type={iconType as IconType} size={12} />
          <Typography variant="overline" className="text-textCaption">
            {title}
          </Typography>
        </div>
      }
      value={loading ? "--" : (metric?.value as string)}
      type={loading ? "--" : (metric?.change?.type as string)}
      percent={loading ? "--" : (metric?.change?.value as string)}
      className={`flex-1 min-w-[200px] md:min-w-[250px] ${className}`}
    />
  );

  const metrics = [
    {
      title: "CONSULTATIONS",
      icon: "plan-chat",
      data: data?.consultations,
    },
    {
      title: "ORDERS PLACED",
      icon: "price-tag",
      data: data?.orders_placed,
    },
    {
      title: "CONVERSION",
      icon: "check-fat",
      data: data?.conversion,
    },
    {
      title: "TOTAL SALES VALUE",
      icon: "coin-stack",
      data: data?.total_sales_value,
    },
    {
      title: "AVG ORDER VALUE",
      icon: "coins",
      data: data?.avg_order_value,
    },
    {
      title: "COMMISSION PAID",
      icon: "piggy-bank",
      data: data?.commission_paid,
    },
  ];

  return (
    <TitleBody
      title="At a glance"
      RightComponent={
        <select
          value={filter}
          onChange={(e) => handleFilterChange(e.target.value)}
          className="rounded-lg border border-[#E0E0E0]"
        >
          {filterOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      }
    >
      <div className="flex flex-col gap-2 md:gap-4 overflow-x-auto overflow-y-auto lg:overflow-x-visible lg:overflow-y-visible mt-2 md:mt-4">
        <div className="flex gap-2 md:gap-4">
          {metrics.slice(0, 3).map((metric) => (
            <React.Fragment key={metric.title}>
              {renderMetricCard(
                metric.title,
                metric.icon,
                metric.data as unknown as MetricData,
                ""
              )}
            </React.Fragment>
          ))}
        </div>
        <div className="flex gap-2 md:gap-4">
          {metrics.slice(3).map((metric) => (
            <React.Fragment key={metric.title}>
              {renderMetricCard(
                metric.title,
                metric.icon,
                metric.data as unknown as MetricData,
                ""
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </TitleBody>
  );
};

export default AtGlance;
