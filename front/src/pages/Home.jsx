import MessagesContainer from "../components/messages/MessagesContainer";
import UserList from "../components/UserList";
import LogOut from "../components/LogOut";

function Home() {
  return (
    <div className="flex w-auto items-center justify-center">
      {/*  now doesnt get wider than 16:9 */}
      <div className="flex w-4/5 max-w-screen-xl flex-col items-start justify-center space-x-2 rounded-md bg-[#2D292A] text-white md:flex-row">
        <div className="h-[80vh] w-full flex-1 flex-col rounded-md bg-[#2D292A] md:w-[70%]">
          <UserList />
        </div>
        <div className="flex h-[90vh] min-h-[80vh] w-full flex-col overflow-y-hidden rounded-md py-6 md:w-[70%]">
          <MessagesContainer />
        </div>
      </div>
      <div className="absolute bottom-0 left-0">
        <LogOut />
      </div>
    </div>
  );
}

export default Home;
