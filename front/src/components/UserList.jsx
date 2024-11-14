import Chats from "./Chats";
import SearchInput from "../components/SearchInput";

function UserList() {
  return (
    <div className="relative flex flex-1 flex-col overflow-hidden rounded-md">
      <div className="absolute top-1 z-50 w-full">
        <SearchInput />
      </div>
      <div className="mt-28 overflow-auto rounded-md pb-5">
        <Chats />
      </div>
    </div>
  );
}

export default UserList;
