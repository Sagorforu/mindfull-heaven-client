import { Helmet } from "react-helmet-async";
import PageTitle from "../../Components/PageTitle/PageTitle";
import useAuth from "../../Components/Hooks/useAuth";
import { useState } from "react";
import Swal from "sweetalert2";

const AddClass = () => {
  const { user } = useAuth();
  const [photoURL, setPhotoURL] = useState("");
  //   console.log("photo url form useState", photoURL)

  const handleAddClass = (event) => {
    event.preventDefault();
    const form = event.target;
    const className = form.className.value;
    const instructorName = form.instructorName.value;
    const instructorEmail = form.instructorEmail.value;
    const availableSeats = form.availableSeats.value;
    const price = form.price.value;
    const photo = form.classImage.files[0];
    const formImgData = new FormData();
    formImgData.append("image", photo);
    const createUrl = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_imgbb_key
    }`;
    console.log("create photo url for add class image", createUrl);
    fetch(createUrl, {
      method: "POST",
      body: formImgData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        const imageUrl = imgData.data.display_url;
        setPhotoURL(imageUrl);
      })
      .catch((error) => console.log(error));
    console.log(photoURL);
    const classData = {
      className: className,
      instructorName: instructorName,
      instructorEmail: instructorEmail,
      availableSeats: parseFloat(availableSeats),
      price: parseFloat(price),
      classPhoto: photoURL,
      enrolled: parseFloat(0),
      status: "pending",
    };
    fetch("https://mindfull-heaven-server.vercel.app/addClass", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(classData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Your Class added successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
      form.reset()
  };

  return (
    <div className="mb-20">
      <Helmet>
        <title>MindFull Heaven | Add a Class</title>
      </Helmet>
      <PageTitle heading={"Add a Class"}></PageTitle>
      <div className="bg-[#f4ffe9] p-20 px-40">
        <form onSubmit={handleAddClass}>
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
              placeholder="Class Name Here"
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
              placeholder="Available Seats Number"
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
              type="text"
              id="price"
              name="price"
              placeholder="Price"
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
