import { useContext } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context";
import { RiHome7Fill } from "react-icons/ri";
import { HiMiniUsers } from "react-icons/hi2";
import { FaBoxesPacking } from "react-icons/fa6";
import { HiDocumentCheck } from "react-icons/hi2";
import { IoLogOut } from "react-icons/io5";

const Sidebar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { setShowNav } = useContext(AuthContext);

  const handleLogoutAdmin = () => {
    setShowNav(true);
    navigate("/admin-login");
  };

  return (
    <div className="w-1/5 h-full bg-title p-6 border-r border-borderColor flex flex-col justify-between">
      <div>
        <h2 className="text-xs sm:text-lg font-medium text-white">Welcome</h2>
        <div className="mt-6 flex flex-col gap-2">
          <Link
            to="/dashboard"
            className={`font-medium flex items-center gap-1 text-neutral-400 ${
              pathname === "/dashboard" && "active"
            }`}
          >
            <RiHome7Fill className="text-2xl sm:text-base" />
            <span className="hidden sm:block">Home</span>
          </Link>
          <NavLink
            to="/dashboard/customers"
            className="font-medium text-neutral-400 flex items-center gap-1"
          >
            <HiMiniUsers className="text-2xl sm:text-base" />
            <span className="hidden sm:block">Customers</span>
          </NavLink>
          <NavLink
            to="/dashboard/products"
            className="font-medium text-neutral-400 flex items-center gap-1"
          >
            <FaBoxesPacking className="text-2xl sm:text-base" />
            <span className="hidden sm:block">Products</span>
          </NavLink>
          <NavLink
            to="/dashboard/orders"
            className="font-medium text-neutral-400 flex items-center gap-1"
          >
            <HiDocumentCheck className="text-2xl sm:text-base" />
            <span className="hidden sm:block">Orders</span>
          </NavLink>
        </div>
      </div>
      <div>
        <button
          onClick={handleLogoutAdmin}
          className="w-full py-2 text-center flex items-center justify-center bg-red-500 font-medium text-white rounded-lg"
        >
          <IoLogOut className="" />
          <span className="hidden sm:block">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
