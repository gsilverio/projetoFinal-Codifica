/* eslint-disable react/prop-types */

import ProductPrice from "../../../../components/ProductPrice";
import { requestBackEnd } from "../../../../utils/request";
import CategoryBadge from "../CategoryBadge";
import "./styles.css";
import { Link } from "react-router-dom";

const ProductCrudCard = ({ product, onDelete }) => {
  const handleDelete = (productId) => {
    if (!window.confirm("Tem certeza que deseja deletar")) {
      return;
    }
    const config = {
      method: "DELETE",
      url: `/products/${productId}`,
      withCredentials: true,
    };
    requestBackEnd(config).then(() => {
      onDelete();
    });
  };
  return (
    <div className="base-card product-crud-card">
      <div className="product-crud-card-top-container">
        <img src={product.imgUrL} alt={product.name} />
      </div>
      <div className="product-crud-card-description">
        <div className="product-crud-card-bottom-container">
          <h6>{product.name}</h6>
          <ProductPrice price={product.price} />
        </div>
        <div className="product-crud-categories-contanier">
          {product?.categories?.map((category) => (
            <CategoryBadge name={category.name} key={category.id} />
          ))}
        </div>
      </div>
      <div className="product-crud-card-buttons-container">
        <button
          onClick={() => handleDelete(product.id)}
          className="btn btn-outline-danger product-crud-card-button product-crud-card-button-first "
        >
          EXCLUIR
        </button>
        <Link to={`/admin/products/${product.id}`}>
          <button className="btn btn-outline-secondary product-crud-card-button">
            EDITAR
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCrudCard;
