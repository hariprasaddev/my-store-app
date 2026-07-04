import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Veg.css";

interface VegItem {
  id: number;
  name: string;
  price: number;
  imageurl: string;
  description: string;
}

interface Employee {
  id: number;
  employee_name: string;
  employee_salary: number;
  employee_age: number;
  profile_image: string;
}

interface EmployeeResponse {
  status: string;
  data: Employee;
  message: string;
}

function Veg() {
  const vegItems: VegItem[] = [
    {
      id: 1,
      name: "Potato",
      price: 100,
      imageurl: "/images/potato.jpg",
      description: "Fresh potatoes",
    },
    {
      id: 2,
      name: "Tomato",
      price: 200,
      imageurl: "/images/tomato.jpg",
      description: "Ripe tomatoes",
    },
    {
      id: 3,
      name: "Carrot",
      price: 150,
      imageurl: "/images/carrot.jpg",
      description: "Crunchy carrots",
    },
  ];

  const navigate = useNavigate();

  const [employeeResponse, setEmployeeResponse] =
    useState<EmployeeResponse | null>(null);

  useEffect(() => {
    fetch("https://dummy.restapiexample.com/api/v1/employee/2")
      .then((res) => res.json())
      .then((data) => setEmployeeResponse(data))
      .catch((error) => console.error("Error fetching employee:", error));
  }, []);

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />

      <h1 className="page-title">Fresh Vegetable Items</h1>

      <ol className="product-container">
        {vegItems.map((veg) => (
          <li className="product-card" key={veg.id}>
            <img
              src={veg.imageurl}
              alt={veg.name}
              className="product-image"
            />

            <h2 className="product-name">{veg.name}</h2>

            <p className="price">₹ {veg.price}</p>

            <p className="description">{veg.description}</p>

            <button
              className="buy-btn"
              onClick={() =>
                toast.success(`Product ${veg.name} added to cart!`)
              }
            >
              Add to Cart
            </button>
          </li>
        ))}
      </ol>

      {/* Employee API Data */}
      <div className="employee-container">
        {employeeResponse ? (
          <div className="employee-card">
            <h2>👨‍💼 Employee Details</h2>

            <p>
              <strong>Status:</strong> {employeeResponse.status}
            </p>

            <p>
              <strong>ID:</strong> {employeeResponse.data.id}
            </p>

            <p>
              <strong>Name:</strong> {employeeResponse.data.employee_name}
            </p>

            <p>
              <strong>Salary:</strong> ₹
              {employeeResponse.data.employee_salary}
            </p>

            <p>
              <strong>Age:</strong> {employeeResponse.data.employee_age}
            </p>

            <p>
              <strong>Message:</strong> {employeeResponse.message}
            </p>
          </div>
        ) : (
          <p className="loading">Loading Employee Details...</p>
        )}
      </div>
    </>
  );
}

export default Veg;