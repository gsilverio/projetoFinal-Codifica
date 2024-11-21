import "./assets/custom/custom.scss";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Sac from "./pages/Sac";
import Login from "./pages/Login";

import { unstable_HistoryRouter as HistoyRouter } from "react-router-dom";
import { history } from "./utils/history";
import PrivateRoute from "./components/PrivateRoute";
import Admin from "./pages/Admin";
import Navbar from "./components/Navbar";
import Profile from "./pages/Profile";
import ProductInfo from "./components/Products/ProductInfo";
import { isAuthenticated } from "./utils/request";
import LoginRoute from "./components/LoginRoute";
import UserRegistration from "./pages/CadastroUsuario";

function Rotas() {
  // return <></>;
  return (
    <HistoyRouter history={history}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/product/:productId" element={<ProductInfo />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/sac" element={<Sac />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<UserRegistration />} />
        <Route path="/admin/*" element={<Admin />} />

        <Route
          path="/login"
          element={
            <LoginRoute>
              <Login />
            </LoginRoute>
          }
        />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </HistoyRouter>
  );
}

export default Rotas;
