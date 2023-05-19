import { FC } from "react";
import { useDispatch } from "react-redux";
import { addActiveChat } from "../model/slice";
import defaultImg from "shared/assets/defaultAvatar.jpg";
import style from "./ChatListEl.module.css";

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
  const dispatch = useDispatch();

  const handleSelectChat = () => {
    dispatch(addActiveChat({ idActiveChat: id }));
  };

  return (
    <div className={style.root} onClick={handleSelectChat}>
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
