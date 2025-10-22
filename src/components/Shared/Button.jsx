import React from "react";
import { ImSpinner9 } from "react-icons/im";

const Button = ({ label, onclick, isLoading=false }) => {
  return (
    <button
      onClick={onclick}
      className="border px-5 py-2 text-lg rounded bg-slate-600 text-white cursor-pointer hover:bg-slate-500 
      duration-600 ease-in-out
      "
    >
      {isLoading ? <ImSpinner9 size={25} className="animate-spin" /> : label}
    </button>
  );
};

export default Button;
