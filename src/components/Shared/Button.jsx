import React from "react";

const Button = ({ label, onclick }) => {
  return (
    <button
      onClick={onclick}
      className="border px-5 py-2 text-lg rounded bg-slate-600 text-white cursor-pointer hover:bg-slate-500 
      duration-600 ease-in-out
      "
    >
      {label}
    </button>
  );
};

export default Button;
