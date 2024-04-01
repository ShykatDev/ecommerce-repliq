import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context";

const Homepage = () => {
  const navigate = useNavigate();
  const { removeLoginData } = useContext(AuthContext);

  return (
    <div>
      Homepage
      <button
        onClick={() => {
          navigate("/login");
          removeLoginData();
        }}
        className="bg-black px-6 py-2 text-white"
      >
        Logout
      </button>
    </div>
  );
};

export default Homepage;
