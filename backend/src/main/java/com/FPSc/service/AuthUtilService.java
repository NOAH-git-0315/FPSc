package com.FPSc.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.FPSc.entity.User.UserAuth;
import com.FPSc.repository.UserAuthRepository;

import io.jsonwebtoken.Claims;

@Service
public class AuthUtilService {

    @Autowired
    private JwtService jwtService;

    @Autowired
    private UserAuthRepository userAuthRepository;

    public UserAuth authenticate(String jwt) {
        if (jwt == null) {
            throw new IllegalArgumentException("トークンがありません");
        }
        try {
            Claims claim = jwtService.validateToken(jwt);
            String userId = claim.getSubject();

            return userAuthRepository.findById(userId)
                    .orElseThrow(() -> new RuntimeException("ユーザーが見つかりません"));
        } catch (Exception e) {
            throw new RuntimeException("トークンの検証に失敗しました", e);
        }
    }
}