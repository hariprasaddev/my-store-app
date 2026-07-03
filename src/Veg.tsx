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

function Veg() {
  const vegItems: VegItem[] = [
    { id: 1, name: "Potato", price: 100, imageurl: "/images/potato.jpg", description: "Fresh potatoes" },
    { id: 2, name: "Tomato", price: 200, imageurl: "/images/tomato.jpg", description: "Ripe tomatoes" },
    { id: 3, name: "Carrot", price: 150, imageurl: "/images/carrot.jpg", description: "Crunchy carrots" },
  ];

  const navigate = useNavigate();

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />

      <h1 className="page-title">🥕 Fresh Vegetable Store</h1>

      <ol className="product-container">
        {vegItems.map((veg) => (
          <li className="product-card" key={veg.id}>
            <img src={veg.imageurl} alt={veg.name} className="product-image" />
            <h2 className="product-name">{veg.name}</h2>
            <p className="price">₹ {veg.price}</p>
            <p className="description">{veg.description}</p>
            <button
              className="buy-btn"
              onClick={() => toast.success(`Product ${veg.name} added to cart!`)}
            >
              Add to Cart
            </button>
          </li>
        ))}
      </ol>
    </>
  );
}

export default Veg;