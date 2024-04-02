import { Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import Homepage from "./pages/user/Homepage";
import Register from "./pages/auth/Register";
import PrivateRoute from "./components/common/PrivateRoute";
import Checkout from "./pages/user/Checkout";
import Navbar from "./components/ui/Navbar";
import Subscribe from "./components/ui/Subscribe";
import Footer from "./components/ui/Footer";
import SingleProduct from "./pages/user/SingleProduct";
import ScrollToTop from "./components/ui/ScrollToTop";
import Cart from "./pages/user/Cart";
import Products from "./pages/user/Products";
import AdminLogin from "./pages/auth/AdminLogin";
import Dashboard from "./pages/admin/Dashboard";
import { useContext } from "react";
import { AuthContext } from "./context";

const Pages = () => {
  const { showNav } = useContext(AuthContext);

  return (
    <>
      <Navbar role={showNav ? "user" : "admin"} />
      <ScrollToTop />
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/checkout" element={<Checkout />} />
        </Route>
        <Route path="/" element={<Homepage />} exact />
        <Route path="/login" element={<Login />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<Products />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>

      <Subscribe role={showNav ? "user" : "admin"} />
      <Footer role={showNav ? "user" : "admin"} />
    </>
  );
};

export default Pages;
