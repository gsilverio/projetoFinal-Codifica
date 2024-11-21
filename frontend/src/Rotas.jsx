import "./assets/custom/custom.scss";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Sac from "./pages/Sac";
import Login from "./pages/Login";

function Rotas() {
  // return <></>;
  return (
    <Router>
      <Routes>     
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/sac" element={<Sac />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default Rotas;
