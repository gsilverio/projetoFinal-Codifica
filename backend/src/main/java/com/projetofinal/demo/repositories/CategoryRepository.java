package com.projetofinal.demo.repositories;

import com.projetofinal.demo.entities.Category;
import com.projetofinal.demo.entities.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category, Long> {
}
