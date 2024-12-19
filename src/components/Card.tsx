import React from "react";
import Typography from "./Typography";
import Icon from "./Icon";

interface BaseCardProps {
  children?: React.ReactNode;
  titleClassName?: string;
  title: string | React.ReactNode;
  className?: string;
}

interface DataCardProps extends BaseCardProps {
  title: string | React.ReactNode;
  value: string;
  type: string;
  percent: string;
  className?: string;
}

export const BaseCard: React.FC<BaseCardProps> = ({
  children,
  title,
  titleClassName,
  className,
}) => {
  return (
    <div
      className={`rounded-[20px] p-2 sm:p-4 md:p-6 border border-medium shadow-medium ${className} `}
    >
      {typeof title === "string" ? (
        <Typography variant="h4" className={titleClassName}>
          {title}
        </Typography>
      ) : (
        title
      )}

      {children}
    </div>
  );
};

const DataCard: React.FC<DataCardProps> = ({
  title,
  value,
  type,
  percent,
  className,
  ...rest
}) => {
  // TODO figure out how to use tailwind colors

  const color = type === "increase" ? "#15B79F" : "#F04438";
  const textColor = type === "increase" ? "text-textUp" : "text-textDrop";
  return (
    <BaseCard title={title} className={className} {...rest}>
      <div className="flex flex-row gap-1 sm:gap-2 mt-1 sm:mt-2">
        <Typography variant="h4">{value}</Typography>
      </div>
      <div className="flex items-center gap-1 sm:gap-2 mt-1 sm:mt-2">
        {type !== "--" && (
          <Icon
            type={type === "increase" ? "trending-up" : "trending-down"}
            color={color}
          />
        )}
        <Typography variant="body-2" className={textColor}>
          {percent}%
        </Typography>
        <Typography variant="body-2" className="text-textCaption">
          {type}
        </Typography>
      </div>
    </BaseCard>
  );
};

export default DataCard;
