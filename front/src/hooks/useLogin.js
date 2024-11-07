import { useState } from "react";
import { useAuthContext } from "../contexts/AuthContext";

const useLogin = () => {
  const { setAuthorizedUser } = useAuthContext();
  const [loading, setLoading] = useState(false);

  const login = async (username, password) => {
    if (!handleInput(username, password)) return;
    setLoading(true);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }

      localStorage.setItem("imsgUser", JSON.stringify(data));
      setAuthorizedUser(data);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, login };
};

export default useLogin;

// validation
function handleInput(username, password) {
  if (!username || !password) {
    console.log("Fill everything");
    return false;
  }

  return true;
}
