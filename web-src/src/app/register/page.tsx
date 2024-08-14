"use client";

import { useDispatch } from "react-redux";
import Input from "@/UIKit/Inputs/Input";
import { Button } from "@/UIKit/Inputs/Button";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { AppDispatch } from "../../lib/store";
import { loginUser, registerUser } from "@/lib/Slices/userSlice/userSlice";
import { UserType } from "@/types/UserTypes";

const page = () => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  const { handleSubmit, register } = useForm<UserType>({
    defaultValues: {
      name: "",
      surname: "",
      patronymic: "",
      login: "",
      password: "",
      phone: "",
      email: "",
    },
  });

  const formOnSubmitHandler = (data: UserType) => {
    (async () => {
      const query = await dispatch(registerUser(data));
      query.meta.requestStatus === "fulfilled" && router.push("/");
    })();
  };
  return (
    <>
      <div className="border-2 border-gray-400 rounded-md m-3 p-3 w-3/5">
        <p className="form-title">регистрация</p>
        <form
          className="flex flex-col items-center"
          onSubmit={handleSubmit(formOnSubmitHandler)}
        >
          <Input
            className="form_input"
            inputType="text"
            placeholder="name"
            register={register("name")}
          />
          <Input
            className="form_input"
            inputType="text"
            placeholder="surname"
            register={register("surname")}
          />
          <Input
            className="form_input"
            inputType="text"
            placeholder="patronymic"
            register={register("patronymic")}
          />
          <Input
            className="form_input"
            inputType="masked"
            placeholder="phone"
            register={register("phone")}
          />
          <Input
            className="form_input"
            inputType="text"
            placeholder="email"
            register={register("email")}
          />
          <Input
            className="form_input password_input"
            inputType="text"
            placeholder="login"
            register={register("login")}
          />
          <Input
            className="form_input password_input focus:animate-pulse"
            inputType="password"
            placeholder="password"
            register={register("password")}
          />
          <Button
            type="button"
            isEmpty={true}
            className="self-end font-semibold text-sm text-indigo-600 hover:text-indigo-500 hover:underline"
            onClick={() => router.push("/login")}
          >
            уже есть аккаунт
          </Button>
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
