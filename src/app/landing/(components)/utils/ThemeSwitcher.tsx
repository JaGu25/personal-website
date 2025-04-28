"use client";
import { useTheme } from "next-themes";
import { useEffect } from "react";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";

const ThemeSwitcher = () => {
  const { theme, setTheme, systemTheme } = useTheme();

  useEffect(() => {
    if (theme) return setTheme(theme);
    setTheme(systemTheme!);
  }, [systemTheme]);

  return (
    <label className="inline-flex items-center cursor-pointer">
      <div className="mr-1">
        {theme === "dark" ? (
          <MdOutlineDarkMode
            onClick={() => setTheme("light")}
            className=" text-white"
            size={25}
          />
        ) : (
          <MdOutlineLightMode
            onClick={() => setTheme("dark")}
            className="text-dark-text"
            size={25}
          />
        )}
      </div>
    </label>
  );
};

export default ThemeSwitcher;
