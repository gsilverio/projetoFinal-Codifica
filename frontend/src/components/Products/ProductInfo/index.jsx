import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { CartContext } from '../../../contexts/CartContext';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBIcon,
  MDBBtn,
  MDBRipple,
} from "mdb-react-ui-kit";

const ProductInfo = ({ product, onBack }) => {
  const { addToCart } = useContext(CartContext);

  if (!product) return null;

  const handleAddToCart = (product, event) => {
    event.stopPropagation();
    addToCart(product);
    alert(`${product.title} foi adicionado ao carrinho!`);
  };

  return (
      <MDBContainer className="my-5">
        <MDBRow className="justify-content-center">
          <MDBCol xs="12" md="8" lg="6">
            <MDBCard style={{ borderRadius: '15px' }}>
              <MDBBtn color="secondary" onClick={onBack} className="mb-3">
                Voltar
              </MDBBtn>
              
              <MDBRipple rippleTag="div" className="bg-image rounded hover-overlay">
                <MDBCardImage
                  src={product.imgSrc}
                  alt={product.title}
                  fluid
                  className="w-100 rounded-top"
                  style={{ objectFit: 'contain', maxHeight: '400px' }}
                />
              </MDBRipple>

              <MDBCardBody className="d-flex flex-column">

              <div className="d-flex justify-content-between flex-column mb-3">
                <p className="h5 text-dark mb-0 text-center" style={{ fontWeight: 'bold' }}>
                  {product.title}
                </p>
                <p className="text-muted text-center">
                  <strong>R$ {product.price.toFixed(2)}</strong>
                </p>
              </div>

              <div className="mb-3">
                <p className="text-muted text-center">{product.description}</p>
              </div>

              <div className="d-flex justify-content-end mt-3">
                <MDBBtn color="primary" onClick={(event) => handleAddToCart(product, event)}>
                  Comprar
                </MDBBtn>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
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
