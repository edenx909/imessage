import { format } from "date-fns";

import { useAuthContext } from "../../contexts/AuthContext";
import useChat from "../../zustand/useChat";

function Message({ message }) {
  const { authorizedUser } = useAuthContext();
  const { selectedChat } = useChat();

  // check, true if the logged in user sent the message
  const fromUser = message.senderId === authorizedUser._id;

  // TODO: align chat according to the user

  const profile = fromUser ? authorizedUser.profile : selectedChat?.profile;
  const bgColor = fromUser ? "bg-[#027BFE]" : "";

  // is true for new messsage add animation for this
  // const notifyClass= message.notify ? NOTIFY : ''

  return (
    <div className="h-full">
      <div className="flex items-center space-y-2">
        <img src={profile} className="h-5 w-5 rounded-full" />
        <div>
          <p className={`rounded-full px-3 py-1 ${bgColor} text-white`}>
            {message.message}
          </p>

          <p className="text-xs">
            {format(new Date(message.createdAt), "dd/MM, h:mm a")}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Message;
