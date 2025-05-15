package com.FPSc.entity.User;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.CollectionTable;
import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.MapsId;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Table(name = "user_info")
@Entity
public class UserInfo {

    @Id
    private String id;

    @OneToOne
    @MapsId
    @JoinColumn(name = "id")
    private UserAuth userAuth;

    @OneToMany(mappedBy = "userInfo", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Game> games = new ArrayList<>();

    @ElementCollection
    @CollectionTable(name = "user_playtime1", joinColumns = @JoinColumn(name = "user_id"))
    @Column(name = "time_slot")
    private List<String> playtime1 = new ArrayList<>();

    @ElementCollection
    @CollectionTable(name = "user_playtime2", joinColumns = @JoinColumn(name = "user_id"))
    @Column(name = "preferred_slot")
    private List<String> playtime2 = new ArrayList<>();

    @ElementCollection
    @CollectionTable(name = "user_playstyle", joinColumns = @JoinColumn(name = "user_id"))
    @Column(name = "style")
    private List<String> playStyle = new ArrayList<>();

    private String introduction;

    public void setUserAuth(UserAuth userAuth) {
        this.userAuth = userAuth;
    }

    public List<Game> getGames() {
        return games;
    }

    public String getIntroduction() {
        return introduction;
    }

    public void setIntroduction(String introduction) {
        this.introduction = introduction;
    }

    public void setPlaytime1(List<String> playtime1) {
        this.playtime1 = playtime1;
    }

    public void setPlaytime2(List<String> playtime2) {
        this.playtime2 = playtime2;
    }

    public void setPlaystyle(List<String> playStyle) {
        this.playStyle = playStyle;
    }

    public List<String> getPlaytime1() {
        return playtime1;
    }

    public List<String> getPlaytime2() {
        return playtime2;
    }

    public List<String> getPlaystyle() {
        return playStyle;
    }
}
