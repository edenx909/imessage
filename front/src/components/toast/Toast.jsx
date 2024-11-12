import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { useToastContext } from "../../contexts/ToastContext";

const Toast = () => {
  const { toast, setToast } = useToastContext();
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => {
        setToast(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [toast, setToast]);

  return (
    <AnimatePresence mode="wait">
      {toast && (
        <motion.div
          className="fixed bottom-10 right-10 flex items-center justify-center rounded-md border px-6 py-4 text-sm"
          initial={{ opacity: 0, x: 50, filter: "blur(5px)" }}
          animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, x: 50, filter: "blur(5px)" }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <p>{toast} </p>
          <button
            className="absolute -left-[0.2rem] -top-[0.2rem] flex h-3 w-3 items-center justify-center rounded-full bg-[#3494DF] font-light"
            onClick={() => setToast()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="white"
                stroke="white"
                strokeLinecap="round"
                strokeWidth={1.5}
                d="m8.464 15.535l7.072-7.07m-7.072 0l7.072 7.07"
              ></path>
            </svg>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Toast;
