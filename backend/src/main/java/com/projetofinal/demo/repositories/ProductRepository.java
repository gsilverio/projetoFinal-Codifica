package com.projetoFinal.demo.repositories;

import com.projetoFinal.demo.entities.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {

}
