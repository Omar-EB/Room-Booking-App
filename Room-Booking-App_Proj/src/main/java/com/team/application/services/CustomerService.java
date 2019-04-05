package com.team.application.services;

import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.team.application.models.Customer;
import com.team.application.repositories.CustomerRepository;

@Service
public class CustomerService {
	
	@Autowired
	private CustomerRepository customerRepository;

	public List<Customer> getAllCustomers(){
		List<Customer> results = new ArrayList();
		customerRepository.findAll().forEach(results :: add);
		return results;
	}
	
	public List<Customer> findCustomerbyId(String sin) {
		try {
			List<Customer> results = new ArrayList();
			results.add(customerRepository.findById(sin).get());
			return results;
		} catch (NoSuchElementException exception) {
			return new ArrayList<Customer>();
		}
	}
	
	public Customer addCustomer(Customer customer) {
		return customerRepository.save(customer);
	}
}
