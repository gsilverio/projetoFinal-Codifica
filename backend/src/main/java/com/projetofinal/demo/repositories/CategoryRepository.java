package com.projetoFinal.demo.repositories;

import com.projetoFinal.demo.entities.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category, Long> {
}
