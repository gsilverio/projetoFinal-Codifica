package com.projetoFinal.services;

import com.projetoFinal.DTO.SaleDTO;
import com.projetoFinal.DTO.SaleDTOGet;
import com.projetoFinal.entities.Product;
import com.projetoFinal.entities.Sales;
import com.projetoFinal.entities.User;
import com.projetoFinal.repositories.ProductRepository;
import com.projetoFinal.repositories.SalesRepository;
import com.projetoFinal.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class SalesService {

    @Autowired
    private SalesRepository salesRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ProductRepository productRepository;

    public Sales createSale(Long userId, Double value, String numPedido, String status, SaleDTO saleRequest) {
        User user = userRepository.getReferenceById(userId);
        List<Product> products = productRepository.searchAllById(saleRequest.getProducts().stream()
                .map(SaleDTO.ProductDTO::getId)
                .toList());

        Sales sale = new Sales();
        sale.setUser(user);
        sale.setValue(value);
        sale.setNumPedido(numPedido);
        sale.setStatus(status);
        sale.setProducts(products);

        return salesRepository.save(sale);
    }

    public List<SaleDTOGet> getAllSalesByUserId(Long userId) {
        List<Sales> sales = salesRepository.findByUserId(userId);

        // Convertendo as Sales para SaleDTO
        List<SaleDTOGet> saleDTOs = sales.stream().map(sale ->
                new SaleDTOGet(
                        sale.getId(),
                        sale.getValue(),
                        sale.getNumPedido(),
                        sale.getStatus()
                )
        ).collect(Collectors.toList());

        return saleDTOs;
    }

    public List<SaleDTOGet> getAllSales() {
        List<Sales> salesList = salesRepository.findAll();  // Assuming you have a repository for Sales
        // Convert the list of Sales entities to SaleDTOGet
        return salesList.stream()
                .map(sale -> new SaleDTOGet(sale))  // You should implement the conversion from Sales to SaleDTOGet
                .collect(Collectors.toList());
    }
}
