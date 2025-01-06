import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "../assets/Logo";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  // for portfolio link
  const [hover, setHover] = useState(false);

  // for github link
  const [githover, setGithover] = useState(false);

  // to conditional render the onboard links
  const location = useLocation();
  // false if not on login/signup screens, changes navbar accordingly
  const notOnboard =
    location.pathname === "/login" || location.pathname === "/signup";
  useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
    <>
      <div
        className={`flex h-32 items-center justify-between px-10 py-6 ${notOnboard ? "" : "bg-[#2C2A2B]"}`}
      >
        {/* LOGO */}
        <a href="/">
          <Logo fill={`${notOnboard ? "#A2AAAD" : "#FFFFFF"}`} />
        </a>
        {/* these are  rendered conditionally */}
        <motion.a
          href="https://edenxrana.vercel.app/"
          target="_blank"
          className={`flex items-end text-white ${notOnboard ? "hidden" : ""}`}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          Portfolio
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.4em"
            height="1.4em"
            viewBox="0 0 24 24"
            animate={{
              rotate: hover ? "90deg" : "45deg",
              color: hover ? "#027BFE" : "#000000",
            }}
            transition={{ duration: 0.1, ease: "easeIn" }}
          >
            <path
              fill="#ffffff"
              d="m12.354 5.646l5 5a.5.5 0 0 1-.708.708L12.5 7.207V18a.5.5 0 0 1-1 0V7.207l-4.146 4.147a.5.5 0 0 1-.708-.708l5-5a.5.5 0 0 1 .708 0"
            ></path>
          </motion.svg>
        </motion.a>
        <button
          onClick={() => setOpen(!open)}
          className={`rotate-90 ${notOnboard ? "" : "hidden"}`}
        >
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.3em"
            height="1.3em"
            viewBox="0 0 24 24"
            initial={{ rotateY: "180deg", filter: "blur(0px)" }}
            animate={{
              rotateY: open ? "0deg" : "180deg",
              scaleY: open ? [1, 1.3, 1] : 1,
              filter: open
                ? ["blur(0px)", "blur(3px)", "blur(0px)"]
                : "blur(0px)",
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
      {open && (
        <AnimatePresence mode="wait ">
          <motion.div
            className="fixed z-50 flex flex-col space-y-3 rounded-xl bg-white px-8 py-8 text-sm md:rounded-none md:bg-transparent"
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -40, opacity: 0 }}
            transition={{ duration: 1.2, staggerChildren: 0.9 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Link to="/login" onClick={() => setOpen(false)}>
                Sign In
              </Link>
            </motion.div>
            <motion.div className="h-1 w-full border-b" />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Link to="/signup" onClick={() => setOpen(false)}>
                Create Your Account
              </Link>
            </motion.div>
            <motion.div className="h-1 w-full border-b" />
            <motion.a
              href="https://edenxrana.vercel.app/"
              target="_blank"
              className="flex items-end"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              Portfolio
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.4em"
                height="1.4em"
                viewBox="0 0 24 24"
                animate={{ rotate: hover ? "90deg" : "45deg" }}
                transition={{ duration: 0.1, ease: "easeIn" }}
              >
                <path
                  fill="#00000"
                  d="m12.354 5.646l5 5a.5.5 0 0 1-.708.708L12.5 7.207V18a.5.5 0 0 1-1 0V7.207l-4.146 4.147a.5.5 0 0 1-.708-.708l5-5a.5.5 0 0 1 .708 0"
                ></path>
              </motion.svg>
            </motion.a>
            <motion.div className="h-1 w-full border-b" />
            <motion.a
              href="https://github.com/edenx909"
              target="_blank"
              className="flex items-end"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              onMouseEnter={() => setGithover(true)}
              onMouseLeave={() => setGithover(false)}
            >
              Github
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.4em"
                height="1.4em"
                viewBox="0 0 24 24"
                animate={{ rotate: githover ? "90deg" : "45deg" }}
                transition={{ duration: 0.1, ease: "easeIn" }}
              >
                <path
                  fill="#00000"
                  d="m12.354 5.646l5 5a.5.5 0 0 1-.708.708L12.5 7.207V18a.5.5 0 0 1-1 0V7.207l-4.146 4.147a.5.5 0 0 1-.708-.708l5-5a.5.5 0 0 1 .708 0"
                ></path>
              </motion.svg>
            </motion.a>
          </motion.div>
        </AnimatePresence>
      )}
    </>
  );
};

export default Navbar;
