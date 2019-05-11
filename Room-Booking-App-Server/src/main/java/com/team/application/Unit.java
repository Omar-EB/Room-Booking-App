package com.team.application;

import javax.persistence.Entity;
import javax.persistence.Id;


@Entity
public class Unit {
	
	@Id
	public int id;
	public String name;
	public double rating;
	
	public Unit() {}
	public Unit(int id, String name, double rating) {
		this.id=id;
		this.name=name;
		this.rating=rating;
	}
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public double getRating() {
		return rating;
	}
	public void setRating(double rating) {
		this.rating = rating;
	}	
	
}
