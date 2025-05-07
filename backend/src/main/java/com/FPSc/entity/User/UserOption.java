package com.FPSc.entity.User;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.MapsId;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "user_option")
public class UserOption {


    @Id
    private String id;

    @OneToOne
    @MapsId
    @JoinColumn(name = "id")
    private UserAuth userAuth;

    private boolean showGender;
    private boolean showAge;
    private boolean showGenderToSameSex;
    private boolean showProfile;

    public void setUserAuth(UserAuth userAuth){
        this.userAuth = userAuth;
    }

    public boolean getShowGender() {
        return showGender;
    }

    public void setShowGender(boolean showGender) {
        this.showGender = showGender;
    }

    public boolean getShowAge() {
        return showAge;
    }

    public void setShowAge(boolean showAge) {
        this.showAge = showAge;
    }

    public boolean getShowGenderToSameSex() {
        return showGenderToSameSex;
    }

    public void setShowGenderToSameSex(boolean showGenderToSameSex) {
        this.showGenderToSameSex = showGenderToSameSex;
    }

    public boolean getShowProfile() {
        return showProfile;
    }

    public void setShowProfile(boolean showProfile) {
        this.showProfile = showProfile;
    }
}
