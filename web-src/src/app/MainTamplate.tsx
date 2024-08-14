"use client";

import "./main.css";
import { ThemeSwitcher } from "@/UIKit/themeSwicher/ThemeSwitcher";
import { useThemeContext } from "@/Hooks/useThemeContext";
import { useContext, useEffect } from "react";
import { ThemeContext } from "@/Context/ThemeContext";
const MainTamplate = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useContext(ThemeContext);
  useEffect(() => {
    console.log(theme);
  }, [theme]);
  return (
    <>
      <header>
        {/* <ThemeSwitcher /> */}
      </header>
      <div className={`${theme === "dark" && "dark"} flex justify-center`}>
        {children}
      </div>
    </>
  );
};
export default MainTamplate;
