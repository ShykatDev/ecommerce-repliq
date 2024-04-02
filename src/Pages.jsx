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

const Pages = () => {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/checkout" element={<Checkout />} />
        </Route>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<Products />} />
      </Routes>
      <Subscribe />
      <Footer />
    </>
  );
};

export default Pages;
