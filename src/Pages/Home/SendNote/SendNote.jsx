import PageTitle from "../../../Components/PageTitle/PageTitle";
import Lottie from "lottie-react";
import message from "../../../assets/message.json"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SendNote = () => {

  const handleSubmit = (event) => {
    event.preventDefault();
    toast("Thanks for share your thought")
  }

  return (
    <div className="md:mt-16">
      <div className="my-10">
      <PageTitle heading={"Send Your Thought"}></PageTitle>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-10 px-2 md:px-24 lg:px-40">
        <div className="my-auto">
          <form>
            <label
              className="font-bold text-2xl text-slate-700"
            >
              Name
            </label>{" "}
            <br />
            <input
              className="border-s-2 border-2 w-full shadow-xl border-slate-700 rounded mb-6 mt-2 px-2 py-2"
              type="text"
              name="user_name"
              placeholder="Your Name"
            />{" "}
            <br />
            <label
              className="font-bold text-2xl text-slate-700"
            >
              Email
            </label>{" "}
            <br />
            <input
              className="border-s-2 border-2 w-full shadow-xl border-slate-700 rounded mb-6 mt-2 px-2 py-2"
              type="email"
              name="user_email"
              placeholder="Your Email"
            />{" "}
            <br />
            <label
              className="font-bold text-2xl text-slate-700"
            >
              Message
            </label>{" "}
            <br />
            <textarea
              className="border-s-2 border-2 shadow-xl w-full h-[200px] border-slate-700 rounded mb-3 mt-2 px-2 pt-1"
              name="message"
              placeholder="Type Your Message"
            />{" "}
            <br />
            <input
              onClick={handleSubmit}
              className="font-semibold rounded text-2xl bg-[#0A5403] hover:bg-[#0e8d02] text-white cursor-pointer md:mb-4 px-5 py-2 btn-color hover:shadow-xl"
              type="submit"
              value="Send Message"
            />
            <ToastContainer />
          </form>
        </div>
        <div
        >
          <Lottie
            className="w-full relative mx-auto"
            animationData={message}
            loop={true}
          />
        </div>
      </div>
    </div>
  );
};

export default SendNote;
