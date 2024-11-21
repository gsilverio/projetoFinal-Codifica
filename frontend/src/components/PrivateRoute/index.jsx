import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { isAuthenticated, hasAnyRoles } from "../../utils/request";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ roles = [] }) => {
  // Verifica se o usuário está autenticado
  if (!isAuthenticated()) {
    // Redireciona para a página de login se não autenticado
    return <Navigate to="/login" />;
  }

  // Verifica se o usuário tem um dos papéis necessários
  if (!hasAnyRoles(roles)) {
    // Redireciona para uma página acessível (ex: /home) caso o usuário não tenha permissão
    return <Navigate to="/home" />;
  }

  // Renderiza o conteúdo protegido
  return <Outlet />;
};

export default PrivateRoute;
