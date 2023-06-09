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
import ManageClasses from "../Dashboard/AdminDashboard/ManageClasses";
import AddClass from "../Dashboard/InstructorDashboard/AddClass";
import MyClass from "../Dashboard/InstructorDashboard/MyClass";
import SelectedClass from "../Dashboard/StudentDashboard/SelectedClass";
import EnrolledClass from "../Dashboard/StudentDashboard/EnrolledClass";
import Profile from "../Pages/Profile/Profile";
import About from "../Pages/About/About";
import UsersManage from "../Dashboard/AdminDashboard/UsersManage";

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
        },
        {
            path: '/profile',
            element: <Profile></Profile>
        },
        {
            path: '/about',
            element: <About></About>
        }
      ]
    },
    {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: "/dashboard/manageClasses",
                element: <ManageClasses></ManageClasses>
            },
            {
                path: "/dashboard/usersManage",
                element: <UsersManage></UsersManage>
            },
            {
                path: "/dashboard/addClass",
                element: <AddClass></AddClass>
            },
            {
                path: "/dashboard/myClass",
                element: <MyClass></MyClass>
            },
            {
                path: "/dashboard/selectedClass",
                element: <SelectedClass></SelectedClass>
            },
            {
                path: "/dashboard/enrolledClass",
                element: <EnrolledClass></EnrolledClass>
            }
        ]
    }
  ]);

export default router;