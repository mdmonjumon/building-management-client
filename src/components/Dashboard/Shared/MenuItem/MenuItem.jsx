import React from "react";
import { NavLink } from "react-router-dom";

// eslint-disable-next-line no-unused-vars
const MenuItem = ({ label, icon: Icon, size, address }) => {

  return (
    <div className="mx-3">
      <NavLink
      to={address}
        className={`flex items-center gap-2 text-lg py-2 px-3 hover:bg-gray-300 hover:text-gray-600 hover:rounded`}
      >
        <Icon size={size} />
        {label}
      </NavLink>
    </div>
  );
};

export default MenuItem;
