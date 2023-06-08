import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import Lottie from "lottie-react";
import signUp from "../../assets/signUp.json";
import loginImage from "../../assets/loginBackground/little.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [passwordVisible, setPasswordVisible] = useState(false);

  const onSubmit = (data) => {
    console.log(data); // Handle form submission
  };

  const validatePassword = (value) => {
    if (value.length < 6) {
      return "Password must be at least 6 characters long";
    } else if (!/(?=.*[A-Z])/.test(value)) {
      return "Password must contain at least one uppercase letter";
    } else if (!/(?=.*[!@#$%^&*()])/.test(value)) {
      return "Password must contain at least one special character";
    }
  };

  return (
    <div>
      <Helmet>
        <title>MindFull Heaven | Sign Up</title>
      </Helmet>
      <div className="mt-40 grid grid-cols-1 md:grid-cols-2 items-center justify-center">
        <div className="mx-auto">
          <img className="relative h-[900px]" src={loginImage} alt="" />
          <div className="absolute top-20 left-20 md:top-72 md:left-80">
            <h1 className="text-center mb-3 text-2xl md:text-4xl font-bold">
              Register Now
            </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-2">
                <label className="text-xl font-semibold" htmlFor="name">
                  Name
                </label>{" "}
                <br />
                <input
                className="border-b-2 py-1 px-2 mt-1"
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  {...register("name", { required: "Name is required" })}
                />{" "}
                <br />
                {errors.name && (
                  <span className="text-red-600">{errors.name.message}</span>
                )}
              </div>
              <div>
                <label className="text-xl font-semibold" htmlFor="email">Email</label> <br />
                <input
                className="border-b-2 py-1 px-2 mt-1"
                  type="email"
                  id="email"
                  placeholder="Email Here"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid email",
                    },
                  })}
                />{" "}
                <br />
                {errors.email && (
                  <span className="text-red-600">{errors.email.message}</span>
                )}
              </div>
              <div>
                <label className="text-xl font-semibold" htmlFor="password">Password</label> <br />
                <input
                className="border-b-2 py-1 px-2 mt-1"
                placeholder="Password Here"
                  type={passwordVisible ? "text" : "password"}
                  id="password"
                  {...register("password", {
                    required: "Password is required",
                    validate: validatePassword,
                  })}
                />
                <button
                  className="password-toggle inline-block absolute translate-y-3 -translate-x-6"
                  onClick={() => setPasswordVisible(!passwordVisible)}
                >
                  {passwordVisible ? (
                    <FaEyeSlash></FaEyeSlash>
                  ) : (
                    <FaEye></FaEye>
                  )}
                </button>
                <br />
                {errors.password && (
                  <span className="text-red-600">
                    {errors.password.message}
                  </span>
                )}
              </div>
              <div>
                <label className="text-xl font-semibold" htmlFor="confirmPassword">Confirm Password</label> <br />
                <input
                className="border-b-2 py-1 px-2 mt-1"
                  type="password"
                  id="confirmPassword"
                  placeholder="Confirm Password"
                  {...register("confirmPassword", {
                    required: "Confirm Password is required",
                    validate: (value) =>
                      value === watch("password") || "Passwords do not match",
                  })}
                />{" "}
                <br />
                {errors.confirmPassword && (
                  <span className="text-red-600">
                    {errors.confirmPassword.message}
                  </span>
                )}
              </div>
              <div>
                <label className="text-xl font-semibold" htmlFor="photo">Upload Photo</label> <br />
                <input type="file" id="photo" {...register("photo")} />
              </div>
              <div className="mt-2">
                <button className="px-5 py-1 text-white font-bold bg-[#74c023]" type="submit">Register</button>
              </div>
              <div className="my-2">
                <h4 className="font-semibold">
                  Already have an account?{" "}
                  <Link className="underline text-[#0A5403]" to="/login">
                    Sign In
                  </Link>
                </h4>
              </div>
              <div>
                <img
                  className="w-1/2"
                  src="https://i.ibb.co/tB24MCG/google.png"
                  alt=""
                />
              </div>
            </form>
          </div>
        </div>
        <div>
          <Lottie className="w-full" animationData={signUp} loop={true} />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
