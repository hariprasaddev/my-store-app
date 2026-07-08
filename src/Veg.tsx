import { useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { CartContext } from "./contexApi/CartContext";
import type { Product } from "./interfaces/Product";

const vegItems: Product[] = [
  {
    id: 1,
    name: "Potato",
    price: 100,
    imageurl: "/images/potato.jpg",
    description: "Fresh Farm Potato",
  },
  {
    id: 2,
    name: "Tomato",
    price: 150,
    imageurl: "/images/tomato.jpg",
    description: "Organic Red Tomato",
  },
  {
    id: 3,
    name: "Carrot",
    price: 120,
    imageurl: "/images/carrot.jpg",
    description: "Healthy Crunchy Carrot",
  },
  {
    id: 4,
    name: "Broccoli",
    price: 220,
    imageurl: "/images/broccoli.jpg",
    description: "Fresh Green Broccoli",
  },
  {
    id: 5,
    name: "Cabbage",
    price: 90,
    imageurl: "/images/cabbage.jpg",
    description: "Fresh Green Cabbage",
  },
  {
    id: 6,
    name: "Onion",
    price: 80,
    imageurl: "/images/onion.jpg",
    description: "Fresh Red Onion",
  },
  {
    id: 7,
    name: "Capsicum",
    price: 140,
    imageurl: "/images/capsicum.jpg",
    description: "Organic Green Capsicum",
  },
  {
    id: 8,
    name: "Cucumber",
    price: 70,
    imageurl: "/images/cucumber.jpg",
    description: "Cool Fresh Cucumber",
  },
];
function Veg() {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = (veg: Product) => {
    addToCart(veg);
    toast.success(`${veg.name} Added Successfully`);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <ToastContainer position="top-right" autoClose={3000} />

      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
        🥕 Fresh Veg Items
      </h1>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {vegItems.map((veg) => (
            <div
              key={veg.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden"
            >
              <img
                src={veg.imageurl}
                alt={veg.name}
                className="w-full h-52 object-cover"
              />

              <div className="p-5">
                <h2 className="text-2xl font-semibold text-gray-800">
                  {veg.name}
                </h2>

                <p className="text-2xl font-bold text-green-600 mt-2">
                  ₹ {veg.price}
                </p>

                <p className="text-gray-500 mt-2">
                  {veg.description}
                </p>

                <button
                  onClick={() => handleAddToCart(veg)}
                  className="w-full mt-5 bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition duration-300"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Veg;