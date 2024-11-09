import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { CartContext } from '../../../contexts/CartContext';

const ProductInfo = ({ product, onBack }) => {
  if (!product) return null;

  return (
    <div>
      <Button onClick={onBack}>Voltar</Button>
      <img src={product.imgSrc} alt={product.title} />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>Preço: R$ {product.price.toFixed(2)}</p>
    </div>
  );
};

ProductInfo.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    imgSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
  }),
  onBack: PropTypes.func.isRequired,
};

export default ProductInfo;
