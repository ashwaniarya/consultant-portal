import type { Config } from "tailwindcss";
import flowbite from "flowbite/plugin";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      textShadow: {
        small: "0 0 10px rgba(0, 0, 0, 0.8)",
        medium: "0 0 1px rgba(0, 0, 0, 0.6)",
      },
      boxShadow: {
        small: "0 0 10px rgba(0, 0, 0, 0.6)",
        medium: "var(--card-shadow-medium)",
      },
      borderColor: {
        medium: "var(--card-border-color)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        secondary: "var(--secondary)",
        primary: "var(--primary)",
        primaryLight: "var(--primary-light)",
        primaryDark: "var(--primary-dark)",
        textCaption: "var(--caption-gray)",
        textCaptionLight: "var(--caption-gray-light)",
        textUp: "var(--text-up)",
        textDrop: "var(--text-drop)",
        tableHeader: "var(--text-table-header)",
      },
    },
  },
  plugins: [flowbite],
} satisfies Config;
