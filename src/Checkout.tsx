import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CartContext } from "./contexApi/CartContext";

import {
  FaMapMarkerAlt,
  FaUser,
  FaPhone,
  FaMoneyBillWave,
  FaQrcode,
  FaTruck,
  FaCheckCircle,
  FaShoppingBag,
  FaArrowLeft,
  FaEnvelope,
} from "react-icons/fa";
import QRCode from "react-qr-code";
import { sendOrderEmail } from "./services/emailservice";
import { getAddressFromLocation } from "./apis/location";
import { OrderContext } from "./contexApi/OrderContext";
import Swal from "sweetalert2";

function Checkout() {
  const { cart, clearCart } = useContext(CartContext);
  const { addOrder } = useContext(OrderContext);

  const navigate = useNavigate();
  const location = useLocation();

  const {
    grandTotal = 0,
    discount = 0,
    finalAmount = 0,
    couponPercent = 0,
  } = location.state || {};

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [paymentMode, setPaymentMode] = useState("");



  const getCurrentLocation= () => {
  if (!navigator.geolocation) {
    alert("Geolocation is not supported.");
    return;
  }

  navigator.geolocation.getCurrentPosition(
    async (position) => {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;

      try {
        const data = await getAddressFromLocation(lat, lng);
        setAddress(data.display_name);
      } catch (error) {
        alert("Unable to fetch address.");
      }
    },
    (error) => {
      alert(error.message);
    }
  );
};


 const placeOrder = async () => {
    if (!name || !mobile || !address) {
      alert("Please fill all address details.");
      return;
    }
    if (!paymentMode) {
      // alert("Please select a payment method.");
      Swal.fire({
  icon: "warning",
  title: "Payment Required",
  text: "Please select a payment method.",
});
      return;
    }
    
    // alert("Order Placed Successfully!");
    Swal.fire({
  icon: "success",
  title: "Order Placed Successfully!",
  html: `
      <h3 style="color:green">
          Thank you for shopping at Hari Store
      </h3>

      <p>Your order has been placed successfully.</p>

      <p><b>Order ID :</b> #${Math.floor(Math.random() * 100000)}</p>

      <p style="color:#2563eb">
          Your order will be delivered within 30 minutes.
      </p>
  `,
  confirmButtonText: "Continue Shopping",
  confirmButtonColor: "#16a34a",
}).then(() => {
  clearCart();
  navigate("/");
});

  // const placeOrder = async () => {
  //   if (!name || !mobile || !address) {
  //     alert("Please fill all address details.");
  //     return;
  //   }
  //   if (!paymentMode) {
  //     alert("Please select a payment method.");
  //     return;
  //   }
  //   alert("Order Placed Successfully!");

  //   const emailOrderDetails = {
  //     order_id: Math.floor(Math.random() * 100000),
  //     name: name,
  //     email: email, // Recipient email

  //     orders: cart.map((item) => ({
  //       name: item.name,
  //       units: item.quantity,
  //       price: item.price,
  //       image_url: item.imageurl,
  //     })),

  //     cost: {
  //       shipping: 0,
  //       tax: 0,
  //       coupon: discount,
  //       total: finalAmount,
  //     },
  //   };

  //   await sendOrderEmail(emailOrderDetails);

  //   const orderData = {
  //     orderNumber: Math.floor(Math.random() * 100000),

  //     customerName: name,

  //     mobile: mobile,

  //     email: email,

  //     address: address,

  //     paymentMode: paymentMode,

  //     grandTotal: grandTotal,

  //     discount: discount,

  //     finalAmount: finalAmount,

  //     orderDate: new Date().toLocaleString(),

  //     status: "PLACED",

  //     items: [...cart],
  //   };

  //   addOrder(orderData);

  //   clearCart();

  //   navigate("/orders");
  // };

    //prepare the email information 
    // Map the template params & our Data.
   
  const order = {
      order_id: Math.floor(Math.random() * 100000),
      name: name,
      email: email, // Recipient email
	  
      orders: cart.map((item) => ({
        name: item.name,
        units: item.quantity,
        price: item.price,
        image_url: item.imageurl,
      })),

      cost: {
        shipping: 100,
        tax: 100,
        coupon: discount,
        total: finalAmount,
      },
    };
    
    await sendOrderEmail(order);

   const orderData = {
      orderNumber: Math.floor(Math.random() * 100000),

      customerName: name,

      mobile: mobile,

      email: email,

      address: address,

      paymentMode: paymentMode,

      grandTotal: grandTotal,

      discount: discount,

      finalAmount: finalAmount,

      orderDate: new Date().toLocaleString(),

      status: "PLACED",

      items: [...cart],
    };

    addOrder(orderData);

    clearCart();

    navigate("/orders");
  
  };


  
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 py-10 px-5">

      <div className="max-w-7xl mx-auto">

        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-blue-600 font-semibold mb-6 hover:text-blue-800"
        >
          <FaArrowLeft />
          Back To Cart
        </button>

        <h1 className="text-5xl font-bold text-center text-green-700">
          🛍 Secure Checkout
        </h1>

        <p className="text-center text-gray-500 mt-3 mb-10 text-lg">
          Review your order and complete the payment.
        </p>

        <div className="grid lg:grid-cols-3 gap-8">

          {/* LEFT */}

          <div className="lg:col-span-2 space-y-8">

            {/* ADDRESS */}

            <div className="bg-white rounded-2xl shadow-xl p-8">

              <h2 className="text-3xl font-bold flex items-center gap-3 mb-8">

                <FaMapMarkerAlt className="text-red-500" />

                Delivery Address

              </h2>

              <div className="space-y-6">

                <div>

                  <label className="font-semibold">
                    Customer Name
                  </label>

                  <div className="flex items-center border rounded-xl mt-2">

                    <FaUser className="mx-4 text-gray-400" />

                    <input
                      className="w-full p-4 outline-none rounded-xl"
                      placeholder="Enter Full Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />

                  </div>

                </div>

                <div>

                  <label className="font-semibold">
                    Mobile Number
                  </label>

                  <div className="flex items-center border rounded-xl mt-2">

                    <FaPhone className="mx-4 text-gray-400" />

                    <input
                      className="w-full p-4 outline-none rounded-xl"
                      placeholder="Enter Mobile Number"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                    />

                  </div>

                </div>
                

                 <div>

                  <label className="font-semibold">
                    Email Address
                  </label>
                  

                  <div className="flex items-center border rounded-xl mt-2">

                    <FaEnvelope className="mx-4 text-gray-400" />

                    <input
                      className="w-full p-4 outline-none rounded-xl"
                      placeholder="Enter Email Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />

                  </div>

                </div>
                <div>

                  <label className="font-semibold">
                    Delivery Address
                  </label>
                  
                  <textarea
                    rows={4}
                    className="border rounded-xl w-full mt-2 p-4 outline-none"
                    placeholder="House No, Street, City, State, Pincode"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />

                </div>

              </div>

            </div>
            <button
    type="button"
    onClick={getCurrentLocation}
    className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg flex items-center gap-2"
  >
    <FaMapMarkerAlt />
    Use Current Location
  </button>

            {/* PAYMENT */}

            <div className="bg-white rounded-2xl shadow-xl p-8">

              <h2 className="text-3xl font-bold flex items-center gap-3 mb-8">

                <FaMoneyBillWave className="text-green-600" />

                Payment Method

              </h2>

              <label className="border rounded-xl p-5 flex items-center gap-4 cursor-pointer mb-5 hover:bg-gray-50">

                <input
                  type="radio"
                  value="UPI"
                  checked={paymentMode === "UPI"}
                  onChange={(e) => setPaymentMode(e.target.value)}
                />

                <FaQrcode className="text-blue-600 text-2xl" />

                UPI Payment

              </label>

              <label className="border rounded-xl p-5 flex items-center gap-4 cursor-pointer hover:bg-gray-50">

                <input
                  type="radio"
                  value="COD"
                  checked={paymentMode === "COD"}
                  onChange={(e) => setPaymentMode(e.target.value)}
                />

                <FaTruck className="text-green-600 text-2xl" />

                Cash On Delivery

              </label>

             {paymentMode === "UPI" && (
              <div className="qr-section">
                <h4>Scan UPI QR to Pay ₹{finalAmount.toFixed(2)}</h4>
                <QRCode
                  value={`upi://pay?pa=8688671631@ybl&pn=Kiranstore&am=${finalAmount.toFixed(2)}&cu=INR`}
                />
                <p>UPI ID: 8688671631@ybl</p>
              </div>
            )}


              {paymentMode === "COD" && (
                <div className="mt-6 bg-green-100 rounded-xl p-5 font-semibold">

                  Cash will be collected during delivery.

                </div>
              )}

            </div>
                        {/* ORDER SUMMARY */}

          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 h-fit sticky top-5">

            <h2 className="text-3xl font-bold flex items-center gap-3 mb-8">

              <FaShoppingBag className="text-green-600" />

              Order Summary

            </h2>

            {/* Ordered Products */}

            <div className="space-y-4 mb-8 max-h-72 overflow-y-auto">

              {cart.map((item) => (

                <div
                  key={item.id}
                  className="flex justify-between items-center border-b pb-3"
                >

                  <div className="flex items-center gap-3">

                    <img
                      src={item.imageurl}
                      alt={item.name}
                      className="w-14 h-14 rounded-lg object-cover"
                    />

                    <div>

                      <h3 className="font-semibold">
                        {item.name}
                      </h3>

                      <p className="text-gray-500 text-sm">
                        ₹{item.price} × {item.quantity}
                      </p>

                    </div>

                  </div>

                  <span className="font-bold text-green-700">
                    ₹{item.price * item.quantity}
                  </span>

                </div>

              ))}

            </div>

            <hr />

            <div className="space-y-5 mt-6">

              <div className="flex justify-between">

                <span>Total Items</span>

                <span className="font-semibold">
                  {cart.length}
                </span>

              </div>

              <div className="flex justify-between">

                <span>Subtotal</span>

                <span className="font-semibold">
                  ₹{grandTotal.toFixed(2)}
                </span>

              </div>

              <div className="flex justify-between">

                <span>Coupon ({couponPercent}%)</span>

                <span className="text-red-600 font-semibold">
                  - ₹{discount.toFixed(2)}
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

                <span className="text-2xl font-bold">
                  Payable
                </span>

                <span className="text-3xl font-bold text-green-700">
                  ₹{finalAmount.toFixed(2)}
                </span>

              </div>

            </div>

            <button
              onClick={placeOrder}
              className="mt-8 w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl text-xl font-bold shadow-lg hover:scale-105 transition-all duration-300 flex justify-center items-center gap-3"
            >
              <FaCheckCircle />
              Place Order
            </button>

            <p className="text-center text-gray-500 text-sm mt-5">
              🔒 Your payment and personal information are secure.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Checkout;