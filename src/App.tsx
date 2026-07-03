import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { GiCarrot, GiChickenOven } from "react-icons/gi";
import Home from "./Home";
import Veg from "./Veg";
import NonVeg from "./NonVeg";
import "./App.css";


function App() {
  return (
    <BrowserRouter>
      <div className="navbar">
        <NavLink to="/" end className={({isActive}) => isActive ? "active-link" : ""}>
          <FaHome /> Home
        </NavLink>
        <NavLink to="/veg" className={({isActive}) => isActive ? "active-link" : ""}>
          <GiCarrot /> Veg Items
        </NavLink>
        <NavLink to="/nonveg" className={({isActive}) => isActive ? "active-link" : ""}>
          <GiChickenOven /> NonVeg Items
        </NavLink>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/veg" element={<Veg />} />
        <Route path="/nonveg" element={<NonVeg />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;