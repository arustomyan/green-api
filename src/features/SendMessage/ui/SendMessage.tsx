import { FC, KeyboardEventHandler, useState } from "react";
import { ButtonSend } from "shared/ui";
import { sendTextMessage } from "shared/api/sendTextMessage";
import { useFetching } from "shared/hooks";
import style from "./SendMessage.module.css";

interface SendMessageProps {
  chatId: string;
}

export const SendMessage: FC<SendMessageProps> = ({ chatId }) => {
  const [input, setInput] = useState<string>("");

  const [sendMessage, isSend] = useFetching(() => {
    sendTextMessage({ message: input, chatId });
  });

  const handleSendMessage = () => {
    if (input !== "") {
      sendMessage(input);
      setInput("");
    }
  };

  const handleKeyDown: KeyboardEventHandler<HTMLTextAreaElement> = (e) => {
    if (e.altKey === true && e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div className={style.root}>
      <form className={style.form}>
        <textarea
          className={style.input}
          value={input}
          placeholder="Введите сообщение"
          onChange={(e) => {
            setInput(e.target.value);
          }}
          onKeyDown={handleKeyDown}
        ></textarea>
        <ButtonSend
          isSend={isSend}
          modifiers={style.button}
          onClick={handleSendMessage}
        />
      </form>
    </div>
  );
};
