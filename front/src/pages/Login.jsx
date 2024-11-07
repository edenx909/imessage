import { useState } from "react";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";

import useLogin from "../hooks/useLogin.js";
function Login() {
  // for framer
  const [hover, setHover] = useState(false);
  // add animation if loading = true
  const { loading, login } = useLogin();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="py-4 text-lg">One account for everything Apple</p>
      <form onSubmit={handleSubmit}>
        <div className="">
          <label>
            <span className="hidden">Username</span>
          </label>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="rounded-t-xl border px-10 py-2"
          />
        </div>
        <div className="">
          <label>
            <span className="hidden">Password</span>
          </label>
          <div className="relative">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="rounded-b-xl border px-10 py-2"
            />
            <button
              type="submit"
              className="absolute right-3.5 top-1/2 -translate-y-1/2"
            >
              {/* TODO: opacity low if inputs not filled */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.4em"
                height="1.4em"
                viewBox="0 0 1024 1024"
              >
                <path
                  fill="#A2AAAD"
                  d="M521.7 82c-152.5-.4-286.7 78.5-363.4 197.7c-3.4 5.3.4 12.3 6.7 12.3h70.3c4.8 0 9.3-2.1 12.3-5.8c7-8.5 14.5-16.7 22.4-24.5c32.6-32.5 70.5-58.1 112.7-75.9c43.6-18.4 90-27.8 137.9-27.8s94.3 9.3 137.9 27.8c42.2 17.8 80.1 43.4 112.7 75.9s58.1 70.4 76 112.5C865.7 417.8 875 464.1 875 512s-9.4 94.2-27.8 137.8c-17.8 42.1-43.4 80-76 112.5s-70.5 58.1-112.7 75.9A352.8 352.8 0 0 1 520.6 866c-47.9 0-94.3-9.4-137.9-27.8A353.8 353.8 0 0 1 270 762.3c-7.9-7.9-15.3-16.1-22.4-24.5c-3-3.7-7.6-5.8-12.3-5.8H165c-6.3 0-10.2 7-6.7 12.3C234.9 863.2 368.5 942 520.6 942c236.2 0 428-190.1 430.4-425.6C953.4 277.1 761.3 82.6 521.7 82M395.02 624v-76h-314c-4.4 0-8-3.6-8-8v-56c0-4.4 3.6-8 8-8h314v-76c0-6.7 7.8-10.5 13-6.3l141.9 112a8 8 0 0 1 0 12.6l-141.9 112c-5.2 4.1-13 .4-13-6.3"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center px-3 py-2">
          <Link
            to="/signup"
            className="my-4 flex items-end text-[#0066CC]"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            Create an Account
            {/* TODO: animate on hover */}
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.4em"
              height="1.4em"
              viewBox="0 0 24 24"
              animate={{ rotate: hover ? "90deg" : "45deg" }}
              transition={{ duration: 0.1, ease: "easeIn" }}
            >
              <path
                fill="#0066CC"
                d="m12.354 5.646l5 5a.5.5 0 0 1-.708.708L12.5 7.207V18a.5.5 0 0 1-1 0V7.207l-4.146 4.147a.5.5 0 0 1-.708-.708l5-5a.5.5 0 0 1 .708 0"
              ></path>
            </motion.svg>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
