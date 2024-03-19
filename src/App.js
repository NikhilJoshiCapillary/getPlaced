import logo from "./logo.svg";
import Register from "./pages/loginpage/Register.js";
import Profile from "./organisms/ProfilePage/Profile.js";
import Login from "./pages/loginpage/Login.js";
import "./App.css";
import Home from "./pages/homepage/Home.js";
import { Provider } from "react-redux";
import store from "./store.js";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
