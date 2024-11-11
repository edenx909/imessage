import MessagesContainer from "../components/messages/MessagesContainer";
import UserList from "../components/UserList";
import LogOut from "../components/LogOut";

function Home() {
  return (
    <div className="my-10 flex h-full w-full flex-col items-center py-10 text-white">
      <p className="py-5 text-center text-4xl text-black">Welcome</p>
      <div className="flex h-3/5 w-2/3 items-center justify-center rounded-lg bg-[#2D292A]">
        <div className="flex w-1/3 flex-col justify-between overflow-hidden rounded-2xl bg-[#2D292A]">
          <UserList />
          <LogOut />
        </div>
        <div className="w-2/3 overflow-y-auto rounded-2xl">
          <MessagesContainer />
        </div>
      </div>
    </div>
  );
}

export default Home;
