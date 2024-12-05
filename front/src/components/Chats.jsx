import Chat from "./Chat";
import { Loading } from "./macros/Loading";
import useGetChats from "../hooks/useGetChats";

function Chats() {
  const { loading, chats } = useGetChats();

  return (
    <div className="flex flex-col items-start justify-center overflow-y-auto rounded-md">
      {loading ? <p>{Loading()}</p> : ""}
      {chats.map((chat) => (
        <Chat key={chat._id} chat={chat} />
      ))}
    </div>
  );
}

export default Chats;
