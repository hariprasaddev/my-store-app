import { Link } from "react-router-dom";
import {
  Truck,
  Leaf,
  CreditCard,
  BadgeCheck,
  ShoppingBasket,
  ArrowRight,
} from "lucide-react";

function Home() {
  return (
    <div className="bg-gray-50">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-100 to-green-50 py-16">
        <div className="max-w-6xl mx-auto text-center px-5">

          <ShoppingBasket
            size={70}
            className="mx-auto text-green-600 mb-4"
          />

          <h1 className="text-5xl font-bold text-gray-800">
            Fresh Store
          </h1>

          <p className="mt-4 text-gray-600 text-xl">
            Fresh Vegetables & Premium NonVeg Delivered to Your Home
          </p>

          <div className="mt-8 flex justify-center gap-5">

            <Link
              to="/veg"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg shadow-lg flex items-center gap-2"
            >
              Shop Veg
              <ArrowRight size={18} />
            </Link>

            <Link
              to="/nonveg"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg shadow-lg flex items-center gap-2"
            >
              Shop NonVeg
              <ArrowRight size={18} />
            </Link>

          </div>

        </div>
      </section>

      {/* Features */}

      <section className="max-w-6xl mx-auto py-14 px-5">

        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:scale-105 duration-300">
            <Truck
              size={55}
              className="mx-auto text-green-600"
            />
            <h2 className="font-bold mt-4 text-lg">
              Fast Delivery
            </h2>
            <p className="text-gray-500 text-sm mt-2">
              Delivered within hours.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:scale-105 duration-300">
            <Leaf
              size={55}
              className="mx-auto text-green-600"
            />
            <h2 className="font-bold mt-4 text-lg">
              100% Fresh
            </h2>
            <p className="text-gray-500 text-sm mt-2">
              Direct from farms.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:scale-105 duration-300">
            <CreditCard
              size={55}
              className="mx-auto text-blue-600"
            />
            <h2 className="font-bold mt-4 text-lg">
              Secure Payment
            </h2>
            <p className="text-gray-500 text-sm mt-2">
              Safe online payments.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:scale-105 duration-300">
            <BadgeCheck
              size={55}
              className="mx-auto text-yellow-500"
            />
            <h2 className="font-bold mt-4 text-lg">
              Premium Quality
            </h2>
            <p className="text-gray-500 text-sm mt-2">
              Best products only.
            </p>
          </div>

        </div>

      </section>

      {/* Categories */}

      <section className="max-w-6xl mx-auto py-10 px-5">

        <h2 className="text-3xl font-bold text-center mb-10">
          Shop by Category
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          <Link
            to="/veg"
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl duration-300 hover:-translate-y-2"
          >
            <img
              src="/images/veg-banner.jpg"
              alt="Vegetables"
              className="h-64 w-full object-cover"
            />

            <div className="p-6 text-center">
              <h2 className="text-3xl font-bold">
                Vegetables
              </h2>

              <p className="text-gray-500 mt-2">
                Fresh vegetables picked daily
              </p>
            </div>
          </Link>

          <Link
            to="/nonveg"
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl duration-300 hover:-translate-y-2"
          >
            <img
              src="/images/nonveg-banner.jpg"
              alt="NonVeg"
              className="h-64 w-full object-cover"
            />

            <div className="p-6 text-center">
              <h2 className="text-3xl font-bold">
                NonVeg
              </h2>

              <p className="text-gray-500 mt-2">
                Fresh Chicken, Fish & Mutton
              </p>
            </div>
          </Link>

        </div>

      </section>

      {/* Offer */}

      <section className="max-w-6xl mx-auto py-14 px-5">

        <div className="bg-gradient-to-r from-purple-600 to-pink-500 rounded-2xl text-white text-center p-10">

          <h2 className="text-4xl font-bold">
            Today's Special Offer
          </h2>

          <p className="mt-4 text-xl">
            Get 20% OFF on Orders Above ₹1000
          </p>

          <button className="mt-6 bg-white text-purple-700 font-bold px-8 py-3 rounded-lg hover:bg-gray-100">
            Shop Now
          </button>

        </div>

      </section>

      {/* Footer */}

      <footer className="bg-gray-900 text-white py-8 mt-10">

        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-3xl font-bold">
            Fresh Store
          </h2>

          <p className="mt-3 text-gray-300">
            Fresh Vegetables & Premium NonVeg Delivered Daily
          </p>

          <p className="mt-5 text-gray-400">
            © 2026 Fresh Store | React + TypeScript + Tailwind CSS
          </p>

        </div>

      </footer>

    </div>
  );
}

export default Home;