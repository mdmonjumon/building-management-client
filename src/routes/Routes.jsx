import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";
import Apartment from "../pages/Apartment/Apartment";
import DashboardLayout from "../layouts/DashboardLayout/DashboardLayout";
import PrivateRoute from "./PrivateRoute";
import Announcement from "../pages/Dashboard/Common/Announcement";
import UserProfile from "../pages/Dashboard/User/UserProfile/UserProfile";
import MemberProfile from "../pages/Dashboard/Member/MemberProfile";
import MakePayment from "../pages/Dashboard/Member/MakePayment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/apartment",
        element: <Apartment></Apartment>,
      },
    ],
  },

  // dashboard layout start here
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <UserProfile></UserProfile>,
      },

      // member menu start here
      {
        path: "/dashboard/member-profile",
        element: <MemberProfile></MemberProfile>,
      },
      {
        path: "make-payment",
        element:<MakePayment></MakePayment>
      },
      // member menu end here
      {
        path: "announcements",
        element: <Announcement></Announcement>,
      },
    ],
  },
  // dashboard layout end here
  {
    path: "/signup",
    element: <SignUp></SignUp>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
]);

export default router;
