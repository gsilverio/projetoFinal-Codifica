import { useState } from "react";
import {
  Navbar as BootstrapNavbar,
  Nav,
  NavDropdown,
  Container,
  Form,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Cart from "../../pages/Cart";
import "./style.css";

const Navbar = () => {

  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/");
  };

  const handleCartClick = () => {
    navigate("/cart");
  };

  const handleSacClick = () => {
    navigate("/sac");
  };


  return (
    <BootstrapNavbar expand="lg" className="bg-dark custom-navbar">
      <Container fluid>
        <BootstrapNavbar.Brand href="#" className="text-light">
          <img
            src="./images/logo.png"
            alt="Logo"
            className="d-inline-block align-top"
            style={{ width: "130px", height: "130px" }}
          />
        </BootstrapNavbar.Brand>
        {/* <BootstrapNavbar.Brand href="#" className="text-light">Projeto Final</BootstrapNavbar.Brand> */}
        <BootstrapNavbar.Toggle
          className="bg-light"
          aria-controls="navbarScroll"
        />
        <BootstrapNavbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >

            {/* <Nav.Link href="#action1" className="text-light">Home</Nav.Link> */}
            <Nav.Link>
              <Link to={"/sac"} className="text-light">
                <img 
                  src="/icons/chat-dots.svg" 
                  alt="SAC Icon" 
                  className="icon me-2" 
                  title="SAC"
                />
              </Link>

            </Nav.Link>
            <Nav.Link>
              <Link to={"/cart"} className="text-light">
                <img
                  src="/icons/cart2.svg"
                  alt="Cart Icon"
                  className="icon me-2"
                  title="Carrinho"
                />
              </Link>
            </Nav.Link>
            <NavDropdown
              title={
                <>
                  <img
                    src="/icons/person-circle.svg"
                    alt="Account Icon"
                    className="icon me-2"
                    title="Conta"
                  />
                </>
              }
              id="navbarScrollingDropdown"
            >
              {/* <NavDropdown title="Conta" id="navbarScrollingDropdown"> */}
              <NavDropdown.Item href="/login">Entrar</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Cadastrar</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/admin">Configurações</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-primary">
              <img
                src="/icons/search.svg"
                alt="Search Icon"
                className="icon"
                title="Pesquisar"
              />
            </Button>
          </Form>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;
