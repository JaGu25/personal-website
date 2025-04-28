"use client";
import React from "react";

interface Props {
  size: string;
  children: React.ReactNode;
  uppercase?: boolean;
  colorFull?: boolean;
}

const Heading: React.FC<Props> = ({
  size,
  uppercase = false,
  colorFull = false,
  children,
}) => {
  const stylesColorfull: React.CSSProperties | undefined = colorFull
    ? {
        background: colorFull
          ? "linear-gradient(90deg, #FF7D61 0%, #FFD12B 100%)"
          : "unset",
        backgroundClip: "text",
        color: "transparent",
      }
    : undefined;

  return (
    <p
      style={stylesColorfull}
      className={`${size} ${
        uppercase && "uppercase"
      } font-bold text-darkmode animate-fade-up animate-duration-[2000ms] animate-ease-in-out`}
    >
      {children}
    </p>
  );
};

export default Heading;
