import React, { useState } from "react";
import "./styles.css";

import Footer from "../../components/Footer";
import { func } from "prop-types";
import { loginRequest } from "../../utils/request";
import {
  getTokenLocalStorage,
  saveTokenLocalStorage,
} from "../../utils/localStorage";
import { useNavigate } from "react-router-dom";
import NavbarLogin from "../../components/Navbar-Login";

function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  function handleSubmitForm(e) {
    e.preventDefault();
    loginRequest(formData)
      .then((response) => {
        saveTokenLocalStorage(response.data);
        navigate("/admin");
      })
      .catch((error) => {
        console.log("Erro no login ", error);
      });
  }
  function handleInputChange(e) {
    const value = e.target.value;
    const name = e.target.name;
    setFormData({ ...formData, [name]: value });
  }
  return (
    <div>
      <NavbarLogin />
      <div className="login-container">
        <div className="image-login-container">
          <img
            src="./images/logo.png"
            alt="Logo"
            className="d-inline-block align-top"
            style={{ width: "300px", height: "300px" }}
          />
        </div>
        <div className="login-form-container">
          <h3>Acesse sua conta</h3>
          <form className="login-form" onSubmit={handleSubmitForm}>
            <div>
              <input
                type="text"
                placeholder="email"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-error"></div>
            <div>
              <input
                type="password"
                placeholder="Senha"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <button type="submit">Entrar</button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Login;
