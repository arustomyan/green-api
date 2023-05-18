import { FC } from "react";
import style from "./SendMessage.module.css";
import { ButtonSend } from "shared/ui";

export const SendMessage: FC = () => {
  return (
    <div className={style.root}>
      <form className={style.form}>
        <textarea className={style.input}></textarea>
        <ButtonSend isSend modifiers={style.button} />
      </form>
    </div>
  );
};
