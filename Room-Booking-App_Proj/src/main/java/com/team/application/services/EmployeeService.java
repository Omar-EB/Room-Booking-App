package com.team.application.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.team.application.models.Employee;
import com.team.application.repositories.EmployeeRepository;

@Service
public class EmployeeService {
	
	@Autowired
	private EmployeeRepository employeeRepository;
	
	public List<Employee> getAllEmployees(){
		List<Employee> results = new ArrayList();
		employeeRepository.findAll().forEach(results :: add);
		return results;
	}
	
	public List<Employee> findEmployeesbyHotelId(int hotel_id) {
		return employeeRepository.findEmployeesbyHotelId(hotel_id);
	}

}