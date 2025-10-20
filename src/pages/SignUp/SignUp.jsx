import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../../components/Shared/SocialLogin";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { uploadImage } from "../../api/utils";
import { ImSpinner9 } from "react-icons/im";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { createUser, loading, updateUserProfile, setPostUser } = useAuth();
  const navigate = useNavigate();

  // sign up func
  const handleSignUp = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const image = form.image.files[0];
    const email = form.email.value;
    const password = form.password.value;
    const imageUrl = await uploadImage(image);

    try {
      // do something here
      await createUser(email, password);
      updateUserProfile(name, imageUrl)
        .then(() => {
          setPostUser(true);
        })
        .catch(() => {
          setPostUser(false);
        });

      toast.success("Sign up success");
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <div className="hero min-h-screen">
      <div className="card bg-gray-100 md:w-96 shadow-2xl">
        <h2 className="text-lg font-medium text-center mt-10">Sign Up</h2>
        <div className="card-body">
          <form onSubmit={handleSignUp} action="">
            <fieldset className="fieldset space-y-2">
              {/* name */}
              <div>
                <label className="label text-base">Name</label>
                <input
                  type="text"
                  name="name"
                  className="w-full px-4 py-3 border rounded-md border-gray-300 focus:outline-lime-500 bg-gray-200 text-gray-900"
                  placeholder="Enter your name here"
                  required
                />
              </div>

              {/* image */}
              <div>
                <fieldset className="fieldset">
                  <label className="label text-base">Select Image</label>
                  <input
                    type="file"
                    name="image"
                    className="file-input file-input-ghost file-input-neutral"
                    required
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
            Already have an account?{" "}
            <Link to="/login" className="text-[#681DA8]">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
