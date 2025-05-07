package com.FPSc.entity.User;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.MapsId;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "user_card_option")
public class CardOption {
    

    @Id
    private String id;

    @OneToOne
    @MapsId
    @JoinColumn(name = "id")
    private UserAuth userAuth;

    private String color;
    private String motion;

    public void setUserAuth(UserAuth userAuth){
        this.userAuth = userAuth;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public String getMotion() {
        return motion;
    }

    public void setMotion(String motion) {
        this.motion = motion;
    }
}
