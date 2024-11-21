package com.projetoFinal.controllers;

import com.projetoFinal.DTO.SaleDTO;
import com.projetoFinal.DTO.SaleDTOGet;
import com.projetoFinal.entities.Sales;
import com.projetoFinal.services.SalesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/sales")
public class SalesController {

    @Autowired
    private SalesService salesService;

    // Endpoint para criar uma venda
    @PostMapping("/create")
    public ResponseEntity<String> createSale(
            @RequestParam Long userId,
            @RequestParam Double value,
            @RequestParam String numPedido,
            @RequestParam String status,
            @RequestBody SaleDTO saleRequest) {

        Sales sale = salesService.createSale(userId, value, numPedido, status, saleRequest);
        return ResponseEntity.ok("Venda criada com sucesso!");
    }

    // Endpoint para pegar todas as vendas de um usuário
    @GetMapping("/user/{userId}/getAll")
    public ResponseEntity<List<SaleDTOGet>> getAllSalesByUserId(@PathVariable Long userId) {
        List<SaleDTOGet> sales = salesService.getAllSalesByUserId(userId);
        return ResponseEntity.ok(sales);
    }

    @GetMapping("/getAll")
    public ResponseEntity<List<SaleDTOGet>> getAllSales() {
        List<SaleDTOGet> sales = salesService.getAllSales();
        return ResponseEntity.ok(sales);
    }
}
