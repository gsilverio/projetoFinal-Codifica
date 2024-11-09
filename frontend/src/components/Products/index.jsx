import { useContext } from 'react'; 
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { CartContext } from '../../contexts/CartContext';
import PropTypes from 'prop-types';

const Products = ({ onProductClick }) => {
  const { addToCart } = useContext(CartContext);

  const cardData = [
    {
      id: 1,
      imgSrc: "./images/imgProduct01.jpg",
      title: "Product 1",
      price: 10.00,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, nemo molestias. Ullam neque atque harum iusto ipsum alias distinctio adipisci.",
    },
    {
      id: 2,
      imgSrc: "./images/imgProduct02.jpg",
      title: "Product 2",
      price: 15.00,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, nemo molestias. Ullam neque atque harum iusto ipsum alias distinctio adipisci.",
    },
    {
      id: 3,
      imgSrc: "./images/imgProduct03.jpg",
      title: "Product 3",
      price: 20.00,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nullnemo molestias. Ullam neque atque harum iusto ipsum alias distinctio adipisci.",
    },
    {
      id: 4,
      imgSrc: "./images/imgProduct04.jpg",
      title: "Product 4",
      price: 25.00,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nullnemo molestias. Ullam neque atque harum iusto ipsum alias distinctio adipisci.",
    },
    {
      id: 5,
      imgSrc: "./images/imgProduct05.jpg",
      title: "Product 5",
      price: 30.00,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nullnemo molestias. Ullam neque atque harum iusto ipsum alias distinctio adipisci.",
    },
    {
      id: 6,
      imgSrc: "./images/imgProduct06.jpg",
      title: "Product 6",
      price: 35.00,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nullnemo molestias. Ullam neque atque harum iusto ipsum alias distinctio adipisci.",
    },
    {
      id: 7,
      imgSrc: "./images/imgProduct07.jpg",
      title: "Product 7",
      price: 40.00,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nullnemo molestias. Ullam neque atque harum iusto ipsum alias distinctio adipisci.",
    },
    {
      id: 8,
      imgSrc: "./images/imgProduct08.jpg",
      title: "Product 8",
      price: 45.00,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nullnemo molestias. Ullam neque atque harum iusto ipsum alias distinctio adipisci.",
    },
  ];

  const handleAddToCart = (product, event) => {
    event.stopPropagation();
    addToCart(product);
    alert(`${product.title} foi adicionado ao carrinho!`);
  };

  return (
    <Container className='bg-dark'>
      <Row xs={2} md={4} className="g-4">
        {cardData.map((card) => (
          <Col key={card.id}>
            <Card onClick={() => onProductClick(card)}>
              {/* <Link to={`/produto/${card.id}`}>
              </Link> */}
              <Card.Img variant="top" src={card.imgSrc} />
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                {/* <Card.Text>{card.description}</Card.Text> */}
                <Card.Text>
                  <strong>
                    R$ {card.price}
                  </strong>
                </Card.Text>
                <Button onClick={(event) => handleAddToCart(card, event)} variant="primary">
                  Adicionar ao Carrinho
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

Products.propTypes = {
  onProductClick: PropTypes.func.isRequired,
};

export default Products;
