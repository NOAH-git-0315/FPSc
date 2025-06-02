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

    public UserAuth authenticate(String jwt) throws Exception {
        if (jwt == null)
            throw new Exception("トークンがありません");

        Claims claim = jwtService.validateToken(jwt);
        String userId = claim.getSubject();

        UserAuth user = userAuthRepository.findById(userId).orElse(null);
        if (user == null)
            throw new Exception("ユーザーが見つかりません");

        return user;
    }
}