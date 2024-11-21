import React from "react";
import { NavLink } from "react-router-dom";
import { hasAnyRoles } from "../../../utils/request";
import "./styles.css";
function SideNavbarAdmin() {
  return (
    <nav className="admin-nav-container">
      <ul className="admin-nav-items-container">
        <li>
          <NavLink to="/admin/products" className="admin-nav-item">
            <p>Produtos</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/sales" className="admin-nav-item">
            <p>Vendas</p>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default SideNavbarAdmin;
