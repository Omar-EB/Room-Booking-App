package com.team.application.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.team.application.models.EmployeeRole;

public interface EmployeeRoleRepository extends CrudRepository<EmployeeRole, Integer> {
	
	@Query("SELECT er FROM EmployeeRole er WHERE er.employee.hotel.hotel_id = :hotel_id")
	public List<EmployeeRole> getEmployeeRolesbyHotelId(@Param("hotel_id") int hotel_id);
	
	@Query("SELECT er FROM EmployeeRole er WHERE er.employee.sin = :sin")
	public List<EmployeeRole> getEmployeeRolesbySIN(@Param("sin") String sin);

}
