import React from "react";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ children, className = "" }) => {
  return (
    <section
      className={`flex gap-4 py-[12px] px-[12px] sm:px-[16px] sm:py-[16px] md:px-[40px] md:py-[24px] ${className}`}
    >
      {children}
    </section>
  );
};

export default Section;
