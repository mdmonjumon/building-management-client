import React from "react";
import { Link } from "react-router-dom";
import SocialLogin from "../../components/Shared/SocialLogin";

const SignUp = () => {
  return (
    <div className="hero min-h-screen">
      <div className="card bg-gray-100 md:w-96 shadow-2xl">
        <h2 className="text-lg font-medium text-center mt-10">Sign Up</h2>
        <div className="card-body">
          <form action="">
            <fieldset className="fieldset space-y-2">
              {/* name */}
              <div>
                <label className="label text-base">Name</label>
                <input
                  type="text"
                  name="name"
                  className="w-full px-4 py-3 border rounded-md border-gray-300 focus:outline-lime-500 bg-gray-200 text-gray-900"
                  placeholder="Enter your name here"
                />
              </div>

              {/* image */}
              <div>
                <fieldset className="fieldset">
                  <label className="label text-base">Select Image</label>
                  <input
                    type="file"
                    className="file-input file-input-ghost file-input-neutral"
                  />
                </fieldset>
              </div>
              {/* email */}
              <div>
                <label className="label text-base">Email</label>
                <input
                  type="email"
                  name="email"
                  className="w-full px-4 py-3 border rounded-md border-gray-300 focus:outline-lime-500 bg-gray-200 text-gray-900"
                  placeholder="Enter your email here"
                />
              </div>

              {/* password */}
              <div>
                <label className="label text-base">Password</label>
                <input
                  type="password"
                  name="password"
                  className="w-full px-4 py-3 border rounded-md border-gray-300 focus:outline-lime-500 bg-gray-200 text-gray-900"
                  placeholder="********"
                />
              </div>

              <button
                type="submit"
                className="btn mt-4 bg-lime-500 text-white text-lg"
              >
                Continue
              </button>
            </fieldset>
          </form>
          <SocialLogin title="Login"></SocialLogin>
          <p className="text-center text-base">
            Already have an account? <Link to="/login" className="text-[#681DA8]">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
