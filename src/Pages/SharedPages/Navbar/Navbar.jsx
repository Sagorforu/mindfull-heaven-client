import { FaBars } from "react-icons/fa";
import { MdOutlineLogout } from "react-icons/md";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import { useState } from "react";
import useAuth from "../../../Components/Hooks/useAuth";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const { user, logOut } = useAuth();

  const toggleOpen = () => {
    setOpen(!isOpen);
  };

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
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
