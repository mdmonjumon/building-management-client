import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../../components/Shared/SocialLogin";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import { ImSpinner9 } from "react-icons/im";
import toast from "react-hot-toast";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { loading, signIn } = useAuth();
  const navigate = useNavigate()

  // login func
  const handleSignin = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    try {
      await signIn(email, password);
      toast.success('Sign in success')
      navigate('/')
    } catch (error) {
      toast.error(error.message)
    }
  };
  return (
    <div className="hero min-h-screen">
      <div className="card bg-gray-100 md:w-96 shadow-2xl">
        <h2 className="text-lg font-medium text-center mt-10">Log In</h2>
        <p className="text-center mt-3">Sign in to access your account</p>
        <div className="card-body">
          <form onSubmit={handleSignin} action="">
            <fieldset className="fieldset space-y-2">
              {/* email */}
              <div>
                <label className="label text-base">Email</label>
                <input
                  name="email"
                  type="email"
                  className="w-full px-4 py-3 border rounded-md border-gray-300 focus:outline-lime-500 bg-gray-200 text-gray-900"
                  placeholder="Email"
                  required
                />
              </div>

              {/* password */}
              <div className="relative">
                <label className="label text-base">Password</label>
                <input
                  name="password"
                  type={`${showPassword ? "text" : "password"}`}
                  className="w-full px-4 py-3 border rounded-md border-gray-300 focus:outline-lime-500 bg-gray-200 text-gray-900"
                  placeholder="Password"
                  required
                />
                <div
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-8.5 right-5"
                >
                  {showPassword ? (
                    <FaEye size={25} />
                  ) : (
                    <FaEyeSlash size={25} />
                  )}
                </div>
              </div>
              
              <div>

              </div>

              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="btn mt-4 bg-lime-500 text-white text-lg"
              >
                {loading ? (
                  <ImSpinner9 size={25} className="animate-spin" />
                ) : (
                  "Continue"
                )}
              </button>
            </fieldset>
          </form>
          <SocialLogin title="Login"></SocialLogin>
          <p className="text-center text-base">
            Don't have an account?{" "}
            <Link to="/signup" className="text-[#681DA8]">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
