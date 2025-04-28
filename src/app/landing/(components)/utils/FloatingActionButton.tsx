"use client";
import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const FloatingActionButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const handleScroll = () => setIsVisible(window.scrollY > 300);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`${
        isVisible ? "flex" : "hidden"
      } items-center justify-between fixed z-10 bottom-24 right-6 bg-primary animate-bounce text-white rounded-full w-16 h-16 shadow-lg transition-transform transform hover:scale-110 focus:outline-none`}
    >
      <FaArrowUp className="text-4xl mx-auto" />
    </button>
  );
};

export default FloatingActionButton;
