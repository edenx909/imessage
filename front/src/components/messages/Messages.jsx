import { useRef, useEffect } from "react";

import useGetMessages from "../../hooks/useGetMessages";
import useListenMessages from "../../hooks/useListenMessages";

import Message from "./Message";
import { Loading } from "../macros/Loading";

function Messages() {
  const { messages, loading } = useGetMessages();
  useListenMessages();

  // scrolls to the latest
  const lastMessageRef = useRef(null);
  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div className="px-2">
      {loading && (
        <div className="flex items-center justify-center">
          <p>{Loading()}</p>
        </div>
      )}

      {!loading && messages.length > 0 ? (
        <div className="">
          {messages.map((message, index) => (
            <div key={message._id}>
              <Message message={message} />
              {/*  last msg ref to scroll*/}
              {index === messages.length - 1 && <div ref={lastMessageRef} />}
            </div>
          ))}
        </div>
      ) : (
        !loading && (
          <p className="text-center text-gray-500">Start a Conversation!</p>
        )
      )}
    </div>
  );
}

export default Messages;
