import React from "react";
import { useForm } from "react-hook-form";
import "./styles.css";
import Footer from "../../components/Footer";
import { loginRequest } from "../../utils/request";
import { saveTokenLocalStorage } from "../../utils/localStorage";
import { useNavigate } from "react-router-dom";
import NavbarLogin from "../../components/Navbar-Login";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    loginRequest(data)
      .then((response) => {
        saveTokenLocalStorage(response.data);
        navigate("/admin");
      })
      .catch((error) => {
        console.log("Erro no login ", error);
      });
  };

  return (
    <div className="login-page">
      <NavbarLogin />
      <div className="container d-flex justify-content-center align-items-center mg-10">
        <div className="login-box shadow p-4 rounded">
          <div className="logo-container text-center mb-4">
            <img
              src="./images/logo.png"
              alt="Logo"
              className="logo img-fluid"
            />
          </div>
          <h3 className="text-center mb-4">Acesse sua conta</h3>
          <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="E-mail"
                {...register("username", {
                  required: "O e-mail é obrigatório",
                })}
              />
              {errors.username && (
                <span className="text-danger">{errors.username.message}</span>
              )}
            </div>

            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Senha"
                {...register("password", { required: "A senha é obrigatória" })}
              />
              {errors.password && (
                <span className="text-danger">{errors.password.message}</span>
              )}
            </div>

            <div className="d-flex justify-content-between align-items-center">
              <button type="submit" className="btn btn-warning w-100">
                Entrar
              </button>
            </div>
            <div className="mt-3 text-center">
              <a href="/esqueci-senha" className="text-decoration-none">
                Esqueci minha senha
              </a>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
