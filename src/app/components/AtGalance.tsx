import React from "react";
import TitleBody from "@/components/TitleBody";
import DataCard from "@/components/Card";
import Icon from "@/components/Icon";
import Typography from "@/components/Typography";
import { AtGlanceData, getAtGlance } from "@/network/apiService";

interface AtGlanceProps {
  onFilterChange: (filter: string) => void;
  filterOptions: { value: string; label: string }[];
}

const AtGlance: React.FC<AtGlanceProps> = ({
  onFilterChange,
  filterOptions,
}) => {
  const [filter, setFilter] = React.useState<string>("today");
  const [data, setData] = React.useState<AtGlanceData | null>(null);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    setLoading(true);
    setError(null);
    const fetchData = async () => {
      const { data: glanceData, error } = await getAtGlance(filter);
      setLoading(false);
      setError(error);
      if (glanceData) {
        setData(glanceData);
      }
    };
    fetchData();
  }, [filter]);

  const handleFilterChange = (filter: string) => {
    setFilter(filter);
    onFilterChange(filter);
  };

  const showValue = (loadingValue: string | number, value: string | number) => {
    return loading ? loadingValue : value;
  };

  return (
    <TitleBody
      title="At a glance"
      RightComponent={
        <div>
          <select
            value={filter}
            onChange={(e) => handleFilterChange(e.target.value)}
            className="rounded-lg border border-[#E0E0E0]"
          >
            {filterOptions.map((option) => (
              <option
                key={option.value}
                value={option.value}
                onClick={() => onFilterChange(option.value)}
                className="border border-[#E0E0E0] p-2 rounded-lg"
              >
                {option.label}
              </option>
            ))}
          </select>
        </div>
      }
    >
      <div className="flex flex-col gap-2 md:gap-4 overflow-x-auto overflow-y-auto lg:overflow-x-visible lg:overflow-y-visible mt-2 md:mt-4">
        <div className="flex gap-2 md:gap-4 ">
          <DataCard
            title={
              <div className="flex flex-row gap-2 items-center">
                <Icon type="plan-chat" size={12} />
                <Typography variant="overline" className="text-textCaption">
                  CONSULTATIONS
                </Typography>
              </div>
            }
            value={
              showValue("--", data?.consultations.value as string) as string
            }
            type={
              showValue(
                "--",
                data?.consultations.change.type as string
              ) as string
            }
            percent={
              showValue(
                "--",
                data?.consultations.change.value as number
              ) as string
            }
            className="flex-1 min-w-[200px] md:min-w-[250px]"
          />
          <DataCard
            title={
              <div className="flex flex-row gap-2 items-center">
                <Icon type="price-tag" size={12} />
                <Typography variant="overline" className="text-textCaption">
                  ORDERS PLACED
                </Typography>
              </div>
            }
            value={
              showValue("--", data?.orders_placed.value as string) as string
            }
            type={
              showValue(
                "--",
                data?.orders_placed.change.type as string
              ) as string
            }
            percent={
              showValue(
                "--",
                data?.orders_placed.change.value as number
              ) as string
            }
            className="flex-1 min-w-[200px] md:min-w-[250px]"
          />
          <DataCard
            title={
              <div className="flex flex-row gap-2 items-center">
                <Icon type="check-fat" size={12} />
                <Typography variant="overline" className="text-textCaption">
                  CONVERSION
                </Typography>
              </div>
            }
            value={showValue("--", data?.conversion.value as string) as string}
            type={
              showValue("--", data?.conversion.change.type as string) as string
            }
            percent={
              showValue("--", data?.conversion.change.value as number) as string
            }
            className="flex-1 min-w-[200px] md:min-w-[2 50px]"
          />
        </div>
        <div className="flex gap-2 md:gap-4">
          <DataCard
            title={
              <div className="flex flex-row gap-2 items-center">
                <Icon type="coin-stack" size={12} />
                <Typography variant="overline" className="text-textCaption">
                  TOTAL SALES VALUE
                </Typography>
              </div>
            }
            value={
              showValue("--", data?.total_sales_value.value as string) as string
            }
            type={
              showValue(
                "--",
                data?.total_sales_value.change.type as string
              ) as string
            }
            percent={
              showValue(
                "--",
                data?.total_sales_value.change.value as number
              ) as string
            }
            className="flex-1 min-w-[200px] md:min-w-[250px]"
          />
          <DataCard
            title={
              <div className="flex flex-row gap-2 items-center">
                <Icon type="coins" size={12} />
                <Typography variant="overline" className="text-textCaption">
                  AVG ORDER VALUE
                </Typography>
              </div>
            }
            value={
              showValue("--", data?.avg_order_value.value as string) as string
            }
            type={
              showValue(
                "--",
                data?.avg_order_value.change.type as string
              ) as string
            }
            percent={
              showValue(
                "--",
                data?.avg_order_value.change.value as number
              ) as string
            }
            className="flex-1 min-w-[200px] md:min-w-[250px]"
          />
          <DataCard
            title={
              <div className="flex flex-row gap-2 items-center">
                <Icon type="piggy-bank" size={12} />
                <Typography variant="overline" className="text-textCaption">
                  COMMISSION PAID
                </Typography>
              </div>
            }
            value={
              showValue("--", data?.commission_paid.value as string) as string
            }
            type={
              showValue(
                "--",
                data?.commission_paid.change.type as string
              ) as string
            }
            percent={
              showValue(
                "--",
                data?.commission_paid.change.value as number
              ) as string
            }
            className="flex-1 min-w-[200px] md:min-w-[250px]"
          />
        </div>
      </div>
    </TitleBody>
  );
};

export default AtGlance;
