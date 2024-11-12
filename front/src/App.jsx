import { Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./contexts/AuthContext";
import { useState } from "react";

import Onboard from "./pages/Onboard";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";
import Background from "./components/Background";
import Toast from "./components/toast/Toast";

function App() {
  const { authorizedUser } = useAuthContext();
  const [toastError, setToastError] = useState("");
  return (
    <div className="h-screen">
      <Toast toastError={toastError} />
      <Background />
      <Navbar />
      <div>
        <Routes>
          <Route
            path="/*"
            element={authorizedUser ? <Home /> : <Navigate to="/login" />}
          />

          <Route
            path="/login"
            element={
              authorizedUser ? (
                <Navigate to="/*" />
              ) : (
                <>
                  <Onboard>
                    <Login />
                  </Onboard>
                </>
              )
            }
          />
          <Route
            path="/signup"
            element={
              authorizedUser ? (
                <Navigate to="/*" />
              ) : (
                <>
                  <Onboard>
                    <Signup />
                  </Onboard>
                </>
              )
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
