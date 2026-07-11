
import { useForm } from "react-hook-form";
// import type { RegisterRequest } from "../interfaces/RegitserRequest";
import type { RegisterRequest } from "./interfaces/RegisterRequest";
// import type { LoginRequest } from "../interfaces/LoginRequest";
import type { LoginRequest } from "./interfaces/LoginRequest";

function Login() {
  const {register,handleSubmit,
    reset,
  } = useForm<LoginRequest>();

  const onSubmitLogics = (data: LoginRequest) => {

    console.log(data);

    // Read all registered users from localStorage
    const users: RegisterRequest[] = JSON.parse(
      localStorage.getItem("users") || "[]"
    );

    // Check whether user exists
    const user = users.find(
      (u) =>
        u.email === data.email &&
        u.password === data.password
    );

    if (user) {

      alert("Login Successful");

      // Store logged-in user
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify(user)
      );

      reset();
        window.location.href = "/";
    } else {

      alert("Invalid Email or Password");

    }
  };

  return (
    <>
      <h2>Login</h2>

      <form onSubmit={handleSubmit(onSubmitLogics)}>

        <input
          type="email"
          placeholder="Enter Email"
          {...register("email", {
            required: "Email is required",
          })}
        />

        <br />
        <br />

        <input
          type="password"
          placeholder="Enter Password"
          {...register("password", {
            required: "Password is required",
          })}
        />

        <br />
        <br />

        <button type="submit">
          Login
        </button>

      </form>
    </>
  );
}

export default Login;
