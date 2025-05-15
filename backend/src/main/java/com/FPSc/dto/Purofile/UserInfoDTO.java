package com.FPSc.dto.Purofile;

import java.util.List;

import com.FPSc.dto.Purofile.UserInfo.GameDTO;

public class UserInfoDTO {
    private List<GameDTO> games;
    private List<String> playtime1;
    private List<String> playtime2;
    private List<String> playstyle;
    private String introduction;

// --- Getter ---
    public List<GameDTO> getGames() {
        return games;
    }

    public List<String> getPlaytime1() {
        return playtime1;
    }

    public List<String> getPlaytime2() {
        return playtime2;
    }

    public List<String> getPlaystyle() {
        return playstyle;
    }

    public String getIntroduction() {
        return introduction;
    }

    // --- Setter ---
    public void setGames(List<GameDTO> games) {
        this.games = games;
    }

    public void setPlaytime1(List<String> playtime1) {
        this.playtime1 = playtime1;
    }

    public void setPlaytime2(List<String> playtime2) {
        this.playtime2 = playtime2;
    }

    public void setPlaystyle(List<String> playstyle) {
        this.playstyle = playstyle;
    }

    public void setIntroduction(String introduction) {
        this.introduction = introduction;
    }

    @Override
public String toString() {
    return "UserInfoDTO{" +
            "games=" + games +
            ", playtime1=" + playtime1 +
            ", playtime2=" + playtime2 +
            ", playstyle=" + playstyle +
            ", introduction='" + introduction + '\'' +
            '}';
}
}