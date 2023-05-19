import { FC, KeyboardEventHandler, useState } from "react";
import { ButtonSend } from "shared/ui";
import { sendTextMessage } from "shared/api/sendTextMessage";
import { useAppSelector, useFetching } from "shared/hooks";
import style from "./SendMessage.module.css";
import { selectSessionData } from "entities/Session";

interface SendMessageProps {
  chatId: string;
}

export const SendMessage: FC<SendMessageProps> = ({ chatId }) => {
  const [input, setInput] = useState<string>("");
  const { idInstance, ApiTokenInstance } = useAppSelector(selectSessionData);

  const [sendMessage, isSend] = useFetching(() => {
    sendTextMessage({ message: input, chatId, idInstance, ApiTokenInstance });
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
