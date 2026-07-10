import { useContext } from "react";
import { OrderContext } from "./contexApi/OrderContext";
import {
  FaBoxOpen,
  FaUser,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCreditCard,
  FaCalendarAlt,
  FaCheckCircle,
  FaRupeeSign,
} from "react-icons/fa";

function Orders() {
  const { orders } = useContext(OrderContext);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 py-10 px-5">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-5xl font-bold text-center text-green-700 mb-12">
          📦 My Orders
        </h1>

        {orders.length === 0 ? (
          <div className="bg-white rounded-3xl shadow-xl p-16 text-center">

            <FaBoxOpen className="text-7xl text-gray-400 mx-auto mb-5" />

            <h2 className="text-3xl font-bold text-gray-700">
              No Orders Yet
            </h2>

            <p className="text-gray-500 mt-3">
              Your ordered products will appear here.
            </p>

          </div>
        ) : (
          <div className="space-y-10">

            {orders.map((order) => (

              <div
                key={order.orderNumber}
                className="bg-white rounded-3xl shadow-2xl overflow-hidden"
              >

                {/* Header */}

                <div className="bg-green-600 text-white px-8 py-6 flex flex-col md:flex-row justify-between items-center">

                  <div>

                    <h2 className="text-3xl font-bold">
                      Order #{order.orderNumber}
                    </h2>

                    <p className="mt-2 flex items-center gap-2">

                      <FaCalendarAlt />

                      {order.orderDate}

                    </p>

                  </div>

                  <span className="mt-5 md:mt-0 bg-white text-green-700 font-bold px-6 py-3 rounded-full flex items-center gap-2">

                    <FaCheckCircle />

                    {order.status}

                  </span>

                </div>

                {/* Customer & Payment */}

                <div className="grid md:grid-cols-2 gap-8 p-8">

                  <div className="bg-gray-50 rounded-2xl p-6">

                    <h3 className="text-2xl font-bold mb-5 text-green-700">
                      Customer Details
                    </h3>

                    <div className="space-y-4">

                      <p className="flex gap-3">
                        <FaUser className="text-blue-600 mt-1" />
                        <span>
                          <b>Name:</b> {order.customerName}
                        </span>
                      </p>

                      <p className="flex gap-3">
                        <FaEnvelope className="text-red-500 mt-1" />
                        <span>
                          <b>Email:</b> {order.email}
                        </span>
                      </p>

                      <p className="flex gap-3">
                        <FaPhone className="text-green-600 mt-1" />
                        <span>
                          <b>Mobile:</b> {order.mobile}
                        </span>
                      </p>

                      <p className="flex gap-3">
                        <FaMapMarkerAlt className="text-purple-600 mt-1" />
                        <span>
                          <b>Address:</b> {order.address}
                        </span>
                      </p>

                    </div>

                  </div>

                  <div className="bg-gray-50 rounded-2xl p-6">

                    <h3 className="text-2xl font-bold mb-5 text-green-700">
                      Payment Summary
                    </h3>

                    <div className="space-y-4">

                      <p className="flex justify-between">
                        <span className="font-semibold flex items-center gap-2">
                          <FaCreditCard />
                          Payment
                        </span>

                        <span>{order.paymentMode}</span>
                      </p>

                      <p className="flex justify-between">
                        <span>Subtotal</span>

                        <span>₹{order.grandTotal}</span>
                      </p>

                      <p className="flex justify-between text-red-600">
                        <span>Discount</span>

                        <span>- ₹{order.discount}</span>
                      </p>

                      <p className="flex justify-between">
                        <span>Delivery</span>

                        <span className="text-green-600 font-bold">
                          FREE
                        </span>
                      </p>

                      <hr />

                      <div className="flex justify-between text-3xl font-bold text-green-700">

                        <span>Total</span>

                        <span>₹{order.finalAmount}</span>

                      </div>

                    </div>

                  </div>

                </div>

                {/* Ordered Items */}

                <div className="px-8 pb-8">

                  <h3 className="text-2xl font-bold mb-6 text-green-700">
                    Ordered Items
                  </h3>

                  <div className="space-y-5">

                    {order.items.map((item) => (

                      <div
                        key={item.id}
                        className="flex flex-col md:flex-row justify-between items-center bg-gray-50 rounded-2xl p-5 hover:shadow-lg transition"
                      >

                        <div className="flex items-center gap-5">

                          <img
                            src={item.imageurl}
                            alt={item.name}
                            className="w-24 h-24 rounded-xl object-cover border"
                          />

                          <div>

                            <h3 className="text-xl font-bold">
                              {item.name}
                            </h3>

                            <p className="text-gray-500 mt-2">
                              Quantity : {item.quantity}
                            </p>

                            <p className="text-gray-500">
                              Price : ₹{item.price}
                            </p>

                          </div>

                        </div>

                        <div className="mt-5 md:mt-0 text-right">

                          <p className="text-2xl font-bold text-green-700 flex items-center justify-end gap-1">

                            <FaRupeeSign />

                            {item.price * item.quantity}

                          </p>

                        </div>

                      </div>

                    ))}

                  </div>

                </div>

              </div>

            ))}

          </div>
        )}

      </div>

    </div>
  );
}

export default Orders;