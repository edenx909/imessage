import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

import { useToastContext } from "../contexts/ToastContext";
import useChat from "../zustand/useChat";
import useGetChats from "../hooks/useGetChats";

function SearchInput() {
  // for toast
  const { setToast } = useToastContext();
  // for framer
  const [clicked, setClicked] = useState(false);
  const inputRef = useRef(null);

  // handle click outside the component, to animate properly, not going to lift the state up rn
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (inputRef.current && !inputRef.current.contains(e.target))
        return setClicked(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.addEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const [search, setSearch] = useState("");
  const { setSelectedChat } = useChat();
  const { chats } = useGetChats();

  const handleSubmit = (e) => {
    e.preventDefault();
    setClicked(false);
    inputRef.current.blur();
    if (!search) return;
    if (search.length < 3) {
      return setToast("Search terms must be at least 4 characters long");
    }

    const chat = chats.find((chat) =>
      chat.username.toLowerCase().includes(search.toLowerCase()),
    );

    if (chat) {
      setSelectedChat(chat);
      setSearch("");
    } else {
      setToast("We couldn't find a user matching your search");
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="relative flex items-center py-5">
        <motion.input
          ref={inputRef}
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-md bg-[#383435] py-1 shadow-[0_1px_1px_rgba(255,255,255,0.2)] focus:outline-none"
          onClick={() => setClicked(true)}
          animate={{ paddingLeft: clicked ? "7%" : "15%" }}
          layout
        />
        <motion.button
          type="submit"
          className="absolute top-[1.6rem]"
          animate={{ left: clicked ? "86%" : "3%" }}
          layout
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.4em"
            height="1.4em"
            viewBox="0 0 24 24"
            className="rounded-full bg-[#383435]"
          >
            <path
              fill="white"
              d="m19.485 20.154l-6.262-6.262q-.75.639-1.725.989t-1.96.35q-2.402 0-4.066-1.663T3.808 9.503T5.47 5.436t4.064-1.667t4.068 1.664T15.268 9.5q0 1.042-.369 2.017t-.97 1.668l6.262 6.261zM9.539 14.23q1.99 0 3.36-1.37t1.37-3.361t-1.37-3.36t-3.36-1.37t-3.361 1.37t-1.37 3.36t1.37 3.36t3.36 1.37"
            ></path>
          </svg>
        </motion.button>
      </form>
      <p className="pb-5 text-center">All Registered Members</p>
    </>
  );
}

export default SearchInput;
