import React from "react";
import Typography from "./Typography";
import Icon from "./Icon";
import Link from "next/link";

interface BaseButtonProps {
  variant?: "pill" | "text";
  children: React.ReactNode;
  leftIcon?: string;
  rightIcon?: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  containerClassName?: string;
  leftIconClassName?: string;
  leftIconColor?: string;
  rightIconClassName?: string;
  rightIconColor?: string;
  as?: "button" | "a";
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
  onClick,
  className = "",
  disabled = false,
  as = "button",
}) => {
  const baseStyles = "flex items-center justify-center gap-2 transition-colors";

  const variantStyles = {
    pill: "px-4 py-2 rounded-full text-background hover:opacity-90",
    text: "px-2 py-1 text-foreground hover:bg-gray-100",
  };

  const Component = as === "a" ? Link : "button";

  return (
    <Component
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      } ${className}`}
    >
      {leftIcon && (
        <Icon
          type={leftIcon}
          className={leftIconClassName}
          color={leftIconColor}
        />
      )}
      <Typography
        variant="body"
        className={variant === "pill" ? "text-background" : ""}
      >
        {children}
      </Typography>
      {rightIcon && (
        <Icon
          type={rightIcon}
          className={rightIconClassName}
          color={rightIconColor}
        />
      )}
    </Component>
  );
};

export default BaseButton;
