import { Link, NavLink, useNavigate } from "react-router-dom";
import { avatar, logo } from "../../assets";
import { FaCartShopping } from "react-icons/fa6";
import { IoLogIn, IoLogOut } from "react-icons/io5";
import { useContext, useEffect, useState } from "react";
import { AuthContext, CartContext } from "../../context";
import toast from "react-hot-toast";
import { useAuth } from "../../hooks/useAuth";
import Search from "./Search";
import { useDebounce } from "../../hooks/useDebounce";

const Navbar = ({ role }) => {
  const navigate = useNavigate();
  const { removeLoginData } = useContext(AuthContext);
  const [isLogin, setIsLogin] = useState(false);
  const [searchKey, setSearchKey] = useState("");
  const { auth, loginUser } = useAuth();
  const { state } = useContext(CartContext);

  useEffect(() => {
    if (auth !== undefined) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [auth, isLogin]);

  const handleLogout = () => {
    removeLoginData();
    setIsLogin(false);
    navigate("/login");
    toast.success("Successfully logged out");
  };

  const debounceText = useDebounce(searchKey);

  const handleSearch = (e) => {
    setSearchKey(e.target.value);
  };

  if (role === "admin") {
    return null;
  }

  return (
    <>
      <nav className="h-[8vh] w-full fixed z-30 top-0 left-0 bg-white border-b border-borderColor bg-opacity-50 backdrop-blur-md flex items-center">
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-10">
            <Link to="/" className="logo flex items-center gap-2">
              <img src={logo} alt="logo" width={30} />
              <p className="font-bold text-xl">
                Mega<span className="text-lime-600 italic">mart</span>
              </p>
            </Link>

            <ul className="flex items-center gap-4">
              <NavLink to="/" className="font-medium text-neutral-400">
                Home
              </NavLink>
              <NavLink to="/products" className="font-medium text-neutral-400">
                Products
              </NavLink>
            </ul>
          </div>
          <div className="flex justify-between items-center gap-6">
            <div>
              <input
                type="text"
                name="search"
                value={searchKey}
                onChange={handleSearch}
                placeholder="Search here..."
                className="border border-borderColor px-4 py-2 w-[20rem] rounded-md outline-none"
              />
            </div>
            <ul className="flex items-center gap-6">
              <Link to="/cart" className="relative">
                <FaCartShopping className="text-xl" />
                <span className="absolute -top-4 -right-4 font-semibold bg-white text-lime-500 px-1 rounded-lg">
                  {state.cart.length}
                </span>
              </Link>

              {isLogin ? (
                <div className="group relative cursor-pointer">
                  <img
                    src={avatar}
                    alt=""
                    width={35}
                    className="rounded-full"
                  />

                  <div className="absolute opacity-0 invisible top-1/2 z-10 right-0 w-[12rem] duration-300 ease-in-out group-hover:opacity-100 group-hover:top-full group-hover:visible">
                    <div className="mt-3 rounded-md border bg-white border-borderColor">
                      <div className="p-3 text-right">
                        <p className="text-base font-medium">
                          {loginUser?.fName} {loginUser?.lName}
                        </p>
                        <p className="text-sm font-medium text-neutral-400">
                          {loginUser?.number}
                        </p>
                      </div>
                      <button
                        onClick={handleLogout}
                        className="flex justify-center items-center gap-2 px-3 py-2 bg-red-50 font-medium w-full text-red-500 "
                      >
                        <IoLogOut /> <span className="text-sm">logout</span>
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  to="/login"
                  className="flex items-center gap-2 px-3 py-2 bg-neutral-900 rounded-md text-white"
                >
                  <IoLogIn /> <span>Login</span>
                </Link>
              )}
            </ul>
          </div>
        </div>
      </nav>
      {debounceText.length > 0 && (
        <Search searchText={debounceText} setSearchKey={setSearchKey} />
      )}
    </>
  );
};

export default Navbar;
