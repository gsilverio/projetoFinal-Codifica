import React, { useState, useEffect } from "react";

import "./styles.css";
import { requestBackEnd } from "../../../utils/request";

function Sales() {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    const fetchSales = async () => {
      try {
        const response = await requestBackEnd({
          method: "GET",
          url: "/sales/getAll", // URL da sua API
        });
        setSales(response.data); // Armazenando os dados no estado
      } catch (error) {
        console.error("Erro ao buscar as vendas:", error);
      }
    };

    fetchSales();
  }, []); // A requisição será feita uma vez, logo após o componente ser montado

  return (
    <div className="container">
      <h2>Vendas</h2>
      <div className="row">
        {sales.map((sale) => (
          <div key={sale.id} className="col-md-4 mb-4">
            <div className="card sale-card">
              <div className="card-body">
                <h5 className="card-title">Pedido: {sale.numPedido}</h5>
                <p className="card-text">Valor: R${sale.value}</p>
                <p className="card-text">Status: {sale.status}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sales;
