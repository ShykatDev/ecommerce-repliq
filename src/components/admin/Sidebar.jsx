import { useContext } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context";

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
        <h2 className="text-lg font-medium text-white">Welcome</h2>
        <div className="mt-6 flex flex-col gap-2">
          <Link
            to="/dashboard"
            className={`font-medium text-neutral-400 ${
              pathname === "/dashboard" && "active"
            }`}
          >
            Home
          </Link>
          <NavLink
            to="/dashboard/customers"
            className="font-medium text-neutral-400"
          >
            Customers
          </NavLink>
          <NavLink
            to="/dashboard/products"
            className="font-medium text-neutral-400"
          >
            Products
          </NavLink>
          <NavLink
            to="/dashboard/orders"
            className="font-medium text-neutral-400"
          >
            Orders
          </NavLink>
        </div>
      </div>
      <div>
        <button
          onClick={handleLogoutAdmin}
          className="w-full py-2 text-center bg-red-500 font-medium text-white rounded-lg"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
