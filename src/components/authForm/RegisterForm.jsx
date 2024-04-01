import { Link } from "react-router-dom";
import Field from "../common/Field";

const RegisterForm = () => {
  return (
    <form>
      <Field regId="fName">
        <input
          type="text"
          placeholder="First Name"
          name="fName"
          className="input-field"
        />
      </Field>
      <Field regId="lName">
        <input
          type="text"
          placeholder="Last Name"
          name="lName"
          className="input-field"
        />
      </Field>
      <Field regId="number">
        <input
          type="number"
          placeholder="Mobile Number"
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
          to="/login"
          className="px-6 py-2.5 mt-3 rounded-full hover:bg-brandLight duration-300"
        >
          Already have an account
        </Link>
        <button className="px-6 py-2.5 mt-3 bg-brand rounded-full text-white font-semibold hover:bg-brandHover duration-300">
          Register
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
