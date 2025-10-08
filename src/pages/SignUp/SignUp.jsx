import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="hero  min-h-screen">
      <div className="card bg-base-200 lg:w-1/4 shadow-2xl">
        <div className="card-body">
          <form action="">
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input
                type="email"
                className="input w-full"
                placeholder="Email"
              />
              <label className="label">Password</label>
              <input
                type="password"
                className="input w-full"
                placeholder="Password"
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Login</button>
            </fieldset>
          </form>
          <p className="text-center">
            Already have an account?<Link to="/login">Login</Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
