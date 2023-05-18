import { Workspace } from "shared/ui";
import { Chat } from "widget/Chat";
import { ChatList } from "widget/ChatList";
import { Header } from "widget/Header";

export const ChatPage = () => {
  return (
    <>
      <Header />
      <Workspace>
        <ChatList />
        <Chat />
      </Workspace>
    </>
  );
};
