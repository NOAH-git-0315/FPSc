package com.FPSc.service;

import org.springframework.stereotype.Service;
import com.FPSc.entity.User.UserAuth;
import com.FPSc.repository.CardOptionRepository;
import com.FPSc.repository.UserAuthRepository;
import com.FPSc.repository.UserInfoRepository;
import com.FPSc.repository.UserOptionRepository;

import java.util.List;

@Service
public class UserAuthService {
    private final UserAuthRepository userRepository;


    public UserAuthService(UserAuthRepository userRepository,UserInfoRepository userInfoRepository,UserOptionRepository userOptionRepository,CardOptionRepository cardOptionRepository) {
        this.userRepository = userRepository;
    }

    public void saveUser(String userId, String username, String useravatar, String userGlobalName) {
        UserAuth existingUser = userRepository.findById(userId).orElse(null);

        if (existingUser == null) {
            UserAuth newUser = new UserAuth();
            newUser.setId(userId);
            newUser.setName(username);
            newUser.setAvatar(useravatar);
            newUser.setGlobalName(userGlobalName);
            userRepository.save(newUser);
        }
    }

    public List<UserAuth> getAllUsers() {
        return userRepository.findAll();
    }
}