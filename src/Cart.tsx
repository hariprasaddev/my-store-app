import { useContext, useRef, useState } from "react";
import { CartContext } from "./contexApi/CartContext";
import { coupons } from "./data/Coupon";
import { useNavigate } from "react-router-dom";

import {
  FaTrash,
  FaShoppingCart,
  FaMoneyBillWave,
  FaTicketAlt,
  FaCheckCircle,
} from "react-icons/fa";

import { FaPlus, FaMinus } from "react-icons/fa6";

function Cart() {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useContext(CartContext);

  const navigate = useNavigate();

  const couponRef = useRef<HTMLInputElement>(null);

  const [couponPercent, setCouponPercent] = useState(0);
  const [message, setMessage] = useState("");

  const grandTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const applyCoupon = () => {
    const couponCode = couponRef.current?.value.trim() || "";

    const coupon = coupons.find(
      (c) => c.code.toUpperCase() === couponCode.toUpperCase()
    );

    if (coupon) {
      setCouponPercent(coupon.discount);
      setMessage(`🎉 ${coupon.discount}% Discount Applied`);
    } else {
      setCouponPercent(0);
      setMessage("❌ Invalid Coupon");
    }
  };

  const discount = (grandTotal * couponPercent) / 100;

  const finalAmount = grandTotal - discount;

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-5">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-5xl font-bold text-center mb-10 flex justify-center items-center gap-3">
          <FaShoppingCart className="text-green-600" />
          My Shopping Cart
        </h1>

        {cart.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-lg p-16 text-center">

            <h2 className="text-4xl font-bold text-red-500">
              Your Cart is Empty
            </h2>

            <p className="text-gray-500 mt-3">
              Add some fresh products to continue shopping.
            </p>

          </div>
        ) : (

          <div className="grid lg:grid-cols-3 gap-8">

            {/* LEFT SIDE */}

            <div className="lg:col-span-2 space-y-6">

              {cart.map((item) => (

                <div
                  key={item.id}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden"
                >

                  <div className="flex flex-col md:flex-row gap-6 p-6">

                    <img
                      src={item.imageurl}
                      alt={item.name}
                      className="w-40 h-40 rounded-xl object-cover"
                    />

                    <div className="flex-1">

                      <h2 className="text-3xl font-bold text-gray-800">
                        {item.name}
                      </h2>

                      <p className="text-gray-500 mt-2">
                        {item.description}
                      </p>

                      <p className="text-2xl font-bold text-green-600 mt-4">
                        ₹ {item.price}
                      </p>

                      <p className="text-lg mt-2">
                        Quantity :
                        <span className="font-bold ml-2">
                          {item.quantity}
                        </span>
                      </p>

                      <p className="text-xl font-bold text-blue-600 mt-3">
                        Item Total : ₹ {item.price * item.quantity}
                      </p>

                    </div>

                    <div className="flex flex-col justify-center items-center gap-5">

                      <div className="flex items-center gap-4">

                        <button
                          onClick={() => decreaseQuantity(item.id)}
                          className="bg-red-500 hover:bg-red-600 text-white w-11 h-11 rounded-full"
                        >
                          <FaMinus />
                        </button>

                        <span className="text-2xl font-bold">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() => increaseQuantity(item.id)}
                          className="bg-green-500 hover:bg-green-600 text-white w-11 h-11 rounded-full"
                        >
                          <FaPlus />
                        </button>

                      </div>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="bg-red-600 hover:bg-red-700 text-white px-5 py-3 rounded-xl flex items-center gap-2"
                      >
                        <FaTrash />
                        Remove
                      </button>

                    </div>

                  </div>

                </div>

              ))}

            </div>

            {/* RIGHT SIDE ORDER SUMMARY STARTS HERE */}
                        <div className="bg-white rounded-2xl shadow-lg p-6 h-fit sticky top-5">

              <div className="flex items-center gap-3 mb-6">
                <FaShoppingCart className="text-3xl text-green-600" />
                <h2 className="text-3xl font-bold">
                  Order Summary
                </h2>
              </div>

              {/* Coupon */}

              <div className="mb-6">

                <label className="block font-semibold mb-2">
                  Apply Coupon
                </label>

                <div className="flex gap-3">

                  <input
                    ref={couponRef}
                    type="text"
                    placeholder="Enter Coupon Code"
                    className="flex-1 border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                  />

                  <button
                    onClick={applyCoupon}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 rounded-lg"
                  >
                    Apply
                  </button>

                </div>

                {message && (
                  <p
                    className={`mt-3 font-semibold ${
                      couponPercent > 0
                        ? "text-green-600"
                        : "text-red-500"
                    }`}
                  >
                    {message}
                  </p>
                )}

              </div>

              <hr className="mb-6" />

              {/* Price Details */}

              <div className="space-y-5">

                <div className="flex justify-between">

                  <div className="flex items-center gap-2">
                    <FaMoneyBillWave className="text-green-600" />
                    <span>Subtotal</span>
                  </div>

                  <span className="font-bold">
                    ₹ {grandTotal.toFixed(2)}
                  </span>

                </div>

                <div className="flex justify-between">

                  <div className="flex items-center gap-2">
                    <FaTicketAlt className="text-orange-500" />
                    <span>Coupon Discount</span>
                  </div>

                  <span className="text-red-500 font-bold">
                    - ₹ {discount.toFixed(2)}
                  </span>

                </div>

                <div className="flex justify-between">
                  <span>Delivery Charge</span>

                  <span className="text-green-600 font-bold">
                    FREE
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>GST</span>

                  <span>Included</span>
                </div>

                <hr />

                <div className="flex justify-between items-center">

                  <div className="flex items-center gap-2">

                    <FaCheckCircle className="text-blue-600" />

                    <span className="text-xl font-bold">
                      Payable Amount
                    </span>

                  </div>

                  <span className="text-3xl font-bold text-green-700">
                    ₹ {finalAmount.toFixed(2)}
                  </span>

                </div>

              </div>

              <button
                onClick={() =>
                  navigate("/checkout", {
                    state: {
                      grandTotal,
                      discount,
                      finalAmount,
                      couponPercent,
                    },
                  })
                }
                className="w-full mt-8 bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl text-xl font-bold shadow-lg transition duration-300 hover:scale-105"
              >
                Proceed to Checkout
              </button>

            </div>

          </div>

        )}

      </div>

    </div>

  );
}

export default Cart;