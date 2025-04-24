package com.FPSc.controller;

import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.FPSc.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.Map;

@RestController
public class UserController {
    private final UserService userService;
    private static final Logger logger = LoggerFactory.getLogger(UserController.class);  // Loggerインスタンスの追加

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/login/oauth2/code/discord")
    public String getUserInfo(@AuthenticationPrincipal OAuth2User principal) {
        
        Map<String, Object> userAttributes = principal.getAttributes();
        String userId = (String) userAttributes.get("id");
        String username = (String) userAttributes.get("username");
        String useravatar = (String) userAttributes.get("avatar");
        String userGlobalName = (String) userAttributes.get("global_name");

        userService.saveUser(userId, username, useravatar, userGlobalName);
        System.out.println("ログインユーザー情報: " + principal.getAttributes());
        return "good morning";
    }

    @GetMapping("/mypage")
    public String myPage(@AuthenticationPrincipal OAuth2User principal) {
        return "ようこそ " + principal.getAttribute("username") + " さん";
    }
}
