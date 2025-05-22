package com.FPSc;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@SpringBootApplication
@EntityScan(basePackages = "com.FPSc.entity")
public class FPScApplication {
	public static void main(String[] args) {
		SpringApplication.run(FPScApplication.class, args);
	}
}