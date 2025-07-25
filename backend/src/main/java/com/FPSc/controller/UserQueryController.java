package com.FPSc.controller;

import org.springframework.data.domain.Page;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.FPSc.dto.UqResponse;
import com.FPSc.entity.User.UserAuth;
import com.FPSc.repository.UserAuthRepository;

@RestController
public class UserQueryController {

    @Autowired
    private UserAuthRepository userAuthRepository;

    @GetMapping("/api/Home")
    public ResponseEntity<?> getUserAuthsByGames(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "15") int size) {
        Pageable pageable = PageRequest.of(page, size);
        Page<UserAuth> userAuthPage = userAuthRepository.findAllUserInfo(pageable);
        UqResponse<UserAuth> pageResponse = new UqResponse<>(
                userAuthPage.getContent(),
                userAuthPage.getTotalPages(),
                userAuthPage.getNumber());
        return new ResponseEntity<>(pageResponse, HttpStatus.OK);
    }
}
