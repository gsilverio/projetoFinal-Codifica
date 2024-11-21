import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import "./styles.css";
import { requestBackEnd } from "../../utils/request";
import Navbar from "../../components/Navbar";

const UserProfile = () => {
  const { register, handleSubmit, setValue } = useForm();
  const [userData, setUserData] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [purchases, setPurchases] = useState([]); // Novo estado para compras

  useEffect(() => {
    // Fetch user data
    requestBackEnd({
      method: "GET",
      url: "/user/me",
      withCredentials: true,
    })
      .then((response) => {
        const user = response.data;
        setValue("firstName", user.firstName);
        setValue("lastName", user.lastName);
        setValue("email", user.email);
        setValue("address", user.address);
        setUserData(user);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
    console.log(userData.id);

    // Fetch purchases data
    if (userData.id) {
      requestBackEnd({
        method: "GET",
        url: `/sales/user/${userData.id}/getAll`, // Endpoint atualizado para buscar as compras
        withCredentials: true,
      })
        .then((response) => {
          setPurchases(response.data); // Supondo que a resposta tenha o formato de um array de compras
        })
        .catch((error) => {
          console.error("Error fetching purchases data:", error);
        });
    }
  }, [isEditing, userData.id, setValue]); // Dependência no id do usuário

  const onSubmit = (data) => {
    const dataProfile = {
      ...data,
    };
    // Envia os dados para o backend usando PUT
    requestBackEnd({
      method: "PUT",
      url: `/user/${userData.id}`,
      withCredentials: true,
      data: dataProfile,
    })
      .then((response) => {
        console.log("Data updated successfully:", response.data);
        setUserData(response.data); // Atualiza os dados locais
        setIsEditing(false); // Sai do modo de edição
      })
      .catch((error) => {
        console.error("Error updating user data:", error);
      });
  };

  if (!userData) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Navbar />
      <div className="profile-container">
        <div className="profile-card">
          <div className="profile-header">
            <h2>{userData.firstName}</h2>
            <p className="profile-email">{userData.email}</p>
            <button
              className="btn-edit"
              onClick={() => setIsEditing(!isEditing)}
            >
              {isEditing ? "Cancel" : "Edit Profile"}
            </button>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={`profile-form ${isEditing ? "editable" : ""}`}
          >
            <div className="form-section">
              <h3>Informações Pessoal</h3>
              <div className="form-group">
                <label>Nome</label>
                <input
                  type="text"
                  {...register("firstName")}
                  className="form-control"
                  disabled={!isEditing}
                />
              </div>
              <div className="form-group">
                <label>Sobrenome</label>
                <input
                  type="text"
                  {...register("lastName")}
                  className="form-control"
                  disabled={!isEditing}
                />
              </div>
            </div>
            <div className="form-section">
              <h3>Endereço</h3>
              <div className="form-group">
                <label>Rua</label>
                <input
                  type="text"
                  {...register("address.rua")}
                  className="form-control"
                  disabled={!isEditing}
                />
              </div>
              <div className="form-group">
                <label>Cidade</label>
                <input
                  type="text"
                  {...register("address.cidade")}
                  className="form-control"
                  disabled={!isEditing}
                />
              </div>
              <div className="form-group">
                <label>Estado</label>
                <input
                  type="text"
                  {...register("address.estado")}
                  className="form-control"
                  disabled={!isEditing}
                />
              </div>
              <div className="form-group">
                <label>Numero</label>
                <input
                  type="text"
                  {...register("address.numero")}
                  className="form-control"
                  disabled={!isEditing}
                />
              </div>
              <div className="form-group">
                <label>Complemento</label>
                <input
                  type="text"
                  {...register("address.complemento")}
                  className="form-control"
                  disabled={!isEditing}
                />
              </div>
            </div>
            {isEditing && (
              <button type="submit" className="btn-save">
                Salvar
              </button>
            )}
          </form>
        </div>

        {/* Card de Compras */}
        <div className="purchases-card">
          <h3>Compras Recentes</h3>
          {purchases.length === 0 ? (
            <p>Você ainda não fez nenhuma compra.</p>
          ) : (
            <div className="purchases-list">
              {purchases.map((purchase, index) => (
                <div key={index} className="purchase-item">
                  <h5>Pedido nº {purchase.numPedido}</h5>
                  <p>Status: {purchase.status}</p>
                  <p>Valor: R${purchase.value.toFixed(2)}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default UserProfile;
