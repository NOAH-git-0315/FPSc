package com.FPSc.service.ProfileService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.FPSc.dto.Purofile.CardOptionDTO;
import com.FPSc.entity.User.CardOption;
import com.FPSc.entity.User.UserAuth;
import com.FPSc.repository.CardOptionRepository;

@Service
public class CardOptionService {
    
    @Autowired
    private CardOptionRepository cardOptionRepository;

    public void createCardOption(UserAuth userAuth,CardOptionDTO cardOptionDTO){
        CardOption cardOption = cardOptionRepository.findById(userAuth.getId()).orElseThrow(() -> new IllegalArgumentException("CardOption not found for userAuth id: " + userAuth.getId()));
        cardOption.setColor(cardOptionDTO.getColor());
        cardOption.setMotion(cardOptionDTO.getMotion());
        cardOptionRepository.save(cardOption);
    }
}
