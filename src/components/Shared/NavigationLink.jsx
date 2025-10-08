import { NavLink } from "react-router-dom";

const NavigationLink = ({ label, address }) => {
  return (
    <NavLink
      to={address}
      className={({ isActive }) =>
        `flex items-center px-4 py-2 hover:bg-gray-400  hover:text-gray-700 ${
          isActive ? "bg-gray-500  text-white" : "text-black"
        }`
      }
    >
      <span className="text-lg font-medium">{label}</span>
    </NavLink>
  );
};

export default NavigationLink;
