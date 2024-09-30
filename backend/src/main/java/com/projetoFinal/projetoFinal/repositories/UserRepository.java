package com.projetoFinal.projetoFinal.repositories;

import com.projetoFinal.projetoFinal.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
