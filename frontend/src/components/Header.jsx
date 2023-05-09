import { NavLink } from "react-router-dom";

const getActiveLinkStyle = ({ isActive }) => {
  if (isActive) return { color: "orange" };
  return null;
};

export default function Header() {
  return (
    <header>
      <nav>
        <NavLink style={getActiveLinkStyle} to="/">
          Home
        </NavLink>
        <NavLink style={getActiveLinkStyle} to="/contact">
          Contact
        </NavLink>
      </nav>
    </header>
  );
}
