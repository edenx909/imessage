import Chat from "./Chat";
import useGetChats from "../hooks/useGetChats";

function Chats() {
  const { loading, chats } = useGetChats();

  return (
    <div className="w-1/2">
      {loading ? <p>Loading</p> : ""}
      {chats.map((chat) => (
        <Chat key={chat._id} chat={chat} />
      ))}
    </div>
  );
}

export default Chats;
