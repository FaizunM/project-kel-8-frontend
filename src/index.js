import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/admin/Dashboard";
import Login from "./components/login/Login";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/*" element={<App />} />
      <Route path="/dashboard/*" element={<Dashboard />}>
        <Route path="profile" element={<Dashboard />} />
        <Route path="student-data" element={<Dashboard />} />
        <Route path="class-list" element={<Dashboard />} />
        <Route path="major-list" element={<Dashboard />} />
        <Route path="teacher-account" element={<Dashboard />} />
        <Route path="about" element={<Dashboard />} />
      </Route>
      <Route path="/login/*" element={<Login />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
