package com.team.application.repositories;

import org.springframework.data.repository.CrudRepository;

import com.team.application.models.Employee;

public interface EmployeeRepository extends CrudRepository<Employee, Integer> {

}
