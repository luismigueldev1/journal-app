import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  loginWithEmailAndPasswordAction,
  loginWithGoogleProvider,
} from "../../actions/authActions";
import { removeErrorAction } from "../../actions/uiActions";
import { useForm } from "../../hooks/useForm";

export default function LoginPage() {
  const [values, handleInputChange] = useForm({
    email: "luismiguel@gmail.com",
    password: "123456",
  });

  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.ui);
  const { error } = useSelector((state) => state.ui);

  const handleLogin = (event) => {
    event.preventDefault();
    dispatch(loginWithEmailAndPasswordAction(values.email, values.password));
  };

  const handleGoogleLogin = (event) => {
    event.preventDefault();
    dispatch(loginWithGoogleProvider());
  };

  useEffect(() => {
    return () => {
      dispatch(removeErrorAction());
    };
  }, [dispatch]);
  return (
    <div className="auth__container">
      <h3 className="text--center">Login Page</h3>

      {error && (
        <div className="alert alert-danger">
          <p className="alert-title ">{error}</p>
        </div>
      )}

      <form
        onSubmit={handleLogin}
        className="animate__animated animate__fadeIn animate__faster"
      >
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
          <button type="submit" className="pointer" disabled={loading}>
            {loading ? "Loading.." : "Login"}
          </button>
        </div>

        <hr />
        <div className="google__login pointer">
          <p>
            <b>Login with social:</b>
          </p>
          <button
            className="pointer mt-1 google-login-button"
            onClick={handleGoogleLogin}
          >
            <picture>
              <img src="/assets/google-logo.png" alt="Google Login" />
            </picture>

            <p>
              <b>Sign in with google</b>
            </p>
          </button>
        </div>
        <div className="create__account">
          <Link to="/auth/register">Create an account</Link>
        </div>
      </form>
    </div>
  );
}
