package com.ssw;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class PersonController {

    @GetMapping("/person")
    public Person getPerson(){
        Person person = new Person(30,"ssw","서울");
        return person;
    }

    @GetMapping("/persons")
    public List<Person> getPersonList(){
        List<Person> personList = new ArrayList<>();
        personList.add(new Person(30,"ssw1","서울"));
        personList.add(new Person(31,"ssw2","대전"));
        personList.add(new Person(32,"ssw3","대구"));
        personList.add(new Person(33,"ssw4","부산"));
        return personList;
    }
}
