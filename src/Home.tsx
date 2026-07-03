import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">Fresh Store</h1>
      <p className="home-subtitle">
        Order fresh vegetables and quality meats online.
      </p>

      <div className="home-cards">
        <Link to="/veg" className="home-card">
          <img src="/images/veg-category.jpg" alt="Veg Items" className="home-card-image" />
          <h2>Veg Items</h2>
          <p>Fresh vegetables picked daily</p>
        </Link>

        <Link to="/nonveg" className="home-card">
          <img src="/images/nonveg-category.jpg" alt="NonVeg Items" className="home-card-image" />
          <h2>NonVeg Items</h2>
          <p>Quality meat, poultry & fish</p>
        </Link>
      </div>
    </div>
  );
}

export default Home;