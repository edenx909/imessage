import MessageInput from "./MessageInput";
import Messages from "./Messages";

function MessagesContainer() {
  return (
    <div className="flex  flex-col">
      <div className="flex flex-col ">
        <div className="text-center p-5 border">
          <span>To</span>
          <span>Daisy</span>
        </div>
        <div>
          <Messages />
        </div>
      </div>
      <MessageInput />
    </div>
  );
}

export default MessagesContainer;
