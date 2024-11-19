package com.projetoFinal.services;

import com.projetoFinal.DTO.UserDTO;
import com.projetoFinal.DTO.UserUpdateDTO;
import com.projetoFinal.entities.Role;
import com.projetoFinal.entities.User;
import com.projetoFinal.projections.UserDetailsProjection;
import com.projetoFinal.repositories.RolesRepository;
import com.projetoFinal.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Service
public class UserService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RolesRepository rolesRepository;

    public UserDTO createUser(UserDTO userDTO) {

        User user = new User();

        user.setFirstName(userDTO.getFirstName());
        user.setLastName(userDTO.getLastName());
        user.setEmail(userDTO.getEmail());
        user.setPassword(userDTO.getPassword());

        Set<Role> roles  = new HashSet<>();

        // id 2 no meu teste botei como USER
        // o usuario novo sempre vai ter role de user
        // adm tem q ser criando na mao
        Role role = rolesRepository.findById(2L).orElse(null);

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

        Set<Role> roles = user.getRoles();

        roles.removeAll(roles);

        roles.clear();

        user.setRoles(roles);

        userRepository.save(user);

        userRepository.deleteById(id);
    }

    private UserDTO convertDTO(User user) {

        UserDTO userDTO = new UserDTO(user.getId(), user.getEmail(), user.getFirstName(),user.getLastName(), user.getPassword());

        return userDTO;
    }

    private UserUpdateDTO convertUpdateDTO(User user) {

        UserUpdateDTO userDTO = new UserUpdateDTO(user.getId(),user.getFirstName(),user.getLastName(), user.getPassword());

        return userDTO;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        List<UserDetailsProjection> result = userRepository.searchUserAndRolesByEmail(username);
        if(result.isEmpty()){
            throw new UsernameNotFoundException("User not found.");
        } else {
            User user = new User();
            user.setEmail(username);
            user.setPassword(result.get(0).getPassword());

            for(UserDetailsProjection projection: result){
                user.addRole(new Role(projection.getRoleId(), projection.getAuthority()));
            }

            return user;
        }
    }
}
