import Modal from "./Modal";

const CardModal = ({
  singleClass,
  handleApprove,
  handleDeny,
  handleModalClose,
  handleModalOpen,
  isModalOpen,
  feedbackValue,
}) => {
   const  { _id, classPhoto, className, instructorName, instructorEmail, availableSeats, price, status} = singleClass;

  return (
    <div
      key={_id}
      className="card w-96 bg-base-100 shadow-xl group"
    >
      <figure className="px-10 pt-10">
        <img
          className="transform transition-transform duration-200 group-hover:scale-110"
          src={classPhoto}
          alt="yoga class"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Class Name: {className}</h2>
        <h2 className="card-title">
          Instructor Name: {instructorName}
        </h2>
        <p>Instructor Email: {instructorEmail}</p>
        <p>Available Seats: {availableSeats}</p>
        <p>Price: ${price}</p>
        <p>
          Status:
          {status === "denied" ? (
            <span className="badge ms-3 p-3 text-white bg-red-600">
              {status}
            </span>
          ) : (
            <span className="badge ms-3 p-3 text-white bg-[#0A5403]">
              {status}
            </span>
          )}
        </p>
        <div className="card-actions mt-5 flex justify-between">
          {status === "approve" ? (
            <button
              disabled
              className="bg-slate-500 text-white font-bold py-2 px-4 rounded cursor-not-allowed"
            >
              Approve
            </button>
          ) : (
            <button
              onClick={() => handleApprove(_id)}
              className="bg-[#0A5403] hover:bg-[#0e8d02] text-white font-bold py-2 px-4 rounded"
            >
              Approve
            </button>
          )}
          {status === "denied" ? (
            <button
              disabled
              className="bg-slate-500 text-white font-bold py-2 px-4 rounded cursor-not-allowed"
            >
              Deny
            </button>
          ) : (
            <button
              onClick={() => handleDeny(_id)}
              className="bg-red-700 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
            >
              Deny
            </button>
          )}
          <button
            onClick={() => handleModalOpen(_id)}
            className="bg-[#0A5403] hover:bg-[#0e8d02] text-white font-bold py-2 px-4 rounded"
          >
            FeedBack
          </button>
          <Modal id={_id} isModalOpen={isModalOpen} handleModalClose={handleModalClose} feedbackValue={feedbackValue}></Modal>
        </div>
      </div>
    </div>
  );
};

export default CardModal;
