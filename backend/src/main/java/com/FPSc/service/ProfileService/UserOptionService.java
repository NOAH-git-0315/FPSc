package com.FPSc.service.ProfileService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.FPSc.dto.Purofile.OptionDTO;
import com.FPSc.entity.User.UserAuth;
import com.FPSc.entity.User.UserOption;
import com.FPSc.repository.UserOptionRepository;

@Service
public class UserOptionService {
    @Autowired
    private UserOptionRepository userOptionRepository;

    public void createUserOption(UserAuth userAuth,OptionDTO OptionDTO){
        UserOption userOption = userOptionRepository.findById(userAuth.getId()).orElseThrow(() -> new IllegalArgumentException("CardOption not found for userAuth id: " + userAuth.getId()));
        userOption.setUserAuth(userAuth);
        userOption.setShowGender(OptionDTO.getShowGender());
        userOption.setShowAge(OptionDTO.getShowAge());  
        userOption.setShowGenderToSameSex(OptionDTO.getShowGenderToSameSex());  
        userOption.setShowProfile(OptionDTO.getShowProfile()); 
        userOptionRepository.save(userOption);
    }
}
