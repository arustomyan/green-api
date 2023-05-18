type message = {
  type: "incoming" | "outgoing";
  idMessage: string;
  timestamp?: number;
  typeMessage?: string;
  chatId?: string;
  textMessage: string;
  statusMessage?: "read" | string;
  sendByApi?: boolean;
  senderId?: string;
  senderName?: string;
};

export default message;
