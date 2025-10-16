import "./App.css";
import Register from "./pages/register";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import { Navigate, Route, Routes } from "react-router-dom";
import { isLoggedIn } from "./utils/auth";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/register" />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={isLoggedIn() ? <Dashboard /> : <Navigate to="/login" />}
        />
      </Routes>
    </>
  );
}
export default App;
