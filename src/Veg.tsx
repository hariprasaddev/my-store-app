import { useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Veg.css";

// import { CartContext } from "./contextApi/CartContex";
import { CartContext } from "./contexApi/CartContext";
import type { Product } from "./interfaces/Product";

const vegItems: Product[] = [
  {
    id: 1,
    name: "Potato",
    price: 100,
    imageurl: "/images/bitter.jpg",
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
    imageurl: "/images/brinjals.jpg",
    description: "Fresh Green Broccoli",
  },
];

function Veg() {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = (veg: Product) => {
    addToCart(veg);
    toast.success(`${veg.name} Added Successfully`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-lime-100">
      <ToastContainer position="top-right" autoClose={3000} />

      <div className="container mx-auto px-5 py-10">
        <h1
          className="
          text-3xl
          sm:text-4xl
          md:text-5xl
          lg:text-6xl
          font-extrabold
          text-center
          text-green-700
          drop-shadow-md
          mb-10"
        >
          🥕 Fresh Vegetable Store
        </h1>

        <div
          className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-4
          gap-8"
        >
          {vegItems.map((veg) => (
            <div
              key={veg.id}
              className="
              product-card
              bg-white
              rounded-3xl
              overflow-hidden
              shadow-lg
              hover:shadow-2xl
              transition-all
              duration-500
              hover:-translate-y-2"
            >
              <div className="overflow-hidden">
                <img
                  src={veg.imageurl}
                  alt={veg.name}
                  className="
                  product-image
                  w-full
                  h-60
                  object-cover"
                />
              </div>

              <div className="p-5">
                <h2 className="text-2xl font-bold text-gray-800">{veg.name}</h2>

                <p className="text-gray-500 mt-3 leading-7">
                  {veg.description}
                </p>

                <div className="flex justify-between items-center mt-6">
                  <span className="text-3xl font-bold text-green-700">
                    ₹{veg.price}
                  </span>

                  <button
                    onClick={() => handleAddToCart(veg)}
                    className="
                    bg-green-600
                    hover:bg-green-700
                    text-white
                    px-5
                    py-2
                    rounded-xl
                    shadow-md
                    transition-all
                    duration-300
                    hover:scale-105"
                  >
                    Add Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Veg;