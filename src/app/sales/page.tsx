"use client";

import DataCard from "@/components/Card";
import Typography from "@/components/Typography";
import { BaseCard } from "@/components/Card";
import Icon from "@/components/Icon";
import Table from "@/components/Table";
import BaseButton from "@/components/Button";
import { usePathname } from "next/navigation";
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

export default function Sales() {
  const pathname = usePathname();
  return (
    <div>
      <section className="flex items-center gap-2">
        {[
          { icon: "pie-slice", title: "Summary", href: "/" },
          { icon: "price-tag", title: "Sales", href: "/sales" },
          { icon: "chat", title: "Chats", href: "/chats" },
        ].map((item, index) => {
          const active = pathname === item.href;
          return (
            <div key={index} className="flex items-center gap-2">
              <BaseButton
                variant="pill"
                as="a"
                href={item.href}
                className={`${active ? "bg-secondary" : "bg-transparent"}`}
                leftIcon={item.icon}
                leftIconColor={active ? "black" : "#8A94A6"}
              >
                <Typography
                  variant="body"
                  className={`${active ? "text-foreground" : "text-gray-500"}`}
                >
                  {item.title}
                </Typography>
              </BaseButton>
            </div>
          );
        })}
      </section>
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
