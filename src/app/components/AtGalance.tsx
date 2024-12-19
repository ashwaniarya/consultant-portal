import React from "react";
import TitleBody from "@/components/TitleBody";
import DataCard from "@/components/Card";
import Icon from "@/components/Icon";
import Typography from "@/components/Typography";
import { AtGlanceData, getAtGlance } from "@/network/apiService";
import Button from "@/components/Button";

const FILTERS = ["today", "1 month"];
const AtGlance: React.FC = () => {
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

  const showValue = (loadingValue: string | number, value: string | number) => {
    return loading ? loadingValue : value;
  };

  return (
    <TitleBody
      title="At a glance"
      RightComponent={
        <div>
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            {FILTERS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>

          <Button>
            <Icon type="refresh" size={12} />
          </Button>
        </div>
      }
    >
      <div className="flex flex-col gap-4 overflow-x-auto overflow-y-auto lg:overflow-x-visible lg:overflow-y-visible">
        <div className="flex gap-4 ">
          <DataCard
            title={
              <div className="flex flex-row gap-2 items-center">
                <Icon type="plan-chat" size={12} />
                <Typography variant="caption">CONSULTATIONS</Typography>
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
            className="flex-1 min-w-[250px]"
          />
          <DataCard
            title={
              <div className="flex flex-row gap-2 items-center">
                <Icon type="price-tag" size={12} />
                <Typography variant="caption">ORDERS PLACED</Typography>
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
            className="flex-1 min-w-[250px]"
          />
          <DataCard
            title={
              <div className="flex flex-row gap-2 items-center">
                <Icon type="check-fat" size={12} />
                <Typography variant="caption">CONVERSION</Typography>
              </div>
            }
            value={showValue("--", data?.conversion.value as string) as string}
            type={
              showValue("--", data?.conversion.change.type as string) as string
            }
            percent={
              showValue("--", data?.conversion.change.value as number) as string
            }
            className="flex-1 min-w-[250px]"
          />
        </div>
        <div className="flex gap-4">
          <DataCard
            title={
              <div className="flex flex-row gap-2 items-center">
                <Icon type="coin-stack" size={12} />
                <Typography variant="caption">TOTAL SALES VALUE</Typography>
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
            className="flex-1 min-w-[250px]"
          />
          <DataCard
            title={
              <div className="flex flex-row gap-2 items-center">
                <Icon type="coins" size={12} />
                <Typography variant="caption">AVG ORDER VALUE</Typography>
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
            className="flex-1 min-w-[250px]"
          />
          <DataCard
            title={
              <div className="flex flex-row gap-2 items-center">
                <Icon type="piggy-bank" size={12} />
                <Typography variant="caption">COMMISSION PAID</Typography>
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
            className="flex-1 min-w-[250px]"
          />
        </div>
      </div>
    </TitleBody>
  );
};

export default AtGlance;
