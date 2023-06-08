import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import Lottie from "lottie-react";
import loginPage from "../../assets/loginPage.json";
import loginImage from "../../assets/loginBackground/little.jpg";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

const Login = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); 
  };

  return (
    <div>
      <Helmet>
        <title>MindFull Heaven | Sign In</title>
      </Helmet>
      <div className=" grid grid-cols-1 md:grid-cols-2 items-center justify-center">
        <div className="mx-auto">
          <img className="relative h-[500px]" src={loginImage} alt="" />
          <div className="absolute top-20 left-20 md:top-52 md:left-80">
            <h1 className="text-center text-2xl md:text-4xl font-bold">Sign In</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-2">
                <label className="text-xl font-semibold" htmlFor="email">
                  Email
                </label>{" "}
                <br />
                <input
                  className="border-b-2 py-1 px-2 mt-1"
                  placeholder="Your Email"
                  type="email"
                  id="email"
                  {...register("email", {
                    required: "Email is required"
                  })}
                /> <br />
                {errors.email && <span  className="text-red-600">{errors.email.message}</span>}
              </div>
              <div className="mb-2">
                <label className="text-xl font-semibold" htmlFor="password">
                  Password
                </label>{" "}
                <br />
                <input
                  className="border-b-2 py-1 px-2 mt-1"
                  placeholder="Your Password"
                  type={ passwordVisible ? "text" : "password"}
                  id="password"
                  {...register("password", {
                    required: "Password is required",
                  })}
                />
                
                <button
                  className="password-toggle inline-block absolute translate-y-3 -translate-x-6"
                  onClick={()=>setPasswordVisible(!passwordVisible)}
                >
                  {
                    passwordVisible ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                  }
                </button>
                <br />
                {errors.password && <span className="text-red-600">{errors.password.message}</span>}
              </div>
              <div>
                <button
                  className="px-5 py-1 text-white font-bold bg-[#74c023]"
                  type="submit"
                >
                  Login
                </button>
              </div>
              <div className="my-2">
                <h4 className="font-semibold">New to Yoga and Meditation? <Link className="underline text-[#0A5403]" to="/signUp">Sign Up</Link></h4>
              </div>
              <div>
                <img className="w-1/2" src="https://i.ibb.co/tB24MCG/google.png" alt="" />
              </div>
            </form>
          </div>
        </div>
        <div>
          <Lottie className="w-full" animationData={loginPage} loop={true} />
        </div>
      </div>
    </div>
  );
};

export default Login;
