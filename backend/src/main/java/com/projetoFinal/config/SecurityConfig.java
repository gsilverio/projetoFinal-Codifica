package com.projetoFinal.config;

import org.springframework.boot.autoconfigure.security.servlet.PathRequest;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.core.annotation.Order;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {


//    @Bean
//    public PasswordEncoder getPasswordEncoder(){
//        return new BCryptPasswordEncoder();
//    }
//
//    @Bean
//    @Profile("default")
//    @Order(1)
//    public SecurityFilterChain h2SecurityFilterChain(HttpSecurity http) throws Exception{
//        http.securityMatcher(PathRequest.toH2Console()).csrf(csrf->csrf.disable())
//                .headers(headers->headers.frameOptions(frameOptionsConfig -> frameOptionsConfig.disable()));
//        return http.build();
//    }
//
//    @Bean
//    @Order(2)
//    public SecurityFilterChain defaultSecurityFilterChain(HttpSecurity http) throws Exception {
//        http.csrf(csrf->csrf.disable());
//        http.authorizeHttpRequests((requests) -> requests.anyRequest().permitAll()
//        );
//
//        return http.build();
//    }

//
//    @Bean
//    public UserDetailsService userDetailsService(){
//       UserDetails user = User.withUsername("user").password("{noop}UseR_@12345").authorities("read").build();
//       UserDetails admin = User.withUsername("admin").password("{bcrypt}$2a$12$kIWBj1W6Y/8G0b30Y4sW7ONP6oNZLeI77dcVeBfVYfBoAqoVN6Hb6").authorities("admin").build();
//       return new InMemoryUserDetailsManager(user, admin);
//    }
//
//    @Bean
//    public PasswordEncoder passwordEncoder(){
//        return PasswordEncoderFactories.createDelegatingPasswordEncoder();
//    }
//
//    @Bean
//    public CompromisedPasswordChecker compromisedPasswordChecker(){
//        return new HaveIBeenPwnedRestApiPasswordChecker();
//    }
}
