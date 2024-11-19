package com.projetoFinal.controllers;


import org.apache.coyote.Response;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestingNotSecureClassController {

    @GetMapping("/not_secure")
    public String getSecureClass(){
        return "Not secure Class";
    }

}
