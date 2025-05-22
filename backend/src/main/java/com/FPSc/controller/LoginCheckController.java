package com.FPSc.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.beans.factory.annotation.Autowired;

import com.FPSc.entity.User.UserAuth;
import com.FPSc.service.AuthUtilService;

@RestController
public class LoginCheckController {

    @Autowired
    private AuthUtilService authUtilService;

    @GetMapping("/api/check")
    public ResponseEntity<Object> checkAuth(@CookieValue("jwt") String jwt) {
        try {
            UserAuth user = authUtilService.authenticate(jwt);
            return ResponseEntity.ok(user);
        } catch (Exception e) {
            return ResponseEntity.status(401).body(e.getMessage());
        }
    }
}
