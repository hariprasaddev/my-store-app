import { useContext } from "react";
// import { CartContext } from "./contextApi/CartContext";
import { CartContext } from "./contexApi/CartContext";

function Cart() {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart, clearCart } =
    useContext(CartContext);

  return (
    <div className="p-5 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-5">🛒 Cart ({cart.length})</h1>

      {cart.length === 0 ? (
        <h2 className="text-gray-500">Cart is Empty</h2>
      ) : (
        <>
          {cart.map((item) => (
            <div
              key={item.id}
              className="border rounded p-4 mb-3 flex items-center gap-5"
            >
              <img src={item.imageurl} width="100" alt={item.name} />

              <div className="flex-1">
                <h2 className="font-bold text-lg">{item.name}</h2>
                <h3 className="text-green-700">₹ {item.price}</h3>

                <div className="flex items-center gap-3 mt-2">
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="bg-gray-200 px-3 py-1 rounded"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="bg-gray-200 px-3 py-1 rounded"
                  >
                    +
                  </button>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded ml-4"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}

          <button
            onClick={clearCart}
            className="bg-red-600 text-white px-5 py-2 rounded-xl mt-4"
          >
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;