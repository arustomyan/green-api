import { FC } from "react";
import style from "./Button.module.css";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button: FC<ButtonProps> = ({
  type = "button",
  children,
  onClick,
}) => {
  return (
    <button type={type} className={style.button} onClick={onClick}>
      {children}
    </button>
  );
};
