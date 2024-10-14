"use client";
import { useTheme } from "next-themes";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <label className="inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          value=""
          className="sr-only peer"
          checked={theme === "dark"}
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        />
        <div className="remove-focus relative w-11 h-6 focus:outline-none bg-dark-text shadow-none peer-focus:outline-none peer-focus:ring-4  dark:peer-focus:to-black rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:border-white after:borde after:h-5 after:w-5 after:transition-all after:-mt-[1px] peer-checked:bg-dark-text dark:border-white border"></div>
      </label>
    </div>
  );
};

export default ThemeSwitcher;
