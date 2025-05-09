package com.FPSc.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.FPSc.dto.Purofile.OptionDTO;
import com.FPSc.entity.User.CardOption;
import com.FPSc.entity.User.UserAuth;
import com.FPSc.entity.User.UserOption;
import com.FPSc.repository.CardOptionRepository;
import com.FPSc.repository.UserAuthRepository;
import com.FPSc.repository.UserOptionRepository;

import java.util.Optional;

import javax.annotation.PostConstruct;

@Component
public class TestService {
    private final UserAuthService userService;
    
    @Autowired
    private UserAuthRepository userAuthRepository;

    @Autowired
    private UserOptionRepository userOptionRepository;

    @Autowired
    private CardOptionRepository cardOptionRepository;

    public TestService(UserAuthService userService, ProfileService profileService, UserAuthRepository userAuthRepository, UserOptionRepository userOptionRepository,CardOptionRepository cardOptionRepository) {
        this.userService = userService;
        this.userOptionRepository = userOptionRepository;
        this.cardOptionRepository = cardOptionRepository;
    };

    @PostConstruct
    public void init() {
        TestDB();
    }

    public void TestDB() {
        String[][] testUsers = {
            {"user1", "TestUser1", "https://example.com/avatar1.png", "Global1",},
            {"user2", "TestUser2", "https://example.com/avatar2.png", "Global2"},
            {"user3", "TestUser3", "https://example.com/avatar3.png", "Global3"},
            {"user4", "TestUser4", "https://example.com/avatar4.png", "Global4"},
            {"user5", "TestUser5", "https://example.com/avatar5.png", "Global5"},
            {"user6", "TestUser6", "https://example.com/avatar6.png", "Global6"},
            {"user7", "TestUser7", "https://example.com/avatar7.png", "Global7"},
            {"user8", "TestUser8", "https://example.com/avatar8.png", "Global8"},
            {"user9", "TestUser9", "https://example.com/avatar9.png", "Global9"},
            {"user10", "TestUser10", "https://example.com/avatar10.png", "Global10"},
            {"user11", "TestUser11", "https://example.com/avatar11.png", "Global11"},
            {"user12", "TestUser12", "https://example.com/avatar12.png", "Global12"},
            {"user13", "TestUser13", "https://example.com/avatar13.png", "Global13"},
            {"user14", "TestUser14", "https://example.com/avatar14.png", "Global14"},
            {"user15", "TestUser15", "https://example.com/avatar15.png", "Global15"},
            {"user16", "TestUser16", "https://example.com/avatar16.png", "Global16"},
            {"user17", "TestUser17", "https://example.com/avatar17.png", "Global17"},
            {"user18", "TestUser18", "https://example.com/avatar18.png", "Global18"},
            {"user19", "TestUser19", "https://example.com/avatar19.png", "Global19"},
            {"user20", "TestUser20", "https://example.com/avatar20.png", "Global20"},
            {"user21", "TestUser21", "https://example.com/avatar21.png", "Global21"},
            {"user22", "TestUser22", "https://example.com/avatar22.png", "Global22"},
            {"user23", "TestUser23", "https://example.com/avatar23.png", "Global23"},
            {"user24", "TestUser24", "https://example.com/avatar24.png", "Global24"},
            {"user25", "TestUser25", "https://example.com/avatar25.png", "Global25"},
            {"user26", "TestUser26", "https://example.com/avatar26.png", "Global26"},
            {"user27", "TestUser27", "https://example.com/avatar27.png", "Global27"},
            {"user28", "TestUser28", "https://example.com/avatar28.png", "Global28"},
            {"user29", "TestUser29", "https://example.com/avatar29.png", "Global29"},
            {"user30", "TestUser30", "https://example.com/avatar30.png", "Global30"}
        };

        for (String[] user : testUsers) {
            String userId = user[0];
            String username = user[1];
            String useravatar = user[2];
            String userGlobalName = user[3];
            userService.saveUser(userId, username, useravatar, userGlobalName);

            Optional<UserAuth> userAuth = userAuthRepository.findById(user[0]);

        Optional<UserOption> userOption = userOptionRepository.findById(user[0]);
            userOption.ifPresent(option -> option.setUserAuth(userAuth.orElse(null)));
            userOption.ifPresent(option -> option.setShowGender(true));
            userOption.ifPresent(option -> option.setShowAge(true));  
            userOption.ifPresent(option -> option.setShowGenderToSameSex(true));  
            userOption.ifPresent(option -> option.setShowProfile(true)); 
            userOptionRepository.save(userOption.orElse(null));

        CardOption cardOption = cardOptionRepository.findById(user[0]).orElseThrow(() -> new IllegalArgumentException("CardOption not found for userAuth id: "));
            cardOption.setColor("black");
            cardOption.setMotion(null);
            cardOptionRepository.save(cardOption);   
        }
    }
}

//userInfoが未設定です。後で設定するの忘れないでね！