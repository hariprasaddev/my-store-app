import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Veg.css"; // reuse the same styling

interface NonVegItem {
  id: number;
  name: string;
  price: number;
  imageurl: string;
  description: string;
}

function NonVeg() {
  const nonVegItems: NonVegItem[] = [
    { id: 1, name: "Chicken", price: 250, imageurl: "/images/chicken.jpg", description: "Fresh chicken" },
    { id: 2, name: "Fish", price: 300, imageurl: "/images/fish.jpg", description: "Fresh fish" },
    { id: 3, name: "Mutton", price: 400, imageurl: "/images/mutton.jpg", description: "Fresh mutton" },
  ];

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <h1 className="page-title">🍗 Fresh NonVeg Store</h1>

      <ol className="product-container">
        {nonVegItems.map((item) => (
          <li className="product-card" key={item.id}>
            <img src={item.imageurl} alt={item.name} className="product-image" />
            <h2 className="product-name">{item.name}</h2>
            <p className="price">₹ {item.price}</p>
            <p className="description">{item.description}</p>
            <button
              className="buy-btn"
              onClick={() => toast.success(`Product ${item.name} added to cart!`)}
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