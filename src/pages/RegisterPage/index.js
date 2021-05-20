import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../hooks/useForm";
import { isFormValid } from "./functions";
import { registerWithEmailAndPasswordAction } from "../../actions/authActions";
import { removeErrorAction } from "../../actions/uiActions";

export default function RegisterPage() {
  const [values, handleInputChange] = useForm({
    name: "Luis Miguel",
    email: "luismiguel@gmail.com",
    password: "123456",
    password2: "123456",
  });

  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.ui);

  const handleRegister = (event) => {
    event.preventDefault();
    if (isFormValid(dispatch, values)) {
      dispatch(
        registerWithEmailAndPasswordAction(
          values.email,
          values.password,
          values.name
        )
      );
    }
  };

  useEffect(() => {
    return () => {
      dispatch(removeErrorAction());
    };
  }, [dispatch]);

  return (
    <div className="auth__container">
      <h3 className="text--center">Register Page</h3>

      {error && (
        <div className="alert alert-danger">
          <p className="alert-title ">{error}</p>
        </div>
      )}

      <form
        onSubmit={handleRegister}
        className="animate__animated animate__fadeIn animate__faster"
      >
        <div className="form__control">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="form__control">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            value={values.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="form__control">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={values.password}
            onChange={handleInputChange}
          />
        </div>
        <div className="form__control">
          <label htmlFor="password2">Repeat password</label>
          <input
            type="password"
            name="password2"
            value={values.password2}
            onChange={handleInputChange}
          />
        </div>
        <div className="form__control">
          <button type="submit" className="pointer" disabled={loading}>
            {loading ? "Loading..." : "Register"}
          </button>
        </div>

        <hr />
        <div className="google__login pointer">
          <p>
            <b>Login with social:</b>
          </p>
          <button className="pointer mt-1">
            <picture>
              <img src="/assets/google-logo.png" alt="Google Login" />
            </picture>

            <p>
              <b>Sign in with google</b>
            </p>
          </button>
        </div>
        <div className="create__account">
          <Link to="/auth/login">Already register? Login</Link>
        </div>
      </form>
    </div>
  );
}
