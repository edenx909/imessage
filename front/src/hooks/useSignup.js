import { useState } from "react";
import { useAuthContext } from "../contexts/AuthContext";

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthorizedUser } = useAuthContext();

  const signup = async ({ fullName, username, password, confirmPassword }) => {
    if (!handleInput({ fullName, username, password, confirmPassword })) return;
    setLoading(true);
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, username, password, confirmPassword }),
      });

      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }

      // local storage
      localStorage.setItem("imsgUser", JSON.stringify(data));
      setAuthorizedUser(data);
      console.log(data);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, signup };
};

export default useSignup;

// validation
function handleInput({ fullName, username, password, confirmPassword }) {
  if (!fullName || !username || !password || !confirmPassword) {
    console.log("Fill everything");
    return false;
  }

  if (password !== confirmPassword) {
    console.log("mismatch password");
    return false;
  }

  if (password.length < 6) {
    console.log("Password too short");
    return false;
  }

  return true;
}
