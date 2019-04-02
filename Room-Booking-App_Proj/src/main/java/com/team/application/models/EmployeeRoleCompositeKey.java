package com.team.application.models;

import java.io.Serializable;

import javax.persistence.Embeddable;

@Embeddable
public class EmployeeRoleCompositeKey implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	private String sin;
	private String role;
	
	public String getSin() {
		return sin;
	}
	public void setSin(String sin) {
		this.sin = sin;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}

}
