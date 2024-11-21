import React, { useState, useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { Link, useNavigate } from "react-router-dom";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBInput,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTextArea,
  MDBTypography,
} from "mdb-react-ui-kit";
import PropTypes from "prop-types";

export const CartModal = ({ product, toggleOpen, topRightModal }) => {
  const navigate = useNavigate();
  if (!product) return null;
  // const [topRightModal, setTopRightModal] = useState(false);
  // const { addToCart } = useContext(CartContext);

  // const handleAddToCart = () => {
  //   addToCart(product); // Adiciona o produto ao carrinho
  //   toggleOpen(); // Fecha o modal
  // };

  return (
    <>
      <MDBModal
        animationDirection="right"
        open={topRightModal}
        tabIndex="-1"
        onClose={toggleOpen}
        backdrop={false}
        reduceMotion
      >
        <MDBModalDialog position="top-right" side>
          <MDBModalContent>
            <MDBModalHeader className="bg-info text-white">
              <MDBModalTitle>Produto adicionado ao carrinho</MDBModalTitle>
              <MDBBtn
                color="none"
                className="btn-close btn-close-white"
                onClick={toggleOpen}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <div className="row">
                <div className="col-3 text-center">
                  <i className="fas fa-shopping-cart fa-4x text-info"></i>
                </div>
                <div className="col-9">
                  <p>
                    <strong>{product.title}</strong> foi adicionado ao carrinho!
                  </p>
                  <p>Seu produto estará esperando por você no carrinho.</p>
                </div>
              </div>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn outline color="info" onClick={toggleOpen}>
                Fechar
              </MDBBtn>
              <Link to="/cart">
                <MDBBtn color="info">Ir para o carrinho</MDBBtn>
              </Link>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
};

CartModal.propTypes = {
  product: PropTypes.object.isRequired,
  toggleOpen: PropTypes.func.isRequired,
  topRightModal: PropTypes.bool.isRequired,
};

export const CommentModal = ({ addComment }) => {
  const [basicModal, setBasicModal] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [rating, setRating] = useState(0);

  const toggleOpen = () => setBasicModal(!basicModal);

  const handleSubmit = () => {
    if (commentText.trim()) {
      addComment({ text: commentText, rating });
      setCommentText("");
      setRating(0);
      toggleOpen();
    }
  };

  const handleCancel = () => {
    setCommentText("");
    setRating(0);
    toggleOpen();
  };

  return (
    <>
      <MDBBtn onClick={toggleOpen} className="btn-dark">
        Avaliar
      </MDBBtn>
      <MDBModal
        open={basicModal}
        onClose={() => setBasicModal(false)}
        tabIndex="-1"
      >
        <section>
          <MDBContainer className="py-5" style={{ maxWidth: "1000px" }}>
            <MDBRow className="justify-content-center">
              <MDBCol md="10" lg="8" xl="6">
                <MDBCard>
                  <MDBCardBody className="p-4">
                    <div className="d-flex flex-start w-100">
                      <MDBCardImage
                        className="rounded-circle shadow-1-strong me-3"
                        src="https://cdn-icons-png.flaticon.com/512/3135/3135768.png"
                        alt="avatar"
                        width="65"
                        height="65"
                      />

                      <div className="w-100">
                        <div className="d-flex justify-content-end">
                          <MDBBtn
                            className="btn-close"
                            color="none"
                            onClick={handleCancel}
                          ></MDBBtn>
                        </div>
                        <MDBTypography tag="h5">
                          Adicionar comentário
                        </MDBTypography>
                        <div>
                          {[...Array(5)].map((_, index) => (
                            <MDBIcon
                              key={index}
                              fas
                              icon="star"
                              // className={index < rating ? 'text-danger' : ''}
                              style={{
                                color: index < rating ? "#FFD700" : "#D3D3D3",
                                fontSize: "18px",
                              }}
                              onClick={() => setRating(index + 1)}
                            />
                          ))}
                        </div>
                        <MDBTextArea
                          label="Comentário"
                          rows={4}
                          value={commentText}
                          onChange={(e) => setCommentText(e.target.value)}
                        />

                        <div className="d-flex justify-content-between mt-3">
                          {/* <MDBBtn color='secondary' onClick={toggleOpen}> */}
                          <MDBBtn color="secondary" onClick={handleCancel}>
                            Cancelar
                          </MDBBtn>
                          <MDBBtn onClick={handleSubmit}>Confirmar</MDBBtn>
                        </div>
                      </div>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
      </MDBModal>
    </>
  );
};

CommentModal.propTypes = {
  addComment: PropTypes.func.isRequired,
};
