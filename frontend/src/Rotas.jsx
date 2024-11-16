import "./assets/custom/custom.scss";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Signup from "./pages/Signup";

function Rotas() {
  // return <></>;
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/signup" element={<Signup />}/>
      </Routes>
    </Router>
  )
}

export default Rotas;
