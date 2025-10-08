import React from "react";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = ({ title = "" }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="divider">{`${title} with social accounts`}</div>

      <button className="flex justify-center items-center gap-1 cursor-pointer border-2 rounded border-gray-300 px-5 py-1">
        <FcGoogle size={32} />
        <span>Continue with Google</span>
      </button>
    </div>
  );
};

export default SocialLogin;
