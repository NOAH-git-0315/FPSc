package com.FPSc.service.ProfileService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.FPSc.dto.Purofile.UserInfoDTO;
import com.FPSc.entity.User.Game;
import com.FPSc.entity.User.UserAuth;
import com.FPSc.entity.User.UserInfo;
import com.FPSc.repository.UserInfoRepository;

import jakarta.transaction.Transactional;

@Service
public class UserInfoService {

    @Autowired
    private UserInfoRepository userInfoRepository;
    
    @Transactional
    public void createUserInfo(UserAuth userAuth,UserInfoDTO userInfoDTO) {
            UserInfo userInfo = userInfoRepository.findById(userAuth.getId()).orElseThrow(() -> new IllegalArgumentException("CardOption not found for userAuth id: " + userAuth.getId()));
                userInfo.setUserAuth(userAuth); 
                userInfo.setIntroduction(userInfoDTO.getIntroduction());
                userInfo.setPlaytime1(userInfoDTO.getPlaytime1());
                userInfo.setPlaytime2(userInfoDTO.getPlaytime2());
                userInfo.setPlaystyle(userInfoDTO.getPlaystyle());
        
            userInfoDTO.getGames().forEach(gameDTO -> {
                Game game = new Game();
                game.setTitle(gameDTO.getTitle());
                game.setRank(gameDTO.getRank());
                game.setUserInfo(userInfo);
                userInfo.getGames().add(game);
            });
        userInfoRepository.save(userInfo);
        }
    }
