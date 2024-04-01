import { Link } from "react-router-dom";
import Field from "../common/Field";

const LoginForm = () => {
  return (
    <form>
      <Field regId="number">
        <input
          type="number"
          placeholder="mobile Number"
          name="number"
          className="input-field"
        />
      </Field>

      <Field regId="password">
        <input
          type="password"
          placeholder="Enter Password"
          name="password"
          className="input-field"
        />
      </Field>

      <div className="flex justify-end items-center gap-3">
        <Link
          to="/register"
          className="px-6 py-2.5 mt-3 rounded-full hover:bg-brandLight duration-300"
        >
          Create account
        </Link>
        <button className="px-6 py-2.5 mt-3 bg-brand rounded-full text-white font-semibold hover:bg-brandHover duration-300">
          Login
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
