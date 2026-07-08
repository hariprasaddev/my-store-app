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
  {
    id: 9,
    name: "Brinjal",
    price: 110,
    imageurl: "/images/brinjal.jpg",
    description: "Fresh Purple Brinjal",
  },
  {
    id: 10,
    name: "Cauliflower",
    price: 130,
    imageurl: "/images/cauliflower.jpg",
    description: "Healthy Fresh Cauliflower",
  },
  {
    id: 11,
    name: "Beetroot",
    price: 95,
    imageurl: "/images/beetroot.jpg",
    description: "Organic Beetroot",
  },
  {
    id: 12,
    name: "Spinach",
    price: 60,
    imageurl: "/images/spinach.jpg",
    description: "Fresh Green Spinach",
  },
  {
    id: 13,
    name: "Lady Finger",
    price: 100,
    imageurl: "/images/ladyfinger.jpg",
    description: "Tender Fresh Lady Finger",
  },
  {
    id: 14,
    name: "Pumpkin",
    price: 85,
    imageurl: "/images/pumpkin.jpg",
    description: "Farm Fresh Pumpkin",
  },
  {
    id: 15,
    name: "Green Chilli",
    price: 50,
    imageurl: "/images/greenchilli.jpg",
    description: "Fresh Spicy Green Chilli",
  },
  {
    id: 16,
    name: "Radish",
    price: 75,
    imageurl: "/images/radish.jpg",
    description: "Healthy White Radish",
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

      <h1 className="text-5xl font-bold text-center text-gray-800 mb-12">
        Fresh Veg Items
      </h1>

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

          {vegItems.map((veg) => (

            <div
              key={veg.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-1"
            >

              <img
                src={veg.imageurl}
                alt={veg.name}
                className="w-full h-52 object-cover"
              />

              <div className="p-5">

                <h2 className="text-2xl font-bold text-gray-800">
                  {veg.name}
                </h2>

                <p className="text-xl font-semibold text-gray-600 mt-2">
  ₹ {veg.price}
</p>

                <p className="text-gray-500 mt-2 min-h-[48px]">
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