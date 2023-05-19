import { MessageList } from "features/MessageList";
import { SendMessage } from "features/SendMessage";

import style from "./Chat.module.css";
import { chatHistory } from "shared/api/getChatHistory/model/chatHistory";
import { useEffect, useState } from "react";

import { getChatHistory } from "shared/api/getChatHistory";
import { useAppSelector, useFetching } from "shared/hooks";
import { selectSessionData } from "entities/Session";
import { selectIsChat } from "entities/ChatListEl";
import { EmptyChat } from "shared/ui";

export const Chat = () => {
  const [chatHistory, setChatHistory] = useState<chatHistory>([]);
  const { idInstance, ApiTokenInstance } = useAppSelector(selectSessionData);
  const chatId = useAppSelector(selectIsChat);

  const [fetchChatHistory, isLoading] = useFetching(() => {
    getChatHistory({ chatId, idInstance, ApiTokenInstance }).then((res) => {
      if (Array.isArray(res)) {
        setChatHistory(res);
      }
    });
  });

  const handleGetChatList = () => {
    fetchChatHistory();
  };

  useEffect(() => {
    if (chatId !== "") {
      fetchChatHistory();
    }
  }, [chatId]);

  return (
    <div className={style.chat}>
      {isLoading ? (
        <p className="">загрузка</p>
      ) : chatId === "" ? (
        <EmptyChat />
      ) : (
        <>
          <MessageList
            messageList={chatHistory}
            handleGetChatList={handleGetChatList}
          />
          <SendMessage chatId={chatId} />
        </>
      )}
    </div>
  );
};
