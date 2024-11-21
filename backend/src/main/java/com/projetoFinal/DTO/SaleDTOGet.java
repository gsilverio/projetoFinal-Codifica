package com.projetoFinal.DTO;

import com.projetoFinal.entities.Sales;

public class SaleDTOGet {
    private Long id;
    private Double value;
    private String numPedido;
    private String status;
    // Adicione outros campos que você deseja incluir

    // Construtores, getters e setters
    public SaleDTOGet(Long id, Double value, String numPedido, String status) {
        this.id = id;
        this.value = value;
        this.numPedido = numPedido;
        this.status = status;
    }
    public SaleDTOGet(Sales sale) {
        this.id = sale.getId();
        this.value = sale.getValue();
        this.numPedido = sale.getNumPedido();
        this.status = sale.getStatus();
    }

    public SaleDTOGet( ) {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Double getValue() {
        return value;
    }

    public void setValue(Double value) {
        this.value = value;
    }

    public String getNumPedido() {
        return numPedido;
    }

    public void setNumPedido(String numPedido) {
        this.numPedido = numPedido;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
