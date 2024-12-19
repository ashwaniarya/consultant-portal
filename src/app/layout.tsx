import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/SideBar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Wingman - Portal",
  description: "A portal for Wingman to manage their consultations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased overflow-x-hidden sm:overflow-x-visible`}
      >
        <SideBar />
        <div className="flex-1 sm:ml-[60px] ml-0 mt-10 sm:mt-0">{children}</div>
      </body>
    </html>
  );
}
