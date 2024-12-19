import Typography from "@/components/Typography";

interface TitleBodyProps {
  title?: string;
  children?: React.ReactNode;
  RightComponent?: React.ReactNode;
  className?: string;
}

const TitleBody: React.FC<TitleBodyProps> = ({
  title = "Title",
  children,
  RightComponent,
  className,
}) => {
  return (
    <div className={`flex flex-col gap-2 md:gap-4 ${className}`}>
      <div className="flex justify-between items-center">
        <Typography variant="h4">{title}</Typography>
        {RightComponent}
      </div>
      {children}
    </div>
  );
};

export default TitleBody;
