package com.FPSc.entity.User;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Table(name = "user_auth")
@Entity
public class UserAuth {

    @Id
    private String id;
    private String name;
    private String avatar;
    private String globalName;

    @OneToOne(mappedBy = "userAuth", cascade = CascadeType.REMOVE, orphanRemoval = true)
    private UserInfo userInfo;
    @OneToOne(mappedBy = "userAuth", cascade = CascadeType.REMOVE, orphanRemoval = true)
    private UserOption userOption;
    @OneToOne(mappedBy = "userAuth", cascade = CascadeType.REMOVE, orphanRemoval = true)
    private CardOption cardOption;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAvatar() {
        return avatar;
    }

    public void setAvatar(String avatar) {
        this.avatar = avatar;
    }

    public String getGlobalName() {
        return globalName;
    }

    public void setGlobalName(String globalName) {
        this.globalName = globalName;
    }

    public UserInfo getUserInfo() {
        return userInfo;
    }

    public void setUserInfo(UserInfo userInfo) {
        this.userInfo = userInfo;
    }

    public UserOption getUserOption() {
        return userOption;
    }

    public void setUserOption(UserOption userOption) {
        this.userOption = userOption;
    }

    public CardOption getCardOption() {
        return cardOption;
    }

    public void setCardOption(CardOption cardOption) {
        this.cardOption = cardOption;
    }
}