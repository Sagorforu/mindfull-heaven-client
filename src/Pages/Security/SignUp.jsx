import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import Lottie from "lottie-react";
import signUp from "../../assets/signUp.json";
import loginImage from "../../assets/loginBackground/little.jpg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import useAuth from "../../Components/Hooks/useAuth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ImSpinner } from "react-icons/im";
import { saveUser } from "../../API/auth";

const SignUp = () => {
  const { createUser, createGoogleUser, loading, setLoading, updateUserInfo } =
    useAuth();
  const {
    register,
    watch,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const onSubmit = (data) => {
    const photo = data.photo[0];
    const formImgData = new FormData();
    formImgData.append("image", photo);
    const createUrl = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_imgbb_key
    }`;
    console.log(createUrl);
    fetch(createUrl, {
      method: "POST",
      body: formImgData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        const imageUrl = imgData.data.display_url;
        createUser(data.email, data.password)
          .then((result) => {
            if (result.user) {
              updateUserInfo(data.name, imageUrl).then(() => {
                saveUser(result.user);
                reset();
                setLoading(false);
                toast("User sign up successfully");
                navigate(from, { replace: true });
              });
            }
          })
          .catch((error) => {
            console.log(error);
            toast(error.message);
            setLoading(false);
          });
      })
      .catch((error) => console.log(error));
  };
  const handleGoogleUser = () => {
    createGoogleUser()
      .then((result) => {
        saveUser(result.user);
        toast("User sign up successfully");
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
        toast(error.message);
        setLoading(false);
      });
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
      <div className="mt-40 grid grid-cols-1 md:grid-cols-2 gap-4 items-center justify-center">
        <div className="mx-auto">
          <img
            className="relative h-[700px] md:h-[870px]"
            src={loginImage}
            alt=""
          />
          <div className="absolute top-52 left-16 md:top-64 md:left-80">
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
                <label className="text-xl font-semibold" htmlFor="email">
                  Email
                </label>{" "}
                <br />
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
                <label className="text-xl font-semibold" htmlFor="password">
                  Password
                </label>{" "}
                <br />
                <input
                  name="password"
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
                <label
                  className="text-xl font-semibold"
                  htmlFor="confirmPassword"
                >
                  Confirm Password
                </label>{" "}
                <br />
                <input
                  className="border-b-2 py-1 px-2 mt-1"
                  type="password"
                  name="confirmPassword"
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
                <label className="text-xl font-semibold" htmlFor="photo">
                  Upload Photo
                </label>{" "}
                <br />
                <input type="file" id="photo" {...register("photo")} />
              </div>
              <div className="mt-2">
                <button
                  className="px-5 py-1 text-white font-bold bg-[#74c023]"
                  type="submit"
                >
                  {loading ? (
                    <ImSpinner size={24} className="animate-spin"></ImSpinner>
                  ) : (
                    "Sign up"
                  )}
                </button>
              </div>
              <div className="my-2">
                <h4 className="font-semibold">
                  Already have an account?{" "}
                  <Link className="underline text-[#0A5403]" to="/login">
                    Sign In
                  </Link>
                </h4>
              </div>
              <div className="divider mr-20">OR</div>
              <Link>
                <div onClick={handleGoogleUser}>
                  <img
                    className="w-1/2"
                    src="https://i.ibb.co/tB24MCG/google.png"
                    alt=""
                  />
                </div>
              </Link>
            </form>
          </div>
        </div>
        <div>
          <Lottie className="w-full" animationData={signUp} loop={true} />
        </div>
        <ToastContainer></ToastContainer>
      </div>
    </div>
  );
};

export default SignUp;
