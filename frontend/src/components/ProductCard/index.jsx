/* eslint-disable react/prop-types */
import ProductPrice from "../ProductPrice";
import "./styles.css";

const ProductCard = ({ product }) => {
  return (
    <div className="base-card product-card">
      <div className="card-top-container">
        <img src={product.imgUrL} alt={product.name} />
      </div>
      <div className="card-bottom-container">
        <h6>{product.name}</h6>
        <ProductPrice price={product.price} />
      </div>
    </div>
  );
};

export default ProductCard;
