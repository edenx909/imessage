import { formatDistanceToNow } from "date-fns";
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
  const notify = message.notify;
  console.log(notify);

  return (
    <div className="h-full pb-4">
      <div
        className={`flex flex-col ${fromUser ? "items-end" : "items-start"} `}
      >
        {/*  ALIGNS THE IMG LEFT/RIGHT  */}
        {fromUser ? (
          <div
            className="flex items-center space-x-1"
            onMouseEnter={() => setHover(message._id)}
            onMouseLeave={() => setHover(null)}
          >
            <div>
              <p className={`rounded-full px-4 py-1 ${css} text-white`}>
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
            <motion.div
              initial={{ scale: 1 }}
              animate={{
                scale: notify ? [1, 1.3, 1] : 1,
                x: notify ? [0, 10, 0] : 0,
              }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
              }}
              className="origin-left"
            >
              <p
                className={`rounded-full px-4 py-1 ${css} pointer-events-none text-black`}
              >
                {message.message}
              </p>
            </motion.div>
          </div>
        )}
        <div className={`relative flex px-4 text-[0.6rem]`}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              y: hover ? 0 : -10,
              opacity: hover ? 1 : 0,
              filter: hover ? "blur(0px)" : "blur(2px)",
            }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
            className={`absolute text-[0.6rem] ${fromUser ? "-left-12 text-left" : "-right-12 text-right"} `}
          >
            {formatDistanceToNow(new Date(message.createdAt), {
              addSuffix: true,
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Message;
