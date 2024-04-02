import { useNavigate } from "react-router-dom";
import Field from "../common/Field";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import toast from "react-hot-toast";
import { AuthContext } from "../../context";
import { flushSync } from "react-dom";

const AdminLoginForm = () => {
  const [loading, setLoading] = useState(false);
  const admin = {
    number: "01712312312",
    password: "admin@123",
  };

  const navigate = useNavigate();

  const { setShowNav } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onLogin = (formData) => {
    setLoading(true);
    setTimeout(() => {
      if (
        formData.number === admin.number &&
        formData.password === admin.password
      ) {
        flushSync(() => {
          setShowNav(false);
        });
        toast.success("Successfully logged in");
        navigate("/dashboard");
        setLoading(false);
      }
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit(onLogin)}>
      <Field regId="number" error={errors.number}>
        <input
          {...register("number", {
            required: "Mobile number is required",
            minLength: {
              value: 11,
              message: "Mobile number must 11 characters long",
            },
          })}
          type="number"
          placeholder="Mobile Number"
          name="number"
          className={`input-field ${errors.number && "border-red-500"}`}
        />
      </Field>

      <Field regId="password" error={errors.password}>
        <input
          {...register("password", { required: "Password is required" })}
          type="password"
          placeholder="Enter Password"
          name="password"
          className={`input-field ${errors.password && "border-red-500"}`}
        />
      </Field>

      <small className="italic text-red-500">
        {errors?.root?.loginError?.message}
      </small>

      <div className="flex justify-end items-center gap-3">
        <button className="px-6 py-2.5 mt-3 bg-brand rounded-full text-white font-semibold hover:bg-brandHover duration-300">
          {loading ? (
            <span className="flex items-center gap-2">
              <AiOutlineLoading3Quarters className="animate-spin" /> Loading
            </span>
          ) : (
            "Login"
          )}
        </button>
      </div>
    </form>
  );
};

export default AdminLoginForm;
