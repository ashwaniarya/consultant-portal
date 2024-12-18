import React from "react";
import Typography from "./Typography";

interface BaseCardProps {
  children: React.ReactNode;
  titleClassName?: string;
  title: string;
  className?: string;
}

interface DataCardProps {
  title: string;
  value: string;
  type: "increase" | "decrease";
  percent: string;
}

export const BaseCard: React.FC<BaseCardProps> = ({
  children,
  title,
  titleClassName,
  className,
}) => {
  return (
    <div
      className={`rounded-lg p-4 border border-gray-200 shadow-sm ${className}`}
    >
      <Typography variant="h4" className={titleClassName}>
        {title}
      </Typography>

      {children}
    </div>
  );
};

const DataCard: React.FC<DataCardProps> = ({ title, value, type, percent }) => {
  return (
    <BaseCard title={title}>
      <Typography variant="h4">{value}</Typography>
      <div className="flex items-center gap-2">
        <p className="text-green-500">{percent}</p>
        <p className="text-green-500">{type}</p>
      </div>
    </BaseCard>
  );
};

export default DataCard;
