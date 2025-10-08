import { Link } from "react-router-dom";
import SocialLogin from "../../components/Shared/SocialLogin";

const Login = () => {
  return (
    <div className="hero min-h-screen">
      <div className="card bg-gray-100 md:w-96 shadow-2xl">
        <h2 className="text-lg font-medium text-center mt-10">Log In</h2>
        <p className="text-center mt-3">Sign in to access your account</p>
        <div className="card-body">
          <form action="">
            <fieldset className="fieldset space-y-2">
              {/* email */}
              <div>
                <label className="label text-base">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border rounded-md border-gray-300 focus:outline-lime-500 bg-gray-200 text-gray-900"
                  placeholder="Email"
                />
              </div>

              {/* password */}
              <div>
                <label className="label text-base">Password</label>
                <input
                  type="password"
                  className="w-full px-4 py-3 border rounded-md border-gray-300 focus:outline-lime-500 bg-gray-200 text-gray-900"
                  placeholder="Password"
                />
              </div>

              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button type="submit" className="btn mt-4 bg-lime-500 text-white text-lg">Continue</button>
            </fieldset>
          </form>
          <SocialLogin title="Login"></SocialLogin>
          <p className="text-center text-base">
            Don't have an account? <Link to="/signup" className="text-[#681DA8]">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
