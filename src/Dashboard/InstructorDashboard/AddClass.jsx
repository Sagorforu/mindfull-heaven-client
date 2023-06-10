import { Helmet } from "react-helmet-async";
import PageTitle from "../../Components/PageTitle/PageTitle";
import useAuth from "../../Components/Hooks/useAuth";

const AddClass = () => {
    const { user } = useAuth();
    console.log(user);
  return (
    <div className="mb-20">
      <Helmet>
        <title>MindFull Heaven | Add a Class</title>
      </Helmet>
      <PageTitle heading={"Add a Class"}></PageTitle>
      <div className="bg-[#f4ffe9] p-20 px-40">
        <form>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="className"
            >
              Class Name
            </label>
            <input
              className="border border-gray-300 rounded-md p-2 w-full"
              type="text"
              id="className"
              name="className"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="classImage"
            >
              Class Image
            </label>
            <input
              className="border border-gray-300 rounded-md p-2 w-full"
              type="file"
              id="classImage"
              name="classImage"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="instructorName"
            >
              Instructor Name
            </label>
            <input
              className="border border-gray-300 rounded-md p-2 w-full"
              type="text"
              id="instructorName"
              name="instructorName"
              readOnly
              value={user.displayName}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="instructorEmail"
            >
              Instructor Email
            </label>
            <input
              className="border border-gray-300 rounded-md p-2 w-full"
              type="email"
              id="instructorEmail"
              name="instructorEmail"
              readOnly
              value={user.email}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="availableSeats"
            >
              Available Seats
            </label>
            <input
              className="border border-gray-300 rounded-md p-2 w-full"
              type="number"
              id="availableSeats"
              name="availableSeats"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="price"
            >
              Price
            </label>
            <input
              className="border border-gray-300 rounded-md p-2 w-full"
              type="number"
              id="price"
              name="price"
              required
            />
          </div>
          <div className="text-center">
            <button
              className="bg-[#0A5403] hover:bg-[#0e8d02] text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Add Class
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddClass;
