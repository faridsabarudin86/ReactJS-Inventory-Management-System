import { NavLink } from "react-router-dom";
import "./Header.css";
import { jwtDecode } from "jwt-decode";
import { JWTDto } from "./Layout.Interface";

export default function Header() {
  const token = localStorage.getItem("JWT");
  const decoded: JWTDto = jwtDecode(token!);

  return (
    <>
      <ul className="nav-bar-container">
        <li className="nav-content-container">
          <NavLink
            className="nav-content"
            to={`/users/${decoded.corporateUuid}`}
          >
            Users
          </NavLink>
        </li>
        <li className="nav-content-container">
          <NavLink
            className="nav-content"
            to={`/corporate/${decoded.corporateUuid}`}
          >
            Corporate
          </NavLink>
        </li>
        <li className="nav-content-container">
          <NavLink
            className="nav-content"
            to={`/inventory/${decoded.corporateUuid}`}
          >
            Inventory
          </NavLink>
        </li>
      </ul>
    </>
  );
}
