import { Route, Routes } from "react-router-dom";
import LoginPage from "./LoginPage";

export default function Login() {
  return (
    <Routes>
      <Route index element={<LoginPage />} />
    </Routes>
  );
}
