import { FC } from "react";
import style from "./ChatListEl.module.css";
import defaultImg from "shared/assets/defaultAvatar.jpg";

interface ChatListElProps {
  userName: string;
  lastMessage?: string;
  imgURL?: string;
}

export const ChatListEl: FC<ChatListElProps> = ({
  userName,
  lastMessage,
  imgURL = defaultImg,
}) => {
  return (
    <div className={style.root}>
      <div className={style.avatar}>
        <img src={imgURL} alt={`photo ${userName}`} className={style.img} />
      </div>
      <div className={style.info}>
        <span className={style.name}>{userName}</span>
        <div className={style.message}>{lastMessage}</div>
      </div>
    </div>
  );
};
