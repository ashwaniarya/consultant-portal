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
    | "body-2"
    | "caption"
    | "mono"
    | "overline";
  children: React.ReactNode;
  className?: string;
}

const Typography: React.FC<TypographyProps> = ({
  variant = "body",
  children,
  className = "",
  ...rest
}) => {
  const baseStyles = "text-foreground font-inter";

  const variantStyles = {
    h1: "text-[32px] md:text-[56px] font-normal tracking-tight leading-[42px] sm:leading-[68px]",
    h2: "text-2xl sm:text-3xl font-semibold tracking-tight",
    h3: "text-xl sm:text-2xl font-semibold tracking-tight",
    h4: "text-[24px] sm:text-[32px] font-medium tracking-tight leading-[32px] sm:leading-[38px]",
    h5: "text-lg sm:text-xl font-medium tracking-tight",
    h6: "text-[16px] sm:text-[18px] font-normal tracking-tight",
    body: "text-sm sm:text-base leading-6 sm:leading-7 font-size-16 sm:font-size-18",
    "body-2":
      "text-sm sm:text-base leading-6 sm:leading-7 text-[12px] sm:text-[14px]",
    caption:
      "font-normal text-[10px] sm:text-[12px] leading-6 sm:leading-7 tracking-wide",
    mono: "font-mono text-xs sm:text-sm",
    overline:
      "text-[10px] sm:text-[12px] font-semibold leading-6 sm:leading-7 tracking-wide",
  };

  const _finalClassName = `${baseStyles} ${variantStyles[variant]} ${className}`;
  if (variant === "caption") {
  }
  return (
    <h4 className={_finalClassName} {...rest}>
      {children}
    </h4>
  );
};

export default Typography;
