//page.tsx
"use client";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../lib/store";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getCookie } from "@/lib/Slices/userSlice/userSlice";

const Home = () => {
  const router = useRouter();
  const currentUser = useSelector((state: RootState) => state.user.currentUser);
  // const dispatch = useDispatch<AppDispatch>();

  // useEffect(() => {
  //   (async () => {
  //     const query = await dispatch(getCookie());
  //     console.log(query);
  //     !query.payload && router.push("/login");
  //   })();
  // }, [dispatch]);

  const loginClickHandler = () => {
    !currentUser && router.push("/login");
  };
  return (
    <>
      <div className="dark">
        <button onClick={loginClickHandler} className="dark:text-dark">
          login
        </button>
      </div>
    </>
  );
};
export default Home;
