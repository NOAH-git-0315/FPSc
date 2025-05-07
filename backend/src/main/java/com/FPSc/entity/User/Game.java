package com.FPSc.entity.User;

import jakarta.persistence.*;

@Entity
@Table(name = "game")
public class Game {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String rank;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private UserInfo userInfo;

    public void setUserInfo(UserInfo userInfo){
        this.userInfo = userInfo;
    }

    public void setTitle(String title){
        this.title = title;
    }
    public String getRank() {
        return this.rank;
    }

    public void setRank(String rank){
        this.rank = rank;
    }
    public String getTitle() {
        return this.title;
    }
}
