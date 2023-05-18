import message from "../../../components/model/message";
import { MessageList } from "features/MessageList";
import { SendMessage } from "features/SendMessage";

import style from "./Chat.module.css";

const messageList: message[] = [
  {
    type: "incoming",
    idMessage: "3ACBF68BEE9A23F7F3D9",
    typeMessage: "textMessage",
    textMessage: "Привет",
  },
  {
    type: "outgoing",
    idMessage: "3A5E5E228875FE877228",
    typeMessage: "textMessage",
    textMessage: "Привет",
  },
];

export const Chat = () => {
  return (
    <div className={style.chat}>
      <MessageList messageList={messageList} />
      <SendMessage />
    </div>
  );
};
