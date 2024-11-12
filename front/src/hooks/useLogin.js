import { useState } from "react";
import { useAuthContext } from "../contexts/AuthContext";
import { useToastContext } from "../contexts/ToastContext";

const useLogin = () => {
  const { setToast } = useToastContext();
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
      console.log(data);
    } catch (error) {
      setToast(error.message);
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
    console.log("Please Fill Everything");
    return false;
  }

  return true;
}
