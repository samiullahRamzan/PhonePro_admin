import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import AppRoutes from "./components/appRoutes";
import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import { LogIn } from "./pagesPath";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);

  return isLoggedIn ? (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard--content">
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
