import React, { useState } from "react";
import Container from "../../components/Shared/Container";
import { Outlet } from "react-router-dom";
import NavigationLink from "../../components/Shared/NavigationLink";
import Sidebar from "../../components/Dashboard/Sidebar/Sidebar";
import { CgMenuGridR } from "react-icons/cg";
import { MdClose } from "react-icons/md";

const DashboardLayout = () => {
  const [open, setOpen] = useState(false);
  return (
    <Container>
      <div className="flex">
        <div
          className="fixed lg:hidden btn left-5 top-2 z-20"
        >
          {open ? <MdClose onClick={() => setOpen(false)} size={30} /> : <CgMenuGridR onClick={() => setOpen(true)} size={30} />}{" "}
        </div>
        <div
          className={`rounded-l-2xl fixed z-10 lg:static ${
            open ? "left-0 duration-700" : "-left-60 duration-700"
          }`}
        >
          {/* sidebar */}
          <Sidebar setOpen={setOpen}></Sidebar>
        </div>

        <div
          onClick={() => setOpen(false)}
          className="flex-1 bg-gray-400 rounded-r-2xl p-[var(--dashboard-padding)] min-h-[100vh]"
        >
          <Outlet></Outlet>
        </div>
      </div>
    </Container>
  );
};

export default DashboardLayout;
