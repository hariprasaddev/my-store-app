import { useContext, useState } from "react";
import {
  BrowserRouter,
  Link,
  NavLink,
  Route,
  Routes,
} from "react-router-dom";

import {
  FaHome,
  FaShoppingCart,
  FaSignInAlt,
  FaUserPlus,
  FaClipboardList,
  FaCoffee,
} from "react-icons/fa";

import { GiCarrot, GiChickenOven } from "react-icons/gi";

import Register from "./components/Register";
import Checkout from "./Checkout";
import Home from "./Home";
import Veg from "./Veg";
import NonVeg from "./NonVeg";
import Cart from "./Cart";
import Orders from "./order";
import Login from "./Login";
import Cafe from "./components/Cafe";

import { CartContext } from "./contexApi/CartContext";

import "./App.css";

function App() {
  // Get cart data from CartContext
  const { cart } = useContext(CartContext);

  // Get logged-in user from localStorage
  const [loggedInUser] = useState(() => {
    return JSON.parse(localStorage.getItem("loggedInUser") || "null");
  });

  // Logout function
  const logout = () => {
    localStorage.removeItem("loggedInUser");
    window.location.reload();
  };

  return (
    <BrowserRouter>
      <div className="navbar">

        {/* Home */}
        <NavLink to="/" end>
          <FaHome /> Home
        </NavLink>

        {/* Veg Items */}
        <NavLink to="/veg">
          <GiCarrot /> Veg Items
        </NavLink>

        {/* Non-Veg Items */}
        <NavLink to="/nonveg">
          <GiChickenOven /> NonVeg Items
        </NavLink>

        {/* Cafe */}
        <NavLink to="/cafe">
          <FaCoffee /> Cafe
        </NavLink>

        {/* Orders */}
        <NavLink to="/orders">
          <FaClipboardList /> Orders
        </NavLink>

        {/* Cart */}
        <NavLink to="/cart">
          <FaShoppingCart /> Cart ({cart.length})
        </NavLink>

        {/* Login / Register / Logout */}
        {loggedInUser ? (
          <>
            <span style={{ marginLeft: "20px" }}>
              Welcome <b>{loggedInUser.name}</b>
            </span>

            <button
              onClick={logout}
              style={{ marginLeft: "15px" }}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            {/* Register */}
            <Link to="/register" className="menu-link">
              <FaUserPlus /> Register
            </Link>

            {/* Login */}
            <Link to="/login" className="menu-link">
              <FaSignInAlt /> Login
            </Link>
          </>
        )}
      </div>

      {/* Application Routes */}
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/register" element={<Register />} />

        <Route path="/login" element={<Login />} />

        <Route path="/veg" element={<Veg />} />

        <Route path="/nonveg" element={<NonVeg />} />

        <Route path="/cafe" element={<Cafe />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/orders" element={<Orders />} />

        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;