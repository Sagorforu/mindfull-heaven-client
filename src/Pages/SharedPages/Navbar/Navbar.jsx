import { FaBars } from "react-icons/fa";
import { HiSun } from "react-icons/hi";
import { MdOutlineLogout } from "react-icons/md";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import useAuth from "../../../Components/Hooks/useAuth";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const { user, logOut } = useAuth();
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const toggleOpen = () => {
    setOpen(!isOpen);
  };

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <div className="navbar bg-base-100 md:py-6 py-3 fixed top-0 left-0 z-10 my-container mx-20 shadow-xl">
      <div className="navbar-start">
        <div className="">
          <div className="">
            <label
              onClick={toggleOpen}
              className="btn btn-ghost  font-bold text-2xl btn-circle"
            >
              <FaBars></FaBars>
            </label>
          </div>
        </div>
        <div className="relative">
          {isOpen && (
            <ul className="menu menu-sm mt-3 p-2 absolute -left-12 top-6 shadow bg-base-100 rounded-box w-52">
              <li className="font-bold">
                <Link className="text-base" to="/">
                  Home
                </Link>
              </li>
              <li className="font-bold">
                <Link className="text-base" to="/instructor">
                  Instructor
                </Link>
              </li>
              <li className="font-bold">
                <Link className="text-base" to="/classes">
                  Classes
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
      <div className="navbar-center">
        <Link to="/">
          <Logo></Logo>
        </Link>
      </div>
      <div className="navbar-end">
        <div className="me-4">
          <label className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input type="checkbox" onChange={handleToggle} />

            {/* sun icon */}

            <HiSun
              className="swap-on fill-current w-10 h-10"
              viewBox="0 0 24 24"
            ></HiSun>

            {/* moon icon */}
            <svg
              className="swap-off fill-current w-10 h-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
        </div>
        {user ? (
          <div className="text-lg font-bold mr-3">
            <Link to="/dashboard">Dashboard</Link>
          </div>
        ) : (
          ""
        )}
        <div
          data-tip={user ? user.displayName : null}
          className="tooltip tooltip-bottom font-bold"
        >
          <button className="btn btn-ghost btn-circle">
            <img
              className="rounded-full"
              src={
                user
                  ? user.photoURL
                  : "https://i.ibb.co/9HpR0yB/Nice-Png-user-icon-png-1280406.png"
              }
              alt="profile"
              height="30"
              width="30"
            />
          </button>
        </div>
        <div className="mr-l md:ml-3 font-bold">
          {user ? (
            <div data-tip="Log Out" className="tooltip tooltip-bottom">
              <button
                onClick={handleLogOut}
                className="btn btn-ghost btn-circle"
              >
                <MdOutlineLogout className="text-3xl font-bold"></MdOutlineLogout>
              </button>
            </div>
          ) : (
            <Link className="md:text-lg text-base" to="login">
              <button>Sign In</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
