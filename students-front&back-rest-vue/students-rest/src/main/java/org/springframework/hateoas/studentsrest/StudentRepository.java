package org.springframework.hateoas.studentsrest;

import org.springframework.data.repository.CrudRepository;

interface StudentRepository extends CrudRepository<Student, Long> {
}
