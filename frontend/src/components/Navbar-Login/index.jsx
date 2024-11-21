import React from "react";
import {
  Navbar as BootstrapNavbar,
  Nav,
  NavDropdown,
  Container,
  Form,
  Button,
  NavLink,
} from "react-bootstrap";
import "./styles.css";
import { Link } from "react-router-dom";
import Footer from "../Footer";

function NavbarLogin() {
  return (
    <>
      <div className="navbar navbar-login bg-dark custom-navbar">
        <div>
          <BootstrapNavbar.Brand href="#" className="text-light">
            <Link to={"/home"}>
              <img
                src="./images/logo.png"
                alt="Logo"
                className="d-inline-block align-top"
                style={{ width: "130px", height: "130px" }}
              />
            </Link>
          </BootstrapNavbar.Brand>
        </div>
        <div className="mini-menu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="#fff"
            className="bi bi-person-circle"
            viewBox="0 0 16 16"
          >
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
            <path
              fillRule="evenodd"
              d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
            />
          </svg>
          <p>
            <span>
              <b>
                <Link to={"/login"}>ENTRAR </Link>
              </b>
            </span>
            ou <br />
            <span>
              <b>
                <Link to={"/signup"}>CADASTRAR</Link>
              </b>
            </span>
          </p>
        </div>
      </div>
    </>
  );
}

export default NavbarLogin;
