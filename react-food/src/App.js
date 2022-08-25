import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import UserProvider from "./context/UserContext";
import Food from "./views/Food/Food";
import Login from "./views/Login/Login";
import Profile from "./views/Profile/Profile";

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/food" element={<Food />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
