package com.FPSc.service;

import org.springframework.stereotype.Service;

import com.FPSc.dto.ProfilePostRequest;
import com.FPSc.dto.Purofile.CardOptionDTO;
import com.FPSc.dto.Purofile.OptionDTO;
import com.FPSc.dto.Purofile.UserInfoDTO;
import com.FPSc.entity.User.CardOption;
import com.FPSc.entity.User.Game;
import com.FPSc.entity.User.UserAuth;
import com.FPSc.entity.User.UserInfo;
import com.FPSc.entity.User.UserOption;
import com.FPSc.repository.CardOptionRepository;
import com.FPSc.repository.UserAuthRepository;
import com.FPSc.repository.UserInfoRepository;
import com.FPSc.repository.UserOptionRepository;

@Service
public class ProfileService {
    private final UserAuthRepository userAuthRepository;
    private final UserInfoRepository userInfoRepository;
    private final UserOptionRepository userOptionRepository;
    private final CardOptionRepository cardOptionRepository;

    public ProfileService(UserAuthRepository userAuthRepository, UserInfoRepository userInfoRepository,
            UserOptionRepository userOptionRepository, CardOptionRepository cardOptionRepository) {
        this.userAuthRepository = userAuthRepository;
        this.userInfoRepository = userInfoRepository;
        this.userOptionRepository = userOptionRepository;
        this.cardOptionRepository = cardOptionRepository;
    }

    public void createProfile(UserAuth userAuth, ProfilePostRequest request) {
        UserInfoDTO userInfoDTO = request.getUserInfo();
        OptionDTO optionDTO = request.getUserOption();
        CardOptionDTO cardOptionDTO = request.getCardOption();

        UserInfo userInfo = userInfoRepository.findById(userAuth.getId()).orElseThrow(
                () -> new IllegalArgumentException("UserInfo not found for userAuth id: " + userAuth.getId()));
        userInfo.setUserAuth(userAuth);
        userInfo.setIntroduction(userInfoDTO.getIntroduction());
        userInfo.setPlaytime1(userInfoDTO.getPlaytime1());
        userInfo.setPlaytime2(userInfoDTO.getPlaytime2());
        userInfo.setPlaystyle(userInfoDTO.getPlaystyle());

        userInfo.getGames().clear();
        userInfoDTO.getGames().forEach(gameDTO -> {
            Game game = new Game();
            game.setTitle(gameDTO.getTitle());
            game.setRank(gameDTO.getRank());
            game.setUserInfo(userInfo);
            userInfo.getGames().add(game);
        });

        userInfoRepository.save(userInfo);

        UserOption userOption = userOptionRepository.findById(userAuth.getId()).orElseThrow(
                () -> new IllegalArgumentException("UserOption not found for userAuth id: " + userAuth.getId()));
        userOption.setUserAuth(userAuth);
        userOption.setShowGender(optionDTO.getShowGender());
        userOption.setShowAge(optionDTO.getShowAge());
        userOption.setShowGenderToSameSex(optionDTO.getShowGenderToSameSex());
        userOption.setShowProfile(optionDTO.getShowProfile());
        userOptionRepository.save(userOption);

        CardOption cardOption = cardOptionRepository.findById(userAuth.getId()).orElseThrow(
                () -> new IllegalArgumentException("CardOption not found for userAuth id: " + userAuth.getId()));
        cardOption.setColor(cardOptionDTO.getColor());
        cardOption.setMotion(cardOptionDTO.getMotion());
        cardOptionRepository.save(cardOption);

        userAuth.setUserInfo(userInfo);
        userAuth.setUserOption(userOption);
        userAuth.setCardOption(cardOption);
        userAuthRepository.save(userAuth);
    }
}
