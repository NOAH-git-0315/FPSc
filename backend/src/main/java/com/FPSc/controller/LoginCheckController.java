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
    public ResponseEntity<Object> checkAuth(@CookieValue(value = "jwt", required = false) String jwt) {
        if (jwt == null || jwt.isEmpty()) {
            return ResponseEntity.status(204).body(null);
        }
        try {
            UserAuth user = authUtilService.authenticate(jwt);
            return ResponseEntity.ok(user);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(401).body(e.getMessage());
        }
    }
}
