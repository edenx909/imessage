import useChat from "../zustand/useChat.js";

function Chat({ chat }) {
  console.log(chat);
  const { setSelectedChat } = useChat();
  return (
    <div className="p-2" onClick={() => setSelectedChat(chat)}>
      <div className="flex items-center space-x-2">
        <img src={chat.profile} className="rounded-full w-10 h-10" />
        <div>
          <p>{chat.username}</p>
          <p>status</p>
        </div>
      </div>
    </div>
  );
}

export default Chat;
