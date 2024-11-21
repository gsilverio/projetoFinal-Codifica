import { useContext, useState } from 'react';
// import { Button } from 'react-bootstrap';
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
import { CommentModal } from '../../Modal';
import Comments from '../../Comment';

const ProductInfo = ({ product, onBack }) => {
  const { addToCart } = useContext(CartContext);

  const [comments, setComments] = useState([]);

  if (!product) return null;

  const handleAddToCart = (product, event) => {
    event.stopPropagation();
    addToCart(product);
    alert(`${product.title} foi adicionado ao carrinho!`);
  };

  const addComment = (newComment) => {
    setComments([...comments, newComment]);
  };

  return (
      <MDBContainer className="my-5">
        <MDBRow className="justify-content-center">
          <MDBCol xs="12" md="8" lg="6">
            <MDBCard className='mb-5' style={{ borderRadius: '15px' }}>
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
              <hr />
              <div className="d-flex justify-content-between mt-3">
                {/* <a className="text-dark fw-bold" style={{ cursor:'pointer' }}>Adicionar Avaliação</a> */}
                <CommentModal addComment={addComment} />
                
                <MDBBtn color="primary" onClick={(event) => handleAddToCart(product, event)}>
                  Comprar
                </MDBBtn>
              </div>
            </MDBCardBody>
          </MDBCard>
          <Comments comments={comments} />
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
