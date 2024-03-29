import { Helmet } from "react-helmet-async";
import PageTitle from "../../Components/PageTitle/PageTitle";
import { useEffect, useState } from "react";
import useAuth from "../../Components/Hooks/useAuth";

const EnrolledClass = () => {
  const { user } = useAuth();
  const [enrolledClass, setEnrolledClass] = useState([]);

  useEffect(() => {
    fetch(`https://mindfull-heaven-server.vercel.app/enrolled/${user.email}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setEnrolledClass(data);
      });
  }, [user]);

  return (
    <div>
      <Helmet>
        <title>MindFull Heaven | Enrolled Class</title>
      </Helmet>
      <PageTitle heading={"Enrolled Class"}></PageTitle>
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
              </tr>
            </thead>
            <tbody>
              {enrolledClass.map((selectClass, index) => (
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
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EnrolledClass;
