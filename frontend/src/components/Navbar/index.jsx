import { useState } from "react";
import {
  Navbar as BootstrapNavbar,
  Nav,
  NavDropdown,
  Container,
  Form,
  Button,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Cart from "../../pages/Cart";
import "./style.css";
import {
  getAccessToken,
  hasRole,
  hasRoleAdmin,
  isAuthenticated,
  logout,
} from "../../utils/request";

const Navbar = () => {
  const navigate = useNavigate();

  function handleLogout() {
    console.log(getAccessToken());
    logout();
    navigate("/home");
  }

  return (
    <BootstrapNavbar expand="lg" className="bg-dark custom-navbar">
      <Container fluid>
        <BootstrapNavbar.Brand href="#" className="text-light">
          <Link to={"/"}>
            <img
              src="./images/logo.png"
              alt="Logo"
              className="d-inline-block align-top"
              style={{ width: "130px", height: "130px" }}
            />
          </Link>
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
              {isAuthenticated() ? (
                <>
                  <NavDropdown.Item onClick={handleLogout}>
                    Logout
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/profile">Perfil</NavDropdown.Item>
                  {hasRoleAdmin() ? (
                    ""
                  ) : (
                    <NavDropdown.Item href="/admin">Admin</NavDropdown.Item>
                  )}
                </>
              ) : (
                <>
                  <NavDropdown.Item href="/login">Entrar</NavDropdown.Item>
                  <NavDropdown.Item href="/signup">Cadastrar</NavDropdown.Item>
                </>
              )}
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
