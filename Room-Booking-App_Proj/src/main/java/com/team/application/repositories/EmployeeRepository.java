package com.team.application.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.team.application.models.Employee;

public interface EmployeeRepository extends CrudRepository<Employee, Integer> {
	
	@Query("SELECT e FROM Employee e WHERE e.hotel.hotel_id = :hotel_id")
	public List<Employee> findEmployeesbyHotelId(@Param("hotel_id") int hotel_id);

}
