import { NavLink } from "react-router-dom";

const NavLinks = () => {
    const user = "sagor";
  return (
    <div>
      <ul className="lg:flex py-3">
        <li className="lg:p-4 py-1 ps-3 font-semibold text-xl">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "active" : "text-[#383838]"
            }
          >
            Home
          </NavLink>
        </li>
        <li className="lg:p-4 py-1 ps-3 font-semibold text-xl">
          <NavLink
            to="/allToys"
            className={({ isActive }) =>
              isActive ? "active" : "text-[#383838]"
            }
          >
            All Toys
          </NavLink>
        </li>
        {user ? (
          <li className="lg:p-4 py-1 ps-3 font-semibold text-xl">
            <NavLink
              to="/myToys"
              className={({ isActive }) =>
                isActive ? "active" : "text-[#383838]"
              }
            >
              My Toys
            </NavLink>
          </li>
        ) : (
          ""
        )}
        {user ? (
          <li className="lg:p-4 py-1 ps-3 font-semibold text-xl">
            <NavLink
              to="/addToys"
              className={({ isActive }) =>
                isActive ? "active" : "text-[#383838]"
              }
            >
              Add Toys
            </NavLink>
          </li>
        ) : (
          ""
        )}
        <li className="lg:p-4 py-1 ps-3 font-semibold text-xl">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "active" : "text-[#383838]"
            }
          >
            About us
          </NavLink>
        </li>
        <li className="lg:p-4 py-1 ps-3 font-semibold text-xl">
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              isActive ? "active" : "text-[#383838]"
            }
          >
            Blogs
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavLinks;
