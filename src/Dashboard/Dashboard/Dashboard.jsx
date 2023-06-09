import { Link } from "react-router-dom";
import useAuth from "../../Components/Hooks/useAuth";
import useAdmin from "../../Components/Hooks/useAdmin";
import useInstructor from "../../Components/Hooks/useInstructor";
import useStudent from "../../Components/Hooks/useStudent";

const Dashboard = () => {
  const { user } = useAuth();
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    const [isStudent] = useStudent();

    // const linksByRole = {
    //     admin: [
    //         { label: 'Dashboard', route: '/dashboard/dashboard' },
    //         { label: 'Users', route: '/admin/users' },
    //         { label: 'Settings', route: '/admin/settings' },
    //       ],
    //       instructor: [
    //         { label: 'Dashboard', route: '/instructor/dashboard' },
    //         { label: 'Courses', route: '/instructor/courses' },
    //         { label: 'Students', route: '/instructor/students' },
    //       ],
    //       student: [
    //         { label: 'Dashboard', route: '/student/dashboard' },
    //         { label: 'Courses', route: '/student/courses' },
    //         { label: 'Assignments', route: '/student/assignments' },
    //       ],
    //     };
    // }

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col pt-10 items-center justify-center">
        {/* Page content here */}
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
          <div className="text-center">
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
                <Link><li className="hover:bg-white hover:text-slate-800 text-white border-b-2 hover:font-bold px-4 py-1 rounded">
                  Manage Classes
                </li></Link>
                <Link><li className="hover:bg-white hover:text-slate-800 text-white border-b-2 hover:font-bold px-4 py-1 rounded mt-3">
                Manage Users
                </li></Link>
              </>
            ) : (
              <></>
            )}
            {isStudent ? (
              <>
                {" "}
                <Link><li className="hover:bg-white hover:text-slate-800 text-white border-b-2 hover:font-bold px-4 py-1 rounded">
                  My Selected Classes
                </li></Link>
                <Link><li className="hover:bg-white hover:text-slate-800 text-white border-b-2 hover:font-bold px-4 py-1 rounded mt-3">
                My Enrolled Classes
                </li></Link>
              </>
            ) : (
              <></>
            )}
            {isInstructor ? (
              <>
                {" "}
                <Link><li className="hover:bg-white hover:text-slate-800 text-white border-b-2 hover:font-bold px-4 py-1 rounded">
                  Add a Class
                </li></Link>
                <Link><li className="hover:bg-white hover:text-slate-800 text-white border-b-2 hover:font-bold px-4 py-1 rounded mt-3">
                My Classes
                </li></Link>
              </>
            ) : (
              <></>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
