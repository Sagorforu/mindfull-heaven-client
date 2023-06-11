import { Helmet } from "react-helmet-async";
import PageTitle from "../../Components/PageTitle/PageTitle";
import { useQuery } from "@tanstack/react-query";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAuth from "../../Components/Hooks/useAuth";
import { ImSpinner } from "react-icons/im";
import useAxiosSecure from "../../Components/Hooks/useAxiosSecure";

const UsersManage = () => {
  const { loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    return res.data;
  });

  const handleDelete = (user) => {
    fetch(`http://localhost:5000/users/${user._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          refetch();
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: `${user.name} user delete successfully!!!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  const handleMakeAdmin = (user) => {
    fetch(`http://localhost:5000/users/admin/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: `${user.name} is an Admin now!!!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  const handleMakeInstructor = (user) => {
    fetch(`http://localhost:5000/users/instructor/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: `${user.name} is an Instructor now!!!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="mb-16">
      <Helmet>
        <title>MindFull Heaven | Manage Users</title>
      </Helmet>
      <PageTitle heading={"Manage Users"}></PageTitle>
      <div className="bg-[#f4ffe9] p-3 mt-4 md:p-20">
        <div className="overflow-x-auto flex justify-between w-full text-normal font-normal">
          <table className="table w-full overflow-x-auto mx-3 md:mx-20 mb-20">
            {/* head */}
            <thead className="text-white">
              <tr className="">
                <th className="bg-[#0A5403]">SL</th>
                <th className="bg-[#0A5403]">Email</th>
                <th className="bg-[#0A5403]">Make Admin</th>
                <th className="bg-[#0A5403]">Make Instructor</th>
                <th className="bg-[#0A5403]">ACTION</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user._id}>
                  <td className="font-bold">{index + 1}</td>

                  <td className="font-bold">{user.email}</td>
                  <td>
                    {user.role === "admin" ? (
                      <button
                        disabled
                        className="text-base  font-bold hover:bg-[#60aa10] bg-[#8ad33d] p-3 rounded text-white cursor-not-allowed"
                      >
                        Admin
                      </button>
                    ) : (
                      <button
                        onClick={() => handleMakeAdmin(user)}
                        className="text-base  font-bold hover:bg-[#60aa10] bg-[#8ad33d] p-3 rounded text-white"
                      >
                        {loading ? (
                          <ImSpinner
                            size={24}
                            className="animate-spin"
                          ></ImSpinner>
                        ) : (
                          "Make Admin"
                        )}
                      </button>
                    )}
                  </td>
                  <td>
                    {user.role === "instructor" ? (
                      <button
                        disabled
                        className="text-base  font-bold hover:bg-[#60aa10] bg-[#8ad33d] p-3 rounded text-white"
                      >
                        Instructor
                      </button>
                    ) : (
                      <button
                        onClick={() => handleMakeInstructor(user)}
                        className="text-base font-bold hover:bg-[#60aa10] bg-[#8ad33d] p-3 rounded text-white"
                      >
                        {loading ? (
                          <ImSpinner
                            size={24}
                            className="animate-spin"
                          ></ImSpinner>
                        ) : (
                          "Make Instructor"
                        )}
                      </button>
                    )}
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(user)}
                      className="text-xl hover:bg-[#a31111] bg-[#d61e1e] p-3 rounded text-white"
                    >
                      {loading ? (
                        <ImSpinner
                          size={24}
                          className="animate-spin"
                        ></ImSpinner>
                      ) : (
                        <FaTrashAlt></FaTrashAlt>
                      )}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UsersManage;
