package com.FPSc.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RestController;

import com.FPSc.entity.User.UserAuth;
import com.FPSc.repository.UserAuthRepository;
import com.FPSc.service.AuthUtilService;

@RestController
public class DeleteController {
    @Autowired
    private AuthUtilService authUtilService;

    @Autowired
    private UserAuthRepository userAuthRepository;

    DeleteController(AuthUtilService authUtilService, UserAuthRepository userAuthRepository) {
        this.authUtilService = authUtilService;
        this.userAuthRepository = userAuthRepository;
    }

    @DeleteMapping("/delete")
    public void updateLastLogin(@CookieValue("jwt") String jwt) {
        try {
            UserAuth userAuth = authUtilService.authenticate(jwt);
            userAuthRepository.delete(userAuth);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
