import "./App.css";
import Login from "./Login/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./Signup/Signup";
import ForgotPassword from "./Forgot-Password/ForgotPassword";
import Dashboard from "./User-dashasboard/Dashasboard";
import Choosevehicle from "./Choose-vehicle/Choosevehicle";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/user-dashboard" element = {<Dashboard/>} />
          <Route path="choose-vehicle" element ={<Choosevehicle/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
