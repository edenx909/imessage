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
    <div className="relative flex h-full flex-1 flex-col justify-between rounded-md bg-[#1F1F1F]">
      {!selectedChat ? (
        <div className="sticky top-0 flex flex-col items-center justify-center rounded-t-md bg-[#383435] p-5">
          <img
            src={authorizedUser.profile}
            className="h-10 w-10 rounded-full"
          />
          <p className="pt-2">
            Welcome {authorizedUser.fullname}, Start a Conversation!
          </p>
        </div>
      ) : (
        <>
          <div className="sticky top-0 z-20 flex items-center justify-center rounded-t-md bg-[#383435] p-5">
            {/* user name & profile */}
            <div className="flex flex-col items-center justify-center">
              <img
                src={selectedChat.profile}
                className="h-10 w-10 rounded-full"
              />
              <p className="pt-2">{selectedChat.username}</p>
            </div>
            {/* messages */}
          </div>
          <div className="relative flex flex-1 flex-col justify-end overflow-hidden rounded-b-md">
            <div className="overflow-y-auto">
              <Messages />
            </div>
            <MessageInput />
          </div>
        </>
      )}
    </div>
  );
}

export default MessagesContainer;
