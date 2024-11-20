package com.projetoFinal.repositories;

import com.projetoFinal.entities.User;
import com.projetoFinal.projections.UserDetailsProjection;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    User findByEmail(String email);


    @Query(nativeQuery = true, value = """
            SELECT tb_user.email AS username, tb_user.password, tb_role.id AS roleId, tb_role.authority
             FROM TB_USER
             INNER JOIN user_roles ON tb_user.id = user_roles.id_user
             INNER JOIN tb_role ON tb_role.id = user_roles.id_roles
             WHERE tb_user.email = :email;
            """)
    List<UserDetailsProjection> searchUserAndRolesByEmail(String email);

}
