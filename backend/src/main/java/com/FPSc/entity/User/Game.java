package com.FPSc.entity.User;

import jakarta.persistence.*;

@Entity
@Table(name = "user_game")
public class Game {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String userRank;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private UserInfo userInfo;

    public void setUserInfo(UserInfo userInfo) {
        this.userInfo = userInfo;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getRank() {
        return this.userRank;
    }

    public void setRank(String rank) {
        this.userRank = rank;
    }

    public String getTitle() {
        return this.title;
    }
}
