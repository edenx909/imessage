import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(true);
  return (
    <div className="border-b-[1px]">
      <div className="m-3 flex items-center justify-between p-3">
        {/* LOGO */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="3em"
          height="3em"
          viewBox="0 0 24 24"
          className="relative top-0"
        >
          <path
            fill="#A2AAAD"
            d="M17.05 20.28c-.98.95-2.05.8-3.08.35c-1.09-.46-2.09-.48-3.24 0c-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8c1.18-.24 2.31-.93 3.57-.84c1.51.12 2.65.72 3.4 1.8c-3.12 1.87-2.38 5.98.48 7.13c-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25c.29 2.58-2.34 4.5-3.74 4.25"
          ></path>
        </svg>
        {/* arrow */}
        <button onClick={() => setOpen(!open)} className="rotate-90">
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.3em"
            height="1.3em"
            viewBox="0 0 24 24"
            initial={{ rotateY: "0deg", scaleX: 1 }}
            animate={{
              rotateY: open ? "180deg" : "0deg",
              scaleY: open ? [1, 1.3, 1] : [1, 1, 1],
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
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
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
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
    </div>
  );
};

export default Navbar;
