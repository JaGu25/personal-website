"use client";
import { useTheme } from "next-themes";
import { useEffect, useLayoutEffect } from "react";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";

const ThemeSwitcher = () => {
  const { theme, setTheme, systemTheme } = useTheme();

  useEffect(() => {
    setTheme(systemTheme!);
  }, [systemTheme]);

  return (
    <label className="inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only peer flex"
        checked={theme === "dark"}
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        readOnly
      />
      <div className="mr-1">
        <MdOutlineDarkMode className="hidden dark:block  text-white" />
        <MdOutlineLightMode className="block dark:hidden text-dark-text" />
      </div>
      <div className="remove-focus relative w-10 h-5 focus:outline-none bg-dark-text shadow-none peer-focus:outline-none peer-focus:ring-4  dark:peer-focus:to-black rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:border-white after:borde after:h-4 after:w-4 after:transition-all after:-mt-[1px] peer-checked:bg-dark-text dark:border-white border"></div>
    </label>
  );
};

export default ThemeSwitcher;
