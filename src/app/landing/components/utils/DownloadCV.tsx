"use client";
import React from "react";
import { IoMdDownload } from "react-icons/io";

const DownloadCV = () => {
  const handleDownload = () => {
    window.open(
      "https://dixonalbi.s3.amazonaws.com/Dixon+Albites+-+CV+-+2024.pdf",
      "_blank"
    );
  };

  return (
    <button
      onClick={handleDownload}
      className={`items-center justify-between fixed z-10 bottom-6 right-6 bg-primary animate-pulse text-white rounded-full w-16 h-16 shadow-lg transition-transform transform hover:scale-110 focus:outline-none`}
    >
      <p className="text-xs">CV</p>
      <IoMdDownload className="text-4xl mx-auto" />
    </button>
  );
};

export default DownloadCV;
