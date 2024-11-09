import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBRow,
    MDBTypography,
} from "mdb-react-ui-kit";
import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { CartContext } from "../../contexts/CartContext";

const ShoppingCart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  // return (
  //   <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
  //     <MDBContainer className="py-5 h-100">
  //       <MDBRow className="justify-content-center align-items-center h-100">
  //         <MDBCol>
  //           <MDBCard>
  //             <MDBCardBody className="p-4">
  //               <MDBRow>
  //                 <MDBCol lg="7">
  //                   <MDBTypography tag="h5">
  //                     <a href="#!" className="text-body">
  //                       <MDBIcon fas icon="long-arrow-alt-left me-2" /> Continue
  //                       shopping
  //                     </a>
  //                   </MDBTypography>
    
  //                   <hr />
    
  //                   <div className="d-flex justify-content-between align-items-center mb-4">
  //                     <div>
  //                       <p className="mb-1">Shopping cart</p>
  //                       <p className="mb-0">You have 4 items in your cart</p>
  //                     </div>
  //                     <div>
  //                       <p>
  //                         <span className="text-muted">Sort by:</span>
  //                         <a href="#!" className="text-body">
  //                           price
  //                           <MDBIcon fas icon="angle-down mt-1" />
  //                         </a>
  //                       </p>
  //                     </div>
  //                   </div>
    
  //                   <MDBCard className="mb-3">
  //                     <MDBCardBody>
  //                       <div className="d-flex justify-content-between">
  //                         <div className="d-flex flex-row align-items-center">
  //                           <div>
  //                             <MDBCardImage
  //                               src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp"
  //                               fluid className="rounded-3" style={{ width: "65px" }}
  //                               alt="Shopping item" />
  //                           </div>
  //                           <div className="ms-3">
  //                             <MDBTypography tag="h5">
  //                               Iphone 11 pro
  //                             </MDBTypography>
  //                             <p className="small mb-0">256GB, Navy Blue</p>
  //                           </div>
  //                         </div>
  //                         <div className="d-flex flex-row align-items-center">
  //                           <div style={{ width: "50px" }}>
  //                             <MDBTypography tag="h5" className="fw-normal mb-0">
  //                               2
  //                             </MDBTypography>
  //                           </div>
  //                           <div style={{ width: "80px" }}>
  //                             <MDBTypography tag="h5" className="mb-0">
  //                               $900
  //                             </MDBTypography>
  //                           </div>
  //                           <a href="#!" style={{ color: "#cecece" }}>
  //                             <MDBIcon fas icon="trash-alt" />
  //                           </a>
  //                         </div>
  //                       </div>
  //                     </MDBCardBody>
  //                   </MDBCard>
    
  //                   <MDBCard className="mb-3">
  //                     <MDBCardBody>
  //                       <div className="d-flex justify-content-between">
  //                         <div className="d-flex flex-row align-items-center">
  //                           <div>
  //                             <MDBCardImage
  //                               src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img2.webp"
  //                               fluid className="rounded-3" style={{ width: "65px" }}
  //                               alt="Shopping item" />
  //                           </div>
  //                           <div className="ms-3">
  //                             <MDBTypography tag="h5">
  //                               Samsung galaxy Note 10
  //                             </MDBTypography>
  //                             <p className="small mb-0">256GB, Navy Blue</p>
  //                           </div>
  //                         </div>
  //                         <div className="d-flex flex-row align-items-center">
  //                           <div style={{ width: "50px" }}>
  //                             <MDBTypography tag="h5" className="fw-normal mb-0">
  //                               2
  //                             </MDBTypography>
  //                           </div>
  //                           <div style={{ width: "80px" }}>
  //                             <MDBTypography tag="h5" className="mb-0">
  //                               $900
  //                             </MDBTypography>
  //                           </div>
  //                           <a href="#!" style={{ color: "#cecece" }}>
  //                             <MDBIcon fas icon="trash-alt" />
  //                           </a>
  //                         </div>
  //                       </div>
  //                     </MDBCardBody>
  //                   </MDBCard>
    
  //                   <MDBCard className="mb-3">
  //                     <MDBCardBody>
  //                       <div className="d-flex justify-content-between">
  //                         <div className="d-flex flex-row align-items-center">
  //                           <div>
  //                             <MDBCardImage
  //                               src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img3.webp"
  //                               fluid className="rounded-3" style={{ width: "65px" }}
  //                               alt="Shopping item" />
  //                           </div>
  //                           <div className="ms-3">
  //                             <MDBTypography tag="h5">
  //                               Canon EOS M50
  //                             </MDBTypography>
  //                             <p className="small mb-0">Onyx Black</p>
  //                           </div>
  //                         </div>
  //                         <div className="d-flex flex-row align-items-center">
  //                           <div style={{ width: "50px" }}>
  //                             <MDBTypography tag="h5" className="fw-normal mb-0">
  //                               1
  //                             </MDBTypography>
  //                           </div>
  //                           <div style={{ width: "80px" }}>
  //                             <MDBTypography tag="h5" className="mb-0">
  //                               $1199
  //                             </MDBTypography>
  //                           </div>
  //                           <a href="#!" style={{ color: "#cecece" }}>
  //                             <MDBIcon fas icon="trash-alt" />
  //                           </a>
  //                         </div>
  //                       </div>
  //                     </MDBCardBody>
  //                   </MDBCard>
    
  //                   <MDBCard className="mb-3">
  //                     <MDBCardBody>
  //                       <div className="d-flex justify-content-between">
  //                         <div className="d-flex flex-row align-items-center">
  //                           <div>
  //                             <MDBCardImage
  //                               src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img4.webp"
  //                               fluid className="rounded-3" style={{ width: "65px" }}
  //                               alt="Shopping item" />
  //                           </div>
  //                           <div className="ms-3">
  //                             <MDBTypography tag="h5">
  //                               MacBook Pro
  //                             </MDBTypography>
  //                             <p className="small mb-0">1TB, Graphite</p>
  //                           </div>
  //                         </div>
  //                         <div className="d-flex flex-row align-items-center">
  //                           <div style={{ width: "50px" }}>
  //                             <MDBTypography tag="h5" className="fw-normal mb-0">
  //                               1
  //                             </MDBTypography>
  //                           </div>
  //                           <div style={{ width: "80px" }}>
  //                             <MDBTypography tag="h5" className="mb-0">
  //                               $1799
  //                             </MDBTypography>
  //                           </div>
  //                           <a href="#!" style={{ color: "#cecece" }}>
  //                             <MDBIcon fas icon="trash-alt" />
  //                           </a>
  //                         </div>
  //                       </div>
  //                     </MDBCardBody>
  //                   </MDBCard>
  //                 </MDBCol>
    
  //                 <MDBCol lg="5">
  //                   <MDBCard className="bg-primary text-white rounded-3">
  //                     <MDBCardBody>
  //                       <div className="d-flex justify-content-between align-items-center mb-4">
  //                         <MDBTypography tag="h5" className="mb-0">
  //                           Card details
  //                         </MDBTypography>
  //                         <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
  //                           fluid className="rounded-3" style={{ width: "45px" }} alt="Avatar" />
  //                       </div>
    
  //                       <p className="small">Card type</p>
  //                       <a href="#!" type="submit" className="text-white">
  //                         <MDBIcon fab icon="cc-mastercard fa-2x me-2" />
  //                       </a>
  //                       <a href="#!" type="submit" className="text-white">
  //                         <MDBIcon fab icon="cc-visa fa-2x me-2" />
  //                       </a>
  //                       <a href="#!" type="submit" className="text-white">
  //                         <MDBIcon fab icon="cc-amex fa-2x me-2" />
  //                       </a>
  //                       <a href="#!" type="submit" className="text-white">
  //                         <MDBIcon fab icon="cc-paypal fa-2x me-2" />
  //                       </a>
    
  //                       <form className="mt-4">
  //                         <MDBInput className="mb-4" label="Cardholder's Name" type="text" size="lg"
  //                           placeholder="Cardholder's Name" contrast />
    
  //                         <MDBInput className="mb-4" label="Card Number" type="text" size="lg"
  //                           minLength="19" maxLength="19" placeholder="1234 5678 9012 3457" contrast />
    
  //                         <MDBRow className="mb-4">
  //                           <MDBCol md="6">
  //                             <MDBInput className="mb-4" label="Expiration" type="text" size="lg"
  //                               minLength="7" maxLength="7" placeholder="MM/YYYY" contrast />
  //                           </MDBCol>
  //                           <MDBCol md="6">
  //                             <MDBInput className="mb-4" label="Cvv" type="text" size="lg" minLength="3"
  //                               maxLength="3" placeholder="&#9679;&#9679;&#9679;" contrast />
  //                           </MDBCol>
  //                         </MDBRow>
  //                       </form>
    
  //                       <hr />
    
  //                       <div className="d-flex justify-content-between">
  //                         <p className="mb-2">Subtotal</p>
  //                         <p className="mb-2">$4798.00</p>
  //                       </div>
    
  //                       <div className="d-flex justify-content-between">
  //                         <p className="mb-2">Shipping</p>
  //                         <p className="mb-2">$20.00</p>
  //                       </div>
    
  //                       <div className="d-flex justify-content-between">
  //                         <p className="mb-2">Total(Incl. taxes)</p>
  //                         <p className="mb-2">$4818.00</p>
  //                       </div>
    
  //                       <MDBBtn color="info" block size="lg">
  //                         <div className="d-flex justify-content-between">
  //                           <span>$4818.00</span>
  //                           <span>
  //                             Checkout{" "}
  //                             <i className="fas fa-long-arrow-alt-right ms-2"></i>
  //                           </span>
  //                         </div>
  //                       </MDBBtn>
  //                     </MDBCardBody>
  //                   </MDBCard>
  //                 </MDBCol>
  //               </MDBRow>
  //             </MDBCardBody>
  //           </MDBCard>
  //         </MDBCol>
  //       </MDBRow>
  //     </MDBContainer>
  //   </section>
  //   );

    return (
      <>
        {/* <CartNavbar /> */}
        <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
          <MDBContainer className="py-5 h-100">
            <MDBRow className="justify-content-center align-items-center h-100">
              <MDBCol>
                <MDBCard>
                  <MDBCardBody className="p-4">
                    <MDBRow>
                      <MDBCol lg="7">
                        <MDBTypography tag="h5">
                          <Link to="/" className="text-body">
                            <MDBIcon fas icon="long-arrow-alt-left me-2" /> Continuar
                            comprando
                          </Link>
                        </MDBTypography>
  
                        <hr />
  
                        <div className="d-flex justify-content-between align-items-center mb-4">
                          <div>
                            <p className="mb-0">Você tem {cart.length} itens no carrinho</p>
                          </div>
                        </div>
  
                        {cart.length === 0 ? (
                          <p>Seu carrinho está vazio.</p>
                        ) : (
                          cart.map((item) => (
                            <MDBCard className="mb-3" key={item.id}>
                              <MDBCardBody>
                                <div className="d-flex justify-content-between">
                                  <div className="d-flex flex-row align-items-center">
                                    <div>
                                      <MDBCardImage
                                        src={item.imgSrc}
                                        fluid className="rounded-3"
                                        style={{ width: "65px" }}
                                        alt="Shopping item" />
                                    </div>
                                    <div className="ms-3">
                                      <MDBTypography tag="h5">
                                        {item.title}
                                      </MDBTypography>
                                      <p className="small mb-0">{item.description}</p>
                                    </div>
                                  </div>
                                  <div className="d-flex flex-row align-items-center">
                                    <div style={{ width: "50px" }}>
                                      <MDBTypography tag="h5" className="fw-normal mb-0">
                                        {item.quantity}
                                      </MDBTypography>
                                    </div>
                                    <div style={{ width: "80px" }}>
                                      <MDBTypography tag="h5" className="mb-0">
                                        R${item.price.toFixed(2)}
                                      </MDBTypography>
                                    </div>
                                    <a href="#!" style={{ color: "#cecece" }} onClick={() => removeFromCart(item.id)}>
                                      <MDBIcon fas icon="trash-alt" />
                                    </a>
                                  </div>
                                </div>
                              </MDBCardBody>
                            </MDBCard>
                          ))
                        )}
                      </MDBCol>
  
                      {cart.length > 0 && (
                        <MDBCol lg="5">
                          <MDBCard className="bg-dark text-light rounded-3">
                            <MDBCardBody>
                              <div className="d-flex justify-content-between align-items-center mb-4">
                                <MDBTypography tag="h5" className="mb-0">
                                  Detalhes do cartão
                                </MDBTypography>
                                <MDBCardImage
                                  src="/images/logo.png"
                                  fluid className="rounded-3"
                                  style={{ width: "80px" }} alt="Avatar" />
                              </div>
  
                              <p className="small">Tipo de cartão</p>
                              <a href="#!" className="text-white">
                                <MDBIcon fab icon="cc-mastercard fa-2x me-2" />
                              </a>
                              <a href="#!" className="text-white">
                                <MDBIcon fab icon="cc-visa fa-2x me-2" />
                              </a>
                              <a href="#!" className="text-white">
                                <MDBIcon fab icon="cc-amex fa-2x me-2" />
                              </a>
                              <a href="#!" className="text-white">
                                <MDBIcon fab icon="cc-paypal fa-2x me-2" />
                              </a>
  
                              <form className="mt-4">
                                <MDBInput className="mb-4" label="Nome do titular" type="text" size="lg"
                                  placeholder="Nome do titular" contrast />
  
                                <MDBInput className="mb-4" label="Número do cartão" type="text" size="lg"
                                  minLength="19" maxLength="19" placeholder="1234 5678 9012 3457" contrast />
  
                                <MDBRow className="mb-4">
                                  <MDBCol md="6">
                                    <MDBInput className="mb-4" label="Validade" type="text" size="lg"
                                      minLength="7" maxLength="7" placeholder="MM/YYYY" contrast />
                                  </MDBCol>
                                  <MDBCol md="6">
                                    <MDBInput className="mb-4" label="Cvv" type="text" size="lg" minLength="3"
                                      maxLength="3" placeholder="&#9679;&#9679;&#9679;" contrast />
                                  </MDBCol>
                                </MDBRow>
                              </form>
  
                              <hr />
  
                              <div className="d-flex justify-content-between">
                                <p className="mb-2">Subtotal</p>
                                <p className="mb-2">R${cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2)}</p>
                              </div>
  
                              <div className="d-flex justify-content-between">
                                <p className="mb-2">Frete</p>
                                <p className="mb-2">R$20.00</p>
                              </div>
  
                              <div className="d-flex justify-content-between">
                                <p className="mb-2">Total (incl. impostos)</p>
                                <p className="mb-2">R${(cart.reduce((total, item) => total + (item.price * item.quantity), 0) + 20).toFixed(2)}</p>
                              </div>
  
                              <MDBBtn color="info" block size="lg">
                                <div className="d-flex justify-content-between">
                                  <span>R${(cart.reduce((total, item) => total + (item.price * item.quantity), 0) + 20).toFixed(2)}</span>
                                  <span>
                                    Finalizar compra{" "}
                                    <i className="fas fa-long-arrow-alt-right ms-2"></i>
                                  </span>
                                </div>
                              </MDBBtn>
                            </MDBCardBody>
                          </MDBCard>
                        </MDBCol>
                      )}
                    </MDBRow>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
        {/* <Footer /> */}
      </>
    );
}

export default ShoppingCart;
