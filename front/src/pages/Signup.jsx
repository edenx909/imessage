import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";

import { Loading } from "../components/macros/Loading";
import useSignup from "../hooks/useSignup";
import Container from "../components/logoAnimation/Container";

const Signup = () => {
  // for framer
  const [hover, setHover] = useState(false);

  // needs animation on loading = true
  const { loading, signup } = useSignup();
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(inputs);
    await signup(inputs);
  };
  return (
    <div className="flex flex-col">
      {/* Logo Animation */}
      <Container />
      {loading ? (
        Loading()
      ) : (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center"
        >
          <p className="py-3">Create Your Apple Account</p>
          <div className="">
            <label>
              <span className="hidden">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Full Name"
              value={inputs.fullName}
              onChange={(e) =>
                setInputs({ ...inputs, fullName: e.target.value })
              }
              className="rounded-t-xl border px-10 py-2"
            />
          </div>
          <div className="">
            <label>
              <span className="hidden">Username</span>
            </label>
            <input
              type="text"
              placeholder="Username"
              value={inputs.usernamer}
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
              className="border px-10 py-2"
            />
          </div>
          <div className="">
            <label>
              <span className="hidden">Password</span>
            </label>
            <input
              type="password"
              placeholder="Password"
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
              className="border px-10 py-2"
            />
          </div>
          <div className="">
            <label>
              <span className="hidden">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
              className="rounded-b-xl border px-10 py-2"
            />
          </div>
          <div className="py-7">
            <button
              className="rounded-full border bg-[#3494DF] px-3 py-2 text-white disabled:bg-[#A2AAAD]"
              disabled={
                inputs.fullName &&
                inputs.username &&
                inputs.password &&
                inputs.confirmPassword
                  ? false
                  : true
              }
            >
              Sign Up
            </button>
          </div>
          <Link
            to="/login"
            className="my-7 flex items-center justify-center text-[#0066CC]"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            Already have an Account?
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.4em"
              height="1.4em"
              viewBox="0 0 24 24"
              initial={{ rotate: "45deg" }}
              animate={{ rotate: hover ? "90deg" : "45deg" }}
              transition={{ duration: 0.1, ease: "easeIn" }}
            >
              <path
                fill="#0066CC"
                d="m12.354 5.646l5 5a.5.5 0 0 1-.708.708L12.5 7.207V18a.5.5 0 0 1-1 0V7.207l-4.146 4.147a.5.5 0 0 1-.708-.708l5-5a.5.5 0 0 1 .708 0"
              ></path>
            </motion.svg>
          </Link>
        </form>
      )}
    </div>
  );
};

export default Signup;
