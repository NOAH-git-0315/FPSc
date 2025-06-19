package com.FPSc.controller;

import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.RestController;

import com.FPSc.entity.User.UserAuth;
import com.FPSc.entity.User.UserInfo;
import com.FPSc.repository.UserInfoRepository;
import com.FPSc.service.AuthUtilService;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
public class LastLoginController {

    @Autowired
    private UserInfoRepository userInfoRepository;

    @Autowired
    private AuthUtilService authUtilService;

    @GetMapping("api/last-login")
    public String updateLastLogin(@CookieValue("jwt") String jwt) {
        try {
            UserAuth userAuth = authUtilService.authenticate(jwt);
            UserInfo userInfo = userInfoRepository.findById(userAuth.getId())
                    .orElseThrow(() -> new IllegalArgumentException(
                            "UserInfo not found for userAuth id: " + userAuth.getId()));
            userInfo.setLastLoginAt(LocalDateTime.now());
            userInfoRepository.save(userInfo);
            return "プロフィールの表示順位をアップしました";
        } catch (Exception e) {
            e.printStackTrace();
            return "予期せぬエラーが発生しました";
        }
    }
}
