import MessagesContainer from "../components/messages/MessagesContainer";
import UserList from "../components/UserList";
import LogOut from "../components/LogOut";

function Home() {
  return (
    <div className="flex items-center justify-center bg-[#2D292A]">
      <div className="flex h-[calc(100vh-9rem)] w-2/3 items-center justify-center rounded-lg bg-[#2D292A] text-white">
        <div className="flex h-full flex-1 flex-col overflow-hidden rounded-2xl bg-[#2D292A] px-4">
          <UserList />
          <LogOut />
        </div>
        <div className="flex h-full w-2/3 flex-col overflow-y-auto rounded-xl px-4 py-6">
          <MessagesContainer />
        </div>
      </div>
    </div>
  );
}

export default Home;
