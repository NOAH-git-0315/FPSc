package com.FPSc.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.FPSc.entity.User.UserOption;

@Repository
public interface UserOptionRepository extends JpaRepository<UserOption, String> {
}