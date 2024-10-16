"use client";
import React from "react";

interface Props {
  size: string;
  children: React.ReactNode;
  uppercase?: boolean;
}

const Heading: React.FC<Props> = ({ size, uppercase = false, children }) => {
  return (
    <p
      className={`${size} ${
        uppercase && "uppercase"
      } font-bold text-darkmode animate-fade-up animate-duration-[2000ms] animate-ease-in-out`}
    >
      {children}
    </p>
  );
};

export default Heading;
