package com.FPSc.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .authorizeHttpRequests(authz -> authz
                .requestMatchers("/login", "/error", "/oauth2/**", "/h2-console/**").permitAll() // H2コンソールとOAuth2認証を許可
                .anyRequest().authenticated() // その他のリクエストは認証を要求
            )
            .oauth2Login(oauth2 -> oauth2
                .loginPage("/login")
                .defaultSuccessUrl("/mypage", true) // 認証成功後に遷移するページ
            )
            .csrf().ignoringRequestMatchers("/h2-console/**") // H2コンソールに対するCSRF保護を無効化
            .and()
            .headers().frameOptions().sameOrigin(); // H2コンソールのフレームオプションを同一オリジンに設定
        return http.build();
    }
}
