import { formatDistanceToNow, format } from "date-fns";
import { useState } from "react";
import { motion } from "framer-motion";

import { useAuthContext } from "../../contexts/AuthContext";
import useChat from "../../zustand/useChat";

function Message({ message }) {
  const { authorizedUser } = useAuthContext();
  const { selectedChat } = useChat();

  // to let user view exact time on hover
  const [hover, setHover] = useState(null);
  // TODO: ANIMATE

  // check, true if the logged in user sent the message
  const fromUser = message.senderId === authorizedUser._id;

  const profile = fromUser ? authorizedUser.profile : selectedChat?.profile;
  const css = fromUser ? "bg-[#027BFE]" : "bg-[#FFFFFF] text-black";

  // is true for new messsage add animation for this
  // const notifyClass= message.notify ? NOTIFY : ''

  return (
    <div className="h-full pb-1">
      <div
        className={`flex flex-col ${fromUser ? "items-end" : "items-start"}`}
      >
        {/*  ALIGNS THE IMG LEFT/RIGHT  */}
        {fromUser ? (
          <div
            className="flex items-center space-x-1"
            onMouseEnter={() => setHover(message._id)}
            onMouseLeave={() => setHover(null)}
          >
            <div>
              <p className={`rounded-full px-3 py-1 ${css} text-white`}>
                {message.message}
              </p>
            </div>
            <img src={profile} className="h-6 w-6 rounded-full" />
          </div>
        ) : (
          <div
            className="flex items-center space-x-1"
            onMouseEnter={() => setHover(message._id)}
            onMouseLeave={() => setHover(null)}
          >
            <img src={profile} className="h-6 w-6 rounded-full" />
            <div>
              <p className={`rounded-full px-3 py-1 ${css} text-black`}>
                {message.message}
              </p>
            </div>
          </div>
        )}
        <p className={`relative flex px-9 text-[0.6rem]`}>
          <div className={`${hover ?? ""}`}>
            {formatDistanceToNow(new Date(message.createdAt), {
              addSuffix: true,
            })}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ y: hover ? 0 : -10, opacity: hover ? 1 : 0 }}
            className={`absolute text-[0.6rem] ${fromUser ? "-left-8" : "-right-8"} `}
          >
            {format(new Date(message.createdAt), "dd/MM, h:mm a")}
          </motion.div>
        </p>
      </div>
    </div>
  );
}

export default Message;
