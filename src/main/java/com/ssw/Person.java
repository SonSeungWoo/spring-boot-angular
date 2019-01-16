package com.ssw;

import lombok.Data;

@Data
public class Person {
    private int age;
    private String name;
    private String country;

    public Person() {
    }

    public Person(int age, String name, String country) {
        this.age = age;
        this.name = name;
        this.country = country;
    }
}
