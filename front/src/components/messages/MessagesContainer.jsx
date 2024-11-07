import { useEffect } from "react";
import useChat from "../../zustand/useChat.js";
import MessageInput from "./MessageInput.jsx";
import Messages from "./Messages.jsx";
import { useAuthContext } from "../../contexts/AuthContext.jsx";

function MessagesContainer() {
  const { selectedChat, setSelectedChat } = useChat();

  const { authorizedUser } = useAuthContext();

  useEffect(() => {
    // unmounts, set to null
    return () => setSelectedChat(null);
  }, [setSelectedChat]);
  return (
    <div className="flex  flex-col">
      {!selectedChat ? (
        <p>welcome {authorizedUser.fullname}, start chatting</p>
      ) : (
        <div className="flex flex-col ">
          <div className="text-center p-5 border">
            <span>To</span>
            <span>{selectedChat.username}</span>
          </div>
          <div>
            <Messages />
            <MessageInput />
          </div>
        </div>
      )}
    </div>
  );
}

export default MessagesContainer;
