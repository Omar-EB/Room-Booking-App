package com.team.application.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.team.application.models.Customer;
import com.team.application.repositories.CustomerRepository;

@Service
public class CustomerService {
	
	@Autowired
	private CustomerRepository customerRpository;

	public List<Customer> getAllCustomers(){
		List<Customer> results = new ArrayList();
		customerRpository.findAll().forEach(results :: add);
		return results;
	}
	
	public List<Customer> findCustomerbyId(String sin) {
		List<Customer> results = new ArrayList();
		results.add(customerRpository.findById(sin).get());
		return results;
	}
}
