import Chats from "./Chats";
import SearchInput from "../components/SearchInput";

function UserList() {
  return (
    <div className="flex flex-col overflow-y-auto">
      <SearchInput />
      <Chats />
    </div>
  );
}

export default UserList;
