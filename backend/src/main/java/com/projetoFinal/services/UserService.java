package com.projetoFinal.services;

import com.projetoFinal.DTO.UserDTO;
import com.projetoFinal.DTO.UserUpdateDTO;
import com.projetoFinal.entities.Roles;
import com.projetoFinal.entities.User;
import com.projetoFinal.repositories.RolesRepository;
import com.projetoFinal.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RolesRepository rolesRepository;

    public UserDTO createUser(UserDTO userDTO) {

        User user = new User();

        user.setFirstName(userDTO.firstname());
        user.setLastName(userDTO.lastname());
        user.setUsername(userDTO.username());
        user.setPassword(userDTO.password());

        List<Roles> roles  = new ArrayList<>();

        // id 2 no meu teste botei como USER
        // o usuario novo sempre vai ter role de user
        // adm tem q ser criando na mao
        Roles role = rolesRepository.findById(2L).orElse(null);

        roles.add(role);

        user.setRoles(roles);

        return convertDTO(userRepository.save(user));

    }

    public UserDTO findById(long id) {

        Optional<User> user = userRepository.findById(id);

        return user.map(this::convertDTO).orElseThrow(() -> new RuntimeException("nao existe regristo"));

    }

    public List<UserDTO> getAll() {

        return userRepository.findAll().stream().map(this::convertDTO).collect(Collectors.toList());
    }

    public UserUpdateDTO updateUser(long id, UserUpdateDTO userDTO) {

        Optional<User> userOptional = userRepository.findById(id);

        if (userOptional.isPresent()) {

            User user = userOptional.get();

            user.setPassword(userDTO.password());
            user.setFirstName(userDTO.firstname());
            user.setLastName(userDTO.lastname());

            return convertUpdateDTO(userRepository.save(user));
        }

        return null;
    }

    public void deleteUser(long id) {

        User user = userRepository.findById(id).orElse(null);

        List<Roles> roles = user.getRoles();

        roles.removeAll(roles);

        roles.clear();

        user.setRoles(roles);

        userRepository.save(user);

        userRepository.deleteById(id);
    }

    private UserDTO convertDTO(User user) {

        UserDTO userDTO = new UserDTO(user.getId(), user.getUsername(), user.getFirstName(),user.getLastName(), user.getPassword(), user.getRoles());

        return userDTO;
    }

    private UserUpdateDTO convertUpdateDTO(User user) {

        UserUpdateDTO userDTO = new UserUpdateDTO(user.getId(),user.getFirstName(),user.getLastName(), user.getPassword());

        return userDTO;
    }

}
