import React from "react";
import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <div>
      <h3 className="text--center">Login Page</h3>

      <form>
        <div className="form__control">
          <label htmlFor="email">Email</label>
          <input type="text" name="email" />
        </div>
        <div className="form__control">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" />
        </div>
        <div className="form__control">
          <button type="submit" className="pointer">
            Login
          </button>
        </div>

        <hr />
        <div className="google__login pointer">
          <p>
            <b>Login with social:</b>
          </p>
          <button className="pointer">
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
