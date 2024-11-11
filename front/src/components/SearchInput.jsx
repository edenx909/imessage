import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

import useChat from "../zustand/useChat";
import useGetChats from "../hooks/useGetChats";

function SearchInput() {
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
      return console.log("Search term needs to be > 3");
    }

    const chat = chats.find((chat) =>
      chat.username.toLowerCase().includes(search.toLowerCase()),
    );

    if (chat) {
      setSelectedChat(chat);
      setSearch("");
    } else {
      console.log("No Such User");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="relative flex items-center">
      <motion.input
        ref={inputRef}
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="rounded-full border px-8"
        onClick={() => setClicked(true)}
        animate={{
          paddingRight: clicked ? "3rem" : "2rem",
          paddingLeft: clicked ? "3rem" : "2rem",
        }}
        layout
      />
      <motion.button
        type="submit"
        className="absolute rounded-full"
        initial={{ left: "4%" }}
        animate={{ left: clicked ? "84%" : "4%" }}
        layout
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.4em"
          height="1.4em"
          viewBox="0 0 24 24"
          className="rounded-full bg-white"
        >
          <path
            fill="currentColor"
            d="m19.485 20.154l-6.262-6.262q-.75.639-1.725.989t-1.96.35q-2.402 0-4.066-1.663T3.808 9.503T5.47 5.436t4.064-1.667t4.068 1.664T15.268 9.5q0 1.042-.369 2.017t-.97 1.668l6.262 6.261zM9.539 14.23q1.99 0 3.36-1.37t1.37-3.361t-1.37-3.36t-3.36-1.37t-3.361 1.37t-1.37 3.36t1.37 3.36t3.36 1.37"
          ></path>
        </svg>
      </motion.button>
    </form>
  );
}

export default SearchInput;
