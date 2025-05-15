package com.FPSc.dto;

import com.FPSc.dto.Purofile.CardOptionDTO;
import com.FPSc.dto.Purofile.OptionDTO;
import com.FPSc.dto.Purofile.UserInfoDTO;

public class ProfilePostRequest {
    private UserInfoDTO userInfo;
    private OptionDTO userOption;
    private CardOptionDTO cardOption;

    public UserInfoDTO getUserInfo() {
        return userInfo;
    }

    public OptionDTO getUserOption() {
        return userOption;
    }

    public CardOptionDTO getCardOption() {
        return cardOption;
    }

    public void setUserInfo(UserInfoDTO userInfo) {
        this.userInfo = userInfo;
    }

    public void setUserOption(OptionDTO userOption) {
        this.userOption = userOption;
    }

    public void setCardOption(CardOptionDTO cardOption) {
        this.cardOption = cardOption;
    }

        @Override
    public String toString() {
        return "ProfilePostRequest{" +
                "userInfo=" + userInfo +
                ", userOption=" + userOption +
                ", cardOption=" + cardOption +
                '}';
    }
}