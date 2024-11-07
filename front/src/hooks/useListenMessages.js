import { useEffect } from "react";
import { useSocketContext } from "../contexts/SocketContext";
import useChat from "../zustand/useChat";

const useListenMessages = () => {
  const { socket } = useSocketContext();

  const { messages, setMessages } = useChat();

  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
      newMessage.notify = true;
      setMessages([...messages, newMessage]);
    });

    return () => socket.off("newMessage");
  }, [socket, setMessages, messages]);
};

export default useListenMessages;
