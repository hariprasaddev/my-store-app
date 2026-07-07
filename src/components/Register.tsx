import { useForm } from "react-hook-form";
import { serviceRegister } from "../services/AuthService";
import type { RegisterRequest } from "../interfaces/RegisterRequest";
import "./Register.css";

function Register() {

  const { register, handleSubmit, reset } = useForm<RegisterRequest>();

  // 👇 Write the onSubmit function HERE
  const onSubmit = async (data: RegisterRequest) => {
    try {
      const response = await serviceRegister(data);
      console.log(response);
      alert("Registration Successful");
      reset();
    } catch (error) {
      console.error(error);
      alert("Registration Failed");
    }
  };

  return (
    <div className="container">
  <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
    <h2>Register</h2>

    <input type="text" {...register("name")} placeholder="Username" />

    <input type="password" {...register("password")} placeholder="Password" />

    <input type="email" {...register("email")} placeholder="Email" />

    <input type="number" {...register("phone")} placeholder="Phone Number" />

    <button type="submit">Register</button>
  </form>
</div>
  
  );
}

export default Register;