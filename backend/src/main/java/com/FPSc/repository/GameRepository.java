package com.FPSc.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.FPSc.entity.User.Game;

@Repository
public interface GameRepository extends JpaRepository<Game,Long> {
}
