import "./styles.css";
import { Link, NavLink } from "react-router-dom";
import logo from "./logo.png";

export default function Navbar() {
  return (
    <div className="nav">
      <Link className="logo-tag" to="/">
        <img src={logo} alt="" logo />
      </Link>
      <nav>
        <NavLink exact to="/">
          Home{" "}
        </NavLink>
        <NavLink to="/registrtion">Registrtion </NavLink>
        <NavLink to="/login">login </NavLink>
        <NavLink to="/profile">Profile </NavLink>
      </nav>
    </div>
  );
}
