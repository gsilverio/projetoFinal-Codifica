import { useContext, useEffect, useState } from 'react'; 
import { Link } from 'react-router-dom';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { CartContext } from '../../contexts/CartContext';
import { CartModal } from '../Modal';
import PropTypes from 'prop-types';
import axios from 'axios';
// import './style.css'
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

const Products = ({ onProductClick }) => {
  const { addToCart } = useContext(CartContext);
  const [ products, setProducts ] = useState([]);
  const [ loading, setLoading ] = useState(true);
  const [ error, setError ] = useState(null);

  const [topRightModal, setTopRightModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8080/products')     
      .then((response) => {
        console.log('Resposta da API:', response);
        if (response.data && Array.isArray(response.data.content)) {
          const mappedProducts = response.data.content.map(product => ({
            id: product.id,
            title: product.name,
            description: product.description,
            price: product.price,
            imgSrc: product.imgUrL,
          }));
          setProducts(mappedProducts);
        } else {
          setProducts([]);
        }
        setLoading(false);
      })
      .catch((error) => {
        setError('Erro ao carregar produtos');
        setLoading(false);

        console.error(error);
      })
  }, [])

  const handleAddToCart = (product, event) => {
    event.stopPropagation();
    addToCart(product);
    setSelectedProduct(product);
    setTopRightModal(true);
    // alert(`${product.title} foi adicionado ao carrinho!`);
  };

  if (loading) {
    return <div>Carregando produtos...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const getRandomRating = () => {
    return Math.floor(Math.random() * 4) + 4;
  };

  return (
    <MDBContainer fluid className="bg-dark">
      <MDBRow className='g-4 justify-content-center'>
        {/* {products.map((product) => ( */}
        {products.map((product) => {
          const rating = getRandomRating();
          return (
            <MDBCol xs="12" sm="6" md="4" lg="3" xl="3" key={product.id}>
            <MDBCard style={{ borderRadius: "15px", minHeight: '400px' }}>
              <MDBRipple
                rippleColor="light"
                rippleTag="div"
                className="bg-image rounded hover-overlay"

              >
                <div
                  style={{
                    width: '100%',
                    height: '250px',
                    overflow: 'hidden',
                    position: 'relative',
                    borderTopLeftRadius: "15px",
                    borderTopRightRadius: "15px",
                  }}
                >
                  <MDBCardImage
                    src={product.imgSrc}
                    alt={product.title}
                    fluid
                    className="w-100 h-100"
                    onClick={() => onProductClick(product)}
                    style={{
                      objectFit: 'contain',
                      maxWidth: '100%',
                      maxHeight: '100%',
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      cursor: 'pointer',
                    }}
                  />
                </div>
              </MDBRipple>
              <MDBCardBody>
                <div className="d-flex justify-content-between flex-column ">
                  <div style={{ flexGrow: 1 }}>
                    <p
                      className="text-dark mb-1"
                      style={{
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        fontWeight: 'bold',
                        maxWidth: '200px',
                        display: 'block',
                      }}
                      >
                        {product.title}
                      </p>
                    {/* <p className="small text-muted">Laptops</p> */}
                  </div>
                  <div>
                    <div className="d-flex flex-row justify-content-end mt-1 mb-4 text-danger" style={{ fontSize: '18px', alignItems: 'center', gap: '4px' }}>
                        {[...Array(5)].map((_, index) => (
                          <MDBIcon
                            key={index}
                            fas
                            icon="star"
                            style={{
                              color: index < rating ? '#FFD700' : '#D3D3D3',
                              fontSize: '18px',
                            }}
                          />
                        ))}
                      </div>
                    {/* <p className="small text-muted">Rated 4.0/5</p> */}
                  </div>
                </div>
              </MDBCardBody>
              <hr className="my-0" />
              <MDBCardBody className="pb-0">
                <div className="d-flex justify-content-between">
                  <p>
                    <a href="#!" className="text-dark">
                      <strong>
                        R$ {(product.price).toFixed(2)}
                      </strong>
                    </a>
                  </p>
                  {/* <p className="text-dark">#### 8787</p> */}
                </div>
                {/* <p className="small text-muted">VISA Platinum</p> */}
              </MDBCardBody>
              <hr className="my-0" />
              <MDBCardBody className="pb-0">
                <div className="d-flex justify-content-between align-items-center pb-2 mb-4">
                  <a onClick={() => onProductClick(product)} className="text-dark fw-bold" style={{ cursor:'pointer' }}>
                    Ver detalhes
                  </a>
                  <MDBBtn onClick={(event) => handleAddToCart(product, event)} color="primary">Comprar</MDBBtn>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          )
        })}
      </MDBRow>
      {selectedProduct && (
        <CartModal
          product={selectedProduct}
          toggleOpen={() => setTopRightModal(!topRightModal)}
          topRightModal={topRightModal}
        />
      )}
    </MDBContainer>
  );
}

Products.propTypes = {
  onProductClick: PropTypes.func.isRequired,
};

export default Products;
