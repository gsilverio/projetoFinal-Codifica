package com.projetoFinal.controllers;

import com.projetoFinal.DTO.UserDTO;
import com.projetoFinal.DTO.UserUpdateDTO;
import com.projetoFinal.entities.User;
import com.projetoFinal.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping
    public ResponseEntity<UserDTO> createUser(@RequestBody UserDTO userDTO) {
        try {
            // Chamando o serviço para salvar o usuário
            UserDTO savedUserDTO = userService.saveUser(userDTO);
            return new ResponseEntity<>(savedUserDTO, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @PreAuthorize("hasAnyRole('ROLE_ADMIN')")
    @GetMapping
    public List<UserDTO> getAll() {

        return userService.getAll();
    }
    @PreAuthorize("hasAnyRole('ROLE_ADMIN')")
    @GetMapping("/{id}")
    public ResponseEntity<UserDTO> getById(@PathVariable long id) {

        UserDTO userDTO = userService.findById(id);

        return userDTO != null ? ResponseEntity.ok(userDTO) : ResponseEntity.notFound().build();
    }
    @PreAuthorize("hasAnyRole('ROLE_ADMIN')")
    @PutMapping("/{id}")
    public ResponseEntity<UserDTO> updateUser(@PathVariable long id, @RequestBody UserUpdateDTO userDTO) {

        UserDTO userUpd = userService.updateUser(id,userDTO);

        return userUpd != null ? ResponseEntity.ok(userUpd) : ResponseEntity.notFound().build();
    }

    @PreAuthorize("hasAnyRole('ROLE_ADMIN')")
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable long id) {

        userService.deleteUser(id);

        return ResponseEntity.noContent().build();
    }
    @PreAuthorize("hasAnyRole('ROLE_ADMIN','ROLE_OPERATOR')")
    @GetMapping(value = "/me")
    public ResponseEntity<UserDTO> getMe(){

        return ResponseEntity.ok().body(userService.getMe());
    }

}
