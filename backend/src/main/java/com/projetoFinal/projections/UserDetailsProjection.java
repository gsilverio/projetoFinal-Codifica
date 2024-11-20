package com.projetoFinal.projections;

import org.springframework.beans.factory.annotation.Value;

public interface UserDetailsProjection {
    String getUsername();
    String getPassword();

    Long getRoleId();
    String getAuthority();
}
