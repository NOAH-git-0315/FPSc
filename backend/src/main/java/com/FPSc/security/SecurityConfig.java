package com.FPSc.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@EnableWebSecurity
public class SecurityConfig implements WebMvcConfigurer {

    @SuppressWarnings({ "deprecation", "removal" })
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .csrf(csrf -> csrf.disable())  // CSRFを無効化
            .sessionManagement(session -> 
                session
                    .sessionCreationPolicy(SessionCreationPolicy.IF_REQUIRED)
                    .maximumSessions(1)
            )
            .authorizeRequests(auth -> 
                auth
                    .requestMatchers("/login").permitAll()  // ログインページは許可
                    .requestMatchers("/error").permitAll()  // エラーページは許可
                    .requestMatchers("/h2-console/**").permitAll()  // H2コンソールのアクセスを許可
                    .requestMatchers(HttpMethod.OPTIONS, "/**").permitAll()  // OPTIONSメソッドを許可
            )
            .oauth2Login(oauth -> 
                oauth
                    .defaultSuccessUrl("/users/auth", true)  // 認証成功後のリダイレクト先
                    .failureUrl("/login?error")  // 認証失敗時のリダイレクト先
            )
            .headers(headers -> 
                headers
                    .frameOptions().disable()  // H2コンソールでフレームオプションを無効にする
            );
        return http.build();
    }

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("http://localhost:3000")  // フロントエンドのURLを許可
                .allowedMethods("GET", "POST", "PUT", "DELETE")
                .allowCredentials(true);  // Cookieのやり取りを許可
    }
}
