package com.FPSc.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.FPSc.dto.UqResponse;
import com.FPSc.entity.User.Game;
import com.FPSc.entity.User.UserAuth;
import com.FPSc.repository.UserAuthRepository;
import com.FPSc.repository.UserInfoRepository;
import com.FPSc.service.AuthUtilService;

@RestController
public class UserQueryController {

    @Autowired
    private UserAuthRepository userAuthRepository;

    @Autowired
    private UserInfoRepository userInfoRepository;

    @Autowired
    private AuthUtilService authUtilService;

    @GetMapping("/Home")
    public ResponseEntity<?> getUserAuthsByGames(
            @CookieValue("jwt") String jwt,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "15") int size) {
        Pageable pageable = PageRequest.of(page, size);
        try {
            UserAuth user = authUtilService.authenticate(jwt);

            Optional<List<Game>> optionalGames = userInfoRepository.findById(user.getId())
                    .map(userInfo -> userInfo.getGames());

            if (optionalGames.isPresent()) {
                List<Game> games = optionalGames.get();
                Page<UserAuth> userAuthPage = userAuthRepository.findByGenderAndGames(games, pageable);
                UqResponse<UserAuth> pageResponse = new UqResponse<>(
                        userAuthPage.getContent(),
                        userAuthPage.getTotalPages(),
                        userAuthPage.getNumber());
                return new ResponseEntity<>(pageResponse, HttpStatus.OK);
            } else {
                Page<UserAuth> userAuthPage = userAuthRepository.findAllUserInfo(pageable);
                UqResponse<UserAuth> pageResponse = new UqResponse<>(
                        userAuthPage.getContent(),
                        userAuthPage.getTotalPages(),
                        userAuthPage.getNumber());
                return new ResponseEntity<>(pageResponse, HttpStatus.OK);
            }
        } catch (Exception e) {
            Page<UserAuth> userAuthPage = userAuthRepository.findAllUserInfo(pageable);

            UqResponse<UserAuth> pageResponse = new UqResponse<>(
                    userAuthPage.getContent(),
                    userAuthPage.getTotalPages(),
                    userAuthPage.getNumber());
            return new ResponseEntity<>(pageResponse, HttpStatus.OK);
        }
    }
}
