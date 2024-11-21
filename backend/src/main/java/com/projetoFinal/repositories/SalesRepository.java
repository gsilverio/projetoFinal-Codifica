package com.projetoFinal.repositories;

import com.projetoFinal.entities.Sales;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SalesRepository extends JpaRepository<Sales, Long> {
    List<Sales> findByUserId(Long userId);
}
