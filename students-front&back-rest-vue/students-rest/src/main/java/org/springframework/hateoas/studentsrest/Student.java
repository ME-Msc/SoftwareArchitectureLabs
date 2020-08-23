package org.springframework.hateoas.studentsrest;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Data
@Entity
@NoArgsConstructor(access = AccessLevel.PRIVATE)
@AllArgsConstructor
public class Student {

    @Id
    @GeneratedValue
    private Long number;
    private String name;
    private String gender;
    private String birthDate;
    private String address;
    private String apartment;

}
