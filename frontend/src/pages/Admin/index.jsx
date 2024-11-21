import "./styles.css";
import {
  getAccessTokenPayload,
  hasAnyRoles,
  hasRoleAdmin,
  isAuthenticated,
  printAuthorities,
  requestBackEnd,
} from "../../utils/request";
import Navbar from "../../components/Navbar";

import SideNavbarAdmin from "./SideNavbarAdmin";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "../../components/PrivateRoute";
import ProductsAdmin from "./Products/ProductsAdmin";
import Sales from "./Sales";
import Products from "./Products";

function Admin() {
  console.log("TEM ROLE: " + hasAnyRoles());
  console.log("TEM ROLE admin: " + hasRoleAdmin());
  console.log(printAuthorities());
  const config = {
    url: "/user/me",
    withCredentials: true,
  };
  requestBackEnd(config).then((response) => {
    console.log(response.data);
  });

  console.log(getAccessTokenPayload()?.["authorities"]);
  console.log(isAuthenticated());

  return (
    <>
      <div>
        <Navbar />
        <div className="adm-container">
          <SideNavbarAdmin />
          <div className="adm-content">
            <Routes>
              <Route path="products/*" element={<Products />} />

              <Route path="/sales" element={<Sales />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default Admin;
