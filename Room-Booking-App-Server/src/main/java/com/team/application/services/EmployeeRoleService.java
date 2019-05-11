package com.team.application.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.team.application.models.Employee;
import com.team.application.models.EmployeeRole;
import com.team.application.repositories.EmployeeRoleRepository;
import com.team.application.repositories.EmployeeRoleRepository;

@Service
public class EmployeeRoleService {
	
	@Autowired
	private EmployeeRoleRepository employeeRoleRepository;
	
	public List<EmployeeRole> getEmployeeRolesbyHotelId(Integer hotel_id){
		return employeeRoleRepository.getEmployeeRolesbyHotelId(hotel_id);
	}
	
	public List<EmployeeRole> getEmployeeRolesbySIN(String sin){
		return employeeRoleRepository.getEmployeeRolesbySIN(sin);
	}

}
