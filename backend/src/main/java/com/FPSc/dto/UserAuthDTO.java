package com.FPSc.dto;

import com.FPSc.dto.Purofile.UserInfo.GameDTO;
import com.FPSc.entity.User.UserAuth;
import com.FPSc.entity.User.UserInfo;

import java.util.List;
import java.util.stream.Collectors;

public class UserAuthDTO {
    private String id;
    private String name;
    private String avatar;
    private String globalName;

    private List<String> playtime1;
    private List<String> playtime2;
    private List<String> playstyle;
    private String introduction;
    private List<GameDTO> games;

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

    public List<String> getPlaytime1() {
        return playtime1;
    }

    public void setPlaytime1(List<String> playtime1) {
        this.playtime1 = playtime1;
    }

    public List<String> getPlaytime2() {
        return playtime2;
    }

    public void setPlaytime2(List<String> playtime2) {
        this.playtime2 = playtime2;
    }

    public List<String> getPlaystyle() {
        return playstyle;
    }

    public void setPlaystyle(List<String> playstyle) {
        this.playstyle = playstyle;
    }

    public String getIntroduction() {
        return introduction;
    }

    public void setIntroduction(String introduction) {
        this.introduction = introduction;
    }

    public static UserAuthDTO fromEntity(UserAuth userAuth) {
        UserAuthDTO dto = new UserAuthDTO();
        dto.id = userAuth.getId();
        dto.name = userAuth.getName();
        dto.avatar = userAuth.getAvatar();
        dto.globalName = userAuth.getGlobalName();

        UserInfo userInfo = userAuth.getUserInfo();
        if (userInfo != null) {
            dto.playtime1 = userInfo.getPlaytime1();
            dto.playtime2 = userInfo.getPlaytime2();
            dto.playstyle = userInfo.getPlaystyle();
            dto.introduction = userInfo.getIntroduction();

            dto.games = userInfo.getGames().stream()
                    .map(game -> {
                        GameDTO g = new GameDTO();
                        g.setTitle(game.getTitle());
                        g.setRank(game.getRank());
                        return g;
                    })
                    .collect(Collectors.toList());
        }

        return dto;
    }
}