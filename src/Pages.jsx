import { Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import Homepage from "./pages/user/Homepage";
import Register from "./pages/auth/Register";
import PrivateRoute from "./components/common/PrivateRoute";
import Checkout from "./pages/user/Checkout";

const Pages = () => {
  return (
    <>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/checkout" element={<Checkout />} />
        </Route>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
};

export default Pages;
