import React from "react";
import sideLogo from "../../../assets/logo.png";
import UserMenu from "./Menu/UserMenu";
import { Link } from "react-router-dom";
import { MdOutlineAnnouncement } from "react-icons/md";
import MenuItem from "../Shared/MenuItem/MenuItem";
import MemberMenu from "./Menu/MemberMenu";
import AdminMenu from "./Menu/AdminMenu";

const Sidebar = () => {
  return (
    <div className="w-64 h-[100vh] pt-10 bg-gray-100">
      <div className="flex justify-center">
        <Link to="/">
          <img className="w-20 rounded-full" src={sideLogo} alt="" />
        </Link>
      </div>

      <div className="mt-10"></div>
      <div>
        {/* menu for users */}
        <UserMenu></UserMenu>


        {/* menu for member */}
          <MemberMenu></MemberMenu>

          {/* menu for admin */}
          <AdminMenu></AdminMenu>


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
