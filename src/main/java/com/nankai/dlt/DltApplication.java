package com.nankai.dlt;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan("com.nankai.dlt.repository")
public class DltApplication {

	public static void main(String[] args) {

		SpringApplication.run(DltApplication.class, args);
	}

}
