import useLogout from "../hooks/useLogout";

function LogOut() {
  // needs animation on loading = true
  const { loading, logout } = useLogout();
  return (
    <div>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default LogOut;
