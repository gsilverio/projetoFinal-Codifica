import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import Navbar from '../../components/Navbar';
import CartNavbar from '../../components/Cart/Navbar';
import ShoppingCart from '../../components/Cart';
import Footer from "../../components/Footer";
import { CartContext } from '../../contexts/CartContext';

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <>
      <CartNavbar />
      <ShoppingCart />
      <Footer />
    </>
  );
};

export default Cart;
