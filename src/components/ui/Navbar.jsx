import { Link, NavLink, useNavigate } from "react-router-dom";
import { avatar, logo } from "../../assets";
import { FaCartShopping } from "react-icons/fa6";
import { IoLogIn, IoLogOut } from "react-icons/io5";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context";
import toast from "react-hot-toast";
import { useAuth } from "../../hooks/useAuth";

const Navbar = () => {
  const navigate = useNavigate();
  const { removeLoginData } = useContext(AuthContext);
  const [isLogin, setIsLogin] = useState(false);
  const { auth, loginUser } = useAuth();

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

  return (
    <nav className="h-[8vh] w-full fixed top-0 left-0 bg-white border-b border-borderColor bg-opacity-5 backdrop-blur-md flex items-center">
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
              id=""
              placeholder="Search here..."
              className="border border-borderColor px-4 py-2 w-[20rem] rounded-md outline-none"
            />
          </div>
          <ul className="flex items-center gap-6">
            <li className="relative">
              <FaCartShopping className="text-xl" />
              <span className="absolute -top-4 -right-4 font-semibold bg-white text-lime-500 px-1 rounded-lg">
                1
              </span>
            </li>
            {isLogin ? (
              <div className="group relative cursor-pointer">
                <img src={avatar} alt="" width={35} className="rounded-full" />

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
  );
};

export default Navbar;