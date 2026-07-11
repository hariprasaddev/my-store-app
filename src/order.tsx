import { useContext } from "react";
import { OrderContext } from "./contexApi/OrderContext";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaCheckCircle,
  FaMoneyBillWave,
  FaShoppingBag,
} from "react-icons/fa";

function Orders() {
  const { orders } = useContext(OrderContext);

  if (orders.length === 0) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-5">
        <div className="bg-white rounded-2xl shadow-xl p-10 text-center max-w-md w-full">
          <div className="text-7xl mb-4">📦</div>

          <h2 className="text-3xl font-bold text-gray-700">
            No Orders Yet
          </h2>

          <p className="text-gray-500 mt-3">
            Your placed orders will appear here.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold text-center text-green-700 mb-8">
          📦 My Orders
        </h1>

        <div className="space-y-6">

          {orders.map((order) => (

            <div
              key={order.orderNumber}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200"
            >

              {/* Header */}

              <div className="bg-green-600 text-white px-6 py-4 flex justify-between items-center">

                <div>

                  <h2 className="text-2xl font-bold">
                    Order #{order.orderNumber}
                  </h2>

                  <p className="flex items-center gap-2 mt-1 text-green-100">
                    <FaCalendarAlt />
                    {order.orderDate}
                  </p>

                </div>

                <span className="bg-white text-green-700 px-5 py-2 rounded-full font-bold flex items-center gap-2">
                  <FaCheckCircle />
                  {order.status}
                </span>

              </div>

              {/* Body */}

              <div className="p-6">

                <div className="grid md:grid-cols-2 gap-6">

                  {/* Customer */}

                  <div className="bg-gray-50 rounded-xl p-5">

                    <h3 className="text-xl font-bold text-green-700 mb-4">
                      Customer Details
                    </h3>

                    <div className="space-y-3 text-gray-700">

                      <p className="flex items-center gap-3">
                        <FaUser className="text-blue-600" />
                        <span className="font-semibold">Name :</span>
                        {order.customerName}
                      </p>

                      <p className="flex items-center gap-3">
                        <FaEnvelope className="text-red-500" />
                        <span className="font-semibold">Email :</span>
                        {order.email}
                      </p>

                      <p className="flex items-center gap-3">
                        <FaPhone className="text-green-600" />
                        <span className="font-semibold">Mobile :</span>
                        {order.mobile}
                      </p>

                      <p className="flex items-start gap-3">
                        <FaMapMarkerAlt className="text-purple-600 mt-1" />
                        <span className="font-semibold">Address :</span>
                        {order.address}
                      </p>

                    </div>

                  </div>

                  {/* Payment */}

                  <div className="bg-gray-50 rounded-xl p-5">

                    <h3 className="text-xl font-bold text-green-700 mb-4">
                      Payment Summary
                    </h3>

                    <div className="space-y-3 text-gray-700">

                      <div className="flex justify-between">
                        <span className="flex items-center gap-2">
                          <FaMoneyBillWave />
                          Payment
                        </span>
                        <span>{order.paymentMode}</span>
                      </div>

                      <div className="flex justify-between">
                        <span>Subtotal</span>
                        <span>₹{order.grandTotal}</span>
                      </div>

                      <div className="flex justify-between text-red-500">
                        <span>Discount</span>
                        <span>- ₹{order.discount}</span>
                      </div>

                      <div className="flex justify-between">
                        <span>Delivery</span>
                        <span className="text-green-600 font-bold">
                          FREE
                        </span>
                      </div>

                      <hr />

                      <div className="flex justify-between text-2xl font-bold text-green-700">
                        <span>Total</span>
                        <span>₹{order.finalAmount}</span>
                      </div>

                    </div>

                  </div>

                </div>

                {/* Products */}

                <h3 className="text-2xl font-bold text-green-700 mt-8 mb-5 text-center">
                  <FaShoppingBag className="inline mr-2" />
                  Ordered Items
                </h3>

                <div className="space-y-4">

                  {order.items.map((item) => (

                    <div
                      key={item.id}
                      className="flex items-center justify-between border rounded-xl p-4 hover:shadow-md transition"
                    >

                      <div className="flex items-center gap-4">

                        <img
                          src={item.imageurl}
                          alt={item.name}
                          className="w-20 h-20 rounded-xl object-cover border"
                        />

                        <div>

                          <h4 className="text-lg font-bold">
                            {item.name}
                          </h4>

                          <p className="text-gray-500">
                            Quantity : {item.quantity}
                          </p>

                          <p className="text-gray-500">
                            Price : ₹{item.price}
                          </p>

                        </div>

                      </div>

                      <div className="text-right">

                        <h3 className="text-2xl font-bold text-green-700">
                          ₹{item.price * item.quantity}
                        </h3>

                      </div>

                    </div>

                  ))}

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default Orders;