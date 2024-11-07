import MessagesContainer from "../components/messages/MessagesContainer";
import UserList from "../components/UserList";

function Home() {
  return (
    <div>
      <p className="text-4xl">Home</p>
      <div className="flex">
        <UserList />
        <MessagesContainer />
      </div>
    </div>
  );
}

export default Home;
