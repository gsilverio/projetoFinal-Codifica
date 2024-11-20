import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductsAdmin from "./ProductsAdmin";
import Form from "./Form";

function Products() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ProductsAdmin />} />
        <Route path="/:productId" element={<Form />} />
      </Routes>
    </>
  );
}

export default Products;
