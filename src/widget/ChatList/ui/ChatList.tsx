import { FC, useEffect, useState } from "react";
import style from "./ChatList.module.css";
import { ChatListEl } from "entities/ChatListEl";
import { useFetching } from "shared/hooks";
import { getChatList } from "shared/api/getChatList";
import { chatList } from "shared/api/getChatList/model/chatList";

export const ChatList: FC = () => {
  const [chatList, setChatList] = useState<chatList>([]);
  const [fetchChatList, isLoading, error] = useFetching(() => {
    getChatList().then((res) => {
      if (Array.isArray(res)) {
        setChatList(res);
      }
    });
  });

  useEffect(() => {
    fetchChatList();
  }, []);

  return (
    <ul className={style.root}>
      {isLoading ? (
        <p className="">загружаем</p>
      ) : (
        chatList.map((chat) => <ChatListEl userName={chat.id} key={chat.id} />)
      )}
    </ul>
  );
};
