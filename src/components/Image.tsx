import React from "react";
import Image from "next/image";

interface CustomImageProps extends React.ComponentProps<typeof Image> {
  className?: string;
  alt: string;
}

const CustomImage: React.FC<CustomImageProps> = ({
  className = "",
  alt,
  ...props
}) => {
  return <Image alt={alt} className={`object-cover ${className}`} {...props} />;
};

export default CustomImage;
