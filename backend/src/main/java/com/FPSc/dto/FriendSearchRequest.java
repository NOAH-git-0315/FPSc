package com.FPSc.dto;

import java.util.List;

public class FriendSearchRequest {
    private List<String> games;
    private List<String> ranks;
    private List<String> playstyle;
    private List<String> playtime;

    public List<String> getGames() {
        return games;
    }

    public void setGames(List<String> games) {
        this.games = games;
    }

    public List<String> getRanks() {
        return ranks;
    }

    public void setRanks(List<String> ranks) {
        this.ranks = ranks;
    }

    public List<String> getPlaystyle() {
        return playstyle;
    }

    public void setPlaystyle(List<String> playstyle) {
        this.playstyle = playstyle;
    }

    public List<String> getPlaytime() {
        return playtime;
    }

    public void setPlaytime(List<String> playtime) {
        this.playtime = playtime;
    }
}
