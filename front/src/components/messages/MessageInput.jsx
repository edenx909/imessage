import { useState } from "react";
import { motion } from "framer-motion";

import useSendMessage from "../../hooks/useSendMessage";

function sendIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 5v14m6-8l-6-6m-6 6l6-6"
      ></path>
    </svg>
  );
}

function MessageInput() {
  const { loading, sendMessage } = useSendMessage();

  const [message, setMessage] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) return;
    await sendMessage(message);
    setMessage("");
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="sticky bottom-0 rounded-b-2xl bg-[#1F1F1F] px-2 py-2"
    >
      <div className="flex items-center justify-center">
        <input
          type="text"
          placeholder="iMessage"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full rounded-2xl border border-[#2C2A2B] bg-[#1F1F1F] px-5 py-1 text-white placeholder-[#423f40] shadow-[0_1px_1px_rgba(8,127,254,0.08)] focus:outline-none"
        />
        <motion.button
          type="submit"
          className="absolute right-3 flex h-[1.5em] w-[1.5em] items-center justify-center rounded-full bg-[#087FFE]"
          whileTap={{ scale: 0.2 }}
        >
          {loading ? "" : sendIcon()}
        </motion.button>
      </div>
    </form>
  );
}

export default MessageInput;
