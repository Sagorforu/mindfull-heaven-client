import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Instructor from "../Pages/NavLinkPages/Instructor";
import Classes from "../Pages/NavLinkPages/Classes";
import Login from "../Pages/Security/Login";
import Dashboard from "../Dashboard/Dashboard/Dashboard";

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
            element: <Instructor></Instructor>
        },
        {
            path: '/classes',
            element: <Classes></Classes>
        },
        {
            path: '/login',
            element: <Login></Login>
        }
      ]
    },
    {
        path: '/dashboard',
        element: <Dashboard></Dashboard>
    }
  ]);

export default router;