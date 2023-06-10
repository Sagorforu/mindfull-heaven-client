import { Helmet } from "react-helmet-async";
import PageTitle from "../../Components/PageTitle/PageTitle";
import { useQuery } from "@tanstack/react-query";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const UsersManage = () => {
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("http://localhost:5000/users");
    return res.json();
  });

  const handleDelete = () => {};
  const handleMakeAdmin = (user) => {
    fetch(`http://localhost:5000/users/admin/${user._id}`, {
      method: "PATCH"
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if (data.modifiedCount) {
        refetch()
        Swal.fire({
          position: 'top-center',
          icon: 'success',
          title: `${user.email} is an Admin now!!!`,
          showConfirmButton: false,
          timer: 1500
        })
      }
    })
  };
  const handleMakeInstructor = () => {};

  return (
    <div className="mb-16">
      <Helmet>
        <title>MindFull Heaven | Manage Users</title>
      </Helmet>
      <PageTitle heading={"Manage Users"}></PageTitle>
      <div className="bg-[#f4ffe9] p-20">
        <div className="overflow-x-auto flex justify-between w-full text-normal font-normal">
          <table className="table w-full mx-20 mb-20">
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
                      className="text-base hover:bg-[#60aa10] bg-[#8ad33d] p-3 rounded text-white"
                    >
                      Admin
                    </button>
                    ) : (
                      <button
                        onClick={() => handleMakeAdmin(user)}
                        className="text-base hover:bg-[#60aa10] bg-[#8ad33d] p-3 rounded text-white"
                      >
                        Make Admin
                      </button>
                    )}
                  </td>
                  <td>
                    {user.role === "instructor" ? (
                      "Instructor"
                    ) : (
                      <button
                        onClick={() => handleMakeInstructor(user)}
                        className="text-base hover:bg-[#60aa10] bg-[#8ad33d] p-3 rounded text-white"
                      >
                        Make Instructor
                      </button>
                    )}
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(user)}
                      className="text-xl hover:bg-[#a31111] bg-[#d61e1e] p-3 rounded text-white"
                    >
                      <FaTrashAlt></FaTrashAlt>
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
