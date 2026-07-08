import { useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { CartContext } from "./contexApi/CartContext";
import type { Product } from "./interfaces/Product";

const nonVegItems: Product[] = [
  {
    id: 1,
    name: "Chicken",
    price: 250,
    imageurl: "/images/chicken.jpg",
    description: "Fresh Chicken",
  },
  {
    id: 2,
    name: "Fish",
    price: 300,
    imageurl: "/images/fish.jpg",
    description: "Fresh Fish",
  },
  {
    id: 3,
    name: "Mutton",
    price: 400,
    imageurl: "/images/mutton.jpg",
    description: "Fresh Mutton",
  },
  {
    id: 4,
    name: "Prawns",
    price: 450,
    imageurl: "/images/prawns.jpg",
    description: "Fresh Prawns",
  },
  {
    id: 5,
    name: "Liver",
    price: 500,
    imageurl: "/images/liver.jpg",
    description: "Fresh Chicken Liver",
  },
  {
    id: 6,
    name: "Eggs",
    price: 180,
    imageurl: "/images/eggs.jpg",
    description: "Farm Fresh Eggs",
  },
  {
    id: 7,
    name: "Chicken Wings",
    price: 550,
    imageurl: "/images/chickenwings.jpg",
    description: "Fresh Chicken Wings",
  },
  {
    id: 8,
    name: "Chicken Boneless",
    price: 600,
    imageurl: "/images/chickenboneless.jpg",
    description: "Fresh Boneless Chicken",
  },
  {
    id: 9,
    name: "Chicken Keema",
    price: 700,
    imageurl: "/images/chickenkemma.jpg",
    description: "Premium Chicken Keema",
  },
  {
    id: 10,
    name: "Rohu Fish",
    price: 480,
    imageurl: "/images/rohufish.jpg",
    description: "Fresh Rohu Fish",
  },
  {
    id: 11,
    name: "Tilapia Fish",
    price: 850,
    imageurl: "/images/RelishTilapia.jpg",
    description: "Fresh Tilapia Fish",
  },
  {
    id: 12,
    name: "Chicken Drumsticks",
    price: 320,
    imageurl: "/images/chickendrumstick.jpg",
    description: "Fresh Chicken Drumsticks",
  },
];

function NonVeg() {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = (item: Product) => {
    addToCart(item);
    toast.success(`${item.name} Added Successfully`);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <ToastContainer position="top-right" autoClose={3000} />

      <h1 className="text-5xl font-bold text-center text-gray-800 mb-12">
        🍗 Fresh NonVeg Items
      </h1>

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

          {nonVegItems.map((item) => (

            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-1"
            >

              <img
                src={item.imageurl}
                alt={item.name}
                className="w-full h-52 object-cover"
              />

              <div className="p-5">

                <h2 className="text-2xl font-bold text-gray-800">
                  {item.name}
                </h2>

                <p className="text-xl font-semibold text-gray-600 mt-2">
                  ₹ {item.price}
                </p>

                <p className="text-gray-500 mt-2 min-h-[48px]">
                  {item.description}
                </p>

                <button
                  onClick={() => handleAddToCart(item)}
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

export default NonVeg;