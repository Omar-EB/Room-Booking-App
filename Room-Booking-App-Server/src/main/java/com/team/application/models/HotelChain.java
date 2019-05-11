package com.team.application.models;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "hotelchain")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class HotelChain {
	
	@Id
	private String hc_name;
	private Integer number_of_hotels;
	
    @OneToMany(mappedBy="hotelChain",fetch = FetchType.LAZY)
    @JsonIgnore
    private List<Hotel> hotels = new ArrayList<>();
    //
	
	
	public HotelChain() {}
	
	
	public HotelChain(String hc_name, Integer number_of_hotels) {
		this.hc_name = hc_name;
		this.number_of_hotels = number_of_hotels;
	}


	public String getHc_name() {
		return hc_name;
	}


	public void setHc_name(String hc_name) {
		this.hc_name = hc_name;
	}


	public Integer getNumber_of_hotels() {
		return number_of_hotels;
	}


	public void setNumber_of_hotels(Integer number_of_hotels) {
		this.number_of_hotels = number_of_hotels;
	}


	public List<Hotel> getHotels() {
		return hotels;
	}


	public void setHotels(List<Hotel> hotels) {
		this.hotels = hotels;
	}
	
}
