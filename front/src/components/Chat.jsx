import { motion } from "framer-motion";

import { useSocketContext } from "../contexts/SocketContext.jsx";
import useChat from "../zustand/useChat.js";

function Chat({ chat }) {
  const { setSelectedChat, selectedChat } = useChat();
  const isSelected = selectedChat?._id === chat._id;

  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(chat._id);

  return (
    <motion.div
      className={`flex w-full items-center border-b-[1px] border-b-[#383435] py-2 text-white`}
      onClick={() => setSelectedChat(chat)}
      animate={{
        backgroundColor: isSelected ? "#087FFE" : "#2D292A",
        backdropFilter: isSelected ? "blur(50px)" : "blur(0px)",
      }}
      transition={{
        duration: 0.7,
        ease: "easeInOut",
      }}
      layout
    >
      <img src={chat.profile} className="mx-2 h-10 w-10 rounded-full" />
      <div>
        <motion.button className="relative flex items-center">
          {chat.fullName}
        </motion.button>
      </div>
      <span className="absolute right-4">
        {/* online status indicator */}
        {isOnline ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="0.6em"
            height="0.6em"
            viewBox="0 0 24 24"
          >
            <path
              fill="#34c759"
              d="M12.003 21q-1.866 0-3.51-.708q-1.643-.709-2.859-1.924t-1.925-2.856T3 12.003t.709-3.51Q4.417 6.85 5.63 5.634t2.857-1.925T11.997 3t3.51.709q1.643.708 2.859 1.922t1.925 2.857t.709 3.509t-.708 3.51t-1.924 2.859t-2.856 1.925t-3.509.709"
            ></path>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="0.6em"
            height="0.6em"
            viewBox="0 0 24 24"
          >
            <path
              fill="#ff3b30"
              d="M12.003 21q-1.866 0-3.51-.708q-1.643-.709-2.859-1.924t-1.925-2.856T3 12.003t.709-3.51Q4.417 6.85 5.63 5.634t2.857-1.925T11.997 3t3.51.709q1.643.708 2.859 1.922t1.925 2.857t.709 3.509t-.708 3.51t-1.924 2.859t-2.856 1.925t-3.509.709"
            ></path>
          </svg>
        )}
      </span>
    </motion.div>
  );
}

export default Chat;
