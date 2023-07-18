import { useState } from "react";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import useAuth from "../../Components/Hooks/useAuth";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Classes = () => {
  const { user } = useAuth();
  const [approvedClasses, setApprovedClasses] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetch("https://mindfull-heaven-server.vercel.app/approveClasses")
      .then((res) => res.json())
      .then((data) => {
        setApprovedClasses(data);
      });
  }, []);

  const handleModalOpen = (singleClass) => {
    if (!user) {
      setIsModalOpen(true);
      return;
    }
    const selectedClassData = {
      classId: singleClass._id,
      className: singleClass.className,
      classPhoto: singleClass.classPhoto,
      instructorEmail: singleClass.instructorEmail,
      instructorName: singleClass.instructorName,
      price: singleClass.price,
      availableSeats: singleClass.availableSeats,
      email: user.email,
    };
    Swal.fire({
      title: "Are you sure to select this class?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#0A5403",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Add it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch("https://mindfull-heaven-server.vercel.app/selectedClass", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(selectedClassData),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.inserted > 0) {
              Swal.fire("Class has been added successfully.", "success");
            }
          });
      }
    });
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="mt-32 my-container">
      <Helmet>
        <title>MindFull Heaven | Classes</title>
      </Helmet>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {approvedClasses.map((singleClass) => (
          <div key={singleClass._id}>
            {singleClass.availableSeats === 0 ? (
              <div>
                <div className="card w-full bg-red-500 text-white shadow-xl group">
                  <figure className="px-10 pt-10">
                    <img
                      className="transform transition-transform duration-200  md:h-96 h-full group-hover:scale-110"
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
                    <p>Available Seats: {singleClass.availableSeats}</p>
                    <p>Price: ${singleClass.price}</p>
                    <div className="card-actions mt-5 flex justify-between">
                      {singleClass.availableSeats === 0 ? (
                        <button
                          onClick={() => handleModalOpen(singleClass._id)}
                          disabled
                          className="bg-[#0A5403] hover:bg-[#0e8d02] text-white font-bold py-2 px-4 rounded cursor-not-allowed"
                        >
                          Select
                        </button>
                      ) : (
                        <button
                          onClick={() => handleModalOpen(singleClass._id)}
                          className="bg-[#0A5403] hover:bg-[#0e8d02] text-white font-bold py-2 px-4 rounded"
                        >
                          Select
                        </button>
                      )}
                      {user ? (
                        <></>
                      ) : (
                        <>
                          {" "}
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
                                <h3 className="text-lg font-bold mb-4">
                                  Important Notice
                                </h3>
                                <h2>
                                  If you want to select this class you have to
                                  Login first.
                                </h2>
                                <div className="text-right">
                                  <Link to="/login">
                                    <button className="bg-[#0A5403] hover:bg-[#0e8d02] text-white font-bold py-2 px-4 rounded mt-3">
                                      Login
                                    </button>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="card w-full bg-base-100 shadow-xl group">
                <figure className="px-10 pt-10">
                  <img
                    className="transform transition-transform duration-200 md:h-96 h-full group-hover:scale-110"
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
                  <p>Available Seats: {singleClass.availableSeats}</p>
                  <p>Price: ${singleClass.price}</p>
                  <div className="card-actions mt-5 flex justify-between">
                    <button
                      onClick={() => handleModalOpen(singleClass)}
                      className="bg-[#0A5403] hover:bg-[#0e8d02] text-white font-bold py-2 px-4 rounded"
                    >
                      Select
                    </button>
                    {user ? (
                      <></>
                    ) : (
                      <>
                        {" "}
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
                              <h3 className="text-lg font-bold mb-4">
                                Important Notice
                              </h3>
                              <h2>
                                If you want to select this class you have to
                                Login first.
                              </h2>
                              <div className="text-right">
                                <Link to="/login">
                                  <button className="bg-[#0A5403] hover:bg-[#0e8d02] text-white font-bold py-2 px-4 rounded mt-3">
                                    Login
                                  </button>
                                </Link>
                              </div>
                            </div>
                          </div>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Classes;
