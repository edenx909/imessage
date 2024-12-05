import { useState } from "react";
import { motion } from "framer-motion";
import useLogout from "../hooks/useLogout";
import { Loading } from "./macros/Loading";

function LogOut() {
  const [loadingHover, setLoadingHover] = useState(false);
  const { loading, logout } = useLogout();
  return (
    <div>
      {loading ? (
        Loading()
      ) : (
        <button
          onClick={logout}
          className="fixed bottom-6 left-10 flex items-center text-[#0A80F7]"
          onMouseEnter={() => setLoadingHover(true)}
          onMouseLeave={() => setLoadingHover(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2a9.99 9.99 0 0 1 8 4h-2.71a8 8 0 1 0 .001 12h2.71A9.99 9.99 0 0 1 12 22m7-6v-3h-8v-2h8V8l5 4z"
            ></path>
          </svg>
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{
              opacity: loadingHover ? 1 : 0,
              x: loadingHover ? 10 : -50,
            }}
            transition={{
              duration: 0.2,
            }}
          >
            Logout
          </motion.p>
        </button>
      )}
    </div>
  );
}

export default LogOut;
