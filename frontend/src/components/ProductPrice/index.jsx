import { formatPrice } from "../../utils/formatters";
import "./styles.css";

// eslint-disable-next-line react/prop-types
const ProductPrice = ({ price }) => {
  return (
    <div className="product-price-container">
      <span>R$</span>
      <h3>{formatPrice(price)}</h3>
    </div>
  );
};

export default ProductPrice;
