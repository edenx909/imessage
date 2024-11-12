import { createContext, useContext, useState } from "react";

export const ToastContext = createContext();

export const useToastContext = () => {
  return useContext(ToastContext);
};

export const ToastContextProvider = ({ children }) => {
  const [toast, setToast] = useState({
    message: "",
    type: "",
    visible: false,
  });

  const showToast = (message, type = "info") => {
    setToast({ message, type, visible: true });

    setTimeout(() => {
      setToast((prevState) => ({ ...prevState, visible: false }));
    }, 3000);
  };

  return (
    <ToastContext.Provider value={{ toast, showToast }}>
      {children}
    </ToastContext.Provider>
  );
};
