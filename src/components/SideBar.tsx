"use client";

import React, { useState, useEffect, useRef } from "react";
import Typography from "./Typography";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "@/components/Image";
import Icon, { IconType } from "./Icon";

interface SideBarProps {
  className?: string;
}

const SideBar: React.FC<SideBarProps> = ({}) => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node) &&
        window.innerWidth < 640 // Only for mobile screens
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const sidebarClass = isOpen ? "translate-x-0 " : "translate-x-[-300px] ";
  return (
    <>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="fixed top-0 left-0 w-[calc(100%)] inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 bg-white"
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
        ref={sidebarRef}
        id="default-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 sm:w-[60px] h-screen transition-all duration-300 hover:w-64 bg-primary border-r border-gray-200 sm:translate-x-0 ${sidebarClass}`}
        aria-label="Sidebar"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <nav className="flex flex-col gap-2 p-3">
          <div className="flex flex-col gap-2">
            <Link href="/">
              <Image src="/logo.png" alt="Wingman" width={34} height={34} />
            </Link>
          </div>
          <div className="px-1">
            <div className="h-[1px] bg-primaryDark my-2 px-2"></div>
          </div>
          {menuItems.map((item, index) => {
            const active = pathname === item.href;
            return (
              <Link
                key={index}
                href={item.href}
                className={`flex items-center gap-2 px-[8px] py-[4px] rounded-lg justify-between overflow-hidden hover:bg-gray-400 box-border ${
                  active ? "bg-white" : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                <div className="flex flex-row gap-4 items-center">
                  <Icon
                    type={item.icon as IconType}
                    size={20}
                    color={active ? colors.primary : colors.secondary}
                    className=""
                  />
                  <div className="flex-1 opacity-1 border-1 border-red-500">
                    <Typography
                      variant="body"
                      className={active ? "text-primary" : "text-white"}
                    >
                      {item.title}
                    </Typography>
                  </div>
                </div>
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
};

export default SideBar;
