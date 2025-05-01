package com.FPSc.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import io.jsonwebtoken.Claims;
import org.springframework.beans.factory.annotation.Autowired;

import com.FPSc.entity.User;
import com.FPSc.service.JwtService;
import com.FPSc.service.UserService;

@RestController
public class AuthController {

    @Autowired
    private JwtService jwtService;
    
    @Autowired
    private UserService userService;

    @GetMapping("/check")
    public ResponseEntity<Object> checkAuth(@CookieValue("jwt") String jwt) {
        if (jwt == null) {
            return ResponseEntity.status(401).body("認証されてないか、トークンがありません。");
        }
        try {
            Claims claim = jwtService.validateToken(jwt);
            String userId = claim.getSubject();
            
            User user = userService.getUserById(userId);
            if (user == null) {
                return ResponseEntity.status(401).body("ユーザーが見つかりません。");
            }
            return ResponseEntity.ok(user);

        } catch (Exception e) {
            return ResponseEntity.status(401).body("不正なトークンです");
        }
    }
}