import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link className="navbar-head" to="/">
        Pokedex
      </Link>
    </div>
  );
};

export default Navbar;
