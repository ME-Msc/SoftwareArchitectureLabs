package com.example.appnature;

import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Component;

@Component
public class NatureCalculator {

    @Cacheable("nature")
    public double calculateNature(long boundary) {
        double e = 1.0;
        double n = 1.0;
        long i = 1;
        while (i < boundary) {
            e = e + 1 / n;
            ++i;
            n = i * n;
        }
        System.out.println("Natural Logarithm E = " + e);
        return e;
    }
}