import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

const Login = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const [authUser, setAuthUser] = useAuth(); // Use Auth Context

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    // console.log(userInfo);
    await axios
      .post(`http://localhost:3000/user/login`, userInfo)
      .then((response) => {
        if (response.data) {
          toast.success("Login successful");
        }
        localStorage.setItem("ChatApp", JSON.stringify(response.data));
        setAuthUser(response.data); // Set authUser after successful login
        navigate("/"); // Redirect to home
      })
      .catch((error) => {
        if (error.response) {
          toast.error("Error: " + error.response.data.error);
        }
      });
  };
  return (
    <>
      <div>
        <ToastContainer />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
          className="flex h-screen items-center justify-center"
        >
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              width: "300px",
              gap: "12px",
            }}
            onSubmit={handleSubmit(onSubmit)}
            className="border border-gray-300 px-6 py-3 rounded-md"
          >
            <h1 className="text-2xl text-center">Login your account</h1>

            {/* Email Input */}
            <label className="input validator flex items-center gap-2">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
              </svg>
              <input
                type="email"
                className="grow"
                placeholder="Email"
                {...register("email", { required: "true" })}
              />
            </label>
            {errors.email && (
              <span className="text-red-500 text-sm font-semibold">
                This field is required
              </span>
            )}
            {/* Password Input */}
            <label className="input validator flex items-center gap-2">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                  <circle
                    cx="16.5"
                    cy="7.5"
                    r=".5"
                    fill="currentColor"
                  ></circle>
                </g>
              </svg>
              <input
                type="password"
                className="grow"
                placeholder="Password"
                {...register("password", { required: true })}
              />
            </label>
            {errors.password && (
              <span className="text-red-500 text-sm font-semibold">
                This field is required
              </span>
            )}

            <button
              type="submit"
              value="login"
              className="bg-gray-700 text-white py-2 rounded-md cursor-pointer"
            >
              Login
            </button>
            <p>
              Don't have an account?{" "}
              <Link to="/signup" className="text-blue-500">
                signup
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
