import { Helmet } from "react-helmet-async";
import PageTitle from "../../Components/PageTitle/PageTitle";
import useAuth from "../../Components/Hooks/useAuth";
import { useEffect, useState } from "react";
import { useRef } from "react";
import Swal from "sweetalert2";

const MyClass = () => {
  const { user } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [updateId, setUpdateId] = useState(null);
  const [classes, setClasses] = useState([]);
  const nameValue = useRef(null);
  const seatsValue = useRef(null);
  const priceValue = useRef(null);

  useEffect(() => {
    fetch(`http://localhost:5000/myClass/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setClasses(data);
      });
  }, [user]);

  const handleUpdate = (updateId) => {
    const name = nameValue.current.value;
    const seats = seatsValue.current.value;
    const price = priceValue.current.value;
    const updateData = {
      name: name,
      seats: parseFloat(seats),
      price: parseFloat(price),
    };
    fetch(`http://localhost:5000/manageClass/update/${updateId}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "FeedBack added successfully!!!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  const handleModalOpen = (id) => {
    setUpdateId(id);
    console.log(id);
    setIsModalOpen(true);
  };
  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Helmet>
        <title>MindFull Heaven | My Class</title>
      </Helmet>
      <PageTitle heading={"My Class"}></PageTitle>
      <div className="grid grid-cols-3 gap-5 mb-20">
        {classes.map((singleClass) => (
          <div
            key={singleClass._id}
            className="card w-96 bg-base-100 shadow-xl group"
          >
            <figure className="px-10 pt-10">
              <img
                className="transform transition-transform duration-200 group-hover:scale-110"
                src={singleClass.classPhoto}
                alt="yoga class"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Class Name: {singleClass.className}
              </h2>
              <h2 className="card-title">
                Instructor Name: {singleClass.instructorName}
              </h2>
              <p>Instructor Email: {singleClass.instructorEmail}</p>
              <p>Available Seats: {singleClass.availableSeats}</p>
              <p>Price: ${singleClass.price}</p>
              {/* TODO: enrolled students come from after payment  */}
              <p>Enrolled Students: {"0"}</p>
              {singleClass.status === "denied" ? (
                <p className="font-semibold">
                  Feedback: {singleClass.feedback}
                </p>
              ) : (
                <></>
              )}
              <p>
                Status:
                {singleClass.status === "denied" ? (
                  <span className="badge ms-3 p-3 text-white bg-red-600">
                    {singleClass.status}
                  </span>
                ) : (
                  <span className="badge ms-3 p-3 text-white bg-[#0A5403]">
                    {singleClass.status}
                  </span>
                )}
              </p>
              <div className="card-actions mt-5 flex justify-between">
                <button
                  onClick={() => handleModalOpen(singleClass._id)}
                  className="bg-[#0A5403] hover:bg-[#0e8d02] text-white font-bold py-2 px-4 rounded"
                >
                  Update
                </button>
                {isModalOpen && (
                  <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className=" p-20 absolute inset-0"></div>
                    <div className="bg-[#f3fff1] text-black shadow-sm  p-5 relative rounded-xl transition-transform transition-duration-[500ms]">
                      <button
                        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                        onClick={handleModalClose}
                      >
                        ✕
                      </button>
                      <h3 className="text-2xl text-center font-bold mb-4">
                        Update Class
                      </h3>
                      <div>
                        <h3 className="text-lg font-bold mb-2">Class Name</h3>
                        <input
                          className="w-[350px] md:w-[500px] px-2 py-3 rounded-lg shadow-md"
                          placeholder="Update Class Name"
                          type="text"
                          ref={nameValue}
                          id=""
                        />
                      </div>
                      <div className="mt-6">
                        <h3 className="text-lg font-bold mb-2">Update Seats</h3>
                        <input
                          className="w-[350px] md:w-[500px] px-2 py-3 rounded-lg shadow-md"
                          placeholder="Update Seats Number"
                          type="number"
                          ref={seatsValue}
                          id=""
                        />
                      </div>
                      <div className="mt-6">
                        <h3 className="text-lg font-bold mb-2">Update Price</h3>
                        <input
                          className="w-[350px] md:w-[500px] px-2 py-3 rounded-lg shadow-md"
                          placeholder="Update Price"
                          type="text"
                          ref={priceValue}
                          id=""
                        />
                      </div>
                      <br />
                      <div className="text-right">
                        <button
                          onClick={() => handleUpdate(updateId)}
                          className="bg-[#0A5403] hover:bg-[#0e8d02] text-white font-bold py-2 px-4 rounded mt-3"
                        >
                          Update Class
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyClass;
