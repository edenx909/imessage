import Message from "./Message";
import useGetMessages from "../../hooks/useGetMessages";
import { useEffect, useRef } from "react";
import useListenMessages from "../../hooks/useListenMessages";

function Messages() {
  const { messages, loading } = useGetMessages();
  console.log(messages);
  useListenMessages();
  // to scroll to latest
  // const lastMessageRef = useRef();
  // useEffect(() => {
  //   lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
  // }, [messages]);
  return (
    <div>
      {!loading &&
        messages.length > 0 &&
        messages.map((message) => (
          <div key={message._id}>
            <Message message={message} />
          </div>
        ))}
      {loading && <p>Loading</p>}
      {!loading && messages.length === 0 && <p>Start Conversation</p>}
    </div>
  );
}

export default Messages;
