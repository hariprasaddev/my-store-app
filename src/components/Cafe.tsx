import { useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import { CartContext } from "./contexApi/CartContext";
// import { CartContext } from "./contexApi/CartContext";
import { CartContext } from "../contexApi/CartContext";
// import type { Product } from "./interfaces/Product";
import type { Product } from "../interfaces/Product";           

const cafeItems: Product[] = [
  {
    id: 101,
    name: "Cappuccino",
    price: 180,
    imageurl: "/images/cappuccino.jpg",
    description: "Rich espresso with steamed milk foam",
  },
  {
    id: 102,
    name: "Espresso",
    price: 120,
    imageurl: "/images/espresso.jpg",
    description: "Strong and aromatic coffee shot",
  },
  {
    id: 103,
    name: "Latte",
    price: 200,
    imageurl: "/images/latte.jpg",
    description: "Creamy milk coffee",
  },
  {
    id: 104,
    name: "Cold Coffee",
    price: 170,
    imageurl: "/images/coldcoffee.jpg",
    description: "Refreshing chilled coffee",
  },
  {
    id: 105,
    name: "Mocha",
    price: 210,
    imageurl: "/images/mocha.jpg",
    description: "Chocolate flavored coffee",
  },
  {
    id: 106,
    name: "Americano",
    price: 150,
    imageurl: "/images/americano.jpg",
    description: "Espresso with hot water",
  },
  {
    id: 107,
    name: "Green Tea",
    price: 90,
    imageurl: "/images/greentea.jpg",
    description: "Healthy antioxidant drink",
  },
  {
    id: 108,
    name: "Black Coffee",
    price: 110,
    imageurl: "/images/blackcoffee.jpg",
    description: "Fresh brewed black coffee",
  },
  {
    id: 109,
    name: "Hot Chocolate",
    price: 220,
    imageurl: "/images/hotchocolate.jpg",
    description: "Rich creamy hot chocolate",
  },
  {
    id: 110,
    name: "Burger",
    price: 180,
    imageurl: "/images/burger.jpg",
    description: "Veg cheese burger",
  },
  {
    id: 111,
    name: "Sandwich",
    price: 140,
    imageurl: "/images/sandwich.jpg",
    description: "Grilled vegetable sandwich",
  },
  {
    id: 112,
    name: "French Fries",
    price: 120,
    imageurl: "/images/fries.jpg",
    description: "Crispy golden fries",
  },
  {
    id: 113,
    name: "Garlic Bread",
    price: 160,
    imageurl: "/images/garlicbread.jpg",
    description: "Toasted garlic bread",
  },
  {
    id: 114,
    name: "Brownie",
    price: 130,
    imageurl: "/images/brownie.jpg",
    description: "Soft chocolate brownie",
  },
  {
    id: 115,
    name: "Donut",
    price: 100,
    imageurl: "/images/donut.jpg",
    description: "Chocolate glazed donut",
  },
  {
    id: 116,
    name: "Croissant",
    price: 150,
    imageurl: "/images/croissant.jpg",
    description: "Fresh buttery croissant",
  },
];

function Cafe() {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = (item: Product) => {
    addToCart(item);
    toast.success(`${item.name} Added Successfully`);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <ToastContainer position="top-right" autoClose={3000} />

      <h1 className="text-5xl font-bold text-center text-gray-800 mb-12">
        ☕ Fresh Cafe
      </h1>

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

          {cafeItems.map((item) => (

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

                <p className="text-2xl font-bold text-green-600 mt-2">
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

export default Cafe;