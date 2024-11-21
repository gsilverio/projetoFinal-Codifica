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

function Rotas() {
  // return <></>;
  return (
    <HistoyRouter history={history}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/sac" element={<Sac />} />
        <Route path="/login" element={<Login />} />

        <Route path="/sac" element={<Sac />} />

        <Route element={<PrivateRoute />}>
          <Route path="/admin/*" element={<Admin />}></Route>
        </Route>

        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </HistoyRouter>
  );
}

export default Rotas;
