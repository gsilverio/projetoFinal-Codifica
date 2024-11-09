package com.projetofinal.demo.repositories;

import com.projetofinal.demo.entities.Category;
import com.projetofinal.demo.entities.Comments;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommetsRepository extends JpaRepository<Comments, Long> {
}
