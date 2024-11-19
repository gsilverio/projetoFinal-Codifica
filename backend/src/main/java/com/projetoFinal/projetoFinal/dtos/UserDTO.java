package com.projetoFinal.projetoFinal.dtos;

import com.projetoFinal.projetoFinal.entities.Roles;

import java.util.List;

public record UserDTO (Long id, String username, String firstname, String lastname, String password, List<Roles> roles) {

}
