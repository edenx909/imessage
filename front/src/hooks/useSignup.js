import { useState } from "react";
import { useAuthContext } from "../contexts/AuthContext";
import { useToastContext } from "../contexts/ToastContext";

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const { setToast } = useToastContext();
  const { setAuthorizedUser } = useAuthContext();

  const signup = async ({ fullName, username, password, confirmPassword }) => {
    if (
      !handleInput({ fullName, username, password, confirmPassword, setToast })
    )
      return;
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
      setToast(error.message);
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, signup };
};

export default useSignup;

// validation
function handleInput({
  fullName,
  username,
  password,
  confirmPassword,
  setToast,
}) {
  if (!fullName || !username || !password || !confirmPassword) {
    console.log("Fill everything");
    setToast("Please Fill Everything");
    return false;
  }

  if (password !== confirmPassword) {
    console.log("mismatch password");
    setToast("Passwords donot Match");
    return false;
  }

  if (password.length < 6) {
    console.log("Password too short");
    setToast("Password ");
    return false;
  }

  return true;
}
