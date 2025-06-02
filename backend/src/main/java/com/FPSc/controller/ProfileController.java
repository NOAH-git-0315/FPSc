package com.FPSc.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.FPSc.dto.ProfilePostRequest;
import com.FPSc.entity.User.UserAuth;
import com.FPSc.service.AuthUtilService;
import com.FPSc.service.ProfileService;

@RestController
@RequestMapping("/api/profile")
public class ProfileController {
    private final AuthUtilService authUtilService;
    private final ProfileService profileService;

    public ProfileController(AuthUtilService authUtilService, ProfileService profileService) {
        this.authUtilService = authUtilService;
        this.profileService = profileService;
    }

    @PostMapping("/update")
    public ResponseEntity<?> updateProfile(
            @CookieValue("jwt") String jwt,
            @RequestBody ProfilePostRequest request) {
        try {
            System.out.println("受信した userInfo: " + request.toString());

            UserAuth userAuth = authUtilService.authenticate(jwt);
            profileService.createProfile(userAuth, request);
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
