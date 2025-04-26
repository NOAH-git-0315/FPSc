package com.FPSc.service;

import org.springframework.stereotype.Service;

import com.FPSc.entity.User;
import com.FPSc.repository.UserRepository;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Service
public class UserService {
    private static final Logger logger = LoggerFactory.getLogger(UserService.class);
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public void saveUser(String userId, String username, String useravatar, String userGlobalName) {
        logger.debug("ユーザー情報を保存: userId={}, username={}, avatar={}, globalName={}", userId, username, useravatar, userGlobalName);

        User existingUser = userRepository.findById(userId).orElse(null);
    
        if (existingUser == null) {
            User newUser = new User();
            newUser.setId(userId);
            newUser.setName(username);
            newUser.setAvatar(useravatar);
            newUser.setGlobalName(userGlobalName);
    
            userRepository.save(newUser);
            logger.info("新しいユーザーを保存しました: {}", newUser);
        } else {
            logger.error("ユーザーが既に存在します: {}", userId);
        }
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }
}