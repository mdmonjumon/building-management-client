import React from "react";
import sideLogo from "../../../assets/logo.png";
import UserMenu from "./Menu/UserMenu";
import { Link } from "react-router-dom";
import { MdOutlineAnnouncement } from "react-icons/md";
import MenuItem from "../Shared/MenuItem/MenuItem";

const Sidebar = () => {
  return (
    <div className="w-72 h-[100vh] pt-10 bg-gray-100">
      <div className="flex justify-center">
        <Link to="/">
          <img className="w-20 rounded-full" src={sideLogo} alt="" />
        </Link>
      </div>

      <div className="mt-10"></div>
      <div>
        {/* menu for users */}
        <UserMenu></UserMenu>

        {/* Announcements */}
        <MenuItem
          address={"announcements"}
          label={"Announcements"}
          icon={MdOutlineAnnouncement}
          size={25}
        ></MenuItem>
      </div>
    </div>
  );
};

export default Sidebar;
