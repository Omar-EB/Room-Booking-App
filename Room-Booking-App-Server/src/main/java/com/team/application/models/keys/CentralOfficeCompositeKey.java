package com.team.application.models.keys;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Embeddable;

@Embeddable
public class CentralOfficeCompositeKey implements Serializable {
	private static final long serialVersionUID = 4170464573512963118L;
	
	private String street_name;
    private Integer street_number;
    private String city ;
    private String state ;
    private String country ;
    
	public String getStreet_name() {
		return street_name;
	}
	public void setStreet_name(String street_name) {
		this.street_name = street_name;
	}
	public Integer getStreet_number() {
		return street_number;
	}
	public void setStreet_number(Integer street_number) {
		this.street_number = street_number;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}
}
