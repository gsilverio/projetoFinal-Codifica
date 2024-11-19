package com.projetoFinal.demo.repositories;

import com.projetoFinal.demo.entities.Comments;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommetsRepository extends JpaRepository<Comments, Long> {
}
