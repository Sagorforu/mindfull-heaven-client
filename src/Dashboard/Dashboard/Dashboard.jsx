import { Link, Outlet, useNavigate } from "react-router-dom";
import useAuth from "../../Components/Hooks/useAuth";
import useAdmin from "../../Components/Hooks/useAdmin";
import useInstructor from "../../Components/Hooks/useInstructor";
import useStudent from "../../Components/Hooks/useStudent";
import { FaBookOpen, FaCheckSquare, FaHome, FaSignInAlt, FaUser, FaUsers } from "react-icons/fa";
import { ImBook, ImProfile } from "react-icons/im";
import { toast } from "react-toastify";
import { MdLibraryBooks } from "react-icons/md";

const Dashboard = () => {
  const { user, logOut } = useAuth();
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  const [isStudent] = useStudent();
  const navigate = useNavigate();


  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast('Log Out successful')
        navigate('/');
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col pt-10 items-center justify-center">
        <Outlet></Outlet>
        <div></div>
        <label
          htmlFor="my-drawer-2"
          className="btn bg-[#0A5403] text-white hover:bg-[#0ea100] drawer-button lg:hidden"
        >
          Open Dashboard
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <div className="p-4 w-80 h-full bg-[#0A5403] space-y-5">
          <div className="text-center pt-4">
            <div className="avatar mx-auto">
              <div className="  rounded-full">
                <img src={user?.photoURL} alt="" />
              </div>
            </div>
            <h1 className="text-white text-3xl font-bold">
              {user?.displayName}
            </h1>
            <h1 className="text-white text-base font-semibold mt-1">
              {user?.email}
            </h1>
            <h1 className="text-white text-base font-semibold mt-1">
              Role: {"Admin"}
            </h1>
          </div>
          <ul className="pt-10">
            {/* Sidebar content here */}
            {isAdmin ? (
              <>
                {" "}
                <Link to="/dashboard/manageClasses">
                  <li className="hover:bg-white hover:text-slate-800 text-white border-b-2 hover:font-bold px-4 py-1 rounded flex items-center gap-5">
                    <MdLibraryBooks></MdLibraryBooks> Manage Classes
                  </li>
                </Link>
                <Link to="/dashboard/usersManage">
                  <li className="hover:bg-white hover:text-slate-800 text-white border-b-2 hover:font-bold px-4 py-1 rounded mt-3 flex items-center gap-5">
                    <FaUsers></FaUsers> Manage Users
                  </li>
                </Link>
              </>
            ) : (
              <></>
            )}
            {isStudent ? (
              <>
                {" "}
                <Link to="/dashboard/selectedClass">
                  <li className="hover:bg-white hover:text-slate-800 text-white border-b-2 hover:font-bold px-4 py-1 rounded flex items-center gap-5">
                    <FaCheckSquare></FaCheckSquare> My Selected Classes
                  </li>
                </Link>
                <Link to="/dashboard/enrolledClass">
                  <li className="hover:bg-white hover:text-slate-800 text-white border-b-2 hover:font-bold px-4 py-1 rounded mt-3 flex items-center gap-5">
                  <FaBookOpen></FaBookOpen> My Enrolled Classes
                  </li>
                </Link>
              </>
            ) : (
              <></>
            )}
            {isInstructor ? (
              <>
                {" "}
                <Link to="/dashboard/addClass">
                  <li className="hover:bg-white hover:text-slate-800 text-white border-b-2 hover:font-bold px-4 py-1 rounded flex items-center gap-5">
                    <ImBook></ImBook> Add a Class
                  </li>
                </Link>
                <Link to="/dashboard/myClass">
                  <li className="hover:bg-white hover:text-slate-800 text-white border-b-2 hover:font-bold px-4 py-1 rounded mt-3 flex items-center gap-5">
                  <MdLibraryBooks></MdLibraryBooks> My Classes
                  </li>
                </Link>
              </>
            ) : (
              <></>
            )}
          </ul>
          <div className="pt-40">
            <Link to="/" className="hover:bg-white hover:text-slate-800 text-white border-b-2 hover:font-bold px-4 py-1 rounded mt-3 flex items-center gap-5">
              <FaHome></FaHome> Home
            </Link>
            <Link to="/about" className="hover:bg-white hover:text-slate-800 text-white border-b-2 hover:font-bold px-4 py-1 rounded mt-3 flex items-center gap-5">
              <ImProfile></ImProfile> About
            </Link>
            <Link to="/profile" className="hover:bg-white hover:text-slate-800 text-white border-b-2 hover:font-bold px-4 py-1 rounded mt-3 flex items-center gap-5">
              <FaUser></FaUser> Profile
            </Link>
            <Link onClick={handleLogOut} className="hover:bg-white hover:text-slate-800 text-white border-b-2 hover:font-bold px-4 py-1 rounded mt-3 flex items-center gap-5">
              <FaSignInAlt></FaSignInAlt> Log Out
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
