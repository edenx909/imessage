import { createContext, useContext, useEffect, useState } from "react";
import io from "socket.io-client";

import { useAuthContext } from "./AuthContext";

const SocketContext = createContext();

export const useSocketContext = () => {
  return useContext(SocketContext);
};

export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);

  const { authorizedUser } = useAuthContext();

  useEffect(() => {
    if (authorizedUser) {
      const socket = io("http://localhost:8000", {
        query: {
          userId: authorizedUser._id,
        },
      });
      setSocket(socket);
      // used to listen to events, both on client & server side
      socket.on("getOnlineUsers", (users) => setOnlineUsers(users));

      return () => socket.close();
    } else {
      if (socket) {
        socket.close();
        setSocket(null);
      }
    }
  }, [authorizedUser]);

  return (
    <SocketContext.Provider value={{ socket, onlineUsers }}>
      {children}
    </SocketContext.Provider>
  );
};
