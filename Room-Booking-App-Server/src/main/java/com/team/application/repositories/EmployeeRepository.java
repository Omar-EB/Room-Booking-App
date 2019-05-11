package com.team.application.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.team.application.models.Employee;

public interface EmployeeRepository extends CrudRepository<Employee, String> {
	
	@Query("SELECT e FROM Employee e WHERE e.hotel.hotel_id = :hotel_id")
	public List<Employee> findEmployeesbyHotelId(@Param("hotel_id") Integer hotel_id);
	
	@Query("SELECT e.hotel.hotel_id FROM Employee e WHERE e.sin = :employee_sin")
    public Integer findHotelId(@Param("employee_sin") String employee_sin);

}
