import { Link } from "react-router-dom";
import { logo } from "../../assets";
import LoginForm from "../../components/authForm/LoginForm";
import { FaArrowRight } from "react-icons/fa6";

const Login = () => {
  return (
    <div className="container h-screen flex flex-col justify-center items-center">
      <div className="bg-white bg-opacity-50 md:w-4/5 rounded-2xl p-5 md:p-10 border border-borderColor">
        <img src={logo} alt="logo" className="mb-6 w-10" />
        <div className="flex flex-col md:flex-row justify-between gap-6 items-start ">
          <div className="md:w-1/2 flex flex-col gap-3">
            <h2 className="text-xl font-medium md:text-3xl">
              Login
              <span className="text-neutral-400"> as a user</span>
            </h2>
            <p className="text-text">
              Use your registered email address and password.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <LoginForm />
          </div>
        </div>
      </div>
      <div className="w-full md:w-4/5">
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
