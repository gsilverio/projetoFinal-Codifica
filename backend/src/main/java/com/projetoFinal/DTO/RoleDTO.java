package com.projetoFinal.DTO;


import com.projetoFinal.entities.Role;

public class RoleDTO {


    private Long id;

    private String authority;

    public RoleDTO() {}

    public RoleDTO(String authority) {
        this.authority = authority;
    }
    public RoleDTO(Role role) {
        super();
        id = role.getId();
        authority = role.getAuthority();
    }

    public RoleDTO(Long roleId, String authority) {
        this.id = roleId;
        this.authority = authority;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getAuthority() {
        return authority;
    }

    public void setAuthority(String role) {
        this.authority = authority;
    }

}
