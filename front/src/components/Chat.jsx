import { useSocketContext } from "../contexts/SocketContext.jsx";
import useChat from "../zustand/useChat.js";

function Chat({ chat }) {
  const { setSelectedChat, selectedChat } = useChat();
  // TODO: implement the selected recepient visual
  const isSelected = selectedChat?._id === chat._id;

  //  TODO: implement online status, isOnline true if they are
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(chat._id);
  return (
    <div className="p-2" onClick={() => setSelectedChat(chat)}>
      <div className="flex items-center space-x-2">
        <img src={chat.profile} className="rounded-full w-10 h-10" />
        <div>
          <p className={`${isSelected ? "bg-red-950 text-white" : ""}`}>
            {chat.username} {isOnline ? "isONLINEEEE" : ""}
          </p>
          <p>status</p>
        </div>
      </div>
    </div>
  );
}

export default Chat;
