package com.FPSc.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.FPSc.dto.ProfilePostRequest;
import com.FPSc.entity.User.UserAuth;
import com.FPSc.service.AuthUtilService;
import com.FPSc.service.ProfileService.CardOptionService;
import com.FPSc.service.ProfileService.UserInfoService;
import com.FPSc.service.ProfileService.UserOptionService;

@RestController
@RequestMapping("/profile")
public class ProfileController {
    private final AuthUtilService authUtilService;
    private final UserInfoService userInfoService;
    private final UserOptionService userOptionService;
    private final CardOptionService cardOptionService;

    public ProfileController(AuthUtilService authUtilService, UserInfoService userInfoService, UserOptionService userOptionService, CardOptionService cardOptionService) {
        this.authUtilService = authUtilService;
        this.userInfoService = userInfoService;
        this.userOptionService = userOptionService;
        this.cardOptionService = cardOptionService;
    }

    @PostMapping("/update")
    public ResponseEntity<?> updateProfile(
        @CookieValue("jwt") String jwt,
        @RequestBody ProfilePostRequest request
    ) {
        try {
            UserAuth userAuth = authUtilService.authenticate(jwt);
            userInfoService.createUserInfo(userAuth, request.getUserInfo());
            userOptionService.createUserOption(userAuth, request.getUserOption());
            cardOptionService.createCardOption(userAuth, request.getCardOption());
            return ResponseEntity.ok("プロフィールが更新されました");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(new ErrorResponse(e.getMessage()));
        }
    }

    public static class ErrorResponse {
        private String message;

        public ErrorResponse(String message) {
            this.message = message;
        }

        public String getMessage() {
            return message;
        }

        public void setMessage(String message) {
            this.message = message;
        }
    }
}
