import Chat from "./Chat";
import useGetChats from "../hooks/useGetChats";

function Chats() {
  const { loading, chats } = useGetChats();

  return (
    <div className="flex flex-col items-start justify-center">
      {loading ? <p>Loading</p> : ""}
      {chats.map((chat) => (
        <Chat key={chat._id} chat={chat} />
      ))}
    </div>
  );
}

export default Chats;
