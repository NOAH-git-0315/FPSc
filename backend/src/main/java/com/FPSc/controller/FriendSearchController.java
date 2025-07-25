package com.FPSc.controller;

import com.FPSc.dto.FriendSearchRequest;
import com.FPSc.entity.User.UserAuth;
import com.FPSc.repository.UserAuthRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.web.bind.annotation.*;
import org.springframework.data.domain.Sort;
import java.util.List;

@RestController
@RequestMapping("/api/friend")
public class FriendSearchController {

  private final UserAuthRepository userAuthRepository;

  public FriendSearchController(UserAuthRepository userAuthRepository) {
    this.userAuthRepository = userAuthRepository;
  }

  private List<String> nullIfEmpty(List<String> list) {
    return (list == null || list.isEmpty()) ? null : list;
  }

  @PostMapping("/search")
  public Page<UserAuth> searchFriends(
      @RequestBody FriendSearchRequest request,
      @PageableDefault(size = 10) Pageable pageable) {
    Pageable sortedPageable = PageRequest.of(
        pageable.getPageNumber(),
        pageable.getPageSize(),
        Sort.by(Sort.Direction.DESC, "userInfo.lastLoginAt"));

    return userAuthRepository.findBySearch(
        nullIfEmpty(request.getGames()),
        nullIfEmpty(request.getRanks()),
        nullIfEmpty(request.getPlaystyle()),
        nullIfEmpty(request.getPlaytime()),
        sortedPageable);
  }
}
