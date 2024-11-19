package com.projetoFinal.projections;

import org.springframework.beans.factory.annotation.Value;

public interface UserDetailsProjection {
    String getUsername();
    String getPassword();
    @Value("#{target.id}")
    Long getRoleId();
    String getAuthority();
}
