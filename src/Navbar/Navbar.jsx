import "./Navbar.css";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <nav>
      <div className="nav-left">
        <div className="logo">TextUtils</div>
        <NavLink
          className={(e) => {
            return e.isActive ? "red" : "";
          }}
          to="/"
        >
          <li>Home</li>
        </NavLink>
        <NavLink
          className={(e) => {
            return e.isActive ? "red" : "";
          }}
          to="/aboutus"
        >
          <li>About us</li>
        </NavLink>
        <NavLink
          className={(e) => {
            return e.isActive ? "red" : "";
          }}
          to="/contact"
        >
          <li>Contact</li>
        </NavLink>
      </div>
      <div className="nav-right">
        <p>Enable dark Mode</p>
      </div>
    </nav>
  );
}

export default Navbar;
