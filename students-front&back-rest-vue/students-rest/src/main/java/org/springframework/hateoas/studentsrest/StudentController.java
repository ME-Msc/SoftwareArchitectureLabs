package org.springframework.hateoas.studentsrest;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

import org.springframework.hateoas.CollectionModel;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.IanaLinkRelations;
import org.springframework.hateoas.Link;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
class StudentController {

    private final StudentRepository repository;

    StudentController(StudentRepository repository) {
        this.repository = repository;
    }

    /**
     * Look up all students, and transform them into a REST collection resource.
     * Then return them through Spring Web's {@link ResponseEntity} fluent API.
     */
    @GetMapping("/students")
    ResponseEntity<CollectionModel<EntityModel<Student>>> findAll() {
        System.out.println("GetMapping /students");

        List<EntityModel<Student>> students = StreamSupport.stream(repository.findAll().spliterator(), false)
                .map(student -> new EntityModel<>(student, //
                        linkTo(methodOn(StudentController.class).findOne(student.getNumber())).withSelfRel(), //
                        linkTo(methodOn(StudentController.class).findAll()).withRel("students"))) //
                .collect(Collectors.toList());

        return ResponseEntity.ok( //
                new CollectionModel<>(students, //
                        linkTo(methodOn(StudentController.class).findAll()).withSelfRel()));
    }

    @PostMapping("/students")
    ResponseEntity<?> newStudent(@RequestBody Student student) {
        System.out.println("PostMapping /students");

        try {

            Student savedStudent = repository.save(student);

            EntityModel<Student> studentResource = new EntityModel<>(savedStudent, //
                    linkTo(methodOn(StudentController.class).findOne(savedStudent.getNumber())).withSelfRel());

            return ResponseEntity //
                    .created(new URI(studentResource.getRequiredLink(IanaLinkRelations.SELF).getHref())) //
                    .body(studentResource);
        } catch (URISyntaxException e) {
            return ResponseEntity.badRequest().body("Unable to create " + student);
        }
    }

    /**
     * Look up a single {@link Student} and transform it into a REST resource. Then
     * return it through Spring Web's {@link ResponseEntity} fluent API.
     *
     * @param number
     */
    @GetMapping("/students/{number}")
    ResponseEntity<EntityModel<Student>> findOne(@PathVariable long number) {
        System.out.println("GetMapping /students/" + number);

        return repository.findById(number) //
                .map(student -> new EntityModel<>(student, //
                        linkTo(methodOn(StudentController.class).findOne(student.getNumber())).withSelfRel(), //
                        linkTo(methodOn(StudentController.class).findAll()).withRel("students"))) //
                .map(ResponseEntity::ok) //
                .orElse(ResponseEntity.notFound().build());
    }

    /**
     * Update existing student then return a Location header.
     * 
     * @param student
     * @param number
     * @return
     */
    @PutMapping("/students/{number}")
    ResponseEntity<?> updateStudent(@RequestBody Student student, @PathVariable long number) {
        System.out.println("PutMapping /students/" + number);

        Student studentToUpdate = student;
        studentToUpdate.setNumber(number);
        repository.save(studentToUpdate);

        Link newlyCreatedLink = linkTo(methodOn(StudentController.class).findOne(number)).withSelfRel();

        try {
            return ResponseEntity.noContent().location(new URI(newlyCreatedLink.getHref())).build();
        } catch (URISyntaxException e) {
            return ResponseEntity.badRequest().body("Unable to update " + studentToUpdate);
        }
    }

    @DeleteMapping("/students/{number}")
    ResponseEntity<?> deleteStudent(@PathVariable long number) {
        System.out.println("DeleteMapping /students/" + number);
        Link newlyLink = linkTo(methodOn(StudentController.class).findAll()).withRel("students");
        try {
            repository.deleteById(number);
            return ResponseEntity.noContent().location(new URI(newlyLink.getHref())).build();
        } catch (URISyntaxException e) {
            return ResponseEntity.badRequest().body("Unable to delete " + number);
        }
    }

}
