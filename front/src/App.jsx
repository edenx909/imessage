import { Routes, Route, Navigate } from "react-router-dom";
import Onboard from "./pages/Onboard";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { useAuthContext } from "./contexts/AuthContext";
import Navbar from "./components/Navbar";

function App() {
  const { authorizedUser } = useAuthContext();
  return (
    <>
      <Navbar />
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
    </>
  );
}

export default App;
