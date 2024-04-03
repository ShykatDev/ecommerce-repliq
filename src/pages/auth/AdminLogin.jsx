import { logo } from "../../assets";
import AdminLoginForm from "../../components/authForm/AdminLoginForm";

const AdminLogin = () => {
  return (
    <div className=" container h-screen flex flex-col justify-center items-center">
      <div className="bg-white bg-opacity-50 md:w-4/5 rounded-2xl p-6 md:p-10 border border-borderColor">
        <img src={logo} alt="logo" className="mb-6 w-10" />
        <div className=" flex flex-col md:flex-row justify-between gap-6 items-start ">
          <div className="md:w-1/2 flex flex-col gap-3">
            <h2 className="text-xl font-medium md:text-3xl">
              Login
              <span className="text-neutral-400"> as an admin</span>
            </h2>
            <p className="text-text">
              Use your registered email address and password.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <AdminLoginForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
