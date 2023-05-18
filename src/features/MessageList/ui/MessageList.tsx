import { Message } from "entities/Message";
import style from "./MessageList.module.css";

import { FC } from "react";
import { Button } from "shared/ui/Button/Button";

interface MessageListProps {
  messageList: any[];
  handleGetChatList: () => void;
}

export const MessageList: FC<MessageListProps> = ({
  messageList,
  handleGetChatList,
}) => {
  return (
    <div className={style.chat}>
      {messageList
        .reverse()
        .map((message) => (
          <Message
            isSender={message.type === "outgoing"}
            key={message.idMessage}
          >
            {message.textMessage}
          </Message>
        ))
        .reverse()}

      <Button onClick={handleGetChatList}>обновить чат</Button>
    </div>
  );
};
