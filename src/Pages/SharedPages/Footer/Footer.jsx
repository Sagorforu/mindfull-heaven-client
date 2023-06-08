import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    const currentYear = new Date().getFullYear();

  return (
    <footer className="footer footer-center p-10 mt-20 bg-[#053101] text-primary-content">
      <div className="space-y-0 md:space-y-4">
        <Link to="/">
          <h1 className="text-3xl md:text-5xl font-semibold text-[#74c023]">
            MindFull <span className="font-bold text-[#8ad33d]">Heaven</span>
          </h1>
        </Link>
        <p className="font-semibold text-white">
          Yoga and Meditation Classes <br />
          Promoting Wellness and Serenity since 2020
        </p>
        <p className="font-semibold text-white">
          Copyright © {currentYear} - All right reserved
        </p>
      </div>
      <div>
        <div className="grid grid-flow-col gap-4 text-white">
          <Link>
            <FaTwitter className=" font-extrabold text-2xl"></FaTwitter>
          </Link>
          <Link>
            <FaYoutube className=" font-extrabold text-2xl"></FaYoutube>
          </Link>
          <Link>
            <FaFacebook className=" font-extrabold text-2xl"></FaFacebook>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
