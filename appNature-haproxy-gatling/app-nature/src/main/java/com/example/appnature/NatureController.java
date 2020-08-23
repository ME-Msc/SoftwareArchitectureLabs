package com.example.appnature;

import javax.servlet.http.HttpSession;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class NatureController {

    private NatureCalculator natureCalculator;

    public NatureController(NatureCalculator natureCalculator) {
        this.natureCalculator = natureCalculator;
    }

    @GetMapping("/login")
    ResponseEntity<Boolean> login(HttpSession session) {
        System.out.println("login " + session.getId());
        session.setAttribute("login", Boolean.TRUE);
        return ResponseEntity.ok(Boolean.TRUE);
    }

    @GetMapping("/nature")
    ResponseEntity<Long> nature(HttpSession session) {
        System.out.println("nature " + session.getId());
        if (session.getAttribute("login") == null || !(boolean) (session.getAttribute("login"))) {
            return new ResponseEntity<Long>(-1L, HttpStatus.UNAUTHORIZED);
        }
        long startTime = System.currentTimeMillis();
        this.natureCalculator.calculateNature(100_000_000);
        long endTime = System.currentTimeMillis();
        return ResponseEntity.ok(Long.valueOf(endTime - startTime));
    }

}