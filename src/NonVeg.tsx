import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Veg.css";

interface NonVegItem {
  id: number;
  name: string;
  price: number;
  imageurl: string;
  description: string;
}

function NonVeg() {
  const nonVegItems: NonVegItem[] = [
    {
      id: 1,
      name: "Chicken",
      price: 250,
      imageurl: "/images/chicken.jpg",
      description: "Fresh chicken",
    },
    {
      id: 2,
      name: "Fish",
      price: 300,
      imageurl: "/images/fish.jpg",
      description: "Fresh fish",
    },
    {
      id: 3,
      name: "Mutton",
      price: 400,
      imageurl: "/images/mutton.jpg",
      description: "Fresh mutton",
    },
    {
      id: 4,
      name: "Prawns",
      price: 450,
      imageurl: "/images/prawns.jpg",
      description: "Fresh prawns",
    },
    {
      id: 5,
      name: "liver",
      price: 500,
      imageurl: "/images/liver.jpg",
      description: "Fresh liver",
    },
    {
      id: 6,
      name: "Eggs",
      price: 180,
      imageurl: "/images/eggs.jpg",
      description: "Farm fresh eggs",
    },
  ];

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />

      <h1 className="page-title">🍗 Fresh NonVeg Items</h1>

      <ol className="product-container">
        {nonVegItems.map((item) => (
          <li className="product-card" key={item.id}>
            <img
              src={item.imageurl}
              alt={item.name}
              className="product-image"
            />

            <h2 className="product-name">{item.name}</h2>

            <p className="price">₹ {item.price}</p>

            <p className="description">{item.description}</p>

            <button
              className="buy-btn"
              onClick={() =>
                toast.success(`${item.name} added to cart!`)
              }
            >
              Add to Cart
            </button>
          </li>
        ))}
      </ol>
    </>
  );
}

export default NonVeg;