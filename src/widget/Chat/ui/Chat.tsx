import { MessageList } from "features/MessageList";
import { SendMessage } from "features/SendMessage";

import style from "./Chat.module.css";
import { chatHistory } from "shared/api/getChatHistory/model/chatHistory";
import { useEffect, useState } from "react";

import { getChatHistory } from "shared/api/getChatHistory";
import { useFetching } from "shared/hooks";

const chatIdSave = localStorage.getItem("chatId");
const chatId: string = chatIdSave ? chatIdSave : "";

export const Chat = () => {
  const [chatHistory, setChatHistory] = useState<chatHistory>([]);

  const [fetchChatHistory] = useFetching(() => {
    getChatHistory({ chatId }).then((res) => {
      if (Array.isArray(res)) {
        setChatHistory(res);
      }
    });
  });

  const handleGetChatList = () => {
    fetchChatHistory();
  };

  useEffect(() => {
    fetchChatHistory();
  }, []);

  return (
    <div className={style.chat}>
      <MessageList
        messageList={chatHistory}
        handleGetChatList={handleGetChatList}
      />

      <SendMessage />
    </div>
  );
};
