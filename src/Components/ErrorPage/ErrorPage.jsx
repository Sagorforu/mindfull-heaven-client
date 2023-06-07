import { Link, useRouteError } from "react-router-dom";
import Lottie from "lottie-react";
import error404 from "../../assets/error.json";

const ErrorPage = () => {
  const { error } = useRouteError();
  return (
    <section className="flex items-center h-screen p-16 bg-gray-100 text-gray-900">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <Lottie className="w-1/2" animationData={error404} loop={true} />
        <div className="max-w-md text-center mb-8">
          <p className="text-2xl font-semibold text-[#0A5403] md:text-3xl mb-8">
            {error?.message}
          </p>
          <Link
            to="/"
            className="btn btn-outline text-white hover:text-black hover:bg-[#8ad33d] bg-[#0A5403] text-center  mt-10 px-5 py-3 rounded-md font-semibold text-base"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
