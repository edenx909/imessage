import MessagesContainer from "../components/messages/MessagesContainer";
import UserList from "../components/UserList";
import LogOut from "../components/LogOut";

function Home() {
  return (
    <div className="flex w-auto items-center justify-center">
      {/*  now doesnt get wider than 16:9 */}
      <div className="flex w-4/5 max-w-screen-xl flex-col items-start justify-center space-x-2 rounded-md bg-[#2D292A] text-white sm:flex-row">
        <div className="h-[80vh] flex-1 flex-col rounded-md bg-[#2D292A] sm:w-[70%]">
          <UserList />
        </div>
        <div className="flex h-[80vh] flex-col overflow-y-hidden rounded-md py-6 sm:w-[70%]">
          <MessagesContainer />
        </div>
      </div>
      <div className="absolute bottom-1 left-1">
        <LogOut />
      </div>
    </div>
  );
}

export default Home;
