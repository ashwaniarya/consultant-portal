import React from "react";
import Icon, { IconType } from "./Icon";
import Link from "next/link";

interface BaseButtonProps {
  variant?: "pill" | "text";
  children: React.ReactNode;
  leftIcon?: string;
  rightIcon?: string;
  className?: string;
  disabled?: boolean;
  containerClassName?: string;
  leftIconClassName?: string;
  leftIconColor?: string;
  rightIconClassName?: string;
  rightIconColor?: string;
  as?: "button" | "a";
  href?: string;
  onClick?: () => void;
}

const BaseButton: React.FC<BaseButtonProps> = ({
  variant = "pill",
  children,
  leftIcon,
  leftIconClassName,
  leftIconColor,
  rightIcon,
  rightIconClassName,
  rightIconColor,
  className = "",
  disabled = false,
  as = "button",
  href,
  onClick,
  ...rest
}) => {
  const baseStyles = "flex items-center justify-center gap-2 transition-colors";

  const variantStyles = {
    pill: "px-4 py-2 rounded-full text-background hover:opacity-90",
    text: "px-2 py-1 text-foreground hover:bg-gray-100",
  };

  const Component = as === "a" ? Link : "button";

  return (
    <Component
      href={href as string}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      } ${className}`}
      onClick={onClick}
      {...rest}
    >
      {leftIcon && (
        <Icon
          type={leftIcon as IconType}
          className={leftIconClassName}
          color={leftIconColor}
        />
      )}
      {children}
      {rightIcon && (
        <Icon
          type={rightIcon as IconType}
          className={rightIconClassName}
          color={rightIconColor}
        />
      )}
    </Component>
  );
};

export default BaseButton;
