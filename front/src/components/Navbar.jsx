import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "../assets/logo";

const Navbar = () => {
  const [open, setOpen] = useState(true);
  return (
    <>
      <div className="flex h-32 items-center justify-between px-6 py-6">
        {/* LOGO */}
        <a href="/">
          <Logo fill={"#A2AAAD"} />
        </a>
        {/* arrow */}
        <button onClick={() => setOpen(!open)} className="rotate-90">
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.3em"
            height="1.3em"
            viewBox="0 0 24 24"
            initial={{ rotateY: "0deg", scaleX: 1, filter: "blur(5px)" }}
            animate={{
              rotateY: open ? "180deg" : "0deg",
              scaleY: open ? [1, 1.3, 1] : [1, 1, 1],
              filter: "blur(0px)",
            }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <path
              fill="currentColor"
              d="m4.296 12l8.492-8.727a.75.75 0 1 0-1.075-1.046l-9 9.25a.75.75 0 0 0 0 1.046l9 9.25a.75.75 0 1 0 1.075-1.046z"
            ></path>
          </motion.svg>
        </button>
      </div>
      {!open && (
        <AnimatePresence mode="wait">
          <motion.div
            className="mx-3 flex flex-col space-y-3 px-8 pb-8 text-sm"
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -40, opacity: 0 }}
            transition={{ duration: 1.2, staggerChildren: 0.4 }}
          >
            <motion.div>
              <Link to="/login" onClick={() => setOpen(false)}>
                Sign In
              </Link>
            </motion.div>
            <motion.div className="h-1 w-full border-b" />
            <motion.div>
              <Link to="/signup" onClick={() => setOpen(false)}>
                Create Your Apple Account
              </Link>
            </motion.div>
            <motion.div className="h-1 w-full border-b" />
            {/* TODO: add a indicator that it will redirect */}
            <motion.a href="https://edenxrana.vercel.app/">Portfolio</motion.a>
          </motion.div>
        </AnimatePresence>
      )}
    </>
  );
};

export default Navbar;
