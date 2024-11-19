package com.projetoFinal.projetoFinal.repositories;

import com.projetoFinal.projetoFinal.entities.Roles;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RolesRepository extends JpaRepository<Roles, Long> {
}
