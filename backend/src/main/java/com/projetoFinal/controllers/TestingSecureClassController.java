package com.projetoFinal.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestingSecureClassController {

    @GetMapping("/secure")
    public String getSecureClass(){
        return "Secure Class";
    }
}
