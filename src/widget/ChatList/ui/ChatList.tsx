import { FC, useEffect, useState } from "react";
import style from "./ChatList.module.css";
import { ChatListEl } from "entities/ChatListEl";
import { useFetching } from "shared/hooks";
import { getChatList } from "shared/api/getChatList";
import { chatList } from "shared/api/getChatList/model/chatList";
import { Button } from "shared/ui/Button/Button";
import { getNotifications } from "shared/api/getNotifications";

export const ChatList: FC = () => {
  const [chatList, setChatList] = useState<chatList>([]);
  const [fetchChatList, isLoading] = useFetching(() => {
    getChatList().then((res) => {
      if (Array.isArray(res)) {
        setChatList(res);
      }
    });
  });

  const [fetchNotifications] = useFetching(() => {
    getNotifications().then((res) => {
      console.log("уведомления: ", res);
    });
  });

  useEffect(() => {
    fetchChatList();
  }, []);

  const handleGetNotifications = () => {
    fetchNotifications();
  };

  return (
    <div className={style.root}>
      <ul className={style.list}>
        {isLoading ? (
          <p className="">загружаем</p>
        ) : (
          chatList.map((chat) => (
            <ChatListEl userName={chat.id} key={chat.id} />
          ))
        )}
      </ul>
      <Button onClick={handleGetNotifications} className={style.button}>
        Проверить уведомления
      </Button>
    </div>
  );
};
