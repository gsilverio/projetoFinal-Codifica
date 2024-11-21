import { useContext, useState, useEffect } from "react";
import { CartContext } from "../../../contexts/CartContext";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
} from "mdb-react-ui-kit";
import { CommentModal } from "../../Modal";
import Comments from "../../Comment";
import { requestBackEnd } from "../../../utils/request";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../../Navbar";

const ProductInfo = () => {
  const { productId } = useParams(); // Obtém o ID do produto da URL
  const { addToCart } = useContext(CartContext); // Contexto para adicionar ao carrinho
  const [product, setProduct] = useState({}); // Estado para armazenar os dados do produto
  const [comments, setComments] = useState([]); // Estado para armazenar os comentários
  const navigate = useNavigate(); // Função para navegação

  // Carregar os dados do produto e comentários ao montar o componente
  useEffect(() => {
    const loadProductData = async () => {
      try {
        // Carregar dados do produto
        const productResponse = await requestBackEnd({
          method: "GET",
          url: `/products/${productId}`, // URL do produto com ID dinâmico
        });
        setProduct(productResponse.data); // Armazenar os dados do produto no estado

        // Carregar os comentários do produto
        const commentsResponse = await requestBackEnd({
          method: "GET",
          url: `/products/${productId}/comments`, // URL de comentários do produto
        });
        setComments(commentsResponse.data); // Armazenar os comentários no estado
      } catch (error) {
        console.error(
          "Erro ao carregar os dados do produto ou comentários:",
          error
        );
      }
    };

    loadProductData();
  }, [productId]); // Recarrega se o productId mudar

  const handleAddToCart = (product, event) => {
    event.stopPropagation();
    addToCart(product); // Adiciona o produto ao carrinho
    alert(`${product.title} foi adicionado ao carrinho!`);
  };

  const addComment = async (newComment) => {
    const data = {
      comment: newComment.text,
      productId: `${productId}`,
    };

    try {
      // Salva o novo comentário no backend

      const response = await requestBackEnd({
        method: "POST",
        url: `/products/${productId}/comments`, // URL para adicionar um novo comentário
        // Dados do novo comentário
        data,
      });
      // Atualiza os comentários no estado local com o novo comentário
      setComments([...comments, response.data]);
    } catch (error) {
      console.error("Erro ao adicionar o comentário:", error);
    }
  };

  function handleBack() {
    navigate("/product"); // Navega para a lista de produtos
  }

  if (!product || Object.keys(product).length === 0) {
    return <div>Carregando...</div>; // Exibe mensagem enquanto o produto é carregado
  }

  return (
    <>
      <Navbar />
      <MDBContainer className="my-5">
        <MDBRow className="justify-content-center">
          <MDBCol xs="12" md="8" lg="6">
            <MDBCard className="mb-5" style={{ borderRadius: "15px" }}>
              <MDBBtn color="secondary" onClick={handleBack} className="mb-3">
                Voltar
              </MDBBtn>

              <MDBRipple
                rippleTag="div"
                className="bg-image rounded hover-overlay"
              >
                <MDBCardImage
                  src={product.imgUrL}
                  alt={product.title}
                  fluid
                  className="w-100 rounded-top"
                  style={{ objectFit: "contain", maxHeight: "400px" }}
                />
              </MDBRipple>

              <MDBCardBody className="d-flex flex-column">
                <div className="d-flex justify-content-between flex-column mb-3">
                  <p
                    className="h5 text-dark mb-0 text-center"
                    style={{ fontWeight: "bold" }}
                  >
                    {product.title}
                  </p>
                  <p className="text-muted text-center">
                    <strong>R$ {product.price.toFixed(2)}</strong>
                  </p>
                </div>

                <div className="mb-3">
                  <p className="text-muted text-center">
                    {product.description}
                  </p>
                </div>
                <hr />
                <div className="d-flex justify-content-between mt-3">
                  <CommentModal addComment={addComment} />
                  <MDBBtn
                    color="primary"
                    onClick={(event) => handleAddToCart(product, event)}
                  >
                    Comprar
                  </MDBBtn>
                </div>
              </MDBCardBody>
            </MDBCard>
            <Comments comments={comments} />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
};

export default ProductInfo;
