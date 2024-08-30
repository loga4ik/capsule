"use client";

import "./main.css";
import { ThemeSwitcher } from "@/UIKit/themeSwicher/ThemeSwitcher";
import { useThemeContext } from "@/Hooks/useThemeContext";
import { useContext, useEffect } from "react";
import { ThemeContext } from "@/Context/ThemeContext";
import { AppDispatch, RootState } from "@/lib/store";
import { useDispatch, useSelector } from "react-redux";
import { getCookie, setAllUserDefault } from "@/lib/Slices/userSlice/userSlice";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/UIKit/Inputs/Button";
const MainTamplate = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const { theme } = useContext(ThemeContext);
  const dispatch = useDispatch<AppDispatch>();
  const currentUser = useSelector((state: RootState) => state.user.currentUser);
  const pathname = usePathname();

  // if (pathname === "/login" || pathname === "/register") {
  //   return { children };
  // }

  const LogOut = () => {
    dispatch(setAllUserDefault());
    router.push("/login");
  };

  useEffect(() => {
    (async () => {
      const query = await dispatch(getCookie());
      console.log(query);

      !query.payload && router.push("/login");
    })();
  }, [theme]);
  return (
    <>
      <header className="flex justify-between">
        <div className="m-2">вы: {currentUser?.login}</div>
        {currentUser?.login &&
          pathname !== "/login" &&
          pathname !== "/register" && (
            <Button
              type="button"
              className={"form_btn-redirect"}
              onClick={LogOut}
            >
              Выйти
            </Button>
          )}
      </header>
      <div
        className={`${
          theme === "dark" && "dark"
        } flex justify-center font-sans`}
      >
        {children}
      </div>
    </>
  );
};
export default MainTamplate;
