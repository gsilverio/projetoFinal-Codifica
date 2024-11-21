import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Rotas from "./Rotas";
import CartProvider from "./contexts/CartContext";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <Rotas />
      <ToastContainer />
    </CartProvider>
  </StrictMode>
);
