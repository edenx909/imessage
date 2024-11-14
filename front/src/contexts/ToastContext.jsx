import { createContext, useContext, useState, useEffect } from "react";

export const ToastContext = createContext();

export const useToastContext = () => {
  return useContext(ToastContext);
};

export const ToastContextProvider = ({ children }) => {
  const [toast, setToast] = useState();

  return (
    <ToastContext.Provider value={{ toast, setToast }}>
      {children}
    </ToastContext.Provider>
  );
};
