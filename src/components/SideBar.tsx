"use client";

import React, { useState } from "react";
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
  const [isOpen, setIsOpen] = useState(false);

  const colors = {
    primary: "#115E56",
    secondary: "#CCFBEF",
  };
  const menuItems = [
    { icon: "house", title: "Dashboard", href: "/" },
    { icon: "chat", title: "Chats", href: "/chats" },
    { icon: "chat", title: "Users", href: "/users" },
  ];

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const sidebarClass = isOpen ? "translate-x-0 " : "translate-x-[-300px] ";
  console.log(sidebarClass);
  return (
    <>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        onClick={toggleSidebar}
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>
      <aside
        id="default-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform bg-white border-r border-gray-200 sm:translate-x-0 ${sidebarClass}`}
        aria-label="Sidebar"
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
                className={`justify-start rounded-lg ${
                  active ? "bg-white" : ""
                }`}
                leftIcon={item.icon}
                leftIconColor={active ? colors.primary : colors.secondary}
                onClick={() => setIsOpen(false)}
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
    </>
  );
};

export default SideBar;
