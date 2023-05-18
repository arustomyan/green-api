import { FC } from "react";
import style from "./SendMessage.module.css";

export const SendMessage: FC = () => {
  return (
    <div className={style.root}>
      <form className={style.form}>
        <textarea className={style.input}></textarea>
        <button type="submit"></button>
      </form>
    </div>
  );
};
