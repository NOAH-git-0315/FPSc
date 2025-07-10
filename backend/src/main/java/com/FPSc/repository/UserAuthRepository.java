package com.FPSc.repository;

import java.util.List;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.FPSc.entity.User.Game;
import com.FPSc.entity.User.UserAuth;

@Repository
public interface UserAuthRepository extends JpaRepository<UserAuth, String> {

  @Query("""
      SELECT DISTINCT ua FROM UserAuth ua
      JOIN ua.userOption uo
      JOIN ua.userInfo ui
      JOIN ui.games g
      WHERE uo.showProfile = true
        AND ui.introduction IS NOT NULL
        AND g IN :games
        ORDER BY ua.id
      """)
  Page<UserAuth> findByGenderAndGames(@Param("games") List<Game> games, Pageable pageable);

  @Query("""
        SELECT DISTINCT ua FROM UserAuth ua
        JOIN ua.userOption uo
        JOIN ua.userInfo ui
        LEFT JOIN ui.games g
        WHERE uo.showProfile = true
        AND ui.introduction IS NOT NULL
        ORDER BY ua.id
      """)
  Page<UserAuth> findAllUserInfo(Pageable pageable);

  @Query("""
          SELECT ua FROM UserAuth ua
          JOIN ua.userOption uo
          JOIN ua.userInfo ui
          LEFT JOIN ui.games g
          WHERE uo.showProfile = true
            AND (:games IS NULL OR g.title IN :games)
            AND (:ranks IS NULL OR g.userRank IN :ranks)
            AND (:playstyle IS NULL OR EXISTS (
              SELECT ps FROM UserInfo uips JOIN uips.playStyle ps
              WHERE uips = ui AND ps IN :playstyle
            ))
            AND (
              :playtime IS NULL
              OR EXISTS (
                SELECT pt1 FROM UserInfo uipt1 JOIN uipt1.playtime1 pt1
                WHERE uipt1 = ui AND pt1 IN :playtime
              )
              OR EXISTS (
                SELECT pt2 FROM UserInfo uipt2 JOIN uipt2.playtime2 pt2
                WHERE uipt2 = ui AND pt2 IN :playtime
              )
            )
          GROUP BY ua.id
      """)
  Page<UserAuth> findBySearch(
      @Param("games") List<String> games,
      @Param("ranks") List<String> ranks,
      @Param("playstyle") List<String> playstyle,
      @Param("playtime") List<String> playtime,
      Pageable pageable);

}