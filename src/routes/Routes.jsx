import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
  },
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
