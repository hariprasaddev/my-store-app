import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import type { RegisterRequest } from "../interfaces/RegisterRequest";

import {
  FaLeaf,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaUserPlus,
} from "react-icons/fa";

import { useState } from "react";

function Register() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegisterRequest>();

  const onSubmitLogics = (data: RegisterRequest) => {
    const users: RegisterRequest[] = JSON.parse(
      localStorage.getItem("users") || "[]"
    );

    const userExists = users.some(
      (user) => user.email === data.email
    );

    if (userExists) {
      alert("❌ Email already registered");
      return;
    }

    const newUser = {
      id: users.length + 1,
      ...data,
    };

    users.push(newUser);

    localStorage.setItem(
      "users",
      JSON.stringify(users)
    );

    alert("✅ Registration Successful");

    reset();

    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-white to-green-200 flex items-center justify-center px-4 py-10">

      <div className="bg-white w-full max-w-lg rounded-3xl shadow-2xl p-8">

        <div className="text-center mb-8">

          <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto">

            <FaLeaf className="text-4xl text-green-700" />

          </div>

          <h1 className="text-4xl font-bold text-green-700 mt-5">
            Fresh Mart
          </h1>

          <p className="text-gray-500 mt-2">
            Create your account
          </p>

        </div>

        <form
          onSubmit={handleSubmit(onSubmitLogics)}
          className="space-y-5"
        >

          {/* Name */}

          <div>

            <label className="font-semibold">
              Full Name
            </label>

            <div className="flex items-center border rounded-xl mt-2 px-4">

              <FaUser className="text-gray-400" />

              <input
                type="text"
                placeholder="Enter Full Name"
                className="w-full p-4 outline-none"
                {...register("name", {
                  required: "Name is required",
                })}
              />

            </div>

            {errors.name && (
              <p className="text-red-500 text-sm mt-1">
                {errors.name.message}
              </p>
            )}

          </div>

          {/* Email */}

          <div>

            <label className="font-semibold">
              Email Address
            </label>

            <div className="flex items-center border rounded-xl mt-2 px-4">

              <FaEnvelope className="text-gray-400" />

              <input
                type="email"
                placeholder="Enter Email"
                className="w-full p-4 outline-none"
                {...register("email", {
                  required: "Email is required",
                })}
              />

            </div>

            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}

          </div>

          {/* Phone */}

          <div>

            <label className="font-semibold">
              Phone Number
            </label>

            <div className="flex items-center border rounded-xl mt-2 px-4">

              <FaPhone className="text-gray-400" />

              <input
                type="tel"
                placeholder="Enter Phone Number"
                className="w-full p-4 outline-none"
                {...register("phone", {
                  required: "Phone number is required",
                })}
              />

            </div>

            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">
                {errors.phone.message}
              </p>
            )}

          </div>

          {/* Password */}

          <div>

            <label className="font-semibold">
              Password
            </label>

            <div className="flex items-center border rounded-xl mt-2 px-4">

              <FaLock className="text-gray-400" />

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter Password"
                className="w-full p-4 outline-none"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message:
                      "Minimum 6 characters",
                  },
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
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}

          </div>

          {/* Register Button */}

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-bold text-lg flex justify-center items-center gap-3 transition duration-300"
          >
            <FaUserPlus />
            Create Account
          </button>

        </form>

        <div className="text-center mt-8">

          <p className="text-gray-600">
            Already have an account?
          </p>

          <Link
            to="/login"
            className="text-green-700 font-bold hover:underline"
          >
            Login Here
          </Link>

        </div>

      </div>

    </div>
  );
}

export default Register;