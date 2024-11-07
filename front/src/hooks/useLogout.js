import { useState } from "react";
import { useAuthContext } from "../contexts/AuthContext";

const useLogout = () => {
  const { setAuthorizedUser } = useAuthContext();
  const [loading, setLoading] = useState(false);

  const logout = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/auth/logout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });

      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }

      localStorage.removeItem("imsgUser");
      setAuthorizedUser(null);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, logout };
};

export default useLogout;