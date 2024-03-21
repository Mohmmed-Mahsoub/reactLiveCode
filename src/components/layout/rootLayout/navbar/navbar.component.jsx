import { NavLink } from "react-router-dom";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <nav className="p-3 bg-secondary text-center">
      <NavLink
        to="/"
        //add style when the link is active
        className={({ isActive }) =>
          [isActive ? "active text-primary" : "", "mr-3"].join(" ")
        }
      >
        Home
      </NavLink>
      <NavLink
        to="about"
        className={({ isActive }) =>
          [isActive ? "active text-primary" : "", "mr-3"].join(" ")
        }
      >
        About
      </NavLink>
    </nav>
  );
};

export default Navbar;
