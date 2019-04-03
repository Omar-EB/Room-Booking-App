package com.team.application.repositories.room;

import org.springframework.data.repository.CrudRepository;

import com.team.application.models.Customer;

public interface CustomerRepository extends CrudRepository<Customer, String> {

}
