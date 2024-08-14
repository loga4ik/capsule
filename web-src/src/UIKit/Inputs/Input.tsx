import { InputMask } from "@react-input/mask";
import React, {
  ChangeEventHandler,
  ReactNode,
  forwardRef,
  useContext,
} from "react";
import { UseFormRegisterReturn } from "react-hook-form";

type Props = {
  inputType: "text" | "password" | "masked";
  className?: string;
  placeholder?: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  children?: ReactNode;
  register?: UseFormRegisterReturn;
};

const Input = forwardRef<HTMLInputElement, Props>(
  ({ inputType, className, placeholder, register, value, onChange }, ref) => {
    const theme = "dark";

    if (inputType === "masked") {
      return (
        <InputMask
          mask="+7(___)-___-__-__"
          replacement={{ _: /\d/ }}
          placeholder={placeholder}
          className={`${className} border-2 mx-2 my-1 rounded-sm`}
          {...register}
        />
      );
    }
    return (
      <input
        ref={ref}
        className={`${className} border-2 mx-2 my-1 rounded-sm`}
        type={inputType}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...register}
      />
    );
  }
);

export default Input;
