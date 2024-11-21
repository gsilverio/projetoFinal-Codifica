package com.projetoFinal.services;

import com.projetoFinal.DTO.RoleDTO;
import com.projetoFinal.DTO.UserDTO;
import com.projetoFinal.DTO.UserUpdateDTO;
import com.projetoFinal.entities.Address;
import com.projetoFinal.entities.Role;
import com.projetoFinal.entities.User;
import com.projetoFinal.projections.UserDetailsProjection;
import com.projetoFinal.repositories.AddressRepository;
import com.projetoFinal.repositories.RolesRepository;
import com.projetoFinal.repositories.UserRepository;
import com.projetoFinal.services.exceptions.ResourceNotFoundException;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Service
public class UserService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RolesRepository rolesRepository;

    @Autowired
    private AddressRepository addressRepository;

    @Autowired
    @Lazy
    private PasswordEncoder passwordEncoder;



    public UserDTO saveUser(UserDTO userDTO) {
        // Criar a entidade User a partir do DTO
        User user = new User();
        user.setFirstName(userDTO.getFirstName());
        user.setLastName(userDTO.getLastName());
        user.setEmail(userDTO.getEmail());


        user.setPassword(passwordEncoder.encode(userDTO.getPassword()));

        // Criar o role "ROLE_OPERATOR"
        Role operatorRole = rolesRepository.findByAuthority("ROLE_OPERATOR");
        if (operatorRole == null) {
            operatorRole = new Role();
            operatorRole.setAuthority("ROLE_OPERATOR");
            rolesRepository.save(operatorRole); // Salva o novo role
        }

        // Associar o role ao usuário
        user.setRoles(new HashSet<>());
        user.addRole(operatorRole); // Adiciona o role "ROLE_OPERATOR"

        // Associar o endereço
        Address address = userDTO.getAddress();
        if (address != null) {
            addressRepository.save(address); // Salva o endereço se necessário
            user.setAddress(address);
        }

        // Salva o usuário no banco de dados
        User savedUser = userRepository.save(user);

        // Retorna o UserDTO com os dados do usuário salvo
        return new UserDTO(savedUser);
    }

    public UserDTO findById(long id) {

        Optional<User> user = userRepository.findById(id);

        return user.map(this::convertDTO).orElseThrow(() -> new RuntimeException("nao existe regristo"));

    }

    public List<UserDTO> getAll() {

        return userRepository.findAll().stream().map(this::convertDTO).collect(Collectors.toList());
    }

    public UserDTO updateUser(long id, UserUpdateDTO userDTO) {

        try {
            User entity = userRepository.getReferenceById(id);
            copyDtoToEntity(userDTO, entity);
            entity = userRepository.save(entity);
            return new UserDTO(entity);
        }catch (EntityNotFoundException e){
            throw new ResourceNotFoundException("Id not found "+ id);
        }
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

    public UserDTO getMe(){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        Jwt jwtPrincipal = (Jwt) authentication.getPrincipal();
        String userEmail = jwtPrincipal.getClaim("username");

        User user  = userRepository.findByEmail(userEmail);
        Set<RoleDTO> roleDTOs = user.getRoles().stream()
                .map(this::convertToRoleDTO)
                .collect(Collectors.toSet());

        if(user != null){
            return new UserDTO(user.getId(), user.getFirstName(), user.getLastName(), user.getEmail(), roleDTOs, user.getAddress());
        }
        throw new UsernameNotFoundException("User nao logado");
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
    private void copyDtoToEntity(UserDTO dto, User entity) {

        entity.setFirstName(dto.getFirstName());
        entity.setLastName(dto.getLastName());
        entity.setEmail(dto.getEmail());

        Address address = entity.getAddress();
        address.setRua(dto.getAddress().getRua());
        address.setCidade(dto.getAddress().getCidade());
        address.setEstado(dto.getAddress().getEstado());
        address.setNumero(dto.getAddress().getNumero());
        address.setComplemento(dto.getAddress().getComplemento());

        entity.getRoles().clear();
        for (RoleDTO roleDto : dto.getRoles()) {
            Role role = rolesRepository.getReferenceById(roleDto.getId());
            entity.getRoles().add(role);
        }
    }

    private RoleDTO convertToRoleDTO(Role role) {
        return new RoleDTO(role.getId(), role.getAuthority()); // Ajuste conforme a estrutura do seu RoleDTO
    }
}
