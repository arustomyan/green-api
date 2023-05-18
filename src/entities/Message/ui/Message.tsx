import { FC } from "react";
import style from "./Message.module.css";

interface MessageProps {
  children: string;
  isSender?: boolean;
}

export const Message: FC<MessageProps> = ({ children, isSender = false }) => {
  return (
    <div className={[style.message, isSender && style.sender].join(" ")}>
      <p className={style.text}>{children}</p>
    </div>
  );
};
