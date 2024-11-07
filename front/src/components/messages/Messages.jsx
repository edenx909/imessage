import Message from "./Message";
import useGetMessages from "../../hooks/useGetMessages";
import { useEffect, useRef } from "react";

function Messages() {
  const { messages, loading } = useGetMessages();
  // to scroll to latest
  const lastMessageRef = useRef();
  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 200);
  }, [messages]);
  return (
    <div>
      {!loading &&
        messages.length > 0 &&
        messages.map((message) => (
          <div key={message._id} ref={lastMessageRef}>
            <Message message={message} />
          </div>
        ))}
      {loading && <p>Loading</p>}
      {!loading && messages.length === 0 && <p>Start Conversation</p>}
    </div>
  );
}

export default Messages;
