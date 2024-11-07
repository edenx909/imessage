import { useState } from "react";
import useSendMessage from "../../hooks/useSendMessage";

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
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          placeholder="Send a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">{loading ? "laoding" : "Submit"}</button>
      </div>
    </form>
  );
}

export default MessageInput;
