import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Instructor from "../Pages/NavLinkPages/Instructor";
import Classes from "../Pages/NavLinkPages/Classes";
import Login from "../Pages/Security/Login";
import Dashboard from "../Dashboard/Dashboard/Dashboard";
import SignUp from "../Pages/Security/SignUp";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <ErrorPage></ErrorPage>,
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/instructor',
            element: <PrivateRoute><Instructor></Instructor></PrivateRoute>
        },
        {
            path: '/classes',
            element: <PrivateRoute><Classes></Classes></PrivateRoute>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/signUp',
            element: <SignUp></SignUp>
        }
      ]
    },
    {
        path: '/dashboard',
        element: <Dashboard></Dashboard>
    }
  ]);

export default router;