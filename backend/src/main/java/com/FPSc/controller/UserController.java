package com.FPSc.controller;

import com.FPSc.service.JwtService;
import com.FPSc.service.UserService;

import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/users")
public class UserController {

    private final UserService userService;
    private final JwtService jwtService;

    public UserController(UserService userService, JwtService jwtService) {
        this.userService = userService;
        this.jwtService = jwtService;
    }

    @GetMapping("/auth")
    public ResponseEntity<Object> getUserInfo(@AuthenticationPrincipal OAuth2User principal) {
        Map<String, Object> userAttributes = principal.getAttributes();
        String userId = (String) userAttributes.get("id");
        String username = (String) userAttributes.get("username");
        String useravatar = (String) userAttributes.get("avatar");
        String userGlobalName = (String) userAttributes.get("global_name");

        userService.saveUser(userId, username, useravatar, userGlobalName);
        String token = jwtService.generateToken(userId);

        ResponseCookie cookie = ResponseCookie.from("jwt", token)
                .httpOnly(false)
                .secure(false)
                .path("/")
                .maxAge(7 * 24 * 60 * 60)
                .sameSite("Lax")
                .build();
    
        return ResponseEntity
                .status(302)
                .header("Location", "http://localhost:3000/test")
                .header("Set-Cookie", cookie.toString())
                .build();
    }
}