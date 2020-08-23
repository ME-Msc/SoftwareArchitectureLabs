package org.springframework.hateoas.studentsrest;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;

@Component
class DatabaseLoader {

    /**
     * Use Spring to inject a {@link EmployeeRepository} that can then load data.
     * Since this will run only after the app is operational, the database will be
     * up.
     *
     * @param repository
     */
    @Bean
    CommandLineRunner init(StudentRepository repository) {

        return args -> {
            repository.save(new Student((long) 1, "Cai Yue", "Female", "1998/01/01", "HangZhou", "Math"));
            repository.save(new Student((long) 2, "Wei Xin", "Female", "1998/02/01", "ShaoXing", "Chinese"));
        };
    }

}