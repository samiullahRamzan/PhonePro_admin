import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import AppRoutes from "./components/appRoutes";
import "./App.css";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import { LogIn } from "./pagesPath";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();

  const isChatScreen = location.pathname === "/chat";

  const handleLogin = () => setIsLoggedIn(true);

  return isLoggedIn ? (
    <div className="dashboard">
      <Sidebar />
      <div className={`dashboard--content ${isChatScreen ? "no-padding" : ""}`}>
        <AppRoutes />
      </div>
    </div>
  ) : (
    <Routes>
      <Route path="/LogIn" element={<LogIn onLogin={handleLogin} />} />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};

export default App;
