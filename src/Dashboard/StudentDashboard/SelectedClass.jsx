import { Helmet } from "react-helmet-async";
import PageTitle from "../../Components/PageTitle/PageTitle";
import { useEffect } from "react";
import useAuth from "../../Components/Hooks/useAuth";
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

const SelectedClass = () => {
  const { user } = useAuth();
  const [mySelectClasses, setMySelectClasses] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/selectedClass/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMySelectClasses(data);
      });
  }, [user]);

  const handleDelete = (selectClass) => {
    console.log(selectClass);
  };

  return (
    <div>
      <Helmet>
        <title>MindFull Heaven | Selected Class</title>
      </Helmet>
      <PageTitle heading={"Selected Class"}></PageTitle>
      <div className="bg-[#f4ffe9] p-3 mt-4 md:p-20">
        <div className="overflow-x-auto flex justify-between w-full text-normal font-normal">
          <table className="table w-full overflow-x-auto mx-3 md:mx-20 mb-20">
            {/* head */}
            <thead className="text-white">
              <tr className="">
                <th className="bg-[#0A5403]">SL</th>
                <th className="bg-[#0A5403]">Class Image</th>
                <th className="bg-[#0A5403]">class Name</th>
                <th className="bg-[#0A5403]">Instructor Name</th>
                <th className="bg-[#0A5403]">Price</th>
                <th className="bg-[#0A5403]">Delete</th>
              </tr>
            </thead>
            <tbody>
              {mySelectClasses.map((selectClass, index) => (
                <tr key={selectClass._id}>
                  <td className="font-bold">{index + 1}</td>
                  <td className="font-bold">
                    <div className="avatar">
                      <div className="mask mask-square w-12 h-12">
                        <img
                          src={selectClass.classPhoto}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </td>
                  <td className="font-bold">{selectClass.className}</td>
                  <td className="font-bold">{selectClass.instructorName}</td>
                  <td className="font-bold">$ {selectClass.price}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(selectClass)}
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

export default SelectedClass;
