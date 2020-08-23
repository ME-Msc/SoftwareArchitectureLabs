package org.springframework.hateoas.studentsrest;

import java.util.Collections;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.hateoas.server.core.EvoInflectorLinkRelationProvider;

@SpringBootApplication
public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication app = new SpringApplication(DemoApplication.class);
		app.setDefaultProperties(Collections.singletonMap("server.port", "8083"));
		app.run(args);
	}

	@Bean
	EvoInflectorLinkRelationProvider relProvider() {
		return new EvoInflectorLinkRelationProvider();
	}
}