import { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { CgMenuGridR, CgProfile } from "react-icons/cg";
import NavigationLink from "../NavigationLink";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import "../Navbar/navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { user, signOutUser } = useAuth();

  return (
    <div className="bg-[#9ba2ac8f] fixed top-0 z-50 w-full">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          {/* dropdown menu */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <CgMenuGridR size={35} />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavigationLink label="Home" address="/"></NavigationLink>
              </li>
              <li>
                <NavigationLink
                  label="Apartment"
                  address="/apartment"
                ></NavigationLink>
              </li>
            </ul>
          </div>
          <div className="flex justify-center items-center ml-3 lg:ml-16">
            <img
              className="w-16 h-16 size-full object-cover hidden lg:flex rounded-full mr-5"
              src={logo}
              alt=""
            />
            <Link className="text-xl">NZCONDOS <br /> APARTMENTS</Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-5">
            <li>
              <NavigationLink label="Home" address="/"></NavigationLink>
            </li>
            <li>
              <NavigationLink
                label="Apartment"
                address="/apartment"
              ></NavigationLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end relative">
          <div className="cursor-pointer" onClick={() => setOpen(!open)}>
            {user && user?.email ? (
              <img
                className="w-12 h-12 size-full object-cover rounded-full"
                src={user?.photoURL}
                alt="Profile image"
              />
            ) : (
              <CgProfile size={40} />
            )}
          </div>
          <div
            className={`${
              open ? "" : "hidden"
            } flex flex-col gap-2 bg-white px-5 py-2 shadow rounded absolute top-15 lg:-right-9`}
          >
            {user && user.email ? (
              <ul className="space-y-2 navLink">
                <li className="pointer-events-none">{user?.displayName}</li>
                <li>
                  <Link to="/signup">Dashboard</Link>
                </li>
                <li>
                  <button onClick={signOutUser}>Logout</button>
                </li>
              </ul>
            ) : (
              <ul className="navLink">
                <li>
                  <Link to="/signup">Sign Up</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
