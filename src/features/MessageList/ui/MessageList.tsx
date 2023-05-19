import { Message } from "entities/Message";
import style from "./MessageList.module.css";

import { FC, useEffect, useRef } from "react";
import { Button } from "shared/ui/Button/Button";

interface MessageListProps {
  messageList: any[];
  handleGetChatList: () => void;
}

export const MessageList: FC<MessageListProps> = ({
  messageList,
  handleGetChatList,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  console.log(ref);

  useEffect(() => {
    if (ref !== null) {
      console.log("kmkmkm");
      ref.current?.scrollBy(0, 999999);
    }
  }, [messageList]);
  return (
    <div className={style.chat} ref={ref}>
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

      <Button onClick={handleGetChatList} className={style.button}>
        обновить чат
      </Button>
    </div>
  );
};
