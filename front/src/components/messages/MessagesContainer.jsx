import { useEffect } from "react";
import useChat from "../../zustand/useChat.js";
import MessageInput from "./MessageInput.jsx";
import Messages from "./Messages.jsx";
import { useAuthContext } from "../../contexts/AuthContext.jsx";

function MessagesContainer() {
  const { selectedChat, setSelectedChat } = useChat();
  const { authorizedUser } = useAuthContext();

  useEffect(() => {
    [];
    // unmounts, set to null
    return () => setSelectedChat(null);
  }, [setSelectedChat]);
  return (
    <div className="flex flex-col overflow-y-auto bg-[#1F1F1F]">
      {!selectedChat ? (
        <div className="flex flex-col items-center space-y-3 rounded-md bg-[#3E3A3B] p-5">
          <img
            src={authorizedUser.profile}
            className="h-10 w-10 rounded-full"
          />
          <p>Welcome {authorizedUser.fullname}, Start a Conversation!</p>
        </div>
      ) : (
        <div className="flex flex-col">
          <div className="flex items-center text-center">
            <img
              src={selectedChat.profile}
              className="h-10 w-10 rounded-full"
            />
            {selectedChat.username}
          </div>
          <div className="flex flex-col">
            <Messages />
            <MessageInput />
          </div>
        </div>
      )}
    </div>
  );
}

export default MessagesContainer;
