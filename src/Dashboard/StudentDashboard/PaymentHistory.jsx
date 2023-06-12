import { useState } from "react";
import useAuth from "../../Components/Hooks/useAuth";
import PageTitle from "../../Components/PageTitle/PageTitle";
import { useEffect } from "react";
import moment from 'moment';

const PaymentHistory = () => {
    const [sort , setSort ] = useState("dec");
    const { user } = useAuth();
  const [enrolledClass, setEnrolledClass] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/enrolled/${user.email}?sort=${sort}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setEnrolledClass(data)
        // const enroll = data.map(d=> setEnrolledClass(d));
      });
  }, [user,sort]);

    return (
        <div>
            <PageTitle heading={"payment history"}></PageTitle>
            <div className="bg-[#f4ffe9] p-3 mt-4 md:p-20">
        <div className="overflow-x-auto flex justify-between w-full text-normal font-normal">
          <table className="table w-full overflow-x-auto mx-3 md:mx-20 mb-20">
            {/* head */}
            <thead className="text-white">
              <tr className="">
                <th className="bg-[#0A5403]">SL</th>
                <th className="bg-[#0A5403]">class Name</th>
                <th className="bg-[#0A5403]">User</th>
                <th className="bg-[#0A5403]">Date</th>
                <th className="bg-[#0A5403]">Price</th>
                <th className="bg-[#0A5403]">Transaction Id</th>
              </tr>
            </thead>
            <tbody>
              {enrolledClass.map((selectClass, index) => (
                <tr key={selectClass?._id}>
                  <td className="font-bold">{index + 1}</td>
                  <td className="font-bold">{selectClass?.className}</td>
                  <td className="font-bold">{selectClass?.payUser}</td>
                  <td className="font-bold">{moment(selectClass?.date).format('MMMM Do YYYY, h:mm:ss a')}</td>
                  <td className="font-bold">$ {selectClass?.price}</td>
                  <td className="font-bold">ID: {selectClass?.transactionId}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
        </div>
    );
};

export default PaymentHistory;