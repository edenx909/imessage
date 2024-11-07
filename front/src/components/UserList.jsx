import Chats from "./Chats";
import LogOut from "./LogOut";
import SearchInput from "./SearchInput";

function UserList() {
  return (
    <div>
      <SearchInput />
      <Chats />
      <LogOut />
    </div>
  );
}

export default UserList;
