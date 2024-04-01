import { logo } from "../../assets";
import RegisterForm from "../../components/authForm/RegisterForm";

const Register = () => {
  return (
    <div className=" container h-screen flex justify-center items-center">
      <div className="bg-white bg-opacity-50  w-4/5 rounded-2xl p-10 border border-borderColor">
        <img src={logo} alt="logo" width={50} className="mb-6" />
        <div className=" flex justify-between gap-6 items-start ">
          <div className="w-1/2 flex flex-col gap-3">
            <h2 className="text-5xl font-semibold text-title">Register</h2>
            <p className="text-text">Use your valid information to register.</p>
          </div>
          <div className="w-1/2">
            <RegisterForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
