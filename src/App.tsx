import { useContext, useState } from "react";
import { BrowserRouter, Link, NavLink, Route, Routes } from "react-router-dom";
import { FaHome, FaShoppingCart, FaSignInAlt, FaUserPlus } from "react-icons/fa";
import { GiCarrot, GiChickenOven } from "react-icons/gi";
import Register from "./components/Register";
import  Checkout from "./Checkout";


import Home from "./Home";
import Veg from "./Veg";
import NonVeg from "./NonVeg";
// import Cart from "./Cart";
import Cart from "./Cart";
// import { CartContext } from "./contextApi/CartContext";
import { CartContext } from "./contexApi/CartContext";


import "./App.css";
import Orders from "./order";
import Login from "./Login";

function App() {
  const { cart } = useContext(CartContext);

  const [loggedInUser, setLoggedInUser] = useState(
    JSON.parse(localStorage.getItem("loggedInUser") || "null")
  );

  const logout = () => {
    localStorage.removeItem("loggedInUser");
    window.location.reload();
  };

  return (
    <BrowserRouter>
      <div className="navbar">
        <NavLink to="/" end>
          <FaHome /> Home
        </NavLink>

        <NavLink to="/veg">
          <GiCarrot /> Veg Items
        </NavLink>

        <NavLink to="/nonveg">
          <GiChickenOven /> NonVeg Items
        </NavLink>

        <NavLink to="/orders">
          <GiChickenOven /> Orders
        </NavLink>

        <NavLink to="/cart">
          <FaShoppingCart /> Cart ({cart.length})
        </NavLink>

        {loggedInUser ? (
          <>
            <span style={{ marginLeft: "20px" }}>
              Welcome <b>{loggedInUser.name}</b>
            </span>
            <button onClick={logout} style={{ marginLeft: "15px" }}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/register" className="menu-link">
              <FaUserPlus /> Register
            </Link>
            <Link to="/login" className="menu-link">
              <FaSignInAlt /> Login
            </Link>
          </>
        )}
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/veg" element={<Veg />} />
        <Route path="/nonveg" element={<NonVeg />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;