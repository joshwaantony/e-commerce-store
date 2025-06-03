

import Navbar from "../Components/Navbar/Navbar";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register/Register";
import Auth from "../pages/Auth/Auth";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/home";
import Error from "../pages/Error/Error";
import AuthCheck from "../AuthCheck/AuthCheck";

const MainLayout = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <AuthCheck>
 <Home/>
          </AuthCheck>
         
          } />
        <Route path="/auth" element={<Auth/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register />} />
              <Route path="*" element={<Error/>} />

      </Routes>
    </BrowserRouter>
  );
};
export default MainLayout;
