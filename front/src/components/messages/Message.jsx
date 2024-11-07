import { useAuthContext } from "../../contexts/AuthContext";
import useChat from "../../zustand/useChat";

function Message({ message }) {
  const { authorizedUser } = useAuthContext();
  const { selectedChat } = useChat();
  const fromUser = message.senderId === authorizedUser._id;

  const chatAlignment = fromUser ? "ChatRight" : "ChatLeft";
  const profile = fromUser ? authorizedUser.profile : selectedChat?.profile;
  const bgColor = fromUser ? "bg-blue-500" : "";

  return (
    <div className={`${chatAlignment}`}>
      <div>
        <img src={profile} className="rounded-full w-10 h-10" />
      </div>
      <div className={`${bgColor}`}>
        {message.message} <span>{message.createdAt}</span>
      </div>
    </div>
  );
}

export default Message;
