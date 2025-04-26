package com.FPSc.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@EnableWebSecurity
public class SecurityConfig implements WebMvcConfigurer {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .csrf(csrf -> csrf.disable())  // CSRF無効化
            .sessionManagement(session -> 
                session
                    .sessionCreationPolicy(SessionCreationPolicy.IF_REQUIRED)  // セッションは必要に応じて作成
            )
            .authorizeRequests(auth -> 
                auth
                    .requestMatchers("/users/all").permitAll()  // 認証なしで許可
                    .requestMatchers("/login").permitAll()  // /loginも認証なしで許可
                    .requestMatchers("/error").permitAll()  // エラーページも認証なしで許可
                    .anyRequest().authenticated()  // その他は認証が必要
            )
            .oauth2Login()  // OAuth2ログインを有効にする
            .defaultSuccessUrl("/home", true)  // 認証成功後にリダイレクトされるURL
            .failureUrl("/login?error");  // 認証失敗時にリダイレクトされるURL

        return http.build();
    }

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("http://localhost:3000")  // フロントエンドのURL
                .allowedMethods("GET", "POST", "PUT", "DELETE")
                .allowCredentials(false);  // クレデンシャル許可
    }
}
