import { FC } from "react";
import style from "./Button.module.css";

interface ButtonProps {
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
  className?: string;
}

export const Button: FC<ButtonProps> = ({
  type = "button",
  children,
  onClick,
  className = "",
}) => {
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    onClick(e);
  };

  return (
    <button
      type={type}
      className={[className, style.button].join(" ")}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};
