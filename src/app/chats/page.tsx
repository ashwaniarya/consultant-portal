"use client";

import Typography from "@/components/Typography";
import Table from "@/components/Table";
import ModuleNav from "@/app/components/ModuleNav";

interface TitleBodyProps {
  title?: string;
  children?: React.ReactNode;
  RightComponent?: React.ReactNode;
}

const TitleBody: React.FC<TitleBodyProps> = ({
  title = "Title",
  children,
  RightComponent,
}) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <Typography variant="h4">{title}</Typography>
        {RightComponent}
      </div>
      {children}
    </div>
  );
};

export default function Chats() {
  return (
    <div>
      <ModuleNav />
      <section>
        <TitleBody title="Title" RightComponent={<div>Button</div>}></TitleBody>
        <TitleBody title="Insights"></TitleBody>
        <TitleBody title="Orders">
          <Table />
        </TitleBody>
      </section>
    </div>
  );
}
