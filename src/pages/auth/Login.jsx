import { Link } from "react-router-dom";
import { logo } from "../../assets";
import LoginForm from "../../components/authForm/LoginForm";
import { FaArrowRight } from "react-icons/fa6";

const Login = () => {
  return (
    <div className=" container h-screen flex flex-col justify-center items-center">
      <div className="bg-white w-4/5 rounded-2xl p-10 border border-borderColor">
        <img src={logo} alt="logo" width={50} className="mb-6" />
        <div className=" flex justify-between gap-6 items-start ">
          <div className="w-1/2 flex flex-col gap-3">
            <h2 className="text-5xl font-semibold text-title">Login</h2>
            <p className="text-text">
              Use your registered email address and password.
            </p>
          </div>
          <div className="w-1/2">
            <LoginForm />
          </div>
        </div>
      </div>
      <div className="w-4/5">
        <Link
          to="/admin-login"
          className="flex justify-start items-center gap-2 py-2.5 font-medium"
        >
          <span className="underline">Login as a Admin</span>{" "}
          <FaArrowRight className="text-sm" />
        </Link>
      </div>
    </div>
  );
};

export default Login;
