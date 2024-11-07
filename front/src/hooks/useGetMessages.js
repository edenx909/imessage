import { useEffect, useState } from "react";
import useChat from "../zustand/useChat";
const useGetMessages = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedChat } = useChat();

  useEffect(() => {
    const getMessages = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/messages/${selectedChat._id}`);
        const data = await res.json();
        if (data.error) {
          throw new Error(data.error);
        }
        setMessages(data);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (selectedChat?._id) {
      getMessages();
    }
    getMessages();
  }, [selectedChat, setMessages]);

  return { messages, loading };
};

export default useGetMessages;
