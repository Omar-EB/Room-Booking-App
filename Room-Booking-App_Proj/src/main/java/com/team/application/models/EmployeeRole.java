package com.team.application.models;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.MapsId;
import javax.persistence.Table;

@Entity
@Table(name="employeerole")
public class EmployeeRole {
	
	@EmbeddedId
	EmployeeRoleCompositeKey employee_role_id;
	
	@MapsId("sin")
	@ManyToOne(optional = false)
	@JoinColumn(name = "sin", nullable = false)
	Employee employee;

	public EmployeeRoleCompositeKey getEmployee_role_id() {
		return employee_role_id;
	}

	public void setEmployee_role_id(EmployeeRoleCompositeKey employee_role_id) {
		this.employee_role_id = employee_role_id;
	}

	public Employee getEmployee() {
		return employee;
	}

	public void setEmployee(Employee employee) {
		this.employee = employee;
	}
	
}
