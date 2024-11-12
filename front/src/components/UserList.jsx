import Chats from "./Chats";
import SearchInput from "../components/SearchInput";

function UserList() {
  return (
    <div className="relative flex flex-1 flex-col overflow-y-auto">
      <div className="absolute top-0 z-50 w-full">
        <SearchInput />
      </div>
      <div className="overflow-hidden rounded-xl pt-20">
        <Chats />
      </div>
    </div>
  );
}

export default UserList;
