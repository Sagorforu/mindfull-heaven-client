const SingleClass = ({ singleClass }) => {
  const {
    className,
    classPhoto,
    instructorEmail,
    instructorName,
    availableSeats,
    price,
    status,
    _id,
  } = singleClass;

  return (
    <div className="card w-96 bg-base-100 shadow-xl group">
      <figure className="px-10 pt-10">
        <img className="transform transition-transform duration-200 group-hover:scale-110" src={classPhoto} alt="yoga class" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Class Name: {className}</h2>
        <h2 className="card-title">Instructor Name: {instructorName}</h2>
        <p>Instructor Email: {instructorEmail}</p>
        <p>Available Seats: {availableSeats}</p>
        <p>Price: ${price}</p>
        <p>
          Status:{" "}
          <span className="badge p-3 text-white bg-[#0A5403]">{status}</span>
        </p>
        <div className="card-actions mt-5 flex justify-between">
          <button className="bg-[#0A5403] hover:bg-[#0e8d02] text-white font-bold py-2 px-4 rounded">
            Approve
          </button>
          <button className="bg-red-700 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
            Deny
          </button>
          <button className="bg-[#0A5403] hover:bg-[#0e8d02] text-white font-bold py-2 px-4 rounded">
            FeedBack
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleClass;
