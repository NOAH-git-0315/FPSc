package com.FPSc.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.FPSc.entity.User.UserInfo;

@Repository
public interface UserInfoRepository extends JpaRepository<UserInfo, String> {
}
