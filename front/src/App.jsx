import { Routes, Route, Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useAuthContext } from "./contexts/AuthContext";

import Onboard from "./pages/Onboard";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";
import Background from "./components/Background";
import Toast from "./components/toast/Toast";

function App() {
  const { authorizedUser } = useAuthContext();
  const location = useLocation();

  return (
    <div
      className={`${location.pathname === "/login" || location.pathname === "/signup" ? "bg-white" : ""}`}
    >
      <Toast />
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
