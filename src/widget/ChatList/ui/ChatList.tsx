import { FC } from "react";
import style from "./ChatList.module.css";
import { ChatListEl } from "entities/ChatListEl";

export const ChatList: FC = () => {
  return (
    <ul className={style.root}>
      <ChatListEl userName="Пользователь" />
    </ul>
  );
};
