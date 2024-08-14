import React, { BaseSyntheticEvent, ReactNode, useContext } from "react";

type props = {
  className?: string;
  changableIconClass?: string;
  onClick?: (
    e: React.MouseEvent<HTMLButtonElement> | BaseSyntheticEvent
  ) => void;
  children?: ReactNode;
  type: "submit" | "button";
  isEmpty?: boolean;
};

export const Button: React.FC<props> = ({
  className,
  changableIconClass,
  onClick,
  children,
  type,
  isEmpty,
}) => {
  return (
    <>
      <button
        type={type ? type : "button"}
        className={`${className} ${
          !isEmpty && "border rounded-sm border-gray-400 m-2 bg-gray-200 w-3/5"
        }`}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
};
