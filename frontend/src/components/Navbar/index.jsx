import { useState } from 'react';
import { Navbar as BootstrapNavbar, Nav, NavDropdown, Container, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Cart from '../../pages/Cart';
import './style.css';

const Navbar = () => {
  const navigate = useNavigate();

  const handleCartClick = () => {
    navigate('/cart');
  };

  return (
    <BootstrapNavbar expand="lg" className="bg-dark custom-navbar">
      <Container fluid>
        <BootstrapNavbar.Brand href="#" className="text-light">
          <img 
            src="./images/logo.png"
            alt="Logo" 
            className="d-inline-block align-top" 
            style={{ width: '100px', height: '100px' }}
          />
        </BootstrapNavbar.Brand>
        {/* <BootstrapNavbar.Brand href="#" className="text-light">Projeto Final</BootstrapNavbar.Brand> */}
        <BootstrapNavbar.Toggle className='bg-light' aria-controls="navbarScroll" />
        <BootstrapNavbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {/* <Nav.Link href="#action1" className="text-light">Home</Nav.Link> */}
            <Nav.Link href="#action2" className="text-light">
              <img 
                src="/icons/chat-dots.svg" 
                alt="SAC Icon" 
                className="icon me-2" 
                title="SAC"
              />
            </Nav.Link>
            {/* <Nav.Link href="/cart" className="text-light"> */}
            <Nav.Link onClick={handleCartClick} className="text-light">
              <img 
                src="/icons/cart2.svg" 
                alt="Cart Icon" 
                className="icon me-2" 
                title="Carrinho"
              />
            </Nav.Link>
            <NavDropdown title={
              <>
                <img 
                  src="/icons/person-circle.svg"
                  alt="Account Icon" 
                  className="icon me-2"
                  title="Conta" 
                />
              </>
            }
            id="navbarScrollingDropdown">
            {/* <NavDropdown title="Conta" id="navbarScrollingDropdown"> */}
              <NavDropdown.Item href="#action3">Entrar</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Cadastrar
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Configurações
              </NavDropdown.Item>
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
}

export default Navbar;
