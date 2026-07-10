import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./index.css";

// import CartProvider from "./contextApi/CartProvider";
// import CartProvider from "./contextApi/CartProvider";
import CartProvider from "./contexApi/CartProvider";
import { OrderProvider } from "./contexApi/OrderProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <OrderProvider>
    <CartProvider>
      <App />
    </CartProvider>
    </OrderProvider>
  </React.StrictMode>
);