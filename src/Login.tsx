import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import type { RegisterRequest } from "./interfaces/RegisterRequest";
import type { LoginRequest } from "./interfaces/LoginRequest";

import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaSignInAlt,
  FaLeaf,
} from "react-icons/fa";

function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginRequest>();

  const onSubmitLogics = (data: LoginRequest) => {
    const users: RegisterRequest[] = JSON.parse(
      localStorage.getItem("users") || "[]"
    );

    const user = users.find(
      (u) =>
        u.email === data.email &&
        u.password === data.password
    );

    if (user) {
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify(user)
      );

      alert("✅ Login Successful");

      reset();

      navigate("/");
    } else {
      alert("❌ Invalid Email or Password");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-white to-green-200 flex items-center justify-center px-4">

      <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl p-8">

        <div className="text-center mb-8">

          <div className="w-20 h-20 mx-auto rounded-full bg-green-100 flex items-center justify-center">

            <FaLeaf className="text-4xl text-green-700" />

          </div>

          <h1 className="text-4xl font-bold text-green-700 mt-5">
            Fresh Mart
          </h1>

          <p className="text-gray-500 mt-2">
            Login to continue shopping
          </p>

        </div>

        <form
          onSubmit={handleSubmit(onSubmitLogics)}
          className="space-y-5"
        >

          <div>

            <label className="font-semibold text-gray-700">
              Email Address
            </label>

            <div className="flex items-center border rounded-xl mt-2 px-4">

              <FaEnvelope className="text-gray-400" />

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-4 outline-none"
                {...register("email", {
                  required: "Email is required",
                })}
              />

            </div>

            {errors.email && (
              <p className="text-red-500 mt-1 text-sm">
                {errors.email.message}
              </p>
            )}

          </div>

          <div>

            <label className="font-semibold text-gray-700">
              Password
            </label>

            <div className="flex items-center border rounded-xl mt-2 px-4">

              <FaLock className="text-gray-400" />

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                className="w-full p-4 outline-none"
                {...register("password", {
                  required: "Password is required",
                })}
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
              >
                {showPassword ? (
                  <FaEyeSlash className="text-gray-500" />
                ) : (
                  <FaEye className="text-gray-500" />
                )}
              </button>

            </div>

            {errors.password && (
              <p className="text-red-500 mt-1 text-sm">
                {errors.password.message}
              </p>
            )}

          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl text-lg font-bold flex justify-center items-center gap-3 transition duration-300"
          >
            <FaSignInAlt />
            Login
          </button>

        </form>

        <div className="text-center mt-8">

          <p className="text-gray-600">
            Don't have an account?
          </p>

          <Link
            to="/register"
            className="text-green-700 font-bold hover:underline"
          >
            Create New Account
          </Link>

        </div>

      </div>

    </div>
  );
}

export default Login;