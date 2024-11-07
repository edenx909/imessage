import { Link } from "react-router-dom";
import { useState } from "react";

import useSignup from "../hooks/useSignup";

const Signup = () => {
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
      <form
        onSubmit={handleSubmit}
        className="flex flex-col  items-center justify-center"
      >
        <p>Create Your Apple Account</p>
        <div className="py-2">
          <label>
            <span className="hidden">Full Name</span>
          </label>
          <input
            type="text"
            placeholder="Full Name"
            value={inputs.fullName}
            onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
            className="border rounded-md px-10 py-2"
          />
        </div>
        <div className="py-1">
          <label>
            <span className="hidden">Username</span>
          </label>
          <input
            type="text"
            placeholder="Username"
            value={inputs.usernamer}
            onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
            className="border rounded-md px-10 py-2"
          />
        </div>
        <div className="py-1">
          <label>
            <span className="hidden">Password</span>
          </label>
          <input
            type="password"
            placeholder="Password"
            value={inputs.password}
            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
            className="border rounded-md px-10 py-2"
          />
        </div>
        <div className="py-1">
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
            className="border rounded-md px-10 py-2"
          />
        </div>
        <div>
          <Link
            to="/login"
            className="flex  items-center justify-center text-[#0066CC]"
          >
            Already have an Account?
            {/* TODO: animate on hover */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.4em"
              height="1.4em"
              viewBox="0 0 24 24"
              className="rotate-45"
            >
              <path
                fill="#0066CC"
                d="m12.354 5.646l5 5a.5.5 0 0 1-.708.708L12.5 7.207V18a.5.5 0 0 1-1 0V7.207l-4.146 4.147a.5.5 0 0 1-.708-.708l5-5a.5.5 0 0 1 .708 0"
              ></path>
            </svg>
          </Link>
        </div>
        <button className="bg-[#3494DF] border px-3 py-1 text-white rounded-full">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
