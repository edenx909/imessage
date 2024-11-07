import { useState } from "react";
import useChat from "../zustand/useChat";
import useGetChats from "../hooks/useGetChats";

function SearchInput() {
  const [search, setSearch] = useState("");
  const { setSelectedChat } = useChat();
  const { chats } = useGetChats();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 3) {
      return console.log("Search term needs to be > 3");
    }

    const chat = chats.find((chat) =>
      chat.username.toLowerCase().includes(search.toLowerCase())
    );

    if (chat) {
      setSelectedChat(chat);
      setSearch("");
    } else {
      console.log("No Such User");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit" className="border">
        Search
      </button>
    </form>
  );
}

export default SearchInput;
