import React from "react";
import Container from "../../components/Shared/Container";
import { Outlet } from "react-router-dom";
import NavigationLink from "../../components/Shared/NavigationLink";
import Sidebar from "../../components/Dashboard/Sidebar/Sidebar";

const DashboardLayout = () => {
  return (
    <Container>
      <div className="flex">
        <div>
            {/* sidebar */}
            <Sidebar></Sidebar>
        </div>
        <div className="pt-10 pl-10 flex-1">
          <Outlet></Outlet>
        </div>
      </div>
    </Container>
  );
};

export default DashboardLayout;
