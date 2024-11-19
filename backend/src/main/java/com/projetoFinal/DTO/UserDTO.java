package com.projetoFinal.DTO;

import com.projetoFinal.entities.Roles;

import java.util.List;

public record UserDTO (Long id, String username, String firstname, String lastname, String password, List<Roles> roles) {

}
