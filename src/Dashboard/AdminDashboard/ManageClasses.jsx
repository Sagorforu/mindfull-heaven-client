import { Helmet } from "react-helmet-async";
import PageTitle from "../../Components/PageTitle/PageTitle";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Components/Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useRef } from "react";

const ManageClasses = () => {
  const [axiosSecure] = useAxiosSecure();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [feedbackId, setFeedbackId] = useState(null);
  const feedbackValue = useRef(null);
  const { data: classes = [], refetch } = useQuery(["classes"], async () => {
    const res = await axiosSecure.get("/manageClass");
    return res.data;
  });

  const handleFeedback = (feedbackId) => {
    const feedbackText = feedbackValue.current.value;
    const feedback = {
      feedback: feedbackText,
    };
    fetch(`https://mindfull-heaven-server.vercel.app/manageClass/feedback/${feedbackId}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(feedback),
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
          refetch();
        }
      });
  };
  const handleApprove = (singleClass) => {
    fetch(`https://mindfull-heaven-server.vercel.app/manageClass/approve/${singleClass._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: `${singleClass.className} is approve now!!!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  const handleDeny = (singleClass) => {
    fetch(`https://mindfull-heaven-server.vercel.app/manageClass/denied/${singleClass._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-center",
            icon: "error",
            title: `${singleClass.className} is denied !!!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  const handleModalOpen = (id) => {
    setFeedbackId(id);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="mb-20">
      <Helmet>
        <title>MindFull Heaven | Manage Classes</title>
      </Helmet>
      <PageTitle heading={"Manage Classes"}></PageTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
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
                {singleClass.status === "approve" ? (
                  <button
                    disabled
                    className="bg-slate-500 text-white font-bold py-2 px-4 rounded cursor-not-allowed"
                  >
                    Approve
                  </button>
                ) : (
                  <button
                    onClick={() => handleApprove(singleClass)}
                    className="bg-[#0A5403] hover:bg-[#0e8d02] text-white font-bold py-2 px-4 rounded"
                  >
                    Approve
                  </button>
                )}
                {singleClass.status === "denied" ? (
                  <button
                    disabled
                    className="bg-slate-500 text-white font-bold py-2 px-4 rounded cursor-not-allowed"
                  >
                    Deny
                  </button>
                ) : (
                  <button
                    onClick={() => handleDeny(singleClass)}
                    className="bg-red-700 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                  >
                    Deny
                  </button>
                )}
                <button
                  onClick={() => handleModalOpen(singleClass._id)}
                  className="bg-[#0A5403] hover:bg-[#0e8d02] text-white font-bold py-2 px-4 rounded"
                >
                  FeedBack
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
                      <h3 className="text-lg font-bold mb-4">Feedback Modal</h3>
                      <input
                        className="w-[350px] md:w-[500px] h-[200px] md:h-[300px] px-4 pt-4 pb-60 rounded-xl shadow-md"
                        placeholder="Your Feedback Here"
                        type="text"
                        name="feedback"
                        ref={feedbackValue}
                        id=""
                      />{" "}
                      <br />
                      <div className="text-right">
                        <button
                          onClick={() => handleFeedback(feedbackId)}
                          className="bg-[#0A5403] hover:bg-[#0e8d02] text-white font-bold py-2 px-4 rounded mt-3"
                        >
                          Send Feedback
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

export default ManageClasses;
