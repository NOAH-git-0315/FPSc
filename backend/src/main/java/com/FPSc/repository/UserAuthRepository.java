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
}