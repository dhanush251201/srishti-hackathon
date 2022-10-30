import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./styles/tailwind.output.css";
import Toaster from "react-hot-toast";
import Login from "./pages/Login";
import Error404 from "./pages/Error404";
import AdminWrapper from "./pages/AdminWrapper";

const App = () => {
  return (
    <div className="absolute top-0 left-0 ">
      <BrowserRouter>
        <Toaster />
        <Routes>
          <Route path="admin" element={<AdminWrapper />} />
          <Route path="/login" element={<Login />} />
          <Route path="404-error" element={<Error404 />} />
          <Route path="*" element={<Navigate to="/404-error" />} />
          <Route index element={<Navigate to="/login" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
