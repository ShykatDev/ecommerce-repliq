import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context";
import { flushSync } from "react-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const { setShowNav } = useContext(AuthContext);
  const handleLogoutAdmin = () => {
    flushSync(() => {
      setShowNav(true);
    });
    navigate("/admin-login");
  };

  return (
    <div className="">
      Dashboard
      <button onClick={handleLogoutAdmin}>logout</button>
    </div>
  );
};

export default Dashboard;
