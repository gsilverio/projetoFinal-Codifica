import React, { useContext, useEffect, useState } from "react";
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
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";
import { requestBackEnd } from "../../utils/request"; // Importe a função requestBackEnd
import "./style.css";
import { toast } from "react-toastify";

const ShoppingCart = () => {
  const navigate = useNavigate();
  const {
    cart,
    incrementQuantity,
    decrementQuantity,
    removeFromCart,
    clearCart,
  } = useCart();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  let user = "";

  // Fetch user data
  requestBackEnd({
    method: "GET",
    url: "/user/me",
    withCredentials: true,
  })
    .then((response) => {
      user = response.data;
      console.log(user);
    })
    .catch((error) => {
      console.error("Error fetching user data:", error);
    });

  const handleCheckout = async () => {
    setIsLoading(true);
    setErrorMessage("");

    const cartItems = cart.map((item) => ({
      id: item.id, // Certifique-se de que o campo é 'id'
    }));

    // Dados do pedido para enviar na query string
    const userId = user.id; // Isso deve ser dinâmico, baseado no usuário logado
    const value = cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    ); // Total do carrinho
    const numPedido = "12345"; // Isso deve ser gerado de alguma forma
    const status = "completed"; // Status da venda

    // Corpo da requisição (SaleDTO) com a chave 'products'
    const saleRequest = {
      products: cartItems, // Mudança de 'items' para 'products'
      // Adicione outros dados que forem necessários no SaleDTO
    };

    try {
      const response = await requestBackEnd({
        method: "POST",
        url: `/sales/create?userId=${userId}&value=${value}&numPedido=${numPedido}&status=${status}`,
        data: saleRequest, // Corpo da requisição (SaleDTO)
      });

      if (response.status === 200) {
        // Sucesso - redirecionar ou mostrar mensagem de sucesso
        console.log("Compra finalizada com sucesso!", response.data);
        toast.done("Compra realizada com sucesso.");
        navigate("/home");
        clearCart();
        // Exemplo de redirecionamento (caso queira)
        // window.location.href = '/sucesso';
      }
    } catch (error) {
      setErrorMessage(
        "Erro ao finalizar a compra. Tente novamente mais tarde."
      );
      console.error("Erro na requisição", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
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
                          <MDBIcon fas icon="long-arrow-alt-left me-2" />{" "}
                          Continuar comprando
                        </Link>
                      </MDBTypography>

                      <hr />

                      <div className="d-flex justify-content-between align-items-center mb-4">
                        <div>
                          <p className="mb-0">
                            Você tem {cart.length} itens no carrinho
                          </p>
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
                                      fluid
                                      className="rounded-3"
                                      style={{ width: "65px" }}
                                      alt="Shopping item"
                                    />
                                  </div>
                                  <div className="ms-3">
                                    <MDBTypography tag="h5">
                                      {item.title}
                                    </MDBTypography>
                                    <p className="small mb-0">
                                      {item.description}
                                    </p>
                                  </div>
                                </div>
                                <div className="d-flex flex-column flex-md-row align-items-center">
                                  <div className="d-flex align-items-center mb-2 mb-md-0">
                                    <MDBBtn
                                      color="danger"
                                      size="sm"
                                      onClick={() => decrementQuantity(item.id)}
                                      disabled={item.quantity <= 1}
                                    >
                                      -
                                    </MDBBtn>
                                    <div
                                      style={{
                                        width: "50px",
                                        textAlign: "center",
                                      }}
                                    >
                                      <MDBTypography
                                        tag="h6"
                                        className="fw-normal mb-0"
                                      >
                                        {item.quantity}
                                      </MDBTypography>
                                    </div>
                                    <MDBBtn
                                      color="primary"
                                      size="sm"
                                      onClick={() => incrementQuantity(item.id)}
                                    >
                                      +
                                    </MDBBtn>
                                  </div>
                                  <div
                                    className="d-flex align-items-center mb-2 mb-md-0"
                                    style={{ width: "80px" }}
                                  >
                                    <MDBTypography tag="h6" className="mb-0">
                                      R$
                                      {(item.price * item.quantity).toFixed(2)}
                                    </MDBTypography>
                                  </div>
                                  <a
                                    href="#!"
                                    style={{ color: "#cecece" }}
                                    onClick={() => removeFromCart(item.id)}
                                  >
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
                                fluid
                                className="rounded-3"
                                style={{ width: "80px" }}
                                alt="Avatar"
                              />
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
                              <MDBInput
                                className="mb-4"
                                label="Nome do titular"
                                type="text"
                                size="lg"
                                placeholder="Nome do titular"
                                contrast
                              />

                              <MDBInput
                                className="mb-4"
                                label="Número do cartão"
                                type="text"
                                size="lg"
                                minLength="19"
                                maxLength="19"
                                placeholder="1234 5678 9012 3457"
                                contrast
                              />

                              <MDBRow className="mb-4">
                                <MDBCol md="6">
                                  <MDBInput
                                    className="mb-4"
                                    label="Validade"
                                    type="text"
                                    size="lg"
                                    minLength="7"
                                    maxLength="7"
                                    placeholder="MM/YYYY"
                                    contrast
                                  />
                                </MDBCol>
                                <MDBCol md="6">
                                  <MDBInput
                                    className="mb-4"
                                    label="Cvv"
                                    type="text"
                                    size="lg"
                                    minLength="3"
                                    maxLength="3"
                                    placeholder="&#9679;&#9679;&#9679;"
                                    contrast
                                  />
                                </MDBCol>
                              </MDBRow>
                            </form>

                            <hr />

                            <div className="d-flex justify-content-between">
                              <p className="mb-2">Subtotal</p>
                              <p className="mb-2">
                                R$
                                {cart
                                  .reduce(
                                    (total, item) =>
                                      total + item.price * item.quantity,
                                    0
                                  )
                                  .toFixed(2)}
                              </p>
                            </div>

                            <div className="d-flex justify-content-between">
                              <p className="mb-2">Frete</p>
                              <p className="mb-2">R$0.00</p>
                            </div>

                            <div className="d-flex justify-content-between">
                              <p className="mb-2">Total</p>
                              <p className="mb-2">
                                R$
                                {cart
                                  .reduce(
                                    (total, item) =>
                                      total + item.price * item.quantity,
                                    0
                                  )
                                  .toFixed(2)}
                              </p>
                            </div>

                            {errorMessage && (
                              <div className="alert alert-danger mt-3">
                                {errorMessage}
                              </div>
                            )}

                            <MDBBtn
                              color="success"
                              size="lg"
                              block
                              onClick={handleCheckout}
                              disabled={isLoading}
                            >
                              {isLoading
                                ? "Processando..."
                                : "Finalizar compra"}
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
    </>
  );
};

export default ShoppingCart;
