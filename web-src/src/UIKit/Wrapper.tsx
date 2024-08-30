import React, { ReactNode, useContext } from "react";

type props = {
  className?: string;
  itemKey?: string;
  children: ReactNode;
};

export const Wrapper: React.FC<props> = ({ children, className, itemKey }) => {
  // const 
  return (
    <div
      key={itemKey}
      className={`wrapper ${className}`}
    >
      {children}
    </div>
  );
};
