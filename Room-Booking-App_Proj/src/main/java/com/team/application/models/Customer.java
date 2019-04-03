package com.team.application.models;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="customer")
public class Customer {

	@Id
	private String sin;
	
	private String given_name;
	private String family_name;
	
	private String street_name;
    private Integer street_number;
    private String city ;
    private String state ;
    private String country ;
    
    @OneToMany(mappedBy="customer",fetch = FetchType.LAZY)
    @JsonIgnore
    private List<Reservation> reservations = new ArrayList<>();
    
    @Temporal(TemporalType.TIMESTAMP)
    private Date date_of_registration;
    
	public String getSin() {
		return sin;
	}
	public void setSin(String sin) {
		this.sin = sin;
	}
	public String getGiven_name() {
		return given_name;
	}
	public void setGiven_name(String given_name) {
		this.given_name = given_name;
	}
	public String getFamily_name() {
		return family_name;
	}
	public void setFamily_name(String family_name) {
		this.family_name = family_name;
	}
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
	public Date getDate_of_registration() {
		return date_of_registration;
	}
	public void setDate_of_registration(Date date_of_registration) {
		this.date_of_registration = date_of_registration;
	}
	
}

