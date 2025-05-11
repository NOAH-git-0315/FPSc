package com.FPSc.service;

import org.springframework.stereotype.Service;

import com.FPSc.entity.User.CardOption;
import com.FPSc.entity.User.UserAuth;
import com.FPSc.entity.User.UserInfo;
import com.FPSc.entity.User.UserOption;
import com.FPSc.repository.CardOptionRepository;
import com.FPSc.repository.UserAuthRepository;
import com.FPSc.repository.UserInfoRepository;
import com.FPSc.repository.UserOptionRepository;

import jakarta.transaction.Transactional;

import java.util.List;

@Service
public class UserAuthService {
    private final UserAuthRepository userRepository;
    private final UserInfoRepository userInfoRepository;
    private final UserOptionRepository userOptionRepository;
    private final CardOptionRepository cardOptionRepository;



    
    public UserAuthService(UserAuthRepository userRepository,UserInfoRepository userInfoRepository,UserOptionRepository userOptionRepository,CardOptionRepository cardOptionRepository) {
        this.userRepository = userRepository;
        this.userInfoRepository = userInfoRepository;
        this.userOptionRepository = userOptionRepository;
        this.cardOptionRepository = cardOptionRepository;
    }

    @Transactional
    public void saveUser(String userId, String username, String useravatar, String userGlobalName) {
        UserAuth existingUser = userRepository.findById(userId).orElse(null);

        if (existingUser == null) {
            UserAuth newUser = new UserAuth();
            newUser.setId(userId);
            newUser.setName(username);
            newUser.setAvatar(useravatar);
            newUser.setGlobalName(userGlobalName);

            UserInfo userInfo = new UserInfo();
            userInfo.setUserAuth(newUser);
            userInfoRepository.save(userInfo);

            UserOption userOption = new UserOption();
            userOption.setUserAuth(newUser);
            userOptionRepository.save(userOption);

            CardOption cardOption = new CardOption();
            cardOption.setUserAuth(newUser);
            cardOptionRepository.save(cardOption);

            newUser.setUserInfo(userInfo);
            newUser.setUserOption(userOption);
            newUser.setCardOption(cardOption);
            userRepository.save(newUser);
        }
    }

    public List<UserAuth> getAllUsers() {
        return userRepository.findAll();
    }
}