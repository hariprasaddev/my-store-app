import { useContext } from "react";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import { FaHome, FaShoppingCart } from "react-icons/fa";
import { GiCarrot, GiChickenOven } from "react-icons/gi";
import Register from "./components/Register";


import Home from "./Home";
import Veg from "./Veg";
import NonVeg from "./NonVeg";
// import Cart from "./Cart";
import Cart from "./Cart";
// import { CartContext } from "./contextApi/CartContext";
import { CartContext } from "./contexApi/CartContext";


import "./App.css";

function App() {
  const { cart } = useContext(CartContext);

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

        <NavLink to="/cart">
          <FaShoppingCart /> Cart ({cart.length})
        </NavLink>
        <NavLink to ="/register">Register</NavLink>
      </div>

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/register"element={<Register/>}/>
        <Route path="/veg" element={<Veg />} />
        <Route path="/nonveg" element={<NonVeg />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;