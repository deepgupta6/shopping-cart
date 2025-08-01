// src/App.jsx
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Items from "./pages/Items";
import { Toaster } from "sonner";

const App = () => {
  const token = localStorage.getItem("token");

  return (
    <Router>
      <Toaster richColors />
      <Routes>
        <Route
          path="/"
          element={token ? <Items /> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={!token ? <Login /> : <Navigate to="/" />}
        />
        <Route
          path="/signup"
          element={!token ? <Signup /> : <Navigate to="/" />}
        />
      </Routes>
    </Router>
  );
};

export default App;
