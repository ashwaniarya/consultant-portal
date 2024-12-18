"use client";

import React from "react";
import BaseButton from "./Button";
import Typography from "./Typography";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "@/components/Image";
interface SideBarProps {
  className?: string;
}

const SideBar: React.FC<SideBarProps> = ({ className = "" }) => {
  const pathname = usePathname();

  const colors = {
    primary: "#115E56",
    secondary: "#CCFBEF",
  };
  const menuItems = [
    { icon: "house", title: "Dashboard", href: "/" },
    { icon: "chat", title: "Chats", href: "/chats" },
    { icon: "chat", title: "Users", href: "/users" },
  ];

  return (
    <aside
      className={`w-64 h-screen bg-white border-r border-gray-200 p-4 bg-primary  ${className}`}
    >
      <nav className="flex flex-col gap-2">
        <div className="flex flex-col gap-2">
          <Link href="/">
            <Image src="/logo.png" alt="Wingman" width={40} height={40} />
          </Link>
        </div>
        {menuItems.map((item, index) => {
          const active = pathname === item.href;
          return (
            <BaseButton
              key={index}
              variant="text"
              as="a"
              href={item.href}
              className={`justify-start rounded-lg ${active ? "bg-white" : ""}`}
              leftIcon={item.icon}
              leftIconColor={active ? colors.primary : colors.secondary}
            >
              <Typography
                variant="body"
                className={active ? "text-foreground" : "text-gray-500"}
              >
                {item.title}
              </Typography>
            </BaseButton>
          );
        })}
      </nav>
    </aside>
  );
};

export default SideBar;
