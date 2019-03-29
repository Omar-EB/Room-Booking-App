package com.team.application.models;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "HotelChain")
public class HotelChain {
	
	@Id
	private String hc_name;
	private int number_of_hotels;
	
	
	public HotelChain() {}
	
	
	public HotelChain(String hc_name, int number_of_hotels) {
		this.hc_name = hc_name;
		this.number_of_hotels = number_of_hotels;
	}


	public String getHc_name() {
		return hc_name;
	}


	public void setHc_name(String hc_name) {
		this.hc_name = hc_name;
	}


	public int getNumber_of_hotels() {
		return number_of_hotels;
	}


	public void setNumber_of_hotels(int number_of_hotels) {
		this.number_of_hotels = number_of_hotels;
	}
}
