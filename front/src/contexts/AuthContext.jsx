import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }) => {
  const [authorizedUser, setAuthorizedUser] = useState(
    JSON.parse(localStorage.getItem("imsgUser")) || null
  );
  return (
    <AuthContext.Provider value={{ authorizedUser, setAuthorizedUser }}>
      {children}
    </AuthContext.Provider>
  );
};
