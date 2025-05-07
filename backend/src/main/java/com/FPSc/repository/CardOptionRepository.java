package com.FPSc.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.FPSc.entity.User.CardOption;

@Repository
public interface CardOptionRepository extends JpaRepository<CardOption, String> {
}