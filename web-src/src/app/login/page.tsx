"use client";

import { useDispatch, useSelector } from "react-redux";
import Input from "@/UIKit/Inputs/Input";
import { Button } from "@/UIKit/Inputs/Button";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { UserLoginData } from "@/types/types";
import { AppDispatch } from "../../lib/store";
import { loginUser } from "@/lib/Slices/userSlice/userSlice";
import { cookies } from "next/headers";



const page = () => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  const { handleSubmit, register } = useForm<UserLoginData>({
    defaultValues: {
      login: "",
      password: "",
    },
  });

  const formOnSubmitHandler = (data: UserLoginData) => {
    (async () => {
      const query = await dispatch(loginUser(data));
      if (query.payload) {
        console.log(query.payload);
      }
      // cookies().set('login',query.payload)
      // query.meta.requestStatus === "fulfilled" && router.push("/");
    })();
  };
  return (
    <>
      <div className="bg-white form-page">
        <p className="form-title">войти</p>
        <form
          className="form-block_form"
          onSubmit={handleSubmit(formOnSubmitHandler)}
        >
          <Input
            className="form_input"
            inputType="text"
            placeholder="login"
            register={register("login")}
          />
          <Input
            className="form_input password_input"
            inputType="password"
            placeholder="password"
            register={register("password")}
          />
          <Button
            className={"form_submit_btn"}
            type="submit"
            onClick={handleSubmit(formOnSubmitHandler)}
          >
            отправить
          </Button>
        </form>
      </div>
    </>
  );
};

export default page;
