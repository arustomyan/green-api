import { FC } from "react";
import { useDispatch } from "react-redux";
import { addActiveChat, selectIsChat } from "../model/slice";
import defaultImg from "shared/assets/defaultAvatar.jpg";
import style from "./ChatListEl.module.css";
import { useAppSelector } from "shared/hooks";

interface ChatListElProps {
  userName: string;
  lastMessage?: string;
  imgURL?: string;
  id: string;
}

export const ChatListEl: FC<ChatListElProps> = ({
  userName,
  lastMessage,
  imgURL = defaultImg,
  id,
}) => {
  const chatId = useAppSelector(selectIsChat);

  const dispatch = useDispatch();

  const handleSelectChat = () => {
    dispatch(addActiveChat({ idActiveChat: id }));
  };

  return (
    <div
      className={[style.root, chatId === id && style.rootActive].join(" ")}
      onClick={handleSelectChat}
    >
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
