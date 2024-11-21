import React from "react";
import { useForm } from "react-hook-form";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import "./styles.css"; // Importando o CSS
import Navbar from "../../components/Navbar";
import { requestBackEnd } from "../../utils/request";
import { useNavigate } from "react-router-dom";
// Importando a função requestBackEnd

const UserRegistration = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Estruturando o payload conforme o exemplo fornecido
    const payload = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password,
      address: {
        rua: data.address.rua,
        cidade: data.address.cidade,
        estado: data.address.estado,
        numero: data.address.numero,
        complemento: data.address.complemento,
      },
    };

    // Enviando a requisição POST para o backend
    requestBackEnd({
      method: "POST",
      url: "/user", // Aqui você deve fornecer a URL para a requisição
      data: payload,
    })
      .then((response) => {
        // Lógica após sucesso na requisição
        console.log("Cadastro realizado com sucesso:", response);
        navigate("/login");
      })
      .catch((error) => {
        // Lógica em caso de erro
        console.error("Erro ao realizar cadastro:", error);
      });
  };

  return (
    <>
      <Navbar />
      <Container className="container-custom">
        <Row className="justify-content-center">
          <Col md={6} lg={4}>
            <div className="card-container">
              <div className="card-header">
                <h3>Cadastro de Usuário</h3>
              </div>
              <Form onSubmit={handleSubmit(onSubmit)}>
                {/* Campo Primeiro Nome */}
                <Form.Group className="mb-3">
                  <Form.Label className="form-group-label">
                    Primeiro Nome
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Digite seu primeiro nome"
                    {...register("firstName", {
                      required: "Primeiro nome é obrigatório",
                    })}
                    isInvalid={!!errors.firstName}
                    className="form-group-input"
                  />
                  <Form.Control.Feedback
                    type="invalid"
                    className="form-control-feedback"
                  >
                    {errors.firstName?.message}
                  </Form.Control.Feedback>
                </Form.Group>

                {/* Campo Sobrenome */}
                <Form.Group className="mb-3">
                  <Form.Label className="form-group-label">
                    Sobrenome
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Digite seu sobrenome"
                    {...register("lastName", {
                      required: "Sobrenome é obrigatório",
                    })}
                    isInvalid={!!errors.lastName}
                    className="form-group-input"
                  />
                  <Form.Control.Feedback
                    type="invalid"
                    className="form-control-feedback"
                  >
                    {errors.lastName?.message}
                  </Form.Control.Feedback>
                </Form.Group>

                {/* Campo Email */}
                <Form.Group className="mb-3">
                  <Form.Label className="form-group-label">Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Digite seu e-mail"
                    {...register("email", {
                      required: "E-mail é obrigatório",
                      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    })}
                    isInvalid={!!errors.email}
                    className="form-group-input"
                  />
                  <Form.Control.Feedback
                    type="invalid"
                    className="form-control-feedback"
                  >
                    {errors.email?.message ||
                      "Por favor, insira um e-mail válido"}
                  </Form.Control.Feedback>
                </Form.Group>

                {/* Campo Senha */}
                <Form.Group className="mb-3">
                  <Form.Label className="form-group-label">Senha</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Digite sua senha"
                    {...register("password", {
                      required: "Senha é obrigatória",
                      minLength: {
                        value: 6,
                        message: "A senha deve ter pelo menos 6 caracteres",
                      },
                    })}
                    isInvalid={!!errors.password}
                    className="form-group-input"
                  />
                  <Form.Control.Feedback
                    type="invalid"
                    className="form-control-feedback"
                  >
                    {errors.password?.message}
                  </Form.Control.Feedback>
                </Form.Group>

                {/* Seção Endereço */}
                <div className="form-section">
                  <h5>Endereço</h5>

                  {/* Campo Rua */}
                  <Form.Group className="mb-3">
                    <Form.Label className="form-group-label">Rua</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Digite a rua"
                      {...register("address.rua", {
                        required: "Rua é obrigatória",
                      })}
                      isInvalid={!!errors.address?.rua}
                      className="form-group-input"
                    />
                    <Form.Control.Feedback
                      type="invalid"
                      className="form-control-feedback"
                    >
                      {errors.address?.rua?.message}
                    </Form.Control.Feedback>
                  </Form.Group>

                  {/* Campo Cidade */}
                  <Form.Group className="mb-3">
                    <Form.Label className="form-group-label">Cidade</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Digite a cidade"
                      {...register("address.cidade", {
                        required: "Cidade é obrigatória",
                      })}
                      isInvalid={!!errors.address?.cidade}
                      className="form-group-input"
                    />
                    <Form.Control.Feedback
                      type="invalid"
                      className="form-control-feedback"
                    >
                      {errors.address?.cidade?.message}
                    </Form.Control.Feedback>
                  </Form.Group>

                  {/* Campo Estado */}
                  <Form.Group className="mb-3">
                    <Form.Label className="form-group-label">Estado</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Digite o estado"
                      {...register("address.estado", {
                        required: "Estado é obrigatório",
                      })}
                      isInvalid={!!errors.address?.estado}
                      className="form-group-input"
                    />
                    <Form.Control.Feedback
                      type="invalid"
                      className="form-control-feedback"
                    >
                      {errors.address?.estado?.message}
                    </Form.Control.Feedback>
                  </Form.Group>

                  {/* Campo Número */}
                  <Form.Group className="mb-3">
                    <Form.Label className="form-group-label">Número</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Digite o número"
                      {...register("address.numero", {
                        required: "Número é obrigatório",
                      })}
                      isInvalid={!!errors.address?.numero}
                      className="form-group-input"
                    />
                    <Form.Control.Feedback
                      type="invalid"
                      className="form-control-feedback"
                    >
                      {errors.address?.numero?.message}
                    </Form.Control.Feedback>
                  </Form.Group>

                  {/* Campo Complemento */}
                  <Form.Group className="mb-3">
                    <Form.Label className="form-group-label">
                      Complemento
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Digite o complemento (opcional)"
                      {...register("address.complemento")}
                      className="form-group-input"
                    />
                  </Form.Group>
                </div>

                {/* Botão de Submissão */}
                <Button
                  variant="primary"
                  type="submit"
                  className="button-submit"
                >
                  Cadastrar
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default UserRegistration;
