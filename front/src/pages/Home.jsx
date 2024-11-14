import MessagesContainer from "../components/messages/MessagesContainer";
import UserList from "../components/UserList";
import LogOut from "../components/LogOut";

function Home() {
  return (
    <div className="flex w-auto items-center justify-center bg-[#2D292A]">
      {/*  now doesnt get wider than 16:9 */}
      <div className="flex h-[calc(100vh-8rem)] w-4/5 max-w-screen-xl items-center justify-center space-x-2 rounded-md bg-[#2D292A] text-white">
        <div className="hidden h-full flex-1 flex-col rounded-md bg-[#2D292A] sm:flex">
          <UserList />
        </div>
        <div className="flex h-full w-[90%] flex-col overflow-y-hidden rounded-md py-6 sm:w-[70%]">
          <MessagesContainer />
        </div>
      </div>
      <div className="absolute bottom-2 left-2">
        <LogOut />
      </div>
    </div>
  );
}

export default Home;
