package com.FPSc.security;

import org.springframework.beans.factory.annotation.Value;
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

        @Value("${FRONTEND_URL}")
        private String frontendUrl;

        @SuppressWarnings({ "deprecation", "removal" })
        @Bean
        public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
                http
                                .csrf(csrf -> csrf.disable())
                                .sessionManagement(session -> session
                                                .sessionCreationPolicy(SessionCreationPolicy.IF_REQUIRED)
                                                .maximumSessions(1))
                                .authorizeRequests(auth -> auth
                                                .requestMatchers("/api/login").permitAll()
                                                .requestMatchers("/api/Home").permitAll()
                                                .requestMatchers("/api/error").permitAll()
                                                .requestMatchers(HttpMethod.OPTIONS, "/**").permitAll())
                                .oauth2Login(oauth -> oauth
                                                .defaultSuccessUrl("/api/users/auth", true)
                                                .failureUrl("/login?error"))
                                .headers(headers -> headers
                                                .frameOptions().disable());
                return http.build();
        }

        @Override
        public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**")
                                .allowedOrigins("http://localhost:3000")
                                .allowedMethods("GET", "POST", "PUT", "DELETE")
                                .allowCredentials(true);
        }
}
