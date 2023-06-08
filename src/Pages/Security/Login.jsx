import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import Lottie from "lottie-react";
import loginPage from "../../assets/loginPage.json"

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Handle form submission
  };

  const togglePasswordVisibility = (e) => {
    const passwordInput = e.target.previousSibling;
    passwordInput.type =
      passwordInput.type === "password" ? "text" : "password";
  };

  return (
    <div>
      <Helmet>
        <title>MindFull Heaven | Sign In</title>
      </Helmet>
      <div className="mt-40 grid grid-cols-2 items-center justify-center">
        <div className="mx-auto">
          <h1 className="text-center">Sign In</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label className="text-xl font-semibold" htmlFor="email">
                Email
              </label>{" "}
              <br />
              <input
                className="border-b-2"
                placeholder="Your Email"
                type="email"
                id="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
                })}
              />
              {errors.email && <span>{errors.email.message}</span>}
            </div>
            <div>
              <label className="text-xl font-semibold" htmlFor="password">
                Password
              </label>{" "}
              <br />
              <input
                className="border-b-2"
                placeholder="Your Password"
                type="password"
                id="password"
                {...register("password", { required: "Password is required" })}
              />
              <i className="password-toggle" onClick={togglePasswordVisibility}>
                Toggle Password
              </i>
              {errors.password && <span>{errors.password.message}</span>}
            </div>
            <div>
              <button
                className="px-5 py-1 text-white font-bold bg-[#74c023]"
                type="submit"
              >
                Login
              </button>
            </div>
            <div>
              <a href="/registration">Create an account</a>
            </div>
            <div>
              <button type="button">Login with Google</button>
            </div>
          </form>
        </div>
        <div>
        <Lottie className="w-full" animationData={loginPage} loop={true} />
        </div>
      </div>
    </div>
  );
};

export default Login;
