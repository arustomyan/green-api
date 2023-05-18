import { Message } from "entities/Message";
import style from "./MessageList.module.css";

import { FC } from "react";

interface MessageListProps {
  messageList: any[];
}

export const MessageList: FC<MessageListProps> = ({ messageList }) => {
  return (
    <div className={style.chat}>
      {messageList.map((message) => (
        <Message isSender={message.type === "outgoing"} key={message.idMessage}>
          {message.textMessage}
        </Message>
      ))}
    </div>
  );
};
