//page.tsx
"use client";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../lib/store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { getCookie } from "@/lib/Slices/userSlice/userSlice";

const Home = () => {
  const router = useRouter();
  const currentUser = useSelector((state: RootState) => state.user.currentUser);
  // const dispatch = useDispatch<AppDispatch>();

  // useEffect(() => {
  //   (async () => {
  //     const query = await dispatch(getCookie());
  //     !query.payload && router.push("/login");
  //   })();
  // }, [dispatch]);

  const loginClickHandler = () => {
    // !currentUser && router.push("/login");
    router.push("/login");
  };
  return (
    <>
      <div className="dark">
        <p>{currentUser && currentUser.login}</p>
        <button onClick={loginClickHandler} className="dark:text-dark">
          login
        </button>
      </div>
    </>
  );
};
export default Home;
