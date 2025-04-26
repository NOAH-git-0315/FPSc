package com.FPSc.controller;

import com.FPSc.entity.User;
import com.FPSc.service.UserService;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/users")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/auth")
    public List<User> getUserInfo(@AuthenticationPrincipal OAuth2User principal) {
        Map<String, Object> userAttributes = principal.getAttributes();
        String userId = (String) userAttributes.get("id");
        String username = (String) userAttributes.get("username");
        String useravatar = (String) userAttributes.get("avatar");
        String userGlobalName = (String) userAttributes.get("global_name");

        userService.saveUser(userId, username, useravatar, userGlobalName);
        return userService.getAllUsers();
    }
    @GetMapping("/all")
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }
}

//ログインするエンドポイント
//ログインチェックをして情報を返すエンドポイント
//新規ユーザー順に表示するエンドポイント