import React from "react";

interface TypographyProps {
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "body"
    | "caption"
    | "mono";
  children: React.ReactNode;
  className?: string;
}

const Typography: React.FC<TypographyProps> = ({
  variant = "body",
  children,
  className = "",
}) => {
  const baseStyles = "text-foreground";

  const variantStyles = {
    h1: "text-4xl font-bold tracking-tight",
    h2: "text-3xl font-semibold tracking-tight",
    h3: "text-2xl font-semibold tracking-tight",
    h4: "text-xl font-semibold tracking-tight",
    h5: "text-lg font-semibold tracking-tight",
    h6: "text-base font-semibold tracking-tight",
    body: "text-base leading-7",
    caption: "text-sm text-gray-500",
    mono: "font-mono text-sm",
  };

  return (
    <h4 className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      {children}
    </h4>
  );
};

export default Typography;
