package com.projetoFinal.projetoFinal.dtos;

import com.projetoFinal.projetoFinal.entities.Roles;

import java.util.List;

public record UserUpdateDTO(Long id, String firstname, String lastname, String password) {
}
